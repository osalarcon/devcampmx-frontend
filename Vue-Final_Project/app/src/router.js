import Vue from "vue";
import Router from "vue-router";

import Login from "./views/Login.vue";
import Landing from "./views/Landing.vue";
import Dashboard from "./views/Dashboard.vue";
import TaskDashboard from "./views/TaskDashboard.vue";

Vue.use(Router);

// const functionDeFalidacion(to, from, next) => {
//   //validacion de seguridad
// }

//beforeEnter para validación de seguridad
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/landing",
      name: "landing",
      component: Landing,
    },
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/:type",
          name: "TaskDashboard",
          component: TaskDashboard
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
