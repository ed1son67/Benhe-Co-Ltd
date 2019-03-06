<template>
    <div class="root">
        <main>
            <div class="banner">
                <div class="slogen-container">
                    <h1>本合</h1>
                    <p>买得顺心·吃得放心·寻得开心</p>
                </div>
            </div>
            <div class="title-container">
                <span>公司介绍</span>
                
            </div>
            
            
                <div class="content-container">
                    <div class="profile-container"></div>
                    <div class="profile-container">
                        <img src="../assets/images/factory1.png" alt="">
                    </div>
                    <div class="profile-container"></div>
                </div>
                <div class="content-container">
                    <div class="profile-container">
                        <img src="../assets/images/factory2.png" alt="">

                    </div>
                    <div class="profile-container">
                    </div>
                    <div class="profile-container">
                        <img src="../assets/images/factory3.png" alt="">

                    </div>
                </div>
            

             <div class="title-container" style="margin: 120px auto 74px auto;">
                <span>热销产品</span>
            </div>
            <div class="content-container" >
                <div class="hot-sale-product-container">
                    <div>
                         <img src="" alt="">
                    </div>
                    <span>林振合爽口片清爽薄荷糖水果糖维C压片水果糖随身糖40G4装</span></div>
                <div class="hot-sale-product-container">
                    <div>
                         <img src="" alt="">
                    </div>
                    <span></span></div>
                <div class="hot-sale-product-container">
                    <div>
                         <img src="" alt="">
                    </div>
                    <span></span></div>
                <div class="hot-sale-product-container">
                    <div>
                         <img src="" alt="">
                    </div>
                    <span></span></div>
                <div class="hot-sale-product-container">
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
        <footer>

        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="" scoped>
main {
    margin-bottom: 137px;
}
.banner {
    height: 755px;
    width: 100%;
    background: url(../assets/images/banner_cn.png) center no-repeat;
    background-size: cover;
    position: relative;
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
.profile-container {
    width: 450px;
    height: 368px;
    /* background-color: #000; */
}
.hot-sale-product-container {
    width: 270px;
    margin-right:  26px;
    /* background-color: black; */
    border-top: 6px solid #5b9dd9;
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
    
}
.shop-container a {
    color: #fff;
}
</style>