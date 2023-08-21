import { I_i18n } from "../../i18n/Types/I_i18n";

type Skill = {
  title: string;
  items: I_i18n<string[]>;
};

const devSkills = [
  "Node.js / TypeScript / JavaScript",
  "React / TailwindCSS / ResponsiveWeb",
  "MySQL / PostgreSQL / MongoDB",
  "AWS (Application Developer Friendly)",
  "PHP / Python / Java",
  "Docker",
];

export const dataResumeSkills: Skill[] = [
  {
    title: "Engineering",
    items: {
      ja: [
        "Back-end設計 / Full-Stack開発",
        "外部サービスの自社サービス統合経験",
        "アーキテクチャー・デザイン",
        "データ・システムモデリング",
        "OOP (skilful)",
        "TDD, DDD, Clean ARCH. (interested)",
      ],
      ko: [
        "Back-end설계 / Full-stack개발",
        "외부서비스통합경험",
        "아키텍쳐디자인",
        "데이터 / 시스템 모델링",
        "OOP (skilful)",
        "TDD, DDD, Clean ARCH.(interested)",
      ],
      en: [
        "Back-end Design&Develop",
        "Full-stack Develop",
        "Know-how integration of services",
        "architecture design",
        "data&system modeling",
        "OOP (skilful)",
        "TDD, DDD, Clean ARCH.(interested)",
      ],
    },
  },
  {
    title: "Developer",
    items: {
      ja: devSkills,
      ko: devSkills,
      en: devSkills,
    },
  },
];
