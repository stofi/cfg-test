<script lang="ts" setup>
import type { Form } from '#ui/types'
import { MIN_AMOUNT, MAX_AMOUNT } from '~investment/consts'

const detailsStore = useDetailsStore()
const { detailsSchema } = useInvestmentSchemas()

const form = ref<Form<DetailsSchema>>()

const validate = async () => form.value?.validate()
  .then(Boolean)
  .catch(() => false) ?? false

defineExpose({
  validate,
})
</script>

<template>
  <UForm
    ref="form"
    :state="detailsStore"
    :schema="detailsSchema"
    class="grid gap-6"
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
        v-model.number="detailsStore.amount"
        type="text"
        :formatter="formatCurrency.format"
      />
      <URange
        v-model="detailsStore.amount"
        class="mt-2"
        :min="MIN_AMOUNT"
        :max="MAX_AMOUNT"
      />
      <div class="flex justify-between text-xs text-gray-500">
        <span>{{ formatCurrency.format(MIN_AMOUNT) }}</span>
        <span>{{ formatCurrency.format(MAX_AMOUNT) }}</span>
      </div>
    </UFormGroup>
  </uform>
</template>
