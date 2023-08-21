import { useRouter } from "next/router";
import { I_i18n } from "./Types/I_i18n";

const i18nData = (data_i18n: I_i18n<any>) => {
  const { locale, defaultLocale } = useRouter();

  return data_i18n[locale] ?? data_i18n[defaultLocale];
};

export default i18nData;
