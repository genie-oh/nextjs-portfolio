import i18nData from "../../i18n/i18nData";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

const WorksUnivNetwork = () => {
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
                                2010年、大学のCCNPコース課程で、プロジェクトリーダーとして遂行したチームプロジェクトとなります。
                            </p>
                            <p>
                                さまざまなネットワーク環境を構築し、どういうふうに動作し、改善するかを分析・研究します。
                                環境は、IGP(中・小ネットワークルーティングのためのRIP、EIRGP、OSFPなど)、
                                BGP(他ASシステムの間のインターネットワーク情報を交換するゲートウェイプロトコル)、
                                BGPの間のフレームリレー、マルチホップIBGP、他ルーティングプロトコルの間の再配布、DHCP、VIRTUAL-LINK、IPv6トンネリングなど、
                                いろんな技術が使われています。
                            </p>
                            <p>
                                最後に、このプロジェクトの目的は、ネットワークトポロジー設計技術と、
                                実際のネットワーク環境が構築される方法を学び、習得することにあります。
                            </p>
                        </>
                    ),
                    ko: (
                        <>
                            <p>2010년 대학 CCNP과정에서 프로젝트 리더로서 수행한 팀프로젝트입니다.</p>
                            <p>
                                다양한 네트워크 환경을 구축하면서 어떻게 작동하고 개선할지 분석하고 연구합니다. 환경은
                                IGP(중소 네트워크 라우팅을 위한 RIP, EIGRP, OSFP등), BGP(타 AS시스템 간 내부 네트워크
                                정보를 교환하는 게이트웨이 프로토콜), BGP 간 링크 프레임 릴레이, 멀티 홉 IBGP, 복수
                                라우팅 프로토콜 간 재분배, DHCP, VIRTUAL-LINK, IPv6터널링 등 다양한 기술을
                                사용하였습니다.
                            </p>
                            <p>
                                마지막으로 이 프로젝트의 목적은 네트워크 토폴로지 설계 기술과 실제 네트워크 환경이
                                만들어지는 방법을 배우고 습득하는 것에 있습니다.
                            </p>
                        </>
                    ),
                    en: (
                        <>
                            <p>this is team project on CCNP course at 2010 carrying out it as project leader.</p>
                            <p>
                                study analysis how to works and how to improvement it as making varous network
                                environments. the environments are likes IGP(likes RIP, EIGRP, OSFP for small and middle
                                network routing), BGP(Gateway Protocol for notify inter-network to other AS System),
                                link Frame-Relay between BGP, multi-hop IBGP, re-distribute between various routing
                                protocols, DHCP, Virtual Link, IPv6 tunneling.
                            </p>
                            <p>
                                finally, this project's aim to learn and recognize skills of network topology design and
                                how real network environment is made.
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
                    ja: <p>プロジェクトリーダーとして、プロジェクト全体を主導</p>,
                    ko: <p>프로젝트리더로써 프로젝트 전체를 주도</p>,
                    en: <p>lead project as project leader</p>,
                })}
            </div>

            <Head1>
                {i18nData({
                    ja: "実演デモ動画",
                    ko: "시연 데모 영상",
                    en: "Demo Movie",
                })}
            </Head1>

            <div>
                <iframe
                    src="https://www.youtube.com/embed/iKJb2bD5fQg?rel=0&autoplay=0&mute=1"
                    width="560"
                    height="315"
                ></iframe>
            </div>

            <Head1>
                {i18nData({
                    ja: "ネットワークの全体トポロジー設計",
                    ko: "네트워크의 전체 토폴로지 설계",
                    en: "entire design of topology of network",
                })}
            </Head1>
            <div className="relative mb-14">
                <img src="/img/works/works_univ_network/internetwork_topology.jpeg" />
            </div>

            <Head1>
                {i18nData({
                    ja: "多様なルーティングプロトコルを利用した構築",
                    ko: "다양한 라우팅 프로토콜을 사용한 구축",
                    en: "build various routing protocols",
                })}
            </Head1>
            <div className="relative mb-14">
                <img src="/img/works/works_univ_network/internetwork_1.jpeg" />
            </div>

            <Head1>
                {i18nData({
                    ja: "ネットワークポリシーの適用による、ネットワーク環境最適化",
                    ko: "네트워크 정책 설정 적용으로 네트워크 환경 최적화",
                    en: "optimize network environment to apply network policy setting",
                })}
            </Head1>
            <div className="relative mb-5">
                <img src="/img/works/works_univ_network/internetwork_2_1.jpeg" />
            </div>
            <div className="relative mb-5">
                <img src="/img/works/works_univ_network/internetwork_2_2.jpeg" />
            </div>
            <div className="relative mb-14">
                <img src="/img/works/works_univ_network/internetwork_2_3.jpeg" />
            </div>

            <Head1>
                {i18nData({
                    ja: "MBGPとIPv6 to IPv4トンネリングをシミュレーション",
                    ko: "MBGP와IPv6 to IPv4터널링을 시뮬레이션",
                    en: "simulate tunneling IPv6 to IPv4 with MBGP",
                })}
            </Head1>
            <div className="relative mb-14">
                <img src="/img/works/works_univ_network/internetwork_3.jpeg" />
            </div>
        </div>
    );
};

export default WorksUnivNetwork;
