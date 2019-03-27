<template>
    <div class="root">
        <header class="title">当前BANNER</header>
        <main>
            <div class="banner-container">
                <img :src="oss + nowSrc" >
            </div>
            <Button type="primary" class="updateBanner-button-container">更新</Button>
        </main>
    </div>
</template>

<script>
    import { myAxios } from "../ajax.js";
    export default {
        name: 'Banner',
        data() {
            return {
                nowSrc: '',
            }
        },
        methods: {
            queryBanner() {
                myAxios.getBanner().then((res) => {
                    console.log(res)
                    this.nowSrc = res.data.url;
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
        mounted() {
            // get now Banner  
            this.queryBanner();
        }
    }
</script>

<style lang="css" scoped>
    .root {
        margin: 48px;   

    }
    .banner-container {
        height: 483px;
        width: 1368px;
        margin: 32px 0;
        border: 1px solid #000;
    }
    .banner-container img {
        height: 459px;
        width: 1344px;
        margin: 12px; 
    }
    .updateBanner-button-container {
        height: 48px;
        width: 144px;
        font-size: 16px;
    }
</style>