<template>
  <UPageSection>
    <div class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="hidden md:block"></div>
        <p
          class="text-gray-600 text-sm leading-loose tracking-wide text-center md:text-right lg:text-lg font-normal"
        >
          {{ description }}
        </p>
      </div>
      <div class="grid md:grid-cols-10 gap-6">
        <img
          :src="images[0]"
          class="md:col-span-5 w-full h-full object-cover rounded-lg"
        />
        <img
          :src="images[1]"
          class="hidden md:flex md:col-span-5 w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const { $t } = useI18n();

defineProps<{
  description: string;
  images: string[];
}>();
</script>
