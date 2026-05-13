<template>
  <div
    class="group relative flex flex-col gap-12 lg:gap-20 items-center py-7 min-h-[500px]"
    :class="[reverse ? 'lg:flex-row-reverse' : 'lg:flex-row']"
  >
    <span
      class="absolute top-0 left-0 text-[12rem] font-black text-slate-50 select-none z-[-1] leading-none opacity-50"
      :class="[reverse ? 'lg:left-auto lg:right-0' : '']"
    >
      {{ index < 10 ? `0${index}` : index }}
    </span>

    <div class="w-full lg:w-1/2">
      <NuxtLink
        :to="link"
        class="block relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-primary-500/20"
      >
        <div class="aspect-16/10 bg-slate-100">
          <img
            :src="image"
            :alt="title"
            class="w-full h-full object-cover object-top transform transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
      </NuxtLink>
    </div>

    <div class="w-full lg:w-1/2 space-y-6 text-left max-w-xl">
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <span class="h-2px w-12 bg-primary-500"></span>
          <span
            class="text-xs font-bold tracking-[0.3em] text-primary-500 uppercase"
            >{{ caseStudyText }}</span
          >
        </div>

        <h3
          class="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight"
        >
          {{ title }}
        </h3>
      </div>

      <p
        class="text-lg text-slate-600 font-light leading-relaxed line-clamp-4 md:line-clamp-6"
      >
        {{ description }}
      </p>

      <div class="pt-2">
        <NuxtLink :to="link" class="inline-flex items-center gap-4 group/link">
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-900 group-hover/link:bg-slate-900 group-hover/link:text-white transition-all duration-300"
          >
            <UIcon name="i-lucide-arrow-up-right" class="w-6 h-6" />
          </div>
          <span
            class="text-sm font-black tracking-widest text-slate-900 uppercase"
          >
            {{ viewText }}
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  link: string;
  image: string;
  reverse?: boolean;
  index: number;
}>();

const { $getLocale } = useI18n();

const locale = computed(() => $getLocale());
const viewText = computed(() => {
  if (locale.value == "en") {
    return "View Project";
  } else if (locale.value == "fr") {
    return "Voir Projet";
  }
});

const caseStudyText = computed(() => {
  if (locale.value == "en") {
    return "Case study";
  } else if (locale.value == "fr") {
    return "Étude de cas";
  }
});
</script>
