<script lang="ts" setup>
import {RouterLink} from "vue-router";

const props = defineProps({
  iconClass: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: '/about-me',
  }
})

</script>

<template>
  <router-link :to="props.to" active-class="active"
               class="text-center text-white font-medium py-3 px-2 rounded-xl
                      flex flex-col flex-wrap items-center hover:text-emerald-200">
    <i :class="props.iconClass" class="icon text-2xl"></i>
    <span>{{ props.title }}</span>
  </router-link>
</template>

<style scoped>

</style>