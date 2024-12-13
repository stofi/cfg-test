export const useContactStore = defineStore('contact', {
  state: (): ContactSchema => ({
    email: '',
    phoneNumber: '',
  }),
  getters: {
    hasData: state => state.email !== '' && state.phoneNumber !== '',
  },
  persist: true,
})
