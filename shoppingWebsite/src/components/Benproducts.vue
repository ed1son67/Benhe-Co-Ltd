
<template>
    <div class="root" >
        <header class="second-menu-container">
            <div class="second-menu-content" >
                <div class="lin-logo-container" >
                    <img src="../assets/images/benlogo_2.png"  >
                </div>
                <div class="shop-ben-container">
                    <span v-if="language">本合旗舰店</span>
                    <span v-else >BENHE</span>
                </div>
                <button>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <span v-if="language">进入店铺</span>
                        <span v-else >ENTER</span>
                    </a>
                </button>
            </div>
        </header>
        <ul class="kind-container" >
            
            <li v-for="kind in kinds" :key="kind.id" :class="{choice: kind.isChoice}" @click="changeKindChoice(kind.id)" >
                <span v-if="language">{{kind.name}}</span>
                <span v-else>{{kind.enName}}</span>
            </li>
        </ul>
        <main class="productLists-container" >
            <div class="product-container" v-for="item in items" :key="item.id" @click="jumpToProduct(item.id)"  >
                <div class="product-content-container">
                    <i class="mask"></i>
                    <img :src="oss + item.defaultUrl" >
                </div>
                <span>{{item.name}}</span>
            </div>
            
            <div v-show="result">
                <p v-if="language">抱歉，没有找到相关商品</p>
                <p v-else>Sorry, no results.</p>
            </div>
            <div  v-show="loading">
                <p v-if="language">商品加载中...</p>
                <p v-else>loading...</p>
            </div>
        </main>
        <!-- turn page plugin -->
        <div class="page-container">
            <Page :current="nowPage" :page-size=20 :total="totalSize" show-elevator v-on:on-change="pageChange"/>
        </div>
        
    </div>
</template>

<script>
    import { myAxios } from "../ajax.js";
    export default {
        name: 'Benproducts',
        computed: {
            language() {
                return this.$store.state.language;
            },
            lan() {
                return this.$store.state.lan;
            }
        },
        watch: {
            // watch the language change
            language() {
                // reset the page
                this.nowPage = 1;

                for (let index = 0; index < this.kinds.length; index++) {
                    this.kinds[index].isChoice = false;
                }
                this.kinds[0].isChoice = true;
                this.queryAll();
            }
        },
        methods: {
            pageChange(page) {
                this.nowPage = page;
                if (this.type === 'new') {
                    this.queryNew();
                } else if (this.type === 'all') {
                    this.queryAll();
                } else {
                    this.queryByKind(this.getNowKind());
                }
            },
            getNowKind() {
                let kind;
                this.kinds.forEach(element => {
                    if (element.isChoice === true)
                        this.language ? kind = element.name : kind = element.enName;
                });
                return kind;
            },  
            changeKindChoice(index) {
                // reset the page
                this.nowPage = 1;

                for (let index = 0; index < this.kinds.length; index++) {
                    this.kinds[index].isChoice = false;
                }
                this.kinds[index].isChoice = true;

                if (index === 0) {
                    this.queryAll();
                } else if (index === 1) {
                    this.queryNew();
                } else {
                   this.queryByKind(this.kinds[index].name);
                }
                

            },
            queryByKind(kindName) {
                this.type = 'kind';     
                this.clearItem();
                this.loading = true;
                this.result = false;

                myAxios.getProductsByKind('本合', kindName, this.nowPage,this.lan).then((res) => {
                    this.loading = false;          
                    this.totalSize = res.data.allSize;          
                    this.setItem(res.data.products, res.data.products.length);
                }).catch((err) => {
                    
                    console.log(err)
                })
            },
            queryNew() {
                this.type = 'new';
                this.clearItem();
                this.loading = true;
                this.result = false;

                myAxios.getNewProducts('本合', this.nowPage).then((res) => {
                    this.loading = false;     
                    this.totalSize = res.data.allSize;          
                    this.setItem(res.data.products, res.data.products.length);
                }).catch((err) => {
                    
                })
            },
            queryAll() {
                this.type = 'all';
                this.clearItem();
                this.loading = true;
                this.result = false;

                myAxios.getAllProducts('本合', this.nowPage, this.lan).then((res) => {
                    this.loading = false;
                    this.totalSize = res.data.allSize;          
                    this.setItem(res.data.products, res.data.products.length);
                }).catch((err) => {
                    
                })
            },
            clearItem() {
                this.items = {};
            },
            setItem(data, number) {
                // get numbers of products and change the number of page size
                if (number === 0) {
                    this.loading = false;
                    this.result = true;
                } else {
                    this.result = false;
                }

                this.items = data;
            },
            jumpToProduct(index) {
                this.$router.push('linproducts/' + index);
            }
        },
        mounted() {
            this.queryAll();
        },
        data() {
            return {
                loading: true,
                type: 'all',
                nowPage: 1,
                result: false,
                items: [
                    
                ],
                totalSize: 0,
                isActive: true,
                kinds: [
                    {
                        name: '全部产品',
                        enName: 'ALL',
                        id: 0,
                        isChoice: true
                    },
                    {
                        name: '查看新品',
                        enName: 'NEW',
                        id: 1,
                        isChoice: false
                    },
                    {
                        name: '膨化',
                        enName: 'PUFFING',
                        id: 2,
                        isChoice: false
                    },
                    {
                        name: '压片糖',
                        enName: 'TABLET SUGAR',
                        id: 3,
                        isChoice: false
                    },
                    {
                        name: '奶糖',
                        enName: 'TOFFEE',
                        id: 4,
                        isChoice: false
                    },
                    {
                        name: '凝胶糖果',
                        enName: 'GEL FRUCTOSE',
                        id: 5,
                        isChoice: false
                    },
                    {
                        name: '硬糖',
                        enName: 'HARD CANDY',
                        id: 6,
                        isChoice: false
                    }
                ],
            }
        }
    }
