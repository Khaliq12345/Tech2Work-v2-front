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
      {{ title }}
    </template>

    <!-- SLOT DESCRIPTION -->
    <template #description>
      {{ description }}
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
  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${props.image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const isOpen = ref(false);
</script>

<style scoped>
.hero {
  position: relative;
}
</style>
