<template>
  <UPageHero class="hero" :ui="ui" :style="heroStyle">
    <!-- SLOT HEADLINE -->
    <template #headline>
      <div class="flex items-center justify-center gap-2">
        <img :src="logo" alt="logo" class="h-16 w-auto" />
      </div>
    </template>
    <!-- SLOT TITLE -->
    <template #title>
      <span class="hero-text-box">{{ title }}</span>
    </template>
    <!-- SLOT DESCRIPTION -->
    <template #description>
      <span class="hero-text-box">{{ description }}</span>
    </template>
    <!-- SLOT LINKS -->
    <template #links>
      <CustomButton title="Contact Us" @click="isOpen = true"></CustomButton>
    </template>
  </UPageHero>
  <!-- MODAL CONTACT -->
  <Contact v-model:open="isOpen" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  logo: string;
  title: string;
  description: string;
  image: string;
}>();

const ui = {
  headline: "text-white tracking-widest",
  title: "text-white text-2xl md:text-3xl",
  description: "text-md md:text-lg mx-auto text-bold text-white/90 mt-4",
  links: "text-primary mt-6",
};

const heroStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: "800px 800px",
  backgroundPosition: "center",
}));

const isOpen = ref(false);
</script>

<style scoped>
.hero {
  position: relative;
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

.hero > * {
  position: relative;
  z-index: 2;
}

.hero-text-box {
  display: inline-block;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
}
</style>
