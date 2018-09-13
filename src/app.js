import Vue from 'vue';
import App from './app.vue';
import router from './router.js';
//import 'babel-polyfill' 
//如需兼容低端浏览器，请打开此注释（如果是对外的项目，不建议开启，比较大70kb。可以自己安装babel针对你的es6的写法
//加入了for of 和 Object.assign 常用的两个转换 ）

import Loading from './component/loading/index';
import Skeleton from './component/skeleton/index';
Vue.use(Skeleton);
Vue.use(Loading);

const app = new Vue({
  router,
  render: h => h(App),
  mounted () {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app');
