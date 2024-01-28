<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  icon: {
    type: String
  },
  variant: {
    type: String as PropType<"primary" | "secondary">,
    default: "primary",
  },
  to: {
    type: String
  },
});

const emits = defineEmits(['on-click']);
const onClick = () => {
  emits('on-click')
}
</script>

<template>
  <div v-ripple :class="variant" class="base-btn" @click="onClick" v-bind="$attrs">
    <template v-if="to">
      <router-link :to="to">
        <slot> {{ props.title }}</slot>
      </router-link>
    </template>
    <template v-else>
      <a v-bind="$attrs">
        <slot> {{ props.title }}</slot>
      </a>
    </template>
    <span v-if="icon" class="ml-1">
      <template v-if="typeof props.icon === 'string'">
        <i :class="icon" class="icon"></i>
      </template>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.base-btn {
  @apply px-2 py-1 text-center cursor-pointer rounded-md transition-all ease-in duration-200 overflow-hidden;
}

.primary {
  @apply bg-emerald-400 text-slate-800;
  box-shadow: inset 0 0 0 0 theme("colors.emerald.400");
}

.primary:hover {
  @apply bg-cyan-900 text-white;
  box-shadow: inset 140px 0 0 0 theme("colors.cyan.900");
}

.secondary {
  @apply bg-cyan-900 text-white;
  box-shadow: inset 0 0 0 0 theme("colors.cyan.900");
}

.secondary:hover {
  @apply bg-emerald-400 text-slate-800;
  box-shadow: inset 140px 0 0 0 theme("colors.emerald.400");
}
</style>