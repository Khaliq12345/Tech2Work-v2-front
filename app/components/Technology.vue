<template>
  <UPageLogos
    :title="$t('technology_title')"
    marquee
    :items="logos"
    :ui="{
      root: 'py-18 sm:py-24',
      title: 'text-black text-lg sm:text-3xl font-bold',
      logo: 'size-16 text-black',
    }"
  />
</template>

<script setup lang="ts">
const { $t } = useI18n();

// Liste des icônes avec simple-icons
const logos = [
  "i-simple-icons-symfony",
  "i-simple-icons-laravel",
  "i-simple-icons-python",
  "i-simple-icons-pwa",
  "i-simple-icons-dotnet",
  "i-simple-icons-nodedotjs",
  "i-simple-icons-react",
  "i-simple-icons-vuedotjs",
  "i-simple-icons-angular",
];
</script>
