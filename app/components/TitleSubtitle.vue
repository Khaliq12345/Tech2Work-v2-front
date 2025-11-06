<template>
    <div
        class="flex flex-col items-center justify-center text-center px-4 w-full"
    >
        <div
            :ui="{ base: 'uppercase font-semibold' }"
            class="mb-2 sm:mb-3 text-sm lg:text-1xl text-gray-500 text-center font-mono"
        >
            {{ title }}
        </div>

        <div
            :ui="{ base: 'font-extrabold' }"
            class="text-black text-1xl md:text-2xl lg:text-4xl sm:leading-none text-center whitespace-nowrap font-sans"
        >
            {{ subtitle }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    subtitle: string;
}>();
</script>
