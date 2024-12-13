export const usePersonalStore = defineStore('personal', {
  state: (): PersonalSchema => ({
    fullName: '',
    birthId: '',
    citizenId: '',
  }),
  actions: {
    reset() {
      this.fullName = ''
      this.birthId = ''
      this.citizenId = ''
    },
  },
  getters: {
    hasData: state => !!state.fullName && !!state.birthId && !!state.citizenId,
  },
  persist: true,
})
