<template>
  <UPageHero
    :headline="tag"
    :title="title"
    :ui="{
      headline:
        'inline-block bg-white text-gray-800 px-3 py-1 rounded text-sm font-medium mb-4 border border-gray-300',
      title:
        'text-left text-gray-900 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight',
      description: 'text-left text-gray-600 text-lg lg:text-xl',
      links: 'justify-start mt-8',
    }"
    orientation="horizontal"
  >
    <template #links>
      <CustomButton :title="$t('button1')" @click="isContactOpen = true" />
    </template>
  </UPageHero>
  <Contact v-model:open="isContactOpen" />
</template>

<script setup lang="ts">
const { $t } = useI18n();

defineProps<{
  title: string;
  tag: string;
}>();

const isContactOpen = ref(false);
</script>
