import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './locales/en.json';
import sin from './locales/sin.json';
import tamil from './locales/tamil.json';

const resources = {
  en: {
    translation: en,
  },
  sin: {
    translation: sin,
  },
  tamil: {
    translation: tamil,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.getLocales()[0]?.languageCode || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
