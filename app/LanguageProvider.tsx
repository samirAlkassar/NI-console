"use client";

import { useEffect } from "react";
import i18n from "@/i18n/i18n";
import getCookies from "../actions/getCookies";
import setCookies from "../actions/setCoockies";

type Props = {
  children: React.ReactNode;
};

export default function LanguageProvider({ children }: Props) {
  useEffect(() => {
    const initializeLanguage = async () => {
      const locale = await getCookies("locale");

      if (!locale) {
        await setCookies("locale", "en");
      }

      const localeValue = locale?.value || "en";
      i18n.changeLanguage(localeValue);
    };

    initializeLanguage();
  }, []);

  return <>{children}</>;
}