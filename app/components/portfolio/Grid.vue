<template>
  <div
    class="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16"
  >
    <div class="lg:col-span-8 space-y-8">
      <div class="inline-flex items-center gap-3">
        <span class="h-2px w-12 bg-primary-500"></span>
        <span
          class="text-xs font-bold tracking-[0.3em] text-primary-500 uppercase"
          >Project Overview</span
        >
      </div>

      <div
        class="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-light"
      >
        <MDC :value="description" />
      </div>
    </div>

    <div class="lg:col-span-4 lg:border-l lg:border-slate-100 lg:pl-12">
      <div class="sticky top-24 space-y-10">
        <h3 class="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
          Project Details
        </h3>

        <div class="grid grid-cols-2 lg:grid-cols-1 gap-y-8">
          <div v-for="item in metaItems" :key="item.label">
            <p
              class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1"
            >
              {{ item.label }}
            </p>
            <p class="text-lg font-bold text-slate-900">{{ item.value }}</p>
          </div>

          <div>
            <p
              class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2"
            >
              Tech Stack
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="tag in tags"
                :key="tag"
                variant="soft"
                color="neutral"
                class="rounded-full px-3 py-1 font-bold text-[10px] uppercase"
              >
                {{ tag }}
              </UBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  client: string;
  follow: { label: string; icon: string; url: string }[];
}>();

const metaItems = computed(() => [
  { label: "Client", value: props.client },
  { label: "Industry", value: props.category },
  { label: "Date", value: props.date },
]);
</script>
