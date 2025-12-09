<template>
    <h2 class="text-center py-16 text-xl font-semibold text-black lg:text-2xl">
        {{ $t("portfolio_title") }}
    </h2>

    <UBlogPosts :ui="{ root: 'pb-16' }">
        <UBlogPost
            v-for="(project, index) in projects"
            :key="index"
            :to="project.link"
            :title="project.title"
            :image="project.image"
            :slug="project.slug"
            orientation="vertical"
            :ui="{
                root: 'relative group overflow-hidden rounded-xl bg-white shadow-lg',
                header: 'relative aspect-[16/9] overflow-hidden',
                image: 'w-full h-full object-cover transition-transform duration-300 group-hover:scale-105',
                badge: 'hidden',
                body: 'p-6 flex flex-col gap-3',
                title: '!text-black text-base sm:text-lg font-semibold leading-snug',
                description: 'text-gray-600 text-sm',
            }"
        >
        </UBlogPost>
    </UBlogPosts>
</template>

<script setup lang="ts">
const { $getLocale, $t } = useI18n();
const locale = computed(() => $getLocale());

const props = defineProps<{
    slug?: string;
}>();

// Charger tous les portfolios
const { data: portfolios } = await useAsyncData(
    `projects-${props.slug ?? "all"}`,
    () => queryCollection("portfolios").all(),
);

// Reconstruire les projets + filtrer par slug
const projects = computed(() => {
    if (!portfolios.value) return [];

    const results = portfolios.value.map((portfolio) => {
        const data = portfolio.meta[locale.value];

        return {
            title: data.title,
            link: data.link,
            image: data.galleries?.[0],
            imageMobile: data.imageMobile,
            slug: data.slug,
        };
    });

    if (props.slug) {
        return results.filter((p) => p.slug === props.slug);
    }

    return results;
});
</script>
