import Link from "next/link";

import { languageList } from "../../../datas/languageList";
import { useRouter } from "next/router";
import { MdArrowBack, MdPrint } from "react-icons/md";

export const ResumeNav = () => {
  const router = useRouter();
  const print = () => window.print();

  return (
    <nav className="fixed z-50 overflow-x-scroll bg-gray-900 resume-nav">
      <div
        className="flex items-center justify-center py-2"
        style={{ minWidth: "800px" }}
      >
        <div className="md:absolute left-3">
          <Link href="./">
            <button className="mx-2 py-0.5 text-gray-500 font-bold rounded-lg  hover:text-white">
              <MdArrowBack className="inline" fontSize={20} />
              <span className="pl-1">Back To Portfolio</span>
            </button>
          </Link>
        </div>

        <div>
          <Link href="./resume">
            <button className="mx-2 px-5 py-0.5 font-bold bg-white rounded-lg hover:bg-blue-700 hover:text-white">
              Read Resume
            </button>
          </Link>
          <Link href="./cv">
            <button className="mx-2 px-5 py-0.5 font-bold bg-white rounded-lg hover:bg-purple-700 hover:text-white">
              Read CV
            </button>
          </Link>
          <button
            className="mx-2 px-5 py-0.5 font-bold bg-white rounded-lg hover:bg-green-700 hover:text-white"
            type="button"
            onClick={print}
          >
            <MdPrint className="inline" fontSize={20} />
            <span className="pl-1">Print</span>
          </button>
        </div>

        <div className="md:absolute right-5">
          {languageList.map((item, idx) => {
            return (
              <Link key={idx} href={router.pathname} locale={item.locale}>
                <span className="mx-2 text-sm text-white transform cursor-pointer hover:scale-125">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
