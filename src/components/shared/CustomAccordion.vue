<script lang="ts" setup>
import { PropType } from "vue";
import type { ItemAccordion } from "../../types/ComponentType.ts";
import CustomAccordionItem from "./CustomAccordionItem.vue";

const props = defineProps({
  items: {
    type: Array as PropType<Array<ItemAccordion>>,
    required: true,
  },
});
</script>

<template>
  <div class="relative" v-bind="$attrs">
    <div
      class="absolute left-2 transform -translate-x-1/2 h-full w-1 bg-emerald-400"
    ></div>
    <template v-for="(item, index) in props.items" :key="index">
      <custom-accordion-item
        :index="index"
        :item="item"
        :items-length="items.length"
      ></custom-accordion-item>
    </template>
  </div>
</template>

<style scoped></style>