import { FunctionComponent } from "react";
import { I_i18n } from "../../i18n/Types/I_i18n";

export interface I_Article {
    imgUrl: string;
    categories: string[];
    title_i18n: I_i18n<string>;
    text_i18n: I_i18n<string>;
    date: string;
    moreContentType: "modal" | "url";
    moreContentUrl?: string;
    moreContentModalComponent?: FunctionComponent;
}
