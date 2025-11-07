<template>
    <div class="py-8">
        <p class="text-gray-600 mb-4">{{ description }}</p>
        <div class="flex flex-wrap gap-2" v-if="skills">
            <span v-for="skill in skills" :key="skill" class="px-3 py-1 bg-gray-100 text-sm rounded">{{ skill }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    description: string;
    skills: string[];
}>();
</script>
