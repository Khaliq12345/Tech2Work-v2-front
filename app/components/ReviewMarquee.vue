<template>
  <UMarquee
    :reverse="reverse"
    pause-on-hover
    :repeat="4"
    class="py-4"
    :ui="{
      root: 'overflow-hidden w-full',
      content: 'flex items-center gap-6' /* Reduced gap for better flow */,
    }"
  >
    <div
      v-for="(testimonial, index) in reviews"
      :key="index"
      class="w-[350px] shrink-0 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 mx-2"
    >
      <UIcon
        name="i-heroicons-chat-bubble-bottom-center-text"
        class="w-8 h-8 text-primary-500/20 mb-4"
      />

      <p
        class="text-slate-600 italic leading-relaxed mb-6 line-clamp-4 min-h-[100px]"
      >
        "{{ testimonial.description }}"
      </p>

      <div class="flex items-center gap-3 border-t border-slate-50 pt-4">
        <UAvatar
          :src="`https://ui-avatars.com/api/?name=${testimonial.name}&background=random`"
          :alt="testimonial.name"
          size="sm"
        />
        <div class="flex flex-col text-left">
          <span class="text-sm font-bold text-slate-900 leading-none">{{
            testimonial.name
          }}</span>
          <span class="text-xs text-slate-500 mt-1">{{
            testimonial.position
          }}</span>
        </div>
      </div>
    </div>
  </UMarquee>
</template>

<script setup lang="ts">
interface Review {
  name: string;
  description: string;
}

defineProps<{
  reviews: Review[];
  reverse: boolean;
}>();
</script>
