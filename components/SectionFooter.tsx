import React from "react";
import HomeContext from "./Context/HomeContext";

import { BiChevronUp } from "react-icons/bi";

const SectionFooter = () => {
    const homeContext = React.useContext(HomeContext);

    return (
        <section className="bg-gray-900">
            <div className="relative h-full pt-10 pb-5 mx-auto max-w-screen-2xl">
                <button
                    className="absolute flex items-center justify-center w-12 h-12 transform bg-white rounded-full lg:w-16 lg:h-16 right-8 lg:right-16 lg:-top-8 -top-6 hover:bg-red-500"
                    onClick={() => {
                        homeContext.HomeContextFunctions.scrollTo("SEC-TOP");
                    }}
                >
                    <BiChevronUp fontSize={32} />
                </button>
                <p className="pl-10 text-gray-500">Copyright © 2021 All Rights Reserved by genie-oh</p>
            </div>
        </section>
    );
};

export default SectionFooter;
