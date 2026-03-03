"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import i18n from "@/i18n/i18n";

type Props = {
  children: React.ReactNode;
};

export default function LanguageProvider({ children }: Props) {
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    if (!locale) return;

    i18n.changeLanguage(locale);

    // Set direction for RTL
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return <>{children}</>;
}