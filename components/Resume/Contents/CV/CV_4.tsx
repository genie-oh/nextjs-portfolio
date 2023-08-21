import { FunctionComponent } from "react";
import CvContainer from "../../CommonParts/CvContainer";
import CvHeader from "../../CommonParts/CvHeader";
import CvContent from "../../CommonParts/CvContent";
import i18nData from "../../../../i18n/i18nData";
import CvQuote from "../../CommonParts/CvQuote";
import CvContentTitleOnly from "../../CommonParts/CvContentTitleOnly";

const CV_4: FunctionComponent<{}> = () => {
  return (
    <CvContainer>
      <CvHeader
        pageNow={3}
        pageAll={6}
        pageTitle="Lead Web Engineer"
        pageTitleSub={i18nData({
          ja: "株式会社オズビジョン ｜ ハピタスコミック・CtoC漫画サービス・スタートアップ",
          ko: "주식회사 오즈비전 ｜ 해피타스 코믹・CtoC 만화 서비스・스타트업",
          en: "Ozvision Inc. ｜ Hapitas Comic・CtoC Manga Service・Startup",
        })}
      />
      <CvContentTitleOnly
        cvDatas={[
          {
            period: "2019. 12",
            title: i18nData({
              ja: "※サービス終了",
              ko: "※서비스 종료",
              en: "※Service Ended",
            }),
          },
          {
            period: "2019.7 ~ 2019. 9",
            title: i18nData({
              ja: "ハピタスコミックの２次リニューアルプロジェクト（木完）",
              ko: "해피타스 코믹의 2차 리뉴얼 프로젝트 (미완료)",
              en: "Hapitas Comic 2nd Renewal Project (non-completed)",
            }),
          },
        ]}
      />
      <CvContent
        cvDatas={[
          {
            period: "2019.3 ~ 2019. 7",
            title: i18nData({
              ja: "漫画購入決済から「投げ銭・応援決済モデル」への１次リニューアル",
              ko: "만화 구매 결제에서 '투네이션・응원 결제 모델'로의 1차 리뉴얼",
              en: "1st Renewal from Manga Purchase Model to 'Tip & Support Model'",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "リニューアルにより変更されるビジネス・サービス・システムに対する情報を統括し定義",
                    "要件定義、業務フロー、アーキテクチャー再設計など、開発全体の工程をリード",
                    "新しい機能に対する開発やリリースをリード",
                    "決済機能の購入モデルから投げ銭への変更を迅速でトラブルなくユーザーへの提供を達成",
                    "高難易度リニューアルに対して、要件定義から開発まで成功的にリード",
                  ],
                  ko: [
                    "리뉴얼로 변경되는 비즈니스·서비스·시스템에 대한 정보를 종합하고 정의",
                    "요구 사항 정의, 업무 플로우, 아키텍처 재설계 등 전체 개발 과정을 리드",
                    "새로운 기능에 대한 개발과 릴리스를 리드",
                    "결제 기능의 구매 모델에서 투네이션으로의 변경을 신속하고 문제없이 사용자에게 제공",
                    "높은 난이도의 리뉴얼에 대해, 요구 사항 정의부터 개발까지 성공적으로 리드",
                  ],
                  en: [
                    "organize and define specification of system changes on the business, service.",
                    "lead re-design workflow, requirements definition, workflow, and architecture",
                    "lead the development and release of new features",
                    "replacement and making new features as quickly & trouble-free.",
                    "lead the requirements definition and development for a complex renewal",
                  ],
                }),
              },
            ],
          },
          {
            period: "2018.8 ~ 2019. 2",
            title: i18nData({
              ja: "CtoCウェブコミックサービスとして、サービスの正式リリース",
              ko: "CtoC 웹만화 서비스로서, 서비스의 정식 릴리스",
              en: "Official release of the service as a CtoC webcomic service",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "リードエンジニア、プロジェクトリーダーとして、正式リリースのプロジェクトをリード",
                    "販売・購入のためのクレジットカード・ハピタスポイントの複合決済の設計・開発をリード",
                    "プライベートコンテンツデリバリー「漫画購入・閲覧」機能の設計・開発をリード（AWS S3 & Pre-signed Cookie認証）",
                    "その他、多数の機能の設計や開発を担当。オフショア開発ユニットの管理、開発リード",
                    "漫画の原稿のアップロード、ウェブ漫画への変換、コンテンツ審査など、プレリリースのための開発をリード",
                    "漫画投稿から審査段階までの業務フロー定義を主導",
                    "オフショア開発ユニットのメンバー管理",
                  ],
                  ko: [
                    "리드 엔지니어, 프로젝트 리더로서, 정식 릴리스의 프로젝트를 리드",
                    "판매·구매를 위한 신용카드·하피타스 포인트의 복합 결제의 설계·개발을 리드",
                    "프라이빗 콘텐츠 딜리버리 '만화 구매·열람' 기능의 설계·개발을 리드 (AWS S3 & Pre-signed Cookie 인증)",
                    "기타 다수의 기능의 설계 및 개발을 담당. 오프쇼어 개발 유닛의 관리, 개발 리드",
                    "만화 원고의 업로드, 웹 만화로의 변환, 콘텐츠 심사 등, 프리릴리스를 위한 개발을 리드",
                    "만화 제출부터 심사 단계까지의 업무 플로우 정의를 주도",
                    "오프쇼어 개발 유닛의 멤버 관리",
                  ],
                  en: [
                    "lead the official release project as the lead engineer and project leader",
                    "lead the design and development of the combined credit card and Hapitas point payment for sales and purchases",
                    "lead the design and development of the private content delivery 'manga purchase and view' feature (AWS S3 & Pre-signed Cookie authentication)",
                    "responsible for the design and development of various other features. Managed the offshore development unit and lead development",
                    "lead the development for pre-release, including manga manuscript uploads, webcomic conversions, and content reviews",
                    "lead the workflow definition from manga submission to review stage",
                    "manage the members of the offshore development unit",
                  ],
                }),
              },
            ],
          },
          {
            period: "2018. 6 ~ 2018. 8",
            title: i18nData({
              ja: "スタートアッププロジェクト起動 / サービス要件定義と設計をリード",
              ko: "스타트업 프로젝트 시작 / 서비스 요구 사항 정의 및 설계 리드",
              en: "Startup Project Initiation / Leading Service Definition and Design",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "サービスに対する、ユーザーストーリーボード、画面ワイヤーフレーム、機能定義をリード",
                    "サービスにおける、漫画に対するシステム抽象化定義、業務フロー、ステート変化ダイアグラム、エンティティ設計をリード",
                    "漫画、決済、ユーザー、コメント、ユーザーリアクションなどの、サービスのエンティティ関係の設計をリード",
                    "UML, ERDのようなアーキテクトスキルと、ビジネスモデルを抽象化するモデリングスキルを利用し、ウェブ機能、バッチ処理、ミドルウェアソリューション機能などの、全体サービスのアーキテクチャーの設計をリード",
                  ],
                  ko: [
                    "서비스에 대한 사용자 스토리보드, 화면 와이어프레임, 기능 정의 리드",
                    "서비스 내에서 만화에 대한 시스템 추상화 정의, 업무 플로우, 상태 변화 다이어그램, 엔터티 설계를 리드",
                    "만화, 결제, 사용자, 댓글, 사용자 리액션 등의 서비스 엔터티 관계 설계를 리드",
                    "UML, ERD와 같은 아키텍트 스킬과 비즈니스 모델을 추상화하는 모델링 스킬을 활용하여, 웹 기능, 배치 처리, 미들웨어 솔루션 기능 등의 전체 서비스 아키텍처 설계를 리드",
                  ],
                  en: [
                    "lead the user storyboard, screen wireframes, and feature definition for the service",
                    "lead the system abstraction definition for manga within the service, business flow, state change diagram, and entity design",
                    "lead the design of the service's entity relationships for manga, payments, users, comments, user reactions, etc.",
                    "architect skills like UML, ERD, and modeling skills to abstract business models to lead the design of the entire service architecture, including web features, batch processing, and middleware solution functions",
                  ],
                }),
              },
            ],
          },
        ]}
      ></CvContent>
      <CvQuote
        cvQuoteDatas={[
          {
            title: "漫画出版のフロー",
            img: "/img/works/works_ozvision_comics/workflow.png",
          },
          {
            title: "漫画出版シーケンス",
            img: "/img/works/works_ozvision_comics/sequencediagram.png",
          },
          {
            title: "漫画の属性と生命周期",
            img: "/img/works/works_ozvision_comics/statediagram.png",
          },
        ]}
      />
    </CvContainer>
  );
};

export default CV_4;
