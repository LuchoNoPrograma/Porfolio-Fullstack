<script lang="ts" setup>

import CustomButton from "../components/shared/CustomButton.vue";
import AppProfileSkill from "./AppProfileSkill.vue";

const skills: { title: string, tech: string, experience: string }[] = [
  {
    title: "Desarrollo Backend",
    tech: "Java + Spring Boot",
    experience: "(2022-Agosto / Actualidad)"
  }, {
    title: "Desarrollo Frontend",
    tech: "Vue + Typescript",
    experience: "(2023-Febrero / Actualidad)"
  }, {
    title: "Base de Datos",
    tech: "MySQL + PostgreSQL",
    experience: "(2022-Agosto / Actualidad)"
  }
]

const print = () => {
  console.log('Hello Fella');
}
</script>

<template>
  <div class="profile min-h-full relative shadow-lg shadow-slate-800 bg-slate-800">
    <div class="profile-header absolute left-0 top-0 w-full min-h-32">
      <svg class="svg1" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polygon opacity=".65" points="0 20, 100 20, 0 100"></polygon>
      </svg>
      <svg class="svg2" preserveAspectRatio="none" viewBox="0 0 100 120">
        <polygon opacity=".8" points="0 20, 100 20, 15 120"></polygon>
      </svg>
      <div class="profile-header__text absolute left-0 top-0 z-10 w-full px-8 py-9">
        <h3 class="text-white font-medium text-xl mt-0 mr-2 mb-2 ml-0">Luis A. Morales V.</h3>
        <span>Fullstack</span>
        <span>Developer</span>
      </div>
    </div>
    <div class="profile-photo relative overflow-hidden w-full h-auto">
      <img alt="Profile Photo" class="object-cover" src="../assets/images/profile.jpg">
      <div class="profile-photo__overlay absolute w-100 flex justify-start left-0 bottom-2 px-8 z-10">
        <a
          class="fac profile-photo__link profile-photo__link--linkedin flex justify-center items-center text-white"
          href="https://www.linkedin.com/in/luis-alberto-morales-villaca/" target="_blank">
          <i class="icofont-linkedin"></i>
        </a>
        <a
          class="twi profile-photo__link profile-photo__link--github flex justify-center items-center"
          href="https://github.com/LuchoNoPrograma" target="_blank">
          <i>
            <svg class="icon-github" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>
              github</title>
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,
              21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,
              16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,
              18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,
              15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,
              5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,
              5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,
              11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,
              19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
          </i>
        </a>
      </div>
    </div>
    <div class="profile-skills pt-2">
      <ul>
        <li v-for="(skill, index) in skills">
          <app-profile-skill :key="index+1" :experience="skill.experience" :tech="skill.tech" :title="skill.title">
          </app-profile-skill>
        </li>
      </ul>
    </div>
    <div class="profile-footer flex justify-center items-center gap-1 mb-3">
      <custom-button icon="icon-Download" title="Descargar CV" variant="primary" @click="print"></custom-button>
      <custom-button icon="icon-Imbox" title="Contactame" variant="secondary"></custom-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-header svg {
  height: 150px;
  fill: theme('colors.emerald.400');
  width: 100%;
  position: absolute;
  top: -30px;
  z-index: 2;

  .svg2 {
    top: -25px;
    fill: theme('colors.emerald.500');
  }
}


.profile-header__text {
  h3 {
    line-height: .8;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: theme('colors.white');
    line-height: 1em;
  }
}

.profile-photo__link {
  width: 40px;
  height: 40px;
  border-radius: 70% 30% 30% 70%/70% 70% 30% 30%;
  font-size: 14px;
  line-height: 1;
  padding: 14px 0;
  margin: 0 10px 0 0;
}

.profile-footer__link--secondary {
  background-color: theme('colors.cyan.900');
  box-shadow: inset 0 0 0 0 theme('colors.cyan.900');
}

.profile-footer__link--secondary:hover {
  box-shadow: inset 100px 0 0 0 theme('colors.emerald.400');
  color: theme('colors.slate.800')
}

.profile-footer__link--primary {
  background-color: theme('colors.emerald.400');
  box-shadow: inset 0 0 0 0 theme('colors.emerald.400');
}

.profile-footer__link--primary:hover {
  color: theme('colors.white');
  box-shadow: inset 100px 0 0 0 theme('colors.cyan.900');
}


.profile-photo__link--linkedin {
  background: #1773ea
}

.profile-photo__link--github {
  background: #11193b;
}

.icon-github {
  height: 1.25em;
}
</style>