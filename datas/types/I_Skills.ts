import { IconType } from "react-icons";
import { I_i18n } from "../../i18n/Types/I_i18n";

export interface I_Skills {
  percent: number;
  title_i18n: I_i18n<string>;
  text_i18n: I_i18n<string>;
  iconComponent: IconType;
}
