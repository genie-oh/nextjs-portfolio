import { FunctionComponent } from "react";
import CvContainer from "../../CommonParts/CvContainer";
import CvHeader from "../../CommonParts/CvHeader";
import CvContent from "../../CommonParts/CvContent";
import i18nData from "../../../../i18n/i18nData";
import CvQuote from "../../CommonParts/CvQuote";

const CV_3: FunctionComponent<{}> = () => {
  return (
    <CvContainer>
      <CvHeader
        pageNow={4}
        pageAll={6}
        pageTitle="Payment-API Back-end Web Engineer"
        pageTitleSub={i18nData({
          ja: "株式会社DANAL ｜ ペイメントゲイトウェイ・サービス",
          ko: "주식회사 다날 ｜ 결제 게이트웨이 서비스",
          en: "DANAL Corporation ｜ Payment Gateway Service",
        })}
      />
      <CvContent
        cvDatas={[
          {
            period: "2017.3 ~ 2017.4",
            title: i18nData({
              ja: "クレジットカード種別識別・BIN番号照会REST-APIサービスを開発",
              ko: "신용카드 종류 식별 및 BIN 번호 조회 REST-API 서비스 개발",
              en: "Develop Credit Card Identification and BIN Inquiry REST-API Service",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "BIN情報を同期化に対する外部連携仕様定義、および外部調整をリード",
                    "システムの要件定義、アーキテクチャー設計、開発全般をリード",
                  ],
                  ko: [
                    "BIN 정보 동기화를 위한 외부 연계 사양 정의 및 외부 조정 리드",
                    "시스템의 요구 사항 정의, 아키텍처 설계, 전반적인 개발을 리드",
                  ],
                  en: [
                    "lead external collaboration and coordination for BIN information synchronization",
                    "lead in system requirements definition, architecture design, and overall development",
                  ],
                }),
              },
              {
                title: "Skill",
                items: ["Java, Jersey (REST-API framework)"],
              },
            ],
          },
          {
            period: "2016. ~ 2017.",
            title: i18nData({
              ja: "クレジット、金券、ポイント、電子マネーなど多数の決済システムの開発",
              ko: "신용카드, 상품권, 포인트, 전자화폐 등 다양한 결제 시스템 개발",
              en: "Develop various payment services(credit, gift, points, and e-money)",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "多数サービスに対して、複数の機能を開発",
                    "クライアント側の導入のためのシステム仕様とガイドに対する文書化を遂行",
                    "事業部と顧客社に対する外部コミュニケーションをリード",
                  ],
                  ko: [
                    "다수 서비스에 대하여, 다양한 기능 개발",
                    "클라이언트 측의 도입을 위한 시스템 사양 및 가이드에 대한 문서화 수행",
                    "사업부와 고객사에 대한 외부 커뮤니케이션을 리드",
                  ],
                  en: [
                    "develop multiple functions for various services",
                    "make documents of system specifications and guides for client-side implementation",
                    "lead external communication with the business division and customer companies",
                  ],
                }),
              },
              {
                title: "Skill",
                items: ["Java, Spring, JavaScript"],
              },
            ],
          },
        ]}
      ></CvContent>
      <CvHeader
        pageTitle="Middleware / R&D Web Engineer"
        pageTitleSub={i18nData({
          ja: "株式会社DANAL ｜ ペイメントゲイトウェイ・サービス",
          ko: "주식회사 DANAL ｜ 결제 게이트웨이 서비스",
          en: "DANAL Co., Ltd. ｜ Payment Gateway Service",
        })}
      />
      <CvContent
        cvDatas={[
          {
            period: "2014.8 ~ 2015.8",
            title: i18nData({
              ja: "エンドポイントの間の暗号化を遂行するバーチャルキーボードの特許出願と開発",
              ko: "엔드포인트 간의 암호화를 수행하는 가상 키보드의 특허 출원 및 개발",
              en: "Develop with getting patent of end-to-end encryption virtual keyboard",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "エンドポイント暗号化のバーチャルキーボードのソリューションモデル提案",
                    "プロトタイプ開発・提案により開発PJ始動、同時に特許登録PJ始動",
                    "成功的にPJ全体リード、核心機能開発全般を担当、成功的に実サービスへ導入",
                    "年間固定費用の節減(年間約1000万円以上水準)",
                    "保安ソリューションの社内技術力保有実績を達成",
                    "国内外、特許出願完了 / 韓国特許 1020140045932 / PCT国際特許出願",
                  ],
                  ko: [
                    "엔드포인트 암호화 가상 키보드 솔루션 모델 제안",
                    "프로토타입 개발·제안으로 개발 프로젝트 시작, 동시에 특허 등록 프로젝트 시작",
                    "성공적으로 프로젝트 전체 리드, 핵심 기능 개발 전반을 담당, 성공적으로 실 서비스로 도입",
                    "연간 고정 비용 절감(연간 약 1천만 원 이상 수준)",
                    "보안 솔루션의 사내 기술력 보유 실적 달성",
                    "국내외, 특허 출원 완료 / 한국 특허 1020140045932 / PCT 국제 특허 출원",
                  ],
                  en: [
                    "proposal solution concept",
                    "initiation the project of deveopment and patent by prototyping and proposal",
                    "successfully lead the entire project, core architecture, realization",
                    "annual fixed cost savings (annual level of over 10 million yen)",
                    "achieved internal technical capability of security solution",
                    "patent completed domestically and internationally / Korean / PCT",
                  ],
                }),
                links: [
                  {
                    title: "link of patent information of Kipris (korean)",
                    link: "https://kpat.kipris.or.kr/kpat/biblioa.do?method=biblioFrame&start=biblio&searchFg=N&KeyWord=1020140045932&applno=1020140045932&Gubun=1&sCurrPage=1&searchFg=N&expression=1020140045932&openPageId=View01&isMyConcern=N&isMyFolder=N&config=/main/sharePage_KR.jsp,%20className=jeus_jspwork._main._700_sharePage_5fKR_5fjsp,%20jspUri=%27/main/sharePage_KR.jsp",
                  },
                  {
                    title: "link of related news (korean)",
                    link: "http://news.mt.co.kr/mtview.php?no=2015010614283851028",
                  },
                ],
              },
              {
                title: "Responsibility",
                items: i18nData({
                  ja: [
                    "仮想キーボードでの暗号化されたデータやイメージ動的生成処理を遂行する方法を設計",
                    "不正アクセスを防ぎ、認証を行う方法を設計",
                    "サーバーとクライアントの間のデータ交換・暗号化遂行の方法を設計",
                    "API、フロントエンドモジュールを開発し、自社サービスへ適用をリード",
                  ],
                  ko: [
                    "가상 키보드에서 암호화된 데이터와 이미지 동적 생성 처리를 수행하는 방법을 설계",
                    "부정 접근을 방지하고, 인증을 수행하는 방법을 설계",
                    "서버와 클라이언트 간의 데이터 교환 및 암호화 수행의 방법을 설계",
                    "API, 프론트엔드 모듈을 개발하고, 자사 서비스에 적용을 리드",
                  ],
                  en: [
                    "design a method for encryption and dynamic generation of data, keyboard images",
                    "design a method to prevent unauthorized access and perform authentication",
                    "design a method for data exchange and encryption between server and client",
                    "develop API and frontend modules and lead application to in-house services",
                  ],
                }),
              },
              {
                title: "Skill",
                items: i18nData({
                  ja: [
                    "アイディア提案・プロトタイプモデル提案スキル",
                    "UML（核心機能設計、全体アーキテクチャー設計、クラス設計）",
                    "PHP, Java, その他フロントスキル",
                  ],
                  ko: [
                    "아이디어 제안 및 프로토타입 모델 제안 기술",
                    "UML(핵심 기능 설계, 전체 아키텍처 설계, 클래스 설계)",
                    "PHP, Java, 기타 프론트 엔드 기술",
                  ],
                  en: [
                    "Idea proposal and prototype model proposal skills",
                    "UML (core function design, overall architecture design, class design)",
                    "PHP, Java, and other frontend skills",
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
            title: "特許出願",
            img: "/img/works/works_danal_keyboard/kpat_1.jpeg",
            limitMaxHeight: true,
          },
          {
            title: "複数の自社サービスへの統合",
            img: "/img/works/works_danal_keyboard/keyboard1.jpeg",
            limitMaxHeight: true,
          },
        ]}
      />
    </CvContainer>
  );
};

export default CV_3;
