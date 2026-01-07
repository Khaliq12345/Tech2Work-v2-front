<template>
  <UPageSection
    :title="String($t('description_title'))"
    :ui="{
      title:
        'text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6',
    }"
  >
    <template #body>
      <div class="justify-center flex">
        <div class="max-w-3xl space-y-6 flex flex-col">
          <p
            class="text-md md:text-xl text-slate-800 font-medium leading-relaxed"
          >
            {{ $t("description_intro") }}
          </p>

          <p
            class="text-sm md:text-lg text-slate-600 font-light leading-relaxed"
          >
            {{ $t("description_body") }}
          </p>

          <div class="pt-4">
            <span
              class="text-primary-600 font-bold text-sm md:text-xl uppercase tracking-widest"
            >
              {{ $t("description_motto") }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </UPageSection>
</template>

<script setup lang="ts">
const { $t } = useI18n();
</script>
