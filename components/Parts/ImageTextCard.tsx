import { FunctionComponent } from "react";

const ImageTextCard: FunctionComponent<{
    imgUrl: string;
    title: string;
    text: string;
}> = ({ imgUrl, title, text }) => {
    return (
        <div className="flex flex-col p-5 m-5 text-center whitespace-pre-wrap bg-yellow-100 shadow rounded-2xl">
            <div className="h-48 mb-5 border-b-2 border-gray-200 ">
                <img className="h-full mx-auto " src={imgUrl} />
            </div>
            <div className="w-full mb-3 text-xl font-bold text-pink-500">{title}</div>
            <div className="w-full text-sm">{text}</div>
        </div>
    );
};

export default ImageTextCard;
