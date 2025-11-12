<template>
    <UPageSection
        :ui="{
            root: 'bg-black p-16 relative overflow-hidden',
            wrapper: 'relative z-10 max-w-4xl mx-auto',
            title: 'text-gray-200 text-base sm:text-xl lg:text-2xl font-normal text-center leading-relaxed',
            description:
                'text-gray-400 text-sm sm:text-base lg:text-lg mt-8 text-center leading-relaxed',
        }"
    >
        <!-- Halo dégradé violet en haut -->
        <template #top>
            <div class="absolute inset-x-0 top-0 h-96 radial-top-halo"></div>
        </template>

        <template #title>
            Despite being around for decades, Python remains one of the most
            versatile and popularly used programming languages in the world.
            It's a general purpose language, meaning it can be used for almost
            any kind of project, but it can be difficult to handle if you don't
            have the right skilled python developers on your team.
        </template>

        <template #description>
            Python excels in AI and Machine Learning with its extensive
            libraries like TensorFlow, PyTorch, and scikit-learn, making it a
            top choice for developers.
        </template>
    </UPageSection>
</template>

<script setup lang="ts"></script>

<style scoped>
.radial-top-halo {
    background: linear-gradient(
        to bottom,
        rgba(30, 58, 138, 0.4) 0%,
        rgba(30, 58, 138, 0.2) 30%,
        transparent 70%
    );
}
</style>
