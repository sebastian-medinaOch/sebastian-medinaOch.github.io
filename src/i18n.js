import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esTranslation from './locales/es.json';
import enTranslation from './locales/en.json';

const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto (español)
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React ya escapa protegiendo contra XSS
    }
  });

export default i18n;
