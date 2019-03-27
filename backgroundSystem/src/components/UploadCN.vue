<template>
    <div class="root">
        <header class="title">产品参数</header>
        <main>
            <Form ref="formValidate" :model="formData" :label-width="100" :rules="ruleValidate" class="form-container">
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
                <FormItem>
                    
                    <Button type="warning" @click="handleReset('formValidate')" >重置</Button>
                    <Button type="primary" style="margin-left: 8px" @click="handleSubmit('formValidate')">提交</Button>
                </FormItem>
            </Form>
             <header class="title">产品图片</header>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'UploadCN',
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
                    trademark: ''
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
            }
        }
    }
</script>

<style lang="" scoped>
    .root {
        margin: 48px;
    }
    .form-container {
        width: 800px;
    }
</style>