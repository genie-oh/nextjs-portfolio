import { I_Skills } from "./types/I_Skills";
import {
  SiAmazonaws,
  SiGo,
  SiHtml5,
  SiJava,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const dataDevelopmentSkills: I_Skills[] = [
  {
    percent: 90,
    title_i18n: {
      ja: "Go",
      ko: "Go",
      en: "Go",
    },
    text_i18n: {
      ja: "2024年から主力言語として磨いていきます。Go, Gin, Gorm, Sqlx, gRPC, Asynqなどを活かしたバックエンド開発を試みています。",
      ko: "2024부터 주력 언어로써 정진하고 있습니다. Go, Gin, Gorm, Sqlx, gRPC, Asynq 등을 활용한 백엔드 개발을 해나가려고 합니다.",
      en: "Using as Main Skill at 2024, Try to back-end development with Go, Gin, Gorm, Sqlx, gPRC, Asynq.",
    },
    iconComponent: SiGo,
  },
  {
    percent: 80,
    title_i18n: {
      ja: "Java",
      ko: "Java",
      en: "Java",
    },
    text_i18n: {
      ja: "2024年からまた主力言語として磨いていきます。前までは、決済代行サービスの開発業務の中で２年の間、Java開発を経験しておりました。Java言語コンセプト、JVM、OOPコンセプトに対しては、強い関心を持っております。",
      ko: "2024년부터 다시금 주력 언어로써 정진하고 있습니다. 이전에는 결제대행서비스 개발 업무에서 2년 동안 Java개발을 경험하였습니다. Java언어 컨셉, JVM, OOP 컨셉에 대해서는 큰 관심을 가지고 있습니다.",
      en: "Using as Main Skill at 2024, At past, I had experience on Java language for 2 years at payment gateway servcie. i have a interest about Java language, JVM, OOP concept on Java.",
    },
    iconComponent: SiJava,
  },
  {
    percent: 70,
    title_i18n: {
      ja: "MySQL",
      ko: "MySQL",
      en: "MySQL",
    },
    text_i18n: {
      ja: "アプリケーションに対してのクエリー作成や使用に対してある程度熟練しております。クエリーチューニング、運用、設定、実行計画分析など、データベース性能に関わる深化スキルを部分的に持っております。",
      ko: "어플리케이션에 대한 쿼리 작성 및 사용에 능숙합니다. 쿼리튜닝, 운영, 설정, 실행 계획 분석과 같은 데이터베이스 성능 관련 심화 스킬을 부분적으로 보유하고 있습니다.",
      en: "Good at make and use query for application. having some skills for mysql like analyzing execution plan for database performance, query tuning, operation, configuration.",
    },
    iconComponent: SiMysql,
  },
  {
    percent: 50,
    title_i18n: {
      ja: "AWS for DevOps",
      ko: "AWS for DevOps",
      en: "AWS for DevOps",
    },
    text_i18n: {
      ja: "Cognito, API Gateway, Lambda, S3, CloudFrontなどを活用したアプリケーション設計と開発スキルを持っております。CI/CD、EKS、またはEBへのサービス構築への基礎的な知識を持っております。現在スキルアップのため、学習を続けております。",
      ko: "Cognito, API Gateway, Lambda, S3, CloudFront등을 활용한 어플리케이션의 설계 및 개발 스킬을 보유하고 있습니다. CI/CD, EKS 또는 EB 서비스 구축에 대한 기초적인 지식을 가지고 있습니다. 현재 스킬업을 위해 노력중입니다.",
      en: "Have application design and development skills using Cognito, API Gateway, Lambda, S3, CloudFront, etc. additionally, have basic skills of building services for CI/CD, EKS or EB. I am learning it to skill up.",
    },
    iconComponent: SiAmazonaws,
  },
  {
    percent: 90,
    title_i18n: {
      ja: "TypeScript, JavaScript",
      ko: "TypeScript, JavaScript",
      en: "TypeScript, JavaScript",
    },
    text_i18n: {
      ja: "ECMA6, ECMA5の詳細仕様とコアメカニズムに対する知識を含め、TypeScriptとJavaScript言語の知識を持っております。",
      ko: "ECMA6, ECMA5 상세 사양과 핵심 메커니즘에 대한 지식과 함께 TypeScript와 JavaScript언어의 지식을 보유하고 있습니다.",
      en: "Having knowledge about TypeScript and JavaScript with some ECMA6 and ECMA5 specification and core mechanism.",
    },
    iconComponent: SiTypescript,
  },
  {
    percent: 90,
    title_i18n: {
      ja: "Node.js",
      ko: "Node.js",
      en: "Node.js",
    },
    text_i18n: {
      ja: "Nodejs & Typescript基盤でのExpress, NestJSなどのフレームワークを使ったエンタープライズ・ウェブサービス開発を主力スキルとして保有しています。",
      ko: "Nodejs & Typescript기반과 Express, NestJS등의 프레임워크를 이용한 엔터프라이즈 웹서비스 개발을 주력 스킬로 보유하고 있습니다.",
      en: "It's my currently main skill that developing enterprise web service on Nodejs & Typescript environment with Express, NestJS.",
    },
    iconComponent: SiNodedotjs,
  },
  {
    percent: 60,
    title_i18n: {
      ja: "React",
      ko: "React",
      en: "React",
    },
    text_i18n: {
      ja: "ReactとNext.jsを活用した、フロントエンド開発、インタラクティブウェブ、CDD、SPAなどにおいて、一部のスキルを持っております。",
      ko: "React와 Next.js를 활용한 프론트엔드 개발, 인터렉티브 웹, CDD, SPA등에 대해 일부 스킬을 보유하고 있습니다.",
      en: "Having some skill like front-end development, interactive web, CDD, SPA with React, Next.js.",
    },
    iconComponent: SiReact,
  },
  {
    percent: 60,
    title_i18n: {
      ja: "TailwindCSS",
      ko: "TailwindCSS",
      en: "TailwindCSS",
    },
    text_i18n: {
      ja: "TailwindCSを活用した、マークアップスタイリング、レスポンシブウェブ、レイアウト設計・具現において、一部スキルを持っております。",
      ko: "TailwindCSS를 활용한 마크업 스타일링, 반응형 웹, 레이아웃 구현 등에 대해 일부 스킬을 보유하고 있습니다.",
      en: "Having some skill like markup styling, responsive web, make layout with TailwindCSS.",
    },
    iconComponent: SiTailwindcss,
  },
  {
    percent: 80,
    title_i18n: {
      ja: "PHP",
      ko: "PHP",
      en: "PHP",
    },
    text_i18n: {
      ja: "PHPの深い理解を持ち、Laravel, Symfony, Codeigniterなど、多様なフレームワークでのウェブサービス開発経験があります。",
      ko: "PHP에대한 깊은 이해와 함께, Laravel, Symfony, Codeigniter등의 다양한 프레임워크로의 웹서비스 개발 경험이 있습니다.",
      en: "Having deepened as skill about PHP core and some framework which are Laravel, Symfony, Codeigniter, etc. Additionally, I have wide experience about developing web services using it.",
    },
    iconComponent: SiPhp,
  },
  {
    percent: 50,
    title_i18n: {
      ja: "Python",
      ko: "Python",
      en: "Python",
    },
    text_i18n: {
      ja: "Djangoフレームワーク、およびPython言語に対して、一部の範囲のスキルを持っております。最近の私の興味部門であり、学習を続けております。",
      ko: "Django프레임워크 및 Python언어에 대해 약간의 스킬을 보유하고 있습니다. 최근 저의 관심사로 학습을 이어가고 있습니다.",
      en: "Having some skills of django framework and Python language. and i studying it continuously. It is my interest recently.",
    },
    iconComponent: SiPython,
  },
  {
    percent: 70,
    title_i18n: {
      ja: "traditional HTML, CSS, JQuery",
      ko: "traditional HTML, CSS, JQuery",
      en: "traditional HTML, CSS, JQuery",
    },
    text_i18n: {
      ja: "一般的なHTML, CSSとJQeuryに対するスキルと、開発経験を持っております。",
      ko: "일반적인 HTML, CSS과 JQuery에 대한 스킬과 개발 경험을 보유하고 있습니다.",
      en: "Having purely HTML, CSS skills and experience development using it.",
    },
    iconComponent: SiHtml5,
  },
];
