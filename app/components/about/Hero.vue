<template>
  <UPageHero
    orientation="vertical"
    :ui="{
      // Le titre s'adapte à la taille de l'écran
      title:
        'text-2xl md:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center',
      description: 'text-secondary text-center',
    }"
  >
    <template #title>
      <span>{{ $t("hero_line1") }}</span>
      <p>
        {{ $t("hero_line2") }}
        <span class="text-blue-400">{{ $t("hero_highlight") }}</span>
      </p>
    </template>
    <!-- Conteneur image -->
    <template #description>
      <ImageComponent src="/logo.png" alt="Company logo" />
    </template>
  </UPageHero>
</template>

<script setup lang="ts">
const { $t } = useI18n();
</script>
