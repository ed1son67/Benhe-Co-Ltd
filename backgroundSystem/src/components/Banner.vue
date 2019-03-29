<template>
    <div class="root">
        <header class="title">当前BANNER</header>
        <main>
            <div class="banner-container">
                <img :src="nowSrc" >
            </div>
            <Upload 
                :format="['jpg','jpeg','png']"
                v-on:img-preview="previewImg"
                action="/api/admin/updatebanner"
                name="banner"
                :comfirmUpload="comfimUpload"
                :on-error="handleError"
                :on-success="handleSuccess"
                :on-format-error="handleFormatError"
                style="display:inline-block;"
                :show-upload-list="false"
                >
                <Button type="primary" class="updateBanner-button-container">更新</Button>
                
            </Upload>
                <Button v-show="showComfirm" style="display:inline-block; height: 45px; width: 120px; margin-left: 5px; font-size: 16px;" type="success" @click="upload">提交</Button>
        </main>
    </div>
</template>

<script>
    import { myAxios, IP } from "../ajax.js";
    import cusUpload from './Upload.vue';
    export default {
        name: 'Banner',
        data() {
            return {
                nowSrc: '',
                comfimUpload: false,
                showComfirm: true
            }
        },
        components: {
            
            cusUpload
        },
        methods: {
            previewImg(path) {
                this.nowSrc = path;
            },
            queryBanner() {
                myAxios.getBanner().then((res) => {
                    console.log(res)
                    this.nowSrc = this.oss + res.data.url;
                }).catch((err) => {
                    console.log(err);
                })
            },
            
            upload() {
                console.log( this.comfimUpload)
                this.comfimUpload = true;
            },
            handleError (error) {
                this.$Notice.error({
                    title: '上传失败',
                    desc: '检查你的网络后重试'
                });
                this.comfimUpload = false;

            },
            handleSuccess (res, file) {
                this.$Notice.success({
                    title: '上传成功',
                    desc: '图片已成功上传'
                });
                this.comfimUpload = false;
            },
            handleFormatError (file) {
                this.$Notice.error({
                    title: '上传失败',
                    desc: '上传文件的格式应该为PNG, JPG 或 JPEG'
                });
                this.comfimUpload = false;

            },
           
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
        height: 45px;
        width: 120px;
        margin-right: 10px;
        font-size: 16px;
    }
</style>