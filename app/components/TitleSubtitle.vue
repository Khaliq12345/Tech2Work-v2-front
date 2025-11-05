<template>
    <div class="flex flex-col items-center justify-center text-center px-4 w-full">
        <UText
            :ui="{ base: 'uppercase font-semibold tracking-wide' }"
            class="mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg text-gray-400 text-center"
        >
            {{ title }}
        </UText>

        <UText
            :ui="{ base: 'font-extrabold' }"
            class="tracking-tight text-black text-2xl sm:text-5xl lg:text-7xl leading-tight sm:leading-none text-center whitespace-nowrap"
        >
            {{ subtitle }}
        </UText>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    subtitle: string;
}>();
</script>
