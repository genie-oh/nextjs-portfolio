import { FunctionComponent } from "react";
import CvContainer from "../../CommonParts/CvContainer";
import CvHeader from "../../CommonParts/CvHeader";
import CvContent from "../../CommonParts/CvContent";
import i18nData from "../../../../i18n/i18nData";
import CvQuote from "../../CommonParts/CvQuote";

const CV_2: FunctionComponent<{}> = () => {
  return (
    <CvContainer>
      <CvHeader
        pageNow={5}
        pageAll={6}
        pageTitle="Middleware / R&D Engineer"
        pageTitleSub={i18nData({
          ja: "株式会社DANAL ｜ ペイメントゲイトウェイ・サービス",
          ko: "주식회사 DANAL | 결제 게이트웨이 서비스",
          en: "DANAL Corporation | Payment Gateway Service",
        })}
      />
      <CvContent
        cvDatas={[
          {
            period: "2014.1 ~ 2014.5",
            title: i18nData({
              ja: "CAPTCHAソリューション開発\n> 動的イメージ生成・音声生成エンジン開発",
              ko: "CAPTCHA 솔루션 개발\n> 동적 이미지 생성 및 음성 생성 엔진 개발",
              en: "CAPTCHA Solution Development\n> Dynamic Image and Voice Generation Engine Development",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "自社環境に合わせた、CAPTCHAソリューションモデル提案",
                    "イメージ動的生成エンジンモデルプロトタイプ開発・提案(グラフィックライブラリ非依存)",
                    "サービスへの統合のためのサーバーAPI、およびクライアントモジュールの開発",
                    "成功的にPJ全体リード、核心機能開発全般を担当、成功的に実サービスへ導入",
                    "年間固定費用の節減(年間約４００万円以上水準)",
                    "自社サービスへの統合をリード",
                  ],
                  ko: [
                    "자사 환경에 맞춘 CAPTCHA 솔루션 모델 제안",
                    "이미지 동적 생성 엔진 모델 프로토타입 개발 및 제안 (그래픽 라이브러리 비의존)",
                    "서비스 통합을 위한 서버 API 및 클라이언트 모듈 개발",
                    "성공적으로 PJ 전체 리드, 핵심 기능 개발 전반을 담당, 성공적으로 실 서비스로 도입",
                    "연간 고정 비용 절감 (연간 약 400만 엔 이상 수준)",
                    "자사 서비스와의 통합을 리드",
                  ],
                  en: [
                    "proposal a CAPTCHA solution model tailored to our company's environment",
                    "develop and Proposal the prototype for a dynamic image generation engine (independent of graphic libraries)",
                    "develop server APIs and client modules for integration into the service",
                    "successfully lead the project, handled all core feature making, and realization",
                    "reduced annual fixed costs (at a level of more than 4 million yen per year)",
                    "lead the integration into our company's services",
                  ],
                }),
              },
              {
                title: "Responsibility",
                items: i18nData({
                  ja: [
                    "CAPTCHA文字に対する、on-demandのイメージ生成機能の設計、および開発",
                    "CAPTCHA文字に対する、on-demandの音声生成機能の設計、および開発",
                    "システムから生成されたデータとユーザーが入力したデータの間のバリデーション機能開発",
                  ],
                  ko: [
                    "CAPTCHA 문자에 대한 on-demand 이미지 생성 기능의 설계 및 개발",
                    "CAPTCHA 문자에 대한 on-demand 음성 생성 기능의 설계 및 개발",
                    "시스템에서 생성된 데이터와 사용자가 입력한 데이터 간의 유효성 검사 기능 개발",
                  ],
                  en: [
                    "design and develop on-demand image generation functionality for CAPTCHA",
                    "design and develop on-demand voice generation functionality for CAPTCHA",
                    "develop validation between data generated by the system and data of the user",
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
                    "아이디어 제안 및 프로토타입 모델 제안 능력",
                    "UML (핵심 기능 설계, 전체 아키텍처 설계, 클래스 설계)",
                    "PHP, Java, 기타 프론트엔드 기술",
                  ],
                  en: [
                    "Skill in proposing ideas and prototype models",
                    "UML (Core functionality design, overall architecture design, class design)",
                    "PHP, Java, and other front-end skills",
                  ],
                }),
              },
            ],
          },
        ]}
      ></CvContent>
      <div className="-mt-2 -mb-8 origin-top-left transform scale-90">
        <CvQuote
          cvQuoteDatas={[
            {
              title: i18nData({
                ja: "DANAL本人認証サービスへのモジュール統合",
                ko: "DANAL 본인 인증 서비스에 모듈 통합",
                en: "module integration into DANAL identity verification service",
              }),
              img: "/img/works/works_danal_captcha/captcha_1.jpeg",
            },
            {
              title: i18nData({
                ja: "キャプチャ文字に対する、on-demandのイメージ生成機能の設計、および開発",
                ko: "캡챠 문자에 대한 온디맨드 이미지 생성 기능 설계 및 개발",
                en: "design and develop on-demand image generation for CAPTCHA characters",
              }),
              img: "/img/works/works_danal_captcha/captcha_2.jpeg",
            },
            {
              title: i18nData({
                ja: "キャプチャ文字に対する、on-demandの音声生成機能の設計、および開発",
                ko: "캡챠 문자에 대한 온디맨드 음성 생성 기능 설계 및 개발",
                en: "design and develop on-demand voice generation for CAPTCHA characters",
              }),
              img: "/img/works/works_danal_captcha/captcha_3.jpeg",
            },
          ]}
        />
      </div>

      <CvHeader
        pageTitle="Payment-UI Web Engineer"
        pageTitleSub={i18nData({
          ja: "株式会社DANAL ｜ ペイメントゲイトウェイ・サービス",
          ko: "주식회사 다날 ｜ 결제 게이트웨이 서비스",
          en: "DANAL Corporation ｜ Payment Gateway Services",
        })}
      />
      <CvContent
        cvDatas={[
          {
            period: "2013 ~ 2015",
            title: i18nData({
              ja: "PC, Mobile, SmartTV、キオスク環境などの決済のウェブページ開発",
              ko: "PC, 모바일, 스마트TV, 키오스크 환경 등의 결제 웹 페이지 개발",
              en: "Develop payment web pages for PC, Mobile, SmartTV, Kiosk, etc.",
            }),
            body: [
              {
                title: "Achivement",
                items: i18nData({
                  ja: [
                    "Samsung Pay・T-Moneyキャリア決済において、開発とテクニカルサポートをリード",
                    "LGスマートTV環境においてのキャリア決済において、開発とテクニカルサポートをリード",
                    "トップシェアウェブポータルサービスのNAVERへ提供されるキャリア決済ページにおいて、開発とテクニカルサポートをリード",
                    "キオスクプラットフォームのタッチスクリーン環境のキャリア決済ページにおいて、開発とテクニカルサポートをリード",
                    "その他、決済ページ開発遂行多数（約20サービス以上）",
                  ],
                  ko: [
                    "Samsung Pay·T-Money 통신사 결제에서 개발 및 테크니컬 지원을 리드",
                    "LG 스마트TV 환경에서의 통신사 결제에서 개발 및 테크니컬 지원을 리드",
                    "톱 시어 웹 포털 서비스인 NAVER에 제공되는 통신사 결제 페이지에서 개발 및 테크니컬 지원을 리드",
                    "키오스크 플랫폼의 터치 스크린 환경의 통신사 결제 페이지에서 개발 및 테크니컬 지원을 리드",
                    "기타 결제 페이지 개발 수행 다수 (약 20 서비스 이상)",
                  ],
                  en: [
                    "lead development for Samsung Pay and T-Money carrier payments.",
                    "lead development for carrier payments in LG SmartTV environment.",
                    "lead development for carrier payment pages provided to top web portal service NAVER.",
                    "lead development for carrier payment pages in kiosk touchscreen platform.",
                    "develop Numerous payment page (over 20 services).",
                  ],
                }),
              },
              {
                title: "Skill",
                items: ["PHP, JavaScript, HTML, CSS"],
              },
            ],
          },
        ]}
      ></CvContent>
    </CvContainer>
  );
};

export default CV_2;
