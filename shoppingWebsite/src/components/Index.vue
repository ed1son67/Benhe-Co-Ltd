<template>
    <div class="root">
        <Header></Header>
        <main>
            <div class="banner-container">
                <Carousel v-model="value" loop autoplay arrow="hover" :autoplay-speed=4000>
                    <CarouselItem>
                        <div class="banner" >
                            <img :src="img" alt="">
                            <div class="slogen-container">
                                <h1>本合</h1>
                                <p>买得顺心·吃得放心·寻得开心</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="banner">
                            <img :src="img" alt="">
                            <div class="slogen-container">
                                <h1>本合</h1>
                                <p>买得顺心·吃得放心·寻得开心</p>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="banner">
                            <img :src="img" alt="">
                            <div class="slogen-container">
                                <h1>本合</h1>
                                <p>买得顺心·吃得放心·寻得开心</p>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
            <div class="title-container">
                <span>公司介绍</span>  
            </div>
            <div class="content-container profile" :class="{animate: isShow}">
                <div class="profile-container">
                    <p><span>潮州市潮安区本合食品有限公司</span> ，公司创建于1988年。其前身为潮州市庵埠本合糖果食品厂，该公司是粤东地区一家在食品具有一定规模。又有其影响力的企业。该公司生产的产品以其外观悦人、口感独特、品质可靠等特质赢得了广大消费者的肯定和青睐。销售量基于广大消费者的支持也日益攀升。</p>
                   
                </div>
                <div class="profile-container ">
                    <img src="../assets/images/factory1.png" alt="">
                </div>
                <div class="profile-container">
                    <p>
                        公司在销售策略上，则以市场为导向，围绕满足市场需求、迎合消费者的意愿开展企业一切经营活动，并与全国各地一批信誉好、实力强、渠道畅的经销商建立长期的合作关系，以大、中城市为主线，向周边城市、乡镇辐射。
                        <span>诚邀各界人士合作，共创美好的明天。</span>
                    </p>
                </div>
            </div>
            <div class="content-container profile" :class="{animate: isShow}">
                <div class="profile-container">
                    <img src="../assets/images/factory2.png" alt="">

                </div>
                <div class="profile-container">
                    
                    <p>公司本着 <span>“消费者为上帝的宗旨”</span> ，凭借先进的食品生产设备、高素质的技术人才队伍、严密的管理机制，力求在产品的风味更人性化，产品的生产过程更卫生，更加严格遵照卫生规范制度，为消费者营造一个 <span>“买得顺心、吃得放心、寻得开心”</span> 的消费氛围。</p>
                </div>
                <div class="profile-container">
                    <img src="../assets/images/factory3.png" alt="">

                </div>
            </div>
            

             <div class="title-container" style="margin: 120px auto 74px auto;">
                <span>热销产品</span>
            </div>
            <div class="content-container" >
                <div class="hot-sale-product-container" :class="{animate: queueShow.show0}">
                    <div>
                         <img src="" alt="">
                    </div>
                    <span>林振合爽口片清爽薄荷糖水果糖维C压片水果糖随身糖40G4装</span></div>
                <div class="hot-sale-product-container" :class="{animate: queueShow.show1}">
                    <div>
                         <img src="" alt="">
                    </div>
                    <span></span></div>
                <div class="hot-sale-product-container" :class="{animate: queueShow.show2}">
                    <div>
                         <img src="" alt="">
                    </div>
                    <span></span></div>
                <div class="hot-sale-product-container" :class="{animate: queueShow.show3}">
                    <div>
                         <img src="" alt="">
                    </div>
                    <span></span></div>
                <div class="hot-sale-product-container" :class="{animate: queueShow.show4}">
                    <div>
                         <img src="" alt="">
                    </div>
                    <span></span></div>
            </div>
            <div class="title-container" style="margin: 120px auto 72px auto;">
                <span>天猫旗舰店</span>
            </div>
            <div class="content-container">
                <div class="shop-container">
                    <div>
                        本合旗舰店
                    </div>
                    <button><a href="">进入店铺</a></button>
                </div>
                <div class="shop-container">
                    <img src="../assets/images/QRcodeben.png" alt="">
                </div>
            </div>
            <div class="content-container">
                <div class="shop-container">
                    <img src="../assets/images/QRcodelin.png" alt="">

                </div>
                <div class="shop-container">
                    <div id="shop-lin-container">
                        林振合旗舰店
                    </div>
                    <button><a href="">进入店铺</a></button>                    
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import Header from './Header.vue'
    export default {
        name: 'Index',
        components: {
            Header
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll() {
                      
                // console.log(document.documentElement.scrollTop);
                let scrollTop = document.documentElement.scrollTop;

                scrollTop >= 100? this.isShow = true: this.isShow = false;
                scrollTop >= 1000? this.queueShow.show0 = true: this.queueShow.show0 = false;
                scrollTop >= 1100? this.queueShow.show1 = true: this.queueShow.show1 = false;
                scrollTop >= 1200? this.queueShow.show2 = true: this.queueShow.show2 = false;
                scrollTop >= 1300? this.queueShow.show3 = true: this.queueShow.show3 = false;
                scrollTop >= 1400? this.queueShow.show4 = true: this.queueShow.show4 = false;
            }
        },
        data() {
            return {
                img: require('../assets/images/banner_cn.png'),
                value: 0,
                isShow: false,
                queueShow: {
                    show0: false,
                    show1: false,
                    show2: false,
                    show3: false,
                    show4: false
                },
            }
        }
    }
