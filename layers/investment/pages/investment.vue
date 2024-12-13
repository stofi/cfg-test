<script lang="ts" setup>
const { t } = useI18n()
useHead({
  title: t('pages.investment.title'),
  meta: [
    {
      name: 'description',
      content: t('pages.investment.description'),
    },
  ],
})
</script>

<template>
  <BasePageGrid>
    <div>
      <h1 class="text-2xl font-bold">
        {{ $t('pages.investment.title') }}
      </h1>
      <p>{{ $t('pages.investment.description') }}</p>
    </div>
    <InvestmentSteps />
    <InvestmentContinueModal />
  </BasePageGrid>
</template>
