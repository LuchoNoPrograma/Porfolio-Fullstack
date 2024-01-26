export const MainRoutes: any[] = [{
  path: '/about-me',
  alias: ['/', '/home', '/inicio'],
  component: () => import('../views/AboutMe.vue'),
  name: 'AboutMe'
}, {
  path: '/resume',
  component: () => import('../views/Resume.vue'),
  name: 'Resume'
}]