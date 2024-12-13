export const useDetailsStore = defineStore('details', {
  state: (): DetailsSchema => ({
    amount: undefined,
  }),
  getters: {
    hasData: state => state.amount !== undefined,
  },
  persist: true,
})
