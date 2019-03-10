<template>
    <div id="app">
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
        
        name: 'App',
        components: {
        },
        data() {
            return {
                
            }
        },
        watch: {
            headerColor(val) {
                this.headerColor = val;
            }
        },
        mounted() {
            // fixed the bug which vue router can't be used in ie 
            function checkIE(){
                return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style
            }
            if (checkIE()) {
                window.addEventListener('hashchange', () => {
                    var currentPath = window.location.hash.slice(1);
                    if (this.$route.path !== currentPath) {
                        this.$router.push(currentPath)
                    }
                }, false)
            }

            
            
        }
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
        font-size: 16px;
        color: #333;
    }
    /* change the default css of tags */
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    p {
        margin: 0;
    }
    button {
        outline: none;
        background: transparent;
        border: none;
        cursor: pointer;
    }
    /* change the default css of the scrollbar in webkit browser */
    ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    overflow: auto;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #e6e6e6;
        min-height: 25px;
        min-width: 25px;
        border: 1px solid #e0e0e0
    }
    #app {
        height: auto;
        width: 100%;
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
