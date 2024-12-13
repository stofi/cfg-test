import type { FormState } from '../components/form/Details.vue'

export const useDetailsStore = defineStore('details', {
  state: (): FormState => ({
    amount: undefined,
  }),
  persist: true,
})
