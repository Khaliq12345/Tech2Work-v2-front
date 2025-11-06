<template>
    <div
        v-motion
        :initial="{ y: 0 }"
        :enter="{
            y: 10,
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 800,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                },
            },
        }"
    >
        <img :src="src" alt="" class="mx-auto" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    src: {
        type: String,
        required: true,
    },
});
</script>

<style scoped></style>
