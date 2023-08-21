import i18nData from "../../i18n/i18nData";
import QuoteAttention from "../CommonParts/QuoteAttention";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

const WorksOzvisionComic = () => {
  const data1 = [
    {
      label: i18nData({
        ja: "Year. Month",
        ko: "Year. Month",
        en: "Year. Month",
      }),
      children: <p className="text-gray-500">2019. 12</p>,
    },
    {
      label: i18nData({
        ja: "Archivement",
        ko: "Archivement",
        en: "Archivement",
      }),
      colspan: 3,
      children: i18nData({
        ja: <p className="text-gray-500">サービス終了</p>,
        ko: <p className="text-gray-500">서비스 종료</p>,
        en: <p className="text-gray-500">service closed.</p>,
      }),
    },
    {
      children: <p>2019.7 ~ 2019. 9</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <>
            <LeftBorderList
              title="ハピタスコミックの２次リニュアルプロジェクト（木完）"
              titleBorder={true}
              list={[
                "リニュアルプロジェクトの２つの新しい機能に対する開発をリード",
                "機能1：ハピタスコミック運用陣が、直接イメージレビューを作成し、ポップとしてTOP画面に掲載するための新機能",
                "機能2：他社漫画サービスの出版機能を、ハピタスコミックと提携し統合、多数サービスに同時出版できる新機能",
                "要件定義と業務定義をリード",
                "外部の漫画サービスの出版機能を統合するための外部コミュニケーションを統括",
              ]}
            />
            <p className="text-gray-500">
              ※
              残念ながら、該当プロジェクトは遂行中、サービス終了が決まり、中断となりました。
            </p>
          </>
        ),
        ko: (
          <>
            <LeftBorderList
              title="해피타스 코믹의 2차 리뉴얼 프로젝트 (미완)"
              titleBorder={true}
              list={[
                "리뉴얼 프로젝트에서 새로운 두 가지 기능의 개발을 주도",
                "기능1: 해피타스코믹 관계자가 직접 이미지 리뷰를 작성하여 팝업으로써 TOP화면에 게재하기 위한 신기능",
                "기능2: 타사 만화 서비스의 출판 기능을 해피타스 코믹과 제휴하여 통합. 다수 서비스에서 동시 출판을 위한 신기능",
                "요건정의와 업무정의를 주도",
                "외부 만화 서비스의 출판 기능을 통합하기 위한 외부 커뮤니케이션을 통괄",
              ]}
            />
            <p className="text-gray-500">
              ※ 아쉽게도 해당 프로젝트들은 수행 중, 서비스 종료가 결정되어
              중단되었습니다.
            </p>
          </>
        ),
        en: (
          <>
            <LeftBorderList
              title="2nd renewal projects of hapitas comic. (un-completed)"
              titleBorder={true}
              list={[
                "lead renewal project of development two features of new.",
                "the first feature is hang up pop-reviews by member of hapitas comics team to TOP page.",
                "the second feature is integration of comics publishing feature at the same time with other comics service.",
                "as cheif, define requiremnt and workflow.",
                "lead generalization and external communications to integrating comics publishing feature of other comics service.",
              ]}
            />
            <p className="text-gray-500">
              ※ unfortunately, two projects are dropped because service close is
              decided.
            </p>
          </>
        ),
      }),
    },
    {
      children: <p>2020.3 ~ 2020. 7</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="ハピタスコミックサービスにおいて、販売・購入モデルから、投げ銭決済モデルへのリニュアル（１次リニュアル）"
            titleBorder={true}
            list={[
              "販売・購入モデルから、投げ銭モデルへの移行に必要なコマースシステムの追加開発のリニュアルプロジェクトをリード",
              "リニュアルにより変更されるビジネス・サービス・システムに対する情報を統括し定義",
              "要件定義、業務フロー、アーキテクチャー再設計、エンティティ再設計など、開発全体の工程をリード",
              "新しい機能に対する開発やリリースをリード",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="해피타스 코믹 서비스를 판매-구매 모델에서 후원 결제 모델로의 리뉴얼 (1차 리뉴얼)"
            titleBorder={true}
            list={[
              "판매-구매 결제에서 후원 결제 모델로의 이행에 필요한 커머스 시스템 추가 개발의 리뉴얼 프로젝트를 주도",
              "리뉴얼로 인해 변경되는 비지니스, 서비스, 시스템에 대한 정보를 통괄하여 정의",
              "요건 정의, 업무 흐름, 아키텍쳐 재설계, 엔티티 재설계 등 개발 전체 공정을 주도",
              "새로운 기능에 대한 개발 및 릴리즈를 주도",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="renewal hapitas comic service to social tipping model from sell-buy model. (1st renewal)"
            titleBorder={true}
            list={[
              "lead renewal project of development of commerce system from sell-buy payment to social tipping model.",
              "lead generalization of informations of business, service, system which is changed by renewal.",
              "lead requirement definition, workflow, architecture re-design, entity relations.",
              "lead development and release about new features.",
            ]}
          />
        ),
      }),
    },
    {
      children: <p>2019.11 ~ 2020. 2</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="CtoCウェブコミックサービスとして、サービスの正式リリース"
            titleBorder={true}
            list={[
              "リードエンジニア、プロジェクトリーダーとして、正式リリースのプロジェクトをリード",
              "販売・購入のための、クレジットカード、ハピタスポイントの複合決済の設計・開発をリード",
              "漫画をプライベートコンテンツとして、購入したユーザーに限定しコンテンツを提供する機能の設計・開発をリード",
              "その他、多数の機能の設計や開発を担当",
              "オフショア開発ユニットの管理、開発リード",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="CtoC웹 코믹 서비스로써 정식 서비스 런칭"
            titleBorder={true}
            list={[
              "리드 개발자, 프로젝트 리더로써 공식 출시 릴리즈 프로젝트를 주도",
              "판매-구매를 위한 신용카드와 해피타스 포인트 복합 결제의 설계 및 개발를 주도",
              "만화를 프라이빗 컨텐츠로써 해당 구매자에게 한정하여 컨텐츠를 제공하는 기능의 설계 및 개발를 주도",
              "그외 다수의 기능에 대해 설계 및 개발을 담당",
              "오프쇼어 개발 유닛 관리, 개발 리드",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="official-launched service as CtoC Web Comis Platform."
            titleBorder={true}
            list={[
              "lead offical-launching release project as lead engineer, project leader.",
              "as cheif, design architecture to payments integrated credit-card and hapitas point on the service.",
              "as cheif, design architecture to provide comics as private contents that users buying comics have access permission for comics.",
              "development features likes payments, provide comics contents, etc...",
              "lead offhosre development unit.",
            ]}
          />
        ),
      }),
    },
    {
      children: <p>2018.8 ~ 2019. 11</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="サービスのプレリリース。ユーザーから漫画投稿を集めるための機能をリリース"
            titleBorder={true}
            list={[
              "リードエンジニア、プロジェクトサブリーダーとして、プレリリースのプロジェクトをリード",
              "漫画の原稿のアップロード、ウェブ漫画への変換、コンテンツ審査など、プレリリースのための開発をリード",
              "漫画投稿から審査段階までの業務フロー定義を主導",
              "オフショア開発ユニットのメンバー管理",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="서비스 사전 출시. 유저로부터 만화 투고 모집을 위한 기능을 출시"
            titleBorder={true}
            list={[
              "리드 개발자, 프로젝트 서브리더로써 사전 출시 프로젝트를 주도",
              "만화 원고 업로드, 웹 만화로의 변환, 컨텐츠 심사 등 사전 출시를 위한 개발을 주도",
              "만화 투고에서 심사 단계까지의 업무 흐름 정의를 주도",
              "오프쇼어 개발 유닛에 대한 맴버 관리",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="pre-launched service to accept new comics from users."
            titleBorder={true}
            list={[
              "lead pre-launching release project as lead engineer, project sub-leader.",
              "as cheif, development features for pre-launching release likes uploading comics manuscripts, convert to web comics, confirm for contents.",
              "define workflow for publishing that needs phase from upload to confirm.",
              "manage offshore development unit.",
            ]}
          />
        ),
      }),
    },
    {
      children: <p>2018. 6 ~ 2018. 8</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <LeftBorderList
            title="スタートアッププロジェクト起動。要件定義とアーキテクチャー設計をリード"
            titleBorder={true}
            list={[
              "サービスに対する、ユーザーストーリーボード、画面ワイヤーフレーム、機能定義をリード",
              "サービスにおける、漫画に対するシステム抽象化定義、業務フロー、ステート変化ダイアグラム、エンティティ設計をリード",
              "漫画、決済、ユーザー、コメント、ユーザーリアクションなどの、サービスのエンティティ関係の設計をリード",
              "UML, ERDのようなアーキテクトスキルと、ビジネスモデルを抽象化するモデリングスキルを利用し、ウェブ機能、バッチ処理、ミドルウェアソリューション機能などの、全体サービスのアーキテクチャーの設計をリード",
            ]}
          />
        ),
        ko: (
          <LeftBorderList
            title="스타트업 프로젝트 가동. 요건정의와 아키텍처 설계를 주도"
            titleBorder={true}
            list={[
              "서비스에 대한 유저스토리보드, 화면 와이어프레임 및 기능 정의를 주도",
              "서비스에서 만화에 대한 시스템 추상화 정의, 업무 흐름 및 상태 다이어그램, 엔티티 설계를 주도",
              "만화, 결제, 사용자, 댓글, 사용자 반응 등의 서비스의 엔티티 관계 설계를 주도",
              "UML, ERD와 같은 아키텍트 스킬과 비지니스 모델을 추상화 하는 다양한 모델링 스킬을 사용하여, 웹 기능, 일괄처리 및 미들웨어 솔루션 기능 등의 전체 서비스 아키텍처의 설계를 주도",
            ]}
          />
        ),
        en: (
          <LeftBorderList
            title="start-up to launching new service. lead requirement definition, design architecture."
            titleBorder={true}
            list={[
              "define user-story, wire-frame and features of web pages on the service.",
              "design workflow and state diagram that describes entity of comics on the service. the states are uploaded, converted, waiting confirm, published, un-published, forbid, deleted.",
              "design entity relation on the service likes comics, payments, users, comments, social reaction, etc...",
              "design entire service architecture likes web features, batch processing, and middleware solution using architect skills likes UML, ERD, various modeling skills to abstract business model.",
            ]}
          />
        ),
      }),
    },
  ];

  const data2 = [
    {
      label: "requirement/\narchitecture",
    },
    {
      children: i18nData({
        ja: "原稿アップロード、ウェブ漫画での変換、審査、出版の段階で構成された、ウェブ漫画出版のフローダイアグラム",
        ko: "원고 업로드, 웹 만화로의 변환, 심사, 출판의 단계로 구성된 웹 코믹 출판의 플로 다이어그램",
        en: "flow diagram of publish comics that consist of phase likes upload, convert, judge, publish on.",
      }),
    },
    {
      ccolspan: 2,
      children: i18nData({
        ja: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_comics/workflow.png"
          />
        ),
        ko: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_comics/workflow.png"
          />
        ),
        en: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_comics/workflow.png"
          />
        ),
      }),
    },
    {
      label: "requirement/\narchitecture",
    },
    {
      children: i18nData({
        ja: "サービスにおいて、漫画の属性と生命周期を定義するステートダイアグラム",
        ko: "서비스에서 만화의 속성과 생명 주기를 정의하는 상태 다이어그램",
        en: "state diagram and life cycle of entity of comic on the service",
      }),
    },
    {
      ccolspan: 2,
      children: i18nData({
        ja: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_comics/statediagram.png"
          />
        ),
        ko: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_comics/statediagram.png"
          />
        ),
        en: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_comics/statediagram.png"
          />
        ),
      }),
    },
    {
      label: "service system\narchitecture",
    },
    {
      children: i18nData({
        ja: "ウェブ漫画のsyロイのためのシステムシーケンス",
        ko: "웹 만화 처리를 위한 시스템 시퀀스",
        en: "system sequence of processing web comics",
      }),
    },
    {
      ccolspan: 2,
      children: i18nData({
        ja: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_comics/sequencediagram.png"
          />
        ),
        ko: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_comics/sequencediagram.png"
          />
        ),
        en: (
          <img
            className="w-32 lg:w-80"
            src="/img/works/works_ozvision_comics/sequencediagram.png"
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
                ハピタスコミックというサービスで、私は、サービス開始から終了まで、全体的なサービスとシステムの開発を担当しました。
                <br />
                本サービスは2018年9月にリリースされましたが、残念ながら、2019年12月を最後に、サービスを終了することになりました。
              </p>
              <p>
                本サービスは、ウェブ漫画プラットフォームを提供し、ユーザーからユーザーへの出版とコンテンツ提供を実現します。
                具体的な機能としては、原稿をウェブ漫画に変換、ウェブ上に掲載、ユーザーからユーザーへの販売と購入、
                購入したユーザーにのみ限定しコンテンツを提供するプライベートコンテンツ機能、漫画への投げ銭機能などがあります。
              </p>
              <p>
                本サービスで、私は、スタートアップチームのリードエンジニアとして、多数の業務を遂行しました。
              </p>
            </>
          ),
          ko: (
            <>
              <p>
                해피타스 코믹 서비스에서, 본인은 서비스 시작부터 종료까지
                전체적인 서비스와 시스템을 개발 했습니다.
                <br />
                해당 서비스는 2018년 9월에 출시되었지만, 아쉽게도 2019년 12월을
                끝으로 서비스를 종료하게 되었습니다.
              </p>
              <p>
                해당 서비스는 웹만화 플랫폼을 제공하여 유저에서 유저로 출판 및
                컨텐츠 제공을 실현합니다. 구체적인 기능으로는 원고를 웹만화로
                변환, 웹에 게재, 유저에서 유저로 판매 및 구매 기능, 구매한
                사용자에 한정하여 컨텐츠를 제공하는 프라이빗 컨텐츠 기능, 만화에
                대한 후원 기능 등이 있습니다.
              </p>
              <p>
                해당 서비스에서 저는 스타트업 팀의 리드 엔지니어로써 다수의
                업무를 수행하였습니다.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                About service of Hapitas Comic. I had been developed entire
                service system from start-up to service closed.
                <br />
                The service had been started from 2018. 9, and unfortunately
                closed at 2019. 12.
              </p>
              <p>
                The service provided web comic platform to publish and delivery
                from customer to customer. about specific features, they are
                likes convert image to web comics, publish it to web, sell and
                buy it from customer to customer, provide it as private contents
                that only accessible users who buy it, and social tipping on
                comics.
              </p>
              <p>
                in the service, i had been worked as lead engineer in start-up
                team.
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
              私はチームで、リードエンジニア、プロジェクトリーダー、システムエンジニア、サービス設計者、
              オフショアユニットマネージャー、ミドルウェアソリューション開発エンジニア、バックエンド・
              フロントエンド・一部のAWSスキルを持ったフルスタックエンジニアとして、業務を遂行しました。
            </p>
          ),
          ko: (
            <p>
              본인은 팀에서 리드 개발자, 프로젝트 리더, 시스템(요건정의)
              엔지니어, 서비스 설계자, 오프쇼어 개발 유닛 매니저, 미들웨어
              솔루션 개발자, 백앤드, 프론트앤드, 약간의 AWS스킬을 보유한 풀스텍
              개발자로써 업무를 수행 했습니다.
            </p>
          ),
          en: (
            <p>
              in the team, i had been roled as lead-engineer, project leader,
              system(requirement) engineer, service architect, offshore
              development unit manager, middleware solution developer, and
              full-stack engineer having range of back-end, front-end, a little
              of AWS skills.
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

export default WorksOzvisionComic;

/*

- 소개

하피타스 코믹 개발, 리드 엔지니어로써 요건정의 부터 개발 출시까지 진행

- 역할

리드 엔지니어, 시스템 엔지니어, 오프쇼어 개발 유닛 리더, 

- 주요 업무 / 성과

    - 전자 서적 변환, 출시 시스템 설계, 개발
    - 결제 연계 시스템 총괄 설계 개발
    - 

- 업무 상세 내용
    - 요건 정의
        - 외부 포인트 서비스 도입 개발에[ 대해 요건 정의 총괄.
        - 요건 정의 문서, 무엇을 했는가?
    - 프로젝트 계획 작성
        - 마일스톤 정의, 무엇을 했는가?
    - 서비스 설계
        - 플로다이어그램, 시퀸스 다이어그램, 무엇을 했는가?
    - 업무 설계
        - 발생 업무 정의, 업무 워크플로 정의, 업무 매뉴얼 정의, 무엇을 했는가?
    - 개발부문 대외, 대내 커뮤니케이션 총괄 
        - 외부 연계에서 외부 시스템 사양 확인, 조정, 상대방 요구조건에 대한 대응 총괄
        - 대외 - 대내의 정보 취합, 전달 총괄.
    - 개발 리드
        - 시스템 사양 정의 총괄
        - 개발 기능 정의, 분담 총괄
        - 맴버 개발 서포트, 어드바이저로써 총괄

- 사용 기술

PHP, 
Mysql,
AWS
S3 Signed Cookie


*/
