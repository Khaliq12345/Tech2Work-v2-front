<template>
    <div class="relative overflow-hidden">
        <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Data analysis team meeting"
            class="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Contenu principal -->
        <UPageHero
            headline="INSIGHTS"
            title="Showcasing Our Thought Leadership"
            description="Discover a wealth of knowledge curated by our worldwide team of experts and analysts, offering invaluable perspectives on emerging technology trends and business opportunities."
            :links="links"
            :ui="{
                wrapper: 'relative z-10 text-center',
                headline: 'font-bold text-white tracking-widest',
                title: 'text-3xl sm:text-4xl md:text-5xl font-bold text-white',
                description: 'max-w-2xl mx-auto text-white/90 mt-4',
                links: 'text-primary mt-6',
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
