import { FunctionComponent } from "react";
import CvContainer from "../../CommonParts/CvContainer";
import CvHeader from "../../CommonParts/CvHeader";
import CvContent from "../../CommonParts/CvContent";
import CvQuote from "../../CommonParts/CvQuote";
import CvContentTitleOnly from "../../CommonParts/CvContentTitleOnly";
import i18nData from "../../../../i18n/i18nData";
const CV_6: FunctionComponent<{}> = () => {
  return (
    <CvContainer>
      <CvHeader
        pageNow={1}
        pageAll={6}
        pageTitle="Senior Web Application Engineer"
        pageTitleSub={i18nData({
          ja: "IBM Systems Engineering. SIer / Digital Transformation",
          ko: "IBM Systems Engineering. SIer / Digital Transformation",
          en: "IBM Systems Engineering. SIer / Digital Transformation",
        })}
      />
      <CvContent
        cvDatas={[
          {
            period: "2023.4 ~ NOW",
            title: i18nData({
              ja: "建築関連企業様、現場資機材管理UIシステム開発",
              ko: "건축 관련 기업, 현장 자재 및 기계 관리 UI 시스템 개발",
              en: "on-site equipment management UI system for Construction Ind.",
            }),
            body: [
              {
                title: "Achievement",
                items: i18nData({
                  ja: [
                    "CrossPlatformにおける、AWS Cognito認証・認可基盤設計リード\n(ログイン管理、S3 File UploadなどAWSリソースアクセス認可)",
                    "API Gateway & Lambda(Node.js) & Elastic Beanstalk(Legacy API)おける概念設計、Serverless API開発担当",
                    "Non AWS→AWS移行においての「Web Application」パートをリード",
                    "UI開発においてのwire-frame, 詳細画面定義をリード",
                  ],
                  ko: [
                    "CrossPlatform에서 AWS Cognito 인증 및 인가 기반 설계 리드\n(로그인 관리, S3 파일 업로드 등 AWS 리소스 엑세스 권한 인증)",
                    "API Gateway & Lambda(Node.js) & Elastic Beanstalk(Legacy API)에서의 개념 설계, Serverless API 개발 담당",
                    "Non AWS에서 AWS로의 이전에서 '웹 애플리케이션' 부분을 리드",
                    "UI 개발에서의 와이어프레임, 상세 화면 정의를 리드",
                  ],
                  en: [
                    "design of AWS Cognito authentication and authorization foundation in CrossPlatform\n(Managed login, S3 File Upload, and other AWS resource access authorization)",
                    "conceptual design and development of Serverless API using API Gateway & Lambda(Node.js) & Elastic Beanstalk(Legacy API)",
                    "lead the 'Web Application' part in the migration from Non AWS to AWS",
                    "lead the wireframe and detailead screen definition in UI development",
                  ],
                }),
              },
              {
                title: "Responsibility",
                items: i18nData({
                  ja: [
                    "「社内残業時間の削減 > 工事現場の資機材把握にかかっている人的時間工数の削減」という課題に対し「現場画像からの資機材AI分析・UI可視化」ソリューションのUI可視化のデリバリーに参画",
                    "UIシステム開発チームのサブリーダーを遂行\n(Web開発, MobileAppチーム, Infraチームの３つのユニット構成)",
                  ],
                  ko: [
                    "「회사 내의 연장 근로 시간 축소 > 건설 현장의 자재 및 장비 파악에 소요되는 인력 시간 감소」 문제에 대해 「현장 이미지로부터의 자재 및 장비 AI 분석 및 UI 시각화」솔루션의 UI 시각화",
                    "UI 시스템 개발 팀의 부팀장을 수행\n(Web 개발, 모바일 앱 팀, 인프라 팀의 세 개의 유닛 구성)",
                  ],
                  en: [
                    "participated in the delivery of a solution for the problem of 'Reducing internal overtime hours > Reducing the man-hours spent on tracking equipment and materials at construction sites' by using AI analysis and UI visualization of on-site images.",
                    "served as the sub-leader of the UI system development team, composed of three units: Web development, MobileApp team, and Infra team.",
                  ],
                }),
              },
              {
                title: "Skill",
                items: i18nData({
                  ja: [
                    "アーキテクチャー設計(全体サービスにおいての認証・認可フロー)",
                    "UI要件定義、画面設計(Adobe XD)",
                    "Node.js, PostgreSQL, Angular, TailwindCSS",
                    "AWS (Cognito, S3, API Gateway, Lambda, Elastic Beanstalk, CloudFront, etc...)",
                  ],
                  ko: [
                    "아키텍처 설계(전체 서비스에 대한 인증 및 권한 부여 흐름)",
                    "UI 요구 사항 정의, 화면 설계(Adobe XD)",
                    "Node.js, PostgreSQL, Angular, TailwindCSS",
                    "AWS (Cognito, S3, API Gateway, Lambda, Elastic Beanstalk, CloudFront 등)",
                  ],
                  en: [
                    "Architectural design (authentication and authorization flow for the entire service)",
                    "UI requirements definition, screen design (Adobe XD)",
                    "Node.js, PostgreSQL, Angular, TailwindCSS",
                    "AWS (Cognito, S3, API Gateway, Lambda, Elastic Beanstalk, CloudFront, etc...)",
                  ],
                }),
              },
            ],
          },
        ]}
      ></CvContent>
      <CvContentTitleOnly
        headText={i18nData({
          ja: "※その他、多数のプロジェクトを遂行",
          ko: "※기타 다수의 프로젝트를 수행",
          en: "※In addition, several projects have been carried out",
        })}
        cvDatas={[
          {
            period: "2023.4 ~ 2023.8",
            title: i18nData({
              ja: "店舗エネルギ使用量可視化UIシステム、データ蓄積基盤開発\n(Node.js, MongoDB, Batch)",
              ko: "상점 에너지 사용량 시각화 UI 시스템, 데이터 축적 기반 개발\n(Node.js, MongoDB, Batch)",
              en: "Store energy usage visualization UI & data accumulation system design (Node.js, MongoDB, Batch)",
            }),
          },
          {
            period: "2023.1 ~ 2023.3",
            title: i18nData({
              ja: "PV発電量効率化PJにおいて、気象予測ソリューション検証をリード\n(IBM EIS, Python)",
              ko: "PV 발전량 효율화 프로젝트에서 기상 예보 솔루션 검증을 이끔\n(IBM EIS, Python)",
              en: "Leading weather prediction solution verification in the PV power generation efficiency project (IBM EIS, Python)",
            }),
          },
          {
            period: "2023.1 ~ 2023.3",
            title: i18nData({
              ja: "経費申請不正検知ソリューション開発リード\n(Python, Golang)",
              ko: "경비 신청 부정 감지 솔루션 개발 리드\n(Python, Golang)",
              en: "Leading the development of expense claim fraud detection solution (Python, Golang)",
            }),
          },
          {
            period: "2023.9 ~ 2023.11",
            title: i18nData({
              ja: "科学関連企業様、原料管理・検索・可視化システムPoC開発\n&データ設計、運用整備(Node.js, PostgreSQL)",
              ko: "과학 관련 기업 고객을 위한 원재료 관리, 검색, 시각화 시스템 PoC 개발\n&데이터 설계, 운영 준비(Node.js, PostgreSQL)",
              en: "PoC development of raw material management, search, and visualization system for science-related companies\n& Data design, operation maintenance(Node.js, PostgreSQL)",
            }),
          },
        ]}
      />
      <CvContentTitleOnly
        headText={i18nData({
          ja: "※その他、社内Technical Vitality活動を遂行",
          ko: "※기타 회사 내 Technical Vitality 활동을 수행",
          en: "※In addition, conducted internal Technical Vitality activities",
        })}
        cvDatas={[
          {
            period: "2023.4 ~ 2023.8",
            title: i18nData({
              ja: "社内研修参画リード\n-Node.js & TypeScriptでやるTDD & DDDの基礎と実践-",
              ko: "회사 내 교육 개최 리드\n-Node.js & TypeScript로 하는 TDD & DDD의 기초와 실습-",
              en: "Leading internal training\n-Practice of TDD & DDD with Node.js & TypeScript-",
            }),
          },
          {
            period: "2023.1 ~ 2023.3",
            title: i18nData({
              ja: "ISE Conference Showroom 2023\n「不正検知ソリューションデモ」の開発と展示をリード",
              ko: "ISE Conference Showroom 2023\n'부정 감지 솔루션 데모'의 개발 및 전시를 리드",
              en: "ISE Conference Showroom 2023 -Leading the development and exhibition of 'Fraud Detection Solution Demo'-",
            }),
          },
          {
            period: "2023.1 ~ 2023.3",
            title: i18nData({
              ja: "新人研修ハッカソンにおいてのWebApplication開発ガイドをリード (Node.js, Docker)",
              ko: "신입 교육 해커톤에서 웹 애플리케이션 개발 가이드를 리드 (Node.js, Docker)",
              en: "Leading Web Application Development Guide in Newcomer Training Hackathon (Node.js, Docker)",
            }),
          },
        ]}
      />
      <CvQuote
        cvQuoteDatas={[
          {
            title: i18nData({
              ja: "AWS基盤認証・認可アーキテクチャ設計(Cognito&API Gateway&Web&MobileApp)",
              ko: "AWS 기반 인증 및 권한 부여 아키텍처 설계(Cognito&API Gateway&Web&MobileApp)",
              en: "authentication & authorization architecture design on AWS(Cognito&API Gateway&Web&MobileApp)",
            }),
            img: "/img/works/works_ise/ise1.png",
          },
          {
            title: i18nData({
              ja: "TDD・DDD社内研修主任講師として講演(クリーン・アーキテクチャの階層と依存関係)",
              ko: "TDD・DDD 회사 내 교육 주임강사로서 강연(클린 아키텍처의 계층과 의존관계)",
              en: "Lecture as TDD・DDD instructor(Clean Architecture hierarchy and dependencies)",
            }),
            img: "/img/works/works_ise/ise2.png",
          },
          {
            title: i18nData({
              ja: "Clean Architecture Class Diagram (Node.js, TypeScript, TypeDI, TypeORM)",
              ko: "Clean Architecture 클래스 다이어그램 (Node.js, TypeScript, TypeDI, TypeORM)",
              en: "Clean Architecture Class Diagram (Node.js, TypeScript, TypeDI, TypeORM)",
            }),
            img: "/img/works/works_ise/ise3.png",
          },
        ]}
      />
    </CvContainer>
  );
};

export default CV_6;
