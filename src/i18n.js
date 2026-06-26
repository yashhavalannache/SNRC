import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationJA from "./locales/ja.json";
import translationKN from "./locales/kn.json";

// The resources we'll use for translation
const resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  },
  kn: {
    translation: translationKN,
  },
};

// Retrieve language from localStorage or default to English
const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// Synchronize changes to localStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
