<script lang="ts" setup>
import type { TablerIconComponent } from "@tabler/icons-vue";
import { PropType } from "vue";

const props = defineProps({
  item: {
    type: Object as PropType<TablerIconComponent>,
  },
  size: {
    type: Number,
    default: 20,
  },
  strokeWidth: {
    type: Number,
    default: 1.5,
  },
});
</script>

<template>
  <component
    :is="props.item"
    :size="props.size"
    :stroke-width="props.strokeWidth"
    class="inline"
  ></component>
</template>