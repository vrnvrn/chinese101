// June Accelerated Course — HSK 4 schedule.
// Same calendar shape as the HSK 1 course (refs/june-schedule.js): identical
// days, events, and review structure. Only the word ranges differ — here they
// span the 1000 HSK 4 (Band 4) words in BAND4_WORDS instead of 300 HSK 1 words.
window.JUNE4_SCHEDULE = {
    total: 1000,
    weeks: [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28],
        [29, 30, null, null, null, null, null],
    ],
    days: {
        1:  { type: 'event', title: 'Check-In' },
        2:  { type: 'event', title: 'Orientation' },
        3:  { type: 'vocab', start: 1,   end: 84   },
        4:  { type: 'vocab', start: 85,  end: 167  },
        5:  { type: 'vocab', start: 168, end: 250  },
        6:  { type: 'vocab', start: 251, end: 333  },
        7:  { type: 'vocab', start: 1,   end: 333,  kind: 'review' },
        9:  { type: 'vocab', start: 334, end: 417  },
        10: { type: 'vocab', start: 418, end: 500  },
        11: { type: 'vocab', start: 501, end: 584  },
        12: { type: 'vocab', start: 585, end: 667  },
        13: { type: 'vocab', start: 334, end: 667,  kind: 'review' },
        14: { type: 'vocab', start: 1,   end: 333,  kind: 'review' },
        15: { type: 'vocab', start: 334, end: 667,  kind: 'review' },
        17: { type: 'vocab', start: 668, end: 751  },
        18: { type: 'vocab', start: 752, end: 834  },
        19: { type: 'vocab', start: 835, end: 917  },
        20: { type: 'vocab', start: 918, end: 1000 },
        21: { type: 'vocab', start: 668, end: 1000, kind: 'review' },
        22: { type: 'vocab', start: 1,   end: 500,  kind: 'review' },
        23: { type: 'vocab', start: 501, end: 1000, kind: 'review' },
        25: { type: 'vocab', start: 1,   end: 1000, kind: 'review' },
        26: { type: 'vocab', start: 1,   end: 1000, kind: 'review' },
        27: { type: 'vocab', start: 1,   end: 1000, kind: 'review' },
        28: { type: 'event', title: 'JOHOR EXAM' },
    },
};
