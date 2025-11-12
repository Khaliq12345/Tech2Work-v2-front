<template>
    <UPageSection
        :title="String($t('clients_title') || '')"
        :ui="{
            title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center',
        }"
    >
        <template #description>
            <UCarousel
                v-slot="{ item }"
                loop
                dots
                arrows
                auto-scroll
                :items="items"
                :ui="{ item: 'basis-1/5' }"
            >
                <img :src="item" width="234" height="234" class="rounded-lg" />
            </UCarousel>
        </template>
    </UPageSection>
</template>
<script setup lang="ts">
const { $t } = useI18n();

const items = [
    "https://picsum.photos/468/468?random=1",
    "/logo.png",
    "https://picsum.photos/468/468?random=5",
    "/logo.png",
    "https://picsum.photos/468/468?random=4",
    "/logo.png",
    "https://picsum.photos/468/468?random=6",
    "/logo.png",
];
</script>
