// June Accelerated Course - HSK 4 schedule.
// Spaced-repetition layout: the 1000 HSK 4 (Band 4) words in BAND4_WORDS
// are introduced in ten decile blocks (the green "new vocab" days). Every block
// is then revisited at widening intervals: next-day pairs, mid-course cumulative
// sweeps, and quarter-by-quarter final-week reviews, so no day is blank and every
// word is seen several times before the exam.
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
        1:  { type: 'event', title: "Check-In" },
        2:  { type: 'event', title: "Orientation" },
        3:  { type: 'vocab', start: 1, end: 100 },
        4:  { type: 'vocab', start: 101, end: 200 },
        5:  { type: 'vocab', start: 1, end: 200, kind: 'review' },
        6:  { type: 'vocab', start: 201, end: 300 },
        7:  { type: 'vocab', start: 301, end: 400 },
        8:  { type: 'vocab', start: 201, end: 400, kind: 'review' },
        9:  { type: 'vocab', start: 1, end: 400, kind: 'review' },
        10:  { type: 'vocab', start: 401, end: 500 },
        11:  { type: 'vocab', start: 501, end: 600 },
        12:  { type: 'vocab', start: 401, end: 600, kind: 'review' },
        13:  { type: 'vocab', start: 601, end: 700 },
        14:  { type: 'vocab', start: 701, end: 800 },
        15:  { type: 'vocab', start: 601, end: 800, kind: 'review' },
        16:  { type: 'vocab', start: 401, end: 800, kind: 'review' },
        17:  { type: 'vocab', start: 801, end: 900 },
        18:  { type: 'vocab', start: 901, end: 1000 },
        19:  { type: 'vocab', start: 801, end: 1000, kind: 'review' },
        20:  { type: 'vocab', start: 1, end: 500, kind: 'review' },
        21:  { type: 'vocab', start: 501, end: 1000, kind: 'review' },
        22:  { type: 'vocab', start: 1, end: 250, kind: 'review' },
        23:  { type: 'vocab', start: 251, end: 500, kind: 'review' },
        24:  { type: 'vocab', start: 501, end: 750, kind: 'review' },
        25:  { type: 'vocab', start: 751, end: 1000, kind: 'review' },
        26:  { type: 'vocab', start: 1, end: 1000, kind: 'review' },
        27:  { type: 'vocab', start: 1, end: 1000, kind: 'review', exam: "Mock Exam" },
        28:  { type: 'event', title: "JOHOR EXAM" },
        29:  { type: 'event', title: "Celebration Dinner" },
        30:  { type: 'event', title: "Course Wrap-Up" },
    },
};
