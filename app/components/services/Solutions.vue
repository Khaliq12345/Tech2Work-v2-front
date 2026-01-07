<template>
  <UPageSection
    v-if="props.solutions && props.solutions.length > 0"
    class="py-16"
    :ui="{ wrapper: 'max-w-6xl mx-auto px-6 sm:px-8' }"
  >
    <template #title>
      <span class="text-3xl font-semibold text-neutral-900 sm:text-4xl">
        {{ $t("our") }}
        <span class="text-gray-500">{{ $t("solution_title") }}</span>
      </span>
    </template>

    <div
      class="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start"
    >
      <div class="grid gap-6 sm:grid-cols-2">
        <UCollapsible
          v-for="(solution, index) in props.solutions"
          :key="index"
          :open="openIndex === index"
          as="div"
          class="relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-none"
          @update:open="(val) => handleToggle(index, val)"
        >
          <div class="relative w-full cursor-pointer p-6 text-left">
            <div class="space-y-4">
              <span class="text-2xl font-mono font-bold text-neutral-400">
                [{{ String(index + 1).padStart(2, "0") }}]
              </span>
              <div class="space-y-3 pb-10">
                <h3 class="text-lg font-semibold text-neutral-900 sm:text-xl">
                  {{ solution.title }}
                </h3>
                <p class="text-sm text-neutral-600 sm:text-base">
                  {{ solution.description }}
                </p>
              </div>
            </div>

            <div
              class="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-200"
              :class="[
                openIndex === index ? 'rotate-45 bg-gray-500' : 'bg-gray-500',
              ]"
            >
              <UIcon name="i-lucide-plus" class="h-5 w-5 text-white" />
            </div>
          </div>

          <template #content>
            <div class="border-t border-neutral-200 px-6 pb-6 pt-4">
              <p class="text-sm leading-relaxed text-neutral-600">
                {{ solution.content }}
              </p>
            </div>
          </template>
        </UCollapsible>
      </div>

      <div class="relative hidden lg:flex lg:flex-col overflow-hidden">
        <img
          src="/logo.png"
          alt="Logo"
          class="w-full object-cover"
          style="aspect-ratio: 4/5"
        />
        <div class="relative mt-auto w-full py-4 px-0">
          <UButton :label="$t('button1')" size="xl" block class="text-white" />
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const { $t } = useI18n();

const props = defineProps<{
  solutions: Array<{
    title: string;
    description: string;
    content: string;
  }>;
}>();

const openIndex = ref<number | null>(null);

const handleToggle = (index: number, isOpen: boolean) => {
  if (isOpen) {
    openIndex.value = index;
  } else if (openIndex.value === index) {
    openIndex.value = null;
  }
};
</script>
