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
const projects = [
    {
        title: "Fine Dining Restaurant Web Platform - Royal Cinnamon",
        description:
            "Experience exquisite dining at Royal Cinnamon—where refined ambiance and culinary artistry come together for a memorable meal.",
        link: "/portfolio/royal-cinnamon",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        imageMobile:
            "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
    {
        title: "E-Commerce Platform for Local Artisans",
        description:
            "Empowering small creators with a custom-built marketplace featuring smooth UX and modern design.",
        link: "/portfolio/artisans",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        imageMobile:
            "https://images.pexels.com/photos/3184437/pexels-photo-3184437.jpeg",
    },
    {
        title: "SaaS Dashboard for Business Analytics",
        description:
            "A modern dashboard to visualize KPIs and trends, built with intuitive UI and powerful charts.",
        link: "/portfolio/analytics-dashboard",
        image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg",
        imageMobile:
            "https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg",
    },
];
</script>
