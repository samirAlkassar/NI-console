// /app/i18n/language.ts
import i18n from "./i18n";
import setCookies from "../actions/setCoockies";

export const changeLanguage = async (locale: string) => {
  await setCookies("locale", locale);
  i18n.changeLanguage(locale);
};