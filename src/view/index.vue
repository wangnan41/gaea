<template>
    <div class="wrapper">
        <div class="box">我是22首页</div>
        <div class="box1">
            <span>测试autoprefixer补齐问题</span>
            <span>测试autoprefixer补齐问题</span>
        </div>
        <router-link to="/detail"><h3>去详情页1</h3></router-link>
        <router-link to="/detail2"><h3>去详情页2（懒加载）</h3></router-link>
    </div>
</template>

<script>

import axios from 'axios';
import Qs from 'qs';

export default {
    data(){
        return{
        }
    },
    components: {

    },
    methods:{
        query(){
            // axios.post('/kd/index',Qs.stringify({})).then((response) => {
            //         let result = response.data;
            //         if(result.success) {

            //             succ && succ(result);
            //         } else {
                        
            //             err && err(result);
            //         }
            //     })
            //     .catch((error) => {

            //        // err && err();
            //     });
        },
        test(){
            let obj = {
                name:'wang',
                age:'19',
            }    
            let obj2 = Object.assign({},obj);
        }
    },
    mounted(){
        this.query();
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    .box{
        font-size:.5rem;
    }
    h3{
        font-size:.3rem;
    }
    .box1{
        display: flex;
        transform:rotate(7deg);
    }
    //图片引用
    //background:url('../asset/img/loading.gif');
}
</style>
