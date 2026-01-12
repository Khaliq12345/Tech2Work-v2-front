<template>
  <div class="relative overflow-hidden">
    <!-- Background with overlay for better text readability -->
    <div
      class="absolute inset-0 bg-center bg-contain"
      :style="{
        backgroundImage: `url('/industry/cover.png')`,
      }"
    >
      <!-- Dark overlay gradient for text contrast -->
      <div
        class="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"
      ></div>
    </div>

    <UPageCTA
      :title="title"
      :description="description"
      orientation="vertical"
      variant="naked"
      class="relative z-1"
      :ui="{
        container: 'px-6 py-16 sm:px-12 sm:py-20 lg:py-24',
        title:
          'text-2xl sm:text-4xl lg:text-5xl font-bold text-white !text-center leading-tight',
        description:
          'text-base sm:text-lg lg:text-xl text-white/90 !text-center max-w-2xl mx-auto leading-relaxed',
        links: 'mt-8 sm:mt-10 !justify-center',
      }"
    >
      <template #links>
        <CustomButton :title="$t('button1')" size="lg" @click="openContact" />
      </template>
    </UPageCTA>

    <Contact v-model:open="isOpen" />
  </div>
</template>

<script setup lang="ts">
const { $t } = useI18n();

const props = defineProps<{
  title: string;
  description: string;
}>();

const isOpen = ref(false);

function openContact() {
  isOpen.value = true;
}
</script>
