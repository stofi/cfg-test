<script lang="ts" setup>
const { t } = useI18n()
useHead({
  title: t('app.title'),
  meta: [
    {
      name: 'description',
      content: t('pages.index.description'),
    },
  ],
})
</script>

<template>
  <BasePageGrid>
    <div>
      <h2 class="text-2xl font-bold">
        {{ $t('app.title') }}
      </h2>
      <div>{{ $t('pages.index.description') }}</div>
      <UButton
        to="/investment"
        class="mt-4"
        size="xl"
        icon="i-heroicons-currency-dollar"
      >
        {{ $t('pages.index.cta') }}
      </UButton>
    </div>
  </BasePageGrid>
</template>
