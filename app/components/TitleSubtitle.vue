<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="flex flex-col items-center">
    <UText
      :ui="{ base: 'uppercase font-semibold tracking-wide' }"
      class="mb-3 text-3xl text-gray-400"
    >
      {{ title }}
    </UText>
    
    <UText
      :ui="{ base: 'font-extrabold' }"
      class="tracking-tight text-black text-7xl leading-none" 
      
      >
      {{ subtitle }}
    </UText>
  </div>
</template>