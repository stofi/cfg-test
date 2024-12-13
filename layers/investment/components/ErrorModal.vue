<script lang="ts" setup>
const isOpen = defineModel<boolean>('model-value')
</script>

<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">
          {{ $t('modals.error.title') }}
        </h2>
      </template>

      <p>{{ $t('modals.error.body') }}</p>

      <template #footer>
        <div class="flex justify-end">
          <UButton
            :label="$t('common.ok')"
            @click="isOpen = false"
          />
        </div>
      </template>
    </UCard>
  </UModal>
</template>
