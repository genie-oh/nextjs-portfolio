import ImageTextCard from "../Parts/ImageTextCard";

import i18nData from "../../i18n/i18nData";
import { dataMySalesPoint } from "../../datas/dataMySalesPoint";

const SalesPoint = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {dataMySalesPoint.map((item, idx) => {
                    return (
                        <ImageTextCard
                            key={idx}
                            imgUrl={item.imgUrl}
                            title={item.title}
                            text={i18nData(item.text_i18n)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SalesPoint;
