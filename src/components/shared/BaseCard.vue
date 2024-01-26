<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="p-4 min-w-40 min-h-40" v-bind="$attrs">
    <slot name="title">
      <h4 class="text-xl mb-2">
        {{ props.title }}
      </h4>
    </slot>

    <slot>
      <p>
        {{ props.description }}
      </p>
    </slot>
  </div>
</template>

<style scoped></style>
