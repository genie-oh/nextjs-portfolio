import { IoIosSchool } from "react-icons/io";
import i18nData from "../../../../../i18n/i18nData";

const Educations = () => {
  return (
    <>
      <div className="font-bold w-1/2 py-0.5 pl-4 -mt-6 -ml-2 text-white bg-gray-700 rounded-full">
        Educations
      </div>
      <div className="mt-2 mb-3 mr-5 font-xs">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-2 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="flex mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
              <span className="pr-1">
                <IoIosSchool />
              </span>
              University of Dongseo. (past ~ 2012.12, Korea)
            </time>
            <h3 className="text-xs italic font-semibold text-gray-900 underline dark:text-white">
              {i18nData({
                ja: "コンピューター工学・情報ネットワークを４年間専攻",
                ko: "컴퓨터 공학 / 정보네트워크 4년 전공",
                en: "major in computer science, information network.",
              })}
            </h3>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Educations;
