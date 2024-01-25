<script lang="ts" setup>
import {PropType} from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  icon: {
    type: String,
  },
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  }
})

</script>

<template>
  <div class="custom-button" :class="variant" v-ripple>
    <a v-bind="$attrs">
      {{ props.title }}
    </a>
    <span v-if="icon" class="ml-1">
      <i :class="icon" class="icon"></i>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.custom-button {
  @apply px-2;
  @apply py-1;
  @apply text-center;
  @apply cursor-pointer;
  @apply rounded-md;
  @apply transition-all;
  @apply ease-in;
  @apply duration-200;
  @apply overflow-hidden;
}

.primary{
  @apply bg-emerald-400;
  @apply text-slate-800;
  box-shadow: inset 0 0 0 0 theme('colors.emerald.400');
}

.primary:hover{
  @apply bg-cyan-900;
  @apply text-white;
  box-shadow: inset 140px 0 0 0 theme('colors.cyan.900');
}

.secondary{
  @apply bg-cyan-900;
  @apply text-white;
  box-shadow: inset 0 0 0 0 theme('colors.cyan.900');
}

.secondary:hover{
  @apply bg-emerald-400;
  @apply text-slate-800;
  box-shadow: inset 140px 0 0 0 theme('colors.emerald.400');
}

</style>