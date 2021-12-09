import dynamic from "next/dynamic";
import i18nData from "../../../i18n/i18nData";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
    ssr: false,
});

const DistributionBarChart = () => {
    return (
        <div className="flex w-full h-10 mb-2">
            <a
                className="flex items-center justify-start h-full pl-1 overflow-hidden text-xs text-white whitespace-pre-wrap bg-green-500 md:pl-5 rounded-l-xl"
                style={{ width: "40%" }}
                data-tip="React-tooltip"
                data-for="rd-tooltip-1"
            >
                TEST TITLE
            </a>
            <ReactTooltip id="rd-tooltip-1" className="text-center opacity-100" place="bottom" type="dark">
                <div className="mx-1 border-b-4 border-green-500">TEST TITLE</div>
                <div className="grid grid-cols-2 text-xs text-black whitespace-pre-wrap">
                    <div className="p-2 m-1 font-extrabold text-white bg-green-500">
                        <div>1</div>
                        <div>subtheme</div>
                    </div>
                    <div className="p-2 m-1 font-extrabold text-white bg-green-500">
                        <div>2</div>
                        <div>subtheme</div>
                    </div>
                </div>
            </ReactTooltip>
        </div>
    );
};

export default DistributionBarChart;
