import type { FormState } from '../components/form/Personal.vue'

export const usePersonalStore = defineStore('personal', {
  state: (): FormState => ({
    fullName: '',
    birthId: '',
    citizenId: '',
  }),
  persist: true,
})
