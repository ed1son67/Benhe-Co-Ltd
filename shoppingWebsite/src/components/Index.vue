<template>
    <div class="root" :class="{en: !language}">
        <header class="second-header" :class="{fixed: isFixed}">
            <div class="logo-container">
                <img src="../assets/images/logo.png" alt="">
            </div>
            <ul >
                <li v-for="list in lists" :key="list.index" :class="{listActive: list.active}" @click="scrollTo(list.target)">
                    <span v-if="language == true">{{list.name}}</span>
                    <span v-else>{{list.enName}}</span>
                </li>
            </ul>
        </header>
        <main>
            <div class="banner-container">
                <div class="banner" >
                    <!-- <img :src="bannerLink" alt=""> -->
                    <img src="../assets/images/banner_cn.png" alt="">

                    <div class="slogen-container">
                        <h1 v-if="language">本合</h1>
                        <h1 v-else >BENHE</h1>
                        <p v-if="language">买得开心·吃得放心·寻得开心</p>
                        <p v-else>Buy well·Eat relievedly·Find happily</p>
                    </div>
                </div>        
            </div>
            <div class="title-container">
                <span v-if="language">{{lists[1].name}}</span>
                <span v-else>{{lists[1].enName}}</span>  
            </div>
            <div class="profile-row-container" >
                <div class="profile-container " v-if="language">
                    <p>
                        <span>潮州市潮安区本合食品有限公司</span> 
                        ，公司创建于1988年。其前身为潮州市庵埠本合糖果食品厂，该公司是粤东地区一家在食品具有一定规模。又有其影响力的企业。该公司生产的产品以其外观悦人、口感独特、品质可靠等特质赢得了广大消费者的肯定和青睐。销售量基于广大消费者的支持也日益攀升。
                    </p>
                </div>
                <div class="profile-container" v-else >
                    <p>
                        <span>Chaozhou City Chaoan District Benhe Food CO., Ltd.</span>
                        founded in 1988, its predecessor was Chaozhou Suibenhe Candy Food Factory. The company is a company with a certain scale and influence in the food industry in the eastern part of Guangdong.The company's products are pleasing to the outside, unique in taste, reliable in quality, etc.The trait has won the recognition and favor of consumers. Sales volume is also rising based on the support of consumers.
                    </p>
                </div>
                <div class="profile-container ">
                    <img src="../assets/images/factory1.png" alt="">
                </div>
                <div class="profile-container" v-if="language">
                    <p>
                        公司在销售策略上，则以市场为导向，围绕满足市场需求、迎合消费者的意愿开展企业一切经营活动，并与全国各地一批信誉好、实力强、渠道畅的经销商建立长期的合作关系，以大、中城市为主线，向周边城市、乡镇辐射。
                        <span>诚邀各界人士合作，共创美好的明天。</span>
                    </p>
                </div>
                <div class="profile-container" v-else >
                    <p>
                        In terms of sales strategy,the company is market-oriented, and meets the needs of the market, caters to the wishes of consumers, and establishes long-term cooperative relationships with a group of dealers with good reputation, strong strength and smooth channels.Take the big and medium-sized cities as the main line, and radiate to surrounding cities and towns.
                        <br>
                        <span>We sincerely invite people from all walks of life to cooperate to create a better tomorrow.</span>
                    </p>
                </div>
            </div>
            <div class="profile-row-container" >
                <div class="profile-container">
                    <img src="../assets/images/factory2.png" alt="">

                </div>
                <div class="profile-container" v-if="language">
                    <p>公司本着 
                        <span>“消费者为上帝的宗旨”</span>
                         ，凭借先进的食品生产设备、高素质的技术人才队伍、严密的管理机制，力求在产品的风味更人性化，产品的生产过程更卫生，更加严格遵照卫生规范制度，为消费者营造一个 
                        <span>“买得顺心、吃得放心、寻得开心”</span> 
                        的消费氛围。
                    </p>
                </div>
                 <div class="profile-container" v-else>
                    <p>The company adheres the tenet of 
                        <span>"Consumer is God"</span>
                        With advanced food production equipment, high-quality technical talent team, strict management mechanism, The mechanism strives to make the favor of the product more humanized, the production process of the product is more sanitary, and the hygiene standard system is strictly adhered to.Create a consumer
                        <span>"Buy well, Eat relievedly, Find happily"</span>.
                        
                    </p>
                </div>
                <div class="profile-container">
                    <img src="../assets/images/factory3.png" alt="">
                </div>
            </div>

            <!-- hot sale product container -->
            <div class="title-container" style="margin: 120px auto 74px auto;">
                <span v-if="language">{{lists[2].name}}</span>
                <span v-else>{{lists[2].enName}}</span>  
            </div>
            <div class="hot-sale-row-container" >
                <div class="hot-sale-product-container" v-for="item in items" :key="item.id">
                    <div>
                        <i class="mask"></i>
                        <img :src="oss + item.defaultUrl" alt="">
                    </div>
                    <p>{{item.name}}</p>
                </div>
            </div>
            <div class="title-container" style="margin: 120px auto 72px auto;">
                <span v-if="language">{{lists[3].name}}</span>
                <span v-else>{{lists[3].enName}}</span>  
            </div>
            <!-- shop part -->
            <div class="shop-row-container">
                <div class="shop-container">
                    <div>
                        <span v-if="language">本合旗舰店</span>
                        <span v-else>BENHE</span>
                    </div>
                    <button>
                        <a href="">
                            <span v-if="language">进入店铺</span>
                            <span v-else >ENTER</span>
                        </a>
                    </button>
                </div>
                <div class="shop-container">
                    <img src="../assets/images/QRcodeben.png" alt="">
                </div>
            </div>
            <div class="shop-row-container">
                <div class="shop-container">
                    <img src="../assets/images/QRcodelin.png" alt="">
                </div>
                <div class="shop-container">
                    <div id="shop-lin-container">
                        <span v-if="language">林振合旗舰店</span>
                        <span v-else>LINZHENHE</span>
                    </div>
                    <button>
                        <a href="">
                            <span v-if="language">进入店铺</span>
                            <span v-else >ENTER</span>
                        </a>
                    </button>                    
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import { myAxios } from "../ajax.js";
    import { Tween } from "../Tween.js";

    export default {
        name: 'Index',
        computed: {
            language() {
                return this.$store.state.language;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
            this.initIndex();
            // console.log( Tween.Linear(5, 0, 1000, 2));

           
        },
        methods: {
            scrollAnimation() {
                /*
                * t: current time（当前时间）；
                * b: beginning value（初始值）；
                * c: change in value（变化量）；
                * d: duration（持续时间）。
                */
                // 兼容性处理     
                if (!window.requestAnimationFrame) {
                    requestAnimationFrame = function(fn) {
                        setTimeout(fn, 17);
                    };	
                }

                let scrollTop = document.documentElement.scrollTop;
                var t = 0, b = scrollTop, c = -scrollTop, d = 20;
                var step = function () {
                    // value就是当前的位置值
                    // 例如我们可以设置DOM.style.left = value + 'px'实现定位
                    document.documentElement.scrollTop = Tween.Quad.easeInOut(t, b, c, d);
                    
                    t++;
                    
                    if (t <= d) {
                        // 继续运动
                        requestAnimationFrame(step);
                    } else {
                        // 动画结束
                    }
                };
                step();
            },
            scrollTo(height) {
                console.log(height);
                this.scrollAnimation();
            },
            addItem(object, data) {
                object.push(data)
            },
            initIndex(){
                // get banner
                // myAxios.getBanner().then((res) => {
                //     console.log(res.data)
                //     // this.bannerLink = 'http://benhe.oss-cn-shenzhen.aliyuncs.com/' + res.data.url
                // }).catch((err) => {
                //     console.log(err)
                // })

                // get hotpush products
                myAxios.getHotpush({limite: 5}).then((res) => {
                    let i = 0;
                    for (const key in res.data.products) {
                        if (res.data.products.hasOwnProperty(key)) {
                            const element = res.data.products[key];
                            this.addItem(this.items, element);
                        }
                    }
                    console.log(this.items)
                }).catch((err) => {
                    console.log(err)
                })
            },
            handleScroll() {
                let scrollTop = document.documentElement.scrollTop;
                // fix the hidden nav bar 
                scrollTop >= 600 ? this.isFixed = true : this.isFixed = false;
                // scrollTop >= 100? this.isShow = true: this.isShow = false;
                // scrollTop >= 1000? this.queueShow.show0 = true: this.queueShow.show0 = false;
                // scrollTop >= 1100? this.queueShow.show1 = true: this.queueShow.show1 = false;
                // scrollTop >= 1200? this.queueShow.show2 = true: this.queueShow.show2 = false;
                // scrollTop >= 1300? this.queueShow.show3 = true: this.queueShow.show3 = false;
                // scrollTop >= 1400? this.queueShow.show4 = true: this.queueShow.show4 = false;
                let self = this;
                function clear() {
                    
                    for (let index = 0; index < self.lists.length; index++) {
                        self.lists[index].active = false;
                    }
                }

                if (scrollTop >= 1000) {
                    clear();
                    this.lists[2].active = true;
                }
            }
        },
        data() {
            return {
                lists: [
                    {
                        name: '回到顶部',
                        enName: 'BACKTOTOP',
                        target: 0,
                        active: false
                    },
                    {
                        name: '公司介绍',
                        enName: 'ABOUT',
                        target: 0,
                        active: true
                    },
                    {
                        name: '热销商品',
                        enName: 'POPULAR',
                        target: 0,
                        active: false
                    },
                    {
                        name: '天猫旗舰店',
                        enName: 'TMALL',
                        target: 0,
                        active: false
                    },
                    {
                        name: '联系我们',
                        enName: 'CONTACT',
                        target: 0,
                        active: false
                    }
                ],
                isFixed: false,
                items: [
                   
                ],
                bannerLink: '',
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
    .root {
        margin-bottom: 137px;
        position: relative;
    }   
    
    /* css of the hidden navigation second header */
    .second-header {
        height: 75px;
        width: 100%;
        background-color: #5a9dd9;
        position: fixed;
        transition: all .3s ease-in-out;
        top: -75px;
        /* transform: translateY(0); */
        z-index: 999;
        opacity: 0;
        box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    }
    .second-header ul {
        margin-left: 50px;
        display: inline-block;

    }
    .second-header li {
        height: auto;
        line-height: 75px;
        list-style: none;
        float: left;        
        margin-right: 50px;
        color: #fff;
        position: relative;
        cursor: pointer;
    }
    .fixed { 
        /* transform: translateY(0px); */
        transform: translateY(75px);
        opacity: 1;
        /* top: 0; */
    }
    .logo-container {
        height: 100%;
        display: inline-block;
        vertical-align: top;
        margin-left: 152px;
        padding: 10px 0;
    }
    .logo-container img {
        height: 50px;
    }

    .listActive::after {
        content: "";
        display: block;
        height: 3px;
        width: 100%;
        position: absolute;
        bottom: 17px;
        background-color: #fff;
    }

    .banner-container {
        height: 755px;
        width: 100%;
    }
    .banner {
        height: 755px;
        position: relative;
        text-align: center;
        overflow: hidden;
    }
    .banner img {
        height: 755px;
    }
    .slogen-container {
        color: #fff;
        position:absolute;
        top: 190px;
        left: 300px;
        font-family: '新宋体';
    }

    .slogen-container h1 {
        font-size: 120px;
        margin-bottom: 30px;
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
        vertical-align: text-top;
    }
    .title-container::after {
        margin-left: 27px;
    }

    /* company introduce part */
    .profile-row-container {
        width: 1350px;
        height: 368px;
        margin: 0 auto;
    }
    .profile-container {
        width: 450px;
        height: 368px;
        float: left;
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

    /* hot sale part */   
    .hot-sale-row-container {
        width: 1900px;
        height: auto;
        margin: 0 auto;
        text-align: center;

    } 
    .hot-sale-product-container {
        width: 270px;
        margin: 0 13px;
        border-top: 6px solid #5b9dd9;
        cursor: pointer;
        display: inline-block;
        vertical-align: top;
    }
    .hot-sale-product-container div {
        height: 370px;
        width: 100%;
        padding-bottom: 28px;
        line-height: 1.5em;
        position: relative;
    }
    .hot-sale-product-container  img {
        height: 342px;
        width: 270px;
    }
    .hot-sale-product-container p {
        width: 270px;
        white-space: normal;
        word-wrap: break-word;
        height: 50px;
        overflow: hidden;
        text-align: left;
    }

    /* TMall part */
    .shop-row-container {
        width: 1132px;
        height: 308px;
        margin: 0 auto;
    }
    .shop-container {
        height: 308px;
        width: 566px;
        text-align: center;
        float: left;
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
    .mask {
        position: absolute;   
        height: 342px;
        width: 270px;
        top: 0;
        left: 0;
        background: transparent;
        transition: all .3s ease-in-out;
    }
    .hot-sale-product-container div:hover .mask {
        background: rgba(0, 0, 0, .3);
    }
    /* change the style in english */
    .en .slogen-container h1 {
        /* margin: 0 0 0 0; */
        text-align: left;
        margin-left: 0;
    }
    .en .profile-container p {
        margin: 20px;
        font-size: 16px;
        letter-spacing: 0px;
        line-height: 1.8m;
        text-align: justify;
    }
    .en .profile-container p  span {
        color: #438aca;
    }
</style>