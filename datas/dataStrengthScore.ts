const FULLMARK = 34;

const setScoreValue = (n: number): number => {
    return FULLMARK + 1 - n;
};

interface I_Score {
    subject: string;
    score: number;
    fullMark: number;
}

export const dataStrengthScore: I_Score[] = [
    //STRATEGIC
    {
        subject: "Analytical",
        score: setScoreValue(12),
        fullMark: FULLMARK,
    },
    {
        subject: "Input",
        score: setScoreValue(10),
        fullMark: FULLMARK,
    },
    {
        subject: "Context",
        score: setScoreValue(27),
        fullMark: FULLMARK,
    },
    {
        subject: "Intellection",
        score: setScoreValue(6),
        fullMark: FULLMARK,
    },
    {
        subject: "Futuristic",
        score: setScoreValue(15),
        fullMark: FULLMARK,
    },
    {
        subject: "Learner",
        score: setScoreValue(7),
        fullMark: FULLMARK,
    },
    {
        subject: "Ideation",
        score: setScoreValue(1),
        fullMark: FULLMARK,
    },
    {
        subject: "Strategic",
        score: setScoreValue(4),
        fullMark: FULLMARK,
    },
    //RELATIONSHIP BUILDING
    {
        subject: "Adaptability",
        score: setScoreValue(21),
        fullMark: FULLMARK,
    },
    {
        subject: "Includer",
        score: setScoreValue(31),
        fullMark: FULLMARK,
    },
    {
        subject: "Connectedness",
        score: setScoreValue(22),
        fullMark: FULLMARK,
    },
    {
        subject: "Individualization",
        score: setScoreValue(5),
        fullMark: FULLMARK,
    },
    {
        subject: "Developer",
        score: setScoreValue(14),
        fullMark: FULLMARK,
    },
    {
        subject: "Positivity",
        score: setScoreValue(17),
        fullMark: FULLMARK,
    },
    {
        subject: "Empathy",
        score: setScoreValue(16),
        fullMark: FULLMARK,
    },
    {
        subject: "Relator",
        score: setScoreValue(2),
        fullMark: FULLMARK,
    },
    {
        subject: "Harmony",
        score: setScoreValue(34),
        fullMark: FULLMARK,
    },
    //INFLUENCING
    {
        subject: "Activator",
        score: setScoreValue(20),
        fullMark: FULLMARK,
    },
    {
        subject: "Maximizer",
        score: setScoreValue(13),
        fullMark: FULLMARK,
    },
    {
        subject: "Command",
        score: setScoreValue(25),
        fullMark: FULLMARK,
    },
    {
        subject: "Self-Assurance",
        score: setScoreValue(8),
        fullMark: FULLMARK,
    },
    {
        subject: "Communication",
        score: setScoreValue(29),
        fullMark: FULLMARK,
    },
    {
        subject: "Significance",
        score: setScoreValue(28),
        fullMark: FULLMARK,
    },
    {
        subject: "Competition",
        score: setScoreValue(30),
        fullMark: FULLMARK,
    },
    {
        subject: "Woo",
        score: setScoreValue(33),
        fullMark: FULLMARK,
    },
    //EXECUTING
    {
        subject: "Achiever",
        score: setScoreValue(18),
        fullMark: FULLMARK,
    },
    {
        subject: "Discipline",
        score: setScoreValue(24),
        fullMark: FULLMARK,
    },
    {
        subject: "Arranger",
        score: setScoreValue(19),
        fullMark: FULLMARK,
    },
    {
        subject: "Focus",
        score: setScoreValue(26),
        fullMark: FULLMARK,
    },
    {
        subject: "Belief",
        score: setScoreValue(23),
        fullMark: FULLMARK,
    },
    {
        subject: "Responsibility",
        score: setScoreValue(3),
        fullMark: FULLMARK,
    },
    {
        subject: "Consistency",
        score: setScoreValue(32),
        fullMark: FULLMARK,
    },
    {
        subject: "Restorative",
        score: setScoreValue(9),
        fullMark: FULLMARK,
    },
    {
        subject: "Deliberative",
        score: setScoreValue(11),
        fullMark: FULLMARK,
    },
];
