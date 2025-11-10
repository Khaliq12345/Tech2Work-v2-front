<template>
  <UHeader
    mode="slideover"
    :toggle="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full',
    }"
  >
    <!-- Title -->
    <template #title>
      <div class="text-2xl font-bold">
        <span class="text-gray-900">TECH</span>
        <span class="text-gray-500">2</span>
        <span class="text-gray-900">WORK</span>
      </div>
    </template>

    <!-- Desktop Menu -->
    <UNavigationMenu
      :items="navItems"
      highlight
      highlight-color="primary"
      variant="pill"
    />

    <!-- Mobile Menu  -->
    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
        class="-mx-2.5"
        highlight
        highlight-color="primary"
        variant="pill"
      />
    </template>

    <template #right>
      <UButton
        variant="solid"
        color="white"
        class="text-black"
        v-for="locale_temp in $getLocales()"
        :key="locale_temp.code"
        @click="
          $switchLocale(locale_temp.code);
          locale = locale_temp.code;
        "
      >
        {{ locale_temp.code }}
      </UButton>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { useI18n } from "#imports";

const { $t, $getLocales, $switchLocale, $getLocale } = useI18n();

const locale = ref($getLocale());

const navItems: NavigationMenuItem[] = computed(() => [
  { label: "Home", to: `/${locale.value}` },
  { label: "Services", to: `/${locale.value}/services/` },
  { label: "Portfolio", to: `/${locale.value}/portfolios/` },
  { label: "About", to: `/${locale.value}/about` },
  { label: "Contact Us", to: `/${locale.value}/contact/` },
]);
</script>

<style scoped></style>
