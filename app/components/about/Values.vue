<template>
    <UPageSection
        class="values-section"
        headline="Our values"
        title="What makes us special"
        description="Choosing the right partners and competencies can be a make or break project. Our core beliefs speak for themselves."
        variant="naked"
        :ui="{
            container: 'py-16 sm:py-24 lg:py-32',
            wrapper: 'max-w-6xl mx-auto px-4 sm:px-6',
            headline: 'text-primary text-sm font-semibold',
            title: 'text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900',
            description: 'text-base sm:text-lg text-gray-600 mt-4 max-w-3xl',
        }"
    >
        <UPageCard
            class="values-card"
            variant="naked"
            orientation="vertical"
            :ui="{
                body: 'grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)] items-center p-6 sm:p-10'
            }"
        >
            <template #body>
                <div class="space-y-6 text-gray-700">
                    <div
                        v-for="value in values"
                        :key="value.title"
                        class="value-item"
                    >
                        <p class="font-semibold text-gray-900">
                            {{ value.title }}
                        </p>
                        <p class="mt-2 text-sm sm:text-base leading-relaxed text-gray-600">
                            {{ value.description }}
                        </p>
                    </div>
                </div>

                <div class="values-illustration">
                    <ImageComponent src="/about/about_1.png" class="w-full max-w-xs sm:max-w-sm" />
                </div>
            </template>
        </UPageCard>
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
