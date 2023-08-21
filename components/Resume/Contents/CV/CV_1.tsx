import { FunctionComponent } from "react";
import CvContainer from "../../CommonParts/CvContainer";
import CvHeader from "../../CommonParts/CvHeader";
import CvContent from "../../CommonParts/CvContent";
import i18nData from "../../../../i18n/i18nData";

const CV_1: FunctionComponent<{}> = () => {
  return (
    <CvContainer>
      <CvHeader
        pageNow={6}
        pageAll={6}
        pageTitle={i18nData({
          ja: "University Graduate",
          ko: "대학 졸업",
          en: "University Graduate",
        })}
        pageTitleSub={i18nData({
          ja: "University of Dongseo. ｜ コンピューター工学・情報ネットワークを４年間専攻",
          ko: "동서대학교 ｜ 컴퓨터공학 및 정보네트워크 전공 (4년간)",
          en: "University of Dongseo. ｜ Majoring in Computer Engineering and Information Networking for 4 years",
        })}
      />
      <CvContent
        cvDatas={[
          {
            period: "2012.",
            title: i18nData({
              ja: "NetFlow5 Monitor -CISCOルーターのトラフィックモニタリングプログラム-",
              ko: "NetFlow5 Monitor -CISCO 라우터의 트래픽 모니터링 프로그램-",
              en: "NetFlow5 Monitor -CISCO Router Traffic Monitoring Program-",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "Cisco Netflow Protocol分析を基盤としたUDP基盤クライアント開発",
                    "トラフィックデータ分析、可視化UI開発",
                    "C#を利用しデスクトップソフトウェア開発",
                    "Androidアプリ開発",
                  ],
                  ko: [
                    "Cisco Netflow Protocol을 분석한 UDP 기반 클라이언트 개발",
                    "트래픽 데이터 분석 및 시각화 UI 개발",
                    "C#을 이용한 데스크톱 소프트웨어 개발",
                    "Android 앱 개발",
                  ],
                  en: [
                    "develop UDP-based client based on Cisco Netflow Protocol analysis",
                    "traffic data analysis and visualization UI development",
                    "desktop software development using C#",
                    "android app development",
                  ],
                }),
              },
              {
                title: "Cisco Netflow Protocol Specifications",
                img: "/img/works/works_univ_netflow/netflow_2.jpeg",
              },
              {
                title:
                  "Visualization Cisco Router Traffic with Topology Design",
                img: "/img/works/works_univ_netflow/netflow_3.jpeg",
              },
            ],
          },
          {
            period: "2011.",
            title: i18nData({
              ja: "卒業論文 -OSI7レイヤーのデータリンク-階層の攻撃と防御-",
              ko: "졸업 논문 -OSI7 레이어의 데이터 링크- 계층의 공격과 방어-",
              en: "Graduation Thesis -OSI7 Layer Data Link- Layer Attack and Defense-",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "仮想ネットワーク環境を通して攻撃をシミュレーションし、どう防御するかを研究",
                    "ARP Poisoning、MAC Flodding、STP MiTM Attack、VLAN Hopping、VLAN add & remove attack",
                  ],
                  ko: [
                    "가상 네트워크 환경을 통해 공격을 시뮬레이션하고, 어떻게 방어할지 연구",
                    "ARP Poisoning, MAC Flodding, STP MiTM Attack, VLAN Hopping, VLAN 추가 및 제거 공격",
                  ],
                  en: [
                    "Simulating attacks through a virtual network environment and researching how to defend",
                    "ARP Poisoning, MAC Flodding, STP MiTM Attack, VLAN Hopping, VLAN add & remove attack",
                  ],
                }),
              },
              {
                title: "",
                img: "/img/works/works_univ_thesis/datalink_cover.jpeg",
              },
            ],
          },
          {
            period: "2010.",
            title: i18nData({
              ja: "CCNPコース・プロジェクト\n-IGP, BGP, DHCP, IPv6で構成されるインターネットワーク構築-",
              ko: "CCNP 코스 프로젝트\n-IGP, BGP, DHCP, IPv6로 구성된 인터넷워크 구축-",
              en: "CCNP Course Project\n-Building an internetwork composed of IGP, BGP, DHCP, IPv6-",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: ["プロジェクトリーダーとして、プロジェクト全体を主導"],
                  ko: ["프로젝트 리더로서, 프로젝트 전체를 주도"],
                  en: ["lead the entire project as a project leader"],
                }),
              },
            ],
          },
        ]}
      ></CvContent>
    </CvContainer>
  );
};

export default CV_1;
