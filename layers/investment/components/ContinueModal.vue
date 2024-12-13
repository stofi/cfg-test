<script lang="ts" setup>
const isOpen = ref(false)
const { hasAnyData, handleResetForms } = useInvestmentSteps()

onMounted(() => {
  if (hasAnyData.value) {
    isOpen.value = true
  }
})

const handleCancel = () => {
  isOpen.value = false
  handleResetForms()
}
</script>

<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">
          {{ $t('modals.continuePrevious.title') }}
        </h2>
      </template>

      <p>{{ $t('modals.continuePrevious.body') }}</p>

      <template #footer>
        <div class="flex justify-between">
          <UButton
            :label="$t('modals.continuePrevious.cancel')"
            color="gray"
            @click="handleCancel"
          />
          <UButton
            :label="$t('modals.continuePrevious.confirm')"
            @click="isOpen = false"
          />
        </div>
      </template>
    </UCard>
  </UModal>
</template>
