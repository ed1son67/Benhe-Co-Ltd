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
                                <Radio label="是"></Radio>
                                <Radio label="否"></Radio>
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
                <p>必须上传三张图片，第一张图片将会作为产品列表展示</p>
                <FormItem :label-width="0" prop="upload"> 
                    <!-- <div class="upload-container">
                        <Upload
                            ref="upload"
                            :show-upload-list="false"
                            :on-success="handleSuccess"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload"
                            multiple
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/"
                            class="upload-box"
                            >
                            <div >
                                <Icon type="ios-camera" size="37"></Icon>
                                <div class="preview-container">
                                    <img >
                                    <div class="mask-container">
                                        <Icon type="ios-eye-outline" @click.stop="handleView()"></Icon>
                                        <Icon type="ios-trash-outline" @click.stop="handleRemove()"></Icon>
                                    </div>
                                </div>
                            </div>
                        </Upload>
                    </div> -->
                    <cusUpload></cusUpload>
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
    import cusUpload from './Upload.vue';
    export default {
        name: 'UploadCN',
        components: {
            cusUpload   
        },
        data() {
            return {
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

                    imgName: '',
                    visible: false,
                    uploadList: [

                    ]
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
                        { required: true, message: '选择不可以为空', trigger: 'blur' }                        
                    ]
                    // mail: [
                    //     { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    //     { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    // ],
                    // city: [
                    //     { required: true, message: 'Please select the city', trigger: 'change' }
                    // ],
                    // gender: [
                    //     { required: true, message: 'Please select gender', trigger: 'change' }
                    // ],
                    // interest: [
                    //     { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    //     { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    // ],
                    // date: [
                    //     { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    // ],
                    // time: [
                    //     { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    // ],
                    // desc: [
                    //     { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    //     { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    // ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
                console.log(123);
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
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