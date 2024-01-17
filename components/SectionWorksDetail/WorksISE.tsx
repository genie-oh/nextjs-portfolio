import i18nData from "../../i18n/i18nData";
import QuoteAttention from "../CommonParts/QuoteAttention";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

const WorksISE = () => {
  const data1 = [
    {
      label: i18nData({
        ja: "Year. Month",
        ko: "Year. Month",
        en: "Year. Month",
      }),
      children: <p>2023.4 ~ 2024.1</p>,
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
            title="建築関連企業様、現場資機材管理UIシステム・管理画面開発"
            titleBorder={true}
            list={[
              "AWS Cognito認証・認可基盤・MFA処理の設計・導入をリード(Web UI, 管理画面、IOSアプリ)",
              "Cognito Group & Custom Authorizer基盤ユーザー権限管理の設計・具現をリード",
              "API Gateway & Lambda(Node.js) & Elastic Beanstalk(Legacy API)おける概念設計、Serverless API開発担当",
              "Non AWS→AWS移行においての「Web Application」パートをリード",
              "UI開発においてのwire-frame、詳細画面定義をリード",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="건축 관련 기업, 현장 자재 및 기계 관리 UI 시스템 개발"
            titleBorder={true}
            list={[
              "AWS Cognito인증기반, MFA처리의 설계,도입을 리드(Web UI, 관리화면, IOS앱)",
              "Cognito Group & Custom Authorizer기반유저권한관리의 설계, 구현을 리드",
              "API Gateway & Lambda(Node.js) & Elastic Beanstalk(Legacy API)에서의 개념 설계, Serverless API 개발 담당",
              "Non AWS에서 AWS로의 이전에서 '웹 애플리케이션' 부분을 리드",
              "UI 개발에서의 와이어프레임, 상세 화면 정의를 리드",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="on-site equipment management UI system for Construction Ind."
            titleBorder={true}
            list={[
              "design of AWS Cognito authentication and authorization foundation(WebUI, AdminPage, IOS APP)",
              "lead design & implement of user access control using Cognito Group & Custom Authorizer",
              "conceptual design and development of Serverless API using API Gateway & Lambda(Node.js) & Elastic Beanstalk(Legacy API)",
              "lead the 'Web Application' part in the migration from Non AWS to AWS",
              "lead the wireframe and detailead screen definition in UI development",
            ]}
          />
        ),
      }),
    },
    {
      children: <p>2023.9 ~ 2024.1</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="リース関連企業様DX支援（Node.js + Next.js)"
            titleBorder={true}
            list={[]}
          />
        ),
        ko: (
          <LeftBorderList
            title="리스 관련 기업 DX 지원 (Node.js + Next.js)"
            titleBorder={true}
            list={[]}
          />
        ),
        en: (
          <LeftBorderList
            title="Digital Transformation on Company related lease business (Node.js + Next.js)"
            titleBorder={true}
            list={[]}
          />
        ),
      }),
    },
    {
      children: <p>2023.4 ~ 2023.8</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="店舗エネルギ使用量可視化UIシステム開発PJリード(Node.js + TS + MongoDB)"
            titleBorder={true}
            list={[]}
          />
        ),
        ko: (
          <LeftBorderList
            title="점포에너지사용량의 가시화UI시스템개발PJ를 리드(Node.js + TS + MongoDB)"
            titleBorder={true}
            list={[]}
          />
        ),
        en: (
          <LeftBorderList
            title="lead project energy usage visualization for store(Node.js+TS+MongoDB)"
            titleBorder={true}
            list={[]}
          />
        ),
      }),
    },
    {
      label: null,
      children: <p>2023.1 ~ 2023.3</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="PV発電量効率化PJにおいて、気象予測ソリューション検証をリード(IBM EIS, Python)"
            titleBorder={true}
            list={[]}
          />
        ),
        ko: (
          <LeftBorderList
            title="PV 발전량 효율화 프로젝트에서 기상 예보 솔루션 검증을 이끔(IBM EIS, Python)"
            titleBorder={true}
            list={[]}
          />
        ),
        en: (
          <LeftBorderList
            title="Leading weather prediction solution verification in the PV power generation efficiency project (IBM EIS, Python)"
            titleBorder={true}
            list={[]}
          />
        ),
      }),
    },
    {
      label: null,
      children: <p>2023.1 ~ 2023.3</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="経費申請不正検知ソリューション開発リード(Python, Golang)"
            titleBorder={true}
            list={[]}
          />
        ),
        ko: (
          <LeftBorderList
            title="경비 신청 부정 감지 솔루션 개발 리드(Python, Golang)"
            titleBorder={true}
            list={[]}
          />
        ),
        en: (
          <LeftBorderList
            title="Leading the development of expense claim fraud detection solution (Python, Golang)"
            titleBorder={true}
            list={[]}
          />
        ),
      }),
    },
    {
      label: null,
      children: <p>2022.9 ~ 2022.12</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="科学関連企業様、原料管理・検索・可視化システムPoC開発&データ設計、運用整備、Backend API設計・開発をリード (Node.js + TypeScript + PostgreSQL)"
            titleBorder={true}
            list={[]}
          />
        ),
        ko: (
          <LeftBorderList
            title="과학 관련 기업 고객을 위한 원재료 관리, 검색, 시각화 시스템 PoC 개발&데이터 설계, 운영 정비、Backend API설계 개발을 리드 (Node.js + TypeScript + PostgreSQL)"
            titleBorder={true}
            list={[]}
          />
        ),
        en: (
          <LeftBorderList
            title="PoC development of raw material management, search, and visualization system for science-related companies& Data design, operation maintenance, Backend API (Node.js+TypeScript+PostgreSQL)"
            titleBorder={true}
            list={[]}
          />
        ),
      }),
    },
    {
      label: null,
      colspan: 4,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="※以下、社内Technical Vitality活動を遂行"
            titleBorder={false}
            list={[]}
          />
        ),
        ko: (
          <LeftBorderList
            title="※이하 회사 내 Technical Vitality 활동을 수행"
            titleBorder={false}
            list={[]}
          />
        ),
        en: (
          <LeftBorderList
            title="※below, conducted internal Technical Vitality activities"
            titleBorder={false}
            list={[]}
          />
        ),
      }),
    },
    {
      label: null,
      children: <p>2023.4 ~ 2023.8</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="社内研修参画リード-Node.js & TypeScriptでやるTDD & DDDの基礎と実践-"
            titleBorder={true}
            list={[]}
          />
        ),
        ko: (
          <LeftBorderList
            title="회사 내 교육 개최 리드-Node.js & TypeScript로 하는 TDD & DDD의 기초와 실습-"
            titleBorder={true}
            list={[]}
          />
        ),
        en: (
          <LeftBorderList
            title="Leading internal training-Practice of TDD & DDD with Node.js & TypeScript-"
            titleBorder={true}
            list={[]}
          />
        ),
      }),
    },
    {
      label: null,
      children: <p>2023.1 ~ 2023.3</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="ISE Conference Showroom 2023「不正検知ソリューションデモ」の開発と展示をリード"
            titleBorder={true}
            list={[]}
          />
        ),
        ko: (
          <LeftBorderList
            title="ISE Conference Showroom 2023'부정 감지 솔루션 데모'의 개발 및 전시를 리드"
            titleBorder={true}
            list={[]}
          />
        ),
        en: (
          <LeftBorderList
            title="ISE Conference Showroom 2023 -Leading the development and exhibition of 'Fraud Detection Solution Demo'-"
            titleBorder={true}
            list={[]}
          />
        ),
      }),
    },
    {
      label: null,
      children: <p>2022.8 ~ 2022.9</p>,
    },
    {
      label: null,
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="新人研修ハッカソンにおいてのWebApplication開発ガイドをリード (Node.js, Docker)"
            titleBorder={true}
            list={[]}
          />
        ),
        ko: (
          <LeftBorderList
            title="신입 교육 해커톤에서 웹 애플리케이션 개발 가이드를 리드 (Node.js, Docker)"
            titleBorder={true}
            list={[]}
          />
        ),
        en: (
          <LeftBorderList
            title="Leading Web Application Development Guide in Newcomer Training Hackathon (Node.js, Docker)"
            titleBorder={true}
            list={[]}
          />
        ),
      }),
    },
  ];

  const data2 = [
    {
      label: "SystemDesign",
    },
    {
      children: i18nData({
        ja: "AWS基盤認証・認可アーキテクチャ設計 (Cognito & API Gateway & Web & MobileApp)",
        ko: "AWS 기반 인증 및 권한 부여 아키텍처 설계 (Cognito & API Gateway & Web & MobileApp)",
        en: "authentication & authorization architecture design on AWS (Cognito & API Gateway & Web & MobileApp)",
      }),
    },
    {
      ccolspan: 2,
      children: (
        <img className="w-32 lg:w-80" src="/img/works/works_ise/ise1.png" />
      ),
    },
    {
      label: "Architecture",
    },
    {
      children: i18nData({
        ja: "TDD・DDD社内研修主任講師として講演(クリーン・アーキテクチャの階層と依存関係)",
        ko: "TDD・DDD 회사 내 교육 주임강사로서 강연(클린 아키텍처의 계층과 의존관계)",
        en: "Lecture as TDD・DDD instructor(Clean Architecture hierarchy and dependencies)",
      }),
    },
    {
      ccolspan: 2,
      children: (
        <img className="w-32 lg:w-80" src="/img/works/works_ise/ise2.png" />
      ),
    },
    {
      label: "Architecture",
    },
    {
      children: i18nData({
        ja: "Clean Architecture Class Diagram (Node.js, TypeScript, TypeDI, TypeORM)",
        ko: "Clean Architecture 클래스 다이어그램 (Node.js, TypeScript, TypeDI, TypeORM)",
        en: "Clean Architecture Class Diagram (Node.js, TypeScript, TypeDI, TypeORM)",
      }),
    },
    {
      ccolspan: 2,
      children: (
        <img className="w-32 lg:w-80" src="/img/works/works_ise/ise3.png" />
      ),
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
                日本の「IBM Japan Systems Engineering / Sier,
                DX」で「Full-stack Web EngineerおよびLead Application
                Engineer」として働いています。私は建設業と化学業界のUIシステムの開発をリードし、AWS
                Cognito認証とバックエンドAPIの設計に重点を置きました。
              </p>
              <p>
                さらに、社内研修から不正検出システムまでのさまざまな他のプロジェクトを主導しました。
              </p>
            </>
          ),
          ko: (
            <>
              <p>
                일본의 "IBM Japan Systems Engineering / Sier,
                DX"에서 "Full-stack Web Engineer 및 Lead Application Engineer"로
                일하고 있습니다. 건설 및 화학 산업을 위한 UI 시스템 개발을
                주도하며, AWS Cognito 인증 및 백엔드 API 디자인에 중점을
                두었습니다.
              </p>
              <p>
                또한, 내부 교육 세션부터 비용 관리 시스템의 부정 탐지까지 다양한
                프로젝트를 주도했습니다.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                "IBM Japan Systems Engineering / Sier, DX"
                in Japan, I've been a "Full-stack Web Engineer and Lead
                Application Engineer." I led the development of UI systems for
                construction and chemical industries, focusing on AWS Cognito
                Authentication and backend API designs.
              </p>
              <p>
                Additionally, I headed various other projects, from internal
                training sessions to fraud detection systems.
              </p>
            </>
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
        <QuoteAttention />
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
          System Engineering Skill, Node.js, TypeScript, PostgreSQL, Python,
          Golang, TailwindCSS, React, AWS, DDD, TDD
        </p>
      </div>
    </div>
  );
};

export default WorksISE;
