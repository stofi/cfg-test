import { z } from 'zod'
import { MAX_AMOUNT, MIN_AMOUNT } from '~investment/consts'

export function useInvestmentSchemas() {
  const { t } = useI18n()

  // Schema defintions are computed to allow for dynamic translations
  const detailsSchema = computed(() =>
    z.object({
      amount: z
        .number({
          errorMap: () => ({
            message: t('forms.validations.amount.number'),
          }),
        })
        .int()
        .min(MIN_AMOUNT, t('forms.validations.amount.min', { min: MIN_AMOUNT }))
        .max(MAX_AMOUNT, t('forms.validations.amount.max', { max: MAX_AMOUNT })),
    }),
  )

  const personalSchema = computed(() =>
    z.object({
      fullName: z
        .string()
        .min(1, t('forms.validations.fullName.required')),
      birthId: z
        .string()
        .regex(/^\d{6}\/\d{4}$/, t('forms.validations.birthId.valid')),
      citizenId: z
        .string()
        .regex(/^\d{9}$/, t('forms.validations.citizenId.valid')),
    }),
  )

  const contactSchema = computed(() =>
    z.object({
      phoneNumber: z
        .string()
        .length(9, t('forms.validations.phoneNumber.length')),
      email: z
        .string()
        .email(t('forms.validations.email.valid')),
    }),
  )

  const addressSchema = computed(() =>
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

  const combinedSchema = computed(() =>
    z.object({
      details: detailsSchema.value,
      personal: personalSchema.value,
      contact: contactSchema.value,
      address: addressSchema.value,
      consent: z
        .boolean()
        .refine(value => value, {
          message: t('forms.validations.consent.required'),
        }),
    }),
  )

  return {
    detailsSchema,
    personalSchema,
    contactSchema,
    addressSchema,
    combinedSchema,
  }
}

// Helper types to infer schema types
type ReturnTypeHelper = ReturnType<typeof useInvestmentSchemas>
type SchemaHelper<key extends keyof ReturnTypeHelper> = Partial<z.infer<ReturnTypeHelper[key]['value']>>

// Exported schema types for components and stores
export type DetailsSchema = SchemaHelper<'detailsSchema'>
export type PersonalSchema = SchemaHelper<'personalSchema'>
export type ContactSchema = SchemaHelper<'contactSchema'>
export type AddressSchema = SchemaHelper<'addressSchema'>
export type CombinedSchema = SchemaHelper<'combinedSchema'>
