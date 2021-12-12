import { Vue } from 'vue';
import { Router } from 'vue-router';

const route = (path, component, meta) => {
      return {
        path: path,
        component: component || "NotFound",
        meta: meta || {} 
      }},

      routing = [
        route("/", "landing"),
        route("*")
      ],

      routes = routing.map(route => {
        return {
            ...route,
            component: () => import(`../components/${route.conponent}.vue`)
      }});

Vue.use(Router)

export default new Router({ mode: "history", routes })
