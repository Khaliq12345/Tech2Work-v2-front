import process from "process";

export default defineNuxtConfig({
  runtimeConfig: {
    smtpServer: process.env.SMTP_SERVER,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USERNAME,
    smtpPassword: process.env.SMTP_PASSWORD,
  },
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
    "@nuxtjs/mdc",
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
