import { createWebHistory, createRouter } from 'vue-router'
import Landing from '@/components/landing.vue'

const RouteComponent = (path, component, meta) => {
    return {
        path: path,
        component: component || "NotFound",
        meta: meta || {}
    }
}

let routes = [
  RouteComponent("/", "landing"),
  RouteComponent("*")];

export default createRouter({
    history: createWebHistory,
    routes
});
