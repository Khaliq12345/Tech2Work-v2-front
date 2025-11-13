<template>
    <UPageSection
        :title="title"
        :description="description"
        :ui="{
            root: 'bg-gray-100 text-gray-900 py-16',
            title: 'text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold text-center',
            description:
                'text-gray-600 text-sm sm:text-base text-center max-w-3xl mx-auto',
        }"
    >
        <div class="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <UTimeline
                :items="steps.map(({ phase, ...rest }) => ({ ...rest, date: phase }))"
                color="primary"
                :ui="{
                    item: 'even:flex-row-reverse even:text-right md:even:-translate-x-[calc(100%-2rem)]',
                    title: 'text-gray-900 font-semibold text-base sm:text-lg',
                    description:
                        'text-gray-600 text-sm sm:text-base break-words',
                    date: 'text-blue-600 text-sm font-medium mb-2',
                    indicator:
                        'text-blue-600 bg-blue-600/10 p-2 rounded-full shrink-0',
                    wrapper: 'min-w-0 pr-2 md:pr-0',
                }"
                class="md:translate-x-[calc(50%-1rem)] max-w-4xl mx-auto"
            />
        </div>
    </UPageSection>
</template>

<script setup lang="ts">
import type { TechnologyProcessStep } from "~/types/technology";

defineProps<{
    title: string;
    description: string;
    steps: TechnologyProcessStep[];
}>();
</script>
