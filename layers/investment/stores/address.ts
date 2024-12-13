import type { FormState } from '../components/form/Address.vue'

export const useAddressStore = defineStore('address', {
  state: (): FormState => ({
    city: '',
    street: '',
    zipCode: '',
  }),
  persist: true,
})
