<script lang="ts" setup>
import {PropType} from "vue";
import type {ItemAccordion} from "../../types/type-components.ts";
import CustomAccordionItem from "./CustomAccordionItem.vue";

const props = defineProps({
  items: {
    type: Array as PropType<Array<ItemAccordion>>,
    required: true
  }
})

</script>

<template>
  <div>
    <template v-for="(item, index) in props.items" :key="index">
      <custom-accordion-item :index="index" :item="item"></custom-accordion-item>
    </template>
  </div>
</template>

<style scoped>

</style>
