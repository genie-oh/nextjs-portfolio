import { FunctionComponent } from "react";
import { I_i18n } from "../i18n/Types/I_i18n";

import { MdSchool, MdStar, MdWork } from "react-icons/md";
import { HiTrendingUp } from "react-icons/hi";
import { IoAirplane } from "react-icons/io5";

interface I_styleSet {
  iconStyle: object;
  contentStyle: object;
  contentArrowStyle: object;
}

interface I_struct {
  iconComponent: FunctionComponent;
  imgUrl: string;
  imgTitle: string;
  imgText_i18n: I_i18n<string>;
  period: string;
  title: string;
  categories: string[];
  where: string;
  whereUrl: string;
  country: "korea" | "japan" | "global";
  textlist_i18n: I_i18n<string>[];
  styleSet: I_styleSet;
}

export const dataCarrers: I_struct[] = [
  {
    iconComponent: HiTrendingUp,
    imgUrl: "/img/careers/onfuture.jpg",
    imgTitle: "Architect",
    imgText_i18n: {
      ja: "サービスとソフトウェアのアーキテクチャーを先頭からリード",
      ko: "서비스와 소프트웨어 아키텍처를 선두에서 주도",
      en: "lead architecture on service, software as cheif",
    },
    period: "on Future",
    title: "To the Cheif Service/Software Architect",
    categories: [
      "Cheif Service/Software Architect",
      "Cheif Back-end Engineer",
      "Information Architect",
      "Tech Leader",
    ],
    where: "finding the chance",
    whereUrl: null,
    country: "global",
    textlist_i18n: [
      {
        ja: "BtoB, BtoC, CtoCなどのサービスのアーキテクチャーにおいての、高いレベルの設計",
        ko: "BtoB, BtoC, CtoC등의 서비스의 아키텍처에 있어 높은 수준의 설계",
        en: "to awesome design of BtoB, BtoC, CtoC service architecture",
      },
      {
        ja: "Back-endを主力とし、サービスのシステム全体の開発と運用をリード",
        ko: "백엔드를 주력으로 서비스 전체 시스템의 개발 운용을 주도",
        en: "to lead development and operation entire service's system specializing back-end",
      },
      {
        ja: "サービスの情報と要件の定義をリード",
        ko: "서비스의 정보와 요건의 정의를 주도",
        en: "to lead definition service information & requirement",
      },
      {
        ja: "サービス開発においての技術をリード",
        ko: "서비스개발에 대한 기술을 주도",
        en: "to lead technology on service development",
      },
    ],
    styleSet: {
      contentStyle: {
        background:
          "linear-gradient(29deg, rgb(255 231 128) 0%, rgb(255 146 146) 100%)",
      },
      contentArrowStyle: { borderRight: "7px solid  rgb(241, 177, 128)" },
      iconStyle: { background: "rgb(254, 123, 121)", color: "#fff" },
    },
  },
  {
    iconComponent: MdWork,
    imgUrl: "/img/careers/ise2.png",
    imgTitle:
      "Software and Service for Digital Trasformation, Advanced Technology",
    imgText_i18n: {
      ja: "Next Innovation with Our Technical Vitality",
      ko: "Next Innovation with Our Technical Vitality",
      en: "Next Innovation with Our Technical Vitality",
    },
    period: "2022.8 - present",
    title: "Lead Web Engineer / Advisory",
    categories: [
      "Full-stack Web Developer",
      "Project Leader",
      "System(Requirement) Engineer/Advisor",
      "Tech Advisor/Trainer",
      "Back-end",
      "Front-end",
    ],
    where: "IBM Japan Systems Engineering Co., Ltd.",
    whereUrl: "https://www.ibm.com/jp-ja/about/subsidiaries/ise",
    country: "japan",
    textlist_i18n: [
      {
        ja: "企業の業務DX化検討におけるPoC版ウェブサービスにおいて、データ領域の要件定義・設計・コンサルティング、バックエンドサービスの設計・開発をリード",
        ko: "기업의업무DX화검토에 대한 PoC판 웹서비스의 데이터 영역의 요건정의/설계/컨설팅 및 백엔드서비스의 설계/개발을 리드 ",
        en: "laed data design and back-end service with defining requirement/consulting in PoC web service project about digital transformation of company.",
      },
      {
        ja: "Technical Vitality活動におけるコミッター、アドバイザー、リーダーを遂行 (新人 Hackason 研修、TDDをテーマとしたScrum Developerセミナー企画)",
        ko: "Technical Vitality활동에 대한 커밋터, 어드바이저, 리더를 수행 (신인 Hackason 연수, TDD를 테마로 한 Scrum Developer 세미나 기획)",
        en: "act as committer, advisor, leader about activity of Technical Vitality (Hackason Training for Newcomer, seminar plainning about TDD for scrum developers).",
      },
    ],
    styleSet: {
      contentStyle: null,
      contentArrowStyle: null,
      iconStyle: { background: "rgba(5, 150, 105, 1)", color: "#fff" },
    },
  },
  {
    iconComponent: MdWork,
    imgUrl: "/img/careers/hapitas1.jpeg",
    imgTitle: "Hapitas",
    imgText_i18n: {
      ja: "300万以上のユーザーを持つ、ポイントサービス",
      ko: "300만 이상의 유저를 보유한 어필리에이트 포인트 서비스",
      en: "Point Income/Affiliate Service having over 3 milion users",
    },
    period: "2020.1 - 2022.7",
    title: "Lead Engineer",
    categories: [
      "Team SubLeader",
      "Project Leader",
      "System(Requirement) Engineer",
      "Tech Advisor/Trainer",
      "Back-end",
      "Front-end",
    ],
    where: "OZ-VISION, Inc.",
    whereUrl: "https://www.oz-vision.co.jp/",
    country: "japan",
    textlist_i18n: [
      {
        ja: "ソフトウェアアーキテクチャー改善を含む、ポイント交換システムのリニュアルプロジェクトをリード",
        ko: "소프트웨어 아키텍처의 개선을 포함한 포인트 교환 시스템 리뉴얼 프로젝트를 주도",
        en: "lead renewal project of point exchange system with improve software architecture.",
      },
      {
        ja: "PayPay, T-POINT, JAL Mileage Bank, dPOINTなど、メジャーポイントサービスに対して、自社サービスシステムへの統合プロジェクトの多数をリード",
        ko: "PayPay, T-POINT, JAL Mileage Bank, dPOINT등 메이저 포인트 서비스에 대한 자사 시스템으로의 통합 프로젝트 다수를 주도",
        en: "lead various services integration projects to exchange hapitas point to it likes PayPay, T-POINT, JAL Mileage Bank, dPOINT that major payment or point service.",
      },
      {
        ja: "サービス監視など、ソリューション提案や導入をリード",
        ko: "서비스 감시 등 솔루션 제안 및 도입 주도",
        en: "suggest and lead introduction of solutions like service watching strategy, etc",
      },
      {
        ja: "ハピタスサービスにおいての、多数の機能開発や運用を遂行",
        ko: "해피타스 서비스에 대해 다수 기능 개발 및 운용을 수행",
        en: "develop & operate others a lot on Hapitas Service.",
      },
    ],
    styleSet: {
      contentStyle: null,
      contentArrowStyle: null,
      iconStyle: { background: "rgba(5, 150, 105, 1)", color: "#fff" },
    },
  },
  {
    iconComponent: MdWork,
    imgUrl: "/img/careers/hapitascomic.jpeg",
    imgTitle: "Hapitas Comic",
    imgText_i18n: {
      ja: "CtoCウェブ漫画販売サービス（スタートアップ、サービス終了）",
      ko: "CtoC 웹 만화 판매 서비스(스타트업, 서비스 종료)",
      en: "CtoC Web Comics Market Service (Startup. service closed)",
    },
    period: "2018.6 - 2019.12",
    title: "Lead Engineer",
    categories: [
      "Software Lead Engineer",
      "System(Requirement) Engineer",
      "Offshore Unit Leader",
      "Back-end",
      "Front-end",
    ],
    where: "OZ-VISION, Inc.",
    whereUrl: "https://www.oz-vision.co.jp/",
    country: "japan",
    textlist_i18n: [
      {
        ja: "要件定義、データ関係モデリング、サイトマップ構成、ワイヤーフレーム、機能明細など、サービスアーキテクチャー全体をリード",
        ko: "요건정의, 데이터관계모델링, 사이트맵구성, 와이어프레임, 기능명세 등 서비스 아키텍처 설계 전체를 주도",
        en: "lead service architecture design entirely likes requirement definition, database modeling, sitemap, wireframe, functional specification",
      },
      {
        ja: "複合決済、取引、プライベートコンテンツ提供、漫画のウェブ出版など、サービスの核心機能の開発をリード",
        ko: "복합결제, 거래, 프라이빗 컨텐츠 제공, 만화 웹 출판 기능 등 서비스의 핵심 기능의 개발을 주도",
        en: "lead service core features development likes payment, commerce, private contents control, publish comics",
      },
      {
        ja: "２名で構成されたオフショア開発ユニットの開発ディレクション、管理",
        ko: "2명으로 구성된 오프쇼어 개발 유닛의 개발 디렉션, 관리",
        en: "do management offshore development unit which consist of 2 members.",
      },
    ],
    styleSet: {
      contentStyle: null,
      contentArrowStyle: null,
      iconStyle: { background: "rgba(5, 150, 105, 1)", color: "#fff" },
    },
  },
  {
    iconComponent: IoAirplane,
    imgUrl: null,
    imgTitle: null,
    imgText_i18n: null,
    period: "2018.1 - 2018.5",
    title: null,
    categories: null,
    where: null,
    whereUrl: null,
    country: "japan",
    textlist_i18n: [
      {
        ja: "技術部門在留資格取得、韓国から日本、東京へ入国",
        ko: "기술부문 재류자격 취득, 한국에서 일본 도쿄로 입국",
        en: "get Status of Residence on Engineer by JAPAN. enter the JAPAN. Tokyo..",
      },
      {
        ja: "株式会社オズビジョンへ、メンバーエンジニアとして入社",
        ko: "주식회사 오즈비전에 엔지니어 맴버로 입사",
        en: "join OZ-VISION, Inc. as member engineer.",
      },
      {
        ja: "Bitflyerのビットコイン送金サービスをハピタスのポイント交換システムへ統合するプロジェクトを遂行",
        ko: "비트플라이어 비트코인 송금 서비스를 해피타스 포인트 교환에 통합하는 프로젝트를 수행",
        en: "do project of integrating bitflyer bitcoin transfer service to hapitas point exchange.",
      },
      {
        ja: "新人エンジニアに対し、ソフトウェア開発部門のトレーナーとしてコーチングを遂行",
        ko: "신입 엔지니어에 대해 소프트웨어 개발 트레이너로써 코칭을 수행",
        en: "do coach as trainer about software development to newcomers.",
      },
    ],
    styleSet: {
      contentStyle: null,
      contentArrowStyle: null,
      iconStyle: { background: "rgb(254, 123, 121)", color: "#fff" },
    },
  },
  {
    iconComponent: MdWork,
    imgUrl: "/img/careers/danal1.png",
    imgTitle: "Payment Gateway Service",
    imgText_i18n: {
      ja: "クレジットカード、ギフト、ポイントメンバーシップなど、多数の決済サービスの開発と運用を担当",
      ko: "신용카드, 상품권, 포인트맴버쉽 등등 다수 결제 서비스의 개발 운용을 담당",
      en: "in charge of development and operation about many payment service likes credit card, gift card, membership card point, etc",
    },
    period: "2015.1 - 2017.9",
    title: "Back-end Engineer",
    categories: [
      "Back-end Engineer",
      "System(Requirement) Engineer",
      "Small Project Leader",
      "Middleware Engineer",
    ],
    where: "DANAL, Inc.",
    whereUrl: "https://www.danalpay.com",
    country: "korea",
    textlist_i18n: [
      {
        ja: "多数の決済代行システムに対してのアーキテクチャー設計を担当",
        ko: "다수의 결제 대행 시스템들에 대한 아키텍처 설계를 담당",
        en: "do architecture design of payment gateway systems",
      },
      {
        ja: "多数の外部サービス社の決済サービスにおいて、統合開発業務を担当",
        ko: "다수의 외부 서비스사의 결제 서비스에 대해 통합 개발 업무를 담당",
        en: "integrating many payment service of other provider's",
      },
      {
        ja: "多数の決済代行システムにおいて文書化を担当",
        ko: "다수의 결제 대행 시스템들에 대한 문서화를 담당",
        en: "do making documentation for payment gateway systems",
      },
      {
        ja: "決済代行の取引システムに対する開発や運用を担当",
        ko: "결제 대행의 거래 시스템에 대한 개발 및 운용을 담당",
        en: "develop & operate payment gateway transaction servers",
      },
      {
        ja: "ミドルウェアソリューションソフトウェアに対するアドバイザーを担当",
        ko: "미들웨어 솔루션 소프트웨어에 대한 어드바이저를 담당",
        en: "advise about stand-alone middleware solution softwares",
      },
    ],
    styleSet: {
      contentStyle: null,
      contentArrowStyle: null,
      iconStyle: { background: "rgba(37, 99, 235, 1)", color: "#fff" },
    },
  },
  {
    iconComponent: MdWork,
    imgUrl: "/img/careers/danal2.png",
    imgTitle: "Patent Virtual-keyboard System",
    imgText_i18n: {
      ja: "ユーザー入力に対し、エンドポイントの間の保安暗号化を遂行し送信する技術の特許を取得",
      ko: "사용자 입력에 대해 종단 간 보안 암호화를 수행하여 전송하는 기술에 대한 특허를 취득",
      en: "patent about sending user input data by secure encoding between end-point",
    },
    period: "2014.1 - 2015.1",
    title: "Middleware / R&D Engineer",
    categories: [
      "Patent Project Leader",
      "Middleware Solution Engineer",
      "Software Architect",
      "Web Engineer",
    ],
    where: "DANAL, Inc.",
    whereUrl: "https://www.danalpay.com",
    country: "korea",
    textlist_i18n: [
      {
        ja: "ウェブ上のユーザー認証のためのエンドポイント暗号化の仮想キーボードの生成においての特許を提案、導入プロジェクトをリード",
        ko: "웹상의 사용자 인증을 위한 종단간 암호화 가상 키보드의 생성에 대한 특허에 대해 제안 및 도입 프로젝트를 주도",
        en: "suggest and lead to patent about generating end-point encryption virtual keyboard for user authentication on web",
      },
      {
        ja: "エンドポイント暗号化の仮想キーボードを、クレジットカード、本人認証サービスに統合する案件を主導",
        ko: "종단간 암호화 가상 키보드를 신용카드, 본인인증 서비스에 통합하는 안건을 주도",
        en: "lead to integration of end-point encryption virtual keyboard to services like credit-card payment, identify authentication service.",
      },
      {
        ja: "決済サービスにおいて、スタンドアローンタイプのキャプチャソリューションの提案、開発、導入をリード",
        ko: "결제 서비스에 독립형 캡챠 솔루션을 제안, 개발 및 도입을 주도",
        en: "suggest and lead to development and introduction of making stand-alone captcha solution on payment service.",
      },
    ],
    styleSet: {
      contentStyle: null,
      contentArrowStyle: null,
      iconStyle: { background: "rgba(37, 99, 235, 1)", color: "#fff" },
    },
  },
  {
    iconComponent: MdWork,
    imgUrl: "/img/careers/danal3.png",
    imgTitle: "Payment Service Web Page",
    imgText_i18n: {
      ja: "多数の決済サービスのユーザー決済ウェブページの開発を遂行",
      ko: "다수의 결제 서비스에 대한 사용자 결제 웹페이지 개발을 수행",
      en: "develop user payment web page of various payment service",
    },
    period: "2013.1 - 2013.12",
    title: "Junior Web Engineer",
    categories: ["Web Engineer", "TechSupport", "Junior"],
    where: "DANAL, Inc.",
    whereUrl: "https://www.danalpay.com",
    country: "korea",
    textlist_i18n: [
      {
        ja: "携帯、ギフト、メンバーシップポイントなど、多数の決済サービスのユーザー決済ウェブページの開発を遂行",
        ko: "휴대폰, 상품권, 맴버쉽포인트 등 다양한 결제서비스의 사용자 결제 웹페이지의 개발을 수행",
        en: "develop various web page for user want to payment like like mobile-phone, gift card, point card, etc.",
      },
      {
        ja: "PC、スマートフォン、スマートTV、キオスクプラットフォームなど、多様の環境での決済ウェブページの開発を遂行",
        ko: "PC, 스마트폰, 스마트TV, 키오스크 플랫폼 등 다양한 환경에서의 결제 웹페이지의 개발을 수행",
        en: "develop web page on various platforms like pc, mobile, smart TV platform, kiosk platform",
      },
      {
        ja: "パートナー社の決済サービス導入においてのテクニカルサポートを遂行",
        ko: "파트너사의 결제 서비스 도입에 대해 기술지원을 수행",
        en: "technical support for patners which integrate payment service.",
      },
    ],
    styleSet: {
      contentStyle: null,
      contentArrowStyle: null,
      iconStyle: { background: "rgba(37, 99, 235, 1)", color: "#fff" },
    },
  },
  {
    iconComponent: MdSchool,
    imgUrl: "/img/careers/university.png",
    imgTitle: "Computer Science",
    imgText_i18n: {
      ja: "コンピューターサイエンス、情報ネットワークを４年間専攻",
      ko: "컴퓨터과학, 정보네트워크를 4년 전공",
      en: "specialize computer science, information network for 4 years",
    },
    period: "past - 2012.12",
    title: "University graduate",
    categories: [
      "programming",
      "data structure",
      "os",
      "network",
      "digital engineering",
    ],
    where: "Dongseo University",
    whereUrl: "https://www.dongseo.ac.kr",
    country: "korea",
    textlist_i18n: [
      {
        ja: "ciscoルーターのトラフィック監視プログラムとアンドロイドアプリなど、個人プロジェクトを遂行",
        ko: "라우터 트래픽 감시 프로그램과 안드로이드 앱 등 개인 프로젝트를 수행",
        en: "personal programming projects which are router traffic monitoring software, android calendar app, etc",
      },
      {
        ja: "「データリンク階層の衰弱点攻撃パターン分析、および予防」卒業論文作成",
        ko: "「데이터링크 계층의 취약점 공격 유형 분석 및 예방」학사 졸업 논문 작성",
        en: "write a graduate thesis on Analysis and Prevention of network attacks that target weakness in Data-link layer.",
      },
      {
        ja: "ciscoルーターエミュレーターを利用した、IGP、BGP、DHCP、IPv6トンネリング構成のインターネットワーク設計と構築をチームプロジェクトのリーダーとしてリード",
        ko: "라우터 에뮬레이터를 사용한 IGP, BGP, DHCP, IPv6터널링 구성 인터네트워크 설계 및 구축을 팀 프로젝트 리더로써 주도",
        en: "lead team project which is design of inter-network that consist of IGP, BGP, DHCP, IPv6 Tunnel using router emulator",
      },
      {
        ja: "データ構造、オペレーティングシステム、コンピューター構造、ネットワーク、デジタル工学など、コンピューターサイエンス関連の学問を学習",
        ko: "데이터 구조, 운영체제, 컴퓨터구조, 네트워크, 디지털공학 등 컴퓨터 공학 관련 학문을 학습",
        en: "study computer science like data structure, operation system, computer structure, network, digital engineering. etc.",
      },
      {
        ja: "C、C++、Javaなどの言語を学習",
        ko: "C, C++ Java등의 언어를 학습",
        en: "study programming like C, C++, Java, etc.",
      },
    ],
    styleSet: null,
  },
  {
    iconComponent: MdStar,
    imgUrl: null,
    imgTitle: null,
    imgText_i18n: null,
    period: "1986.1",
    title: null,
    categories: null,
    where: null,
    whereUrl: null,
    country: "korea",
    textlist_i18n: [
      {
        ja: "Busan Computer Science High Schoolを卒業",
        ko: "부산 컴퓨터 과학 고등학교 졸업",
        en: "finish high school which Busan Computer Science High School.",
      },
      {
        ja: "韓国生まれ",
        ko: "한국 출생",
        en: "Birth on KOREA. republic of",
      },
    ],
    styleSet: null,
  },
];
