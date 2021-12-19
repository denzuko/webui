import { createWebHistory, createRouter } from 'vue-router';
import LandingPage from '../components/landing-page.vue';

const RouteComponent = (path, component, meta) => ({
  path,
  component: component || 'NotFound',
  meta: meta || {},
});

const routes = [
  RouteComponent('/', LandingPage),
  RouteComponent('*'),
];

export default createRouter({
  history: createWebHistory,
  routes,
});
