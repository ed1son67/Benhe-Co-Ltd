<template>
    <header :class="{changeHeaderColor: isIndex, product: isProduct}">
        <div class="header-container" >
            <div class="logo-container">
                <router-link to="index"><img src="../assets/images/logo.png"></router-link>
            </div>
            <div class="menu-container">
                <ul >
                    <li :class="{choice: list.isChoice}" v-for="list in lists" :key="list.index">
                        <i class="bar-before"></i>
                        <router-link tag="a" :to="list.to" v-if="list.type == 1" >
                            <span v-if="language == true">{{list.name}}</span>
                            <span v-else>{{list.enName}}</span> 
                        </router-link>
                        <router-link tag="a" :to="list.to" v-else @click.native="scrollTo(list.height)">
                            <span v-if="language == true">{{list.name}}</span>
                            <span v-else>{{list.enName}}</span> 
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="language-container">
                <div>
                    <button :class="{switch: language}" @click="switchLanguage(true)">中</button>
                    <span>|</span>
                    <button :class="{switch: !language}" @click="switchLanguage(false)">EN</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                lists: [
                    {
                        name: '首页',
                        enName: 'HOME',
                        isChoice: false,
                        type: 1,
                        to: '/'
                    }, {
                        name: '本合产品',
                        enName: 'BENHE',
                        isChoice: false,
                        type: 1,
                        to: '/benproducts'
                    }, {
                        name: '林振合产品',
                        enName: 'LINZHENHE',
                        isChoice: false,
                        type: 1,
                        to: '/linproducts'
                    }, {
                        name: '公司介绍',
                        enName: 'ABOUT',
                        isChoice: false,
                        type: 0,
                        height: 800,
                        to: '/'
                    }, {
                        name: '热销产品',
                        enName: 'POPULAR',
                        isChoice: false,
                        height: 1746,
                        type: 0,
                        to: '/'
                    }, {
                        name: '天猫旗舰店',
                        enName: 'TIMALL',
                        isChoice: false,
                        height: 2450,
                        type: 0,
                        to: '/'
                    }, {
                        name: '联系我们',
                        enName: 'CONTACT',
                        isChoice: false,
                        height: 2778,
                        type: 0,
                        to: '/'
                    }
                ],
                isSwitch: true,
                isFixed: false,
                isIndex: false,
                isProduct: false,

            }
        },
        watch: {
            $route() {
                let paths = ['Index', 'Benproducts', 'Linproducts',  'Company', 'Hotsale', 'Contact', 'product']

                for (let i = 0; i < this.lists.length; i++) {
                    this.lists[i].isChoice = false
                }
                this.lists[paths.indexOf(this.$route.name)].isChoice = true;

                if (this.$route.name != 'Index') {
                    // 将header的背景颜色改为白色
                    this.isIndex = true;
                } else {
                    this.isIndex = false;
                }

                this.isDetail(); 
            }
        },
        computed: {
            language() {
                return this.$store.state.language
            }
        },
        methods: {
            scrollTo(height) {
                document.documentElement.scrollTop = height;
                document.body.scrollTop = height;
            },
            switchLanguage(val) {
                this.$store.commit('changeLanguage', val);
            },
            isDetail() {
                // 判断是不是产品详细页
                if (this.$route.name == 'Benproducts' || this.$route.name == 'Linproducts') {
                    this.isIndex = false;
                    this.isProduct = true;
                } else {
                    this.isProduct = false;
                }
            }
        },
        mounted() {
            // init the nav bar
            let paths = ['Index', 'Benproducts', 'Linproducts',  'Company', 'Hotsale', 'Contact', 'product']
            this.lists[paths.indexOf(this.$route.name)].isChoice = true;
            this.isDetail();
        }
    }
</script>

<style lang="" scoped>
    header {
        width: 100%;
        background-color: #fff;
        min-width: 1600px;
    }
    .header-container {
        height: 110px;
        font-size: 18px;
        width: 100%;
        position:relative;
    }
    .logo-container {
        margin:  16px 130px 0 142px;
        display: inline-block;
        vertical-align: top;
    }
    .menu-container {
        display:inline-block;

    }
    .header-container ul {
        height: 100%;
        vertical-align: top;       
    }
    
    .header-container li {
        height: auto;
        line-height: 110px;
        list-style: none;
        float: left;
        position: relative;
        
    }
    .menu-container a {
        padding: 0 30px;
        transition: all .2s ease-in;
        margin: 0 0px;
    }
    .bar-before {
        content: "";
        height: 5px;
        width: 100%;
        position: absolute;
        display: block;
        background-color:transparent;
        top: 0;
        left: 0;
        transition: all .2s ease-in;
    }

    .menu-container li:hover .bar-before  {
        background-color: #5b9dd9;
    }
    .menu-container li:hover a {
        color: #5b9dd9;
    }
    .choice a {
        color: #5b9dd9; 
    }
    .choice i {
        background-color: #5b9dd9;        
    }
    button {
        outline: none;
        border: none;
        background-color: transparent;
    }
    p {
        margin: 0;
    }
    
    a {
        text-decoration: none;
        color: #333;
    }
    /* CSS of the language switch button */
    .language-container {
        height: 36px;
        width: 105px;
        background-color: #ee83b1;
        color: #fff;
        border-radius: 20px;
        font-weight: normal;
        position: absolute;
        top: 0;
        right: 142px;
        margin: 37px 0 37px 100px;
    }
    
    .language-container div {
        line-height: 36px;
        width: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .language-container button {
        color: #fff;
        text-align: center;
        width: 50px;
        font-weight: 400;
    }

    /* add css to the switch language button */
    .switch {
        font-weight: 600 !important;
    }

    .changeHeaderColor {
        background-color: #5b9dd9;
    }
    .changeHeaderColor .menu-container a{
        color: #fff;
        transition: none;

    }
    .changeHeaderColor .bar-before {
        background-color: #5b9dd9;
    }
    .changeHeaderColor .menu-container li:hover .bar-before {
        background-color: #fff;
    }
    .changeHeaderColor .menu-container li:hover a {
        color: #fff;
    }
    .changeHeaderColor .choice i {
        background-color: #fff;    
    }
    .product {
        border-bottom: 3px solid #5b9dd9;
    }

   
   
</style>