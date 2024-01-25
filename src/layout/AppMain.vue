<script setup lang="ts">
import {RouterView} from "vue-router";

</script>

<template>
<div class="main bg-slate-800 rounded-tl-xl rounded-tr-xl px-3 py-2">
  <router-view></router-view>
</div>
</template>

<style scoped lang="scss">
.main{
  min-height: 360px;
}
</style>