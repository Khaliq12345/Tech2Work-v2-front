<template>
  <ServicesHero />
  <div class="min-h-screen">
    <!-- Services Grid -->
    <UContainer class="mb-10">
      <ServicesServiceCard
        v-for="(service, index) in services"
        :key="index"
        :image="service.image"
        :title="service.title"
        :description="service.description"
        :reverse="index % 2 !== 0"
        :to="service.link"
      />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";

const { $t, $getLocale } = useI18n();
const locale = ref($getLocale());

const { data: services_raw } = await useAsyncData("services", () =>
  queryCollection("services").all(),
);
const services = computed(() => {
  const outputs = [];
  services_raw.value?.forEach((service) => {
    const meta = service.meta.body;
    if (locale.value == "en") {
      const data = meta.en;
      outputs.push({
        image: data.cover,
        title: data.title,
        description: data.about.description,
        link: data.link,
      });
    } else if (locale.value == "fr") {
      const data = meta.fr;
      outputs.push({
        image: data.cover,
        title: data.title,
        description: data.about.description,
        link: data.link,
      });
    }
  });
  return outputs;
});
</script>
