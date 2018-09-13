import SkeletonLoading from './src/j-skeleton.vue';
import SquareSkeleton from './src/basic/square.vue';
import CircleSkeleton from './src/basic/circle.vue';
import Column from './src/layout/column.vue';
import Row from './src/layout/row.vue';

function install(Vue) {
    if(install.installed) return;
    install.installed = true;
    Vue.component('SkeletonLoading', SkeletonLoading);
    Vue.component('SquareSkeleton', SquareSkeleton);
    Vue.component('CircleSkeleton', CircleSkeleton);
    Vue.component('Column', Column);
    Vue.component('Row', Row);
}

const VueSkeletonLoading = {
    install,
    SkeletonLoading,
    SquareSkeleton,
    CircleSkeleton

};

if (typeof window !== undefined && window.Vue) {
    window.Vue.use(SkeletonLoading);
}


export default VueSkeletonLoading;

