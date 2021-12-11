import { FunctionComponent, MouseEventHandler } from "react";
import { MdClose } from "react-icons/md";

import { I_Article } from "../../../datas/types/I_Article";
import i18nData from "../../../i18n/i18nData";

import { motion } from "framer-motion";
import { variantsRevealFromBotoom } from "../../../motions/variantsRevealFromBottom";

const ModalContent: FunctionComponent<{
    handlerCloseModal: MouseEventHandler;
    articleData: I_Article;
}> = ({ handlerCloseModal, articleData }) => {
    return (
        <div className="w-full h-full overflow-y-auto leading-7 bg-black bg-opacity-70" onClick={handlerCloseModal}>
            <motion.div
                variants={variantsRevealFromBotoom}
                initial="initial"
                animate="animate"
                className="relative w-11/12 min-h-screen mx-auto my-24 bg-white md:w-2/3 2xl:w-1/2 rounded-2xl"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="sticky z-50 flex items-center justify-end w-full top-5">
                    <button
                        className="p-1 text-white bg-gray-500 rounded-full hover:bg-red-700"
                        onClick={handlerCloseModal}
                    >
                        <MdClose fontSize={36} />
                    </button>
                </div>
                <div className="w-auto pb-10 -mt-12 lg:pb-20 rounded-xl">
                    <div
                        className="flex items-end justify-center w-full h-60 lg:h-96 rounded-t-2xl"
                        style={{
                            backgroundImage: `url(${articleData.imgUrl})`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                        }}
                    >
                        <p className="w-full p-1 text-lg text-center text-white bg-black lg:p-5 lg:px-10 lg:text-4xl bg-opacity-80">
                            {i18nData(articleData.title_i18n)}
                        </p>
                    </div>

                    <div className="mb-5 text-center text-white bg-blue-500">
                        <span className="text-sm font-bold">{articleData.date}</span>
                    </div>

                    <div className="flex flex-wrap mx-3 text-white lg:mx-20">
                        {articleData.categories.map((item, idx) => {
                            return (
                                <span key={idx} className="px-2 m-0.5 bg-gray-700 rounded-full">
                                    {item}
                                </span>
                            );
                        })}
                    </div>

                    <div className="mx-3 lg:mx-20">
                        <articleData.moreContentModalComponent />
                    </div>
                    <button
                        className="absolute bottom-0 flex justify-center w-full p-1 text-white bg-gray-500 rounded-b-xl hover:bg-red-700"
                        onClick={handlerCloseModal}
                    >
                        <MdClose fontSize={36} />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ModalContent;
