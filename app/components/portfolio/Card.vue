<template>
    <UPageCard
        orientation="horizontal"
        class="overflow-hidden text-center transition shadow-lg hover:-translate-y-1 duration-300"
    >
        <!-- Contenu -->
        <template #title>
            <h2 class="text-md md:text-lg font-bold text-blue-400">
                {{ title }}
            </h2>
        </template>

        <template #description>
            <div class="p-6 space-y-3">
                <p
                    class="text-md md:text-lg text-secondary leading-relaxed line-clamp-2"
                >
                    {{ description }}
                </p>

                <ULink
                    :to="link"
                    class="inline-flex items-center text-primary font-bold mt-2 hover:underline"
                >
                    READ MORE
                    <UIcon name="i-lucide-arrow-right" class="ml-1 w-4 h-4" />
                </ULink>
            </div>
        </template>

        <img
            :src="image"
            alt="Project image"
            class="w-full h-64 md:h-96 object-cover rounded-lg"
        />
    </UPageCard>
</template>

<script setup lang="ts">
defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    imageMobile: { type: String, required: false },
});
</script>
