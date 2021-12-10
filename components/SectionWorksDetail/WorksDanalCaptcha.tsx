import i18nData from "../../i18n/i18nData";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

const WorksDanalCaptcha = () => {
    const data1 = [
        {
            label: i18nData({
                ja: "DANAL本人認証サービスへのモジュール統合",
                ko: "다날 본인인증 서비스로의 모듈 통합",
                en: "integration on\nIdentify Authdentication",
            }),
            colspan: 3,
            children: <img src="/img/works/works_danal_captcha/captcha_1.jpeg" />,
        },
    ];

    const data2 = [
        {
            label: i18nData({
                ja: "Year. Month",
                ko: "Year. Month",
                en: "Year. Month",
            }),
            children: <p>2014.5 ~ </p>,
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
                        title="DANALサービスへの統合"
                        titleBorder={true}
                        list={[
                            "DANAL本人認証サービスへの統合をリード",
                            "サービスへの導入方法を提供とともに、文書化をリード",
                        ]}
                    />
                ),
                ko: (
                    <LeftBorderList
                        title="다날의 서비스로의 통합"
                        titleBorder={true}
                        list={[
                            "다날 본인인증 서비스로의 통합을 주도",
                            "서비스로의 도입 방법을 제공 하고 문서화를 주도",
                        ]}
                    />
                ),
                en: (
                    <LeftBorderList
                        title="integrating to services of Danal."
                        titleBorder={true}
                        list={[
                            "lead integration to Danal Identify Audentication Service.",
                            "lead documentation and provide how to integrate the solution to services.",
                        ]}
                    />
                ),
            }),
        },
        {
            children: <p>2014.4</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <LeftBorderList
                        title="サービスへの統合のためのサーバーAPI、およびクライアントモジュールの開発"
                        titleBorder={true}
                        list={[
                            "全体アーキテクチャーの設計や機能開発をリード",
                            "サーバーAPIをPHPベースで開発",
                            "クライアントモジュールをJavaScriptベースで開発",
                        ]}
                    />
                ),
                ko: (
                    <LeftBorderList
                        title="서비스에 통합하기 위한 서버API 및 클라이언트 모듈 개발"
                        titleBorder={true}
                        list={[
                            "전체 아키텍처 설계 및 기능 개발을 주도",
                            "서버API를 PHP기반에서 개발",
                            "클라이언트 모듈을 JavaScript기반에서 개발",
                        ]}
                    />
                ),
                en: (
                    <LeftBorderList
                        title="develop server-api and client-side module for integrating it to services."
                        titleBorder={true}
                        list={[
                            "lead entire architecture design and development of features.",
                            "develop server-side api based php",
                            "develop client-side modules based javascript.",
                        ]}
                    />
                ),
            }),
        },
        {
            children: <p>2014.4</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <LeftBorderList
                        title="システムから生成されたデータと、ユーザーが入力したデータの間のバリデーション機能開発"
                        titleBorder={true}
                        list={[
                            "全体アーキテクチャー設計や機能開発をリード",
                            "ユーザー入力値やアクセスに対する検証機能開発",
                            "保安文字の認証段階での暗号化機能の設計や開発",
                        ]}
                    />
                ),
                ko: (
                    <LeftBorderList
                        title="시스템에서 생성된 데이터와 사용자가 입력한 데이터간의 검증 기능 개발"
                        titleBorder={true}
                        list={[
                            "전체 아키텍처 설계 및 기능 개발을 주도",
                            "사용자 입력값과 접근에 대한 검증 기능 개발",
                            "보안 문자 인증 단계에서의 암호화 기능 설계 개발",
                        ]}
                    />
                ),
                en: (
                    <LeftBorderList
                        title="develop features to validate captcha values both generated from system and input by users."
                        titleBorder={true}
                        list={[
                            "lead entire architecture design and development of features.",
                            "develop feature of validation which are validation of values and access",
                            "develop feature of encrypting data in phases of captcha authdentication.",
                        ]}
                    />
                ),
            }),
        },
        {
            children: <p>2014.3</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <>
                        <LeftBorderList
                            title="キャプチャ文字に対する、on-demandの音声生成機能の設計、および開発"
                            titleBorder={true}
                            list={[
                                "全体アーキテクチャー設計や機能開発をリード",
                                "Waveファイルフォーマット明細を基盤とした、音声データのon-demand処理機能開発",
                                "thrid-partyライブラリーや環境に依存しない、スタンドアローンモジュールとして開発",
                            ]}
                        />
                        <img src="/img/works/works_danal_captcha/captcha_3.jpeg" />
                    </>
                ),
                ko: (
                    <>
                        <LeftBorderList
                            title="보안문자에 대한 on-demand 음성 생성 기능 설계 및 개발"
                            titleBorder={true}
                            list={[
                                "전체 아키텍처 설계 및 기능 개발을 주도",
                                "Wave파일 포맷 명세에 기반한 사운드 데이터 on-demand처리 기능 개발",
                                "서드파티 라이브러리나 환경에 의존하지 않는 독립형 모듈로써 개발",
                            ]}
                        />
                        <img src="/img/works/works_danal_captcha/captcha_3.jpeg" />
                    </>
                ),
                en: (
                    <>
                        <LeftBorderList
                            title="develop feature to generate wave sounds of captcha values by on-demand."
                            titleBorder={true}
                            list={[
                                "lead entire architecture design and development of features.",
                                "develop feature to process sound data on-demand based Wave File Foramt Specification",
                                "develop as stand-alone module to never depends thrid-party libraries and environment.",
                            ]}
                        />
                        <img src="/img/works/works_danal_captcha/captcha_3.jpeg" />
                    </>
                ),
            }),
        },
        {
            children: <p>2014.3</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <>
                        <LeftBorderList
                            title="キャプチャ文字に対する、on-demandのイメージ生成機能の設計、および開発"
                            titleBorder={true}
                            list={[
                                "全体アーキテクチャー設計や機能開発をリード",
                                "Bitmapファイルフォーマット明細を基盤とした、イメージデータのon-demand処理機能開発",
                                "thrid-partyライブラリーや環境に依存しない、スタンドアローンモジュールとして開発",
                            ]}
                        />
                        <img src="/img/works/works_danal_captcha/captcha_2.jpeg" />
                    </>
                ),
                ko: (
                    <>
                        <LeftBorderList
                            title="보안문자 값의 이미지 데이터를 on-demand로 생성하는 기능을 설계 및 개발"
                            titleBorder={true}
                            list={[
                                "전체 아키텍처 설계 및 기능 개발을 주도",
                                "Bitmap파일포맷 기반의 on-demand 이미지 데이터 처리 기능을 개발",
                                "서드파티 라이브러리나 환경에 의존하지 않는 독립형 모듈로써 개발",
                            ]}
                        />
                        <img src="/img/works/works_danal_captcha/captcha_2.jpeg" />
                    </>
                ),
                en: (
                    <>
                        <LeftBorderList
                            title="develop feature to generate image data of captcha values by on-demand."
                            titleBorder={true}
                            list={[
                                "lead entire architecture design and development of features.",
                                "develop feature to process image data on-demand based Bitmap File Foramt Specification",
                                "develop to depend any thrid-party library and environment.",
                            ]}
                        />
                        <img src="/img/works/works_danal_captcha/captcha_2.jpeg" />
                    </>
                ),
            }),
        },
        {
            children: <p>2014.2</p>,
        },
        {
            colspan: 3,
            children: i18nData({
                ja: (
                    <>
                        <LeftBorderList
                            title="キャプチャソリューションのリサーチ、および提案"
                            titleBorder={true}
                            list={[
                                "キャプチャソリューションのリサーチやプロトタイプの開発をリード",
                                "アイディア提案やプロジェクト計画作成をリード",
                            ]}
                        />
                    </>
                ),
                ko: (
                    <>
                        <LeftBorderList
                            title="캡챠 솔루션의 리서치 및 제안"
                            titleBorder={true}
                            list={[
                                "캡챠 솔루션의 리서치 및 프로토타입의 제작을 주도",
                                "아이디어 제안 및 프로젝트 계획 작성",
                            ]}
                        />
                    </>
                ),
                en: (
                    <>
                        <LeftBorderList
                            title="research and suggest the solution of captcha."
                            titleBorder={true}
                            list={[
                                "lead researching and prototyping captcha solution.",
                                "suggest the idea and plan to project.",
                            ]}
                        />
                    </>
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
                                株式会社DANALで、ミドルウェアソリューション開発エンジニアとして、
                                要請に応じてイメージと音声を生成するキャプチャソリューションの研究や開発をリードしました。
                            </p>
                            <p>
                                本ソリューションは、本人が提案し開発した、スタンドアローン型のイメージ・音声生成や処理エンジンで構成されます。
                                そして本ソリューションは、他社のグラフィックやサウンドライブラリーへの依存性がなく、動作します。
                                BitmapやWaveファイルフォーマット仕様に基づき、バイトレベルでグラフィックやサウンドを処理するように、
                                ソリューションが設計され、作られたのが、その理由となります。
                            </p>
                            <p>そして、本ソリューションは、成功的にDANALの決済サービスへ導入することができました。</p>
                        </>
                    ),
                    ko: (
                        <>
                            <p>
                                주식회사 다날에서 미들웨어 솔루션 개발자로써, 요청에 따라 이미지와 사운드를 동적으로
                                생성하는 캡챠 솔루션에 대한 연구 및 개발을 주도했습니다.
                            </p>
                            <p>
                                해당 솔루션은 본인이 제안하고 개발한 독립형 이미지 및 사운드 생성과 처리 엔진으로
                                구성됩니다. 해당 솔루션은 타사의 그래픽, 사운드 라이브러리에 의존성 없이 동작합니다.
                                비트맵 및 웨이브 파일 형식 사양에 따라 바이트레벨에서 그래픽과 사운드를 처리하도록
                                솔루션이 설계되었고 만들어졌기 때문입니다.
                            </p>
                            <p>그리고 성공적으로 해당 솔루션을 다날 결제 서비스에 도입할 수 있었습니다.</p>
                        </>
                    ),
                    en: (
                        <>
                            <p>
                                as middleware solution engineer in Danal, Inc., I had been led researching and
                                development to captcha solution that generate images and sounds on demands.
                            </p>
                            <p>
                                the solution consist of stand-alone image and sound generating and processing engine
                                that suggested and developed by me. the solution NEVER has dependent on third-party
                                graphic, sound library. because, the solution had been made to only process graphic and
                                sounds on byte-level following Bitmap and Wave File Format Specifications.
                            </p>
                            <p>And successfully, the solutions can be integrated to Danal Payment Services.</p>
                        </>
                    ),
                })}
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
                            ミドルウェアソリューション開発エンジニア、システムエンジニア、プロジェクトリーダー、提案者としての役割を遂行しました。
                        </p>
                    ),
                    ko: (
                        <p>
                            미들웨서 솔루션 개발자, 시스템(요건정의) 엔지니어, 프로젝트 리더, 제안자로써 역할을
                            수행하였습니다.
                        </p>
                    ),
                    en: (
                        <p>
                            in the project, i had been roled as middleware solution engineer, system(requirement)
                            engineer, project leader. proposer.
                        </p>
                    ),
                })}
            </div>

            <Head1>
                {i18nData({
                    ja: "ja",
                    ko: "ko",
                    en: "Key Achievements",
                })}
            </Head1>

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
                <p>System Engineering Skill, UML, ERD, PHP. Java(for some middlewares)</p>
            </div>
        </div>
    );
};

export default WorksDanalCaptcha;
