<script lang="ts" setup>
import type { Form } from '#ui/types'

const contactStore = useContactStore()
const { contactSchema } = useInvestmentSchemas()

const form = ref<Form<ContactSchema>>()

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
    :state="contactStore"
    :schema="contactSchema"
    class="grid gap-6"
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
        v-model="contactStore.phoneNumber"
        type="text"
      />
    </UFormGroup>
    <UFormGroup
      :label="$t('forms.fields.email.label')"
      name="email"
    >
      <UInput
        v-model="contactStore.email"
        type="email"
      />
    </UFormGroup>
  </uform>
</template>
