<script lang="ts" setup>
import type { Form } from '#ui/types'

const addressStore = useAddressStore()
const { addressSchema } = useInvestmentSchemas()

const form = ref<Form<AddressSchema>>()

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
    :state="addressStore"
    :schema="addressSchema"
    class="grid gap-6"
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
        v-model="addressStore.city"
        type="text"
      />
    </UFormGroup>
    <UFormGroup
      :label="$t('forms.fields.street.label')"
      name="street"
    >
      <UInput
        v-model="addressStore.street"
        type="text"
      />
    </UFormGroup>
    <UFormGroup
      :label="$t('forms.fields.zipCode.label')"
      name="zipCode"
    >
      <UInput
        v-model="addressStore.zipCode"
        type="text"
      />
    </UFormGroup>
  </uform>
</template>
