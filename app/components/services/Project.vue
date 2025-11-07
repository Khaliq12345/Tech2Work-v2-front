<template>
    <div class="py-8">
        <h3 class="text-xl font-bold mb-4">Nos Projets</h3>
        <div class="space-y-2" v-if="projects">
            <div v-for="project in projects" :key="project.title" class="p-3 border rounded">
                <h4 class="font-semibold">{{ project.title }}</h4>
                <img :src="project.image" :alt="project.title" class="w-20 h-20 object-cover rounded mt-2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Project {
    title: string;
    image: string;
}

defineProps<{
    projects: Project[];
}>();
</script>
