<template>
    <UPageSection
        title="Tech2work Team"
        headline="PROFESSIONALS"
        description="A brunch of professionals weirdos who make great stuff."
        :ui="{
            title: 'text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center',
            headline: 'text-blue-400 text-center',
        }"
    >
        <UPageGrid
            class="gap-6 flex flex-wrap justify-center"
            :ui="{ base: 'grid-cols-1 sm:grid-cols-2' }"
        >
            <UCard
                v-for="(image, index) in images"
                :key="index"
                class="overflow-hidden p-0 border-none shadow-none w-9/12 sm:w-full mx-auto"
            >
                <img
                    :src="image"
                    alt="Team member"
                    class="w-full h-full object-cover rounded-lg"
                />
            </UCard>
        </UPageGrid>
    </UPageSection>
</template>

<script setup lang="ts">
const images = [
    "https://picsum.photos/468/468?random=1",
    "https://picsum.photos/468/468?random=2",
];
</script>
