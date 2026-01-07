<template>
  <div class="w-full bg-slate-50 py-12">
    <UCarousel
      v-slot="{ item }"
      loop
      dots
      :autoplay="{ delay: 5000 }"
      :items="images"
      :ui="{
        item: 'basis-full lg:basis-1/3 px-4',
        container: 'align-top',
      }"
    >
      <div
        class="relative w-full aspect-16/10 overflow-hidden rounded-xl bg-white shadow-xl border border-slate-100"
      >
        <img
          :src="item"
          class="w-full h-full object-cover object-top"
          alt="Project Screenshot"
        />
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[];
}>();
</script>
