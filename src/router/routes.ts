import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/stacks',
        name: 'stacks',
        component: () => import('src/pages/StacksPage.vue'),
      },
      {
        path: '/academic',
        name: 'academic',
        component: () => import('src/pages/AcademicsPage.vue'),
      },
      {
        path: '/frontend',
        name: 'frontend',
        component: () => import('src/pages/FrontendPage.vue'),
      },
      {
        path: '/backend',
        name: 'backend',
        component: () => import('src/pages/BackendPage.vue'),
      },
      {
        path: '/fullstack',
        name: 'fullstack',
        component: () => import('src/pages/FullstackPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
