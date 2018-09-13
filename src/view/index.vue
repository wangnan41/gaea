<template>
    <div>
        <j-loading :visible="!show"/>
        <div class="wrapper" v-if="show">
            <div class="box">我是22首页</div>
            <div class="box1">
                <span>测试autoprefixer补齐问题</span>
                <span>测试autoprefixer补齐问题</span>
            </div>
            <router-link to="/detail"><h3>去详情页1</h3></router-link>
            <router-link to="/detail2"><h3>去详情页2（懒加载）</h3></router-link>
        </div>
    </div>
    
    
</template>

<script>

import axios from 'axios';
import Qs from 'qs';

export default {
    data(){
        return{
            timer:null,
            show:false,
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

            this.timer = setTimeout(()=>{
                this.show = true;
            },1000)
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
