<template>
    <div class="root">
        <Layout class="layout">
            <Header  class="layout-header-bar">
                <!-- <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon> -->
                <img src="../assets/images/logo.png" alt="">
                
                <span> 官网后台管理系统</span>
                <div class="logout-container">
                    欢迎！
                    <button>退出</button>
                </div>
            </Header>
            
            <Layout>
                <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" width='310'  >
                    <Menu active-name="1-2" theme="dark" width="auto" @on-select="selectMenu" class="menu-container">                 
                        <MenuItem name="1"> <Icon type="ios-analytics" />BANNER管理</MenuItem>
                        <Submenu name="2" >
                            <template slot="title">
                                <Icon type="ios-analytics" />
                                产品管理
                            </template>    
                            <MenuItem name="2-1">上传</MenuItem>
                            <MenuItem name="2-2">查看</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Content class="content-container">
                    <div class="first-page-container">
                        <h1>欢迎使用</h1>
                        <p>BANNER管理：对首页的banner图片进行修改查看</p>
                        <p>产品管理：对官网展示产品进行查看，上传以及修改</p>
                    </div>
                    
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                isCollapsed: false
            }
        },
        computed: {
            
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            selectMenu(name) {
                console.log(name);
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
        padding: 10px;
        border-bottom: 2px solid #3d70c5;

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
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
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
    /* .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    } */
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .content-container {
        height: 100%;
        width: 100%;
        background: url(../assets/images/usedraw.png) no-repeat;
        background-position: 316px 156px;
    }
    .ivu-layout-sider {
        background-color: #3d70c5;
    }
    .ivu-menu-dark {
        background-color: #3d70c5;
    }
    .ivu-menu-item {
        
    }
    .ivu-menu-submenu-title {
        

    }
    .logout-container {
        float: right;
    }
</style>