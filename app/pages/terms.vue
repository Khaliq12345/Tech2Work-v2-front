<template>
  <div class="min-h-screen bg-white py-8 px-4">
    <div class="max-w-7xl mx-auto p-8 md:p-12">
      <!-- Header -->
      <header class="text-center mb-12 pb-8 border-b-2 border-gray-100">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {{ $t('title') }}
        </h1>
        <div
          class="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-700"
        >
          <p class="m-0"><strong>Effective Date:</strong> {{ $t('effectiveDate') }}</p>
          <p class="m-0"><strong>Last Updated:</strong> {{ $t('lastUpdated') }}</p>
        </div>
      </header>

      <!-- Grid avec 2 colonnes -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
        <TermsPrivacy
          v-for="(section, index) in $t('sections')"
          :key="index"
          :title="section.title"
          :content="section.content"
          :intro="section.intro"
          :items="section.items"
          :sections="section.sections"
        />
      </div>

      <!-- Contact Information -->
      <section class="mt-12 pt-8 border-t-2 border-gray-200">
        <div class="lg:col-span-1 mb-4">
          <h2 class="text-2xl font-semibold text-gray-800">
            {{ $t('contactTitle') }}
          </h2>
        </div>
        <div class="lg:col-span-2">
          <p class="text-base md:text-lg text-gray-700 mb-4">
            {{ $t('contactIntro') }}
          </p>
          <div class="mt-4 p-4 md:p-6 bg-gray-50">
            <p class="text-lg text-gray-800 font-semibold mb-3">
              {{ $t('companyName') }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p class="text-base text-gray-700">
                  <strong>Email:</strong>
                  <a
                    :href="`mailto:${$t('email')}`"
                    class="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >{{ $t('email') }}</a
                  >
                </p>
                <p class="text-base text-gray-700">
                  <strong>Address:</strong> {{ $t('address') }}
                </p>
              </div>
              <div>
                <p class="text-base text-gray-700">
                  <strong>Phone:</strong> {{ $t('phone') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $t } = useI18n()
</script>