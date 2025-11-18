<template>
    <div
        class="relative bg-cover bg-center py-16 px-6 sm:py-20 sm:px-12"
        :style="{ backgroundImage: `url(${image})` }"
    >
        <UPageCTA
            :title="title"
            :description="description"
            orientation="vertical"
            variant="soft"
            :ui="{
                root: 'text-center',
                title: 'md:text-3xl text-2xl font-bold',
                description:
                    'text-lg text-white sm:text-xl mt-4 max-w-3xl mx-auto',
                links: 'mt-8',
            }"
        >
            <template #links>
                <UButton
                    class="bg-primary text-white px-6 py-3 rounded-full text-lg sm:text-xl"
                    @click="openContact"
                >
                    Contact Us
                </UButton>
            </template>
        </UPageCTA>

        <Contact v-model:open="isOpen" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    title: string;
    description: string;
    image: string;
}>();

const isOpen = ref(false);

function openContact() {
    isOpen.value = true;
}
</script>
