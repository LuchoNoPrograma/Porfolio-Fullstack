<script lang="ts" setup>
import { TablerIconComponent } from "vue-tabler-icons";
import { PropType } from "vue";

const props = defineProps({
  icon: {
    type: Function as PropType<TablerIconComponent>,
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
    :is="props.icon"
    :size="props.size"
    :stroke-width="props.strokeWidth"
    class="inline"
  ></component>
</template>