<template>
    <div class="products-container" >
        <div class="bread-container">
            <span :class="{select: isSelect}" @click="switchBrand(0)"><Icon type="md-cube" /><a>本合产品</a></span>
            <span class="separator"> / </span>
            <span :class="{select: !isSelect}" @click="switchBrand(1)"><Icon type="md-cube" /><a>林振合产品</a></span>
        </div>
        <div class="productLists-container">
            <div class="loading-container" v-show="showTips">
                <p v-if="result">抱歉，没有找到更多商品</p>
                <p v-if="loading">加载中...</p>
                <p v-if="fail">请求商品失败，请检查你的网络后重试</p>
            </div>
            <div class="product-container" v-for="item in items" :key="item.id"  >
                <div class="product-content-container">
                    <i class="mask">
                        <Poptip
                            placement="top"
                            confirm
                            title="确认删除当前商品?"
                            @on-ok="comfirmDelete(item.id)"
                            >
                           <button class="mask-button" @click="isOpenDeleteModal = true">删除</button>
                           <button class="mask-button" @click="jumpToProduct(item.id)">查看</button>
                        </Poptip>
                    </i>
                    <img :src="oss + item.defaultUrl" >
                </div>
                <span>{{item.name}}</span>
            </div>
        </div>
        <div class="page-container">
            <Page :current="nowPage" :page-size=20 :total="totalSize" show-elevator v-on:on-change="pageChange"/>
        </div>
    </div>
</template>

<script>
    import { myAxios } from '../../ajax.js';
    export default {
        name: '',
        computed: {
            language() {
                return this.$store.state.language;
            }
        },
        data() {
            return {
                showTips: false,
                result: false,
                loading: false,
                fail: false,
                show: true,
                brand: '本合',
                isSelect: true,
                isOpenDeleteModal: false,
                nowPage: 1,
                totalSize: 0,
                items: [
                   
                ]
            }
        }, 
        mounted() {
            console.log(this.language)
            this.queryAllProducts();
        },
        watch: {
            brand(val) {
                this.brand = val
            }
        },
        methods: {
            /**
             * 切换品牌
             */
            switchBrand(index) {
                if (index === 0) {
                    this.isSelect = true;
                    this.brand = '本合';
                } else {
                    this.isSelect = false;
                    this.brand = '林振合';
                }
                this.queryAllProducts();
            },
            /**
             * 获取所有的商品
             */
            queryAllProducts() {
                this.clearItems();
                this.showTips = true;
                this.loading = true;
                this.fail = false;


                myAxios.getAllProducts(this.nowPage, this.brand, this.language).then((res) => {
                    
                    if (res.data.allSize == 0) {
                        this.result = true;
                        this.loading = false;
                        this.fail = false;
                        
                    } else {
                        this.setItems(res.data.products, res.data.allSize);
                        this.loading = false;
                        this.showTips = false;
                        this.fail = false;
                    }
                }).catch((err) => {
                    this.loading = false;
                    this.fail = true;
                });
            },
            /**
             * 删除一个商品
             */
            comfirmDelete(id) {
                
                myAxios.deleteProduct(id, this.language).then((res) => {
                    
                    if (res.data.status === '1') {
                        this.$Notice.success({
                            title: '删除商品成功!',
                        });
                        // 去掉这个商品
                        this.items.shift();
                    } else {
                        this.$loginTip();
                    }
                }).catch((err) => {
                   this.$Notice.error({
                        title: '删除商品失败',
                        desc: '请检查您的网络后重试'
                    });
                });
                
            },
            /**
             * 设置产品数据
             */
            setItems(data, numbers) {
                this.items = data;
                this.totalSize = numbers;
            },
            /**
             *  清空所有产品 
             */
            clearItems() {
                this.items = {};
                this.totalSize = 0;
            },
            /**
             * 翻页监听函数
             */
            pageChange(page) {
                this.nowPage = page;
                
                this.queryAll();
            },
            jumpToProduct(id) {
                this.$router.push('/index/detail/' + id);
            }
        }
    }
</script>

<style lang="css" scoped>
    .productLists-container {
        height: auto;
        width: 1530px;
        margin: 0 auto;
        min-height: 658px;    
        clear: both;

    }
    .productLists-container::after {
        content: "";
        height: 0;    
        width: 0;
        display: block;        
        clear: both;          
        visibility: hidden; 
    }
    .product-container {
        width: 204px;
        margin: 0 18px 10px 18px;
        /* background-color: black; */
        border-top: 6px solid #5b9dd9;
        float: left;
    }
    .product-container span {
        /* height: ; */
        width: 204px;
        height: 35px;
        white-space: normal;
        word-wrap: break-word;
        overflow: hidden;
        display: inline-block;
        font-size: 12px;
    }
    .product-content-container  {
        height: auto;
        width: 100%;
        padding-bottom: 5px;
        line-height: 1em;
        position: relative;
        cursor: pointer;
    }
    .product-content-container img {
        height: 265px;
        width: 204px;

    }
    .mask {
        /* content: ""; */
        position: absolute;   
        height: 265px;
        width: 204px;
        top: 0;
        left: 0;
        background: transparent;
        transition: all .3s ease-in-out;
        opacity: 0;
        display: block;
    }
    
    .mask-button {
        height: 80px;
        width: 80px;
        background-color: #3c71c4;
        border-radius: 50%;
        display: block;
        color: #fff;
        line-height: 80px;
        text-align: center;
        font-size: 16px;
        letter-spacing: 2px;
        font-style: normal;
        margin: 35px 62px 40px 62px;
    }
    .mask-button:first-child {
        background-color: #f63333;
    }
    .product-content-container:hover .mask {
        background: rgba(0, 0, 0, .2);
        opacity: 1;

    }

    /* 分页容器css */
    .page-container {
        margin: 10px auto 0 auto;
    
        text-align: center;

    }
    /* 面包屑容器 */
    .bread-container {
        margin: 0 0 15px 20px;
    
    }
    .bread-container a {
        color: #515a6e;
        /* transition: color 1s ease; */
        font-size: 14px;
        vertical-align: middle;

    }
    .bread-container i {
        margin-right:  8px; 
        color: #dcdee2;
    }
    .bread-container a:hover {
        color: #2d8cf0;
    }
    .separator {
        margin: 0 8px;
        color: #dcdee2;
        
    }
    .select {
        font-weight: 700;
    }
    .select i {
        color: #515a6e;
    
    }
    /* 加载提示 */
    .loading-container {
        width: 1440px;
        text-align: center;
        font-size: 18px;
        margin: 50px 0;
    }
</style>