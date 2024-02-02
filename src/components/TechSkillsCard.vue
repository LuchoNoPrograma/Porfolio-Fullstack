<script lang="ts" setup>
import { TechSkillsCardItem } from "../types/ComponentType.ts";
import { PropType } from "vue";
import BaseIcon from "./shared/BaseIcon.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Object as PropType<Array<TechSkillsCardItem>>,
    required: true,
  },
});
</script>

<template>
  <div
    class="container border border-gray-500 py-2 rounded-lg shadow-sm shadow-emerald-300/50"
    v-bind="$attrs"
  >
    <h5 class="text-xl text-center text-emerald-400">
      {{ props.title }}
    </h5>
    <div class="flex flex-wrap justify-center items-center basis-10 gap-4">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="flex flex-col justify-center items-center gap-2"
      >
        <span>
          <base-icon :icon="item.icon" :size="36"></base-icon>
        </span>
        <span class="text-md font-medium text-gray-200">
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h5 {
  background: -webkit-linear-gradient(
    theme("colors.emerald.200"),
    theme("colors.emerald.600")
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>