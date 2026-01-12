<template>
  <div>
    <HomeCustomHero @contact="openContact" v-motion-fade :duration="1200" />
    <HomeServiceSection
      @contact="openContact"
      v-motion-slide-visible-once-top
      :duration="3000"
      :delay="10"
    />
    <!-- 6. Projects Section -->
    <div class="m-5">
      <ClientOnly>
        <Project :limit="6" :random="true" />
      </ClientOnly>
    </div>

    <!-- Reviews sections -->
    <Review />

    <!-- 5. Technology Section -->
    <Technology />

    <HomeAdditionalSection
      @contact="openContact"
      v-motion-slide-visible-once-bottom
      :duration="1200"
      :delay="10"
    />

    <Contact v-model:open="isContactOpen" />
  </div>
</template>

<script setup lang="ts">
const isContactOpen = ref(false);

const openContact = () => {
  isContactOpen.value = true;
};
</script>
