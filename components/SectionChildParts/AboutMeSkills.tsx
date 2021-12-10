import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import i18nData from "../../i18n/i18nData";
import { dataEngineeringSkills } from "../../datas/dataEngineeringSkills";

const AboutMeSkills = () => {
    return (
        <div className="flex flex-col items-center justify-start m-5 lg:px-10 lg:m-10 lg:flex-1">
            <div className="w-full p-5 mt-10 bg-white rounded-2xl">
                <div className="px-5 py-2 mb-10 -mt-10 text-2xl font-bold text-center bg-yellow-300 rounded-full">
                    Engineering Skills
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {dataEngineeringSkills.map((item, idx) => {
                        return (
                            <div key={idx} className="grid items-start grid-cols-3 my-6 md:grid-cols-5">
                                <div className="w-20 h-20 mx-auto text-purple-600 lg:w-24 lg:h-24">
                                    <CircularProgressbarWithChildren
                                        value={item.percent}
                                        strokeWidth={10}
                                        background
                                        styles={buildStyles({
                                            pathColor: "rgba(124, 58, 232, 1)",
                                            backgroundColor: "rgba(255,255,255,1)",
                                        })}
                                    >
                                        <item.iconComponent className="mb-1 text-4xl text-purple-600" />
                                        <span className="text-xs">{item.percent}</span>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col col-span-2 pl-2 md:col-span-4 lg:px-8">
                                    <span className="mb-0.5 font-bold rounded-full">{i18nData(item.title_i18n)}</span>
                                    <span className="mb-2 text-xs text-gray-500">interest score : {item.percent}</span>
                                    <span className="text-sm whitespace-pre-wrap ">{i18nData(item.text_i18n)}</span>
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
