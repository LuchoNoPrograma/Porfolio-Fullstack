<script lang="ts" setup>
import BaseCard from "../components/shared/BaseCard.vue";
import BaseChip from "../components/shared/BaseChip.vue";
import { useProjectsStore } from "../store/ProjectsStore.ts";
import { useRouter } from "vue-router";
import { ProjectType } from "../types/DataType.ts";
import { onMounted, ref } from "vue";
import { publicImagesProjectsDir } from "../data/Constants.ts";

const projectStore = useProjectsStore();
const router = useRouter();

const bindImage = (src: string) => publicImagesProjectsDir + src;

const toDetail = (item: ProjectType) => {
  router.push(`/projects/${item.projectId}`);
};

const projectItems = ref<ProjectType[]>([]);
onMounted(async () => {
  projectItems.value = await projectStore.getProjects();
});
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12">
      <h3 class="text-3xl text-emerald-300 mb-0">Proyectos</h3>
    </div>

    <template v-for="(item, index) in projectItems" :key="index">
      <base-card
        class="base-card col-span-12 lg:col-span-6 rounded-md transition-transform duration-100 ease-in hover:scale-102 cursor-pointer shadow-sm shadow-emerald-400/30"
        color="secondary"
        @click="toDetail(item)"
      >
        <template #title>
          <figure class="rounded-lg mb-3 overflow-hidden">
            <img
              :src="bindImage(item.srcPortrait)"
              alt="xd"
              class="cover transition-all duration-300 ea se-in hover:w-full hover:h-full"
              height="100%"
              width="100%"
            />
          </figure>

          <h3 class="text-xl text-emerald-300 mb-0">{{ item.title }}</h3>
        </template>

        <template #default>
          <p class="base-card__description">{{ item.description }}</p>
          <div class="flex flex-wrap gap-2">
            <template v-for="(tech, indexTech) in item.techs" :key="indexTech">
              <base-chip :title="tech.name"></base-chip>
            </template>
          </div>
        </template>
      </base-card>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.base-card {
  max-height: 45em;
}

.base-card__description {
  @apply overflow-hidden text-ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>