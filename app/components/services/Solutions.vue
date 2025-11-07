<template>
    <div class="py-8">
        <div class="space-y-6" v-if="solutions">
            <div v-for="solution in solutions" :key="solution.title" class="p-4 border rounded">
                <h3 class="text-lg font-bold">{{ solution.title }}</h3>
                <p class="text-gray-600 mt-1">{{ solution.description }}</p>
                <p class="text-sm mt-2">{{ solution.content }}</p>
                <img :src="solution.image" :alt="solution.title" class="w-24 h-24 object-cover rounded mt-2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Solution {
    title: string;
    description: string;
    content: string;
    image: string;
}

defineProps<{
    solutions: Solution[];
}>();
</script>
