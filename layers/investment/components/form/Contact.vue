<script lang="ts" setup>
import { z } from 'zod'
import { useContactStore } from '~investment/stores/contact'
import type { FormSubmitEvent, Form } from '#ui/types'

const { t } = useI18n()

const formSchema = computed(() =>
  z.object({
    phoneNumber: z
      .string()
      .length(9, t('forms.validations.phoneNumber.length')),
    email: z
      .string()
      .email(t('forms.validations.email.valid')),
  }),
)

export type FormState = Partial<z.infer<typeof formSchema['value']>>

const state = useContactStore()

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
      :title="$t('forms.steps.contact.title')"
      :description="$t('forms.steps.contact.description')"
    />
    <UFormGroup
      :label="$t('forms.fields.phoneNumber.label')"
      name="phoneNumber"
    >
      <UInput
        v-model="state.phoneNumber"
        type="text"
      />
    </UFormGroup>
    <UFormGroup
      :label="$t('forms.fields.email.label')"
      name="email"
    >
      <UInput
        v-model="state.email"
        type="email"
      />
    </UFormGroup>
  </uform>
</template>
