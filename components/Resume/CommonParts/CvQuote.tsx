import { FunctionComponent } from "react";
import i18nData from "../../../i18n/i18nData";

type CvQuoteData = {
  title: string;
  img: string;
  limitMaxHeight?: boolean;
};

const CvQuote: FunctionComponent<{
  cvQuoteDatas: CvQuoteData[];
}> = ({ cvQuoteDatas }) => {
  return (
    <ol className="relative text-xs border-l border-gray-200 dark:border-gray-700">
      <li className="pb-2 ml-4">
        <div className="pt-3 mb-2 mr-5">
          <div className="text-sm font-bold text-purple-900">
            {i18nData({
              ja: "成果に対する詳細結果物の一部を引用",
              ko: "성과에 대한 상세결과물의 일부를 인용",
              en: "Quoting a part of the output about achievements",
            })}
          </div>
          <div className="text-gray-500">
            {i18nData({
              ja: "※ 以下の画像は、理解を補助するための仮のものです。",
              ko: "※ 이하의 이미지는 이해를 돕기 위한 가상의 이미지입니다.",
              en: "※ The following image is a temporary one, provided to aid inunderstanding.",
            })}
          </div>
        </div>

        <div
          className={(() => {
            switch (cvQuoteDatas.length) {
              case 1:
                return "grid items-center justify-center gap-1 mr-5 grid-cols-1 w-1/3";
              case 2:
                return "grid items-center justify-center gap-1 mr-5 grid-cols-2 w-2/3";
              default:
                return "grid items-center justify-center gap-1 mr-5 grid-cols-3";
            }
          })()}
        >
          {cvQuoteDatas.map((data) => {
            return (
              <>
                <div className="flex items-center justify-center w-full h-full m-2 whitespace-pre-wrap bg-gray-100 rounded-xl">
                  {data.title}
                </div>
              </>
            );
          })}

          {cvQuoteDatas.map((data) => {
            return (
              <>
                <div className="flex items-center justify-center w-full h-full mx-2 bg-gray-100 rounded-xl">
                  <img
                    className={
                      "m-2 overflow-hidden rounded-lg " +
                      (data.limitMaxHeight ? "max-h-28" : "")
                    }
                    src={data.img}
                  />
                </div>
              </>
            );
          })}
        </div>
      </li>
    </ol>
  );
};

export default CvQuote;
