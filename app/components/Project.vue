<template>
  <div class="max-w-7xl mx-auto px-4 md:px-8">
    <div
      class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
    >
      <div class="space-y-2">
        <span
          class="text-primary-500 font-bold text-xs uppercase tracking-[0.3em]"
          >Selected Work</span
        >
        <h2
          class="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter"
        >
          {{ $t("portfolio_title") }}
        </h2>
      </div>

      <ULink
        v-if="limit"
        to="/portfolios"
        class="text-sm font-bold border-b-2 border-black pb-1 hover:text-primary-500 hover:border-primary-500 transition-all"
      >
        VIEW ALL PROJECTS
      </ULink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="index"
        :to="project.link"
        class="group flex flex-col space-y-4"
      >
        <div
          class="relative aspect-4/3 overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 shadow-inner"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div
            class="absolute inset-0 bg-linear-to-b from-black/8 to-transparent pointer-events-none"
          ></div>

          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
          >
            <div
              class="w-12 h-12 rounded-full bg-white flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            >
              <UIcon
                name="i-lucide-arrow-up-right"
                class="w-6 h-6 text-black"
              />
            </div>
          </div>
        </div>

        <div class="space-y-1">
          <h3
            class="text-xl font-bold text-slate-900 group-hover:text-primary-500 transition-colors"
          >
            {{ project.title }}
          </h3>
          <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Digital Experience / {{ project.category || "Creative" }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $getLocale, $t } = useI18n();
const locale = computed(() => $getLocale());

const props = defineProps<{
  slug?: string;
  limit?: number;
  random?: boolean;
}>();

// Loader logic remains the same
const { data: portfolios } = await useAsyncData("port", () =>
  queryCollection("portfolios").all(),
);

const projects = computed(() => {
  if (!portfolios.value) return [];

  let results = portfolios.value.map((portfolio) => {
    const data = portfolio[locale.value];
    return {
      title: data.title,
      link: data.link,
      image: data.galleries?.[0], // Taking the first image from gallery
      slug: data.slug,
      category: data.category, // Added category for better detail
    };
  });

  if (props.slug) {
    results = results.filter((p) => p.slug === props.slug);
  }

  if (props.random) {
    results = results.sort(() => Math.random() - 0.5);
  }

  if (props.limit) {
    results = results.slice(0, props.limit);
  }
  return results;
});
</script>
