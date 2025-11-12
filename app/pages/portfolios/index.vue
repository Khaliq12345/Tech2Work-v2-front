<template>
  <PortfolioHero />
  <PortfolioCards :projects="portfolioProjects" />
</template>

<script setup lang="ts">
const { $getLocale } = useI18n();
const locale = computed(() => $getLocale());

const { data: portfolios } = await useAsyncData("port", () =>
  queryCollection("portfolios").all(),
);

const portfolioProjects = computed(() => {
  const outputs = [];
  portfolios.value?.forEach((portfolio) => {
    const meta = portfolio.meta;
    if (locale.value == "en") {
      const data = meta.en;
      outputs.push({
        title: data.title,
        description: data.description,
        link: data.link,
        image: data.galleries[0],
        imageMobile: data.imageMobile,
      });
    } else if (locale.value == "fr") {
      const data = meta.fr;
      outputs.push({
        title: data.title,
        description: data.description,
        link: data.link,
        image: data.galleries[0],
        imageMobile: data.imageMobile,
      });
    }
  });
  return outputs;
});
</script>
