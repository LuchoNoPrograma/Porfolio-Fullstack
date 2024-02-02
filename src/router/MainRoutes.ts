import {RouteRecordRaw} from "vue-router";

export const MainRoutes: RouteRecordRaw[] = [{
  path: '/about-me',
  alias: ['/', '/home', '/inicio'],
  component: () => import('../views/AboutMe.vue'),
  name: 'AboutMe'
}, {
  path: '/resume',
  component: () => import('../views/Resume.vue'),
  name: 'Resume'
}, {
  path: '/projects',
  component: () => import('../views/Projects.vue'),
  name: 'Projects'
}, {
  path: '/projects/:projectId',
  component: () => import('../views/ProjectsDetail.vue'),
  name: 'ProjectsDetail'
}, {
  path: '/tech-skills',
  component: () => import('../views/TechSkills.vue'),
  name: 'TechSkills'
}]