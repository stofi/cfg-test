import type InvestmentFormDetails from '~investment/components/form/Details.vue'
import type InvestmentFormPersonal from '~investment/components/form/Personal.vue'
import type InvestmentFormContact from '~investment/components/form/Contact.vue'
import type InvestmentFormAddress from '~investment/components/form/Address.vue'

export function useInvestmentSteps() {
  const detailsFormRef = ref<ComponentPublicInstance<typeof InvestmentFormDetails>>()
  const personalFormRef = ref<ComponentPublicInstance<typeof InvestmentFormPersonal>>()
  const contactFormRef = ref<ComponentPublicInstance<typeof InvestmentFormContact>>()
  const addressFormRef = ref<ComponentPublicInstance<typeof InvestmentFormAddress>>()

  const detailsStore = useDetailsStore()
  const personalStore = usePersonalStore()
  const contactStore = useContactStore()
  const addressStore = useAddressStore()

  const { combinedSchema, detailsSchema, addressSchema, contactSchema, personalSchema } = useInvestmentSchemas()

  const hasAnyData = computed(() => detailsStore.hasData || personalStore.hasData || contactStore.hasData || addressStore.hasData)

  const stepStore = useFormStepStore()
  const { step, stepNumber } = storeToRefs(stepStore)

  const consent = ref(false)
  const showConsentWarning = ref(false)
  watch(consent, () => {
    if (consent.value) showConsentWarning.value = false
  })

  const submitting = ref(false)
  const showSuccessModal = ref(false)
  const showErrorModal = ref(false)

  const validateStep = async (step: FormStep) => {
    switch (step) {
      case 'details':
        return await detailsFormRef.value?.validate()
      case 'personal':
        return await personalFormRef.value?.validate()
      case 'contact':
        return await contactFormRef.value?.validate()
      case 'address':
        return await addressFormRef.value?.validate()
      default:
        return false
    }
  }

  const goToFirstInvalidStep = () => {
    // Valiadate schemas directly, forms might not be mounted
    const detailsValid = detailsSchema.value.safeParse(detailsStore.$state)
    if (!detailsValid.success) {
      step.value = 'details'
      // Validate form to show errors
      detailsFormRef.value?.validate()
      return
    }

    const personalValid = personalSchema.value.safeParse(personalStore.$state)
    if (!personalValid.success) {
      step.value = 'personal'
      personalFormRef.value?.validate()
      return
    }

    const contactValid = contactSchema.value.safeParse(contactStore.$state)
    if (!contactValid.success) {
      step.value = 'contact'
      contactFormRef.value?.validate()
      return
    }

    const addressValid = addressSchema.value.safeParse(addressStore.$state)
    if (!addressValid.success) {
      step.value = 'address'
      addressFormRef.value?.validate()
      return
    }
  }

  const goBack = () => {
    stepStore.goBack()
  }

  const goNext = async () => {
    const isValid = await validateStep(step.value)
    if (!isValid)
      return

    stepStore.goNext()
  }

  const handleResetForms = () => {
    stepStore.$reset()
    detailsStore.$reset()
    personalStore.$reset()
    contactStore.$reset()
    addressStore.$reset()
  }

  const combineAndValidate = async () => {
    const combinedData = {
      details: detailsStore.$state,
      personal: personalStore.$state,
      contact: contactStore.$state,
      address: addressStore.$state,
      consent: consent.value,
    }
    const { data, success } = combinedSchema.value.safeParse(combinedData)

    if (success) return data

    goToFirstInvalidStep()

    throw new Error('Invalid data')
  }

  const postData = async (payload: CombinedSchema) => {
    try {
      await $fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: payload,
      })
    }
    catch {
      showErrorModal.value = true
      throw new Error('Failed to submit data')
    }
  }

  // Get irrelevant data from the placeholder API
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getData = async () => {
    try {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET',
      })
      return response
    }
    catch (error) {
      console.error(error)
      throw new Error('Failed to fetch data')
    }
  }

  const handleSubmit = async () => {
    if (!consent.value) {
      showConsentWarning.value = true
      return
    }
    try {
      submitting.value = true
      const payload = await combineAndValidate()
      await postData(payload)
      handleResetForms()
      showSuccessModal.value = true
    }
    finally {
      submitting.value = false
    }
  }

  return {
    step,
    stepNumber,
    consent,
    showConsentWarning,
    submitting,
    detailsFormRef,
    personalFormRef,
    contactFormRef,
    addressFormRef,
    validateStep,
    goBack,
    goNext,
    handleResetForms,
    handleSubmit,
    hasAnyData,
    showSuccessModal,
    showErrorModal,
  }
}
