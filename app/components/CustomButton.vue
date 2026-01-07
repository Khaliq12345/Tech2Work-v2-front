<template>
  <UButton
    :color="color"
    :variant="variant"
    :size="size"
    :icon="icon"
    :aria-label="title"
    class="text-white rounded-full text-center p-3 lg:p-5 text-md lg:text-lg"
    :to="to"
    @click="handleClick"
  >
    {{ title }}
  </UButton>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "primary",
  },
  variant: {
    type: String,
    default: "solid",
  },
  size: {
    type: String,
    default: "sm",
  },
  icon: {
    type: String,
    required: false,
  },
  to: {
    type: String,
    default: undefined,
  },
  onClick: {
    type: Function,
    required: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event: Event) => {
  if (props.onClick) {
    props.onClick(event);
  }
  emit("click", event);
};
</script>
