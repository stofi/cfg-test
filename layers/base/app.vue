<script lang="ts" setup>
const { setLocale } = useI18n()

setLocale('cs')
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  @apply bg-gray-100 dark:bg-gray-950;
}
</style>
