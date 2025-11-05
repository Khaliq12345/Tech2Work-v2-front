<template>
    <UContainer class="py-16 text-center">
        <!-- TABS -->
        <div class="flex flex-wrap justify-center gap-4 mb-10">
            <button
                v-for="tab in tabs"
                :key="tab.key"
                @click="selected = tab.key"
                class="px-5 py-2 rounded-full font-medium transition-all duration-300"
                :class="[
                    selected === tab.key
                        ? 'bg-primary text-white shadow-md scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                ]"
            >
                {{ tab.label }}
            </button>
        </div>

        <!-- PROJECT GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <transition-group name="fade-up" tag="div" class="contents">
                <a
                    v-for="(project, index) in displayedProjects"
                    :key="project.title + index"
                    :href="project.link"
                    target="_blank"
                    class="relative group block cursor-pointer"
                >
                    <UCard
                        class="overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                    >
                        <!-- Image -->
                        <img
                            :src="project.image"
                            :alt="project.title"
                            class="w-full h-56 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                        />

                        <!-- Overlay avec titre -->
                        <div
                            class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >
                            <UCard
                                class="bg-white/90 px-3 py-2 text-sm font-semibold text-gray-800 shadow-md transform translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                            >
                                {{ project.title }}
                            </UCard>
                        </div>
                    </UCard>
                </a>
            </transition-group>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const tabs = [
    { label: "All", key: "all" },
    { label: "Web Development", key: "web" },
    { label: "SEO / Analysis", key: "seo" },
    { label: "Branding", key: "branding" },
    { label: "Media Production", key: "media" },
    { label: "Mobile Apps", key: "mobile" },
];

const projectsByCategory = {
    web: [
        {
            title: "Web Project 1",
            image: "https://cdn.pixabay.com/photo/2020/02/24/04/26/web-design-4875186_640.jpg",
            link: "#",
        },
        {
            title: "Web Project 2",
            image: "https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784_640.jpg",
            link: "#",
        },
        {
            title: "Web Project 3",
            image: "https://cdn.pixabay.com/photo/2016/08/20/21/35/web-1608605_640.png",
            link: "#",
        },
        {
            title: "Web Project 4",
            image: "https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_640.jpg",
            link: "#",
        },
    ],
    seo: [
        {
            title: "SEO Project 1",
            image: "https://cdn.pixabay.com/photo/2017/01/21/04/51/seo-1996405_640.jpg",
            link: "#",
        },
        {
            title: "SEO Project 2",
            image: "https://cdn.pixabay.com/photo/2016/08/18/21/07/seo-1603927_640.png",
            link: "#",
        },
        {
            title: "SEO Project 3",
            image: "https://cdn.pixabay.com/photo/2016/08/24/06/17/seo-1616306_640.png",
            link: "#",
        },
        {
            title: "SEO Project 4",
            image: "https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_640.jpg",
            link: "#",
        },
    ],
    branding: [
        {
            title: "Branding Project 1",
            image: "https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784_640.jpg",
            link: "#",
        },
        {
            title: "Branding Project 2",
            image: "https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_640.jpg",
            link: "#",
        },
        {
            title: "Branding Project 3",
            image: "https://cdn.pixabay.com/photo/2020/02/24/04/26/web-design-4875186_640.jpg",
            link: "#",
        },
        {
            title: "Branding Project 4",
            image: "https://cdn.pixabay.com/photo/2016/08/20/21/35/web-1608605_640.png",
            link: "#",
        },
    ],
    media: [
        {
            title: "Media Project 1",
            image: "https://cdn.pixabay.com/photo/2016/08/24/06/17/seo-1616306_640.png",
            link: "#",
        },
        {
            title: "Media Project 2",
            image: "https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_640.jpg",
            link: "#",
        },
        {
            title: "Media Project 3",
            image: "https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_640.jpg",
            link: "#",
        },
        {
            title: "Media Project 4",
            image: "https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784_640.jpg",
            link: "#",
        },
    ],
    mobile: [
        {
            title: "Mobile Project 1",
            image: "https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_640.jpg",
            link: "#",
        },
        {
            title: "Mobile Project 2",
            image: "https://cdn.pixabay.com/photo/2016/08/20/21/35/web-1608605_640.png",
            link: "#",
        },
        {
            title: "Mobile Project 3",
            image: "https://cdn.pixabay.com/photo/2020/02/24/04/26/web-design-4875186_640.jpg",
            link: "#",
        },
        {
            title: "Mobile Project 4",
            image: "https://cdn.pixabay.com/photo/2017/01/21/04/51/seo-1996405_640.jpg",
            link: "#",
        },
    ],
};

const selected = ref("all");

const displayedProjects = computed(() => {
    if (selected.value === "all") {
        return [
            ...projectsByCategory.web,
            ...projectsByCategory.seo,
            ...projectsByCategory.branding,
            ...projectsByCategory.media,
            ...projectsByCategory.mobile,
        ];
    }
    return projectsByCategory[selected.value] || [];
});
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
    transition: all 0.5s ease;
}
.fade-up-enter-from {
    opacity: 0;
    transform: translateY(15px);
}
.fade-up-enter-to {
    opacity: 1;
    transform: translateY(0);
}
</style>
