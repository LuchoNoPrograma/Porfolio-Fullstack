<script lang="ts" setup>
import { PropType, ref } from "vue";
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
    default: false,
  },
});

const primary = ref<boolean>(false);
const secondary = ref<boolean>(false);

let colorChip = ref<string>();
switch (props.color) {
  case "primary":
    colorChip.value = "emerald";
    primary.value = true;
    break;
  case "secondary":
    colorChip.value = "cyan";
    secondary.value = true;
    break;
  default:
    "emerald";
}
</script>

<template>
  <!--  bg-${colorChip}-850-->
  <div
    :class="[
      `bg-${colorChip}-850`,
      { border: props.border },
      { 'border-cyan-300': secondary },
      { 'border-emerald-200': primary },
    ]"
    class="px-3 rounded-2xl flex items-center gap-1"
    v-bind="$attrs.href"
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
      :class="[
        { 'text-emerald-200': primary },
        { 'text-cyan-300': secondary },
      ]"
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
  </div>
</template>

<style scoped></style>