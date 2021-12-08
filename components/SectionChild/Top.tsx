import Link from "next/link";

import i18nData from "../../i18n/i18nData";

import { languageList } from "../../datas/LanguageList";

const Top = () => {
    return (
        <>
            <div className="absolute top-0 left-0 flex items-center justify-end w-full h-10 bg-black lg:h-12 lg:justify-center bg-opacity-10">
                {languageList.map((item, idx) => {
                    return (
                        <Link key={idx} href="./" locale={item.locale}>
                            <span className="mx-5 text-base text-white transform cursor-pointer lg:mx-12 lg:text-xl hover:text-black hover:scale-125">
                                {item.title}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Top;
