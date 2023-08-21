import i18nData from "../../i18n/i18nData";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

const WorksDanalBackend = () => {
  const data1 = [
    {
      label: i18nData({
        ja: "クレジットカード決済\nバックエンド",
        ko: "신용카드 결제\n백엔드",
        en: "credit payment\nback-end",
      }),
      children: <img src="/img/works/works_danal_backend/credit.png" />,
    },
    {
      label: i18nData({
        ja: "金券決済\nバックエンド",
        ko: "상품권 결제\n백엔드",
        en: "gift certification payment\nback-end",
      }),
      children: <img src="/img/works/works_danal_backend/coupon.png" />,
    },
    {
      label: i18nData({
        ja: "先払いチャージ・電子マネー決済のバックエンド",
        ko: "선불 충전 전자 머니 결제 백엔드",
        en: "pre-charged electric money payment back-end",
      }),
      children: <img src="/img/works/works_danal_backend/tmoney.png" />,
    },
  ];

  const data2 = [
    {
      label: i18nData({
        ja: "Year. Month",
        ko: "Year. Month",
        en: "Year. Month",
      }),
      children: <p>2017.3 ~ 2017.4</p>,
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
            title="クレジットカード番号から、種別を識別するためのBIN番号照会REST-APIサービスを開発"
            titleBorder={true}
            list={[
              "アーキテクチャーや機能設計をリード",
              "外部パートナー社から提供されるBIN情報を同期化に対する仕様定義、および外部コミュニケーションをリード",
              "システムの要件定義をリード",
              "システム開発全般をリード",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="신용카드 번호로부터 신용카드 종류를 식별하기 위한 BIN번호 조회 REST-API 서비스 개발"
            titleBorder={true}
            list={[
              "아키텍처 및 기능 설계를 주도",
              "외부 파트너사로부터 제공되는 BIN정보의 동기화에 대한 사양 정의 및 외부 커뮤니케이션을 주도",
              "시스템에 대한 요건 정의를 주도",
              "시스템 전체 개발을 주도",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="develop REST-API service to inquery BIN number to identify what kind of credit-card from credit-card number"
            titleBorder={true}
            list={[
              "lead design architecture and features.",
              "lead external communication about syncronization of BIN information provided external patners.",
              "lead requirement definition about the system.",
              "lead development entire system.",
            ]}
          />
        ),
      }),
    },
    {
      children: <p>2017.</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="クレジットカード決済のバックエンドシステムの開発や維持補修"
            titleBorder={true}
            list={[
              "クレジットカード決済における複数のの機能を開発",
              "クライアント側の導入のためのシステム仕様とガイドに対する文書化を遂行",
              "事業部と顧客社に対する外部コミュニケーションをリード",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="신용카드 결제 백엔드 시스템 개발 및 유지보수"
            titleBorder={true}
            list={[
              "신용카드 결제에 대한 여러 기능들을 개발",
              "클라이언트 도입을 위한 시스템 사양과 가이드의 문서화를 수행",
              "사업부와 고객사에 대한 외부 커뮤니케이션을 주도",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="development and maintenance on credit-card payment back-end system."
            titleBorder={true}
            list={[
              "develop features about credit card payments.",
              "do documentation of system specification and guides for clients to integrating it.",
              "lead external communication with business side and client side.",
            ]}
          />
        ),
      }),
    },
    {
      children: <p>2016.</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="金券、メンバーシップポイント、電子マネーなど、多数の決済システムの開発や維持補修"
            titleBorder={true}
            list={[
              "多数サービスに対して、機能開発をリード",
              "クライアント側の導入のためのシステム仕様とガイドに対する文書化を遂行",
              "事業部と顧客社に対する外部コミュニケーションをリード",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="상품권, 맴버쉽 포인트 카드, 전자화폐등 다수의 결제 시스템의 개발 및 유지보수"
            titleBorder={true}
            list={[
              "해당 서비스들에 대한 기능 개발을 주도",
              "클라이언트 도입을 위한 시스템 사양과 가이드의 문서화를 수행",
              "사업부와 고객사에 대한 외부 커뮤니케이션을 주도",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="development and maintenance on various payment systems likes gift card, membership point card, e-money."
            titleBorder={true}
            list={[
              "lead development features about the services.",
              "do documentation of system specification and guides for clients to integrating it.",
              "lead external communication with business side and client side.",
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
                バックエンドエンジニアとして、株式会社DANALで業務を遂行しました。
                <br />
                DANALは、ユーザーやE-COMMERCE、ゲーム、コンテンツ提供サービスなどの業界において、
                さまざまな決済手段を提供するための、決済代行プラットフォームをサービスしており、
                業界１位のシェアを持っています。
              </p>
              <p>
                私は、２年の間、金融サービスチームに配属し、クレジットカード、銀行送金、金券、メンバーシップポイントカードなどの
                サーバーアプリケーションのようなバックエンドサービスに対し、多数の開発業務を遂行しました。
                <br />
                また、ミドルウェア開発エンジニアとして、Javaベースの
                「クレジットカード番号から種別を識別するためのBIN番号照会REST-API」サービスを開発しました。
              </p>
            </>
          ),
          ko: (
            <>
              <p>
                백엔드 엔지니어로써 주식회사 다날에서 업무를 수행하였습니다.
                <br />
                다날은 사용자 또는 전자상거래, 게임, 콘텐츠 제공업체 등과 같은
                업계에 다양한 결제 수단을 제공하기 위한 결제 게이트웨이 플랫폼을
                서비스 하고 있으며, 업계 1위 점유율을 차지하고 있습니다.
              </p>
              <p>
                본인은 2년간, 금융서비스팀에 배속되어 신용카드, 은행 송금,
                상품권, 맴버쉽 포인트카드 등의 서버 어플리케이션과 같은 결제
                백엔드 서비스에 대해 다양한 개발 업무를 수행하였습니다.
                <br />
                또한, 미들웨어개발자로써 Java기반의, 신용카드 번호에서 종별을
                식별하기 위한 BIN번호 조회 REST-API서비스를 개발하였습니다.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                as back-end engineer, I had been worked in Danal, Inc.
                <br />
                the company is servicing payment gateway platform to provide
                various payment methods to users or other companies likes
                e-commerce, game, contents provider, etc. and having first share
                on the field.
              </p>
              <p>
                for 2 years, i had been assigned financial service team and
                carried out various development of payment back-end service
                likes server applications that credit-card, bank transfer, gift
                card, membership point card, etc.
                <br />
                additionally, as middleware engineer, developed REST-API service
                to inquery BIN number to identify what kind of credit-card from
                credit-card number using Java.
              </p>
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
              バックエンドエンジニア、システムエンジニア、小規模のプロジェクトリーダー、ミドルウェア開発エンジニアとして役割を遂行しました。
            </p>
          ),
          ko: (
            <p>
              백엔드 개발자, 시스템(요건정의) 엔지니어, 소규모의 프로젝트 리더,
              미들웨어 개발자로써 역할을 수행하였습니다.
            </p>
          ),
          en: (
            <p>
              in the team, i had been roled as back-end engineer,
              system(requirement) engineer, small project leader, middleware
              engineer.
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
        {data2.map((item, idx) => {
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
          ja: "業務関連スキル",
          ko: "업무 관련 스킬",
          en: "Skills related works",
        })}
      </Head1>

      <div className="mb-5">
        <p>
          System Engineering Skill, UML, ERD, Java(Back-end), Javascript(Rhino
          on Java), PHP
        </p>
      </div>
    </div>
  );
};

export default WorksDanalBackend;
