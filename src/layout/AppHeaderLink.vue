<script lang="ts" setup>
import {RouterLink} from "vue-router";
import {PropType} from "vue";

const props = defineProps({
  iconClass: {
    type: String,
    required: true
  },
  positionIcon: {
    type: String as PropType<"top" |"left">,
    default: "top"
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
  <router-link :to="props.to" active-class="active" v-bind="$attrs"
               class="text-center text-white font-medium py-2 px-2 rounded-xl
                      flex flex-wrap items-center hover:text-emerald-200" :class="props.positionIcon === 'top'? 'flex-col' : 'gap-2'">
    <i :class="props.iconClass" class="icon text-2xl"></i>
    <span>{{ props.title }}</span>
  </router-link>
</template>

<style scoped>

</style>