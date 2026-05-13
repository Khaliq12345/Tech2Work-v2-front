<template>
  <div class="max-w-7xl mx-auto space-y-3 lg:py-20 px-4 md:px-8">
    <PortfolioCard
      v-for="(item, index) in projects"
      :key="index"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{
        opacity: 1,
        y: 0,
        transition: { duration: 1000, delay: 100 * (index % 3) },
      }"
      :title="item.title"
      :description="item.description"
      :link="item.link"
      :image="item.image"
      :image-mobile="item.imageMobile"
      :reverse="index % 2 !== 0"
      :index="index + 1"
    />
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  imageMobile?: string;
}

defineProps<{
  projects: Project[];
}>();
</script>
