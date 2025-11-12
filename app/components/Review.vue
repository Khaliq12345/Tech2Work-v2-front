<template>
    <div class="py-12">
        <UMarquee
            :overlay="false"
            pause-on-hover
            :ui="{
                root: 'overflow-hidden w-full',
                content: 'flex items-center justify-center gap-12 w-full',
            }"
        >
            <div
                v-for="(review, index) in reviews"
                :key="index"
                class="w-full max-w-4xl items-center mx-auto text-center px-6"
            >
                <!-- Logo -->
                <div class="flex justify-center mb-6">
                    <img
                        :src="review.logo"
                        alt="Company logo"
                        class="w-16 h-16 object-contain rounded-full"
                    />
                </div>

                <!-- Description -->
                <div
                    class="w-1/2 sm:w-full flex items-center justify-center mx-auto"
                >
                    <p class="text-secondary text-sm sm:text-lg mb-6 italic">
                        {{ review.description }}
                    </p>
                </div>

                <!--  Nom + Poste + Entreprise -->
                <div>
                    <p class="font-semibold text-xl text-primary">
                        {{ review.name }}
                    </p>
                    <p class="text-secondary">
                        {{ review.position }} — {{ review.company }}
                    </p>
                </div>
            </div>
        </UMarquee>
    </div>
</template>

<script setup lang="ts">
const { $t } = useI18n();

const reviews = computed(() => {
    const rawReviews = $t('reviews');
    if (!rawReviews || !Array.isArray(rawReviews)) {
        return [];
    }
    return rawReviews.map(review => ({
        logo: "/logo.png",
        description: String(review.description || ''),
        name: String(review.name || ''),
        position: String(review.position || ''),
        company: String(review.company || '')
    }));
});
</script>

<style scoped></style>
