<template>
  <div v-if="serviceData">
    <!-- 1. Hero Section -->
    <ServicesDetailHero :title="serviceData.title" :tag="serviceData.tag" />

    <!-- 2. About Section -->
    <ServicesAbout
      :description="serviceData.about.description"
      :images="serviceData.about.images"
    />

    <!-- 3. Expertise Section -->
    <ServicesExpertise
      :description="serviceData.expertise.description"
      :skills="serviceData.expertise.skills"
    />

    <!-- 4. Solutions Section -->
    <ServicesSolutions :solutions="serviceData.solutions" />

    <!-- 5. Technology Section -->
    <Technology />

    <!-- 6. Projects Section -->
    <div class="m-5">
      <Project :projects="serviceData.projects" />
    </div>
  </div>
</template>

<script setup lang="ts">


// Récupération du paramètre de route
const route = useRoute();
const serviceId = route.params.serviceId as string;
const { $getLocale } = useI18n();

// Utilise computed() pour réactivité aux changements de langue
const locale = computed(() => $getLocale());

const { data: services } = await useAsyncData(serviceId, () =>
  queryCollection("services")
    .where("stem", "=", `services/${serviceId}`)
    .first(),
);

// Données du service selon la locale
const serviceData = computed(() => {
  if (locale.value == "en") {
    return services.value?.en;
  } else if (locale.value == "fr") {
    return services.value?.fr;
  }
  return null;
});
</script>
