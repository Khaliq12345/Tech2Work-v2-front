<template>
    <UPageSection
        title="Our Python Development Process"
        description="A structured, transparent workflow that keeps your project moving smoothly from discovery to ongoing support."
        :ui="{
            root: 'bg-black text-white py-16',
            title: 'text-white text-xl sm:text-2xl lg:text-3xl font-bold text-center',
            description:
                'text-gray-300 text-sm sm:text-base text-center max-w-3xl mx-auto',
        }"
    >
        <div class="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <UTimeline
                :items="timelineItems"
                color="primary"
                :ui="{
                    item: 'even:flex-row-reverse even:text-right md:even:-translate-x-[calc(100%-2rem)]',
                    title: 'text-white font-semibold text-base sm:text-lg',
                    description:
                        'text-gray-400 text-sm sm:text-base break-words',
                    date: 'text-blue-400 text-sm font-medium mb-2',
                    indicator:
                        'text-blue-400 bg-blue-400/10 p-2 rounded-full shrink-0',
                    wrapper: 'min-w-0 pr-2 md:pr-0',
                }"
                class="md:translate-x-[calc(50%-1rem)] max-w-4xl mx-auto"
            />
        </div>
    </UPageSection>
</template>

<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

const processTimeline = [
    {
        phase: "Phase 1",
        title: "Discovery & Planning",
        description:
            "We align with your goals, audit existing assets, and define the project roadmap with clear milestones.",
        icon: "i-lucide-compass",
    },
    {
        phase: "Phase 2",
        title: "Solution Design",
        description:
            "Our architects shape the system design, choose the best Python tooling, and validate the technical approach.",
        icon: "i-lucide-pencil-ruler",
    },
    {
        phase: "Phase 3",
        title: "Development & Integration",
        description:
            "Feature implementation begins with iterative sprints, constant reviews, and seamless integration with your stack.",
        icon: "i-lucide-code",
    },
    {
        phase: "Phase 4",
        title: "QA & Launch",
        description:
            "Comprehensive testing, performance tuning, and deployment support ensure a reliable production release.",
        icon: "i-lucide-rocket",
    },
    {
        phase: "Phase 5",
        title: "Support & Evolution",
        description:
            "We monitor, iterate, and enhance your Python solution with ongoing maintenance and strategic improvements.",
        icon: "i-lucide-refresh-cw",
    },
];

const timelineItems: TimelineItem[] = processTimeline.map(({ phase, ...rest }) => ({
    ...rest,
    date: phase,
}));
</script>
