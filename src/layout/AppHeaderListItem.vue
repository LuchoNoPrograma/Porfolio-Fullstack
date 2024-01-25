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
    default: '/home',
  }
})

</script>

<template>
  <li class="active text-center relative">
    <router-link :to="props.to">
      <a
        class="block w-full h-full
        text-center text-white font-medium
        px-1 py-6
        transition-all ease-in duration-300 hover:text-emerald-400 cursor-pointer">
        <i :class="props.iconClass" class="icon
        absolute left-0 right-0 top-0 bottom-0 my-auto
        text-4xl text-emerald-400 opacity-40
        transition-all ease-in duration-300 hover:text-emerald-400 hover:opacity-10"></i>
        <span>{{ props.title }}</span>
      </a>
    </router-link :to="props.to">
  </li>
</template>

<style scoped>
li:after {
  height: 15px;
  width: 1px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  content: '';
  background: #34313f
}

i {
  line-height: 2.25em;
}

a {
  line-height: 2.5em;
}

</style>