<script lang="ts" setup>
import { usePersonalStore } from '~investment/stores/personal'
import type { Form } from '#ui/types'

const personalStore = usePersonalStore()
const { personalSchema } = useInvestmentSchemas()

const form = ref<Form<PersonalSchema>>()

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
    :state="personalStore"
    :schema="personalSchema"
    class="grid gap-6"
  >
    <InvestmentStepHeader
      :title="$t('forms.steps.personal.title')"
      :description="$t('forms.steps.personal.description')"
    />
    <UFormGroup
      :label="$t('forms.fields.fullName.label')"
      name="fullName"
    >
      <UInput
        v-model="personalStore.fullName"
        type="text"
      />
    </UFormGroup>

    <UFormGroup
      :label="$t('forms.fields.birthId.label')"
      name="birthId"
    >
      <UInput
        v-model="personalStore.birthId"
        type="text"
      />
    </UFormGroup>
    <UFormGroup
      :label="$t('forms.fields.citizenId.label')"
      name="citizenId"
    >
      <UInput
        v-model="personalStore.citizenId"
        type="text"
      />
    </UFormGroup>
  </uform>
</template>
