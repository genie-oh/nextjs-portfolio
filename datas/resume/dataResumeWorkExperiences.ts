import { I_i18n } from "../../i18n/Types/I_i18n";

type ExperiencesDataItems = {
  title: string;
  contents?: string[];
};

type ExperiencesDatas = {
  company: string;
  role: string;
  items: I_i18n<ExperiencesDataItems>[];
};

export const dataResumeWorkExperiences: ExperiencesDatas[] = [
  {
    company: "IBM Japan Systems Engineering / Sier, DX / 2022. 8 ~ NOW, Japan",
    role: "Full-stack Web Engineer、Lead Application Engineer",
    items: [
      {
        ja: {
          title: "建築関連企業様、現場資機材管理UIシステム開発",
          contents: [
            "UIシステム開発のサブリーダーを遂行 (Web, MobileApp, Infra)",
            "CrossPlatformにおけるAWS Cognito認証・認可基盤の設計・開発をリード",
            "既存Server APIのAPI Gateway移行をリード(Lambda & EB並行構成)",
          ],
        },
        ko: {
          title: "건축관련업계고객의 현장자재관리UI시스템개발",
          contents: [
            "UI시스템개발의 서브리더를 수행 (Web, MobileApp, Infra)",
            "CrossPlatform대응을 위한 AWS Cognito인증기반설계・개발을 리드",
            "기존ServerAPI의API Gateway이행을 리드(lambda & EB병행구축)",
          ],
        },
        en: {
          title:
            "Development of On-site Material Management UI System for Construction Ind.",
          contents: [
            "perform as sub-leader in UI System Development (Web, MobileApp, Infra)",
            "lead AWS Cognito Auth for CrossPlatform design and development",
            "lead migration Server-API to API Gateway (composed with lambda & EB)",
          ],
        },
      },
      {
        ja: {
          title: "科学関連企業様、原料管理・検索システムPoC開発",
          contents: [
            "お客様データ運用整備、DBモデリングをリード",
            "Backend API設計・開発をリード (Node.js + TypeScript + PostgreSQL)",
          ],
        },
        ko: {
          title: "화학관련업계고객의 원료관리・검색 시스템PoC개발",
          contents: [
            "고객데이터운용의 정비, DB모델링을 리드",
            "Backend API설계 개발을 리드 (Node.js + TypeScript + PostgreSQL)",
          ],
        },
        en: {
          title:
            "Development of Material Management, Search System for Chemical Ind.",
          contents: [
            "lead refine of customer data operations with DB modeling",
            "lead development of Backend API (Node.js+TypeScript+PostgreSQL)",
          ],
        },
      },
      {
        ja: {
          title: "その他プロジェクト",
          contents: [
            "社内研修実施リード(Node.js & TypeScriptで行うTDD&DDD基礎と実践)",
            "経費申請不正検知ソリューション開発PJリード(Python, Golang)",
            "PV発電量効率化PJにおいて、気象予測ソリューション検証をリード(EIS)",
            "店舗エネルギ使用量可視化UIシステム開発PJリード(Node.js + TS + MongoDB)",
          ],
        },
        ko: {
          title: "기타 프로젝트",
          contents: [
            "사내연수실시를 리드(Node.js & TypeScript로배우는TDD&DDD기초와실전)",
            "경비신청의부정탐지솔루션개발PJ를 리드(Python, Golang)",
            "PV발전량효율화PJ에서, 기상예측솔루션의 검증을 리드(EIS)",
            "점포에너지사용량의 가시화UI시스템개발PJ를 리드(Node.js + TS + MongoDB)",
          ],
        },
        en: {
          title: "Other Projects",
          contents: [
            "lead internal study session (TDD & DDD practice using Node.js & TypeScript)",
            "lead project of fraud detection for expense management (Python, Golang)",
            "lead study of weather forecasting solution for improving PV efficiency (EIS)",
            "lead project energy usage visualization for store(Node.js+TS+MongoDB)",
          ],
        },
      },
    ],
  },
  {
    company:
      "OZVISION inc. / In-house, PointSite, WebComic / 2022. 8 ~ NOW, Japan",
    role: "Full-stack Web Engineer, Lead Engineer",
    items: [
      {
        ja: {
          title: "ポイントサイトサービスにおいてのCX戦略の施策の開発・運用",
          contents: [
            "当社ポイント→他社ポイント交換システムリニュアルの提案・開発リード。\nコンポーネント思考設計・開発を通して複雑化したシステムの維持補修性を改善",
            "PayPay、Tポイント、dポイント、Bitcoinなどの外部サービス統合多数リード",
            "その他、CX組織のエンジニアチームのサブリーダーとして多数のPJリードを遂行",
          ],
        },
        ko: {
          title: "포인트사이트 서비스에서 CX전략 관련 개발과 운용",
          contents: [
            "당사포인트→타사포인트교환시스템의 리뉴얼의 제안・개발을 리드.\n컴포넌트지향설계・개발을 통해 복잡화된시스템의 유지보수성을 개선",
            "PayPay, T-Point, d-POINT, Bitcoin등의 외부서비스통합을 다수 리드",
            "그외, CX조직의 엔지니어팀의 서브리더로써 다수 프로젝트의 리더를 수행",
          ],
        },
        en: {
          title:
            "Development and Operation of CX Strategy Measures in Point Site Services",
          contents: [
            "lead proposal and development of the renewal of point exchange system.\n(using component-oriented, improve maintainability of complex system)",
            "lead integration many services (PayPay, T-Point, d-Point, Bitcoin, etc)",
            "as sub-leader of the CX engineering team, lead many projects",
          ],
        },
      },
      {
        ja: {
          title:
            "CtoC漫画投稿・販売の新規サービス立ち上げ・開発・運用（社内スタートアップ）",
          contents: [
            "サービス全体の概念・画面・データの設計と開発をリードエンジニアとして統括",
            "認可つき静的コンテンツ配信、ユーザー決済、売上集計機能の設計・開発リード",
            "漫画投稿→コンテンツ変換→出版機能の設計・開発、業務フロー定義をリード",
          ],
        },
        ko: {
          title:
            "CtoC만화출판판매 신규서비스의 전개・개발・운용(사내 스타트업)",
          contents: [
            "서비스전체의 개념・화면・데이터의 설계와 개발을 리드엔지니어로써 통괄",
            "인가기반 정적콘텐츠 제공, 유저결제, 판매집계기능의 설계・개발을 리드",
            "만화투고→콘텐츠변환→출판기능의 설계・개발・업무흐름정의를 리드",
          ],
        },
        en: {
          title:
            "Launch of CtoC Manga Publish&Sales Service (In-house Startup)",
          contents: [
            "As the lead engineer, lead design of entire service concept like below",
            "serving static content with authorization, management of payment & sales",
            "converting & publishing features of manga, with define the workflow",
          ],
        },
      },
    ],
  },
  {
    company: "DANAL inc. / In-house, Payment Gateway / 2022. 8 ~ NOW, Korea",
    role: "Backend Engineer, R&D Engineer",
    items: [
      {
        ja: {
          title:
            "「クレジット・金券・ポイント・キャリア」など多数の決済サービスAPI設計・開発",
        },
        ko: {
          title:
            "신용카드・상품권・포인트・휴대폰 등 다수 결제서비스API의 설계・개발",
        },
        en: {
          title:
            "specialized many payment service APIs like Credit, Voucher, Point, Carrier",
        },
      },
      {
        ja: {
          title:
            "「クレジットカード種別識別・BIN番号照会API(REST)サービス」の開発リード",
        },
        ko: {
          title: "신용카드 식별을 위한 BIN번호 조회 API(REST)서비스 개발 주도",
        },
        en: {
          title:
            "lead development of Credit Card BIN Number Inquiry API (REST) Service",
        },
      },
      {
        ja: {
          title:
            "「エンドポイント暗号化ウェブキーボード」特許取得・開発・実用化をリード",
        },
        ko: {
          title: "「종단간 암호화 웹 키보드」의 특허취득・개발・실용화를 주도",
        },
        en: {
          title:
            "About Encryption Web Keyboard, lead getting patent, development, on-service",
        },
      },
      {
        ja: {
          title:
            "CAPTCHA自社ソリューション開発リード(動的イメージ・音声生成エンジン開発)",
        },
        ko: {
          title:
            "CAPTCHA 자사 솔루션개발을 주도(동적 이미지・음성생성 엔진 개발)",
        },
        en: {
          title:
            "lead making of CAPTCHA solution(generating image and voice dynamically)",
        },
      },
    ],
  },
];
