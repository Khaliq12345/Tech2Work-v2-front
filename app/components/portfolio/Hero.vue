<template>
  <UPageHero
    class="hero"
    :headline="String($t('hero_headline'))"
    :title="String($t('hero_title'))"
    :description="String($t('hero_description'))"
    :ui="{
      headline: 'font-bold text-white tracking-widest',
      description: 'max-w-2xl mx-auto text-white text-md md:text-lg mt-4',
      links: 'mt-6 text-red-300',
      title: 'text-3xl md:text-5xl text-white',
    }"
  >
    <template #links>
      <CustomButton :title="$t('hero_cta')" />
    </template>
  </UPageHero>
</template>

<script setup lang="ts">
const { $t } = useI18n();
</script>

<style lang="css">
.hero {
  background-image: url("/portfolio.avif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero * {
  position: relative;
  z-index: 2;
}
</style>
