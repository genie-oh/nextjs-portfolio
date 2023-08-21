import i18nData from "../../i18n/i18nData";
import ColumnUpLabel from "./Parts/ColumnUpLabel";
import { Head1 } from "./Parts/Head1";
import LeftBorderList from "./Parts/LeftBorderList";

const WorksDanalWeb = () => {
  const data1 = [
    {
      label: i18nData({
        ja: "キャリア決済ウェブページ",
        ko: "휴대폰 결제 웹페이지",
        en: "mobile-phone payment web",
      }),
      children: <img src="/img/works/works_danal_web/page_thumb1.jpeg" />,
    },
    {
      label: i18nData({
        ja: "顧客社のためのキャリア決済ウェブページ",
        ko: "고객사를 위한 휴대폰 결제 웹페이지",
        en: "mobile-phone payment web\nfor a client",
      }),
      children: <img src="/img/works/works_danal_web/page_thumb2.jpeg" />,
    },
    {
      label: i18nData({
        ja: "タッチスクリーン環境でのキャリア決済ウェブページ",
        ko: "터치스크린 환경의 휴대폰 결제 웹페이지",
        en: "mobile-phone payment\nfor touch-screen",
      }),
      children: <img src="/img/works/works_danal_web/page_thumb3.jpeg" />,
    },
  ];

  const data2 = [
    {
      label: i18nData({
        ja: "Year. Month",
        ko: "Year. Month",
        en: "Year. Month",
      }),
      children: <p>2015.10 ~</p>,
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
          <p>
            <b>Samsung Pay・T-Money提供、キャリア決済</b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>삼성페이 티머니 제공 휴대폰 결제 페이지</b>에서 개발과 기술지원을
            주도
          </p>
        ),
        en: (
          <p>
            <b>The Samsung Pay and T-Money payment pages</b>, i had been led
            development and technical support to that.
          </p>
        ),
      }),
    },
    {
      children: <p>2015.9 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>音楽サービスのLoen社・Melonサービス提供、キャリア決済</b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>로엔 멜론 뮤직 서비스 제공 휴대폰 결제 페이지</b>에서 개발과
            기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>
              The mobile-phone payment pages for Loen Melon which is client
              servicing music online
            </b>
            , i had been led development and technical support to that.
          </p>
        ),
      }),
    },
    {
      children: <p>2015.7 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>LGスマートTV環境においてのキャリア決済</b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>LG스마트TV환경 휴대폰 결제 페이지</b>에서 개발과 기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>The mobile-phone payment pages for LG Smart TV Platforms</b>, i
            had been led development and technical support to that.
          </p>
        ),
      }),
    },
    {
      children: <p>2015.7 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>(リニュアル)全ての顧客社に提供されるキャリア決済ページ</b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>(리뉴얼) 모든 고객사에게 공통으로 제공되는 휴대폰 결제 페이지</b>
            에서 개발과 기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>
              (renewal) The mobile-phone payment pages providing default for all
              clients
            </b>
            , i had been led development and technical support to that.
          </p>
        ),
      }),
    },
    {
      children: <p>2015.5 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>
              (３次リニュアル)トップシェアウェブポータルサービスのNAVERへ提供されるキャリア決済ページ
            </b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>
              (3차리뉴얼) 탑 쉐어 포탈 웹 서비스인 네이버에게 제공되는 휴대폰
              결제 페이지
            </b>
            에서 개발과 기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>
              (3rd renewal) The mobile-phone payment pages for Naver which is
              company having top share on portal web services
            </b>
            , i had been led development and technical support to that.
          </p>
        ),
      }),
    },
    {
      children: <p>2015.3 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>
              オンラインゲームサービス・NHN・HANGAMEへ提供するキャリア決済ページ
            </b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>온라인 게임 서비스 NHN한게임 제공 휴대폰 결제 페이지</b>에서
            개발과 기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>
              The mobile-phone payment pages for HNH Hangame which is company
              servicing games
            </b>
            , i had been led development and technical support to that.
          </p>
        ),
      }),
    },
    {
      children: <p>2015.2 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>
              (２次リニュアル)トップシェアウェブポータルサービスのNAVERへ提供されるキャリア決済ページ
            </b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>
              (2차리뉴얼) 탑 쉐어 포탈 웹 서비스인 네이버에게 제공되는 휴대폰
              결제 페이지
            </b>
            에서 개발과 기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>
              (2rd renewal) The mobile-phone payment pages for Naver which is
              company having top share on portal web services
            </b>
            , i had been led development and technical support to that.
          </p>
        ),
      }),
    },
  ];

  const data3 = [
    {
      label: i18nData({
        ja: "Year. Month",
        ko: "Year. Month",
        en: "Year. Month",
      }),
      children: <p>2014.12 ~</p>,
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
          <p>
            <b>
              トップシェアウェブポータルサービスのNAVERへ提供されるキャリア決済ページ
            </b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>
              탑 쉐어 포탈 웹 서비스인 네이버에게 제공되는 휴대폰 결제 페이지
            </b>
            에서 개발과 기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>
              The mobile-phone payment pages for Naver which is company having
              top share on portal web services
            </b>
            , i had been led development and technical support to that.
          </p>
        ),
      }),
    },
    {
      children: <p>2014.9 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>
              国内外で決済代行サービスを提供するPayletterへ提供するキャリア決済ページ
            </b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>
              국내외 결제 대행 서비스를 제공하는 페이레터 제공 휴대폰 결제
              페이지
            </b>
            에서 개발과 기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>
              The mobile-phone payment pages for Pay-Letter which is client
              servicing payment gateway on global
            </b>
            , i had been led development and technical support to that.
          </p>
        ),
      }),
    },
    {
      children: <p>2014. 7 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>DANALの企業向けSMS発送サービスのバックオフィス</b>,
            開発業務を遂行.
          </p>
        ),
        ko: (
          <p>
            <b>다날 기업형 SMS 서비스의 백오피스</b>, 개발 업무를 수행.
          </p>
        ),
        en: (
          <p>
            <b>Danal SMS Service Backoffice web</b>, i had been developed that.
          </p>
        ),
      }),
    },
    {
      children: <p>2014.5 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>大学志願サービスのJINHAK、UWAYに提供するキャリア決済ページ</b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>대입 서비스를 제공하는 진학사, 유웨이 제공 휴대폰 결제 페이지</b>
            에서 개발과 기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>
              The mobile-phone payment pages for JINHAK, UWAY which are clients
              which services applying for university
            </b>
            , i had been led development and technical support to that.
          </p>
        ),
      }),
    },
    {
      children: <p>2014.3 ~</p>,
    },
    {
      colspan: 3,
      children: i18nData({
        ja: (
          <p>
            <b>
              キオスクプラットフォームのタッチスクリーン環境のキャリア決済ページ
            </b>
            において、開発とテクニカルサポートをリード
          </p>
        ),
        ko: (
          <p>
            <b>키오스크 플랫폼의 터치스크린 환경 휴대폰 결제 페이지</b>에서
            개발과 기술지원을 주도
          </p>
        ),
        en: (
          <p>
            <b>
              The mobile-phone payment pages on touch-screen for Kiosk Platform
            </b>
            , i had been led development and technical support to that.
          </p>
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
                ジュニアウェブエンジニアとして１年間、DANALのウェブページ開発業務を遂行しました。
                <br />
                DANALは、ユーザーやE-COMMERCE、ゲーム、コンテンツ提供サービスなどの業界において、
                さまざまな決済手段を提供するための、決済代行プラットフォームをサービスしており、
                業界１位のシェアを持っています。
              </p>
              <p>
                私は１年間、サービス１チームに配属し、PC、Mobile、SmartTV、Kisokなど多様なプラットフォームにおいての
                キャリア、金券、メンバーシップポイントなどの決済手段を提供できる、さまざまなウェブページ開発を遂行しました。
                <br />
                １年後も、ミドルウェアソリューション開発と提案者として業務を遂行しながら、
                該当業務もまた、平行で遂行し、さまざまなウェブページを引き続き開発しました。
              </p>
            </>
          ),
          ko: (
            <>
              <p>
                주니어 웹개발자로써 1년간 주식회사 다날에서 웹페이지 개발 업무를
                수행하였습니다.
                <br />
                다날은 사용자 또는 전자상거래, 게임, 콘텐츠 제공업체 등과 같은
                업계에 다양한 결제 수단을 제공하기 위한 결제 게이트웨이 플랫폼을
                서비스 하고 있으며, 업계 1위 점유율을 차지하고 있습니다.
              </p>
              <p>
                본인은 1년간 서비스1팀을 배정 받아 PC, Mobile, Samrt TV, Kiosk등
                다양한 플랫폼에서 휴대폰, 상품권, 맴버쉽포인트 등의 결제 수단을
                제공할 수 있는 다양한 웹페이지 개발을 진행 하였습니다.
                <br />
                또한 고객사 기술지원 담당으로써, 외부 기술 지원에 있어 다양한
                사례에 대해 외부 커뮤니케이션을 수행 하였습니다.
              </p>
              <p>
                1년 후에도, 미들웨서 솔루션 개발 및 제안자로써의 업무를
                수행하며, 해당 업무 병행을 통해 다양한 웹페이지를 지속적으로
                개발하였습니다.
              </p>
            </>
          ),
          en: (
            <>
              <p>
                as junior web engineer, I had been worked about development of
                webpages in Danal, inc. for first 1 year.
                <br />
                the company is servicing payment gateway platform to provide
                various payment methods to users or other companies likes
                e-commerce, game, contents provider, etc having first share on
                the field.
              </p>
              <p>
                for 1 year, i had been assigned general service team and carried
                out various development of web page for users to provide payment
                methods likes mobile-phone, gift card, membership card, etc on
                platforms of PC, Mobile, Smart TV, Kiosk, etc.
                <br />
                additionally, as technical supporter for clients, i had been
                carrid out external communication for various cases that our
                support is required by clients.
              </p>
              <p>
                after 1 year, i had been developed various web pages
                continuously as web engineer serving as middleware solution
                engineer and proposer.
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
            <p>ウェブエンジニア、テクニカルサポートの枠割りを遂行しました。</p>
          ),
          ko: <p>웹개발자, 기술지원 담당을 수행 하였습니다.</p>,
          en: (
            <p>
              in the team, i had been roled as web engineer, technical
              supporter.
            </p>
          ),
        })}
      </div>

      <Head1>
        {i18nData({
          ja: "主な成果 (2015.)",
          ko: "주요 성과 (2015.)",
          en: "Key Achievements (2015.)",
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
          ja: "主な成果 (2014.)",
          ko: "주요 성과 (2014.)",
          en: "Key Achievements (2014.)",
        })}
      </Head1>

      <div className="grid items-center justify-center grid-cols-4 gap-1">
        {data3.map((item, idx) => {
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
          PHP(For Web Service), JSP, ASP NET, ASP(For Clients to integrating our
          services.)
        </p>
      </div>
    </div>
  );
};

export default WorksDanalWeb;
