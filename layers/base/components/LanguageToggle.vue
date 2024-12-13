<script lang="ts" setup>
const { locale, setLocale, locales } = useI18n()
</script>

<template>
  <UButtonGroup
    class="self-center"
    size="sm"
  >
    <UButton
      v-for="localeOption in locales"
      :key="localeOption.code"
      :variant="localeOption.code === locale ? 'solid' : 'soft'"
      :disabled="localeOption.code === locale"
      @click="setLocale(localeOption.code)"
    >
      <span class="px-1">{{ localeOption.name }}</span>
    </UButton>
  </UButtonGroup>
</template>
