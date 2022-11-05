import WorksDanalBackend from "../components/SectionWorksDetail/WorksDanalBackend";
import WorksDanalCaptcha from "../components/SectionWorksDetail/WorksDanalCaptcha";
import WorksDanalKeyboard from "../components/SectionWorksDetail/WorksDanalKeyboard";
import WorksDanalWeb from "../components/SectionWorksDetail/WorksDanalWeb";
import WorksOzvisionComic from "../components/SectionWorksDetail/WorksOzvisionComic";
import WorksOzvisionHapitas from "../components/SectionWorksDetail/WorksOzvisionHapitas";
import WorksUnivNetflow from "../components/SectionWorksDetail/WorksUnivNetflow";
import WorksUnivNetwork from "../components/SectionWorksDetail/WorksUnivNetwork";
import WorksUnivThesis from "../components/SectionWorksDetail/WorksUnivThesis";
import { I_Article } from "./types/I_Article";

export const dataWorks: I_Article[] = [
    {
        imgUrl: "/img/works/ise_dx.jpg",
        categories: [
            "Industry Domain",
            "Full-stack Web Developer",
            "Project Leader",
            "System(Requirement) Engineer/Advisor",
            "Tech Advisor/Trainer",
            "Back-end",
            "Front-end",
        ],
        title_i18n: {
            ja: "[IBMJ Systems Engineering] Develop Software and Service for Digital Trasformation, Advanced Technology",
            ko: "[IBMJ Systems Engineering] Develop Software and Service for Digital Trasformation, Advanced Technology",
            en: "[IBMJ Systems Engineering] Develop Software and Service for Digital Trasformation, Advanced Technology",
        },
        text_i18n: {
            ja: "Comming soon...",
            ko: "Comming soon...",
            en: `Comming soon...`,
        },
        date: "2022.8 ~ present",
        moreContentType: "soon",
    },
    {
        imgUrl: "/img/works/hapitas1.jpeg",
        categories: [
            "point-income",
            "e-commerce",
            "payment",
            "integrating service",
            "team sub-leader",
            "project leader",
            "architect",
            "lead engineer",
            "tech advisor/trainer",
        ],
        title_i18n: {
            ja: "[OZVISION, Inc.] ハピタスサービスにおいての、多数のプロジェクトを遂行",
            ko: "[OZVISION, Inc.] 해피타스 서비스에 대한 다수 프로젝트를 수행",
            en: "[OZVISION, Inc.] projects on Hapitas Service",
        },
        text_i18n: {
            ja: "プロジェクトリーダー、アーキテクト、リードエンジニアとして、自社サービスのアフィリエイト・ポイントサービスの開発を担当、T-POINT, PayPay, JAL mileage bank, dPOINTなど、多数の外部サービスの連携や統合プロジェクトをリード...",
            ko: "프로젝트 리더, 아키텍트, 리드 엔지니어로써, 자사서비스인 어필리에이트 포인트 서비스의 개발을 수행. T-POINT, PayPay, JAL mileage bank, dPOINT등 다수의 외부서비스 연계 및 통합 프로젝트를 주도...",
            en: `develop in-house point-income servcie.\nas P.L & architect & lead engineer, do integration various external services like T-POINT, PayPay, JAL mileage bank, dPOINT...`,
        },
        date: "2018.1 ~ 2022.7",
        moreContentType: "modal",
        moreContentModalComponent: WorksOzvisionHapitas,
    },
    {
        imgUrl: "/img/works/hapitascomic.jpeg",
        categories: [
            "start-up",
            "CtoC",
            "web-comics",
            "private-contents",
            "project leader",
            "architect",
            "lead engineer",
            "offshore",
        ],
        title_i18n: {
            ja: "[OZVISION, Inc.] ハピタスコミックにおいての、多数のプロジェクトを遂行",
            ko: "[OZVISION, Inc.] 해피타스 코믹 서비스에 대한 다수 프로젝트를 수행",
            en: "[OZVISION, Inc.] project on Hapitas Comics",
        },
        text_i18n: {
            ja: "スタートアップ・CtoCウェブコミックコマースサービス、リードエンジニアとして、決済、プライベートコンテンツ提供、出版など、コア機能とサービス全般の開発をリード...",
            ko: "스타트업 CtoC 웹 코믹 커머스 서비스. 리드 엔지니어로써 결제, 프라이빗 컨텐츠 제공, 출판 등 코어 기능과 서비스 전반 개발을 주도...",
            en: "Start up CtoC Web-Comic commerce service. as lead engineer, lead development to entire service and core feature like payment, private contents control, publishing...",
        },
        date: "2018.6 ~ 2019.12",
        moreContentType: "modal",
        moreContentModalComponent: WorksOzvisionComic,
    },
    {
        imgUrl: "/img/works/virtualkeyboard.png",
        categories: ["patent", "secure", "proposal", "research", "development", "architect"],
        title_i18n: {
            ja: "[DANAL, Inc] エンドポイントの間の暗号化を遂行するバーチャルキーボードの特許出願と開発",
            ko: "[DANAL, Inc] 종단간 암호화를 수행하는 가상 키보드의 특허 출원과 개발",
            en: "[DANAL inc] patent and develop to end-point encryption virtual keyboard",
        },
        text_i18n: {
            ja: "ウェブ上でのエンドポイントの間の全体暗号化を遂行するバーチャルキーボード。アイディアやプロトタイプの提案、アーキテクチャーデザイン、ソリューション開発、実サービスへの導入、特許出願を担当しリード...",
            ko: "웹상에서 종단간 전체 암호화를 수행하는 가상 키보드. 아이디어 및 프로토타입 제안, 아키텍처 디자인, 솔루션 개발, 실 서비스 도입, 특허 출원을 담당하여 주도...",
            en: "end-point fully encryption virtual keyboard on web. carried out patent, suggesting idea and prototype, design architecture, development of solution, integrating real services...",
        },
        date: "2014.2 ~ 2015.8",
        moreContentType: "modal",
        moreContentModalComponent: WorksDanalKeyboard,
    },
    {
        imgUrl: "/img/works/danal_backend.png",
        categories: ["payment", "integration", "back-end engineer"],
        title_i18n: {
            ja: "[DANAL, Inc.] 決済サービスのバックエンド開発",
            ko: "[DANAL, Inc.] 결제 서비스의 백엔드 개발",
            en: "[DANAL, Inc.] Payment Service back-end development",
        },
        text_i18n: {
            ja: "決済代行サービス、バックエンドエンジニアとして、多数の自社・他社の決済サービスに対し、アーキテクチャー設計、システム統合、文書化、API開発などを遂行...",
            ko: "결제 대행 서비스. 백엔드 개발자로써, 다수의 자사 및 타사 결제 서비스에 대해, 아키텍처 설계, 시스템 통합, 문서화, API개발 등을 수행...",
            en: "payment gateway service. as back-end engineer, design architecture, integrating, do documentation, develop api for many payment services like in-house and external services...",
        },
        date: "2016.1  ~ 2017.9",
        moreContentType: "modal",
        moreContentModalComponent: WorksDanalBackend,
    },
    {
        imgUrl: "/img/works/danal_captcha.png",
        categories: ["captcha", "image generating", "sound generating", "proposer"],
        title_i18n: {
            ja: "[DANAL, Inc.] キャプチャー・ミドルウェアソリューション",
            ko: "[DANAL, Inc.] 캡챠 미들웨어 솔루션",
            en: "[DANAL, Inc.] Captcha Middleware solution",
        },
        text_i18n: {
            ja: "イメージと音声を提供する独立型キャプチャー・ミドルウェアソリューション。アイディア提案、アーキテクチャー設計、および、イメージと音声のオンデマンドプロセッシングエンジンの開発をリード...",
            ko: "이미지와 음성을 지원하는 독립형 캡챠 미들웨어 솔루션. 아이디어 제안, 아키텍쳐 설계 및 이미지와 음성에 대한 주문형 처리 엔진의 개발을 주도...",
            en: "stand-alone captcha middleware solution provide image and sounds. suggest idea, design architecture and lead development about on-demand processing engine of generating image, sound...",
        },
        date: "2014.1 ~ 2014.4",
        moreContentType: "modal",
        moreContentModalComponent: WorksDanalCaptcha,
    },
    {
        imgUrl: "/img/works/danal_web.png",
        categories: ["payment web UI", "web engineer", "technical supporter"],
        title_i18n: {
            ja: "[DANAL, Inc.] 決済のウェブページ開発",
            ko: "[DANAL, Inc.] 결제 웹페이지 개발",
            en: "[DANAL, Inc.] Payment Webpage Development",
        },
        text_i18n: {
            ja: "ウェブ上でユーザーが決済を行うためのウェブページ。ジュニアエンジニアとして、キャリア決済、金券決済、ポイント決済、スマートTV、キオスクなど、多数の決済ウェブページの開発を遂行...",
            ko: "웹상에서 사용자가 결제를 이용하기 위한 웹페이지. 주니어 개발자로써 휴대폰결제, 상품권결제, 포인트 결제, 스마트TV, 키오스크 등 다수의 결제 웹페에지 개발을 수행...",
            en: "Webpages for user to payment on web. as junior engineer, development various payment webpage like mobile-phone, gift card, point card, smart TV platform, kiosk platform, etc...",
        },
        date: "2013. ~ 2015.",
        moreContentType: "modal",
        moreContentModalComponent: WorksDanalWeb,
    },
    {
        imgUrl: "/img/works/netflow_1.jpeg",
        categories: ["cisco router", "netflow protocol", "UDP protocol", "C#", "Android"],
        title_i18n: {
            ja: "[University] NetFlow5 Monitor -CISCOルーターのトラフィックモニタリングプログラム-",
            ko: "[University] NetFlow5 Monitor -라우터 트래픽 모니터링 프로그램-",
            en: "[University] NetFlow5 Monitor -router traffic monitoring program-",
        },
        text_i18n: {
            ja: "大学時代の個人プロジェクト。UDPタイプのnetflow protocolを利用し、CISCOルーターのトラフィックを監視するデスクトップ＆アンドロイドアプリを開発...",
            ko: "대학생 개인 프로젝트. UDP타입의 netflow protocol을 이용하여 시스코 라우터의 트래픽을 감시하는 데스크탑&안드로이드 앱을 개발...",
            en: "self-project on university student. develop desktop & android app to monitor cisco router's traffic using netflow UDP protocol...",
        },
        date: "2012.2",
        moreContentType: "modal",
        moreContentModalComponent: WorksUnivNetflow,
    },
    {
        imgUrl: "/img/works/datalink.jpg",
        categories: ["thesis", "security", "data-link", "ARP", "MAC", "STP", "VLAN"],
        title_i18n: {
            ja: "[University] 卒業論文 -OSI7レイヤーのデータリンク-階層の攻撃と防御-",
            ko: "[University] 학사논문 -OSI7계층 중 데이터링크 계층의 공격 및 방어-",
            en: "[University] thesis about attacking and preventing of data-link layer on OSI 7 layers.",
        },
        text_i18n: {
            ja: "ARP poisoning, MAC flooding, STP MiTM, VLAN hoppingなど、データリンク階層の衰弱点の攻撃パターンと防御に関して考察...",
            ko: "ARP poisoning, MAC flooding, STP MiTM, VLAN hopping등, 데이터링크계층의 취약점에 대해 공격패턴과 방어를 고찰...",
            en: "study about attack pattern and prevention on data-link layer weakness like ARP poisoning, MAC flooding, STP MiTM, VLAN hopping...",
        },
        date: "2011.10",
        moreContentType: "modal",
        moreContentModalComponent: WorksUnivThesis,
    },
    {
        imgUrl: "/img/works/internetwork.jpg",
        categories: ["inter-network", "cisco router", "switching", "RIP", "OSPF", "BGP", "IPv6"],
        title_i18n: {
            ja: "[University] CCNPコース・プロジェクト -IGP, BGP, DHCP, IPv6で構成されるインターネットワーク構築-",
            ko: "[University] CCNP과정 프로젝트 -IGP, BGP, DHCP, IPv6로 구성된 인터네트워크 구축-",
            en: "[University] CCNP course project -building inter-network consist of IGP, BGP, DHCP, IPv6-",
        },
        text_i18n: {
            ja: "大学コースのチームプロジェクト。CISCOルーターのエミュレーターを利用したインターネットワーク構築。チームリーダーとして、計画作成、調査、研究、シミュレーション、具現、プレゼンテーションをリード...",
            ko: "대학과정의 팀프로젝트. 시스코 라우터의 에뮬레이터를 이용한 인터네트워크 구축. 팀리더로써 계획작성, 조사, 연구, 시뮬레이션, 구현, 프리젠테이션을 주도...",
            en: "team-project on university. bulid inter-network on dynamips that emulate cisco-routers. as team-leader, lead planing, research, study, simulating, implement. presentation...",
        },
        date: "2010.6",
        moreContentType: "modal",
        moreContentModalComponent: WorksUnivNetwork,
    },
];
