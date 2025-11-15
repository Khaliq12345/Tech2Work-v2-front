<template>
    <div
        class="relative bg-cta-background bg-cover bg-center py-16 px-6 sm:py-20 sm:px-12"
    >
        <UPageCTA
            title="Explore real-world AI use cases in financial services"
            description="Learn how companies in financial services are achieving smart, secure transformations through AI and data solutions that streamline processes, increase personalization and meet regulatory requirements."
            orientation="vertical"
            variant="soft"
            :ui="{
                root: 'text-center',
                title: 'text-3xl sm:text-4xl font-bold',
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

        <!-- Le composant Contact -->
        <Contact v-model:open="isOpen" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

function openContact() {
    isOpen.value = true;
}
</script>

<style scoped>
.bg-cta-background {
    background-image: url("https://images.pexels.com/photos/5980921/pexels-photo-5980921.jpeg");
}
</style>
