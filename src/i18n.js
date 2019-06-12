import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend' // primary use cache
import XHR from 'i18next-xhr-backend' // fallback xhr load
import { reactI18nextModule } from 'react-i18next'

const { NODE_ENV, PUBLIC_URL } = process.env

i18n
  .use(detector)
  .use(backend)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    backend: {
      backends: NODE_ENV === 'development' ? [XHR] : [LocalStorageBackend, XHR],
      backendOptions: [
        {
          prefix: 'educabile.it-dev',
          versions: {
            it: 'v0.1-dev',
          },
        },
        {
          loadPath:
            NODE_ENV === 'development'
              ? 'locales/{{lng}}/{{ns}}.json'
              : `${PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
        },
      ],
    },
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    whitelist: ['it'],
    ns: ['common'],
    defaultNS: 'common',
    react: {
      wait: true,
    },
  })

export default i18n
