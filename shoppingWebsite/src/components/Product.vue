<template>
    <div class="root">
        <Header></Header>
        <main>
            <nav>
                <Breadcrumb>
                    <span>当前位置：</span>
                    <BreadcrumbItem to="/index">
                        <Icon type="ios-home" /> 首页
                    </BreadcrumbItem>
                    <BreadcrumbItem to="/benproducts">
                        <Icon type="logo-buffer"></Icon> {{detail.trademark + '产品'}}
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Icon type="ios-cube" />
                        产品详情
                    </BreadcrumbItem>
                </Breadcrumb>
            </nav>
            <div class="main-container">
                <div class="img-sidebar" >
                    <div data-index="0" :class="{showThisPic: isHover.h0}" @mouseover="over"><img :src="oss + detail.urls[0]" alt=""></div>
                    <div data-index="1" :class="{showThisPic: isHover.h1}" @mouseover="over"><img :src="oss + detail.urls[1]" alt=""></div>
                    <div data-index="2" :class="{showThisPic: isHover.h2}" @mouseover="over"><img :src="oss + detail.urls[2]" alt=""></div>
                </div>
                <div class="img-detail-container" @mousemove="maskMove" @mouseenter="showMask = true" @mouseleave="showMask = false">
                    <img :src="nowPic" >
                    <div class="mask" v-show="showMask"></div>
                    <div class="big" v-show="showMask">
                        <img :src="nowPic" >
                    </div>
                </div>
                <div class="introduce-container">
                    <p class="name-container">{{detail.name}}</p>
                    <div class="card-container">
                        <div class="vertical-container">
                            <p>商品详情</p>
                        </div>
                        <div class="detail-container">
                            <div >
                                <p><img src="../assets/images/icon_area.png" ><span>产地</span></p>
                                <span class="detail">{{detail.originPlace}}</span>
                            </div>
                            <div style="margin: 40px 0;">
                                <p ><img src="../assets/images/icon_standard.png" ><span>规格</span></p>
                                <span class="detail">{{detail.weight}}</span>
                            </div>
                            <div>
                                <p><img src="../assets/images/icon_flaver.png" ><span>口味</span></p>
                                <span class="detail">{{detail.flavor}}</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import { myAxios } from '../ajax.js'
    import Header from './Header.vue'
    export default {
        name: 'Product',
        components:{
            Header
        },
        methods: {
            maskMove(e) {
                let box = e.currentTarget;
                let mask = box.getElementsByTagName('div')[0];
                let big = box.getElementsByTagName('div')[1].getElementsByTagName('img')[0];

                let left = e.pageX - box.offsetLeft - mask.offsetWidth / 2;
                let top = e.pageY - box.offsetTop - mask.offsetHeight / 2;

                if (left <= 0) {
                    left = 0;
                } else if (left > box.offsetWidth - mask.offsetWidth) {
                    left = box.offsetWidth - mask.offsetWidth;
                }

                if (top <= 0) {
                    top = 0;
                } else if (top > box.offsetHeight - mask.offsetHeight) {
                    top = box.offsetHeight - mask.offsetHeight;
                }
                mask.style.left = left + 'px';
                mask.style.top = top + 'px';
                // 大图和小图的倍数

                let times = 400 / mask.offsetWidth;
                let bigLeft = left * times;
                let bigTop = top * times;

                big.style.left = -bigLeft + 'px';
                big.style.top = -bigTop + 'px';

            },
            over(e) {
                let root = e.currentTarget;
                let index = root.getAttribute("data-index");
                let img = root.getElementsByTagName('img')[0].getAttribute('src');
                for (const key in this.isHover) {
                    if (this.isHover.hasOwnProperty(key)) {
                        this.isHover[key] = false; 
                    }
                }
                this.nowPic = img;
                this.isHover['h' + index] = true;
            }
        },
        mounted(){
            console.log(this.$route.params.id)
            
            myAxios.getProductDetail(parseInt(this.$route.params.id)).then((res) => {
                this.detail = res.data;
                // console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        data() {
            return {
                detail: {
                    name: '',
                    trademark: '',
                    flavor: '',
                    weight: '',
                    originPlace: '',
                    urls: [

                    ]
                },
                nowPic: '',
                showMask: false,
                isHover: {
                    h0: true,
                    h1: false,
                    h2: false
                }
            }
        }
    }
</script>

<style lang="" scoped>
    .root  {

    }
    main {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 60px;
    }
    .main-container {
        display: flex;

    }
    main nav {
        margin: 25px 0 53px 0;
    }

    /* sidebar */
    .img-sidebar {
        margin-right: 66px;
    }
    .img-sidebar div {
        height: 158px;
        width: 158px;
        /* background-color: #000; */
        margin-bottom: 30px;
        border-radius: 4px;
        border: 2px solid #333;
    }
    
    .img-sidebar img {
        height: 130px;
        width: 130px;
        margin: 14px;
    }
    .showThisPic {
        border-color: #5b9dd9 !important;
    }
    .img-detail-container {
        height: 516px;
        width: 516px;
        
        margin-right: 112px;
        position: relative;
    }
    
    /* detail img */
    .img-detail-container img {
        height: 516px;
        width: 516px;
    }
    .mask {
        height: 350px;
        width: 350px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .6);
        cursor: move;
    }
    .big {
        height: 560px;
        width: 560px;
        position: absolute;
        left: 520px;
        top: 0;
        background-color: #000;
        z-index: 999;
        overflow: hidden;
    }
    .big img {
        height: 1000px;
        width: 1000px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .name-container {
        font-size: 32px;
        position: relative;
        width: 600px;
    }

    .name-container::after {
        content: "";
        /* position: absolute; */
        height: 8px;
        width: 392px;
        display: block;
        background-color: #000;
        margin-top: 52px;
    }
    .card-container {
        height: 230px;
        width: 520px;
        border-radius: 5px;
        border: 1px solid #333;
        margin-top: 85px;
        position: relative;
    }
    .card-container::before {
        content: "";
        height: 8px;
        width: 164px;
        display: block;
        position:absolute;
        background-color: #07b5fa;
        top: -72px;
        left: -1px;
    }
    .vertical-container {
        display: inline-block;
        /* margin-right: 60px; */
    }
    .vertical-container p {
        font-size: 20px;
        width: 20px;
        display: inline-block;
        line-height: 25px;
        height: 100px;
        margin: 60px 0;
    }
    .vertical-container::before {
        content: "";
        height: 160px;
        width: 4px;
        background-color: #e60112;
        display: inline-block;
        vertical-align: top;
        margin: 35px 20px 35px 35px;
    }
    .detail-container {
        display: inline-block;
        vertical-align: top;
        margin: 24px 15px;
        font-size: 18px;
    }
    .detail-container div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
    }
    .detail-container img {
        padding: 0px 30px;
    }
    .detail-container p {
        width: 180px;
        
    }
    .detail {
       padding-bottom: 7px;
    }
    .detail-container p span {
        vertical-align: top;
        line-height: 24px;
    }
</style>