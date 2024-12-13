<script lang="ts" setup>
import type { HorizontalNavigationLink } from '#ui/types'

const { t } = useI18n()
const links = computed<HorizontalNavigationLink[]>(() => [
  { to: '/', label: t('pages.index.title') },
  { to: '/investment', label: t('pages.investment.title') },
])
</script>

<template>
  <header class="w-full bg-gray-200 md:top-0 md:left-0 md:right-0 md:absolute dark:bg-gray-900">
    <div class="flex items-center justify-between max-w-6xl gap-2 px-4 py-4 mx-auto">
      <NuxtLink
        to="/"
        class="text-xl font-bold"
      >
        {{ $t('app.title') }}
      </NuxtLink>
      <UHorizontalNavigation
        :links="links"
        class="hidden sm:flex"
      />
      <UDropdown
        class="sm:hidden"
        :ui="{
          width: 'w-64',
        }"
        :items="[links, [{
          label: 'Actions',
          slot: 'actions',
        }]]"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          variant="ghost"
          icon="i-heroicons-bars-3"
        />
        <template #actions>
          <div class="flex justify-between w-full gap-2">
            <BaseThemeToggle />
            <BaseLanguageToggle />
          </div>
        </template>
      </UDropdown>
      <BaseThemeToggle class="hidden sm:flex" />
      <BaseLanguageToggle class="hidden sm:flex" />
    </div>
  </header>
</template>
