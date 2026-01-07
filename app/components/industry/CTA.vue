<template>
  <div
    class="relative bg-cover bg-center py-16 px-6 sm:py-20 sm:px-12"
    :style="{
      backgroundImage: `url('https://www.azumuta.com/wp-content/uploads/2024/05/petrochemical-industry-with-twilight-sky-2-1536x1024-1.jpeg')`,
    }"
  >
    <UPageCTA
      :title="title"
      :description="description"
      orientation="vertical"
      variant="soft"
      :ui="{
        root: 'text-center',
        title: 'text-2xl md:text-3xl font-bold',
        description: 'text-md text-white md:text-xl mt-4 max-w-3xl mx-auto',
        links: 'mt-8',
      }"
    >
      <template #links>
        <CustomButton title="Contact Us" @click="openContact"></CustomButton>
      </template>
    </UPageCTA>

    <Contact v-model:open="isOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: string;
  description: string;
}>();

const isOpen = ref(false);

function openContact() {
  isOpen.value = true;
}
</script>
