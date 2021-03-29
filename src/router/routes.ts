import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      { path: '/stacks', name: 'stacks', component: () => import('pages/Stacks.vue') },
      { path: '/academic', name: 'academic', component: () => import('pages/Academic.vue') },
      { path: '/frontend', name: 'frontend', component: () => import('pages/Frontend.vue') },
      { path: '/backend', name: 'backend', component: () => import('pages/Backend.vue') },
      { path: '/fullstack', name: 'fullstack', component: () => import('pages/Fullstack.vue') }
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
