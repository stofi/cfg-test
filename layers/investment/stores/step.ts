export type FormStep = 'details' | 'personal' | 'contact' | 'address'

export const useFormStepStore = defineStore('form-step', {
  state: (): {
    step: FormStep
  } => ({
    step: 'details',
  }),
  actions: {
    goBack() {
      switch (this.step) {
        case 'details':
          return
        case 'personal':
          this.step = 'details'
          return
        case 'contact':
          this.step = 'personal'
          return
        case 'address':
          this.step = 'contact'
          return
      }
    },
    goNext() {
      switch (this.step) {
        case 'details':
          this.step = 'personal'
          return
        case 'personal':
          this.step = 'contact'
          return
        case 'contact':
          this.step = 'address'
          return
        case 'address':
          return
      }
    },
  },
  getters: {
    stepNumber: (state) => {
      switch (state.step) {
        case 'details':
          return 1
        case 'personal':
          return 2
        case 'contact':
          return 3
        case 'address':
          return 4
      }
    },
  },
  persist: true,
})
