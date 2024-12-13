<script lang="ts" setup>
import { z } from 'zod'
import { useDetailsStore } from '~investment/stores/details'
import type { FormSubmitEvent, Form } from '#ui/types'

const formatter = new Intl.NumberFormat('cs-CZ', {
  style: 'currency',
  currency: 'CZK',
})

const minAmount = 1000
const maxAmount = 1000000

const { t } = useI18n()
const state = useDetailsStore()

const formSchema = computed(() =>
  z.object({
    amount: z
      .number({
        errorMap: () => ({
          message: t('forms.validations.amount.number'),
        }),
      })
      .int()
      .min(minAmount, t('forms.validations.amount.min', { min: minAmount }))
      .max(maxAmount, t('forms.validations.amount.max', { max: maxAmount })),
  }),
)

export type FormState = Partial<z.infer<typeof formSchema['value']>>

const form = ref<Form<FormState>>()

const handleSubmit = (event: FormSubmitEvent<FormState>) => {
  console.log(event)
}

const validate = async () => form.value?.validate()
  .then(Boolean)
  .catch(() => false)

defineExpose({
  validate,
})
</script>

<template>
  <UForm
    ref="form"
    :state="state"
    :schema="formSchema"
    class="grid gap-6"
    @submit="handleSubmit"
  >
    <InvestmentStepHeader
      :title="$t('forms.steps.details.title')"
      :description="$t('forms.steps.details.description')"
    />
    <UFormGroup
      :label="$t('forms.fields.amount.label')"
      name="amount"
    >
      <UInput
        v-model.number="state.amount"
        type="text"
        :formatter="formatter.format"
      />
      <URange
        v-model="state.amount"
        class="mt-2"
        :min="minAmount"
        :max="maxAmount"
      />
      <div class="flex justify-between text-xs text-gray-500">
        <span>{{ formatter.format(minAmount) }}</span>
        <span>{{ formatter.format(maxAmount) }}</span>
      </div>
    </UFormGroup>
  </uform>
</template>
