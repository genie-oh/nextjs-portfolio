import i18nData from "../../i18n/i18nData";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

import { FaExternalLinkAlt } from "react-icons/fa";

const WorksDanalKeyboard = () => {
    const data1 = [
        {
            label: i18nData({
                ja: "特許出願",
                ko: "특허출원",
                en: "Patent",
            }),
            children: <img src="/img/works/works_danal_keyboard/kpat_1.jpeg" />,
        },
        {
            label: i18nData({
                ja: "DANALの本人認証\nサービスへの統合",
                ko: "다날 본인인증서비스로의 통합",
                en: "Integration to Danal Identify Authentication Service",
            }),
            children: <img src="/img/works/works_danal_keyboard/keyboard1.jpeg" />,
        },
        {
            label: i18nData({
                ja: "DANALのクレジットカード\nサービスへの統合",
                ko: "다날 신용카드 결제 서비스로의 통합",
                en: "Integration to Danal Credit Card Payment Service",
            }),
            children: <img src="/img/works/works_danal_keyboard/keyboard21.jpeg" />,
        },
    ];

    const data2 = [
        {
            label: i18nData({
                ja: "Year. Month",
                ko: "Year. Month",
                en: "Year. Month",
            }),
            children: <p>2015. 6 ~ 2015. 8</p>,
        },
        {
            label: i18nData({
                ja: "Archivement",
                ko: "Archivement",
                en: "Archivement",
            }),
            colspan: 3,
            children: i18nData({
                ja: (
                    <LeftBorderList
                        title="エンドポイント暗号化のバーチャルキーボードのリニュアル開発を遂行"
                        titleBorder={true}
                        list={[
                            "DANAL本人認証サービスへの統合をリード",
                            "DANALクレジットカード決済への統合をリード",
                            "設計、バックエンド、フロントエンドなど、開発全体工程をリード",
                            "PC, Mobile, その他多様な環境をサポートするテンプレート、インタフェースを提供",
                            "ワンタイム有効暗号化、バリデーション、その他セキュリティーポイントなどの機能改善のための開発をリード",
                            "ユーザーインタフェース改善の開発をリード",
                        ]}
                    />
                ),
                ko: (
                    <LeftBorderList
                        title="종단간 암호화 가상 키보드의 고도화 개발을 수행"
                        titleBorder={true}
                        list={[
                            "다날 본인확인 서비스로의 통합을 주도",
                            "다날 신용카드 결제 서비스로의 통합을 주도",
                            "설계, 백엔드, 프론트엔드 등 개발 전체 공정을 주도",
                            "PC, Mobile, 그외 다양한 환경을 지원하는 템플릿, 인터페이스를 제공",
                            "원타임 유효 암호화, 검증, 그외 보안 포인트 등의 기능 개선을 위한 개발을 주도",
                            "유저 인터페이스 부분 개선의 개발을 주도",
                        ]}
                    />
                ),
                en: (
                    <LeftBorderList
                        title="carry out advanced development of end-point encryption virtual keyboard"
                        titleBorder={true}
                        list={[
                            "lead integration to Danal Identity Authentication Service.",
                            "lead integration to Danal Credit-Card Payment Service",
                            "lead to entire development likes design architecture, back-end, front-end.",
                            "provide interfaces and templates to support various environment likes PC, Mobile, others.",
                            "develop to improve features likes encryption that valid only one-time, validation, other security points.",
                            "develop to improve User Interface.",
                        ]}
                    />
                ),
            }),
        },
        {
            children: <p>2015. 1</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <LeftBorderList
                        title="国内外、特許出願完了"
                        titleBorder={true}
                        list={["韓国特許 1020140045932", "PCT国際特許出願"]}
                    />
                ),
                ko: (
                    <LeftBorderList
                        title="국내외 특허 출원 완료"
                        titleBorder={true}
                        list={["한국 특허 1020140045932", "PCT 국제 특허 출원"]}
                    />
                ),
                en: (
                    <LeftBorderList
                        title="completed applying patent on korea and internaional"
                        titleBorder={true}
                        list={[
                            "patent in korea. patent number is 1020140045932",
                            "apply PCT as international patent. ",
                        ]}
                    />
                ),
            }),
        },
        {
            children: <p>2014. 8</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <LeftBorderList
                        title="エンドポイント暗号化のバーチャルキーボードのバージョン１をリリース"
                        titleBorder={true}
                        list={[
                            "自社YAPサービスでのクレジットカードやキャリア決済への統合をjリード",
                            "設計、バックエンド、フロントエンドなど、開発全体工程をリード",
                        ]}
                    />
                ),
                ko: (
                    <LeftBorderList
                        title="종단간 암호화 가상 키보드의 버전1을 출시"
                        titleBorder={true}
                        list={[
                            "자사YAP서비스에서 신용카드 및 휴대폰 결제로의 통합을 주도",
                            "설계, 백엔드, 프론트엔드 등 개발 전체 공정을 주도",
                        ]}
                    />
                ),
                en: (
                    <LeftBorderList
                        title="launch 1st version of end-point encryption virtual keyboard."
                        titleBorder={true}
                        list={[
                            "lead integration to credit-card and mobile-phone payments on YAP service.",
                            "lead to entire development likes design architecture, back-end, front-end.",
                        ]}
                    />
                ),
            }),
        },
        {
            children: <p>2014. 4</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <LeftBorderList
                        title="エンドポイント暗号化のバーチャルキーボードの特許出願プロジェクト起動"
                        titleBorder={true}
                        list={["特許名 -ユーザー認証のためのバーチャルキーボードの生成装置と方法-"]}
                    />
                ),
                ko: (
                    <LeftBorderList
                        title="종단간 암호화 가상키보드의 특허 출원 프로젝트 기동"
                        titleBorder={true}
                        list={["특허명 -사용자인증용 가상 키보드 생성 장치 및 방법-"]}
                    />
                ),
                en: (
                    <LeftBorderList
                        title="started applying patent about end-point encryption virtual keyboard"
                        titleBorder={true}
                        list={["title is -VIRTUAL KEYBOARD GENERATING DEVICE AND METHOD FOR USER AUTHENTICATION-"]}
                    />
                ),
            }),
        },
        {
            children: <p>2014. 3</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <LeftBorderList
                        title="ウェブベースのエンドポイント暗号化のバーチャルキーボードのプロトタイプの設計提案と遂行"
                        titleBorder={true}
                        list={[
                            "仮想キーボードでの暗号化されたデータやイメージ処理を遂行する方法を設計",
                            "不正アクセスを防ぎ、認証を行う方法を設計",
                            "サーバーとクライアントの間のデータ交換・暗号化遂行の方法を設計",
                            "バックエンドAPI、フロントエンドのプロトタイプを開発し、組織内のプレゼンテーション、および提案",
                        ]}
                    />
                ),
                ko: (
                    <LeftBorderList
                        title="웹 기반 종단간 암호화 가상 키보드의 프로토타입 및 설계 제안 및 수행"
                        titleBorder={true}
                        list={[
                            "가상키보드에서 암호화된 데이터 및 이지미 처리를 수행하는 방법을 설계",
                            "불법적인 접근을 방지하고 인증하는 방법을 설계",
                            "서버와 클라이언트 간에 데이터를 교환하고 암호화하는 방법을 설계",
                            "백엔드API와 프론트엔드의 프로토타입을 개발하여 조직 내 시연, 제안",
                        ]}
                    />
                ),
                en: (
                    <LeftBorderList
                        title="propose and do brefing prototype and architecture of end-point encryption virtual keyboard on web-base"
                        titleBorder={true}
                        list={[
                            "design the methods of generating encrypted data and image processing on virtual keyboard.",
                            "design the methods of preventing illigaly access and authdenticate.",
                            "design the methods of exchanging data and encrypting between server and client.",
                            "develop prototypes likes back-end API and front-end to describe how it works.",
                        ]}
                    />
                ),
            }),
        },
        {
            children: <p>2014. 2</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <LeftBorderList
                        title="リサーチを通した、エンドポイント暗号化のバーチャルキーボードのアイディア提案、およびプロトタイプ開発"
                        titleBorder={true}
                        list={[
                            "ソリューション提案のためのプロトタイプ開発",
                            "ユーザーが入力する個人情報を、決済サービスにおいて安全に送信できる方法を提案",
                            "類似の分野での仮想キーボードの現状を調査し、ベンチマークをリード",
                        ]}
                    />
                ),
                ko: (
                    <LeftBorderList
                        title="리서치를 통한 종단간 암호화 가상 키보드의 아이디어 제안 및 프로토타입 개발"
                        titleBorder={true}
                        list={[
                            "종단간 암호화 가상 키보드 솔루션을 제안하기 위한 프로토타입 개발",
                            "사용자가 입력한 개인정보를 다날 결제 서비스에서 안전하게 전송 가능한 방법을 제안",
                            "유사 분야에서 가상키보드의 현황을 조사하고 벤치마킹을 주도",
                        ]}
                    />
                ),
                en: (
                    <LeftBorderList
                        title="propose idea and develop prototype of end-point encryption virtual keyboard with research"
                        titleBorder={true}
                        list={[
                            "develop prototype to propose the solution of end-point encryption virtual keyboard.",
                            "propose the method of handing privacy data which user input to be possible to introduce on Danal Payment Services.",
                            "research and benchmark what virtual keyboard are on similar fields.",
                        ]}
                    />
                ),
            }),
        },
    ];

    return (
        <div className="py-10 work-body">
            <Head1>
                {i18nData({
                    ja: "概要",
                    ko: "개요",
                    en: "Introduction",
                })}
            </Head1>

            <div className="mb-5">
                {i18nData({
                    ja: (
                        <>
                            <p>
                                クレジットカード決済や本人認証サービスなど、ユーザーの入力情報に対してセキュリティーが必要なサービスに導入できる、
                                DANAL安心キーボード
                                <span className="text-sm italic">
                                    ~エンドポイント区間において、ユーザーデータを安全に暗号化し送信するバーチャルキーボード~
                                </span>
                                の提案、および開発を担当しました。
                                <br />
                                2014年、このソリューションは、よりユーザー入力データを安全に送信を実現するために設計されました。
                                以降、このソリューションのプロトタイピングを遂行、特許出願と同時に、全体開発を遂行することができました。
                            </p>
                        </>
                    ),
                    ko: (
                        <>
                            <p>
                                신용카드 결제, 개인인증 등 입력 정보에 대해 보안이 필요한 서비스에 적용할 수 있는 다날
                                안심 키보드
                                <span className="text-sm italic">
                                    ~종단간 사용자 데이터를 안전하게 암호화하여 전송하는 가상 키보드~
                                </span>
                                의 제안 및 개발을 진행하였습니다.
                                <br />
                                2014년, 이 솔루션은 사용자 데이터를 보다 안전하게 전송하기 위해 설계되었습니다. 이후, 이
                                솔루션의 프로토타이핑을 수행, 특허 출원과 동시에 전체 개발을 수행할 수 있었습니다.
                            </p>
                        </>
                    ),
                    en: (
                        <>
                            <p>
                                I carried out project of proposal and advenced development of integrating Danal Ansim
                                Keyboard
                                <span className="text-sm italic">~encode securely user data between end-to-end~</span>
                                to services likes credit-card payment, personal authentication service that needed
                                security about user input. <br />
                                It was designed in 2014 to provide sending user data more safely. after that, I can
                                carried out that prototyping this solution, patent it, and advenced development.
                            </p>
                        </>
                    ),
                })}

                <p>
                    <a
                        className="inline-flex items-center justify-start font-bold text-blue-500 underline "
                        target="_blank"
                        href="https://kpat.kipris.or.kr/kpat/biblioa.do?method=biblioFrame&start=biblio&searchFg=N&KeyWord=1020140045932&applno=1020140045932&Gubun=1&sCurrPage=1&searchFg=N&expression=1020140045932&openPageId=View01&isMyConcern=N&isMyFolder=N&config=/main/sharePage_KR.jsp,%20className=jeus_jspwork._main._700_sharePage_5fKR_5fjsp,%20jspUri=%27/main/sharePage_KR.jsp"
                    >
                        <FaExternalLinkAlt fontSize={20} className="pr-1" />
                        link of patent information of Kipris (korean)
                    </a>
                    <br />
                    <a
                        className="inline-flex items-center justify-start font-bold text-blue-500 underline"
                        target="_blank"
                        href="http://news.mt.co.kr/mtview.php?no=2015010614283851028"
                    >
                        <FaExternalLinkAlt fontSize={20} className="pr-1" />
                        link of related news (korean)
                    </a>
                </p>
            </div>

            <div className="grid items-center justify-center grid-cols-1 gap-1 lg:grid-cols-3">
                {data1.map((item, idx) => {
                    return (
                        <ColumnUpLabel key={idx} label={item.label} roundedChildren={true}>
                            {item.children}
                        </ColumnUpLabel>
                    );
                })}
            </div>

            <Head1>
                {i18nData({
                    ja: "役割",
                    ko: "역할",
                    en: "Roles",
                })}
            </Head1>

            <div className="mb-5">
                {i18nData({
                    ja: (
                        <p>
                            このプロジェクトでは、私は、ミドルウェア開発エンジニア、提案者、プロジェクトリーダー、アーキテクト、ウェブエンジニアとしての役割を遂行しました。
                        </p>
                    ),
                    ko: (
                        <p>
                            이 프로젝트에서, 저는 미들웨어 개발자, 제안자, 프로젝트 리더, 설계자, 웹 개발자로써 역할을
                            수행하였습니다.
                        </p>
                    ),
                    en: (
                        <p>
                            in the project, i had been roled as middleware engineer, proposer, project leader,
                            architect, web engineer.
                        </p>
                    ),
                })}
            </div>

            <Head1>
                {i18nData({
                    ja: "主な成果",
                    ko: "주요 성과",
                    en: "Key Achievements",
                })}
            </Head1>

            <div className="mb-5">
                {i18nData({
                    ja: (
                        <p>
                            Payment Gateway分野では不正アクセスに対して防ぎ、決済利用者からの入力情報を、
                            より安全に処理するためのソリューションの必要性が非常に高くなっておりました。
                            <br />
                            ユーザーの個人識別情報や金融情報を扱うPGサービスの特性上、何よりもMiTMタイプの攻撃やKEY
                            LOGGINGなど、ユーザーの入力を横取りできる攻撃に対して、高い保安性を見込める方法が検討されました。
                            <br />
                            したがって、大体がウェブサービスで構成されているPGサービスで、
                            「より保安性が強化されたユーザー情報入力」に対しての重要性に起因し、
                            ウェブベースの仮想キーボードの設計を提案、以下の内容を遂行しました。
                        </p>
                    ),
                    ko: (
                        <p>
                            Payment Gateway 분야에서 불법적인 접근에 대해 방어하고, 결제 이용자로부터 입력받는 정보를
                            보다 안전하게 처리하기 위한 솔루션의 필요성이 높아졌습니다.
                            <br />
                            사용자의 개인식별정보 및 금융 정보를 다루는 PG 서비스 특성상, 무엇보다 MiTM 유형 공격 및 Key
                            Logging 등 사용자가 입력하는 정보를 가로챌 수 있는 공격 유형에 대해 일정 수준의 높은
                            보안성을 기대할 수 있는 방법이 검토되었습니다.
                            <br />
                            이에 상당 부분이 웹 기반 서비스로 이루어져 있는 PG 서비스에서, “보다 보안성이 강화된 사용자
                            정보 입력”에 대한 중요성에 기인하여 웹기반 가상 키보드 설계를 제안, 아래 내용을
                            수행하였습니다.
                        </p>
                    ),
                    en: (
                        <p>
                            in Payment Gateway fields, the needs had been important to process privacy information which
                            user input more securely and prevent it from attacks.
                            <br />
                            bacause Payment Gateway needs to handle user's privacy and financial information, The method
                            had been consider that can be expected to high-level security about privacy information
                            which user input from attacks likes MiTM, Key Logging.
                            <br />
                            so, I have carried out proposal and design architecture of web-base end-point encryption
                            virtual keyboard to satisfy the needs that achive more securely handling about privacy data
                            which user input on Payment Gateway Service which entirely consist of web-base.
                        </p>
                    ),
                })}
            </div>

            <div className="grid items-center justify-center grid-cols-4 gap-1">
                {data2.map((item, idx) => {
                    return (
                        <ColumnUpLabel key={idx} label={item.label} roundedChildren={true} colspan={item.colspan}>
                            {item.children}
                        </ColumnUpLabel>
                    );
                })}
            </div>

            <Head1>
                {i18nData({
                    ja: "業務関連スキル",
                    ko: "업무 관련 스킬",
                    en: "Skills related works",
                })}
            </Head1>

            <div className="mb-5">
                <p>System Engineering Skill, UML, ERD, Java(Middleware), PHP(Back-end), Front-end.</p>
            </div>
        </div>
    );
};

export default WorksDanalKeyboard;
