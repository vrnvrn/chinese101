// Per-character definitions for HSK 1 vocabulary.
// Used by flashcards to show a breakdown of each character when a word has 2+ chars.
// { py, en }, Mandarin pinyin and a short English gloss.
(function () {
  const C = {
    // Pronouns
    "你": { py: "nǐ", en: "you" },
    "您": { py: "nín", en: "you (polite)" },
    "我": { py: "wǒ", en: "I, me" },
    "他": { py: "tā", en: "he, him" },
    "她": { py: "tā", en: "she, her" },
    "它": { py: "tā", en: "it" },
    "们": { py: "men", en: "plural marker (people)" },
    "这": { py: "zhè", en: "this" },
    "那": { py: "nà", en: "that" },
    "哪": { py: "nǎ", en: "which" },
    "什": { py: "shén", en: "what (bound)" },
    "么": { py: "me", en: "interrog. suffix" },
    "谁": { py: "shéi", en: "who" },
    "大": { py: "dà", en: "big" },
    "家": { py: "jiā", en: "home, family" },
    "些": { py: "xiē", en: "some, several" },
    "几": { py: "jǐ", en: "how many" },
    "多": { py: "duō", en: "many, much" },
    "少": { py: "shǎo", en: "few, little" },
    "怎": { py: "zěn", en: "how (bound)" },
    "样": { py: "yàng", en: "manner, kind" },
    "里": { py: "lǐ", en: "inside" },
    "边": { py: "biān", en: "side" },
    "儿": { py: "ér", en: "child / -er suffix" },

    // Greetings & courtesies
    "好": { py: "hǎo", en: "good" },
    "谢": { py: "xiè", en: "to thank" },
    "不": { py: "bù", en: "not, no" },
    "客": { py: "kè", en: "guest" },
    "气": { py: "qì", en: "air, manner" },
    "没": { py: "méi", en: "not have" },
    "关": { py: "guān", en: "close, relate" },
    "系": { py: "xì", en: "tie, system" },
    "事": { py: "shì", en: "matter, thing" },
    "再": { py: "zài", en: "again" },
    "见": { py: "jiàn", en: "see, meet" },
    "对": { py: "duì", en: "correct, toward" },
    "起": { py: "qǐ", en: "rise, up" },
    "喂": { py: "wèi", en: "hello (phone)" },
    "请": { py: "qǐng", en: "please, invite" },
    "问": { py: "wèn", en: "ask" },

    // Numbers
    "零": { py: "líng", en: "zero" },
    "一": { py: "yī", en: "one" },
    "二": { py: "èr", en: "two" },
    "两": { py: "liǎng", en: "two (with MW)" },
    "三": { py: "sān", en: "three" },
    "四": { py: "sì", en: "four" },
    "五": { py: "wǔ", en: "five" },
    "六": { py: "liù", en: "six" },
    "七": { py: "qī", en: "seven" },
    "八": { py: "bā", en: "eight" },
    "九": { py: "jiǔ", en: "nine" },
    "十": { py: "shí", en: "ten" },
    "百": { py: "bǎi", en: "hundred" },
    "千": { py: "qiān", en: "thousand" },
    "半": { py: "bàn", en: "half" },
    "第": { py: "dì", en: "ordinal prefix" },

    // Measure words & common particles
    "个": { py: "gè", en: "generic MW" },
    "本": { py: "běn", en: "MW (books)" },
    "件": { py: "jiàn", en: "MW (clothes, matters)" },
    "块": { py: "kuài", en: "yuan / piece" },
    "口": { py: "kǒu", en: "MW (family)" },
    "只": { py: "zhī", en: "MW (animals)" },
    "元": { py: "yuán", en: "yuan (formal)" },
    "点": { py: "diǎn", en: "o'clock / a little" },
    "下": { py: "xià", en: "down, below" },
    "岁": { py: "suì", en: "years of age" },
    "的": { py: "de", en: "possessive / modifier" },
    "了": { py: "le", en: "completion / change" },
    "吗": { py: "ma", en: "yes/no question" },
    "呢": { py: "ne", en: "follow-up question" },
    "吧": { py: "ba", en: "suggestion / softener" },
    "和": { py: "hé", en: "and, with" },
    "也": { py: "yě", en: "also, too" },
    "都": { py: "dōu", en: "all, both" },
    "很": { py: "hěn", en: "very" },
    "太": { py: "tài", en: "too (excessive)" },
    "真": { py: "zhēn", en: "really" },
    "还": { py: "hái", en: "still, also" },
    "非": { py: "fēi", en: "non-, not" },
    "常": { py: "cháng", en: "often, usual" },
    "正": { py: "zhèng", en: "right now, straight" },
    "在": { py: "zài", en: "be at, in" },

    // Family
    "爸": { py: "bà", en: "dad" },
    "妈": { py: "mā", en: "mom" },
    "哥": { py: "gē", en: "older brother" },
    "姐": { py: "jiě", en: "older sister" },
    "弟": { py: "dì", en: "younger brother" },
    "妹": { py: "mèi", en: "younger sister" },
    "儿": { py: "ér", en: "child" },
    "子": { py: "zi", en: "child / noun suffix" },
    "女": { py: "nǚ", en: "female" },
    "孩": { py: "hái", en: "child" },
    "男": { py: "nán", en: "male" },
    "朋": { py: "péng", en: "friend" },
    "友": { py: "yǒu", en: "friend" },
    "人": { py: "rén", en: "person" },
    "先": { py: "xiān", en: "first" },
    "生": { py: "shēng", en: "be born / student" },
    "士": { py: "shì", en: "scholar, gentleman" },
    "小": { py: "xiǎo", en: "small" },
    "老": { py: "lǎo", en: "old" },
    "师": { py: "shī", en: "teacher, master" },
    "同": { py: "tóng", en: "same, together" },
    "学": { py: "xué", en: "study" },
    "医": { py: "yī", en: "medicine, doctor" },
    "院": { py: "yuàn", en: "courtyard, institution" },
    "中": { py: "zhōng", en: "middle, China" },
    "名": { py: "míng", en: "name" },
    "字": { py: "zì", en: "character" },

    // Time
    "年": { py: "nián", en: "year" },
    "月": { py: "yuè", en: "month, moon" },
    "日": { py: "rì", en: "day, sun" },
    "号": { py: "hào", en: "date, number" },
    "天": { py: "tiān", en: "day, sky" },
    "星": { py: "xīng", en: "star" },
    "期": { py: "qī", en: "period" },
    "今": { py: "jīn", en: "today, present" },
    "明": { py: "míng", en: "bright, next" },
    "昨": { py: "zuó", en: "yesterday" },
    "去": { py: "qù", en: "go, past" },
    "白": { py: "bái", en: "white, day(time)" },
    "早": { py: "zǎo", en: "early, morning" },
    "上": { py: "shàng", en: "up, above" },
    "午": { py: "wǔ", en: "noon" },
    "中": { py: "zhōng", en: "middle" },
    "晚": { py: "wǎn", en: "late, evening" },
    "现": { py: "xiàn", en: "now, appear" },
    "时": { py: "shí", en: "time, hour" },
    "候": { py: "hòu", en: "wait, time" },
    "间": { py: "jiān", en: "between, room" },
    "分": { py: "fēn", en: "minute, divide" },
    "钟": { py: "zhōng", en: "clock, bell" },

    // Verbs
    "睡": { py: "shuì", en: "sleep" },
    "觉": { py: "jiào / jué", en: "sleep / feel" },
    "床": { py: "chuáng", en: "bed" },
    "休": { py: "xiū", en: "rest" },
    "息": { py: "xī", en: "breath, rest" },
    "吃": { py: "chī", en: "eat" },
    "喝": { py: "hē", en: "drink" },
    "看": { py: "kàn", en: "look, watch, read" },
    "听": { py: "tīng", en: "listen" },
    "说": { py: "shuō", en: "speak, say" },
    "话": { py: "huà", en: "speech, words" },
    "读": { py: "dú", en: "read aloud" },
    "写": { py: "xiě", en: "write" },
    "唱": { py: "chàng", en: "sing" },
    "歌": { py: "gē", en: "song" },
    "玩": { py: "wán", en: "play" },
    "习": { py: "xí", en: "practice" },
    "课": { py: "kè", en: "class, lesson" },
    "班": { py: "bān", en: "work shift / class" },
    "工": { py: "gōng", en: "work" },
    "作": { py: "zuò", en: "do, make" },
    "做": { py: "zuò", en: "do, make" },
    "饭": { py: "fàn", en: "meal, rice" },
    "来": { py: "lái", en: "come" },
    "回": { py: "huí", en: "return" },
    "到": { py: "dào", en: "arrive, reach" },
    "住": { py: "zhù", en: "live, stay" },
    "坐": { py: "zuò", en: "sit" },
    "开": { py: "kāi", en: "open, drive" },
    "车": { py: "chē", en: "car, vehicle" },
    "打": { py: "dǎ", en: "hit, make (call)" },
    "电": { py: "diàn", en: "electric" },
    "穿": { py: "chuān", en: "wear, put on" },
    "买": { py: "mǎi", en: "buy" },
    "卖": { py: "mài", en: "sell" },
    "找": { py: "zhǎo", en: "look for" },
    "是": { py: "shì", en: "be" },
    "有": { py: "yǒu", en: "have" },
    "叫": { py: "jiào", en: "be called" },
    "认": { py: "rèn", en: "recognize" },
    "识": { py: "shí", en: "know" },
    "知": { py: "zhī", en: "know" },
    "道": { py: "dào", en: "way, path" },
    "得": { py: "de / děi", en: "particle / must" },
    "爱": { py: "ài", en: "love" },
    "喜": { py: "xǐ", en: "happy, like" },
    "欢": { py: "huān", en: "joy, like" },
    "想": { py: "xiǎng", en: "want, think" },
    "要": { py: "yào", en: "want, will" },
    "给": { py: "gěi", en: "give, to" },
    "会": { py: "huì", en: "can (learned), will" },
    "能": { py: "néng", en: "be able to" },
    "可": { py: "kě", en: "can, may" },
    "以": { py: "yǐ", en: "use, by means of" },
    "生": { py: "shēng", en: "be born, raw" },
    "病": { py: "bìng", en: "illness, sick" },

    // Adjectives & adverbs
    "新": { py: "xīn", en: "new" },
    "贵": { py: "guì", en: "expensive" },
    "便": { py: "pián / biàn", en: "cheap / convenient" },
    "宜": { py: "yí", en: "suitable" },
    "冷": { py: "lěng", en: "cold" },
    "热": { py: "rè", en: "hot" },
    "忙": { py: "máng", en: "busy" },
    "高": { py: "gāo", en: "tall, high" },
    "兴": { py: "xìng", en: "interest, mood" },
    "漂": { py: "piào", en: "elegant" },
    "亮": { py: "liàng", en: "bright" },

    // Places
    "校": { py: "xiào", en: "school" },
    "院": { py: "yuàn", en: "yard, institution" },
    "商": { py: "shāng", en: "commerce" },
    "店": { py: "diàn", en: "shop" },
    "超": { py: "chāo", en: "super, exceed" },
    "市": { py: "shì", en: "market, city" },
    "书": { py: "shū", en: "book" },
    "公": { py: "gōng", en: "public" },
    "司": { py: "sī", en: "manage, company" },
    "房": { py: "fáng", en: "house, room" },
    "影": { py: "yǐng", en: "shadow, film" },
    "国": { py: "guó", en: "country" },

    // Directions / positions
    "外": { py: "wài", en: "outside" },
    "前": { py: "qián", en: "front, before" },
    "后": { py: "hòu", en: "back, after" },
    "旁": { py: "páng", en: "side, beside" },

    // Food & drink
    "米": { py: "mǐ", en: "rice (raw), meter" },
    "菜": { py: "cài", en: "dish, vegetable" },
    "面": { py: "miàn", en: "noodle / face / flour" },
    "包": { py: "bāo", en: "wrap, bag, bun" },
    "条": { py: "tiáo", en: "strip, MW" },
    "饺": { py: "jiǎo", en: "dumpling" },
    "鸡": { py: "jī", en: "chicken" },
    "蛋": { py: "dàn", en: "egg" },
    "果": { py: "guǒ", en: "fruit, result" },
    "苹": { py: "píng", en: "apple (bound)" },
    "茶": { py: "chá", en: "tea" },
    "水": { py: "shuǐ", en: "water" },
    "牛": { py: "niú", en: "cow" },
    "奶": { py: "nǎi", en: "milk" },
    "东": { py: "dōng", en: "east" },
    "西": { py: "xī", en: "west" },

    // Weather
    "雨": { py: "yǔ", en: "rain" },
    "雪": { py: "xuě", en: "snow" },
    "天": { py: "tiān", en: "sky, day" },
    "出": { py: "chū", en: "go out" },
    "租": { py: "zū", en: "rent" },
    "飞": { py: "fēi", en: "fly" },
    "机": { py: "jī", en: "machine" },
    "火": { py: "huǒ", en: "fire" },

    // Tech & misc
    "钱": { py: "qián", en: "money" },
    "话": { py: "huà", en: "speech" },
    "脑": { py: "nǎo", en: "brain" },
    "视": { py: "shì", en: "vision, look" },
    "手": { py: "shǒu", en: "hand" },
    "衣": { py: "yī", en: "clothing" },
    "服": { py: "fú", en: "garment, serve" },
    "杯": { py: "bēi", en: "cup" },
    "椅": { py: "yǐ", en: "chair" },
    "桌": { py: "zhuō", en: "table" },
    "汉": { py: "Hàn", en: "Han (Chinese)" },
    "语": { py: "yǔ", en: "language" },
    "文": { py: "wén", en: "writing, culture" },
    "狗": { py: "gǒu", en: "dog" },
    "猫": { py: "māo", en: "cat" },
    "问": { py: "wèn", en: "ask" },
    "题": { py: "tí", en: "topic, question" },

    // Travel-specific (from travel.html)
    "场": { py: "chǎng", en: "field, ground" },
    "票": { py: "piào", en: "ticket" },
    "护": { py: "hù", en: "protect" },
    "照": { py: "zhào", en: "shine, photo" },
    "行": { py: "xíng", en: "go, OK" },
    "李": { py: "lǐ", en: "plum / surname" },
    "登": { py: "dēng", en: "climb, board" },
    "牌": { py: "pái", en: "tag, card" },
    "达": { py: "dá", en: "reach, arrive" },
    "海": { py: "hǎi", en: "sea" },
    "入": { py: "rù", en: "enter" },
    "境": { py: "jìng", en: "border, region" },
    "签": { py: "qiān", en: "sign" },
    "证": { py: "zhèng", en: "evidence, certificate" },
    "申": { py: "shēn", en: "state, declare" },
    "报": { py: "bào", en: "report" },
    "表": { py: "biǎo", en: "form, surface" },
    "填": { py: "tián", en: "fill in" },
    "旅": { py: "lǚ", en: "travel" },
    "游": { py: "yóu", en: "travel, swim" },
    "客": { py: "kè", en: "guest" },
    "自": { py: "zì", en: "self, from" },
    "次": { py: "cì", en: "time (occurrence)" },
    "度": { py: "dù", en: "degree, spend" },
    "假": { py: "jià / jiǎ", en: "vacation / false" },
    "差": { py: "chā / chāi", en: "differ / assignment" },
    "计": { py: "jì", en: "plan, count" },
    "划": { py: "huà", en: "delineate" },
    "酒": { py: "jiǔ", en: "alcohol" },
    "预": { py: "yù", en: "in advance" },
    "订": { py: "dìng", en: "book, reserve" },
    "图": { py: "tú", en: "picture, map" },
    "远": { py: "yuǎn", en: "far" },
    "近": { py: "jìn", en: "near" },
    "久": { py: "jiǔ", en: "long (time)" },

    // Ordering (from ordering.html)
    "服": { py: "fú", en: "serve" },
    "务": { py: "wù", en: "duty, task" },
    "员": { py: "yuán", en: "member, person" },
    "单": { py: "dān", en: "list, single" },
    "辣": { py: "là", en: "spicy" },
    "甜": { py: "tián", en: "sweet" },
    "酸": { py: "suān", en: "sour" },
    "咸": { py: "xián", en: "salty" },
    "盘": { py: "pán", en: "plate" },
    "碗": { py: "wǎn", en: "bowl" },
    "瓶": { py: "píng", en: "bottle" },
    "份": { py: "fèn", en: "portion" },
    "牛": { py: "niú", en: "cow" },
    "肉": { py: "ròu", en: "meat" },
    "鱼": { py: "yú", en: "fish" },
    "猪": { py: "zhū", en: "pig" },
    "羊": { py: "yáng", en: "sheep" },
    "果": { py: "guǒ", en: "fruit" },
    "汁": { py: "zhī", en: "juice" },
    "可": { py: "kě", en: "can, may" },
    "乐": { py: "lè", en: "happy / music" },
    "啤": { py: "pí", en: "beer (bound)" },

    // Misc connectives & extras
    "但": { py: "dàn", en: "but" },
    "是": { py: "shì", en: "be" },
    "因": { py: "yīn", en: "because" },
    "为": { py: "wèi / wéi", en: "for / be" },
    "所": { py: "suǒ", en: "place, that which" },
    "以": { py: "yǐ", en: "use, with" },
    "或": { py: "huò", en: "or" },
    "者": { py: "zhě", en: "-er, one who" },
    "怎": { py: "zěn", en: "how (bound)" },
    "让": { py: "ràng", en: "let, allow" },
    "已": { py: "yǐ", en: "already" },
    "经": { py: "jīng", en: "pass through" },
    "正": { py: "zhèng", en: "right, just (now)" },
    "走": { py: "zǒu", en: "walk, go" },
    "等": { py: "děng", en: "wait, etc." },
    "送": { py: "sòng", en: "send, give" },
    "拿": { py: "ná", en: "take, hold" },
    "用": { py: "yòng", en: "use" },
    "门": { py: "mén", en: "door" },
    "口": { py: "kǒu", en: "mouth / MW" },
    "进": { py: "jìn", en: "enter" },

    // Bound chars in dates / locations
    "京": { py: "jīng", en: "capital" },
    "北": { py: "běi", en: "north" },
    "南": { py: "nán", en: "south" },
    "美": { py: "měi", en: "beautiful / America" },
    "英": { py: "yīng", en: "hero / Britain" },
    "法": { py: "fǎ", en: "law / France" },
    "日": { py: "rì", en: "sun / Japan" },
    "韩": { py: "Hán", en: "Korea" },
    "德": { py: "dé", en: "virtue / Germany" },
  };
  window.CHAR_DICT = C;

  // Helper: given a word string, returns an array of { ch, py, en } for chars in dict.
  // Skips ASCII / punctuation. Unknown chars get null entry so callers can show the char alone.
  window.charBreakdown = function (word) {
    if (!word) return [];
    const out = [];
    for (const ch of word) {
      if (!/[㐀-鿿]/.test(ch)) continue;
      const d = C[ch];
      out.push({ ch, py: d ? d.py : "", en: d ? d.en : "?" });
    }
    return out;
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  // Render a character breakdown into a target element. Hides itself for single-char words.
  window.renderCharBreakdown = function (root, word) {
    if (!root) return;
    const chars = window.charBreakdown(word);
    if (chars.length < 2) { root.classList.remove('show'); root.innerHTML = ''; return; }
    root.classList.add('show');
    root.innerHTML = '<div class="cb-label">Characters</div>' + chars.map(c => `
      <div class="cb-row">
        <span class="cb-ch">${esc(c.ch)}</span>
        <span class="cb-py">${esc(c.py)}</span>
        <span class="cb-en">${esc(c.en)}</span>
      </div>`).join('');
  };

  // Auto-enhance: inject styles, scan every .fc-back paired with a .fc-zh (or .fc-hanzi),
  // and add a .fc-chars breakdown. Re-renders if the .fc-zh text changes (dynamic cards).
  function injectStyles() {
    if (document.getElementById('cb-auto-style')) return;
    const s = document.createElement('style');
    s.id = 'cb-auto-style';
    s.textContent = `
      .fc-chars {
        display: none;
        margin-top: 0.85rem;
        padding: 0.55rem 0.8rem;
        background: rgba(255,255,255,0.55);
        border: 1px solid rgba(0,0,0,0.08);
        border-radius: 8px;
        max-width: 22rem;
        text-align: left;
      }
      .fc-back .fc-chars { background: rgba(255,255,255,0.6); }
      .fc-chars.show { display: block; }
      .fc-chars .cb-label {
        font-size: 0.6rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #94a3b8;
        margin-bottom: 0.3rem;
      }
      .fc-chars .cb-row {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        padding: 0.12rem 0;
        font-size: 0.82rem;
      }
      .fc-chars .cb-ch {
        font-family: 'Noto Serif SC','PingFang SC','Hiragino Sans GB','Microsoft YaHei',serif;
        font-size: 1.05rem;
        color: #1a1a1a;
        min-width: 1.4rem;
      }
      .fc-chars .cb-py { color: #5b6573; font-style: italic; min-width: 3.4rem; }
      .fc-chars .cb-en { color: #3b4654; }
    `;
    document.head.appendChild(s);
  }

  function enhanceOne(back) {
    if (back.__cbAttached) return;
    const parent = back.parentElement;
    if (!parent) return;
    const front = parent.querySelector('.fc-front');
    if (!front) return;
    const zh = front.querySelector('.fc-zh, .fc-hanzi');
    if (!zh) return;
    // Reuse a custom-placed breakdown container if one exists; else append.
    let chars = back.querySelector('.fc-chars, .fc-char-breakdown');
    if (!chars) {
      chars = document.createElement('div');
      chars.className = 'fc-chars';
      back.appendChild(chars);
    }
    const update = () => window.renderCharBreakdown(chars, zh.textContent || '');
    update();
    const mo = new MutationObserver(update);
    mo.observe(zh, { childList: true, characterData: true, subtree: true });
    back.__cbAttached = true;
  }

  window.enhanceFlashcards = function () {
    injectStyles();
    document.querySelectorAll('.fc-back').forEach(enhanceOne);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.enhanceFlashcards);
  } else {
    window.enhanceFlashcards();
  }
})();
