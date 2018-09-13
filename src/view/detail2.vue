<template>
    <div>
        <div v-if="!show">
             <skeleton-loading>
                <row>
                    <square-skeleton :count="1" :boxProperties="{
                        top:0,
                        height:'3.75rem'
                    }"></square-skeleton>
                </row>
                <div style="padding:0 0.2rem">
                    <row :gutter="{top:'0.2rem'}">
                        <column :span="5" >
                            <square-skeleton  :boxProperties="{
                            height:'0.2rem'
                        }"></square-skeleton>
                        
                        </column>
                        <column :span="11" >
                            <square-skeleton  backColor="#fff" :boxProperties="{
                            height:'0.2rem',
                        
                        }"></square-skeleton>
                        
                        </column>
                        <column :span="8" >
                            <square-skeleton :boxProperties="{
                            
                            height:'0.2rem',
                           
                        }"></square-skeleton>
                        
                        </column>
                    </row>
                    <row :gutter="{top:'0.2rem'}">
                        <column :span="5" >
                            <square-skeleton  :boxProperties="{
                            height:'0.2rem'
                        }"></square-skeleton>
                        
                        </column>
                        <column :span="16" >
                            <square-skeleton  backColor="#fff" :boxProperties="{
                            height:'0.2rem',
                        
                        }"></square-skeleton>
                        
                        </column>
                        <column :span="3" >
                            <square-skeleton  :boxProperties="{
                            
                            height:'0.2rem',
                           
                        }"></square-skeleton>
                        
                        </column>
                    </row>

                    <row :gutter="{top:'0.4rem'}">
                        <column  :span="2">
                            <square-skeleton :boxProperties="{
                            height:'0.2rem',
                            top:'0.2rem'
                        }"></square-skeleton>
                        
                        </column>
                        <column  :span="1" >
                            <square-skeleton  backColor="#fff" :boxProperties="{
                            height:'0.2rem',
                            top:'0.2rem'
                        }"></square-skeleton>
                        
                        </column>
                        <column  :span="21">
                            <square-skeleton :boxProperties="{
                            height:'0.2rem',
                            top:'0.2rem'
                        }"></square-skeleton>
                        
                        </column>
                    </row>

                    <row :gutter="{top:'0.2rem'}">
                         <column  :span="20">
                            <square-skeleton :boxProperties="{
                            height:'0.2rem',
                        }"></square-skeleton>
                        
                        </column>
                    </row>

                    <row :gutter="{top:'1rem'}">
                         <column  :span="4">
                            <square-skeleton :boxProperties="{
                            height:'0.2rem',
                        }"></square-skeleton>
                        
                        </column>
                    </row>
                    <row :gutter="{top:'0.2rem'}">
                         <column  :span="24">
                            <square-skeleton :count="5" :boxProperties="{
                            height:'0.2rem',
                            top:'0.4rem'

                        }"></square-skeleton>
                        </column>
                        
                    </row>
                    <row :gutter="{top:'0.4rem'}">
                         <column  :span="20">
                            <square-skeleton :boxProperties="{
                            height:'0.2rem',
                        }"></square-skeleton>
                        </column>
                        
                    </row>
                    
                  
                    
                </div>
            </skeleton-loading>
        </div>
        <div class="wrapper" v-if="show">
            <div class="box">我是详情页1</div>
            <router-link to="/"><h3>去首页</h3></router-link>
        </div>
    </div>
</template>

<script>
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
    },
    mounted(){
        this.timer =setTimeout(()=>{
            this.show = true;
        },3000)
    },
    destroyed(){
        this.timer = null;
    }
}
</script>

<style lang="scss" >
    .box{
        font-size:.5rem;
    }
    h3{
        font-size:.3rem;
    }
</style>
