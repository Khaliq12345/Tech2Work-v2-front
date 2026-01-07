<template>
    <UPageSection
        class="values-section"
        headline="Our values"
        title="What makes us special"
        description="Choosing the right partners and competencies can be a make or break project. Our core beliefs speak for themselves."
        variant="naked"
        :features="values"
        :ui="{
            container: 'py-16 sm:py-24 lg:py-32',
            wrapper: 'max-w-6xl mx-auto px-4 sm:px-6',
            headline: 'text-primary text-sm font-semibold',
            title: 'text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900',
            features: 'text-sm',
            description: 'text-sm',
        }"
    >
        <ImageComponent src="/about/about_2.png" />
    </UPageSection>
</template>

<script setup lang="ts">
const values = [
    {
        title: "Software projects should not be frustrating.",
        description:
            "We believe that with communication, testing, and active monitoring we can deliver stable, user-friendly software.",
    },
    {
        title: "Delivered work is what counts.",
        description:
            "Our solutions must speak for themselves and create measurable value for our clients from day one.",
    },
    {
        title: "Tight collaboration with the team.",
        description:
            "We operate as an extension of your team, keeping the bigger picture in mind while staying pragmatic.",
    },
    {
        title: "Flexibility is a priority.",
        description:
            "Priorities change fast. Share what you need most right now and we'll adapt to make it happen.",
    },
];
</script>
