<template>
  <div>
    <HomeCustomHero />
    <HomeServiceSection />
    <Review />
    <HomeAdditionalSection />
    <!-- 5. Technology Section -->
    <Technology />

    <!-- 6. Projects Section -->
    <div class="m-5">
      <Project :projects="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [];
</script>
