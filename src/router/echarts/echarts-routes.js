// echarts 4 showcase
const routes = [
  {
    // 基本折线图
    path: '/echarts/line-chart-001',
    component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/line-chart/line-chart-001.vue')
  },
  {
    // 更实用的折线图, 主要参照对象
    // http://localhost:YOUR_PORT/echarts/line-chart-002
    path: '/echarts/line-chart-002',
    component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/line-chart/line-chart-002.vue')
  },
  {
    // 更实用的柱状图, 主要参照对象
    path: '/echarts/bar-chart-002',
    component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/bar-chart/bar-chart-002.vue')
  },
  {
    // 2个series的柱状图, 没用dataset
    path: '/echarts/bar-chart-001',
    component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/bar-chart/bar-chart-001.vue')
  }
];
export default routes;
