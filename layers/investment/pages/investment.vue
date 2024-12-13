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
  <div class="grid items-center gap-4 md:flex-grow md:grid-cols-2">
    <div>
      <h1 class="text-2xl font-bold">
        {{ $t('pages.investment.title') }}
      </h1>
      <p>{{ $t('pages.investment.description') }}</p>
    </div>
    <InvestmentSteps />
  </div>
</template>
