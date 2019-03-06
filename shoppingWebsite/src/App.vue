<template>
    <div id="app">
        <header>
            <div class="header-container">
                <div class="logo-container"><img src="./assets/images/logo.png"></div>
                <div class="menu-container">
                    <ul>
                        <li><router-link tag="a" to="/" >首页</router-link></li>
                        <li><router-link tag="a" to="/benproducts" >本合产品</router-link></li>
                        <li><router-link tag="a" to="/linproducts" >林振合产品</router-link></li>
                        <li><router-link tag="a" to="/benproducts" >公司介绍</router-link></li>
                        <li><router-link tag="a" to="/hotsale" >热销产品</router-link></li>
                        <li><router-link tag="a" to="/" >天猫旗舰店</router-link></li>
                        <li><router-link tag="a" to="/contactus" >联系我们</router-link></li>
                    </ul>
                </div>
                <div class="language-container">
                    <div>
                        <a href="">中</a>
                        <span>|</span>
                        <a href="">英</a>
                    </div>
                </div>
            </div>
        </header>
        <router-view/>
        <footer>
            <div class="footer-container">
                <div class="contact-container">
                    <h2>联系我们</h2>
                    <p>
                        <span class="label">
                                    地址：
                                </span> 潮州市潮安区郭一工业区
                    </p>
                    <p>
                        <span class="label">电话：</span> 400-822-2883
                    </p>
                </div>
                <div class="icp-container">
                    <p>
                        <span class="label">
                                    网址：
                                </span>WWW.GDXLFOOD.COM</p>
                    <p>
                        <span class="label">
                                    备案号：
                                </span>粤ICP备170415198号</p>
                </div>
                <div class="link-container">
                    <h2>店铺链接</h2>
                    <p><span class="label">
                                    本合旗舰店：
                                </span><a href="https://M.TB.CN/H.3WHBHWV?SM=0A8987">HTTP://M.TB.CN/H.3WHBHWV?SM=0A8987</a></p>
                    <P><span class="label">
                                    林振合旗舰店：
                                </span><a href="http://M.TB.CN/H.3WHX4SO?SM=BB7835"> HTTPS://M.TB.CN/H.3WHX4SO?SM=BB7835</a></P>
                </div>
                <div class="footer-logo-container">
                    <img src="./assets/images/logo.png" alt="">
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        font-family: 'MicrosoftYaHei';
        font-weight: bold;
        font-size: 18px;
        color: #333;
    }
    
    #app {
        height: auto;
        width: 100%;
    }
    
    .header-container {
        height: 110px;
        /* width: 100%; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 142px;
    }
    
    .header-container ul {
        height: 100%;
        margin: 0;
    }
    
    .header-container li {
        height: auto;
        line-height: 110px;
        list-style: none;
        float: left;
        margin-right: 60px;
        position: relative;
    }
    
    li::after {
        content: "";
        height: 3px;
        width: 120%;
        position: absolute;
        display: block;
        background-color: #000;
        bottom: 33px;
        left: -10%;
        border-radius: 2000px;
    }
    p {
        margin: 0;
    }
    
    a {
        text-decoration: none;
        color: #333;
    }
    
    .language-container {
        height: 36px;
        width: 105px;
        background-color: #ee83b1;
        color: #fff;
        border-radius: 20px;
        font-weight: normal;
    }
    
    .language-container div {
        line-height: 36px;
        width: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .language-container a {
        color: #fff;
        text-align: center;
        width: 50px;
    }
    
   
    
    
    /* 页脚部分*/
    
    #app footer {
        width: 100%;
        height: auto;
        background-color: #5b9dd9;
        color: #fff;
    }
    
    .footer-container {
        padding: 48px 0;
        margin: 0 154px 0 177px;
        /* display: flex;
        justify-content: space-between;
        align-items: flex-end; */
    }
    .footer-container div {
        display: inline-block;
    }
    .footer-container p {
        font-size: 16px;
        margin: 0;
        margin-bottom: 16px;
    }
    
    .footer-container h2 {
        font-size: 20px;
        text-decoration: underline;
        padding-bottom: 40px;
        margin: 0;
    }
    
    .footer-container a {
        color: #fff;
        font-weight: normal;
    }
    
    .label {
        display: inline-block;
        width: 60px;
    }
    .contact-container {
        margin-right: 68px;

    }
    .icp-container {
        margin-right: 128px;
        text-align: justify;
    }
    .icp-container span {
        width: 80px;
    }
    .link-container span {
        width: 120px;
    }
    .footer-logo-container {
        margin-left: 245px;
        height: 100%;
        vertical-align: top;
        margin-top: 25px;
    }
</style>
