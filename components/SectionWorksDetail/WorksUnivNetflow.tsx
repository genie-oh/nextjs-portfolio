import i18nData from "../../i18n/i18nData";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

const WorksUnivNetflow = () => {
    const data1 = [
        {
            label: "Program Name",
        },
        {
            label: "Netflow5 Monitor",
            colspan: 3,
        },
        {
            children: (
                <p>
                    Programming
                    <br />
                    Language
                </p>
            ),
        },
        {
            children: <p>C#</p>,
            colspan: 3,
        },
        {
            children: <p>Library</p>,
        },
        {
            children: (
                <LeftBorderList
                    title={null}
                    titleBorder={false}
                    list={[".NET framework 3.5", "Windows Forms Chart Controls", "SQLite Data Provider for ADO.NET"]}
                />
            ),
            colspan: 3,
        },
    ];

    const data2 = [
        {
            label: "Program Name",
        },
        {
            label: "Netflow5 Monitor Android Client",
            colspan: 3,
        },
        {
            children: (
                <p>
                    Programming
                    <br />
                    Language
                </p>
            ),
        },
        {
            children: <p>Java, Android</p>,
            colspan: 3,
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
                            <p>2012年、大学時代の個人プロジェクトとなります。</p>
                            <p>
                                本プログラムは、CISCOルーターが提供するUDP基盤のNetFlow Protocolを利用し、
                                CISCOルーターのトラフィックを分析できるプログラムです。このプログラムはC#とAndroidで開発しました。
                            </p>
                            <p>
                                本プログラムでは、ネットワークインタフェースに対する特定トラフィックやソースIP、デスティネーションIP、ポート、
                                プロトコルなどの情報をモニタリングできます。
                            </p>
                            <p>
                                このプロジェクトの目的は以下となります。
                                <br />
                                ・プログラミングやネットワーキング技術の向上のため
                                <br />
                                ・プロトコル設計における技術の向上のため
                            </p>
                        </>
                    ),
                    ko: (
                        <>
                            <p>2012년 대학시절의 개인 프로젝트 입니다.</p>
                            <p>
                                이 프로그램은 시스코 라우터에서 제공하는 UDP기반 NetFlow Protocol을 이용하여 시스코
                                라우터의 트래픽을 분석하는 프로그램입니다. 이 프로그램은 C#과 안드로이드로
                                개발되었습니다.
                            </p>
                            <p>
                                이 프로그램에서는 네트워크 인터페이스에 대한 특정 트래픽과 소스IP, 도착지IP, 포트,
                                프로토콜 등의 정보를 모니터링 할 수 있습니다.
                            </p>
                            <p>
                                이 프로젝트의 목표는 아래와 같습니다.
                                <br />
                                ・프로그래밍 및 네트워킹 기술에 대한 향상시키기 위해
                                <br />
                                ・프로토콜 설계에 대한 기술을 향상시키기 위해
                            </p>
                        </>
                    ),
                    en: (
                        <>
                            <p>this is private project in university at 2012.</p>
                            <p>
                                this is program to analyze traffics through out on cisco router using NetFlow Protocol
                                provided by CISCO router based UDP. And, the program had been developed by C# and
                                Android App.
                            </p>
                            <p>
                                the program enable you to mornitoring specific traffic for network interfaces and
                                informations of source ip, destination ip, port, protocol, etc.
                            </p>
                            <p>
                                the project is started below goals.
                                <br />
                                ・to improve skills about programming and networking.
                                <br />
                                ・to improve skill about protocol design.
                            </p>
                        </>
                    ),
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
                    ja: <p>全ての機能においての開発やプロジェクト進行をリードしました。</p>,
                    ko: <p>모든 기능에 대한 개발 및 프로젝트를 주도하였습니다.</p>,
                    en: <p>lead project and development all features.</p>,
                })}
            </div>

            <Head1>
                {i18nData({
                    ja: "動作デモ動画",
                    ko: "동작 데모 영상",
                    en: "Demo Movie",
                })}
            </Head1>

            <div>
                <iframe
                    src="https://www.youtube.com/embed/BX-bueX_pog?rel=0&autoplay=0&mute=1"
                    width="560"
                    height="315"
                ></iframe>
            </div>

            <Head1>
                {i18nData({
                    ja: "開発環境",
                    ko: "개발 환경",
                    en: "Development Environment",
                })}
            </Head1>

            <div className="grid items-center justify-center grid-cols-4 gap-1">
                {data1.map((item, idx) => {
                    return (
                        <ColumnUpLabel
                            key={idx}
                            label={item.label}
                            roundedChildren={true}
                            centerChildren={true}
                            colspan={item.colspan}
                        >
                            {item.children}
                        </ColumnUpLabel>
                    );
                })}
            </div>

            <br />

            <div className="grid items-center justify-center grid-cols-4 gap-1">
                {data2.map((item, idx) => {
                    return (
                        <ColumnUpLabel
                            key={idx}
                            label={item.label}
                            roundedChildren={true}
                            centerChildren={true}
                            colspan={item.colspan}
                        >
                            {item.children}
                        </ColumnUpLabel>
                    );
                })}
            </div>

            <Head1>
                {i18nData({
                    ja: "CISCOルーターのトラフィックを分析",
                    ko: "시스코 라우터의 트래픽을 분석",
                    en: "Analysis traffic of Cisco Router",
                })}
            </Head1>

            <div className="relative">
                <img src="/img/works/works_univ_netflow/netflow_2.jpeg" />
                <div className="absolute bottom-0 w-full py-0.5 text-sm text-center text-white bg-black bg-opacity-70">
                    ※ specification of Netflow protocol design
                </div>
            </div>

            <div>
                {i18nData({
                    ja: (
                        <>
                            <p>
                                NetFlowはCISCOルーターのトラフィック分析機能です。CISCOルーターは市場で70%以上のシェアを持ち、幅広く使われています。
                                この機能を利用すると、他の製品と比べて、より具体的なトラフィックのモニタリングを遂行することができます。
                            </p>
                            <p>
                                ただ、該当データは、ルーターのキャッシュメモリにRAWデータとして保存されるため、元の状態のままでの分析は困難です。
                                その故、より簡単に分析できるように、ルーターは周期的にトラフィック情報をNetFlowCollectorへ送信します。
                            </p>
                            <p>
                                本プログラムは、CISCOルーターから転送されたデータを収取・分析し、生成された情報を表示します。
                            </p>
                        </>
                    ),
                    ko: (
                        <>
                            <p>
                                NetFlow는 시스코 라우터의 트래픽 분석 기능입니다. 시스코의 라우터는 시장에서 70%이상의
                                점유율로 널리 사용되고 있습니다. 이 기능을 사용하면 타 제품과 비교하여 보다 구체적으로
                                트래픽 모니터링을 수행할 수 있습니다.
                            </p>
                            <p>
                                하지만 해당 데이터는 라우터의 캐시 메모리에 RAW데이터로써 저장되기 떄문에 원 상태에서의
                                분석은 어렵습니다. 따라서 보다 쉽게 분석할 수 있도록 라우터는 주기적으로 트래픽 정보를
                                NetFlow Colector로 전송합니다.
                            </p>
                            <p>
                                이 프로그램은 시스코 라우터에서 전송된 데이터를 수집 및 분석하여 생성된 정보를
                                보여줍니다.
                            </p>
                        </>
                    ),
                    en: (
                        <>
                            <p>
                                Netflow is feature of analysis traffic of cisco router. Cisco's router is used widly
                                having shares of 70% on the field. the feature enable you to monitoring more specific
                                compare with others.
                            </p>
                            <p>
                                But, it is hard to analysis data because stored as rawdata on cache memory in router.
                                so, for you to analysis more easily, router transfer traffic information to NetFlow
                                Colector periodically.
                            </p>
                            <p>
                                The Program is that for you to see informations which is made by collecting and
                                analyzing the data transferred by Cisco Router.
                            </p>
                        </>
                    ),
                })}
            </div>

            <Head1>
                {i18nData({
                    ja: "トラフィック情報を可視化し提供",
                    ko: "트래픽 정보를 가시화하여 제공",
                    en: "Provide traffic information with visualization",
                })}
            </Head1>

            <div className="relative mb-14">
                <img src="/img/works/works_univ_netflow/netflow_3.jpeg" />
                <div className="absolute bottom-0 w-full py-0.5 text-sm text-center text-white bg-black bg-opacity-70">
                    ※ network environment examples and analysis traffic of the environment.
                </div>
            </div>

            <Head1>
                {i18nData({
                    ja: "ルーターから送信されたトラフィック情報を、SQLiteファイルデータベースに保存",
                    ko: "라우터로부터 전송된 트래픽 정보를 SQLite 파일 데이터베이스에 보존",
                    en: "Store SQLite file database and present information which is trasferred by Router.",
                })}
            </Head1>
            <div className="relative mb-14">
                <img src="/img/works/works_univ_netflow/netflow_4_2.jpeg" />
            </div>

            <Head1>
                {i18nData({
                    ja: "Androidクライアントアプリ",
                    ko: "안드로이드 클라이언트 앱",
                    en: "Android App Client",
                })}
            </Head1>
            <div className="relative mb-14">
                <img src="/img/works/works_univ_netflow/netflow_5.jpeg" />
            </div>

            <Head1>
                {i18nData({
                    ja: "Androidクライアントアプリとの情報交換のためのXMLフォーマット",
                    ko: "안드로이드 클라이언트 앱과 정보 교환을 위한 XML 포맷",
                    en: "XML Format to link information for Android App Client",
                })}
            </Head1>
            <div className="relative mb-14">
                <img src="/img/works/works_univ_netflow/netflow_5_2.jpeg" />
            </div>
        </div>
    );
};

export default WorksUnivNetflow;
