<template>
  <div>
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

interface Solution {
  title: string;
  description: string;
  content: string;
}

interface Project {
  title: string;
  description?: string;
  image: string;
  badge: string;
  to?: string;
}

interface ServiceData {
  title: string;
  tag: string;
  about: {
    description: string;
    images: string[];
  };
  expertise: {
    description: string;
    skills: string[];
  };
  solutions: Solution[];
  projects: Project[];
}

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

// Données mockées pour le développement - à remplacer par une vraie API
const serviceData = computed(() => {
  if (locale.value == "en") {
    return services.value.en;
  } else if (locale.value == "fr") {
    return services.value.fr;
  }
});
</script>
