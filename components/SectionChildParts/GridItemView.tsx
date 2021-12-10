import { MdMoreHoriz } from "react-icons/md";

const GridItemView = () => {
    return (
        <div className="flex flex-col items-center justify-center m-5 md:m-10">
            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {Array(9)
                    .fill(1)
                    .map((item, idx) => {
                        return <div className="h-64 text-center bg-red-300">{idx}</div>;
                    })}
            </div>

            <div className="relative w-full mt-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    <div className="h-10 bg-white rounded-t-2xl"></div>
                    <div className="hidden h-10 bg-white rounded-t-2xl lg:block"></div>
                    <div className="hidden h-10 bg-white rounded-t-2xl lg:block"></div>
                </div>
                <div className="absolute z-50 w-full top-8">
                    <button
                        className="block w-full py-1 -mt-5 text-white bg-gray-700 rounded-full hover:bg-blue-500"
                        onClick={() => {
                            alert(1);
                        }}
                    >
                        <MdMoreHoriz fontSize={32} className="mx-auto" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GridItemView;
