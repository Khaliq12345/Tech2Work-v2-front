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
    <ServicesTechnology />

    <!-- 6. Projects Section -->
    <div class="m-5">
      <ServicesProject :projects="serviceData.projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";
import type { Solution, Project, ServiceData } from "../../../types/service";

// Récupération du paramètre de route
const route = useRoute();
const serviceId = route.params.serviceId as string;
const { $getLocale } = useI18n();

const locale = ref($getLocale());

const { data: services } = await useAsyncData(serviceId, () =>
  queryCollection("services")
    .where("stem", "=", `services/${serviceId}`)
    .first(),
);

const serviceData = computed((): ServiceData | null => {
  const meta = services.value?.meta.body as any;
  if (!meta) return null;
  
  if (locale.value === "en") {
    return meta.en as ServiceData;
  } else if (locale.value === "fr") {
    return meta.fr as ServiceData;
  }
  return null;
});
</script>
