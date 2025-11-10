<template>
  <UPageCard
    variant="ghost"
    class="shadow-none rounded-3xl"
    :ui="{
      body: 'p-6 sm:p-8',
    }"
  >
    <div
      class="flex flex-col items-center lg:items-start gap-6 sm:gap-8 lg:gap-12"
      :class="reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
      <ImageComponent
        :src="image"
        :alt="`${title}`"
        class="w-full max-w-xs lg:max-w-sm"
      />

      <div class="flex-1 space-y-4 sm:space-y-6 text-left">
        <h3
          class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight"
        >
          {{ title }}
        </h3>

        <p
          class="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line"
        >
          {{ description }}
        </p>

        <p class="text-gray-900 text-sm sm:text-base font-semibold">
          Want to discuss your project with our experts? Click the button below,
          and Learn More.
        </p>

        <CustomButton
          title="Learn More"
          class="px-6 py-3 text-base sm:px-4 sm:py-2 sm:text-sm"
        />
      </div>
    </div>
  </UPageCard>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}>();
</script>
