<template>
    <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        :autoplay="{ delay: 2000 }"
        :items="images"
        :ui="{ item: 'basis-1/1 lg:basis-1/3' }"
    >
        <div class="w-full flex items-center justify-center p-2 md:p-4 lg:p-6">
            <img
                :src="item"
                class="rounded-lg shadow-md object-contain w-auto"
                :style="{
                    maxHeight: maxHeight + 'px',
                    minHeight: minHeight + 'px'
                }"
            />
        </div>
    </UCarousel>
</template>

<script setup lang="ts">
defineProps<{
    images: string[];
    maxHeight: number;
    minHeight: number;
}>();
</script>
