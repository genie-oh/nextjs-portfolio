import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiJapan, GiSouthKorea } from "react-icons/gi";

const Careers = () => {
    return (
        <VerticalTimeline className="timeline-padding-force " layout="1-column">
            {Array(8)
                .fill(1)
                .map((item, idx) => {
                    return (
                        <VerticalTimelineElement
                            key={idx}
                            className="vertical-timeline-element--work"
                            icon={<HiOutlineOfficeBuilding />}
                        >
                            <div className="mt-5 ml-5 text-sm text-left">
                                <span className="px-5 py-1 text-white bg-black rounded-full">2011.11</span>
                            </div>
                            <div className={"grid items-center justify-center grid-cols-1 lg:grid-cols-2"}>
                                <div className="relative m-5 overflow-hidden bg-gray-300 shadow-md rounded-2xl">
                                    <img src="/img/common/top.svg" />
                                    <div className="absolute bottom-0 flex flex-col items-center justify-center w-full px-1 py-2 text-center bg-black bg-opacity-50">
                                        <span className="mb-1 text-sm font-bold text-white lg:text-lg">
                                            image title
                                        </span>
                                        <span className="text-xs text-white lg:text-sm ">image description</span>
                                    </div>
                                </div>

                                <div className="m-5">
                                    <h3 className="mb-2 text-2xl font-bold text-purple-500">title</h3>

                                    <div className="flex flex-wrap py-2 mb-2 border-t-2 border-b-2">categories</div>

                                    <div className="flex items-center justify-between my-3">
                                        <a className="flex font-bold text-blue-700" target="blank" href={item.whereUrl}>
                                            <HiOutlineOfficeBuilding fontSize={24} />
                                            <span className="ml-2">{item.where}</span>
                                        </a>

                                        <div className="flex flex-col items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                                            <span className="text-lg text-blue-600">
                                                <GiSouthKorea />
                                            </span>
                                            <span className="text-xs text-blue-600">Korea</span>
                                        </div>
                                    </div>

                                    <ul className="px-5 list-disc">
                                        <li className="mb-1">list1</li>
                                        <li className="mb-1">list2</li>
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
