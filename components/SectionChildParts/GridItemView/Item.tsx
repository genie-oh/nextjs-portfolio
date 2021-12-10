import { useState } from "react";
import Modal from "react-modal";

import ModalContent from "./ModalContent";

const Item = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="relative bg-white shadow-lg cursor-pointer rounded-2xl">
            <div className="w-full h-full" onClick={openModal}>
                <div className="relative w-full h-64 overflow-hidden bg-gray-300 rounded-t-2xl">
                    <img src="/img/common/top.svg" className="object-cover w-full h-full" />
                    <p className="absolute bottom-0.5 flex flex-wrap p-1 text-xs text-white max-w-max">category</p>
                </div>
                <div className="px-5 py-1 mt-3 mb-10">
                    <p className="mb-2 text-lg font-bold">title</p>
                    <p className="pb-5 mb-3 text-sm text-gray-500">text</p>
                </div>
                <div className="absolute bottom-0 w-full px-5">
                    <div className="flex items-center justify-between py-3 border-t-2">
                        <p className="text-xs">date</p>
                        <button className="px-5 py-1 text-white bg-blue-500 rounded-full">read more</button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="title"
                ariaHideApp={false}
                className="w-full h-full bg-red-300 bg-opacity-80"
                style={{
                    overlay: {
                        zIndex: 9999,
                        backgroundColor: "transparent",
                    },
                }}
            >
                <ModalContent handlerCloseModal={closeModal} />
            </Modal>
        </div>
    );
};

export default Item;
