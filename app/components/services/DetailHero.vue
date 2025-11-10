<template>
  <UPageHero
    :headline="tag"
    :title="title"
    :links="[
      {
        label: $t('button1'),
        color: 'primary',
        size: 'lg',
        class:
          'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700',
      },
    ]"
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
  </UPageHero>
</template>

<script setup lang="ts">
const { $t } = useI18n();

defineProps<{
  title: string;
  tag: string;
}>();
</script>
