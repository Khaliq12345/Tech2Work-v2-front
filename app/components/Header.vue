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

      <!-- languague -->
      <div class="flex items-center gap-2">
        <UDropdownMenu
          :items="localeItems"
          :content="{ align: 'end' }"
          :ui="{
            content: 'min-w-32',
          }"
        >
          <UButton
            color="primary"
            variant="ghost"
            size="xs"
            trailing-icon="i-lucide-chevron-down"
            class="text-black"
          >
            <template #leading>
              <span class="text-base">{{ getFlag(locale) }}</span>
            </template>
            {{ locale.toUpperCase() }}
          </UButton>

          <template #item="{ item }">
            <span class="text-base">{{ item.icon }}</span>
            <span class="uppercase text-black">{{ item.label }}</span>
            <UIcon
              v-if="item.active"
              name="i-lucide-check"
              class="ms-auto text-primary-500"
            />
          </template>
        </UDropdownMenu>
      </div>
    </template>
  </UHeader>
  <Contact v-model:open="isContactOpen" />
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { $t, $getLocales, $switchLocale, $getLocale } = useI18n();
const locale = computed(() => $getLocale());

const technologyChildren = computed(() =>
  [
    { slug: "fastapi", en: "FastAPI", fr: "FastAPI" },
    { slug: "javascript", en: "JavaScript", fr: "JavaScript" },
    { slug: "make", en: "Make", fr: "Make" },
    { slug: "mongodb", en: "MongoDB", fr: "MongoDB" },
    { slug: "n8n", en: "n8n", fr: "n8n" },
    { slug: "nativescript", en: "NativeScript", fr: "NativeScript" },
    { slug: "playwright", en: "Playwright", fr: "Playwright" },
    { slug: "postgres", en: "PostgreSQL", fr: "PostgreSQL" },
    { slug: "python", en: "Python", fr: "Python" },
    { slug: "rust", en: "Rust", fr: "Rust" },
    { slug: "supabase", en: "Supabase", fr: "Supabase" },
    { slug: "svelte", en: "Svelte", fr: "Svelte" },
    { slug: "vue", en: "Vue.js", fr: "Vue.js" },
  ].map((item) => ({
    label: locale.value === "fr" ? item.fr : item.en,
    to: `/${locale.value}/technology/${item.slug}/`,
  })),
);

const industrySlugs = [
  { slug: "construction", en: "Construction", fr: "Construction" },
  { slug: "events", en: "Events", fr: "Événements" },
  { slug: "healthcare", en: "Healthcare", fr: "Santé" },
  { slug: "travel", en: "Travel", fr: "Voyage" },
  { slug: "ecommerce", en: "E-commerce", fr: "E-commerce" },
  { slug: "finance", en: "Finance", fr: "Finance" },
  { slug: "insurance", en: "Insurance", fr: "Assurance" },
];

const serviceSlugs = [
  { slug: "ai-agent", en: "AI Agents", fr: "Agents IA Intelligents" },
  {
    slug: "app-dev",
    en: "Mobile App Development",
    fr: "Développement d'Applications Mobiles",
  },
  {
    slug: "big-data",
    en: "Big Data and Megadata",
    fr: "Big Data et Mégadonnées",
  },
  {
    slug: "data-science",
    en: "Data Science and Analytics",
    fr: "Science des Données et Analytics",
  },
  {
    slug: "ml-dev",
    en: "Custom AI/ML Development",
    fr: "Développement IA/ML sur Mesure",
  },
  {
    slug: "web-dev",
    en: "Custom Web Development",
    fr: "Développement Web sur Mesure",
  },
];

const navItems: NavigationMenuItem[] = computed(() => [
  { label: "Home", to: `/${locale.value}` },
  {
    label: "Services",
    icon: "i-lucide-wrench",
    children: serviceSlugs.map((item) => ({
      label: locale.value === "fr" ? item.fr : item.en,
      to: `/${locale.value}/services/${item.slug}/`,
    })),
    ui: {
      content: "bg-white dark:bg-gray-900 shadow-lg",
    },
  },
  {
    label: "Technology",
    icon: "i-lucide-cpu",
    children: technologyChildren.value,
    ui: {
      content: "bg-white dark:bg-gray-900 shadow-lg",
    },
  },
  {
    label: "Industry",
    icon: "i-lucide-briefcase",
    children: industrySlugs.map((item) => ({
      label: locale.value === "fr" ? item.fr : item.en,
      to: `/${locale.value}/industry/${item.slug}/`,
    })),
    ui: {
      content: "bg-white dark:bg-gray-900 shadow-lg",
    },
  },
  { label: "Portfolio", to: `/${locale.value}/portfolios/` },
  { label: "About", to: `/${locale.value}/about` },
]);

const isContactOpen = ref(false);

const contactTexts = computed(() => {
  if (locale.value == "en") {
    return "Contact Us";
  } else {
    return "Contacter Nous";
  }
});

const getFlag = (code: string) => {
  const flags = {
    en: "🇬🇧",
    fr: "🇫🇷",
    es: "🇪🇸",
    de: "🇩🇪",
    pt: "🇵🇹",
    it: "🇮🇹",
    // Add more as needed
  };
  return flags[code] || "🌐";
};

const localeItems = computed(() => [
  $getLocales().map((locale_temp) => ({
    label: locale_temp.code,
    icon: getFlag(locale_temp.code),
    active: locale === locale_temp.code,
    onSelect: () => $switchLocale(locale_temp.code),
  })),
]);
</script>
