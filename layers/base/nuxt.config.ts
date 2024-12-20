import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  components: [
    { path: '~base/components', prefix: 'Base' },
  ],
  alias: { '~base': resolve('./') },
})
