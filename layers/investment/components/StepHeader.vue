<script lang="ts" setup>
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div>
    <h3 class="text-lg font-medium">
      {{ title }}
    </h3>
    <p class="text-sm">
      {{ description }}
    </p>
  </div>
</template>
