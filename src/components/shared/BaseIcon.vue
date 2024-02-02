<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
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

const BaseIcon = defineAsyncComponent(
  () => import(`../../assets/icons/${props.icon}.svg`),
);
</script>

<template>
  <base-icon icon="icon" :style="{'width': props.size+'px'}" class="base-icon"></base-icon>
</template>

<style lang="scss" scoped>
svg{
  @apply h-fit inline;
}
</style>