<template>
    <div class="grid gap-6 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Portfolio2Card
            v-for="(item, index) in projects"
            :key="index"
            :title="item.title"
            :description="item.description"
            :link="item.link"
            :image="item.image"
            :image-mobile="item.imageMobile"
        />
    </div>
</template>

<script setup lang="ts">
defineProps({
    projects: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>
