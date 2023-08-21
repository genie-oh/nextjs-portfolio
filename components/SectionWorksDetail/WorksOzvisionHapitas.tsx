import i18nData from "../../i18n/i18nData";
import QuoteAttention from "../CommonParts/QuoteAttention";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

const WorksOzvisionHapitas = () => {
  const data1 = [
    {
      label: i18nData({
        ja: "Year. Month",
        ko: "Year. Month",
        en: "Year. Month",
      }),
      children: <p>2021.9 ~ 2022. 3</p>,
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
            title="T-POINTサービスを、ハピタスポイント交換システムへ統合"
            titleBorder={true}
            list={[
              "プロジェクトリーダーとしてプロジェクトを主導。プロジェクト計画作成やマイルストーン設定を主導し遂行",
              "開発全体や一部ビジネスポイントに対しての、外部コミュニケーションの遂行と統括",
              "外部APIサービスの自社サービスへの統合につき、統括業務を遂行",
              "サービスの要件定義を統括。ビジネスにおいての新規業務、業務フローの定義を統括",
              "システムにおいての、フロー、ERD、シーケンス、UIワイヤーフレームなど、文書化スキルを駆使し、サービスアーキテクチャー設計を遂行",
              "リードエンジニアとして、ウェブや交換バッチ処理システムなど、開発全体に対してリード",
              "サービスの部分的な機能開発のための開発メンバーの管理",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="T-POINT맴버쉽포인트서비스를 해피타스 포인트 교환 시스템으로 통합"
            titleBorder={true}
            list={[
              "프로젝트 리더로써 프로젝트를 주도. 프로젝트 계획 작성 및 마일스톤 설정을 주도하여 수행",
              "개발 전체 및 일부 비지니스 포인트에 대한 외부 커뮤니케이션을 수행 및 통괄",
              "외부API서비스의 자사 서비스로의 통합에 대해 통괄 업무 수행",
              "서비스 요건 정의를 통괄. 비지니스에 대한 신규 업무 및 업무흐름 정의를 통괄",
              "시스템에 대한 플로우, ERD, 시퀀스, UI와이어프레임 등과 같은 문서화 기술을 사용하여 서비스 아키텍쳐 설계를 수행",
              "개발 리더로써 웹페이지 및 교환 일괄 처리 시스템등과 같은 개발 전체에 대해 주도",
              "서비스의 부분적인 기능 개발을 위한 개발 맴버 관리",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="integrating T-POINT membership point service to hapitas point exchange system"
            titleBorder={true}
            list={[
              "lead project as project leader. carry out make project plan. set project milestone.",
              "carry out and supervise external communication on entire development and some business point.",
              "carry out generalization as cheif to integrating external API service.",
              "carry out requirement definition as chief. carry out generalization workflow for new works on business.",
              "carry out design architecture using documentation skills likes flow-diagram, er-diagram, sequence-diagram, UI wire-frame, etc...",
              "lead entire development likes web page, batch processing system as development leader.",
              "manage members for development a features of parts of service.",
            ]}
          />
        ),
      }),
    },
    {
      children: <p>2021.3 ~ 2021. 5</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="PayPayサービスを、ハピタスポイント交換システムへ統合"
            titleBorder={true}
            list={["※ 同上"]}
          />
        ),
        ko: (
          <LeftBorderList
            title="PayPay결제서비스를 해피타스 포인트 교환 시스템에 통합"
            titleBorder={true}
            list={["※ 상기와 동일"]}
          />
        ),
        en: (
          <LeftBorderList
            title="integrating PayPay payment service to hapitas point exchange system"
            titleBorder={true}
            list={["※ same above."]}
          />
        ),
      }),
    },
    {
      label: null,
      children: <p>2021.1 ~ 2021.2</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="JALマイレージバンクサービスを、ハピタスポイント交換システムへ統合"
            titleBorder={true}
            list={["※ 同上"]}
          />
        ),
        ko: (
          <LeftBorderList
            title="JAL마일리지뱅크 서비스를 해피타스 포인트 교환 시스템에 통합"
            titleBorder={true}
            list={["※ 상기와 동일"]}
          />
        ),
        en: (
          <LeftBorderList
            title="integrating JAL mileage bank membership point service to hapitas point exchange system"
            titleBorder={true}
            list={["※ same above."]}
          />
        ),
      }),
    },
    {
      label: null,
      children: <p>2020.10 ~ 2020.12</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="dPOINTメンバーシップポイントサービスを、ハピタスポイント交換システムへ統合"
            titleBorder={true}
            list={["※ 同上"]}
          />
        ),
        ko: (
          <LeftBorderList
            title="dPOINT 맴버쉽 포인트 서비스를 해피타스 포인트 교환 시스템에 통합"
            titleBorder={true}
            list={["※ 상기와 동일"]}
          />
        ),
        en: (
          <LeftBorderList
            title="integrating dPOINT membership point service to hapitas point exchange system"
            titleBorder={true}
            list={["※ same above."]}
          />
        ),
      }),
    },
    {
      label: null,
      children: <p>2020. ~ 2021.</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <p className="font-bold">
            マーケティング組織の目標に必要な多数の開発業務を遂行.
          </p>
        ),
        ko: (
          <p className="font-bold">
            마케팅조직 목표에 필요한 다수의 개발 업무를 수행.
          </p>
        ),
        en: (
          <p className="font-bold">
            develop various middle & small features for needs of marketing
            goals.
          </p>
        ),
      }),
    },
    {
      label: null,
      children: <p className="text-gray-500">2018. 6 - 2019. 12</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <p className="text-gray-500">
            ※
            ハピタスチームから、スタートアップサービスのハピタスコミックのサービスチームに配属され、別途業務を遂行
          </p>
        ),
        ko: (
          <p className="text-gray-500">
            ※ 해피타스 팀에서 스타트업 서비스인 해피타스 코믹 서비스의 팀에
            배속되어 별도 업무를 수행
          </p>
        ),
        en: (
          <p className="text-gray-500">
            ※ left from hapitas team because assign Hapitas Comic Team which
            start up service.
          </p>
        ),
      }),
    },
    {
      label: null,
      children: <p>2018.1 - 2018.3</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="ビットコイン送金サービスを提供するBitflyer外部サービスのハピタス交換システムへの統合を遂行"
            titleBorder={true}
            list={[
              "新人エンジニアメンバーとして、BitflyerAPIを利用した、ハピタスポイントをビットコインに交換するバッチ処理プログラムの開発を遂行",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="비트코인 송금 서비스를 제공하는 Bitflyer외부 서비스의 해피타스 교환 시스템으로의 통합을 수행"
            titleBorder={true}
            list={[
              "신입 개발 맴버로써, Bitflyer API를 통한 해피타스포인트를 비트코인으로 교환하는 일괄 처리 프로그램 부분을 담당",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="integrating Bitflyer that bitcoin transfer service to hapitas point exchange system"
            titleBorder={true}
            list={[
              "as new member engineer, develop batch processing parts to exchange hapitas point to bitcoin using Bitflyer API.",
            ]}
          />
        ),
      }),
    },
  ];

  const data2 = [
    {
      label: "Requirement\nDefinition",
    },
    {
      children: i18nData({
        ja: "PJ計画作成\nマイルストーン定義",
        ko: "프로젝트 계획 작성\n마일스톤 정의",
        en: "project planning\nmilestone definition",
      }),
    },
    {
      ccolspan: 2,
      children: i18nData({
        ja: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_hapitas/milestone.png"
          />
        ),
        ko: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_hapitas/milestone.png"
          />
        ),
        en: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_hapitas/milestone.png"
          />
        ),
      }),
    },
    {
      label: "Requirement\nDefinition",
    },
    {
      children: i18nData({
        ja: "新規業務・\n業務フロー定義",
        ko: "신규 업무 및\n흐름정의",
        en: "workflow\ndefinition",
      }),
    },
    {
      ccolspan: 2,
      children: i18nData({
        ja: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_hapitas/workflow.png"
          />
        ),
        ko: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_hapitas/workflow.png"
          />
        ),
        en: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_hapitas/workflow.png"
          />
        ),
      }),
    },
    {
      label: "System\nDesign",
    },
    {
      children: i18nData({
        ja: "システムシークエンス、およびフロー, ワイヤーフレーム",
        ko: "시스템 시퀀스\n및 플로우, 와이어프레임",
        en: "system sequence\nwith flow, wireframe",
      }),
    },
    {
      ccolspan: 2,
      children: i18nData({
        ja: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_hapitas/diagram.png"
          />
        ),
        ko: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_hapitas/diagram.png"
          />
        ),
        en: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_hapitas/diagram.png"
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
                私は、2017年から、「ハピタス」というアフィリエイトを通してポイントを提供するサービスで、多数の機能を開発してきました。このサービスは、
                300万を超えるユーザーを保有しており、多数のユーザーとともに、長期的なサービス運用から重ねた貴重なデータと、アフィリエイトビジネスモデルに対するノウハウを保有しています。
              </p>
              <p>
                このサービスで、私たマーケティング組織の目標を達成するためのエンジニアチームの一員として、多数の業務を遂行しました。
              </p>
            </>
          ),
          ko: (
            <>
              <p>
                저는 2017년부터 해피타스라는 어필리에이트로 포인트 적립을
                제공하는 서비스에서 여러 기능을 개발해 왔습니다. 이 서비스는
                300만 명이 넘는 사용자를 보유하고 있으며, 다수의 사용자와 함께
                장기적인 서비스 운영에서 쌓은 귀중한 데이터, 그리고 어필리에이트
                비즈니스 모델에 대한 노하우를 보유하고 있습니다.
              </p>
              <p>
                이 서비스에서, 저는 마케팅 조직 목표를 달성하기 위한 엔지니어
                팀의 일원으로 다수 업무를 수행하였습니다.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                I had been developed several features on Hapitas Service that
                provide point-income by affliate since 2017. this service has
                over 3 million users, valuable data from many users and doing
                service long-term, and know-how which are affliate business
                model.
              </p>
              <p>
                in the service, i had been worked as one of engineer team to
                achive marketing goals.
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
          ja: (
            <p>
              チームで、私は、チームサーブリーダー、プロジェクトリーダー、システムエンジニア、技術アドバイザーやトレーナー、ミドルウェアソリューション開発、および、バックエンド・フロントエンド、一部のAWSスキルを持つフルスタックエンジニアとしての役割を遂行しました。
            </p>
          ),
          ko: (
            <p>
              팀에서 저는 팀 서브리더, 프로젝트 리더, 시스템(요건정의) 엔지니어,
              기술 어드바이저 및 트레이너, 미들웨어 솔루션 개발 및 백앤드,
              프론트엔드, 일부의 AWS스킬을 보유한 풀스택 엔지니어로써의 역할을
              수행하였습니다.
            </p>
          ),
          en: (
            <p>
              in the team, i had been roled as team sub-leader, project leader,
              system(requirement) engineer, tech advisor/trainer, middleware
              solution developer, and full-stack engineer having range of
              back-end, front-end, a little of AWS skills.
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

      <div className="grid items-center justify-center grid-cols-4 gap-1">
        {data1.map((item, idx) => {
          return (
            <ColumnUpLabel
              key={idx}
              label={item.label}
              roundedChildren={true}
              colspan={item.colspan}
            >
              {item.children}
            </ColumnUpLabel>
          );
        })}
      </div>

      <Head1>
        {i18nData({
          ja: "成果に対する詳細結果物の一部を引用",
          ko: "성과에 대한 상세 결과물 일부 인용",
          en: "Parts of details of output on achivements",
        })}
      </Head1>

      <div className="mb-5">
        <QuoteAttention/>
      </div>

      <div className="grid items-center justify-center grid-cols-4 gap-1">
        {data2.map((item, idx) => {
          return (
            <ColumnUpLabel
              key={idx}
              label={item.label}
              roundedChildren={true}
              centerChildren={true}
              colspan={item.ccolspan}
            >
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
        <p>
          System Engineering Skill, UML, ERD, PHP(Webpage), PHP(Batch
          Processing), Mysql, Front-end, AWS
        </p>
      </div>
    </div>
  );
};

export default WorksOzvisionHapitas;
