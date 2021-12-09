import i18nData from "../../i18n/i18nData";

import DistributionBarChart from "./AboutMeStrength/DistributionBarChart";
import ScoreRadial from "./AboutMeStrength/ScoreRadial";
import Signature from "./AboutMeStrength/Signature";

const AboutMeStrength = () => {
    return (
        <div className="relative p-5 m-5 mt-10 bg-white shadow-2xl md:m-10 rounded-xl">
            <div className="flex items-center justify-center w-auto py-2 mb-3 -mt-10 text-lg font-bold text-center bg-yellow-300 rounded-full md:text-2xl md:px-5 md:mx-10">
                <span className="pr-3">My CliftonStrengths 34 Report</span>
            </div>

            <div className="w-full mb-1 font-bold text-center">What is this?</div>
            <div className="w-full pb-2 mb-3 text-sm italic text-center text-gray-500 whitespace-pre-wrap border-b-2">
                {i18nData({
                    ja: "本レポートは4つのカテゴリー、34個のテーマを中心とした、個人の個性、強み、相対的バランスを表します。各テーマは個人が一番自然に発揮できる強みを提示します。",
                    ko: "본 레포트는 4개의 카테고리, 34개의 테마를 중심으로 개인의 개성,강점과 상대적 밸런스를 보여줍니다. 각 테마는 개인이 가장 자연스럽게 발휘할 수 있는 강점을 보여줍니다.",
                    en: "This report is made by the way to make up the user's personality, strength and relative balance by focusing on 34 themes of 4 categorized. each theme gives you a way what you how to naturally do best.",
                })}
            </div>

            <div>
                <div className="w-full mb-1 font-bold text-center">Relative Distribution & Domain</div>
                <DistributionBarChart />
                <div className="w-full pb-2 mb-3 text-sm italic text-center text-gray-500 whitespace-pre-wrap border-b-2">
                    {i18nData({
                        ja: "あなたは、クリフトンストレングスの「戦略的思考力」つの資質に強みがあります。\n優れた「戦略的思考力」を備えたリーダーは、皆を未来にできることに集中させます。 このようなリーダーは、絶えず情報を取り入れ、分析して、チームがよりよい意志決定を下せるようにします。 これに長けているリーダーは、将来に対する私たちの考えを先へ先へと広げ伸ばします。",
                        ko: "전략적 사고 CliftonStrengths 테마가 두드러집니다.\n전략적 사고 영역에 강점이 있는 리더들은 실현 가능성이 있는 일에 모든 사람을 집중시킬 수 있습니다. 그들은 꾸준히 정보를 흡수하고 분석하며 팀이 보다 나은 결정을 내리도록 지원합니다. 전략적 사고 영역에 강점이 있는 사람들은 다른 이들이 미래를 향해 사고를 확장하도록 돕습니다.",
                        en: "lead with Strategic Thinking CliftonStrengths themes.\nto help individuals absorb and analyze information that can inform better decisions.",
                    })}
                </div>

                <div className="w-full mb-1 font-bold text-center">My Signatures</div>
                <Signature />

                <div className="w-full font-bold text-center">CliftonStrengths 34 Radar</div>
                <ScoreRadial />
            </div>
        </div>
    );
};

export default AboutMeStrength;
