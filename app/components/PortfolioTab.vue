<template>
    <div class="w-full">
        <UTabs
            :items="items"
            variant="link"
            :ui="{ trigger: 'grow' }"
            class="gap-4 w-full"
            :orientation="orientation"
        >
            <template #all>
                <PortfolioItems :items="displayedProjects('all')" />
            </template>
            <template #web>
                <PortfolioItems :items="displayedProjects('web')" />
            </template>
            <template #seo>
                <PortfolioItems :items="displayedProjects('seo')" />
            </template>
            <template #branding>
                <PortfolioItems :items="displayedProjects('branding')" />
            </template>
            <template #media>
                <PortfolioItems :items="displayedProjects('media')" />
            </template>
            <template #mobile>
                <PortfolioItems :items="displayedProjects('mobile')" />
            </template>
        </UTabs>
    </div>
</template>

<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

//  Orientation responsive
const orientation = ref<"horizontal" | "vertical">("horizontal");

const handleResize = () => {
    orientation.value = window.innerWidth < 768 ? "vertical" : "horizontal";
};

onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});
const items = [
    {
        label: "All",
        description:
            "Make changes to your account here. Click save when you're done.",
        icon: "heroicons:wallet",
        slot: "all" as const,
    },
    {
        label: "Web Development",
        description:
            "Change your password here. After saving, you'll be logged out.",
        icon: "heroicons:computer-desktop",
        slot: "web" as const,
    },
    {
        label: "SEO / Analysis",
        description:
            "Make changes to your account here. Click save when you're done.",
        icon: "heroicons:chart-bar",
        slot: "seo" as const,
    },
    {
        label: "Branding",
        description:
            "Change your password here. After saving, you'll be logged out.",
        icon: "heroicons:pencil",
        slot: "branding" as const,
    },
    {
        label: "Media Production",
        description:
            "Make changes to your account here. Click save when you're done.",
        icon: "heroicons:photo",
        slot: "media" as const,
    },
    {
        label: "Mobile Apps",
        description:
            "Change your password here. After saving, you'll be logged out.",
        icon: "heroicons:device-phone-mobile",
        slot: "mobile" as const,
    },
] satisfies TabsItem[];

const projectsByCategory = {
    web: [
        {
            title: "Web Project 1",
            image: "https://cdn.pixabay.com/photo/2020/02/24/04/26/web-design-4875186_640.jpg",
            to: "#",
        },
        {
            title: "Web Project 2",
            image: "https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784_640.jpg",
            to: "#",
        },
        {
            title: "Web Project 3",
            image: "https://cdn.pixabay.com/photo/2016/08/20/21/35/web-1608605_640.png",
            to: "#",
        },
        {
            title: "Web Project 4",
            image: "https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_640.jpg",
            to: "#",
        },
    ],
    seo: [
        {
            title: "SEO Project 1",
            image: "https://cdn.pixabay.com/photo/2017/01/21/04/51/seo-1996405_640.jpg",
            to: "#",
        },
        {
            title: "SEO Project 2",
            image: "https://cdn.pixabay.com/photo/2016/08/18/21/07/seo-1603927_640.png",
            to: "#",
        },
        {
            title: "SEO Project 3",
            image: "https://cdn.pixabay.com/photo/2016/08/24/06/17/seo-1616306_640.png",
            to: "#",
        },
        {
            title: "SEO Project 4",
            image: "https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_640.jpg",
            to: "#",
        },
    ],
    branding: [
        {
            title: "Branding Project 1",
            image: "https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784_640.jpg",
            to: "#",
        },
        {
            title: "Branding Project 2",
            image: "https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_640.jpg",
            to: "#",
        },
        {
            title: "Branding Project 3",
            image: "https://cdn.pixabay.com/photo/2020/02/24/04/26/web-design-4875186_640.jpg",
            to: "#",
        },
        {
            title: "Branding Project 4",
            image: "https://cdn.pixabay.com/photo/2016/08/20/21/35/web-1608605_640.png",
            to: "#",
        },
    ],
    media: [
        {
            title: "Media Project 1",
            image: "https://cdn.pixabay.com/photo/2016/08/24/06/17/seo-1616306_640.png",
            to: "#",
        },
        {
            title: "Media Project 2",
            image: "https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_640.jpg",
            to: "#",
        },
        {
            title: "Media Project 3",
            image: "https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_640.jpg",
            to: "#",
        },
        {
            title: "Media Project 4",
            image: "https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784_640.jpg",
            to: "#",
        },
    ],
    mobile: [
        {
            title: "Mobile Project 1",
            image: "https://cdn.pixabay.com/photo/2016/11/24/20/48/programming-1857236_640.jpg",
            to: "#",
        },
        {
            title: "Mobile Project 2",
            image: "https://cdn.pixabay.com/photo/2016/08/20/21/35/web-1608605_640.png",
            to: "#",
        },
        {
            title: "Mobile Project 3",
            image: "https://cdn.pixabay.com/photo/2020/02/24/04/26/web-design-4875186_640.jpg",
            to: "#",
        },
        {
            title: "Mobile Project 4",
            image: "https://cdn.pixabay.com/photo/2017/01/21/04/51/seo-1996405_640.jpg",
            to: "#",
        },
    ],
};

const displayedProjects = (tab: string) => {
    if (tab === "all") {
        return [
            ...projectsByCategory.web,
            ...projectsByCategory.seo,
            ...projectsByCategory.branding,
            ...projectsByCategory.media,
            ...projectsByCategory.mobile,
        ];
    }
    return projectsByCategory[tab] || [];
};
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
