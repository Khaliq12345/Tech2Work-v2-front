<template>
    <UPageSection
        :ui="{
            root: 'bg-white',
            container: 'px-4 sm:px-16 py-16',
            wrapper: 'max-w-4xl mx-auto',
            title: 'text-gray-900 text-base sm:text-xl lg:text-2xl font-normal text-center leading-relaxed',
            description:
                'text-gray-600 text-sm sm:text-base lg:text-lg mt-8 text-center leading-relaxed',
        }"
    >
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