import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import echartsRoutes from "@/router/echarts/echarts-routes";

Vue.use(VueRouter);

const routes = [
  ...echartsRoutes,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
