<template>
    <UPageHero
        headline="WHAT WE DO"
        title="We are here to participate in your business growth."
        :ui="{
            title: 'text-left text-black text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal',
            description:
                'text-left text-gray-600 dark:text-gray-600 text-base lg:text-lg',
            links: 'justify-start',
        }"
        orientation="horizontal"
    >
        <ImageComponent src="/logo.png" class="max-w-sm" />
    </UPageHero>
</template>

<script setup lang="ts"></script>
