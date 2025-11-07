<template>
    <UBlogPosts :ui="{ root: 'py-16' }">
        <UBlogPost
            v-for="(project, index) in projects"
            :key="index"
            :to="project.to"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :badge="project.badge"
            orientation="vertical"
            :ui="{
                root: 'relative group overflow-hidden rounded-xl bg-white shadow-lg',
                header: 'relative aspect-[16/9] overflow-hidden',
                image: 'w-full h-full object-cover transition-transform duration-300 group-hover:scale-105',
                meta: 'absolute top-4 left-4 z-10',
                badge: 'hidden',
                body: 'p-6 flex flex-col gap-3',
                title: '!text-black text-lg font-semibold leading-snug',
                description: 'text-gray-600 text-sm',
            }"
        >
            <template #badge>
                <span
                    class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black shadow-sm"
                >
                    <span class="size-2.5 rounded-full bg-yellow-400"></span>
                    {{ project.badge }}
                </span>
            </template>

            <template v-if="project.description" #description>
                <p class="text-gray-600 text-sm dark:text-gray-400">
                    {{ project.description }}
                </p>
            </template>
        </UBlogPost>
    </UBlogPosts>
</template>

<script setup lang="ts">
interface Project {
    title: string;
    description?: string;
    image: string;
    badge: string;
    to?: string;
}

const props = defineProps<{ projects: Project[] }>();

const projects = computed(() => props.projects);
</script>
