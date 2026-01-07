<template>
  <div v-if="project" class="mb-10">
    <PortfolioDetailHero :projectTitle="project.title" />
    <div class="w-full flex flex-col gap-12 p-2">
      <PortfolioGrid
        :title="project.title"
        :description="project.description"
        :category="project.category"
        :date="project.date"
        :tags="project.tags"
        :client="project.client"
        :follow="project.follow"
      />

      <!-- SECTION image -->
      <div>
        <PortfolioCarousel :images="project.galleries" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// initialise the route, locale and portfolio id
const { $getLocale } = useI18n();
const locale = computed(() => $getLocale());
const route = useRoute();
const portfolioId = route.params.id as string;

// Get the portfolio from the content and filter by portfolio id
const { data: project_raw } = await useAsyncData(portfolioId, () =>
  queryCollection("portfolios")
    .where("stem", "=", `portfolios/${portfolioId}`)
    .first(),
);

// Refresh the data when the locale changes
const project = computed(() => {
  if (locale.value == "en") {
    return project_raw.value?.en;
  } else if (locale.value == "fr") {
    return project_raw.value?.fr;
  }
});
</script>
