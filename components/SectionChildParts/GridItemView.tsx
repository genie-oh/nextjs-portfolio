import { useState } from "react";
import { FunctionComponent } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { I_Article } from "../../datas/types/I_Article";
import Item from "./GridItemView/Item";

const GridItemView: FunctionComponent<{
    articleDatas: I_Article[];
}> = ({ articleDatas }) => {
    const [loadedData, setLoadedData] = useState(articleDatas.slice(0, 3));
    const [showMore, setShowMore] = useState(true);

    const loadNextData = () => {
        setLoadedData((prevData) => {
            prevData = prevData.concat(articleDatas.slice(prevData.length, prevData.length + 3));
            prevData.length === articleDatas.length && setShowMore(false);

            return prevData;
        });
    };

    return (
        <div className="flex flex-col items-center justify-center m-5 md:m-10">
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {loadedData.map((articleData, idx) => {
                    return <Item key={idx} articleData={articleData} />;
                })}
            </div>

            {showMore && (
                <div className="relative w-full mt-10">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                        <div className="h-8 bg-white rounded-t-2xl"></div>
                        <div className="hidden h-8 bg-white rounded-t-2xl lg:block"></div>
                        <div className="hidden h-8 bg-white rounded-t-2xl lg:block"></div>
                    </div>

                    <div className="absolute z-50 w-full top-8">
                        <button
                            className="block w-full py-1 -mt-5 text-white bg-gray-700 rounded-full hover:bg-blue-500"
                            onClick={loadNextData}
                        >
                            <MdMoreHoriz fontSize={32} className="mx-auto" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GridItemView;
