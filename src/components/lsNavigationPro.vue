<template>
    <div class="nav" style="background-color: white">
        <img :src="imgSrc"/>
        <ul>
            <li v-for="(item,index) in navList" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ls-navigation-pro",
        props:["navList"],
        data(){
            return {
                imgSrc:require('../assets/logo.png')
            }
        }
    }
</script>

<style scoped lang="less">
    .nav{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul{
            margin-right: 20px;
            list-style: none;
            li{
                float: left;
                margin: 0px 20px;
                cursor: pointer;
                position: relative;
            }
            li::after{
                content: "";
                position: absolute;
                width: 0px;
                height: 3px;
                background-color: #f50514;
                bottom: -5px;
                left: -2px;
                transition: width 0.3s;
            }
            li:hover::after {
                width: 110%;
            }
        }
        img{
            margin-left: 20px;
            width: 40px;
            height: 40px;
        }
    }

</style>