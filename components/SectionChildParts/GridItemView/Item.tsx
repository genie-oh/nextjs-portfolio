import React from "react";
import { FunctionComponent, useState } from "react";
import Modal from "react-modal";
import { I_Article } from "../../../datas/types/I_Article";
import i18nData from "../../../i18n/i18nData";

import HomeContext from "../../Context/HomeContext";
import ModalContent from "./ModalContent";

const Item: FunctionComponent<{
    articleData: I_Article;
}> = ({ articleData }) => {
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

    return (
        <div className="relative bg-white shadow-lg cursor-pointer rounded-2xl">
            <div className="w-full h-full" onClick={openModal}>
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
                        <button className="px-5 py-1 text-white bg-blue-500 rounded-full">read more</button>
                    </div>
                </div>
            </div>

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
        </div>
    );
};

export default Item;
