<template>
    <div v-if="technology">
        <TechnologyHero
            :headline="technology.heroHeadline"
            :title="technology.title"
            :cover-image="technology.coverImage"
            :cover-alt="technology.heroCoverAlt"
        />

        <TechnologyDescription
            :description-v1="technology.descriptionV1"
            :description-v2="technology.descriptionV2"
        />

        <TechnologyAdditionalDescription
            :title="technology.additionalTitle"
            :description="technology.additionalDescription"
        />

        <TechnologyUses
            :title="technology.usesTitle"
            :description="technology.usesDescription"
            :features="technology.features"
        />

        <TechnologyProcess
            :title="technology.processTitle"
            :description="technology.processDescription"
            :steps="technology.process"
        />

        <TechnologyCTA
            :title="technology.ctaTitle"
            :description="technology.ctaDescription"
            :button-label="
                locale === 'fr'
                    ? 'Prendre un rendez-vous'
                    : 'Make An Appointment'
            "
            :image-src="technology.coverImage"
            :image-alt="technology.ctaImageAlt"
        />
    </div>
</template>

<script setup lang="ts">
import type { TechnologyContent, TechnologyEntry } from "~/types/technology";

const route = useRoute();
const technologyId = route.params.id as string;
const { $getLocale } = useI18n();
const locale = computed(() => $getLocale());

const { data: technologyEntry } = await useAsyncData<TechnologyEntry | null>(
    `technology-${technologyId}`,
    () =>
        queryCollection("technology")
            .where("stem", "=", `technology/${technologyId}`)
            .first()
            .then((entry) => entry ?? null),
);

const technology = computed<TechnologyContent | null>(() => {
    if (!technologyEntry.value) {
        return null;
    }

    if (locale.value === "fr") {
        return technologyEntry.value.fr;
    }

    return technologyEntry.value.en;
});
</script>
