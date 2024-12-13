<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent, Form } from '#ui/types'

const formatter = new Intl.NumberFormat('cs-CZ', {
  style: 'currency',
  currency: 'CZK',
})

const minAmount = 1000
const maxAmount = 1000000

const { t } = useI18n()

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
    fullName: z
      .string()
      .min(1, t('forms.validations.fullName.required')),
    phoneNumber: z
      .string()
      .length(9, t('forms.validations.phoneNumber.length')),
    email: z
      .string()
      .email(t('forms.validations.email.valid')),
    birthId: z
      .string()
      .regex(/^\d{6}\/\d{4}$/, t('forms.validations.birthId.valid')),
    citizenId: z
      .string()
      .regex(/^\d{10}$/, t('forms.validations.citizenId.valid')),
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

type FormState = z.infer<typeof formSchema['value']>

const state = reactive<FormState>({
  amount: minAmount,
  fullName: '',
  phoneNumber: '',
  email: '',
  birthId: '',
  citizenId: '',
  city: '',
  street: '',
  zipCode: '',
})

const form = ref<Form<FormState>>()

async function handleSubmit(event: FormSubmitEvent<FormState>) {
  console.log(event)
}
</script>

<template>
  <UForm
    ref="form"
    :state="state"
    :schema="formSchema"
    class="grid gap-4"
    @submit="handleSubmit"
  >
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
    </UFormGroup>
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
    <UButton type="submit">
      {{ $t('common.submit') }}
    </UButton>
  </uform>
</template>
