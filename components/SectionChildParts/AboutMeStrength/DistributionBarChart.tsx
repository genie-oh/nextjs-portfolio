import dynamic from "next/dynamic";
import i18nData from "../../../i18n/i18nData";

import { dataStrengthDistribution } from "../../../datas/dataStrengthDistribution";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false,
});

const DistributionBarChart = () => {
    return (
        <div className="flex w-full h-10 mb-2 overflow-hidden rounded-lg">
            {dataStrengthDistribution.map((item, idx) => {
                const toolbarId = `rd-tooltip-${idx}`;

                return (
                    <div
                        key={idx}
                        className={`bg-${item.colorType}-500 flex items-center justify-start h-full pl-1 overflow-hidden text-xs text-white whitespace-pre-wra md:pl-5`}
                        style={{ width: `${item.percent}%` }}
                    >
                        <a className="w-full whitespace-pre-wrap" data-tip="React-tooltip" data-for={toolbarId}>
                            {i18nData(item.title_i18n)}
                        </a>
                        <ReactTooltip id={toolbarId} className="text-center opacity-100" place="bottom" type="dark">
                            <div className={`pb-1 mx-1 border-b-4 border-${item.colorType}-500`}>
                                {i18nData(item.title_i18n)}
                            </div>
                            <div className="grid grid-cols-2 text-xs text-black whitespace-pre-wrap">
                                {item.subTheme.map((subItem, subIdx) => {
                                    const colorLevel = subItem.no <= 10 ? "500" : "100";
                                    const textClass = subItem.no <= 10 ? "font-bold text-white" : "text-gray-700";

                                    return (
                                        <div
                                            key={`${idx}-${subIdx}`}
                                            className={`w-24 flex flex-col items-center justify-center p-2 m-1 bg-${item.colorType}-${colorLevel} ${textClass}`}
                                        >
                                            <span>{subItem.no}</span>
                                            <span className="break-word">{i18nData(subItem.text_i18n)}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </ReactTooltip>
                    </div>
                );
            })}
        </div>
    );
};

export default DistributionBarChart;
