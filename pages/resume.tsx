import Link from "next/link";
import PageLayout from "../components/Resume/PageLayout";
import Resume1 from "../components/Resume/Contents/Resume/Resume1";

import { languageList } from "../datas/languageList";
import CV1 from "../components/Resume/Contents/CV/CV1";

export default function Home() {
  const print = () => window.print();

  return (
    <div className="text-gray-700 container-fluid">
      <nav className="fixed z-50 flex items-center justify-center h-10 bg-gray-900 resume-nav">
        <Link href="./">
          <button className="md:w-1/4 mx-2 px-5 py-0.5 font-bold bg-white rounded-lg">
            Back to Portfolio
          </button>
        </Link>
        <button
          className="md:w-1/4 mx-2 px-5 py-0.5 font-bold bg-white rounded-lg"
          type="button"
          onClick={print}
        >
          Print Resume
        </button>

        {/* i18n change link */}
        <div className="md:absolute md:right-5 ">
          {languageList.map((item, idx) => {
            return (
              <Link key={idx} href="/resume" locale={item.locale}>
                <span className="mx-2 text-sm text-white transform cursor-pointer hover:scale-125">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="pb-12 resume-top-pad"></div>
      <div className="resume-book">
        <PageLayout label="resume" colorClName="bg-blue-900">
          <Resume1 />
        </PageLayout>
        <PageLayout label="curriculum vitae" colorClName="bg-purple-900">
          <CV1 />
        </PageLayout>
      </div>
    </div>
  );
}
