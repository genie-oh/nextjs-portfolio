import { FunctionComponent } from "react";
import i18nData from "../../../i18n/i18nData";
import { I_i18n } from "../../../i18n/Types/I_i18n";
import { Type_languages } from "../../../i18n/Types/Type_languages";

const LanguageSupport: FunctionComponent<{
    languages: Type_languages[];
}> = ({ languages }) => {
    const tagNames: I_i18n<string> = {
        ja: i18nData({
            ja: "日本語",
            ko: "일본어",
            en: "JAPANESE",
        }),
        ko: i18nData({
            ja: "韓国語",
            ko: "한국어",
            en: "KOREAN",
        }),
        en: i18nData({
            ja: "英語",
            ko: "영어",
            en: "ENGLISH",
        }),
    };

    let languageTagsArray = [];
    languages.map((item) => {
        languageTagsArray.push(tagNames[item]);
    });

    return (
        <div className="flex items-center justify-start text-sm text-white bg-black ">
            <span className="w-32 mr-5 text-center bg-purple-700">
                {i18nData({
                    ja: "言語",
                    ko: "언어",
                    en: "Language",
                })}
            </span>

            <span key="idx">{languageTagsArray.join(", ")}</span>
        </div>
    );
};

export default LanguageSupport;
