<template>
    <div id="app">
        <div class="box">
            <ls-gridding>
                <ls-item slot="one" type="img" :resource="path1"></ls-item>
                <ls-item slot="two">
                    <p>画影柳青青，锦书慢慢行。可惜经年辗转，我们踏遍锦书万千，却再也无法相见</p>
                </ls-item>
                <ls-item slot="three" type="img" :resource="path2"></ls-item>
                <ls-item slot="four">
                    <p>画影柳青青，锦书慢慢行。可惜经年辗转，我们踏遍锦书万千，却再也无法相见</p>
                </ls-item>
                <ls-item slot="five" type="img" :resource="path3"></ls-item>
                <ls-item slot="six">
                    <p>画影柳青青，锦书慢慢行。可惜经年辗转，我们踏遍锦书万千，却再也无法相见</p>
                </ls-item>
            </ls-gridding>
        </div>
        <div class="box">
            <ls-comment :category="category" :mainSrc="mainSrc" :headSrc="headSrc" :headName="headName"
                        :content="content"></ls-comment>
        </div>
        <div class="box">
            <ls-card :src="cardSrc" :content="cardContent"></ls-card>
        </div>
        <div class="box">
            <ls-section :src="sectionSrc" :title="sectionTitle" :desc="sectionDesc" :look="sectionLook"></ls-section>
        </div>
        <div class="box">
            <ls-product-card :src="productSrc" :title="productTitle" :desc="productDesc"
                             :look="productLook"></ls-product-card>
        </div>
        <div class="box">
            <ls-header-image width="300" :href="headerHref" :src="headerSrc" :title="headerTitle" :desc="headerDesc"
                             :look="headerLook"></ls-header-image>
        </div>
        <div class="box" style="display: none;">
            <ls-special-button></ls-special-button>
        </div>
        <div class="box">
            <ls-concise-button value="点击购买"></ls-concise-button>
        </div>
        <div style="background-color: gray;width: 100%;padding: 20px">
            <ls-navigation-pro :navList="navList"></ls-navigation-pro>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                zhi: "按钮",
                isActive: 1,
                src: require("./assets/2.jpg"),
                path1: require("./assets/03_bg.jpg"),
                path2: require("./assets/04.jpg"),
                path3: require("./assets/07.jpg"),
                mainSrc: 'https://fms.res.meizu.com/dms/2020/05/28/42b2c0bf-f5b0-4f0f-9023-3df3d10a0662.png',
                headSrc: 'https://img-res.mzres.com/img/download/uc/13/28/97/03/00/13289703/w100h100?t=1597989692',
                headName: '小宇先森',
                content: '多一点耐心，多一点发现，多一点想象，去留意身边风景。',
                category: '魅族17摄影',
                cardSrc: 'https://fms.res.meizu.com/dms/2020/07/27/9e3ff75a-cc9c-441b-951f-4f01c0ca0237.png',
                cardContent: '全新滤镜导入',
                sectionSrc: 'https://fms.res.meizu.com/dms/2020/05/13/6ae5ad1c-de3d-437d-a6d2-a2b2a6c942c9.jpg',
                sectionTitle: 'Pandaer 系列手机壳',
                sectionDesc: 'Pandaer 家族 潮趣个性',
                sectionLook: '￥49',
                productSrc: 'https://openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png',
                productTitle: '魅族 HIFI 解码耳放',
                productDesc: '高性能DAC芯片|纯净HiFi音质|600Ω高阻抗推力',
                productLook: '￥169',
                headerSrc: '//www-file.huawei.com/-/media/corp2020/home/box/1/sz-airport1.jpg',
                headerTitle: '活动',
                headerDesc: '2020华为5G中国行',
                headerLook: '最热5G资讯、大咖观点与应用案例分享',
                headerHref: 'https://www.huawei.com/',
                navList: ["商城", "服务", "论坛", "品牌", "系统", "售后"]
            }
        }
    }
</script>

<style scoped>
    #app {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap-reverse;
    }
</style>
