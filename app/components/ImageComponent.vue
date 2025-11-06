<template>
  <UCard class="no-border">
    <div
      v-motion
      :initial="{ y: 0 }"
      :enter="{
        y: 10,
        transition: {
          y: {
            repeat: Infinity,
            duration: 500,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        },
      }"
    >
      <img :src="src" alt="" class="mx-auto" />
    </div>
  </UCard>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.no-border {
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
}
</style>