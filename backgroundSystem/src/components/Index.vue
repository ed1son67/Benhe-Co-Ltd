<template>
    <div class="root">
        <Layout class="layout">
            <Header  class="layout-header-bar">
                <!-- <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon> -->
                <img src="../assets/images/logo.png" alt="">
                
                <span> 官网后台管理系统</span>
                
            </Header>
            
            <Layout>
                <Sider ref="side1" hide-trigger collapsible  width='310'  >
                    <Menu active-name="1-2" theme="dark" width="auto" @on-select="selectMenu" class="menu-container">                 
                        <MenuItem name="1" ><img src="../assets/images/bannericon.png" /><span>BANNER管理</span></MenuItem>
                        <Submenu name="2" >
                            <template slot="title">
                               <img src="../assets/images/producticon.png" />
                                <span>产品管理</span>
                            </template>    
                            <MenuItem name="2-1" style="padding-left: 74px;">上传中文产品</MenuItem>
                            <MenuItem name="2-2" style="padding-left: 74px;">上传英文产品</MenuItem>
                            <MenuItem name="2-3" style="padding-left: 74px;">查看中文产品</MenuItem>
                            <MenuItem name="2-4" style="padding-left: 74px;">查看英文产品</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content class="content-container" >
                        <div class="index-container" v-show="showIndex">
                            <div class="first-page-container" >
                                <h1>欢迎使用</h1>
                                <p>BANNER管理：对首页的banner图片进行修改查看</p>
                                <p>产品管理：对官网展示产品进行查看，上传以及修改</p>
                            </div>
                        </div>
                        <router-view></router-view>
                    </Content>
                    <!-- <Footer class="layout-footer">benhe ©2019 Created by CZF</Footer> -->
                </Layout>
                <!-- <Content class="content-container" >
                    <div class="index-container" v-show="showLists.l0">
                        <div class="first-page-container">
                            <h1>欢迎使用</h1>
                            <p>BANNER管理：对首页的banner图片进行修改查看</p>
                            <p>产品管理：对官网展示产品进行查看，上传以及修改</p>
                        </div>
                    </div>
                    <div class="banner-container " v-show="showLists.l1">
                        <div class="main-container">
                            <header class="title">
                                当前BANNER
                            </header>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="upload-container" v-show="showLists.l2">
                        <div class="main-container">
                            <header class="title">
                                产品列表
                            </header>
                        </div>
                    </div>
                    <div class="check-container" v-show="showLists.l3">
                        <div class="main-container">
                            <header class="title">
                                产品参数
                            </header>
                        </div>
                    </div>
                    <Footer class="layout-footer">
                        21312
                    </Footer>
                </Content> -->
            </Layout>
            
        </Layout>
    </div>
</template>

<script>
   


    export default {
        name: 'Index',
        data() {
            return {
                showIndex: true,
                currentTabComponent: '',
                
            }
        },
        computed: {
            
        },
        methods: {
            selectMenu(name) {
                this.showIndex = false;
                switch (name) {
                    case '1':
                        this.$router.push('/index/banner');
                        break;
                    case '2-1':
                        this.$router.push('/index/uploadcn');
                        break;
                    case '2-2':
                        this.$router.push('/index/uploaden');

                        break;
                    case '2-3':
                        this.$router.push('/index/productscn');
                        break;
                     case '2-4':
                        this.$router.push('/index/productsen');
                        break;
                    default:
                        break;
                }

            }
        }
    }
</script>

<style lang="css" scoped>
    .layout {
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
        height: 100vh;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        padding: 2px 9px;
        border-bottom: 2px solid #3d70c5;

    }
    .layout-footer {
        background: #fff;
        height: 20px;
    }
    .layout-header-bar img {
        padding-left: 20px;
    }
    .layout-header-bar span {
        vertical-align: top;
        line-height: 48px;
        font-size: 18px;
        padding: 4px 12px;
        border-left: 3px solid #000;
        margin: 0 12px;
    }
   
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-container {
        padding: 30px 0;
    }
    .menu-container li {
        /* padding: 20px; */
    }
    

    .ivu-layout-sider, .ivu-menu-dark {
        background-color: #3d70c5;
        
    }
    .ivu-menu-submenu-title span, .ivu-menu-item span {
        padding-left: 14px;
        padding-right: 14px;
        vertical-align: top;
        letter-spacing: 2px;
    }
    .ivu-menu-submenu-title img, .ivu-menu-item img {
        padding-left: 14px;
      
    }
    
    .logout-container {
        float: right;
    }


    .index-container {
        height: 900px;
        width: 1400px;
        background: url(../assets/images/usedraw.png) no-repeat;
        background-position: 316px 156px;
        position: relative;
    }   

    .first-page-container {
        position: absolute;
        left: 920px;
        top: 336px;
        width: 450px;
    }
   
    .first-page-container h1 {
        font-size: 80px;
        color: #3c71c4;
        position: relative;
        margin-bottom: 54px;
    }
     .first-page-container h1::before, .first-page-container h1::after {
        content: "";
        position: absolute;
        height: 26px;
        width: 26px;
        background-color: #3c71c4;
        border-radius: 50%;
        top: 50%;
        margin-top: -10px;
        
    }
    .first-page-container h1::before {
        left: -85px;
    }
    .first-page-container h1::after {
        right: 50px;
    }
    .first-page-container p {
        color: #999;
        letter-spacing: 2px;   
        line-height: 2em;     
    }

    
    
</style>