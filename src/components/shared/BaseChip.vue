<script lang="ts" setup>
import { PropType } from "vue";
import BaseIcon from "../../App.vue";
import { TablerIconComponent } from "vue-tabler-icons";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  tablerIcon: {
    type: Function as PropType<TablerIconComponent>,
    required: false,
  },
  icon: {
    type: String,
  },
  color: {
    type: String as PropType<"primary" | "secondary" | "info">,
    default: "primary",
  },
  border: {
    type: Boolean,
  },
});
</script>

<template>
  <!--  bg-${colorChip}-850-->
  <div
    :class="[
      { 'bg-emerald-850': props.color === 'primary' },
      { 'bg-cyan-850': props.color === 'secondary' },
      { border: props.border },
      { 'border-emerald-300': props.color === 'primary' },
      { 'border-cyan-200': props.color === 'secondary' },
    ]"
    class="px-3 w-fit rounded-2xl flex items-center gap-1"
    v-bind="$attrs"
  >
    <slot name="prepend-icon">
      <template v-if="tablerIcon">
        <base-icon :icon="tablerIcon"></base-icon>
      </template>
      <template v-else-if="icon">
        <i :class="icon" class="icon inline"></i>
      </template>
    </slot>

    <span
      :class="[{ 'text-emerald-200': props.color === 'primary' }, { 'text-cyan-300': props.color === 'secondary' }]"
      >{{ props.title }}</span
    >
    <slot name="append-icon">
      <template v-if="tablerIcon">
        <base-icon :icon="tablerIcon"></base-icon>
      </template>
      <template v-else-if="icon">
        <i :class="icon" class="icon inline"></i>
      </template>
    </slot>
    <slot name="append"> </slot>
  </div>
</template>

<style scoped></style>