</script>

<style lang="" scoped>
main {
    margin-bottom: 137px;
}
.banner-container {
    height: 755px;
    width: 100%;
}
.banner {
    height: 755px;
    /* width: 100%; */
    /* background: url(../assets/images/banner_cn.png) center no-repeat; */
    /* background-size: cover;
     */
    position: relative;
    background-color: #2b2f93;
    text-align: center;
    overflow: hidden;
}
.banner img {
    height: 755px;
    /* width: 100%; */
}
.slogen-container {
    color: #fff;
    position:absolute;
    top: 25%;
    left: 18%;
    font-family: 新宋体;
}
.slogen-container h1 {
    font-size: 120px;
    margin: 0 0 30px 20px;
}
.slogen-container p {
    font-size: 30px;
}   
.title-container {
    width: 500px;
    font-size: 40px;
    color: #000;
    margin: 85px auto 72px auto;
    text-align: center;
}
.title-container::before, .title-container::after {
    content: "";
    display: inline-block;
    height: 52px;
    width: 4px;
    margin-right: 27px;
    background-color: #2b2f93;
    vertical-align: top;
}
.title-container::after {
    
    margin-left: 27px;
    
}
.content-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
.profile {
    opacity: 0;
    transform: translateY(20px);
}
.profile-container {
    width: 450px;
    height: 368px;
    /* background-color: #000; */
}
.profile-container p {
    margin: 20px 25px;
    font-size: 18px;
    letter-spacing: 8px;
    line-height: 1.7em;
    text-align: justify;
}
.profile-container p  span {
    color: #438aca;
}
.hot-sale-product-container {
    width: 270px;
    margin-right:  26px;
    /* background-color: black; */
    border-top: 6px solid #5b9dd9;
    opacity: 0;
    transform: translateY(20px);
}
.animate {
    transition: all .5s ease-in-out;
    opacity: 1;
    transform: translateY(0);

}
.hot-sale-product-container div {
    height: 370px;
    width: 100%;
    padding-bottom: 28px;
    line-height: 1.5em;
}
.shop-container {
    height: 308px;
    width: 566px;
    text-align: center;
}
.shop-container div {
    width: 350px;
    height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto 53px auto;
    background: url(../assets/images/benlogo.png) no-repeat center;
    font-size: 36px;
    letter-spacing: 10px;
}
.shop-container div::before {
    content: '';
    height: 74px;
    width: 50px;
    display: block;
    border: 8px solid #2b2f93;
    border-right: 0;

}
.shop-container div::after {
    content: '';
    height: 74px;
    width:50px;
    display: block;
    border: 8px solid #2b2f93;
    border-left: 0;

}
#shop-lin-container {
    margin-top: 20px;
    width: 400px;
    background: url(../assets/images/linlogo.png) no-repeat center;

}
#shop-lin-container::before, #shop-lin-container::after {
    border-color: #5b9dd9;

}
.shop-container button {
    height: 66px;
    width: 208px;
    font-size: 24px;
    text-align: center;
    line-height: 66px;
    border-radius: 10px;
    background-color: #5b9dd9;
    outline: none;
    border: none;
    cursor: pointer;

}
.shop-container a {
    color: #fff;
    text-decoration: none;

}
</style>