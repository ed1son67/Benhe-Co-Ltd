<template>
    <div class="upload">
        <div @click="handleClick">
            <input
                ref="input"
                type="file"
                @change="handleChange"
                multiple="true"
                
            >
            <div class="upload-item" v-for="item in uploadItems" :key="item.id">
                <Icon type="ios-camera" v-show="!item.completePreview"></Icon>
                <div class="preview-container" v-show="item.completePreview">
                    <img :src="item.src">
                    <div class="mask-container">
                        <Icon type="ios-eye-outline" @click.stop="handleView()"></Icon>
                        <Icon type="ios-trash-outline" @click.stop="handleRemove()"></Icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cusUpload',
        data() {
            return {
                completePreview: false,
                uploadItems: [
                    {
                        src: '',
                        completePreview: false
                    },
                    {
                        src: '',
                        completePreview: false
                    },
                    {
                        src: '',
                        completePreview: false
                    }
                ]
            }
        },
        methods: {
            /**
             * 读取图片文件
             */
            readFile(file, index) {
                console.log(index);
                if (window.FileReader){ //检测浏览器是否支持    
                    let reader = new FileReader(); 
                    reader.readAsDataURL(file);

                    // 文件读取完毕
                    reader.onload = (e) => {
                        this.uploadItems[index].src = e.target.result;
                        this.uploadItems[index].completePreview = true;

                    }; 
                } else {
                    let URL = window.URL || window.webkitURL; 
                    let imageURL = URL.createObjectURL(file);
                }
            },
            /**
             *  点击放大图片功能 
             */
            handleView() {
            },
            /**
             *  点击删除图片功能 
             */
            handleRemove() {

            },
            handleClick () {
                if (this.disabled) return;
                this.$refs.input.click();
            },
            handleChange(e) {
                const files = e.target.files;
                console.log(files)
                if (!files) {
                    return;
                }
                let i = 0;
                for (const key in files) {
                    if (files.hasOwnProperty(key)) {
                        const element = files[key];
                        this.readFile(element, i++);
                    }
                }
                i = 0;

                this.$refs.input.value = null;
            },
            uploadFiles (files) {
                let postFiles = Array.prototype.slice.call(files);
                if (!this.multiple) postFiles = postFiles.slice(0, 1);

                if (postFiles.length === 0) return;

                postFiles.forEach(file => {
                    this.upload(file);
                });
            },
        },
        props: {
           
        },
    }
</script>

<style lang="" scoped>
    input[type="file"]{
        display: none;
    }
    .upload {
        margin-top: 20px;
    }
    
    .upload-item {
        height: 158px;
        width: 158px;
        margin-right: 25px;
        line-height: 158px;
        border-radius: 4px;
        overflow: hidden;
        border: 1px dashed #dcdee2;
        background-color: #fff;
        text-align: center;
        cursor: pointer;
        float: left;        
    }
    .upload-item i {
        font-size: 37px;
    }
    .upload-item:hover {
        border-color: #2d8cf0;

    }
    .preview-container {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        position: relative;
        border: none;
    }
    .preview-container img{
        width: 100%;
        height: 100%;
    }
    .mask-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: transparent;
        transition: all .3s ease;
        z-index: 99999;
    }
    .preview-container:hover .mask-container{
        background: rgba(0,0,0,.6);
    }
    .mask-container i {
        color: #fff;
        font-size: 40px;
        cursor: pointer;
        margin: 0 2px;
    }
    
</style>