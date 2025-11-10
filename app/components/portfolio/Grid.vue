<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <!-- Colonne gauche : Description -->
    <UPageCard spotlight spotlight-color="primary">
      <template #header>
        <h2 class="text-3xl text-primary font-bold mb-2">
          {{ title }}
        </h2>
      </template>

      <template #description>
        <div class="w-11 h-1 bg-primary"></div>
      </template>

      <template #default>
        <p class="text-gray-700 leading-relaxed whitespace-pre-line">
          {{ description }}
        </p>
      </template>
    </UPageCard>

    <!-- Colonne droite : Informations -->
    <UPageCard spotlight spotlight-color="primary">
      <template #header>
        <h3 class="text-2xl font-bold text-primary mb-2">Info</h3>
      </template>

      <template #description>
        <div class="w-11 h-1 bg-primary mb-6"></div>
      </template>

      <template #default>
        <UPageList divide>
          <UPageCard variant="ghost">
            <template #body>
              <p class="font-semibold text-gray-600">Category</p>
              <p class="text-gray-800 mt-1">{{ category }}</p>
            </template>
          </UPageCard>

          <UPageCard variant="ghost">
            <template #body>
              <p class="font-semibold text-gray-600">Date</p>
              <p class="text-gray-800 mt-1">{{ date }}</p>
            </template>
          </UPageCard>

          <UPageCard variant="ghost">
            <template #body>
              <p class="font-semibold text-gray-600">Tags</p>
              <div class="flex flex-wrap gap-2 mt-1">
                <UBadge
                  v-for="tag in tags"
                  :key="tag"
                  color="primary"
                  variant="soft"
                >
                  {{ tag }}
                </UBadge>
              </div>
            </template>
          </UPageCard>

          <UPageCard variant="ghost">
            <template #body>
              <p class="font-semibold text-gray-600">Client</p>
              <p class="text-gray-800 mt-1">{{ client }}</p>
            </template>
          </UPageCard>

          <UPageCard variant="ghost" v-if="follow?.length">
            <template #body>
              <p class="font-semibold text-gray-600">Follow</p>
              <div class="flex flex-wrap gap-2 mt-1">
                <UButton
                  v-for="(link, idx) in follow"
                  :key="idx"
                  :icon="link.icon"
                  color="neutral"
                  variant="ghost"
                  :to="link.url"
                  target="_blank"
                  :aria-label="link.label"
                  size="sm"
                />
              </div>
            </template>
          </UPageCard>
        </UPageList>
      </template>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  client: string;
  follow: { label: string; icon: string; url: string }[];
}>();
</script>
