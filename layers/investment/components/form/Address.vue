<script lang="ts" setup>
import { z } from 'zod'
import { useAddressStore } from '~investment/stores/address'
import type { FormSubmitEvent, Form } from '#ui/types'

const { t } = useI18n()

const formSchema = computed(() =>
  z.object({
    city: z
      .string()
      .min(1, t('forms.validations.city.required')),
    street: z
      .string()
      .min(1, t('forms.validations.street.required')),
    zipCode: z
      .string()
      .length(5, t('forms.validations.zipCode.length')),
  }),
)

export type FormState = Partial<z.infer<typeof formSchema['value']>>

const state = useAddressStore()

const form = ref<Form<FormState>>()

const handleSubmit = (event: FormSubmitEvent<FormState>) => {
  console.log(event)
}

const validate = async () => {
  const isValid = await form.value?.validate()
  return !!isValid
}

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
      :title="$t('forms.steps.address.title')"
      :description="$t('forms.steps.address.description')"
    />
    <UFormGroup
      :label="$t('forms.fields.city.label')"
      name="city"
    >
      <UInput
        v-model="state.city"
        type="text"
      />
    </UFormGroup>
    <UFormGroup
      :label="$t('forms.fields.street.label')"
      name="street"
    >
      <UInput
        v-model="state.street"
        type="text"
      />
    </UFormGroup>
    <UFormGroup
      :label="$t('forms.fields.zipCode.label')"
      name="zipCode"
    >
      <UInput
        v-model="state.zipCode"
        type="text"
      />
    </UFormGroup>
  </uform>
</template>
