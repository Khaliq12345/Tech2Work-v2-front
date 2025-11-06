<template>
    <UPageGrid
        class="gap-6"
        :ui="{
            base: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
        }"
    >
        <UCard
            v-for="(image, index) in images"
            :key="index"
            class="overflow-hidden p-0 hover:scale-[1.02] transition-transform duration-300"
        >
            <img
                :src="image"
                alt="Project image"
                class="w-full h-full object-cover rounded-lg"
            />
        </UCard>
    </UPageGrid>
</template>

<script setup lang="ts">
defineProps<{
    images: string[];
}>();
</script>
