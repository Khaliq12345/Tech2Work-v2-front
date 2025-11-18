<template>
    <UPageSection :ui="{ root: 'bg-white' }">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- LEFT : TITLE -->
            <h2
                class="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
            >
                {{ title }}
            </h2>

            <!-- RIGHT : DESCRIPTION -->
            <div
                class="flex flex-col gap-4 max-w-xl text-gray-700 text-base sm:text-lg leading-relaxed"
            >
                <p v-for="(text, index) in normalizedDescription" :key="index">
                    {{ text }}
                </p>
            </div>
        </div>
    </UPageSection>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string | string[];
}>();

// Normalisation : permet d’accepter un string OU un array
const normalizedDescription = Array.isArray(props.description)
    ? props.description
    : [props.description];
</script>
