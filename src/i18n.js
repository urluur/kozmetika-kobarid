import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationSL from './locales/sl/translation.json';
import translationIT from './locales/it/translation.json';
import translationDE from './locales/de/translation.json';

const resources = {
  en: { translation: translationEN },
  sl: { translation: translationSL },
  it: { translation: translationIT },
  de: { translation: translationDE },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'sl',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
