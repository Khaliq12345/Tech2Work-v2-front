<template>
  <UCarousel
    v-slot="{ item }"
    loop
    arrows
    dots
    :autoplay="{ delay: 2000 }"
    :items="images"
    :ui="{ item: 'basis-1/3' }"
  >
    <img :src="item" width="234" height="234" class="rounded-lg" />
  </UCarousel>
</template>

<script setup lang="ts">
defineProps<{
  images: string[];
}>();
</script>
