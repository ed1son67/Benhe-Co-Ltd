<template>
    <div class="root">
        <div class="login-container">
            <h1>本合食品有限公司</h1>
            <p>后台管理系统</p>
            <div class="form-container">
                <div class="form-item">
                    <label for="username">用户名：</label>
                    <input id="username" v-model="userName" type="text" >
                </div>
                 <div class="form-item">
                    <label for="password">密码：</label>
                    <input id="password" v-model="password"  type="password">
                </div>
                <div class="button-container">
                    <button @click="handleSubmit">登陆</button> 
                   
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { IP, myAxios } from '../ajax.js'
    export default {
        name: 'Login',
        data() {
            return {
                userName: '',
                password: '',

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
            handleSubmit() {
                let self = this;
                myAxios({
                    method: 'post',
                    data: {
                        userName: self.userName,
                        password: self.password
                    },
                    url: 'admin/login'
                }).then((res) => {
                    console.log(res)
                    if (res.data.status == '1') {
                        console.log('登陆成功');
                        this.$store.commit('update', {isLogin: true})
                        this.$router.push('index');
                    } else {
                        console.log('登陆失败');
                    }
                }).catch((err) => {

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
        text-align: center;
        margin-left: 450px;
        margin-top: 72px;
    }
    .button-container button {
        height: 100%;
        width: 100%;
        font-size: 18px;
        border: 1px solid #fff;
        border-radius: 4px;
        color: #fff;
    }
</style>