import React from "react";
import { FunctionComponent, useState, useEffect } from "react";
import Modal from "react-modal";
import { I_Article } from "../../../datas/types/I_Article";
import i18nData from "../../../i18n/i18nData";

import HomeContext from "../../Context/HomeContext";
import ModalContent from "./ModalContent";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { variantsRevealFromBotoom } from "../../../motions/variantsRevealFromBottom";

const Item: FunctionComponent<{
    articleData: I_Article;
}> = ({ articleData }) => {
    //-- motion prepare
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("animate");
        }
    }, [controls, inView]);

    //-- modal control prepare
    const homeContext = React.useContext(HomeContext);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
        homeContext.HomeContextFunctions.toggleBlur(true);
        homeContext.HomeContextFunctions.toggleOverFlowHiddenOrAutoOnBody(true);
    }

    function closeModal() {
        setIsOpen(false);
        homeContext.HomeContextFunctions.toggleBlur(false);
        homeContext.HomeContextFunctions.toggleOverFlowHiddenOrAutoOnBody(false);
    }

    function openUrl() {
        window.open(articleData.moreContentUrl, "_blank");
    }

    let handlerOnClick = null;
    if (articleData.moreContentType === "modal") {
        handlerOnClick = openModal;
    } else if (articleData.moreContentType === "url") {
        handlerOnClick = openUrl;
    }

    return (
        <motion.div
            ref={ref}
            variants={variantsRevealFromBotoom}
            initial="initial"
            animate={controls}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white shadow-lg cursor-pointer rounded-2xl"
        >
            <div className="w-full h-full" onClick={handlerOnClick}>
                <div className="relative w-full h-64 overflow-hidden bg-gray-300 rounded-t-2xl">
                    <img src={articleData.imgUrl} className="object-cover w-full h-full" />
                    <p className="absolute bottom-0.5 flex flex-wrap p-1 text-xs text-white max-w-max">
                        {articleData.categories.map((item, idx) => {
                            return (
                                <span key={idx} className="px-2 m-0.5 bg-gray-700 rounded-full">
                                    {item}
                                </span>
                            );
                        })}
                    </p>
                </div>
                <div className="px-5 py-1 mt-3 mb-10">
                    <p className="mb-2 text-lg font-bold">{i18nData(articleData.title_i18n)}</p>
                    <p className="pb-5 mb-3 text-sm text-gray-500">{i18nData(articleData.text_i18n)}</p>
                </div>
                <div className="absolute bottom-0 w-full px-5">
                    <div className="flex items-center justify-between py-3 border-t-2">
                        <p className="text-xs">{articleData.date}</p>
                        <button className="px-5 py-1 text-white bg-blue-500 rounded-full">
                            {articleData.moreContentType === "modal" && "read more"}
                            {articleData.moreContentType === "url" && "open url"}
                        </button>
                    </div>
                </div>
            </div>

            {articleData.moreContentType === "modal" && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel={i18nData(articleData.title_i18n)}
                    ariaHideApp={false}
                    className="w-full h-full"
                    style={{
                        overlay: {
                            zIndex: 9999,
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <ModalContent handlerCloseModal={closeModal} articleData={articleData} />
                </Modal>
            )}
        </motion.div>
    );
};

export default Item;
