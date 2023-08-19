import { I_i18n } from "../i18n/Types/I_i18n";

interface I_DistributionSubTheme {
  no: number;
  text_i18n: I_i18n<string>;
}

interface I_Distribution {
  title_i18n: I_i18n<string>;
  percent: number;
  colorType: "green" | "blue" | "purple" | "yellow";
  subTheme: I_DistributionSubTheme[];
}

export const dataStrengthDistribution: I_Distribution[] = [
  {
    title_i18n: {
      ja: "戦略的\n思考力",
      ko: "전략적\n사고",
      en: "Strategic\nThinking",
    },
    percent: 40,
    colorType: "green",
    subTheme: [
      {
        no: 1,
        text_i18n: {
          ja: "着想(Ideation)",
          ko: "발상(Ideation)테마",
          en: "Ideation",
        },
      },
      {
        no: 4,
        text_i18n: {
          ja: "着想(Strategic)",
          ko: "전략(Strategic)테마",
          en: "Ideation",
        },
      },
      {
        no: 6,
        text_i18n: {
          ja: "内省(Intellection)",
          ko: "지적사고(Intellection)테마",
          en: "Intellection",
        },
      },
      {
        no: 7,
        text_i18n: {
          ja: "学習欲(Learner)",
          ko: "배움(Learner)테마",
          en: "Learner",
        },
      },
      {
        no: 10,
        text_i18n: {
          ja: "収集心(Input)",
          ko: "수집(Input)테마",
          en: "Analytical",
        },
      },
      {
        no: 12,
        text_i18n: {
          ja: "分析思考(Analytical)",
          ko: "분석(Analytical)테마",
          en: "Analytical",
        },
      },
      {
        no: 15,
        text_i18n: {
          ja: "未来志向(Futuristic)",
          ko: "미래지향(Futuristic)테마",
          en: "Futuristic",
        },
      },
      {
        no: 27,
        text_i18n: {
          ja: "原点思考(Context)",
          ko: "회고(Context)테마",
          en: "Context",
        },
      },
    ],
  },
  {
    title_i18n: {
      ja: "人間関係\n構築力",
      ko: "대인관계\n구축",
      en: "Relationship\nBuilding",
    },
    percent: 24,
    colorType: "blue",
    subTheme: [
      {
        no: 2,
        text_i18n: {
          ja: "親密性(Relator)",
          ko: "친밀성(Relator)테마",
          en: "Relator",
        },
      },
      {
        no: 5,
        text_i18n: {
          ja: "個別化(Individualization)",
          ko: "개별화(Individualization)테마",
          en: "Individualization",
        },
      },
      {
        no: 14,
        text_i18n: {
          ja: "成長促進(Developer)",
          ko: "개발(Developer)테마",
          en: "Developer",
        },
      },
      {
        no: 16,
        text_i18n: {
          ja: "共感性(Empathy)",
          ko: "공감(Empathy)테마",
          en: "Empathy",
        },
      },
      {
        no: 17,
        text_i18n: {
          ja: "ポジティブ(Positivity)",
          ko: "긍정(Positivity)테마",
          en: "Positivity",
        },
      },
      {
        no: 21,
        text_i18n: {
          ja: "適応性(Adaptability)",
          ko: "적응(Adaptability)테마",
          en: "Adaptability",
        },
      },
      {
        no: 22,
        text_i18n: {
          ja: "運命思考(Connectedness)",
          ko: "연결성(Connectedness)테마",
          en: "Connectedness",
        },
      },
      {
        no: 31,
        text_i18n: {
          ja: "包含(Includer)",
          ko: "포용(Includer)테마",
          en: "Includer",
        },
      },
      {
        no: 34,
        text_i18n: {
          ja: "調和性(Harmony)",
          ko: "화합(Harmony)테마",
          en: "Harmony",
        },
      },
    ],
  },
  {
    title_i18n: {
      ja: "実行力",
      ko: "실행력",
      en: "Executing",
    },
    percent: 20,
    colorType: "purple",
    subTheme: [
      {
        no: 3,
        text_i18n: {
          ja: "責任感(Responsibility)",
          ko: "책임(Responsibility)테마",
          en: "Responsibility",
        },
      },
      {
        no: 9,
        text_i18n: {
          ja: "回復志向(Restorative)",
          ko: "복구(Restorative)테마",
          en: "Restorative",
        },
      },
      {
        no: 11,
        text_i18n: {
          ja: "慎重さ(Deliberative)",
          ko: "심사숙고(Deliberative)테마",
          en: "Deliberative",
        },
      },
      {
        no: 18,
        text_i18n: {
          ja: "達成欲(Achiever)",
          ko: "성취(Achiever)테마",
          en: "Achiever",
        },
      },
      {
        no: 19,
        text_i18n: {
          ja: "アレンジ(Arranger)",
          ko: "정리(Arranger)테마",
          en: "Arranger",
        },
      },
      {
        no: 23,
        text_i18n: {
          ja: "信念",
          ko: "신념(Belief)테마",
          en: "Belief",
        },
      },
      {
        no: 24,
        text_i18n: {
          ja: "規律性(Discipline)",
          ko: "체계(Discipline)테마",
          en: "Discipline",
        },
      },
      {
        no: 26,
        text_i18n: {
          ja: "目標志向(Focus)",
          ko: "집중(Focus)테마",
          en: "Focus",
        },
      },
      {
        no: 32,
        text_i18n: {
          ja: "公平性(Consistency)",
          ko: "공정성(Consistency)테마",
          en: "Consistency",
        },
      },
    ],
  },
  {
    title_i18n: {
      ja: "影響力",
      ko: "영향력",
      en: "Influencing",
    },
    percent: 16,
    colorType: "yellow",
    subTheme: [
      {
        no: 8,
        text_i18n: {
          ja: "自己確信(Self-Assurance)",
          ko: "자기확신(Self-Assurance)테마",
          en: "Self-Assurance",
        },
      },
      {
        no: 13,
        text_i18n: {
          ja: "最上志向(Maximizer)",
          ko: "최상화(Maximizer)테마",
          en: "Maximizer",
        },
      },
      {
        no: 20,
        text_i18n: {
          ja: "活発性(Activator)",
          ko: "행동(Activator)테마",
          en: "Activator",
        },
      },
      {
        no: 25,
        text_i18n: {
          ja: "指令性(Command)",
          ko: "주도력(Command)테마",
          en: "Command",
        },
      },
      {
        no: 28,
        text_i18n: {
          ja: "自我(Significance)",
          ko: "존재감(Significance)테마",
          en: "Significance",
        },
      },
      {
        no: 29,
        text_i18n: {
          ja: "コミュニケーション(Communication)",
          ko: "커뮤니케이션(Communication)테마",
          en: "Communication",
        },
      },
      {
        no: 30,
        text_i18n: {
          ja: "競争性(Competition)",
          ko: "승부(Competition)테마",
          en: "Competition",
        },
      },
      {
        no: 33,
        text_i18n: {
          ja: "社交性(Woo)",
          ko: "사교성(Woo)테마",
          en: "Woo",
        },
      },
    ],
  },
];
