<template>
    <UPageHero
        headline="Skills"
        title="Python Development Services"
        orientation="horizontal"
        :links="[
            {
                label: 'Contact Us',
                size: 'xl',
                color: 'neutral',
                variant: 'solid',
            },
            {
                label: 'Learn More',
                size: 'xl',
                color: 'neutral',
                variant: 'ghost',
                trailingIcon: 'i-heroicons-arrow-right-20-solid',
            },
        ]"
        :ui="{
            root: 'bg-gradient-to-br from-blue-900 via-gray-900 to-black',
            headline: 'text-blue-400 text-sm sm:text-base',
            title: 'text-white text-3xl sm:text-5xl lg:text-7xl',
            links: 'mt-8',
        }"
    >
        <ImageComponent src="/logo.png" />
    </UPageHero>
</template>

<script setup lang="ts"></script>
