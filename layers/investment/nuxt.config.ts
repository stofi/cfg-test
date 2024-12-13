import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  components: [
    { path: '~investment/components', prefix: 'Investment' },
  ],
  alias: { '~investment': resolve('./') },
  pinia: {
    storesDirs: [resolve('./stores')],
  },
})
