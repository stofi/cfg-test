export const useAddressStore = defineStore('address', {
  state: (): AddressSchema => ({
    city: '',
    street: '',
    zipCode: '',
  }),
  getters: {
    hasData: state => !!state.city && !!state.street && !!state.zipCode,
  },
  persist: true,
})
