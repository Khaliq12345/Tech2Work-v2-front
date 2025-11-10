<template>
  <UPageSection
    v-if="props.solutions.length > 0"
    class="py-16"
    :ui="{ wrapper: 'max-w-6xl mx-auto px-6 sm:px-8' }"
  >
    <!-- Titre centré -->
    <template #title>
      <h2 class="text-3xl font-semibold text-neutral-900 sm:text-4xl">
        {{ $t("our") }}
        <span class="text-gray-500">{{ $t("solution_title") }}</span>
      </h2>
    </template>

    <!-- Layout principal -->
    <div
      class="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start"
    >
      <!-- Colonne des solutions (gauche) -->
      <div class="grid gap-6 sm:grid-cols-2">
        <UCollapsible
          v-for="(solution, index) in props.solutions"
          :key="solution.title"
          :open="openIndex === index"
          as="div"
          class="relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-none"
          @update:open="(isOpen) => isOpen ? (openIndex = index) : (openIndex === index && (openIndex = null))"
        >
          <!-- header de la carte -->
          <div class="relative w-full cursor-pointer p-6 text-left">
            <div class="space-y-4">
              <span class="text-2xl font-mono font-bold text-neutral-400">
                [{{ index + 1 }}]
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

            <!-- Bouton '+'  personnalisé -->
            <div
              class="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-200"
              :class="[
                openIndex === index ? 'rotate-45 bg-gray-500' : 'bg-gray-500',
              ]"
            >
              <UIcon name="i-lucide-plus" class="h-5 w-5 text-white" />
            </div>
          </div>

          <!-- SLOT #CONTENT : Le contenu qui se déplie -->
          <template #content>
            <div class="border-t border-neutral-200 px-6 pb-6 pt-4">
              <p class="text-sm leading-relaxed text-neutral-600">
                {{ solution.content }}
              </p>
            </div>
          </template>
        </UCollapsible>
      </div>

      <!-- Colonne de l'image (droite, visible sur desktop, caché sur mobile) -->
      <div class="relative hidden overflow-hidden lg:flex flex-col">
        <img
          src="/logo.png"
          alt="Logo"
          class="w-full object-cover"
          style="aspect-ratio: 4/5"
        />
        <div class="relative mt-auto w-full py-4 px-0">
          <UButton :label="String($t('button1'))" size="xl" block class="text-white" />
        </div>
      </div>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
const { $t } = useI18n();

interface Solution {
  title: string;
  description: string;
  content: string;
}

const props = defineProps<{
  solutions: Solution[];
}>();

const openIndex = ref<number | null>(null);
</script>
