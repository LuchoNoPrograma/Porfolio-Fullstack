<script lang="ts" setup>
import { PropType } from "vue";
import type { ItemAccordion } from "../../types/type-components.ts";
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

  <!--  DOTS-->
  <!--  <div v-if="index !== 0"
         class="absolute left-0 top-0 bottom-0 transform -translate-x-1/2 h-4 w-4 bg-emerald-400 rounded-full"></div>-->
</template>

<style scoped></style>