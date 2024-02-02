<script lang="ts" setup>
import TechSkillsCard from "../components/TechSkillsCard.vue";
import { itemsSkills } from "../data/ItemSkill.ts";
import AppMainPagination from "../layout/AppMainPagination.vue";
</script>

<template>
  <div class="container grid grid-cols-12 gap-4">
    <div class="col-span-12">
      <h3 class="text-3xl text-emerald-300">Tecnologías</h3>
      <p>
        A lo largo de mi crecimiento como desarrollador web, he cultivado
        experiencia y habilidades en diversas tecnologías.
        <span class="text-emerald-200">
          Mi conjunto de herramientas tecnológicas abarca:
        </span>
      </p>
    </div>

    <tech-skills-card
      v-for="(item, index) in itemsSkills"
      :key="index"
      :items="item.items"
      :title="item.title"
      class="col-span-12 sm:col-span-6 md:col-span-6"
    ></tech-skills-card>

    <div class="col-span-12 self-center">
      <app-main-pagination :actual="3"></app-main-pagination>
    </div>
  </div>
</template>

<style scoped></style>