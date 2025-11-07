<template>
    <div class="relative py-20 sm:py-28 overflow-hidden">
        <!-- Image de fond -->
        <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Data analysis team meeting"
            class="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div class="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

        <!--  Contenu principal -->
        <UPageHero
            title="Showcasing Our Thought Leadership"
            description="
            Discover a wealth of knowledge curated by our worldwide team of experts and analysts, offering
            invaluable perspectives on emerging technology trends and business opportunities.
            "
            :links="links"
            headline="INSIGHTS"
            :ui="{
                headline: 'font-bold text-white',
                title: ' text-3xl sm:text-4xl md:text-5xl font-bold',
                description: 'max-w-2xl text-white mx-auto',
            }"
        />
    </div>
</template>

<script setup lang="ts">
const links = ref([
    {
        label: "CONSULT OUR EXPERTS",
        to: "/docs/getting-started",
        trailingIcon: "i-lucide-arrow-right",
        color: "info",
        variant: "solid",
        size: "xl",
    },
]);
</script>
