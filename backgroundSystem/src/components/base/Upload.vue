<template>
    <div class="upload">
        <input
            ref="input"
            type="file"
            @change="handleChange"
            accept=".png, .jpg, jpeg"
            name="pciture"
        >
        <div class="upload-item" v-for="item in uploadItems" :key="item.id" @click="handleClick(item.id)">
            <Icon type="ios-camera" v-show="!item.completePreview"></Icon>
            <div class="preview-container" v-show="item.completePreview">
                <img :src="item.src">
                <div class="mask-container">
                    <Icon type="ios-eye-outline" @click.stop="handleView(item.id)"></Icon>
                    <Icon type="ios-trash-outline" @click.stop="handleRemove(item.id)"></Icon>
                </div>
            </div>
        </div>
        <Modal title="查看大图" v-model="visible">
            <img :src="nowSrc" v-if="visible" style="width: 100%">
                <div slot="footer">
                <Button type="primary" size="large" long  @click="visible = false">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'cusUpload',
        data() {
            return {
                length: this.fileLength,
                visible: false,
                nowSrc: '',
                fileList: [
                    
                ],
                nowIndex: 0,
                completePreview: false,
                uploadItems: [
                    {
                        src: '',
                        completePreview: false,
                        id: 0
                    },
                    {
                        src: '',
                        completePreview: false,
                        id: 1
                    },
                    {
                        src: '',
                        completePreview: false,
                        id: 2

                    }
                ]
            }
        },
        methods: {
            /**
             * 设置默认的图片链接
             */
            setDefaultUrls() {
        
                console.log(this.defaultUrls);
                for (let index = 0; index < this.uploadItems.length; index++) {
                    this.uploadItems[index].completePreview = true;
                    this.uploadItems[index].src = this.oss + this.defaultUrls[index];
                    
                }
            },
            /**
             * 读取图片文件
             */
            readFile(file) {
                console.log(window.FileReader)
                if (window.FileReader){ //检测浏览器是否支持    
                    let reader = new FileReader(); 
                    reader.readAsDataURL(file);

                    // 文件读取完毕
                    reader.onload = (e) => {
                        this.uploadItems[this.nowIndex].src = e.target.result;
                        this.uploadItems[this.nowIndex].completePreview = true;
                    }; 
                } else {
                    let URL = window.URL || window.webkitURL; 
                    let imageURL = URL.createObjectURL(file);
                    this.uploadItems[this.nowIndex].src = e.target.result;
                    this.uploadItems[this.nowIndex].completePreview = true;
                }
            },
            /**
             *  点击放大图片功能 
             */
            handleView(index) {
                this.nowSrc = this.uploadItems[index].src;
                this.visible = true;
            },
            /**
             *  点击删除图片功能 
             */
            handleRemove(index) {
                this.nowIndex = index;                
                this.fileList[index] = '';
               
                this.uploadItems[index].src = "";
                this.uploadItems[index].completePreview = false;
                this.length--;
            },
            handleClick (index) {
                this.nowIndex = index;
                if (this.uploadItems[index].completePreview == false) {
                    this.$refs.input.click();   
                }
            },
            handleChange(e) {
                
                const files = e.target.files;
               
                if (!files) {
                    return;
                }

                this.fileList[this.nowIndex] = files[0];
                this.length++;
               
               
                this.readFile(files[0]);
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
        watch: {
            length(val) {
                this.$emit('can-upload', {pos: this.nowIndex, file: this.fileList[this.nowIndex]});
            },
            defaultUrls() {
                this.setDefaultUrls();
            }
        },
        props: {
            fileLength: {
                type: Number,
                default: 0
            },
            defaultUrls: {
                type: Array,
                default: []
            }
        },
    }
</script>

<style lang="" scoped>
    input[type="file"]{
        display: none;
    }
    .upload {
        margin: 20px 0 10px 0;
        height: 160px;
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
        z-index: 999;
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