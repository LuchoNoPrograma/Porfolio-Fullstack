<script lang="ts" setup>
import { PropType, ref } from "vue";
import { ItemAccordion } from "../../types/ComponentType.ts";
import BaseChip from "./BaseChip.vue";

const props = defineProps({
  item: {
    type: Object as PropType<ItemAccordion>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const accordionContent = ref<HTMLDivElement>();

const toggleAccordion = () => {
  props.item.expanded = !props.item.expanded;
};
</script>

<template>
  <div class="mt-6 ml-5 relative">
    <h2 class="mb-2" @click="toggleAccordion">
      <button
        :aria-controls="'accordion-flush-body-' + index"
        :aria-expanded="!item?.expanded"
        class="w-full flex items-center justify-between gap-3 py-1 font-semibold text-gray-300 text-left border-b border-emerald-400 z-0 cursor-pointer relative text-lg"
        type="button"
      >
        <span
          class="dot absolute bottom-2 transform -translate-x-1/2 h-4 w-4 bg-emerald-400 rounded-full"
        ></span>
        <span class="text-gray-200">{{ item.title }}</span>
        <svg
          :class="item?.expanded ? 'rotate-180' : 'rotate-0'"
          aria-hidden="true"
          class="w-3 h-3 shrink-0 transition-all duration-300 ease-in relative"
          data-accordion-icon
          fill="none"
          viewBox="0 0 10 6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5 5 1 1 5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
    </h2>
    <div
      ref="accordionContent"
      :aria-labelledby="'accordion-content' + index"
      :class="item.expanded ? 'expanded' : 'collapsed'"
      class="pb-2 relative"
    >
      <span class="text-gray-300">{{ item.content }}</span>

      <h5 class="my-2" v-if="item.chips">Stack:</h5>
      <div
        v-if="item.chips"
        class="accordion-content__container-chip w-full flex justify-start flex-wrap gap-2 "
      >
        <base-chip
          v-for="(chip, index) in item.chips"
          :key="index"
          :title="chip.title"
          variant="primary"
        >
        </base-chip>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapsed {
  opacity: 0;
  max-height: 0;
  transition: all 300ms linear;
  overflow: hidden;
}

.expanded {
  opacity: 1;
  max-height: 400px;
  transition: all 400ms linear;
}

.rotate-180 {
  transform: rotate(180deg);
}

.dot {
  left: -0.625em;
}
</style>