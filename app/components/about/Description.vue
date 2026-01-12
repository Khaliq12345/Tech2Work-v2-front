<template>
  <UPageSection
    variant="naked"
    :ui="{
      container: 'py-16 sm:py-20 lg:py-24',
      wrapper: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    }"
  >
    <div class="relative">
      <!-- Decorative background elements -->
      <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          class="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        ></div>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Title with decorative line -->
        <div class="text-center mb-12 sm:mb-16">
          <div class="inline-flex items-center gap-4 mb-6">
            <div
              class="h-px w-12 bg-linear-to-r from-transparent to-primary"
            ></div>
            <span
              class="text-sm font-semibold text-primary uppercase tracking-wider"
            >
              About us
            </span>
            <div
              class="h-px w-12 bg-linear-to-l from-transparent to-primary"
            ></div>
          </div>

          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            {{ $t("description_title") }}
          </h2>
        </div>

        <!-- Content card with gradient border -->
        <div class="relative group">
          <!-- Gradient border effect -->
          <div
            class="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"
          ></div>

          <!-- Main content -->
          <div
            class="relative bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl"
          >
            <!-- Intro paragraph with larger text -->
            <p
              class="text-lg sm:text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-8"
            >
              {{ $t("description_intro") }}
            </p>

            <!-- Divider -->
            <div
              class="w-16 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full mb-8"
            ></div>

            <!-- Body paragraph -->
            <p class="text-base sm:text-lg text-gray-600 leading-relaxed mb-10">
              {{ $t("description_body") }}
            </p>

            <!-- Motto with accent background -->
            <div
              class="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 border border-primary/20"
            >
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              ></div>
              <div class="relative flex items-center gap-4">
                <div
                  class="shrink-0 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center"
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span
                  class="text-primary font-bold text-lg sm:text-xl uppercase tracking-wide"
                >
                  {{ $t("description_motto") }}
                </span>
              </div>
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
