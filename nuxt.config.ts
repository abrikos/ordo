// https://nuxt.com/docs/api/configuration/nuxt-config
import type {NuxtPage} from "@nuxt/schema";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  hooks: {
    'pages:extend'(pages) {
      function setMiddleware(pages: NuxtPage[]) {
        for (const page of pages) {
          page.meta ||= {}
          // Note that this will override any middleware set in `definePageMeta` in the page
          page.meta.middleware = ['auth-middleware']
          if (page.children) {
            setMiddleware(page.children)
          }
        }
      }

      setMiddleware(pages)
    }
  },
  modules:[
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    'nuxt-mongoose',
    'nuxt-snackbar'
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
  },
  devtools: { enabled: true },
  runtimeConfig: {
    mailUser: process.env.MAIL_USER,
    mailPassword: process.env.MAIL_PASSWORD,
    public: {
      devMode: process.env.NODE_ENV !== 'production',
      authExpiration: 3600 * 24 * 30,
      authRefreshBeforeExpiration: 3000,
      authTokenName: 'auth_token',
    }

  },

  snackbar: {
    bottom: true,
    right: true,
    duration: 5000
  },
  quasar: {
    // Configurable Component Defaults
    components: {
      defaults: {
        QBtn: {
          dense: true,
          flat: true,
        },
        QInput: {
          dense: true
        }
      }
    }
  }
})
