<template>
    <div class="py-8">
        <h1 class="text-3xl font-bold">{{ title }}</h1>
        <p class="text-gray-600 mt-2">{{ tag }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    tag: string;
}>();
</script>