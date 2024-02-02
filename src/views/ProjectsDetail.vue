n
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useProjectsStore } from "../store/ProjectsStore.ts";
import { ProjectType } from "../types/DataType.ts";
import { onMounted, ref } from "vue";
import { publicImagesProjectsDir } from "../data/Constants.ts";
import moment from "moment";
import BaseChip from "../components/shared/BaseChip.vue";

const router = useRouter();
const projectStore = useProjectsStore();

const projectId: number = +router.currentRoute.value.params.projectId[0];
const projectSelected = ref<ProjectType>();
const bindImage = (src: string) => publicImagesProjectsDir + src;

const formatDate = (date: Date) => moment(date).format("DD/MM/yyyy");

onMounted(async () => {
  projectSelected.value = await projectStore.getProjectByProjectId(projectId);
});
</script>

<template>
  <section class="container grid grid-cols-12 gap-6 overflow-hidden">
    <div
      v-viewer.static
      class="col-span-12 lg:col-span-6 xl:col-span-6 cursor-pointer"
    >
      <img
        :src="bindImage(projectSelected?.srcPortrait)"
        alt="Portrait"
        class="rounded-lg"
        height="100%"
        width="100%"
      />
    </div>
    <div class="col-span-12 lg:col-span-6 xl-col-span-6 self-center">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12">
          <h3 class="text-3xl text-emerald-300 my-2">
            {{ projectSelected?.title }}
          </h3>

          <div class="flex gap-4 flex-wrap text-gray-300">
            <div class="flex items-center gap-1">
              <calendar-code-icon></calendar-code-icon>
              Fecha: {{ formatDate(projectSelected?.createdAt) }}
            </div>

            <div class="flex item-center gap-1">
              <tag-icon></tag-icon>
              Tag: {{ projectSelected?.tag }}
            </div>
          </div>

          <div class="flex gap-4">
            <a
              :href="projectSelected?.linkWebsite"
              class="flex items-center gap-1 text-emerald-200 underline"
              target="_blank"
            >
              <external-link-icon
                size="20"
                stroke-width="1.3"
              ></external-link-icon>
              Ver sitio web
            </a>

            <a
              :href="projectSelected?.linkRepository"
              class="flex items-center gap-1 text-emerald-200 underline"
              target="_blank"
            >
              <external-link-icon
                size="20"
                stroke-width="1.3"
              ></external-link-icon>
              Ir al repositorio
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-12">
      <h4 class="text-xl text-emerald-300 mb-1">Descripción del proyecto</h4>
      <p>
        {{ projectSelected?.description }}
      </p>
      <img alt="" src="" />

      <figure>
        <h4 class="text-xl mb-1 text-emerald-300">Herramientas</h4>

        <table class="table border-collapse border border-emerald-400 rounded-lg">
          <thead>
          <tr class="border-b border-emerald-400">
            <td class="text-emerald-300 p-2">Tecnologia</td>
            <td class="text-emerald-300 p-2">Uso</td>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="(tech, techIndex) in projectSelected?.techs"
            :key="techIndex"
            class="border-b border-emerald-400"
          >
            <td class="min-w-36 text-center p-2">
              <base-chip :title="tech.name"></base-chip>
            </td>
            <td class="text-gray-300 p-2">{{ tech.use }}</td>
          </tr>
          </tbody>
        </table>
      </figure>
    </div>

    <div class="col-span-12">
      <h4 class="text-xl mb-1 text-emerald-300">Galeria</h4>
      <div v-viewer.static class="flex flex-wrap gap-2">
        <img
          v-for="(src, imgIndex) in projectSelected?.srcImg.map((srcImg) =>
            bindImage(srcImg),
          )"
          :key="src"
          :alt="'image' + (imgIndex + 1)"
          :src="src"
          class="cursor-pointer"
          width="30%"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>