// June Accelerated Course - HSK 2 schedule.
// Spaced-repetition layout: the 200 HSK 2 (Band 2) words in BAND2_WORDS
// are introduced in ten decile blocks (the green "new vocab" days). Every block
// is then revisited at widening intervals: next-day pairs, mid-course cumulative
// sweeps, and quarter-by-quarter final-week reviews, so no day is blank and every
// word is seen several times before the exam.
window.JUNE2_SCHEDULE = {
    total: 200,
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
        3:  { type: 'vocab', start: 1, end: 20 },
        4:  { type: 'vocab', start: 21, end: 40 },
        5:  { type: 'vocab', start: 1, end: 40, kind: 'review' },
        6:  { type: 'vocab', start: 41, end: 60 },
        7:  { type: 'vocab', start: 61, end: 80 },
        8:  { type: 'vocab', start: 41, end: 80, kind: 'review' },
        9:  { type: 'vocab', start: 1, end: 80, kind: 'review' },
        10:  { type: 'vocab', start: 81, end: 100 },
        11:  { type: 'vocab', start: 101, end: 120 },
        12:  { type: 'vocab', start: 81, end: 120, kind: 'review' },
        13:  { type: 'vocab', start: 121, end: 140 },
        14:  { type: 'vocab', start: 141, end: 160 },
        15:  { type: 'vocab', start: 121, end: 160, kind: 'review' },
        16:  { type: 'vocab', start: 81, end: 160, kind: 'review' },
        17:  { type: 'vocab', start: 161, end: 180 },
        18:  { type: 'vocab', start: 181, end: 200 },
        19:  { type: 'vocab', start: 161, end: 200, kind: 'review' },
        20:  { type: 'vocab', start: 1, end: 100, kind: 'review' },
        21:  { type: 'vocab', start: 101, end: 200, kind: 'review' },
        22:  { type: 'vocab', start: 1, end: 50, kind: 'review' },
        23:  { type: 'vocab', start: 51, end: 100, kind: 'review' },
        24:  { type: 'vocab', start: 101, end: 150, kind: 'review' },
        25:  { type: 'vocab', start: 151, end: 200, kind: 'review' },
        26:  { type: 'vocab', start: 1, end: 200, kind: 'review' },
        27:  { type: 'vocab', start: 1, end: 200, kind: 'review', exam: "Mock Exam" },
        28:  { type: 'event', title: "JOHOR EXAM" },
        29:  { type: 'event', title: "Celebration Dinner" },
        30:  { type: 'event', title: "Course Wrap-Up" },
    },
};
