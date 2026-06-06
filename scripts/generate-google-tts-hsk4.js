#!/usr/bin/env node
/*
 * Regenerate June HSK4 (Band 4) Mandarin audio with Google Cloud Text-to-Speech.
 *
 * Required auth, one of:
 *   GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
 *   GOOGLE_OAUTH_ACCESS_TOKEN=ya29...
 *
 * Optional:
 *   GOOGLE_TTS_VOICE=cmn-CN-Wavenet-D
 *   GOOGLE_TTS_SPEAKING_RATE=0.8
 *
 * Usage:
 *   node scripts/generate-google-tts-hsk4.js
 */

const crypto = require('node:crypto');
const fs = require('node:fs/promises');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const WORDS_FILE = path.join(ROOT, 'refs', 'band4-words.js');
const OUT_DIR = path.join(ROOT, 'audio', 'june', 'hsk4');
const TMP_DIR = path.join(ROOT, 'audio', 'june', `.hsk4-google-tmp-${Date.now()}`);
const SYNTH_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SCOPE = 'https://www.googleapis.com/auth/cloud-platform';
const DEFAULT_VOICE = process.env.GOOGLE_TTS_VOICE || 'cmn-CN-Wavenet-D';
const FALLBACK_VOICE = 'cmn-CN-Chirp3-HD-Kore';
const DEFAULT_SPEAKING_RATE = 0.8;

function getSpeakingRate() {
    const value = process.env.GOOGLE_TTS_SPEAKING_RATE || String(DEFAULT_SPEAKING_RATE);
    const rate = Number(value);
    if (!Number.isFinite(rate) || rate < 0.25 || rate > 2.0) {
        throw new Error('GOOGLE_TTS_SPEAKING_RATE must be a number from 0.25 to 2.0.');
    }
    return rate;
}

function base64url(input) {
    return Buffer.from(input)
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

function signJwt(serviceAccount) {
    const now = Math.floor(Date.now() / 1000);
    const header = { alg: 'RS256', typ: 'JWT' };
    const claim = {
        iss: serviceAccount.client_email,
        scope: SCOPE,
        aud: serviceAccount.token_uri || TOKEN_URL,
        exp: now + 3600,
        iat: now,
    };
    const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claim))}`;
    const signature = crypto
        .createSign('RSA-SHA256')
        .update(unsigned)
        .sign(serviceAccount.private_key, 'base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    return `${unsigned}.${signature}`;
}

async function getAccessToken() {
    if (process.env.GOOGLE_OAUTH_ACCESS_TOKEN) return process.env.GOOGLE_OAUTH_ACCESS_TOKEN;

    const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (!credentialsPath) {
        throw new Error('Set GOOGLE_APPLICATION_CREDENTIALS or GOOGLE_OAUTH_ACCESS_TOKEN before running this script.');
    }

    const raw = await fs.readFile(credentialsPath, 'utf8');
    const serviceAccount = JSON.parse(raw);
    if (serviceAccount.type !== 'service_account' || !serviceAccount.client_email || !serviceAccount.private_key) {
        throw new Error('GOOGLE_APPLICATION_CREDENTIALS must point to a service-account JSON file.');
    }

    const assertion = signJwt(serviceAccount);
    const body = new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion,
    });

    const response = await fetch(serviceAccount.token_uri || TOKEN_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body,
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Token request failed (${response.status}): ${text}`);
    }

    const data = await response.json();
    return data.access_token;
}

async function loadBand4Words() {
    const src = await fs.readFile(WORDS_FILE, 'utf8');
    const sandbox = { window: {} };
    vm.runInNewContext(src, sandbox, { filename: WORDS_FILE });
    return sandbox.window.BAND4_WORDS.map((word, index) => ({
        number: String(index + 1).padStart(4, '0'),
        hanzi: word[0],
    }));
}

async function synthesize({ accessToken, text, voiceName, speakingRate }) {
    const response = await fetch(SYNTH_URL, {
        method: 'POST',
        headers: {
            authorization: `Bearer ${accessToken}`,
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            input: { text },
            voice: {
                languageCode: 'cmn-CN',
                name: voiceName,
            },
            audioConfig: {
                audioEncoding: 'MP3',
                speakingRate,
            },
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Synthesis failed for ${voiceName} (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    return Buffer.from(data.audioContent, 'base64');
}

async function synthesizeWithFallback(options) {
    try {
        return {
            voiceName: DEFAULT_VOICE,
            audio: await synthesize({ ...options, voiceName: DEFAULT_VOICE }),
        };
    } catch (error) {
        if (DEFAULT_VOICE === FALLBACK_VOICE) throw error;
        console.warn(`Falling back to ${FALLBACK_VOICE}: ${error.message}`);
        return {
            voiceName: FALLBACK_VOICE,
            audio: await synthesize({ ...options, voiceName: FALLBACK_VOICE }),
        };
    }
}

async function main() {
    const words = await loadBand4Words();
    const speakingRate = getSpeakingRate();
    const accessToken = await getAccessToken();

    await fs.mkdir(TMP_DIR, { recursive: true });
    let selectedVoice = null;

    try {
        for (const word of words) {
            const { voiceName, audio } = await synthesizeWithFallback({
                accessToken,
                text: word.hanzi,
                speakingRate,
            });
            selectedVoice = voiceName;
            const out = path.join(TMP_DIR, `${word.number}.mp3`);
            await fs.writeFile(out, audio);
            console.log(`${word.number}.mp3 ${word.hanzi} (${voiceName}, rate ${speakingRate})`);
        }

        await fs.mkdir(OUT_DIR, { recursive: true });
        for (const word of words) {
            await fs.rename(
                path.join(TMP_DIR, `${word.number}.mp3`),
                path.join(OUT_DIR, `${word.number}.mp3`)
            );
        }
        await fs.rm(TMP_DIR, { recursive: true, force: true });
        console.log(`Regenerated ${words.length} files in ${path.relative(ROOT, OUT_DIR)} with ${selectedVoice} at rate ${speakingRate}.`);
    } catch (error) {
        await fs.rm(TMP_DIR, { recursive: true, force: true });
        throw error;
    }
}

main().catch((error) => {
    console.error(error.message);
    process.exit(1);
});
