<template>
    <div>
     <j-loading txt="加载中..." :custom="true" :visible="!show" />
    <div class="wrapper" v-if="show">
        <div class="box">我是详情页2</div>
        <router-link to="/"><h3>去首页</h3></router-link>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
            timer:null,
        }
    },
    components: {
    },
    methods:{
    },
    mounted(){
        this.timer = setTimeout(()=>{
            this.show  = true;
        },3000)
    },
    destroyed(){
        this.timer = null;
    }
}
</script>

<style lang="scss" scoped>
.box{
    font-size:.5rem;
}
h3{
    font-size:.3rem;
}
</style>
