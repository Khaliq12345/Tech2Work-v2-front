<template>
    <UPageSection
        :ui="{
            root: 'bg-white',
            container: 'px-4 sm:px-8 lg:px-16 py-20',
            wrapper: 'max-w-7xl mx-auto',
            title: 'text-2xl sm:text-4xl font-semibold text-gray-900 text-center mb-12',
        }"
    >
        <!-- TITLE -->
        <template #title>
            {{ title }}
        </template>

        <!-- GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <UCard
                v-for="solution in solutions"
                :key="solution.title"
                variant="outline"
                :ui="{
                    header: 'p-6 flex items-center gap-4',
                    body: 'px-6',
                    footer: 'hidden',
                }"
            >
                <!-- HEADER -->
                <template #header>
                    <div
                        class="w-20 h-20 p-4 rounded-full flex items-center justify-center shadow-lg"
                    >
                        <UIcon
                            :name="solution.icon"
                            class="text-primary w-12 h-12"
                        />
                    </div>

                    <h3 class="text-gray-900 text-xl font-semibold">
                        {{ solution.title }}
                    </h3>
                </template>

                <!-- BODY -->
                <p class="text-gray-700 leading-relaxed">
                    {{ solution.description }}
                </p>
            </UCard>
        </div>
    </UPageSection>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    solutions: {
        icon: string;
        title: string;
        description: string;
    }[];
}>();
</script>
