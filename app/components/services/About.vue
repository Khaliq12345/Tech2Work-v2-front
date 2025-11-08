<template>
    <div class="py-8">
        <p class="text-gray-600">{{ description }}</p>
        <div class="mt-4 space-y-2" v-if="images">
            <img v-for="(image, index) in images" :key="index" :src="image" :alt="`Image ${index + 1}`" class="w-32 h-32 object-cover rounded" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    description: string;
    images: string[];
}>();
</script>
