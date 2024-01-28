<script setup lang="ts">
import {getCurrentInstance} from "@vue/runtime-core";

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  tech: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="profile-skills__item ml-2 flex">
    <span class="text-white font-medium mr-2">{{getCurrentInstance().vnode.key}}.-</span>
    <div>
      <h4 class="text-gray-200 font-medium mb-0">{{ props.title }}</h4>
<!--      <p class="text-xs text-gray-200 mb-1">{{ props.tech }}</p>
      <p class="text-xs text-gray-300">{{ props.experience }}</p>-->
    </div>
  </div>
</template>

<style scoped>

</style>