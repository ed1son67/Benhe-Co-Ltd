<template>
    <div class="root">
        <div class="login-container">
            <h1>本合食品有限公司</h1>
            <p>后台管理系统</p>
            <div class="form-container">
                <div class="form-item">
                    <label for="username">用户名：</label>
                    <input id="username"  type="text" >
                </div>
                 <div class="form-item">
                    <label for="password">密码：</label>
                    <input id="password"  type="password">
                </div>
                <div class="button-container">
                    <button>登陆</button>
                </div>
                <!-- <Form  :model="formInline" :rules="ruleInline" :label-width="80">
                    <FormItem prop="user" label="用户名">
                        <Input  type="text" v-model="formInline.user" placeholder="Username">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password" label="密码">
                        <Input type="password" v-model="formInline.password" placeholder="Password">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
                    </FormItem>
                </Form> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>

<style lang="" scoped>
    .root {
        height: 100vh;
        width: 100%;
        background: url(../assets/images/banner_cn.png) no-repeat center;
        background-size: 100%;
        background-size: cover;
        position: relative;
    }
    .login-container {
        color: #fff;
        height: 500px;
        width: auto;
        /* background-color: #fff; */
        position: absolute;
        top: 190px;
        left: 188px;
    }
    .login-container p {
        font-size: 36px;
        padding-left: 590px;
        position: relative;
    }
    .login-container p::before {
        content: "";
        position: absolute;
        height: 6px;
        width: 170px;
        background-color: #fff;
        left: 396px;
        top: 50%;
        margin-top: -3px;
    }
    .login-container h1 {
        font-size: 60px;
        margin-left: 70px;
        margin-top: 26px;
    }
    .login-container::before {
        content: "";
        position:absolute;
        height: 600px;
        width: 14px;
        background-color: #eb827f;
        left: 0;
    }
    .form-container {
        margin-top: 100px;
        margin-left:  70px;  
        width: auto;
    }
    .form-item {
        width: 100%;
        margin-bottom: 40px;
    }
    .form-item input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid #000;
        padding: 2px 10px;
        width: 300px;
        font-size: 18px;
        outline: none;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .form-item label {
        display: inline-block;
        width: 100px;
        font-size: 20px;
        text-align: right;
        margin-right: 10px;
        color: #000;
    }
    .button-container {
        width: 192px;
        height: 48px;
        font-size: 18px;
        border: 2px solid #fff;
        text-align: center;
        border-radius: 8px;
        color: #fff;
        margin-left: 382px;
        margin-top: 72px;
    }
    .button-container button {
        height: 100%;
        width: 100%;
        font-size: 18px;
        border: none;
        

        color: #fff;
        
    }
</style>