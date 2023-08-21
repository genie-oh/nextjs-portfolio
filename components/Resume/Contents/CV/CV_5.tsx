import { FunctionComponent } from "react";
import CvContainer from "../../CommonParts/CvContainer";
import CvHeader from "../../CommonParts/CvHeader";
import CvContent from "../../CommonParts/CvContent";
import i18nData from "../../../../i18n/i18nData";
import CvQuote from "../../CommonParts/CvQuote";
import CvContentTitleOnly from "../../CommonParts/CvContentTitleOnly";

const CV_5: FunctionComponent<{}> = () => {
  return (
    <CvContainer>
      <CvHeader
        pageNow={2}
        pageAll={6}
        pageTitle="Senior Web Engineer"
        pageTitleSub={i18nData({
          ja: "株式会社オズビジョン ｜ ハピタス・ポイントサービス",
          ko: "주식회사 오즈비전 ｜ 하피타스 포인트 서비스",
          en: "Ozvision Inc. ｜ Hapitas Point Service",
        })}
      />
      <CvContent
        cvDatas={[
          {
            period: "2018 ~ 2022",
            title: i18nData({
              ja: "ポイント交換機能リニュアルPJ提案・リード\n他社ポイントサービスを自社サービスへ多数統合",
              ko: "포인트 교환 기능 리뉴얼 프로젝트 제안 및 리드\n타사 포인트 서비스를 자사 서비스로 다수 통합",
              en: "Proposal and leadership of point exchange feature renewal project\nIntegration of numerous third-party point services into our own service",
            }),
            body: [
              {
                title: "Responsibility",
                items: i18nData({
                  ja: [
                    "交換システムのリニューアル計画の立ち上げ",
                    "既存の複雑化されたシステムをリニューアルするためのプロジェクトを提案し、生産性向上とトラブル率を大幅に改善させる",
                    "社内ソフトウェア開発スキル向上のための見本を作る",
                    "外部連携の納期を守るPJ管理と、リニューアルPJを同時に成功させる",
                    "プロジェクトリーダー、ソフトウェア全体設計、開発統括を遂行する",
                  ],
                  ko: [
                    "교환 시스템의 리뉴얼 계획의 설정",
                    "기존의 복잡화된 시스템을 리뉴얼하기 위한 프로젝트를 제안, 생산성 향상과 결함율을 대폭 개선",
                    "사내 소프트웨어 개발 스킬 향상을 위한 예시를 개발",
                    "외부 협력의 납기를 지키는 PJ 관리와 리뉴얼 PJ를 동시에 수행",
                    "프로젝트 리더, 소프트웨어 전체 설계, 개발 총괄을 수행",
                  ],
                  en: [
                    "launching the renewal plan for the exchange system",
                    "proposing a project to renew the existing complex system, greatly improving productivity and reducing the trouble rate",
                    "creating a model for improving in-house software development skills",
                    "managing projects with external partners with successfully renewing projects",
                    "acting as project leader, overseeing software design, and directing",
                  ],
                }),
              },

              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "コンポーネント志向ソフトウェア構造, ビジネスロジック階層の設計\n（Layers of Repository, Service、Component、Context、Exception)",
                    "DI、Middleware Patternを活用したコンポーネント実行・処理ハンドラー設計",
                    "外部連携の先方調整・仕様設計部門を統括",
                    "全体開発の80%以上を担当（高い技術パフォーマンス発揮）",
                    "ビジネスロジックのコンポーネント化実現、機能ごとの依存性を最小化",
                    "ユニットテストを0%➡︎80%程度まで引き上げ、TDD導入基盤構築",
                    "変化するビジネス要求に迅速・安全に答えられるサービスへの可能性を提示",
                  ],
                  ko: [
                    "컴포넌트 지향 소프트웨어 구조, 비즈니스 로직 계층의 설계\n（Layers of Repository, Service、Component、Context、Exception)",
                    "DI, 미들웨어 패턴을 활용한 컴포넌트 실행·처리 핸들러 설계",
                    "외부 협력의 선방 조정·사양 설계 부서를 통합",
                    "전체 개발의 80% 이상을 담당(높은 기술 퍼포먼스 발휘)",
                    "비즈니스 로직의 컴포넌트화 실현, 기능별 의존성을 최소화",
                    "유닛 테스트를 0% ➡︎ 80% 정도까지 올리고, TDD 도입 기반 구축",
                    "변화하는 비즈니스 요구에 신속·안전하게 대응할 수 있는 서비스의 가능성을 제시",
                  ],
                  en: [
                    "component-oriented software structure, design of business logic hierarchy\n(Layers of Repository, Service, Component, Context, Exception)",
                    "design of component execution handler using DI and Middleware Pattern",
                    "coordinating the collaboration of design, bisuness department and externals",
                    "more than 80% of the overall development (high technical performance)",
                    "realizing the componentization of business logic, minimizing dependency on features",
                    "raising unit tests from 0% to about 80%, building TDD introduction foundation",
                    "up possibility of a service that can quickly and safely respond to changing business",
                  ],
                }),
              },
              {
                title: "Skill",
                items: i18nData({
                  ja: [
                    "要件定義・技術選定・提案スキル",
                    "ソフトウェアアーキテクチャー、OOPスキル",
                    "課題設計・改善アイディア提案・プロジェクト設計",
                    "外部連携においてのコミュニケーション・調整・提案",
                    "事業・開発メンバーマネジメント",
                    "UML（シーケンス、ステート、クラス設計）",
                    "PHP (Symfony, Twig, RelayPHP), TailwindCSS, React, AWS",
                  ],
                  ko: [
                    "요구 사항 정의·기술 선택·제안 스킬",
                    "소프트웨어 아키텍처, OOP 스킬",
                    "과제 설계·개선 아이디어 제안·프로젝트 설계",
                    "외부 연계에서의 커뮤니케이션·조정·제안",
                    "사업·개발 멤버 관리",
                    "UML (시퀀스, 스테이트, 클래스 설계)",
                    "PHP (Symfony, Twig, RelayPHP), TailwindCSS, React, AWS",
                  ],
                  en: [
                    "requirement Definition, Technology Selection, Proposal Skills",
                    "software Architecture, OOP Skills",
                    "issue Design, Improvement Idea Proposal, Project Design",
                    "communication, Coordination, Proposal in External Collaboration",
                    "business & Development Member Management",
                    "UML (Sequence, State, Class Design)",
                    "PHP (Symfony, Twig, RelayPHP), TailwindCSS, React, AWS",
                  ],
                }),
              },
            ],
          },
        ]}
      />
      <CvContentTitleOnly
        headText={i18nData({
          ja: "以下、外部連携・統合において類似な業務遂行のため、タイトルのみ記載",
          ko: "다음은 외부 연계 및 통합에서 유사한 업무 수행을 위해 제목만 기재",
          en: "Below, only titles are listed for similar tasks in external collaboration and integration",
        })}
        cvDatas={[
          {
            period: "2022.3 ~ 2022.6",
            title: i18nData({
              ja: "ポイント交換機能リニュアルPJ提案・リード",
              ko: "포인트 교환 기능 리뉴얼 프로젝트 제안 및 리드",
              en: "Point Exchange Feature Renewal Project Proposal & Lead",
            }),
          },
          {
            period: "2022.3 ~ 2022.6",
            title: i18nData({
              ja: "T-POINTサービスをハピタスポイント交換システムへ統合",
              ko: "T-POINT 서비스를 해피타스 포인트 교환 시스템으로 통합",
              en: "Integration of T-POINT Service into our exchange system",
            }),
          },
          {
            period: "2022.4 ~ 2022.6",
            title: i18nData({
              ja: "Pontaポイントサービスを新規・交換システムに統合",
              ko: "Ponta 포인트 서비스를 새로운 교환 시스템으로 통합",
              en: "Integration of Ponta Point Service into our exchange system",
            }),
          },
          {
            period: "2022.3 ~ 2022.5",
            title: i18nData({
              ja: "PayPayサービスを、ハピタスポイント交換システムへ統合",
              ko: "PayPay 서비스를 해피타스 포인트 교환 시스템으로 통합",
              en: "Integration of PayPay Service into our exchange system",
            }),
          },
          {
            period: "2022.1 ~ 2022.2",
            title: i18nData({
              ja: "JALマイレージバンクサービスを交換システムに統合",
              ko: "JAL 마일리지 뱅크 서비스를 교환 시스템에 통합",
              en: "Integration of JAL Mileage into our exchange system",
            }),
          },
          {
            period: "2021.10 ~ 2021.12",
            title: i18nData({
              ja: "dポイントサービスを交換システムに統合",
              ko: "d포인트 서비스를 교환 시스템에 통합",
              en: "Integration of d-Point Service our exchange system",
            }),
          },
          {
            period: "2020. ~ 2021.",
            title: i18nData({
              ja: "※ハピタス再配属、CX組織の目標に必要な多数の開発遂行",
              ko: "※해피타스 재배치, CX 조직의 목표를 위한 다양한 개발 수행",
              en: "re-assign to 'Hapitas team', do saveral projects for CX goals",
            }),
            isGray: true,
          },
          {
            period: "2018.6 - 2019.12",
            title: i18nData({
              ja: "※ハピタスチームから「ハピタスコミック」に配属、別途業務遂行",
              ko: "※해피타스 팀에서 '해피타스 코믹'으로 배치, 별도의 업무 수행",
              en: "re-assign to 'Hapitas Comic team', out of related projects",
            }),
            isGray: true,
          },
          {
            period: "2018.1 - 2018.3",
            title: i18nData({
              ja: "Bitflyer送金サービスをハピタス交換システムへの統合",
              ko: "Bitflyer 송금 서비스를 해피타스 교환 시스템에 통합",
              en: "Integration of Bitflyer into our exchange system",
            }),
          },
          {
            period: "2018.1",
            title: i18nData({
              ja: "※株式会社オズビジョン入社 / メンバーウェブエンジニア",
              ko: "※주식회사 오즈비전 입사 / 웹 엔지니어로 입사",
              en: "Joined Ozvision Co., Ltd. as a Web Engineer",
            }),
            isGray: true,
          },
        ]}
      />

      <CvQuote
        cvQuoteDatas={[
          {
            title: i18nData({
              ja: "PJ計画作成\nマイルストーン定義",
              ko: "PJ 계획 작성\n마일스톤 정의",
              en: "PJ Planning\nMilestone Definition",
            }),
            img: "/img/works/works_ozvision_hapitas/milestone.png",
          },
          {
            title: i18nData({
              ja: "新規業務\n業務フロー定義",
              ko: "신규 업무\n업무 플로우 정의",
              en: "New Task\nWorkflow Definition",
            }),
            img: "/img/works/works_ozvision_hapitas/workflow.png",
          },
          {
            title: i18nData({
              ja: "システムシークエンス\nワイヤーフレーム",
              ko: "시스템 시퀀스\n와이어프레임",
              en: "System Sequence\nWireframe",
            }),
            img: "/img/works/works_ozvision_hapitas/diagram.png",
          },
        ]}
      />
    </CvContainer>
  );
};

export default CV_5;
