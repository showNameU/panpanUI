<template>
    <div>
        <button class="but">{{value}}</button>
    </div>
</template>
<script>
    export default {
        props:["value"],
        name:"ls-concise-button"
    }
</script>
<style lang="less" scoped>
    .but{
        outline: none;
        width: 150px;
        height: 50px;
        background-color: transparent;
        border: 1px solid #eb0028;
        font-size: 18px;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
    }
    .but::before{
        content: "";
        z-index: -1;
        position: absolute;
        width: 150px;
        height: 50px;
        background-color: #eb0028;
        left: -150px;
        top: -1px;
        transition: left 0.5s;
    }
    .but:hover::before{
        left: 0;
    }
    .but:hover{
        color: white;
    }
</style>