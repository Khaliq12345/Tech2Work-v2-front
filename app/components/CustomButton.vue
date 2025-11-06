<template>
    <UButton
        :color="color"
        :variant="variant"
        :size="size"
        :icon="icon"
        :aria-label="title"
        target="_blank"
        class="text-white rounded-full text-center lg:p-5 lg:text-lg"
    >
        {{ title }}
    </UButton>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "primary",
    },
    variant: {
        type: String,
        default: "solid",
    },
    size: {
        type: String,
        default: "sm",
    },
    icon: {
        type: String,
        required: false,
    },
});
</script>
