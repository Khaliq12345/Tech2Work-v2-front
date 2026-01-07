<template>
  <div class="relative w-full py-20 lg:py-32 bg-slate-900 overflow-hidden">
    <div
      class="absolute inset-0 opacity-20 bg-radial-gradient(circle_at_center,_var(--tw-gradient-stops)) from-primary-500 via-transparent to-transparent"
    ></div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <nav
        class="flex items-center gap-2 text-primary-400 text-xs font-bold uppercase tracking-[0.3em] mb-6"
      >
        <NuxtLink to="/" class="hover:text-white transition-colors"
          >Home</NuxtLink
        >
        <UIcon name="i-heroicons-chevron-right-20-solid" class="w-4 h-4" />
        <span class="text-slate-500">Portfolio</span>
      </nav>

      <h1
        class="text-2xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none"
      >
        {{ projectTitle }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  projectTitle: string;
}>();
</script>
