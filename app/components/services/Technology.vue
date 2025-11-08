<template>
    <div class="py-8">
        <h3 class="text-xl font-bold mb-4">Technologies</h3>
        <div class="grid grid-cols-4 gap-2">
            <div v-for="i in 8" :key="i" class="p-2 border rounded text-center">
                <div class="w-8 h-8 bg-gray-200 rounded mx-auto mb-1"></div>
                <span class="text-xs">Tech {{ i }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Aucune props pour l'instant
</script>
