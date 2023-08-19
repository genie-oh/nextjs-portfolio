import dynamic from "next/dynamic";
import i18nData from "../../../i18n/i18nData";

import { dataStrengthSignature } from "../../../datas/dataStrengthSignature";

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

const Signature = () => {
  return (
    <div className="flex flex-wrap items-center justify-center pb-2 mb-5 border-b-2">
      {dataStrengthSignature.map((item, idx) => {
        const toolbarId = `rd-tooltip-signature-${idx}`;

        return (
          <div key={idx}>
            <a
              className={`m-1 block p-2 rounded-xl text-white bg-${item.colorType}-500 `}
              data-tip="React-tooltip"
              data-for={toolbarId}
            >
              {i18nData(item.name_i18n)}
            </a>
            <ReactTooltip
              id={toolbarId}
              className="w-52"
              place="bottom"
              type="dark"
              effect="solid"
            >
              <span>{i18nData(item.toolTopText_i18n)}</span>
            </ReactTooltip>
          </div>
        );
      })}
    </div>
  );
};

export default Signature;
