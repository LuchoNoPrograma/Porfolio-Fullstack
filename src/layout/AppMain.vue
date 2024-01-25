<script setup lang="ts">
import {RouterView} from "vue-router";

</script>

<template>
<div class="main bg-slate-800 rounded-tl-xl rounded-tr-xl p-3">
  <router-view v-slot="{Component}">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</div>
</template>

<style scoped lang="scss">
.main{
  min-height: 360px;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 300ms, transform 300ms;
}

.slide-enter-from, .slide-leave-to{
  opacity: 0;
  transform: translateY(-30%);
}
</style>