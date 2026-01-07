<template>
  <UPageSection class="bg-white">
    <UPageCTA
      :title="title"
      :description="description"
      variant="naked"
      orientation="horizontal"
      :ui="{
        title:
          'text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 sm:text-left text-center',
        description:
          'text-gray-600 mt-4 text-sm sm:text-base sm:text-left text-center',
        container:
          'flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 sm:gap-12',
        links: 'flex justify-center lg:justify-start mt-6',
      }"
    >
      <template #links>
        <CustomButton
          :title="buttonLabel"
          size="xs"
          @click="showContact = true"
        />
      </template>

      <ImageComponent :src="imageSrc" :alt="imageAlt" />
    </UPageCTA>
  </UPageSection>

  <!-- Contact Slideover -->
  <Contact v-model:open="showContact" />
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  buttonLabel: string;
  imageSrc: string;
  imageAlt: string;
}>();

const showContact = ref(false);
</script>
