export const MainRoutes: any[] = [{
  path: '/home',
  component: () => import('../views/MainHome.vue'),
  name: 'Main'
}, {
  path: '/resume',
  component: () => import('../views/MainResume.vue'),
  name: 'Resume'
}]