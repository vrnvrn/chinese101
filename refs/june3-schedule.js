// June Accelerated Course — HSK 3 schedule.
// Same calendar shape as the HSK 1 / HSK 4 courses. Only the word ranges differ —
// here they span the 500 HSK 3 (Band 3) words in BAND3_WORDS.
window.JUNE3_SCHEDULE = {
    total: 500,
    weeks: [
        [null, 1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29, 30, null],
    ],
    days: {
        1:  { type: 'event', title: 'Check-In' },
        2:  { type: 'event', title: 'Orientation' },
        3:  { type: 'vocab', start: 1,   end: 42  },
        4:  { type: 'vocab', start: 43,  end: 84  },
        5:  { type: 'vocab', start: 85,  end: 126 },
        6:  { type: 'vocab', start: 127, end: 168 },
        7:  { type: 'vocab', start: 1,   end: 168, kind: 'review' },
        9:  { type: 'vocab', start: 169, end: 210 },
        10: { type: 'vocab', start: 211, end: 252 },
        11: { type: 'vocab', start: 253, end: 294 },
        12: { type: 'vocab', start: 295, end: 336 },
        13: { type: 'vocab', start: 169, end: 336, kind: 'review' },
        14: { type: 'vocab', start: 1,   end: 168, kind: 'review' },
        15: { type: 'vocab', start: 169, end: 336, kind: 'review' },
        17: { type: 'vocab', start: 337, end: 377 },
        18: { type: 'vocab', start: 378, end: 418 },
        19: { type: 'vocab', start: 419, end: 459 },
        20: { type: 'vocab', start: 460, end: 500 },
        21: { type: 'vocab', start: 337, end: 500, kind: 'review' },
        22: { type: 'vocab', start: 1,   end: 250, kind: 'review' },
        23: { type: 'vocab', start: 251, end: 500, kind: 'review' },
        25: { type: 'vocab', start: 1,   end: 500, kind: 'review' },
        26: { type: 'vocab', start: 1,   end: 500, kind: 'review' },
        27: { type: 'vocab', start: 1,   end: 500, kind: 'review' },
        28: { type: 'event', title: 'JOHOR EXAM' },
    },
};
