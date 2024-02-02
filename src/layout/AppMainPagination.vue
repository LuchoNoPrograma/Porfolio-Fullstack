<script lang="ts" setup>
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
import BaseButton from "../components/shared/BaseButton.vue";
import { useRouter } from "vue-router";
import { itemsNavigation } from "../data/ItemNavigation.ts";
import { ItemNavigationType } from "../types/DataType.ts";

const router = useRouter();

const props = defineProps({
  actual: {
    type: Number,
    required: true,
  },
});

const links: string[] = itemsNavigation.map(
  (item: ItemNavigationType) => item.to ?? "/about-me",
);

const toView = async (direction: "left" | "right") => {
  if (direction === "left") {
    (props.actual <= 0)
      ? await router.push(links[links.length - 1])
      : await router.push(links[props.actual - 1]);
  } else {
    (props.actual >= links.length - 1)
      ? await router.push(links[0]) : await router.push(links[props.actual + 1]);
  }
};
</script>

<template>
  <div class="mt-6 flex justify-center gap-2">
    <base-button class="rounded-full" @click="toView('left')">
      <icon-arrow-left></icon-arrow-left>
    </base-button>
    <base-button class="rounded-full" @click="toView('right')">
      <icon-arrow-right></icon-arrow-right>
    </base-button>
  </div>
</template>

<style scoped></style>