import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../public/locales/translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en-GB': { translation: translations['en-GB'] },
      'es-ES': { translation: translations['es-ES'] },
      'es-CA': { translation: translations['es-CA'] },
    },
    lng: 'es-ES', 
    fallbackLng: 'es-ES',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
