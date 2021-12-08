const SalesPoint = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {Array(4)
                    .fill(0)
                    .map((v, idx) => {
                        return (
                            <div className="flex flex-col p-5 m-5 text-center whitespace-pre-wrap bg-yellow-100 shadow rounded-2xl">
                                <div className="h-48 mb-5 border-b-2 border-gray-200 ">
                                    <img className="h-full mx-auto " src="/img/sales_point/architect.svg" />
                                </div>
                                <div className="w-full mb-3 text-xl font-bold text-pink-500">title{idx}</div>
                                <div className="w-full text-sm">text{idx}</div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default SalesPoint;
