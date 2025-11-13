<template>
    <UPageSection
        :ui="{
            root: 'bg-white',
            container: 'px-4 sm:px-16 py-16',
            wrapper: 'max-w-4xl mx-auto',
            title: 'text-gray-900 text-base sm:text-xl lg:text-2xl font-normal text-center leading-relaxed',
            description:
                'text-gray-600 text-sm sm:text-base lg:text-lg mt-8 text-center leading-relaxed',
        }"
    >
        <template #title>
            {{ descriptionV1 }}
        </template>

        <template #description>
            {{ descriptionV2 }}
        </template>
    </UPageSection>
</template>

<script setup lang="ts">
defineProps<{
    descriptionV1: string;
    descriptionV2: string;
}>();
</script>

<style scoped>
.radial-top-halo {
    background: linear-gradient(
        to bottom,
        rgba(30, 58, 138, 0.4) 0%,
        rgba(30, 58, 138, 0.2) 30%,
        transparent 70%
    );
}
</style>
