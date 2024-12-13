<script lang="ts" setup>
import type InvestmentFormDetails from './form/Details.vue'
import type InvestmentFormPersonal from './form/Personal.vue'
import type InvestmentFormContact from './form/Contact.vue'
import type InvestmentFormAddress from './form/Address.vue'

const step = ref(1)

const detailsForm = ref<ComponentPublicInstance<typeof InvestmentFormDetails>>()
const personalForm = ref<ComponentPublicInstance<typeof InvestmentFormPersonal>>()
const contactForm = ref<ComponentPublicInstance<typeof InvestmentFormContact>>()
const addressForm = ref<ComponentPublicInstance<typeof InvestmentFormAddress>>()

const validateStep = async () => {
  switch (step.value) {
    case 1:
      return await detailsForm.value?.validate()
    case 2:
      return await personalForm.value?.validate()
    case 3:
      return await contactForm.value?.validate()
    case 4:
      return await addressForm.value?.validate()
    default:
      return false
  }
}

const goBack = () => {
  step.value = Math.max(1, step.value - 1)
}

const goNext = async () => {
  // check if the current step is valid
  const isValid = await validateStep()
  if (!isValid) {
    return
  }

  // go to the next step
  step.value = Math.min(4, step.value + 1)
}
</script>

<template>
  <UCard
    :ui="{
      body: {
        base: 'overflow-hidden',
      },
    }"
  >
    <template #header>
      <h2 class="text-xl font-bold">
        {{ $t('pages.investment.form.title') }}
      </h2>
      <p>{{ $t('pages.investment.form.description') }}</p>
    </template>

    <div
      v-auto-animate
    >
      <InvestmentFormDetails
        v-if="step===1"
        ref="detailsForm"
      />
      <InvestmentFormPersonal
        v-if="step===2"
        ref="personalForm"
      />
      <InvestmentFormContact
        v-if="step===3"
        ref="contactForm"
      />
      <InvestmentFormAddress
        v-if="step===4"
        ref="addressForm"
      />
    </div>
    <template #footer>
      <div class="grid grid-cols-3 gap-2 place-items-center">
        <UButton
          class="place-self-start"
          icon="i-heroicons-arrow-left"
          @click="goBack"
        >
          {{ $t('common.back') }}
        </UButton>
        <div class="flex items-center gap-1">
          <div
            v-for="i in 4"
            :key="`step-indicator-${i}`"
            class="w-2 h-2 rounded-full"
            :class="{
              'bg-gray-600 dark:bg-gray-500': i < step,
              'bg-primary': i=== step,
              'bg-gray-400 dark:bg-gray-700': i > step,
            }"
          />
        </div>
        <UButton
          class="place-self-end"
          icon="i-heroicons-arrow-right"
          trailing
          @click="goNext"
        >
          {{ $t('common.next') }}
        </UButton>
      </div>
    </template>
  </UCard>
</template>
