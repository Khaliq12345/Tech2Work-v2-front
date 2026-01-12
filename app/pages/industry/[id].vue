<template>
  <div v-if="industryData">
    <IndustryHero
      logo="/test1.png"
      :title="industryData.heroTitle"
      :description="industryData.heroDescription"
      :image="industryData.heroImage"
    />

    <IndustryDescription
      :title="industryData.descriptionTitle"
      :description="industryData.subDescription"
    />

    <IndustryServices
      :title="industryData.serviceTitle"
      :services="industryData.services"
    />

    <IndustryCTA
      :title="industryData.ctaTitle"
      :description="industryData.ctaDescription"
    />

    <IndustryBenefits
      :title="industryData.benefitTitle"
      :items="industryData.benefits"
    />

    <IndustrySolutions
      :title="industryData.solutionTitle"
      :solutions="industryData.solutions"
    />
  </div>
  <ClientOnly>
    <Project slug="construction" :limit="5" :random="true" />
  </ClientOnly>
  <IndustryReviews />
</template>

<script setup lang="ts">
const route = useRoute();
const industryId = route.params.id as string;

const { $getLocale } = useI18n();
const locale = computed(() => $getLocale());

const { data: industryRaw } = await useAsyncData(industryId, () =>
  queryCollection("industry")
    .where("stem", "=", `industry/${industryId}`)
    .first()
    .then((entry) => entry ?? null),
);

const industryData = computed(() => {
  if (!industryRaw.value) return null;
  if (locale.value === "fr") return industryRaw.value.fr;
  return industryRaw.value.en;
});
</script>
