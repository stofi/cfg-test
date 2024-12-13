import cs from './locales/cs'
import en from './locales/en'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'cs',
  messages: {
    cs, en,
  },
}))
