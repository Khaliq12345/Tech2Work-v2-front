<template>
    <UButton
        :color="color"
        :variant="variant"
        :size="size"
        :icon="icon"
        :aria-label="title"
        target="_blank"
        class="text-white font-medium rounded-full p-3 text-center"
    >
        {{ title }}
        <slot />
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
        default: "lg",
    },
    icon: {
        type: String,
        required: false,
    },
});
</script>
