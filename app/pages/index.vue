<template>
  <div>
    <HomeCustomHero @contact="openContact" />
    <HomeServiceSection @contact="openContact" />
    <Review />
    <HomeAdditionalSection @contact="openContact" />
    <!-- 5. Technology Section -->
    <Technology />

    <!-- 6. Projects Section -->
    <div class="m-5">
      <Project :projects="projects" />
    </div>
    
    <Contact v-model:open="isContactOpen" />
  </div>
</template>

<script setup lang="ts">

const projects = [];
const isContactOpen = ref(false);

const openContact = () => {
  isContactOpen.value = true;
};
</script>
