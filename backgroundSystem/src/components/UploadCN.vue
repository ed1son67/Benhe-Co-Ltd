<template>
    <div class="root-container">
        <header class="title">中文产品参数</header>
        <main>
            <Form ref="formValidate" :model="formData" :label-width="70" :rules="ruleValidate" class="form-container">
                <FormItem label="名称：" prop='name'>
                    <Input v-model="formData.name" placeholder="请输入产品名称" size="large"></Input>
                </FormItem>
                <Row>
                    <Col span="8">
                        <FormItem label="新品：" prop='isNew'>
                            <RadioGroup v-model="formData.isNew" size="large">
                                <Radio label="是" ></Radio>
                                <Radio label="否" ></Radio>
                            </RadioGroup>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="首页热推：" prop='isHot'>
                            <RadioGroup v-model="formData.isHot" size="large">
                                <Radio label="是"></Radio>
                                <Radio label="否"></Radio>
                            </RadioGroup>
                        </FormItem>
                    </Col>
                    <Col span="8">
                        <FormItem label="品牌：" prop='trademark'>
                            <RadioGroup v-model="formData.trademark" size="large">
                                <Radio label="本合"></Radio>
                                <Radio label="林振合"></Radio>
                            </RadioGroup>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="种类：" prop='kind'>
                    <Select v-model="formData.kind" style="width:200px" >
                        <Option v-for="kind in kinds" :value="kind.name" :key="kind.name">{{ kind.name }}</Option>
                    </Select>
                </FormItem>
                <FormItem label="规格：" prop='weight'>
                    <Input v-model="formData.weight" placeholder="请输入产品规格" size="large"></Input>
                </FormItem>
                <FormItem label="口味：" prop='flavor'>
                    <Input v-model="formData.flavor" placeholder="请输入产品口味" size="large"></Input>
                </FormItem>
                 <FormItem label="产地：" prop='originPlace'>
                    <Input v-model="formData.originPlace" placeholder="请输入产品产地" size="large"></Input>
                </FormItem>
                <header class="title">中文产品图片</header>
                <p>请上传三张图片，第一张图片将会作为产品列表展示</p>
                <FormItem :label-width="0" prop="upload"> 
                    <cusUpload
                        v-on:can-upload="changeUploadState"
                    ></cusUpload>
                </FormItem>
                <FormItem :label-width="0">
                    <Button type="warning" @click="handleReset('formValidate')" >重置</Button>
                    <Button type="primary" style="margin-left: 8px" @click="handleSubmit('formValidate')">提交</Button>
                </FormItem>
            </Form>
        </main>
    </div>
</template>

<script>
    import {myAxios} from '../ajax.js'
    import cusUpload from './Upload.vue';
    export default {
        name: 'UploadCN',
        components: {
            cusUpload   
        },
        watch: {
            
        },
        data() {
            const validateUpload = (rule, value, callback) => {
                console.log(this.canUpload)
                if (!this.canUpload) {
                    callback(new Error('请上传三张图片'));
                } else {
                    callback();
                }
            };
            return {
                fileList: '',
                canUpload: false,
                kinds: [
                    {
                        name: '膨化',
                    }, {
                        name: '压片糖',
                    }, {
                        name: '奶糖',
                    }, {
                        name: '凝胶糖果',
                    }, {
                        name: '硬糖'
                    }
                ],
                formData: {
                    name: '',
                    isNew: '',
                    isHot: '',
                    flavor: '',
                    weight: '',
                    originPlace: '',
                    trademark: '',
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '输入不可以为空', trigger: 'blur' }
                    ],
                    weight: [
                        { required: true, message: '输入不可以为空', trigger: 'blur' }
                    ],
                    flavor: [
                        { required: true, message: '输入不可以为空', trigger: 'blur' }
                    ],
                    originPlace: [
                        { required: true, message: '输入不可以为空', trigger: 'blur' }
                    ],
                    isHot: [
                        { required: true, message: '选择不可以为空', trigger: 'blur' }
                    ],
                    isNew: [
                        { required: true, message: '选择不可以为空', trigger: 'blur' }
                    ],
                    trademark: [
                        { required: true, message: '选择不可以为空', trigger: 'blur' }
                    ], 
                    kind: [
                        { required: true, message: '选择不可以为空', trigger: 'blur' }
                    ],
                    upload: [
                        { validator: validateUpload, trigger: 'blur' }             
                    ]
                }
            }
        },
        methods: {
            changeUploadState(file) {
                file === '' ? this.canUpload = false: this.canUpload = true;
                this.fileList = file;
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) this.post();
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            post() {
                
                let data = new FormData();
                console.log(data)

               
                let form = this.formData;

                form.isNew === '是' ? form.isNew = 1 : form.isNew = 0;
                form.isHot === '是' ? form.isHot = 1 : form.isHot = 0;

                data.append('picture1', this.fileList[0])
                data.append('picture1', this.fileList[1])
                data.append('picture1', this.fileList[2])

                for (const key in form) {
                    if (form.hasOwnProperty(key)) {
                        const element = form[key];
                        data.append(key, element);
                    }
                }
             


                myAxios.uploadProduct(data).then((res) => {

                }).catch((err) => {

                });
            }
        }
    }
</script>

<style lang="css" scoped>
   
    .form-container {
        width: 800px;
    }
    .upload-container {
        margin-top: 20px;
    }
    .upload-box {
        height: 158px;
        width: 158px;
    }
    .upload-box div {
        height: 158px;
        line-height: 158px;
    }

    .preview-container {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
    }
    .demo-upload-list img{
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