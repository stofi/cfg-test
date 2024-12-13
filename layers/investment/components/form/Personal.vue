<script lang="ts" setup>
import { z } from 'zod'
import { usePersonalStore } from '~investment/stores/personal'
import type { FormSubmitEvent, Form } from '#ui/types'

const { t } = useI18n()

const formSchema = computed(() =>
  z.object({
    fullName: z
      .string()
      .min(1, t('forms.validations.fullName.required')),
    birthId: z
      .string()
      .regex(/^\d{6}\/\d{4}$/, t('forms.validations.birthId.valid')),
    citizenId: z
      .string()
      .regex(/^\d{10}$/, t('forms.validations.citizenId.valid')),
  }),
)

export type FormState = Partial<z.infer<typeof formSchema['value']>>

const state = usePersonalStore()

const form = ref<Form<FormState>>()

async function handleSubmit(event: FormSubmitEvent<FormState>) {
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
      :title="$t('forms.steps.personal.title')"
      :description="$t('forms.steps.personal.description')"
    />
    <UFormGroup
      :label="$t('forms.fields.fullName.label')"
      name="fullName"
    >
      <UInput
        v-model="state.fullName"
        type="text"
      />
    </UFormGroup>

    <UFormGroup
      :label="$t('forms.fields.birthId.label')"
      name="birthId"
    >
      <UInput
        v-model="state.birthId"
        type="text"
      />
    </UFormGroup>
    <UFormGroup
      :label="$t('forms.fields.citizenId.label')"
      name="citizenId"
    >
      <UInput
        v-model="state.citizenId"
        type="text"
      />
    </UFormGroup>
  </uform>
</template>
