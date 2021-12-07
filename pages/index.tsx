import Link from "next/link";
import HomeContext from "../components/Context/HomeContext";
import i18nData from "../i18n/i18nData";
import { I_i18n } from "../i18n/Types/I_i18n";

export default function Home() {
    const test_i18n: I_i18n<string> = {
        ja: "こんにちは!",
        ko: "안녕하세요!",
        en: "Hello!",
    };

    return (
        <HomeContext.Provider value={{}}>
            <ul>
                <li>
                    <Link href="/" locale="ja">
                        ja
                    </Link>
                </li>
                <li>
                    <Link href="/" locale="ko">
                        ko
                    </Link>
                </li>
                <li>
                    <Link href="/" locale="en">
                        en
                    </Link>
                </li>
            </ul>
            <div className="bg-blue-100">
                <p>{i18nData(test_i18n)}</p>
            </div>
        </HomeContext.Provider>
    );
}
