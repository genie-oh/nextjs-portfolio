import Link from "next/link";
import { useRouter } from "next/router";

import i18nData from "../../i18n/i18nData";

import { languageList } from "../../datas/languageList";

const Top = () => {
  const router = useRouter();

  return (
    <>
      {/* i18n change link */}
      <div className="absolute top-0 left-0 z-50 flex items-center justify-end w-full h-10 bg-black bg-opacity-50 lg:h-12 lg:justify-center">
        {languageList.map((item, idx) => {
          return (
            <Link key={idx} href="./" locale={item.locale}>
              <span className="mx-5 text-base text-white transform cursor-pointer lg:mx-12 lg:text-xl hover:text-black hover:scale-110">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>

      {/* top contents */}
      <div className="relative flex flex-col justify-start h-full pt-20 text-center xl:pt-30 xl:pl-10 xl:text-left xl:justify-center">
        <div className="z-10">
          <h1 className="mb-3 text-2xl font-bold xl:text-4xl xl:mb-5">
            No Pain. No Gain. <br /> Well Service & Application Architecture
          </h1>
          <h2 className="mb-3 text-xl font-semibold xl:text-2xl xl:mb-5">
            This is Portfolio of a web engineer
          </h2>
          <p className="px-10 mb-4 text-sm whitespace-pre-wrap xl:px-0 xl:text-lg xl:mb-4">
            {i18nData({
              ja: "こんにちは！私、Genie. OHと申します。\nシニア・バックエンドエンジニア・ミドルフルスタックエンジニアとして\nサービスアーキテクチャーに強い興味を持っております。",
              ko: "반갑습니다! 저는 Genie. OH라고 합니다.\n시니어 백엔드 엔지니어 및 미들 풀스텍 엔지니어로써\n서비스 아키텍처에 큰 관심을 가지고 있습니다.",
              en: "Hello, I’m Genie, OH.\nI’m a senior back-end web engineer and middle full-stack engineer\nhaving interest of service architecture.",
            })}
          </p>
        </div>

        <div className="absolute top-0 z-0 flex items-end justify-center w-full h-screen xl:left-0 xl:justify-end">
          {/* <img className="xl:my-32 h-1/2 xl:h-4/6" src="/img/common/top.svg" /> */}
          <img
            className="mb-10 h-1/2 md:h-2/3 xl:mb-48 xl:h-5/6"
            src="/img/top.webp"
          />
        </div>

        <div className="absolute right-0 z-50 w-16 p-2 text-center bg-white bottom-5 xl:relative xl:mt-20 rounded-l-2xl xl:bg-opacity-100 xl:w-72 xl:rounded-2xl">
          <div className="flex flex-col items-center justify-center mx-auto mb-2 xl:flex-row">
            <img
              className="w-6 mx-2 my-1 xl:w-8"
              src="/img/common/logo_ts.svg"
            />
            <img
              className="w-6 mx-2 my-1 xl:w-8"
              src="/img/common/logo_react.svg"
            />
            <img
              className="w-6 mx-2 my-1 xl:w-8"
              src="/img/common/logo_nextjs.svg"
            />
            <img
              className="w-6 mx-2 my-1 xl:w-8"
              src="/img/common/logo_tailwind.svg"
            />
          </div>
          <p className="text-sm font-bold">
            <span className="hidden xl:inline">This portfolio has been</span>{" "}
            made using
          </p>
        </div>
      </div>
    </>
  );
};

export default Top;
