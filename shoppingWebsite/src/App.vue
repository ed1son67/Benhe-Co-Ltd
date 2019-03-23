<template>
    <div id="app">
        <Header></Header>
        <router-view/>
        <footer>
            <div class="footer-container" v-if="language == true">
                <div class="contact-container" >
                    <h2>{{footerInfo.cn.contactLabel}}</h2>
                    <p>
                        <span class="label">
                            {{footerInfo.cn.addressLabel}}
                        </span> 
                        {{footerInfo.cn.address}}            
                    </p>
                    <p>
                        <span class="label">{{footerInfo.cn.telLabel}}</span> 400-822-2883
                    </p>
                </div>
                <div class="icp-container">
                    <p>
                        <span class="label">
                            {{footerInfo.cn.webLabel}}
                        </span>
                        WWW.GDXLFOOD.COM
                    </p>
                    <p>
                        <span class="label">
                            {{footerInfo.cn.caseLabel}}
                        </span>
                        粤ICP备170415198号
                    </p>
                </div>
                <div class="link-container">
                    <h2>{{footerInfo.cn.linkLabel}}</h2>
                    <p><span class="label">
                            {{footerInfo.cn.benLabel}}
                                </span><a href="https://M.TB.CN/H.3WHBHWV?SM=0A8987">HTTPS://M.TB.CN/H.3WHBHWV?SM=0A8987</a></p>
                    <P><span class="label">
                                {{footerInfo.cn.linLabel}}
                                </span><a href="http://M.TB.CN/H.3WHX4SO?SM=BB7835">HTTPS://M.TB.CN/H.3WHX4SO?SM=BB7835</a></P>
                </div>
                <div class="footer-logo-container">
                    <img src="./assets/images/logo.png" alt="">
                </div>
            </div>
            <div class="footer-container en" v-else >
                <div class="contact-container" >
                    <h2>{{footerInfo.en.contactLabel}}</h2>
                    <p>
                        <span class="label">
                            {{footerInfo.en.addressLabel}}
                        </span> 
                        <span class="content">{{footerInfo.en.address}}</span>            
                    </p>
                    <p>
                        <span class="label">{{footerInfo.en.telLabel}}</span> 400-822-2883
                    </p>
                </div>
                <div class="icp-container">
                    <p class="en-p">
                        <span class="label">
                            {{footerInfo.en.webLabel}}
                        </span>
                        WWW.GDXLFOOD.COM
                    </p>
                    <p>
                        <span class="label">
                            {{footerInfo.en.caseLabel}}
                        </span>
                        粤ICP备170415198号
                    </p>
                </div>
                <div class="link-container">
                    <h2>{{footerInfo.en.linkLabel}}</h2>
                    <p><span class="label">
                            {{footerInfo.en.benLabel}}
                                </span><a href="https://M.TB.CN/H.3WHBHWV?SM=0A8987">HTTPS://M.TB.CN/H.3WHBHWV?SM=0A8987</a></p>
                    <P><span class="label">
                                {{footerInfo.en.linLabel}}
                                </span><a href="http://M.TB.CN/H.3WHX4SO?SM=BB7835">HTTPS://M.TB.CN/H.3WHX4SO?SM=BB7835</a></P>
                </div>
                <div class="footer-logo-container">
                    <img src="./assets/images/logo.png" alt="">
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        
        name: 'App',
        components: {
            Header
        },
        watch: {
            language(val) {
                this.language = val;
            }
        },
        computed: {
            language() {
                return this.$store.state.language
            }
        },
        data() {
            return {
                footerInfo: {
                    cn: {
                        contactLabel: '联系我们',
                        addressLabel: '地址：',
                        address: '潮州市潮安区庵埠郭一工业区',
                        telLabel: '电话：',
                        webLabel: '网址：',
                        caseLabel: '备案号：',
                        linkLabel: '店铺链接',
                        benLabel: '本合旗舰店：',
                        linLabel: '林振合旗舰店：'

                    },
                    en: {
                        contactLabel: 'CONTACT',
                        addressLabel: 'ADDRESS:',
                        address: 'Guoyi Industrial Zone, QiongTown, Chaoan District, Chaozhou City',
                        telLabel: 'CALL:',
                        webLabel: 'WEBSITE:',
                        caseLabel: 'CASE:',
                        linkLabel: 'LINK',
                        benLabel: 'BENHE:',
                        linLabel: 'LINZHENHE:'

                    }
                }
            }
        },
        watch: {
            headerColor(val) {
                this.headerColor = val;
            }
        },
        mounted() {
            console.log(this.language)
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
        min-width: 1700px;
        font-family: 'MicrosoftYaHei';
        font-weight: bold;
        font-size: 16px;
        color: #333;
        overflow-x: hidden;
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
        height: 250px;
    }
    .contact-container, .icp-container, .link-container {
        float: left;
    }
    .footer-container p {
        font-size: 16px;
        margin-bottom: 16px;
    }
    
    .footer-container h2 {
        font-size: 20px;
        /* line-height: 22px; */
        text-decoration: underline;
        /* border: 1px solid #fff; */
        padding-bottom: 40px;
        margin: 0;
    }
    
    .footer-container a {
        color: #fff;
        font-weight: normal;
    }
    
    .label {
        width: 60px;
        display: inline-block;
        vertical-align: top;
    }
    .content {
        width: 300px;
        display:inline-block;
    }
    .contact-container {
        margin-right: 68px;
    }
    .contact-container p {
        /* width: 300px; */
        max-width: 400px;
    }
    .icp-container {
        margin-right: 128px;
        text-align: justify;
        margin-top: 70px;
    }
    .icp-container span {
        width: 80px;
    }
   
    .link-container p {
        width: 500px;
    }
    .link-container span {
        width: 130px;

    }
    .footer-logo-container {
        height: 100%;
        vertical-align: top;
        margin-top: 40px;
        float: right;
    }
    .en .label {
        width: 90px;
        /* font-size: 22px; */
    } 
    .en .link-container span {
        width: 120px;
    }
    .en-p {
        margin-bottom: 40px !important;
    }
</style>
