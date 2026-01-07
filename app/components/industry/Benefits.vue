<template>
  <UPageSection
    :title="title"
    :ui="{
      title:
        'text-2xl md:text-3xl text-primary font-bold text-center mb-6 md:mb-10',
      wrapper: 'max-w-6xl mx-auto',
    }"
  >
    <UMarquee :repeat="4" pause-on-hover :overlay="false">
      <div class="flex gap-4 md:gap-8">
        <UCard
          v-for="(item, index) in items"
          :key="index"
          :class="[
            'w-72 md:w-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-md',
            item.style ?? defaultStyle(index),
          ]"
          :ui="{
            body: 'p-4 md:p-8',
            header: 'py-2 md:py-4',
            footer: 'p-0',
          }"
        >
          <template #header>
            <h3 class="text-md md:text-2xl font-semibold mb-2 md:mb-4">
              {{ item.title }}
            </h3>
          </template>

          <p class="text-sm md:text-base leading-relaxed">
            {{ item.description }}
          </p>
        </UCard>
      </div>
    </UMarquee>
  </UPageSection>
</template>

<script setup lang="ts">
interface BenefitItem {
  title: string;
  description: string;
  style?: string;
}

const props = defineProps<{
  title: string;
  items: BenefitItem[];
}>();

const defaultStyle = (i: number) => {
  const gradients = [
    "bg-gradient-to-r from-indigo-500 via-red-700 to-orange-400 text-white",
    "bg-black text-white",
    "bg-gray-500 text-black",
    "bg-gradient-to-r from-indigo-900 via-red-700 to-orange-400 text-white",
  ];

  return gradients[i % gradients.length];
};
</script>
