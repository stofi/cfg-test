import type { FormState } from '../components/form/Contact.vue'

export const useContactStore = defineStore('contact', {
  state: (): FormState => ({
    email: '',
    phoneNumber: '',
  }),
  persist: true,
})
