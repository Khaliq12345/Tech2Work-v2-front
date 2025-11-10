<template>
  <div class="grid gap-6 p-2 md:p-12 grid-cols-1 lg:grid-cols-2">
    <PortfolioCard
      v-for="(item, index) in projects"
      :key="index"
      :title="item.title"
      :description="item.description"
      :link="item.link"
      :image="item.image"
      :image-mobile="item.imageMobile"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  projects: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
