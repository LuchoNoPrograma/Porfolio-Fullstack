<script lang="ts" setup>
import { RouterView, useRouter } from "vue-router";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
import BaseIcon from "../components/shared/BaseIcon.vue";
import CustomButton from "../components/shared/BaseButton.vue";

const router = useRouter();
const links: string[] = ["/about-me", "/resume"];
let actual: number = 0;

const toView = (direction: "left" | "right") => {
  if (direction === "left") {
    actual <= 0 ? (actual = links.length - 1) : actual--;
  } else {
    actual >= links.length - 1 ? (actual = 0) : actual++;
  }
  router.push(links[actual]);
};
</script>

<template>
  <div class="main bg-slate-800 rounded-tl-xl rounded-tr-xl p-8">
    <router-view id="router-view" v-slot="{ Component }">
      <transition mode="out-in" name="slide">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>

    <div class="mt-6 flex justify-center gap-2">
      <custom-button class="rounded-full" @click="toView('left')">
        <base-icon :icon="IconArrowLeft"></base-icon>
      </custom-button>
      <custom-button class="rounded-full" @click="toView('right')">
        <base-icon :icon="IconArrowRight"></base-icon>
      </custom-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  min-height: 360px;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 300ms,
    transform 300ms;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
</style>