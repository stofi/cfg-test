export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@formkit/auto-animate/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],

  ssr: true,

  devtools: {
    enabled: true,
  },
  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'cs',
    locales: [{
      code: 'cs',
      iso: 'cs-CZ',
      name: 'Čeština',
    }, {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    }],
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: false,
  },
})
