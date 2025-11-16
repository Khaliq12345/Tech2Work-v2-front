<template>
  <UPageSection
    title="Benefits of financial sector services from Software Mind"
    :ui="{
      title:
        'text-2xl md:text-4xl text-primary font-bold text-center mb-6 md:mb-10',
      wrapper: 'max-w-6xl mx-auto',
    }"
  >
    <UMarquee :repeat="4" pause-on-hover :overlay="false">
      <div class="flex gap-4 md:gap-8">
        <UCard
          v-for="(card, index) in cards"
          :key="index"
          :class="[
            'w-72 md:w-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-md',
            card.style,
          ]"
          :ui="{
            body: 'p-4 md:p-8',
            header: 'py-2 md:py-4',
            footer: 'p-0',
          }"
        >
          <template #header>
            <h3 class="text-lg md:text-2xl font-semibold mb-2 md:mb-4">
              {{ card.title }}
            </h3>
          </template>

          <p class="text-sm md:text-base leading-relaxed">
            {{ card.description }}
          </p>
        </UCard>
      </div>
    </UMarquee>
  </UPageSection>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "Enhanced security",
    description:
      "Protect your reputation by safeguarding financial data with advanced security protocols. Our cybersecurity practices minimize risks with strong protection and threat detection.",
    style:
      "bg-gradient-to-r from-indigo-500 via-red-700 to-orange-400 text-white",
  },
  {
    title: "Greater scalability",
    description:
      "Grow your business with scalable cloud solutions. Expand operations without technical limitations or increasing costs.",
    style: "bg-black text-white",
  },
  {
    title: "Compliance",
    description:
      "Automate compliance management and reporting. Reduce risks and stay aligned with regulatory requirements.",
    style: "bg-gray-500 text-black",
  },
  {
    title: "Improved customer experience",
    description:
      "AI-powered personalization and smoother interfaces improve satisfaction and customer loyalty.",
    style:
      "bg-gradient-to-r from-indigo-900 via-red-700 to-orange-400 text-white",
  },
  {
    title: "Greater scalability",
    description:
      "Grow your business with scalable cloud solutions. Expand operations without technical limitations or increasing costs.",
    style: "bg-black text-white",
  },
];
</script>
