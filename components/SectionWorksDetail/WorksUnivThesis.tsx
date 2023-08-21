import i18nData from "../../i18n/i18nData";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

const WorksUnivThesis = () => {
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
              <p>2011年の大学の卒業論文となります。</p>
              <p>
                まず、Dynamips
                CISCOエミュレーターと、VMWareホストエミュレーターを利用し、OSI７レイヤーの２階層の
                ネットワーク環境を構築します。
              </p>
              <p>
                本環境は、クライアントと攻撃者で構成されます。攻撃者は、いろんな攻撃ツールを提供するリナックスであるBackTraceを利用し
                攻撃を遂行します。その攻撃課程において、パケットキャプチャーを通して、起きる現象を分析します。
              </p>
              <p>
                最後に、元のデータと比べ、パケットがどういう風に変わり、どのような被害現象が起きるのかを分析し、攻撃を防御する方法を研究します。
              </p>
            </>
          ),
          ko: (
            <>
              <p>2011년 대학 졸업 논문 프로젝트 입니다.</p>
              <p>
                먼저 Dynamips 시스코 라우터 에뮬레이터와 VMWare 호스트
                에뮬레이터를 사용하여 OSI7계층에서 2계층 네트워크 환경을
                구축합니다.
              </p>
              <p>
                이 환경은 클라이언트와 공격자로 구성됩니다. 공격자는 다양한 공격
                도구를 제공하는 리눅스인 BackTrace를 사용하여 공격을 수행합니다.
                그 공격과정에서 패킷 캡쳐를 통해 현상을 분석합니다.
              </p>
              <p>
                마지막으로 원 데이터와 비교해 패킷이 어떻게 바뀌는지, 어떠한
                피해 현상이 발생하는지 분석하고 공격을 방지하는 방법을
                연구합니다.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                this is project to thesis for graduating university at 2011.
              </p>
              <p>
                at first, make the environment consist of 2 Layer of OSI7 layers
                features using Dynamips Cisco Router Emulator and Vmware Host
                Emulator.
              </p>
              <p>
                the environment consists of Client and Attacker. the attacker
                attacks using BackTrace which is linux providing various attack
                tools. and check the results by packet dump tool.
              </p>
              <p>
                finally, analyze how the packet is changed with original, and
                study how to prevent the attacks.
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

      <div className="mb-14">
        {i18nData({
          ja: <p>プロジェクト全体をリード</p>,
          ko: <p>프로젝트 전체를 주도하여 수행</p>,
          en: <p>lead project entirely</p>,
        })}
      </div>

      <Head1>
        {i18nData({
          ja: "論文カバー -データリンク階層の種弱点攻撃タイプの分析、および予防-",
          ko: "논문 표지 -데이터링크 계층의 취약점 공격 유형 분석 및 예방-",
          en: "The cover of thesis -Analysis and Prevention of network attacks that targets weakness in Data link layer-",
        })}
      </Head1>
      <div className="relative mb-14">
        <img src="/img/works/works_univ_thesis/datalink_cover.jpeg" />
      </div>

      <Head1>
        {i18nData({
          ja: "仮想ネットワーク環境を通して攻撃をシミュレーションし、どう防御するかを研究",
          ko: "가상 네트워크 환경을 통해 공격을 시뮬레이션하고, 어떻게 방어할지를 연구",
          en: "Study how to prevent attacks after simulating attacks on virtual network environment.",
        })}
      </Head1>
      <div className="relative mb-14">
        <img src="/img/works/works_univ_thesis/datalink_1.jpeg" />
      </div>

      <Head1>ARP Poisoning</Head1>
      <div className="relative mb-14">
        <img src="/img/works/works_univ_thesis/datalink_2.jpeg" />
      </div>

      <Head1>MAC Flodding</Head1>
      <div className="relative mb-14">
        <img src="/img/works/works_univ_thesis/datalink_3.jpeg" />
      </div>

      <Head1>STP MiTM Attack</Head1>
      <div className="relative mb-14">
        <img src="/img/works/works_univ_thesis/datalink_4.jpeg" />
      </div>

      <Head1>VLAN Hopping</Head1>
      <div className="relative mb-14">
        <img src="/img/works/works_univ_thesis/datalink_5.jpeg" />
      </div>

      <Head1>VLAN add & remove attack</Head1>
      <div className="relative mb-14">
        <img src="/img/works/works_univ_thesis/datalink_6.jpeg" />
      </div>
    </div>
  );
};

export default WorksUnivThesis;
