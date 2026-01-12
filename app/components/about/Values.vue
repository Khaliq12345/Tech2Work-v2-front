<template>
  <UPageSection
    class="values-section"
    variant="naked"
    :ui="{
      container: 'py-16 sm:py-24 lg:py-32',
      wrapper: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    }"
  >
    <!-- Centered Header -->
    <div class="max-w-3xl mx-auto text-center mb-20">
      <div
        class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
      >
        <svg
          class="w-5 h-5 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span
          class="text-sm font-semibold text-primary uppercase tracking-wide"
        >
          {{ $t("values_headline") || "Our values" }}
        </span>
      </div>

      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        What makes us
        <span class="text-primary">special</span>
      </h2>

      <p class="text-lg text-gray-600 leading-relaxed">
        {{
          $t("values_description") ||
          "Choosing the right partners and competencies can be a make or break project. Our core beliefs speak for themselves."
        }}
      </p>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid md:grid-cols-2 gap-6 mb-12">
      <div
        v-for="(value, index) in $t('values')"
        :key="index"
        class="group relative bg-linear-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
        :class="index === 0 ? 'md:col-span-2' : ''"
      >
        <!-- Icon/Number -->
        <div
          class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
        >
          <span
            class="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300"
          >
            {{ index + 1 }}
          </span>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          {{ value.title }}
        </h3>

        <p class="text-gray-600 leading-relaxed text-lg">
          {{ value.description }}
        </p>

        <!-- Hover arrow -->
        <div
          class="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
        >
          <svg
            class="w-6 h-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Image with Stats Overlay -->
    <div class="relative max-w-5xl mx-auto">
      <div class="relative rounded-3xl overflow-hidden shadow-2xl">
        <ImageComponent src="/about/about1.png" class="w-full h-auto" />

        <!-- Optional: Stats overlay on image -->
        <div
          class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-8 sm:p-12"
        >
          <div class="grid grid-cols-3 gap-8 text-center text-white">
            <div>
              <div class="text-3xl sm:text-4xl font-bold mb-2">100%</div>
              <div class="text-sm opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
              <div class="text-sm opacity-90">Support Available</div>
            </div>
            <div>
              <div class="text-3xl sm:text-4xl font-bold mb-2">∞</div>
              <div class="text-sm opacity-90">Innovation Drive</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const { $t } = useI18n();
</script>
