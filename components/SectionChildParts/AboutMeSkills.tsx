const AboutMeSkills = () => {
    return (
        <div className="flex flex-col items-center justify-start m-5 lg:px-10 lg:m-10 lg:flex-1">
            <div className="w-full p-5 mt-10 bg-white rounded-2xl">
                <div className="px-5 py-2 mb-10 -mt-10 text-2xl font-bold text-center bg-yellow-300 rounded-full">
                    Engineering Skills
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {Array(9)
                        .fill(0)
                        .map((item, idx) => {
                            return (
                                <div className="grid items-start grid-cols-3 my-6 md:grid-cols-5">
                                    <div className="w-20 h-20 mx-auto text-purple-600 lg:w-24 lg:h-24">
                                        <div className="w-16 h-16 bg-red-300 rounded-full"></div>
                                    </div>
                                    <div className="col-span-2 pl-2 md:col-span-4 lg:px-8">
                                        <p className="font-bold rounded-full">title</p>
                                        <p className="mb-1 text-xs text-gray-500">interest score : 99</p>
                                        <p className="text-sm whitespace-pre-wrap ">text</p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default AboutMeSkills;
