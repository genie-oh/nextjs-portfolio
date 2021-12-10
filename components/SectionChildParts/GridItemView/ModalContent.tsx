import { FunctionComponent, MouseEventHandler } from "react";

const ModalContent: FunctionComponent<{
    handlerCloseModal: MouseEventHandler;
}> = ({ handlerCloseModal }) => {
    return (
        <div className="w-full h-full" onClick={handlerCloseModal}>
            ModalContent
        </div>
    );
};

export default ModalContent;
