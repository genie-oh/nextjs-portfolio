import { FunctionComponent } from "react";

import { CgWebsite } from "react-icons/cg";
import { MdOutgoingMail, MdPhoneForwarded } from "react-icons/md";
import { SiWebmoney, SiLinkedin } from "react-icons/si";
import i18nData from "../../../i18n/i18nData";

const LeftSide: FunctionComponent<{
  label: string;
  colorClName: string;
}> = ({ label, colorClName }) => {
  const calculateYearsAgo = (givenDate: Date) => {
    var diff_ms = Date.now() - givenDate.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <div
      className="col-span-3 text-xs bg-gray-200 border-l-4 border-white"
      style={{ padding: "0.5cm 0", height: "31cm" }}
    >
      <div
        className={
          "w-full py-3 pr-5 mb-5 text-right text-white rounded-l-3xl " +
          colorClName
        }
      >
        <p className="p-0 m-0 text-xs italic opacity-60">web engineer's</p>
        <p className="p-0 m-0 text-xl leading-6">{label}</p>
      </div>
      <div className="flex flex-col items-end justify-center w-full px-5 ">
        <div className="w-32 p-1.5 bg-white rounded-xl shadow-md mb-3">
          <img className="w-full rounded-xl" src="/img/resume/pic2.png" />
        </div>

        <div className="w-11/12 my-3 border-t-2 border-gray-300 "></div>
        <div className="text-lg font-bold">
          {i18nData({
            ja: "オー・ヒョンジン",
            ko: "오현진",
            en: "Genie, OH",
          })}
        </div>
        <div className="text-base font-bold">
          {i18nData({
            ja: "(Genie, OH)",
            ko: "(Genie, OH)",
            en: "",
          })}
        </div>
        <div className="text-sm text-gray-500 ">
          + {calculateYearsAgo(new Date(1986, 1, 6))} years old
        </div>

        <div className="w-11/12 my-3 border-t-2 border-gray-300 "></div>
        <div className="text-xl font-bold">Web Engineer</div>
        <div className="mb-2 text-sm text-gray-500">
          + {calculateYearsAgo(new Date(2013, 1, 1))} years
        </div>
        <div className="text-sm">Senior Back-end</div>
        <div className="text-sm">Middle Full-stack</div>

        <div className="w-11/12 my-3 border-t-2 border-gray-300 "></div>
        <div className="mb-3 text-lg font-bold">Portfolio</div>
        <div className="flex items-center justify-center mb-2 text-blue-700">
          <a
            className="block mr-2 italic underline"
            target="_blank"
            href="https://genie-oh.vercel.app"
          >
            genie-oh.vercel.app
          </a>
          <SiWebmoney size="16" />
        </div>

        <div className="w-11/12 my-3 border-t-2 border-gray-300 "></div>
        <div className="mb-3 text-lg font-bold">Blog</div>
        <div className="flex items-center justify-center mb-2 text-blue-700">
          <a
            className="block mr-2 italic text-right underline"
            target="_blank"
            href="https://qiita.com/genie-oh"
          >
            qiita.com/genie-oh <br />
            (Japanese)
          </a>
          <CgWebsite size="16" />
        </div>
        <div className="flex items-center justify-center mb-2 text-blue-700">
          <a
            className="block mr-2 italic text-right underline"
            target="_blank"
            href="https://dev.to/genie_oh"
          >
            dev.to/genie_oh
            <br /> (English)
          </a>
          <CgWebsite size="16" />
        </div>

        <div className="w-11/12 my-3 border-t-2 border-gray-300 "></div>
        <div className="mb-3 text-lg font-bold">Contacts</div>

        <div className="flex items-center justify-center mb-2 text-blue-700">
          <a
            className="block mr-2 italic text-right underline"
            target="_blank"
            href="https://www.linkedin.com/in/genie-oh/"
          >
            linkedin.com
            <br /> /in/genie-oh/
          </a>
          <SiLinkedin size="16" />
        </div>

        {/* <div className="flex items-center justify-center mb-2">
                    <span className="pr-2"></span>
                    <MdOutgoingMail size="20" />
                </div>
                <div className="flex items-center justify-center mb-2">
                    <span className="pr-2"></span>
                    <MdPhoneForwarded size="16" />
                </div> */}

        <div className="w-11/12 my-3 border-t-2 border-gray-300 "></div>
        <div className="mb-3 text-lg font-bold">Bilingual</div>
        <div className="grid items-center justify-center w-full grid-cols-2 mb-2 text-xs">
          <div className="w-full col-span-1 pr-2 text-right border-r-2 border-gray-500">
            Japanese
          </div>
          <div className="w-full col-span-1 pl-1 text-right">
            Higher Business
          </div>
        </div>
        <div className="grid items-center justify-center w-full grid-cols-2 mb-2">
          <div className="w-full col-span-1 pr-2 text-right border-r-2 border-gray-500">
            English
          </div>
          <div className="w-full col-span-1 pl-1 text-right">Beginner</div>
        </div>
        <div className="grid items-center justify-center w-full grid-cols-2 mb-2">
          <div className="col-span-1 pr-2 text-right border-r-2 border-gray-500">
            Korean
          </div>
          <div className="col-span-1 pl-1 text-right">Native</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
