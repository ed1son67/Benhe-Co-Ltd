<template>
    <div class="form-container">
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
                    <FormItem label="首页热推：" prop='isHot' :label-width="90">
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
                <Select v-model="formData.kind" style="width:200px" v-if="language == ''">
                    <Option v-for="kind in kinds" :value="kind.name" :key="kind.index">{{kind.name}}</Option>
                </Select>
                 <Select v-model="formData.kind" style="width:200px" v-else >
                    <Option v-for="kind in kinds" :value="kind.enName" :key="kind.index">{{kind.enName}}</Option>
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
            <header class="title">产品图片</header>
            <p>请上传三张图片，第一张图片将会作为产品列表展示</p>
            <FormItem :label-width="0" prop="upload"> 
                <cusUpload
                    v-on:can-upload="fileChange"
                    :defaultUrls="urls"
                ></cusUpload>
            </FormItem>
            <FormItem :label-width="0">
                <div class="button-container">
                    <Button type="primary"  @click="handleSubmit('formValidate')">提交</Button>
                    <Button type="warning" style="margin-left: 8px" @click="handleReset('formValidate')" >重置</Button>
                </div>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import { myAxios } from '../../ajax.js'
    import cusUpload from './Upload.vue';
    export default {
        name: 'cusForm',
        props: {
            defaultData: {
                type: Object,
            }
        },
        components: {
            cusUpload
        },
        mounted() {
            this.setDefaultData();
            
        },
        computed: {
            language() {
                return this.$store.state.language;
            }
        },
        data() {
            const validateUpload = (rule, value, callback) => {
                this.changeUploadState();
                
                if (!this.canUpload) {
                    callback(new Error('请上传三张图片'));                        
                } else {
                    callback();
                }
            };
            return {
                editType: false,
                urls: [],
                fileList: [
                    {
                        picture: ''
                    },
                    {
                        picture: ''
                    },
                    {
                        picture: ''
                    }
                ],
                canUpload: false,
                kinds: [
                    {
                        name: '膨化',
                        enName: 'Chips'
                    }, {
                        name: '压片糖',
                        enName: 'Tablet Candy'
                    }, {
                        name: '奶糖',
                        enName: 'Milk Tablets'
                    }, {
                        name: '凝胶糖果',
                        enName: 'Gelatin Candy'                    
                    },{
                        name: '焦香糖果',
                        enName: 'Toffee'                    
                    }, {
                        name: '硬糖',
                        enName: 'Hard Candy'                    
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
                    kind: ''
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
            setDefaultData() {
                if (typeof this.defaultData != 'undefined') {
                    console.log(this.defaultData)
                    let data = Object.assign({}, this.defaultData);
                    data.isNew === 1 ? data.isNew = '是' : data.isNew = '否';
                    data.isHot === 1 ? data.isHot = '是' : data.isHot = '否';
                    this.urls = data.urls;

                    delete data.urls;
                    this.formData = data;
                    this.editType = true;
                } else {
                    this.editType = false;
               }
            },
            /**
             * 监听子组件的文件改变
             */
            fileChange(file) {
                this.fileList[file.pos].picture = file.file;
                console.log(this.fileList)

            },
            changeUploadState(file) {
                // file === '' ? this.canUpload = false: this.canUpload = true;
                // this.fileList = file;
                let length = 0;
                
                this.fileList.forEach(element => {
                    if (element.picture != '')
                        length++;     
                });

                if (this.editType) {
                    // 编辑状态下任意数量的图片都可以提交
                    this.canUpload = true;                    
                } else {
                    if (length === 3) {
                        this.canUpload = true;
                    } else {
                        this.canUpload = false;
                    }
                } 
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) this.post();
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            editProduct() {
                myAxios.modifyProduct(this.getData(), this.language).then((res) => {
                    if (res.data.status === '1') 
                        this.$Notice.success({
                            title: '修改成功！',
                        })
                    else 
                        this.$loginTip();
                    
                }).catch((err) => {
                    this.$Notice.error({
                        title: '修改失败',
                        desc: '请检查你的网络后重试'
                    })
                }); 
            },
            getData() {
               
                let data = new FormData();
              

                let form = Object.assign({}, this.formData);

                form.isNew === '是' ? form.isNew = 1 : form.isNew = 0;
                form.isHot === '是' ? form.isHot = 1 : form.isHot = 0;

                for (const key in form) {
                    if (form.hasOwnProperty(key)) {
                        const element = form[key];
                        data.append(key, element);
                    }
                }
                
                for (const key in this.fileList) {
                   if (this.fileList.hasOwnProperty(key)) {
                       const element = this.fileList[key];
                       if (element.picture != '') {
                            if (this.editType) {
                                let index = parseInt(key) + 1;
                                let name = 'picture' + index;
                                data.append(name, element.picture);
                                
                            } else {
                                data.append('picture', element.picture);
                            }
                        }
                   }
                }
  
                return data;
            },
            addProduct() {
                myAxios.uploadProduct(this.getData(), this.language).then((res) => {
                    if (res.data.status === '1') 
                        this.$Notice.success({
                            title: '上传成功！',
                        })
                    else 
                        this.$loginTip();
                    
                }).catch((err) => {
                    console.log(err)
                    this.$Notice.error({
                        title: '上传失败',
                        desc: '请检查你的网络后重试'
                    })
                }); 
            },
            post() {
                // 检查是否有ID来确定是编辑模式还是添加模式
                if (this.editType) 
                    return this.editProduct();
                else 
                    return this.addProduct();
            }
        }
    }
</script>

<style lang="css" scoped>
    .form-container {
        width: 800px;
    }
    .button-container button {
        width: 110px;
        height: 40px;
        font-size: 15px;
    }
</style>