export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/ui",
    "@vueuse/motion/nuxt",
    "@vueuse/nuxt",
    "nuxt-i18n-micro",
    "@pinia/nuxt",
    "@nuxt/content",
  ],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", dir: "ltr" },
      { code: "fr", iso: "fr-FR", dir: "ltr" },
    ],
    defaultLocale: "en",
    translationDir: "locales",
    strategy: "prefix",
  },
});
