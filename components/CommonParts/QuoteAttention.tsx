import { FunctionComponent } from "react";
import i18nData from "../../i18n/i18nData";

const QuoteAttention: FunctionComponent<{}> = ({}) => {
  return (
    <div className="text-gray-500">
      {i18nData({
        ja: "※ 以下の画像は、理解を補助するために、個人で再作成した仮のものです。",
        ko: "※ 아래의 이미지는 이해를 돕기 위해 개인적으로 재작성한 가상의 것입니다.",
        en: "※ The images below are mock-ups that I personally recreated for the purpose of aiding understanding.",
      })}
    </div>
  );
};

export default QuoteAttention;
