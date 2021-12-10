import { I_Skills } from "./types/I_Skills";
import { FcServices, FcCollaboration, FcDocument, FcCollect, FcFlowChart, FcDataSheet } from "react-icons/fc";

export const dataEngineeringSkills: I_Skills[] = [
    {
        percent: 90,
        title_i18n: {
            ja: "Back-end開発",
            ko: "백엔드 개발",
            en: "Back-end development",
        },
        text_i18n: {
            ja: "Back-end APIの要件定義、プロトコル定義、文書化、開発において貢献できます。\n\nまた、クレジットカード、ギフト、携帯などの利用した決済サービスやアフィリエイト・ポイントサービス分野で多様な開発を経験しております。",
            ko: "백엔드API의 요건정의, 규약정의, 문서화, 개발에 기여할 수 있습니다. \n\n또한 신용카드, 기프트, 휴대폰등을 이용한 결제 시스템과 어필리에이트 포인트 서비스등에서 다양한 개발 경험을 가지고 있습니다.",
            en: "Can contribute for requirement definition, protocol design, documentation, development on Back-end API.\n\nHaving various experious development like web & payment service which are credit, gift card, cellphone, point-income",
        },
        iconComponent: FcServices,
    },
    {
        percent: 60,
        title_i18n: {
            ja: "フルスタック開発、及び業務遂行",
            ko: "풀 스택 개발 및 업무수행",
            en: "Full-stack roles on development",
        },
        text_i18n: {
            ja: "Back-end, Front-end、及ぶサービス全体においての開発に幅広く貢献できます。例として、部分的な事業デザイン、ストーリーボード、ワイヤーフレーム、プロトタイピング、プロジェクト計画と管理、技術選定、開発、リリース、運用まで幅広く遂行してきた経験があります。\n\n幅広い観点から生まれる発想は、私の強みの一つです。",
            ko: "백엔드, 프론트엔드 및 전체 서비스 개발에 폭넓게 기여 할 수 있습니다. 예로 부분적인 사업 디자인, 스토리보드, 와이어프레임, 프로토타이핑, 프로젝트계획 및 관리, 기술 선정, 개발, 출시, 운용까지 폭넓게 수행해 온 경험이 있습니다.\n\n넓은 관점에서 기인하는 발상은 저의 강점 포인트 중 하나입니다.",
            en: "Can contribute on back-end, front-end, and entire service development by wide range. for examples, partly business design, story board, wireframe, prototyping, project planning&management, technical choice, development, release, operation.\n\nHaving widely aspective thinking, My Strength Point is.",
        },
        iconComponent: FcCollaboration,
    },
    {
        percent: 70,
        title_i18n: {
            ja: "サービス要件定義",
            ko: "서비스 요건 정의",
            en: "Requirement Definition",
        },
        text_i18n: {
            ja: "ビジネスの目標の観点を含め、サービス機能、ユーザーインタフェース、データフロー、業務フロー、システム要件定義、及び文書化に貢献できます。",
            ko: "비지니스 목표의 관점을 포함하여, 서비스 기능, 사용자 인터페이스, 데이터 흐름, 업무 흐름, 시스템 요구사항에 대한 정의 및 문서화에 대해 기여할 수 있습니다.",
            en: "Can contribute it which are definition and documentation of a service features, user Interface, data flow, work flow, system requirement. along with aspect business objective and values.",
        },
        iconComponent: FcDocument,
    },
    {
        percent: 80,
        title_i18n: {
            ja: "多様な外部サービスに対する、自社サービスへの統合経験",
            ko: "다양한 외부 서비스에 대한 자사 서비스 통합 경험",
            en: "Integration with various services",
        },
        text_i18n: {
            ja: "他社サービスを統合することにおいて、ソリューション選定、仕様把握、アーキテクチャー設計、開発のような、サービス統合業務の全般において貢献できます。クライアントとしての統合経験はもちろん、サービス提供者としての製品開発と技術支援を経験しております。この経験は、サービス統合のニーズにおいて大きなメリットになると思います。",
            ko: "타사 서비스를 통합하는데 있어 솔루션 선택, 사양 파악, 아키텍처 설계, 개발 같은 서비스 통합 업무 전반에 기여할 수 있습니다. 클라이언트로써의 통합은 물론, 서비스 제공자로서의 제품 개발과 기술 지원 경험이 있습니다. 이 경험은 서비스 통합 요구에 있어 큰 도움이 될 것입니다.",
            en: "Can contribute integrating third-party service on your service like solution choice, figure out specifications, planing, architecutre design, devleopment. i have experiences of both that provider and client on it. and it will be very helpful.",
        },
        iconComponent: FcCollect,
    },
    {
        percent: 80,
        title_i18n: {
            ja: "アーキテクチャー・デザイン",
            ko: "아키텍처 디자인",
            en: "Architecture Design",
        },
        text_i18n: {
            ja: "サービス、コンポーネント、インタフェース、クラスのような設計階層に対して、UMLやその他のダイアグラム・モデリングスキル、文書化のスキルを駆使し、ウェブサービスやソフトウェアのアーキテクチャー設計に貢献できます。加えて、私は、プログラミング言語コンセプト、コンピューターサイエンス、サービスアーキテクチャーに強く興味を持ってます。",
            ko: "서비스, 컴포넌트, 인터페이스, 클래스와 같은 부분의 설계 계층에 대해 UML이나 그외 다이어그램, 모델링, 문서화 스킬을 구사하여, 웹서비스나 소프트웨어 아키텍처설계에 기여할 수 있습니다. 덧붙여 저는 프로그래밍 언어 컨셉이나 컴퓨터 과학, 서비스 아키텍처에 흥미를 가지고 있습니다.",
            en: "Can contribute architecture design about web service and software using documentation and diagram skill like UML about service, component, interface, class level. and i feel a strong urge to concept of programming language, computer science, service architecutre.",
        },
        iconComponent: FcFlowChart,
    },
    {
        percent: 60,
        title_i18n: {
            ja: "データ関係の設計",
            ko: "데이터 관계 설계",
            en: "Entity Relationship Design",
        },
        text_i18n: {
            ja: "データ構造、エンティティー関係、及びデータフローのような、サービスにおいてのデータベースの設計やダイヤグラム化に貢献できます。",
            ko: "데이터 구조, 엔티티 관계 및 데이터흐름과 같은 서비스 데이터베이스에 대한 설계 및 다이어그램화에 기여할 수 있습니다.",
            en: "Can contribute design diagrams on database of your service like data structure, entity relationship, and data flow.",
        },
        iconComponent: FcDataSheet,
    },
];
