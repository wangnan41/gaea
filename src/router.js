import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './view/index.vue';
import Detail from './view/detail.vue';
import Detail2 from './view/detail2.vue';

//懒加载（按需加载）
//const Detail2 = () => import('./view/detail2.vue');
//如果需要利用预渲染则不能懒加载输出页面，可以先改成直接输出，输出html后，交付给后端后，再改回来js就变懒加载了

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Index },
  { path: '/detail', component: Detail },
  { path: '/detail2', component: Detail2 }
];

const router = new VueRouter({
	mode:'history',
	routes
});

export default router;
