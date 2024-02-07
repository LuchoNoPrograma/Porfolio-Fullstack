<script lang="ts" setup>
import BaseButton from "../components/shared/BaseButton.vue";
import BaseChip from "../components/shared/BaseChip.vue";

const skills: { title: string; tech: string; experience: string }[] = [
  {
    title: "Java + Spring Boot",
    tech: "Java + Spring Boot",
    experience: "(2022-Octubre / Actualidad)",
  },
  {
    title: "Vue + Typescript",
    tech: "Vue + Typescript",
    experience: "(2023-Febrero / Actualidad)",
  },
  {
    title: "MySQL + PostgreSQL",
    tech: "MySQL + PostgreSQL",
    experience: "(2022-Octubre / Actualidad)",
  },
];

const hrefWindow = (url: string) => window.open(url, "_blank");
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/pdf/FullstackDeveloper(Vue-Java)CV.pdf";
  link.target = "_blank";
  link.download = "FullstackDeveloper(Vue-Java)CV.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <div
    class="profile sticky grid grid-cols-12 gap-2 bg-slate-800 p-4 overflow-hidden rounded-xl w-full shadow-sm shadow-black"
    v-bind="$attrs"
  >
    <div class="profile-info col-span-7">
      <div class="profile-info__overlay">
        <h3 class="text-3xl">
          Hola, soy <br />
          Luis Morales <span class="text-emerald-300">V.</span>
        </h3>
      </div>
    </div>
    <div class="profile-photo col-span-5">
      <img
        alt="Profile Photo"
        class="profile-photo relative overflow-hidden object-cover rounded-full transition-transform duration-300 hover:scale-110"
        src="../assets/images/profile.jpg"
      />
    </div>

    <div class="col-span-12">
      <h4 class="text-xl text-emerald-300 drop-shadow-glow my-0">
        Desarrollador Fullstack
      </h4>
      <p class="text-md">
        <span class="text-cyan-300 drop-shadow-glow"
          >+2 Años de experiencia</span
        >
        desarrollando software empresarial.
      </p>

      <div class="profile-footer flex items-center gap-1 mb-3">
        <base-button icon="icon-Download" href="/pdf/FullstackDeveloper(Vue-Java)CV.pdf" target="_blank" download="FullstackDeveloper(Vue-Java)CV.pdf">Descargar CV</base-button>
      </div>
    </div>

    <div class="col-span-12">
      <div class="flex justify-center gap-2 z-10">
        <base-chip
          :border="true"
          class="cursor-pointer transition-transform duration-200 ease-in hover:scale-110"
          color="secondary"
          title="Linkedin"
          @click="
            hrefWindow(
              'https://www.linkedin.com/in/luis-alberto-morales-villaca/',
            )
          "
        >
          <template #prepend-icon>
            <span>
              <i class="icofont-linkedin text-cyan-300"></i>
            </span>
          </template>
        </base-chip>

        <base-chip
          :border="true"
          class="cursor-pointer transition-transform duration-200 ease-in hover:scale-110"
          color="secondary"
          title="Github"
          @click="hrefWindow('https://github.com/LuchoNoPrograma')"
        >
          <template #prepend-icon>
            <span>
              <i>
                <svg
                  class="icon-github"
                  fill="rgb(103 232 249)"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>github</title>
                  <path
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,
              21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,
              16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,
              18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,
              15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,
              5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,
              5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,
              11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,
              19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </i>
            </span>
          </template>
        </base-chip>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  @apply sticky top-4 z-20;
}

.profile .svg-header {
  height: 150px;
  fill: theme("colors.emerald.400");
  width: 100%;
  position: absolute;
  top: -30px;
  z-index: 2;

  .svg2 {
    top: -25px;
    fill: theme("colors.emerald.500");
  }
}

.profile-info__overlay {
  p {
    line-height: 1.3;
  }
}

.profile-info__link {
  width: 40px;
  height: 40px;
  border-radius: 70% 30% 30% 70%/70% 70% 30% 30%;
  font-size: 1.25em;
  line-height: 1;
  padding: 14px 0;
  margin: 0 10px 0 0;
}

.profile-info__link--linkedin {
  background: #1773ea;
}

.profile-info__link--github {
  background: #416bc2;
}

.icon-github {
  height: 1.25em;
}
</style>