</script>

<style lang="" scoped>
    .root {
    }
    .second-menu-container {
        height: 96px;
        width: 712px;
        margin: 42px auto 36px auto;
        border-radius: 10px;
        border: 2px solid #a3a3a3;
    }
    .second-menu-content {
        width: 78%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }
    .second-menu-content div {
    }
    .second-menu-content button {
        height: 40px;
        width: 150px;
        text-align: center;
        background-color: #e50112;
        border-radius: 18px;
        font-size: 16px;
        line-height: 40px;
    }

    .second-menu-container a {
        color: #fff;
    }
    .shop-ben-container {
        display: flex;
        align-items: center;
        letter-spacing: 5px;
    }
    .shop-ben-container::before {
        content: '';
        height: 25px;
        width: 18px;
        display: block;
        border: 4px solid #2b2f93;
        border-right: 0;
    }
    .shop-ben-container::after {
        content: '';
        height: 25px;
        width: 18px;
        display: block;
        border: 4px solid #2b2f93;
        border-left: 0;

    }

    /* css of kind navbar */
    .kind-container {
        margin: 48px auto;
        width: 672px;
    }
    .en .kind-container {
        width: 900px;
    }
    .kind-container::after {
        content: '';
        height: 0;
        width: 0;
        clear: both;
        display: block;
    }
    .kind-container li {
        color: #333;
        margin: 0 20px ;
        cursor: pointer;
        padding: 0 4px;
        float: left;
    }

    .choice {
        color: #e60112 !important;
        border-bottom: 2px solid #e60112;
    }
    .productLists-container {
        height: auto;
        width: 1530px;
        margin: 0 auto;
        min-height: 300px;    
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
    .productLists-container p {
        text-align: center;
        margin: 120px auto;
    }
    .product-container {
        width: 270px;
        margin: 14px 18px;
        /* background-color: black; */
        border-top: 6px solid #5b9dd9;
        float: left;
    }
    .product-container span {
        /* height: ; */
        width: 270px;
        height: 50px;
        white-space: normal;
        word-wrap: break-word;
        overflow: hidden;
        display: inline-block;
    }
    .product-content-container  {
        height: 370px;
        width: 100%;
        padding-bottom: 28px;
        line-height: 1.5em;
        position: relative;
        cursor: pointer;
    }
    .product-content-container img {
        height: 342px;
        width: 270px;

    }
    .mask {
        /* content: ""; */
        position: absolute;   
        height: 342px;
        width: 270px;
        top: 0;
        left: 0;
        background: transparent;
        transition: all .3s ease-in-out;
    }

    .product-content-container:hover .mask {
        background: rgba(0, 0, 0, .2);
        

    }
    .page-container img {
        width: 270px;
        height: 342px;
    }
    .page-container {
        margin: 56px auto 64px auto;
    
        text-align: center;
    }
    .loading-container {
        text-align-last: center;
        padding-top: 100px;
    }
</style>