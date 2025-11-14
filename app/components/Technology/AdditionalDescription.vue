<template>
    <UPageSection
        :title="title"
        :ui="{
            root: 'bg-white py-16 px-4',
            container:
                'max-w-7xl mx-auto border border-gray-200 rounded-lg p-8 sm:p-12 lg:p-16',
            title: 'text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold mb-8',
            description:
                'text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed',
        }"
    >
        <template #description>
            {{ description }}
        </template>
    </UPageSection>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
}>();
</script>
