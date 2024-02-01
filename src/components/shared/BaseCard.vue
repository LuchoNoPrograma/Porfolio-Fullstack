<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "primary",
  },
  padding: {
    type: [String, Number],
    default: 4,
  },
});
</script>

<template>
  <div
    :class="[
      {
        'bg-emerald-850': props.color === 'primary',
        'bg-cyan-850': props.color === 'secondary',
      },
      `p-${padding}`,
    ]"
    class="min-w-40 min-h-40"
    v-bind="$attrs"
  >
    <div>
      <slot name="title">
        <h4 class="text-xl mb-2">
          {{ props.title }}
        </h4>
      </slot>
    </div>

    <div v-if="$.slots.default" class="mb-2">
      <slot>
        <p>
          {{ props.description }}
        </p>
      </slot>
    </div>

    <div v-if="$.slots.actions" class="mt-4 mb-1">
      <slot name="actions">

      </slot>
    </div>
  </div>
</template>

<style scoped></style>