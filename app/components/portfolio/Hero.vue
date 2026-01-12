<template>
  <UPageHero
    class="hero"
    :headline="String($t('hero_headline'))"
    :title="String($t('hero_title'))"
    :description="String($t('hero_description'))"
    :ui="{
      headline: 'font-bold text-white tracking-widest hero-text',
      description:
        'max-w-2xl mx-auto text-white text-md md:text-lg mt-4 hero-text-description',
      links: 'mt-6 text-red-300',
      title: 'text-3xl md:text-5xl text-white hero-text-title',
    }"
  >
    <template #links>
      <CustomButton :title="$t('hero_cta')" @click="isContactOpen = true" />
    </template>
  </UPageHero>
  <Contact v-model:open="isContactOpen" />
</template>

<script setup lang="ts">
const { $t } = useI18n();
const isContactOpen = ref(false);
</script>

<style lang="css">
.hero {
  background-image: url("/portfolio/cover.png");
  background-size: contain;
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
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.hero * {
  position: relative;
  z-index: 2;
}

/* Text shadows for better readability */
.hero-text {
  text-shadow:
    2px 2px 8px rgba(0, 0, 0, 0.9),
    0 0 20px rgba(0, 0, 0, 0.7);
}

.hero-text-title {
  text-shadow:
    3px 3px 10px rgba(0, 0, 0, 0.9),
    0 0 25px rgba(0, 0, 0, 0.8);
  font-weight: 800;
}

.hero-text-description {
  text-shadow:
    2px 2px 6px rgba(0, 0, 0, 0.9),
    0 0 15px rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(4px);
}
</style>
