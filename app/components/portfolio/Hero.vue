<template>
  <UPageHero
    class="hero"
    headline="INSIGHTS"
    title="Showcasing Our Thought Leadership"
    description="Discover a wealth of knowledge curated by our worldwide team of experts and analysts, offering invaluable perspectives on emerging technology trends and business opportunities."
    :links="links"
    :ui="{
      headline: 'font-bold text-white tracking-widest',
      description: 'max-w-2xl mx-auto text-white/90 mt-4',
      links: 'text-primary mt-6',
    }"
  />
</template>

<script setup lang="ts">
const links = ref([
  {
    label: "CONSULT OUR EXPERTS",
    to: "/docs/getting-started",
    trailingIcon: "i-lucide-arrow-right",
    color: "info",
    variant: "solid",
    size: "xl",
  },
]);
</script>

<style lang="css">
.hero {
  background-image: url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero * {
  position: relative;
  z-index: 2;
}
</style>
