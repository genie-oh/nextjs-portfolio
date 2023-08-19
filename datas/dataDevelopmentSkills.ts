import { I_Skills } from "./types/I_Skills";
import {
  SiAmazonaws,
  SiDocker,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const dataDevelopmentSkills: I_Skills[] = [
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
    percent: 70,
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
    iconComponent: SiJavascript,
  },
  {
    percent: 90,
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
    percent: 40,
    title_i18n: {
      ja: "Java",
      ko: "Java",
      en: "Java",
    },
    text_i18n: {
      ja: "決済代行サービスの開発業務の中で、２年の間、Java開発を経験しておりました。現在はメインスキルではないですが、Java言語コンセプト、JVM、OOPコンセプトに対しては、強い関心を持っております。",
      ko: "결제대행서비스 개발 업무에서 2년 동안 Java개발을 경험하였습니다. 현재는 주 스킬이 아니지만 Java언어 컨셉, JVM, OOP 컨셉에 대해서는 큰 관심을 가지고 있습니다.",
      en: "Having experience on Java language for 2 years at payment gateway servcie. it's not main skill, but i have a interest about Java language, JVM, OOP concept on Java.",
    },
    iconComponent: SiJava,
  },
  {
    percent: 30,
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
  {
    percent: 50,
    title_i18n: {
      ja: "Docker",
      ko: "Docker",
      en: "Docker",
    },
    text_i18n: {
      ja: "Dockerを利用し、ウェブアプリケーションと複数のミドルウェアの複合環境を構成しサービスを構築できるスキルを保有しています。",
      ko: "Docker를 이용하여 웹어플리케이션과 다양한 미들웨어의 복합 환경을 구성하여 서비스를 구축할 수 있는 스킬을 보유하고 있습니다.",
      en: "Having Docker skills to build Composed-Environment-Service with web application and several middleware.",
    },
    iconComponent: SiDocker,
  },
  {
    percent: 25,
    title_i18n: {
      ja: "Amazon Web Service",
      ko: "Amazon Web Service",
      en: "Amazon Web Service",
    },
    text_i18n: {
      ja: "擬本的なEC2、S3、ELB、CloudFront、EBSなど、一部の知識を持っております。現在スキルアップのため、学習を続けております。",
      ko: "기본적인EC2, S3, ELB, CloudFront, EBS같은, 일부분의 지식을 보유하고 있습니다. 현재 스킬업을 위해 학습을 수행하고 있습니다.",
      en: "Having a little bit about it like EC2, S3, ELB, CloudFront, EBS basically. I am learning it to skill up.",
    },
    iconComponent: SiAmazonaws,
  },
];
