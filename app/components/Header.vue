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
    <!-- Mobile Menu -->
    <template #body>
      <UNavigationMenu
        :items="navItems"
        orientation="vertical"
        class="-mx-2.5"
        highlight
        highlight-color="primary"
        variant="pill"
      />

      <!-- Mobile contact -->
      <div class="mt-4">
        <UButton
          block
          color="primary"
          variant="solid"
          class="w-full text-white"
          @click="isContactOpen = true"
        >
          {{ contactTexts }}
        </UButton>
      </div>
    </template>

    <!-- Desktop contact -->
    <template #right>
      <UButton
        variant="solid"
        color="primary"
        class="hidden text-white md:inline-flex"
        @click="isContactOpen = true"
      >
        {{ contactTexts }}
      </UButton>
      <UButton
        variant="solid"
        color="white"
        class="text-black"
        v-for="locale_temp in $getLocales()"
        :key="locale_temp.code"
        @click="$switchLocale(locale_temp.code)"
      >
        {{ locale_temp.code }}
      </UButton>
    </template>
  </UHeader>
  <Contact v-model:open="isContactOpen" />
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { $t, $getLocales, $switchLocale, $getLocale } = useI18n();
const locale = computed(() => $getLocale());

const navItems: NavigationMenuItem[] = computed(() => [
  { label: "Home", to: `/${locale.value}` },
  { label: "Services", to: `/${locale.value}/services/` },
  { label: "Portfolio", to: `/${locale.value}/portfolios/` },
  { label: "About", to: `/${locale.value}/about` },
  { label: "Contact Us", to: `/${locale.value}/contact/` },
  {
    label: "Technology",
    icon: "i-lucide-cpu",
    children: [{ label: "Python", to: `/${locale.value}/technology/python/` }],
  },
]);

const isContactOpen = ref(false);

const contactTexts = computed(() => {
  if (locale.value == "en") {
    return "Contact Us";
  } else {
    return "Contacter Nous";
  }
});
</script>
