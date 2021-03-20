import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/academic', component: () => import('pages/Academic.vue') },
      { path: '/frontend', component: () => import('pages/Frontend.vue') },
      { path: '/backend', component: () => import('pages/Backend.vue') },
      { path: '/fullstack', component: () => import('pages/Fullstack.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
