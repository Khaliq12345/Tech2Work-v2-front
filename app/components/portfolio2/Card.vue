<template>
    <UCard
        class="overflow-hidden text-center transition hover:shadow-lg hover:-translate-y-1 duration-300"
    >
        <!-- Contenu -->
        <template #header>
            <h2 class="text-xl font-bold text-blue-400">
                {{ title }}
            </h2>
        </template>

        <template #default>
            <div class="p-6 space-y-3">
                <p class="text-secondary text-xl leading-relaxed">
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
            <!-- Image -->
            <div class="relative">
                <!-- Image desktop -->
                <img
                    :src="image"
                    alt="Project image"
                    class="w-full h-100 object-cover hidden sm:block"
                />
                <!-- Image mobile -->
                <img
                    :src="imageMobile"
                    alt="Project image mobile"
                    class="w-full h-full object-cover sm:hidden"
                /></div
        ></template>
    </UCard>
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
