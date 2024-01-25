<script lang="ts" setup>
import {onMounted, PropType, ref} from "vue";
import {ItemAccordion} from "../../types/type-components.ts";

const props = defineProps({
  item: {
    type: Object as PropType<ItemAccordion>,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const accordionContent = ref<HTMLDivElement>()

const toggleAccordion = () => {
  props.item.expanded = !props.item.expanded
  console.log(accordionContent.value.clientHeight);
}

</script>

<template>
  <div class="mt-3">
    <h2 class="mb-2"  @click="toggleAccordion">
      <button :aria-controls="'accordion-flush-body-' + index"
              :aria-expanded="!item?.expanded"
              class="w-full flex items-center justify-between gap-3 py-1 font-semibold text-gray-300 border-b border-emerald-400 z-0 cursor-pointer"
              type="button">
        <span>{{ item.title }}</span>
        <svg :class="item?.expanded? 'rotate-180' : 'rotate-0'"
             aria-hidden="true"
             class="w-3 h-3 shrink-0 transition-all duration-300 ease-in "
             data-accordion-icon
             fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5 5 1 1 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2"/>
        </svg>
      </button>
    </h2>


    <div :aria-labelledby="'accordion-content' + index"
         :class="item.expanded? 'expanded' : 'collapsed'"
         ref="accordionContent"
    >
      <div v-if="item.chips" class="accordion-content__container-chip w-full flex justify-start flex-wrap gap-2 mb-1 ml-1">
        <span v-for="(chip, index) in item.chips" :key="index"
              class="text-cyan-900 bg-emerald-400 px-3 rounded-xl">
          {{ chip.title }}
        </span>
      </div>

      <span class="text-gray-400">{{ item.content }}</span>
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
  max-height: 100px;
  transition: all 300ms linear;
}

.rotate-180 {
  transform: rotate(180deg);
}

</style>