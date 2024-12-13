<script lang="ts" setup>
const {
  step,
  stepNumber,
  detailsFormRef,
  personalFormRef,
  contactFormRef,
  addressFormRef,
  goBack,
  goNext,
  handleSubmit,
  handleResetForms,
  consent,
  showConsentWarning,
  submitting,
  showSuccessModal,
  showErrorModal,
} = useInvestmentSteps()
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

    <div v-auto-animate>
      <InvestmentFormDetails
        v-if="step === 'details'"
        ref="detailsFormRef"
      />
      <InvestmentFormPersonal
        v-if="step === 'personal'"
        ref="personalFormRef"
      />
      <InvestmentFormContact
        v-if="step === 'contact'"
        ref="contactFormRef"
      />
      <InvestmentFormAddress
        v-if="step === 'address'"
        ref="addressFormRef"
      />
      <UFormGroup
        v-if="step === 'address'"
        class="mt-4"
        name="consent"
        :error="showConsentWarning ? $t('forms.validations.consent.required') : undefined"
      >
        <UCheckbox
          v-model="consent"
          name="notifications"
          :label="$t('forms.fields.consent.label')"
        />
      </UFormGroup>
    </div>
    <template #footer>
      <div class="grid grid-cols-3 gap-2 place-items-center">
        <UButton
          v-if="step === 'details'"
          class="place-self-start"
          icon="i-heroicons-arrow-path"
          color="gray"
          @click="handleResetForms"
        >
          {{ $t('common.reset') }}
        </UButton>
        <UButton
          v-else
          class="place-self-start"
          icon="i-heroicons-arrow-left"
          color="gray"
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
              'bg-gray-600 dark:bg-gray-500': i < stepNumber,
              'bg-primary': i === stepNumber,
              'bg-gray-400 dark:bg-gray-700': i > stepNumber,
            }"
          />
        </div>
        <UButton
          v-if="step !== 'address'"
          class="place-self-end"
          icon="i-heroicons-arrow-right"
          trailing
          @click="goNext"
        >
          {{ $t('common.next') }}
        </UButton>
        <UButton
          v-else
          class="place-self-end"
          color="primary"
          :loading="submitting"
          @click="handleSubmit"
        >
          {{ $t('common.submit') }}
        </UButton>
      </div>
    </template>
  </UCard>

  <InvestmentSuccessModal v-model="showSuccessModal" />
  <InvestmentErrorModal v-model="showErrorModal" />
</template>
