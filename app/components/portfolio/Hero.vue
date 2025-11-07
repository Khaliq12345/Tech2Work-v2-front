<template>
    <UPageSection
        title="Portfolio"
        :description="`Home | ${projectTitle}`"
        :ui="{
            title: 'text-white text-3xl sm:text-4xl',
            description: 'text-secondary mt-2 max-w-2xl mx-auto',
        }"
        class="w-full bg-primary"
    />
</template>

<script setup lang="ts">
defineProps<{
    projectTitle: string;
}>();
</script>
