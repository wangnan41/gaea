<template>
    <div class="j-loading-wrap" v-show="visible">
        <div class="j-mask"></div>
        <div class="j-loading" v-if="custom">
            <span class="j-icon-rotate">
                <img :src="imgSrc" v-if="imgSrc" />
                <img src="//img10.360buyimg.com/uba/jfs/t1/5585/27/3265/8496/5b98d732E3a0bbaa5/aeda947ed0e308a4.gif" />
            </span>
            <p class="j-loading-txt" v-if="txt!=''">{{txt}}</p>
        </div>
        <!--标准的loading-->
        <div v-else class="j-loading">
            <img src="//img30.360buyimg.com/uba/jfs/t1/4301/28/3277/37674/5b98accaEa1b54396/1670899a18328baa.gif" />
        </div>

    </div>
</template>
<script>
    export default{
        name:'j-loading',
        props:{
	        visible:{
	            type:Boolean,
                default:false,
            },
            txt:{
                type:String,
                default:''
            },
            custom:{
                type:Boolean,
                default:false
            },
            imgSrc:{
                type:String,
                defalut:'',
            }
	            
	    },
        data(){
            return{
                loadingImg:'',
            }
        },
        watch:{

        },
        computed:{

        },
        methods:{

        },
        mounted(){

        }
    }
</script>

<style lang="scss">

    @keyframes rotation{
        0% {-webkit-transform: rotate(0deg);}
        100% {-webkit-transform: rotate(360deg);}
    }
    .j-loading-wrap{
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        z-index: 9999;
        .j-mask{
            height:100%;
            width:100%;
        }
        .j-loading{
            height:1rem;
            width:1rem;
            position: fixed;
            transform: translate3d(-50%,-50%,0);
            -webkit-transfrom:translate3d(-50%,-50%,0);
            top:50%;
            left:50%;
            text-align:center;
            img{
            max-width:100%;
            max-height:100%;
            }
        }
        .j-loading-txt{
            font-size:12px;
            color:#666;
            white-space:nowrap;
        }
        .j-icon-rotate{
            display: inline-block;
         
        }
    
    }
    

</style>