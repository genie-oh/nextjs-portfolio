import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiJapan, GiSouthKorea } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";

import { dataCarrers } from "../../datas/dataCareers";
import i18nData from "../../i18n/i18nData";

const Careers = () => {
    return (
        <VerticalTimeline className="timeline-padding-force " layout="1-column">
            {dataCarrers.map((item, idx) => {
                const clLgColsGrid = item.imgUrl ? "lg:grid-cols-2" : "";
                const defaultIconStyle = { background: "rgb(139, 92, 246)", color: "#fff" };

                const contentStyle = item.styleSet && item.styleSet.contentStyle ? item.styleSet.contentStyle : null;
                const contentArrowStyle =
                    item.styleSet && item.styleSet.contentArrowStyle ? item.styleSet.contentArrowStyle : null;
                const iconStyle = item.styleSet && item.styleSet.iconStyle ? item.styleSet.iconStyle : defaultIconStyle;

                return (
                    <VerticalTimelineElement
                        key={idx}
                        contentStyle={contentStyle}
                        contentArrowStyle={contentArrowStyle}
                        iconStyle={iconStyle}
                        className="vertical-timeline-element--work"
                        icon={<item.iconComponent />}
                    >
                        <div className="mt-5 ml-5 text-sm text-left">
                            <span className="px-5 py-1 text-white bg-black rounded-full">{item.period}</span>
                        </div>
                        <div className={`grid items-center justify-center grid-cols-1 ${clLgColsGrid}`}>
                            {item.imgUrl && (
                                <div className="relative m-5 overflow-hidden bg-gray-300 shadow-md rounded-2xl">
                                    <img src={item.imgUrl} />
                                    <div className="absolute bottom-0 flex flex-col items-center justify-center w-full px-1 py-2 text-center bg-black bg-opacity-50">
                                        <span className="mb-1 text-sm font-bold text-white lg:text-lg">
                                            {item.imgTitle}
                                        </span>
                                        <span className="text-xs text-white lg:text-sm ">
                                            {i18nData(item.imgText_i18n)}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="m-5">
                                {item.title && (
                                    <h3 className="mb-2 text-2xl font-bold text-purple-500">{item.title}</h3>
                                )}

                                {item.categories && (
                                    <div className="flex flex-wrap py-2 mb-2 border-t-2 border-b-2">
                                        {item.categories.map((category, idx) => {
                                            return (
                                                <span
                                                    key={idx}
                                                    className="px-5 py-1 m-1 text-sm text-white bg-blue-500 rounded-full"
                                                >
                                                    {category}
                                                </span>
                                            );
                                        })}
                                    </div>
                                )}

                                {item.where && (
                                    <div className="flex items-center justify-between my-3">
                                        <a className="flex font-bold text-blue-700" target="blank" href={item.whereUrl}>
                                            <HiOutlineOfficeBuilding fontSize={24} />
                                            <span className="ml-2">{item.where}</span>
                                        </a>

                                        <div className="flex flex-col items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                                            {item.country === "korea" && (
                                                <>
                                                    <span className="text-lg text-blue-600">
                                                        <GiSouthKorea />
                                                    </span>
                                                    <span className="text-xs text-blue-600">Korea</span>
                                                </>
                                            )}
                                            {item.country === "japan" && (
                                                <>
                                                    <span className="text-lg text-green-600">
                                                        <GiJapan />
                                                    </span>
                                                    <span className="text-xs text-green-600">Japan</span>
                                                </>
                                            )}
                                            {item.country === "global" && (
                                                <>
                                                    <span className="text-lg text-purple-600">
                                                        <AiOutlineGlobal />
                                                    </span>
                                                    <span className="text-xs text-purple-600">Global</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <ul className="px-5 list-disc">
                                    {item.textlist_i18n.map((text_i18n, idx) => {
                                        return (
                                            <li key={idx} className="mb-1">
                                                {i18nData(text_i18n)}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default Careers;
