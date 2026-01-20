<template>
  <section 
    :class="[
      'p-6 hover:bg-gray-50/20 transition-colors duration-200 h-fit',
      customClass
    ]"
  >
    <h2 
      :class="[
        'text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200',
        titleClass
      ]"
    >
      {{ title }}
    </h2>
    
    <!-- Contenu texte simple -->
    <p 
      v-if="content" 
      :class="['text-sm md:text-base text-gray-700', contentClass]"
    >
      {{ content }}
    </p>
    
    <!-- Liste à puces -->
    <div v-else-if="items" class="space-y-2">
      <p v-if="intro" :class="['text-sm md:text-base text-gray-700 mb-2', introClass]">
        {{ intro }}
      </p>
      <ul :class="['text-xs md:text-sm text-gray-700 space-y-1 pl-3', listClass]">
        <li v-for="(item, index) in items" :key="index" class="flex items-start">
          <span class="mr-2">•</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
    
    <!-- Sections imbriquées (comme Intellectual Property) -->
    <div v-else-if="sections" class="space-y-3 text-xs md:text-sm">
      <div v-for="(section, index) in sections" :key="index">
        <h3 :class="['font-semibold text-gray-700', sectionTitleClass]">
          {{ section.title }}
        </h3>
        <p :class="['text-gray-700', sectionContentClass]">
          {{ section.content }}
        </p>
      </div>
    </div>
    
    <!-- Slot pour contenu personnalisé -->
    <slot v-else></slot>
  </section>
</template>

<script setup lang="ts">
interface Section {
  title: string
  content: string
}

interface Props {
  title: string
  content?: string
  intro?: string
  items?: string[]
  sections?: Section[]
  // Classes personnalisables
  customClass?: string
  titleClass?: string
  contentClass?: string
  introClass?: string
  listClass?: string
  sectionTitleClass?: string
  sectionContentClass?: string
}

defineProps<Props>()
</script>