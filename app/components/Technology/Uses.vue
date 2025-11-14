<template>
    <UPageSection
        :title="title"
        :description="description"
        :ui="{
            root: 'bg-white text-gray-900 py-16',
            title: 'text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6',
            description: 'text-gray-600 text-sm sm:text-base text-center mb-12',
        }"
    >
        <UPageGrid
            class="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6 sm:mt-12"
        >
            <div
                v-for="(feature, index) in features"
                :key="index"
                class="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-lg hover:border-gray-300 transition-colors"
            >
                <!-- Icône -->
                <div class="mb-4">
                    <UIcon :name="feature.icon" class="h-8 w-8 text-blue-400" />
                </div>

                <!-- Contenu -->
                <div class="space-y-3">
                    <h3 class="text-sm font-semibold text-gray-900 sm:text-base">
                        {{ feature.title }}
                    </h3>
                    <p class="text-xs text-gray-600 leading-relaxed sm:text-xs">
                        {{ feature.description }}
                    </p>
                </div>
            </div>
        </UPageGrid>
    </UPageSection>
</template>

<script setup lang="ts">
import type { TechnologyFeature } from "~/types/technology";

defineProps<{
    title: string;
    description: string;
    features: TechnologyFeature[];
}>();
</script>
