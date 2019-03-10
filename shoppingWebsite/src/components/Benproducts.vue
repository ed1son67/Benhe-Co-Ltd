<template>
    <div class="root">
        <Header></Header>        
        <header class="second-menu-container">
            <div class="second-menu-content">
                <div class="ben-logo-container">
                    <img src="../assets/images/benlogo_2.png" alt="">
                </div>
                <div class="shop-ben-container">
                    本合旗舰店
                </div>
                <button><a href="http://" target="_blank" rel="noopener noreferrer">进入店铺</a></button>
            </div>
            <div class="sort-container">
                <button class="sort-button" @click="isActive = true" :class="{active: isActive}">默认排序<span class="arrow-container"></span></button>
                <button class="sort-button" @click="isActive = false" :class="{active: !isActive}">新品排序<span class="arrow-container"></span></button>
            </div>
            <ul class="kind-container">
                <li>产品分类</li>
                <li>全部产品</li>
                <li>膨化</li>
                <li>压片糖</li>
                <li>奶糖</li>
                <li>凝胶糖果</li>
                <li>硬糖</li>
            </ul>
        </header>
    </div>
</template>

<script>
    import Header from './Header.vue'
    export default {
        name: 'Benproducts',
        components: {
            Header
        },
        data() {
            return {
                isActive: true
            }
        }
    }
</script>

<style lang="" scoped>
.root {
    height: 2000px;
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

/* sort button css */

.sort-container {
    text-align: center;
    margin: 32px 0 28px 0;
    color: #fff;
}
.sort-button {
    width: 180px;
    height: 36px;
    border-radius: 20px;
    color: #000;
    background: transparent;
    border: 2px solid #000;
    transition: all .3s ease-in-out;
    margin: 0 20px;
}
.arrow-container {
    display: inline-block;
    height: 25px;
    width: 25px;
    background-color: #000;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: -10px;
    margin-left: 30px;
    transition: transform .3s ease-in-out;
    position: relative;
    transform: rotateZ(-90deg);

}
.arrow-container::before {
    content: '';
    height: 0;
    width: 0;
    border-width: 9px 9px 0px 9px;
    border-style: solid;
    border-color: #fff transparent;
    position: absolute;
    top: 10px;
    right: 3px;

}
.arrow-container::after {
    content: '';
    height: 0;
    width: 0;
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: #000 transparent;
    position: absolute;
    top: 9px;
    left: 7px;
    
    
}
.sort-container img {
    height: 20px;
    margin: 3px 4px;
}
.active  {
    color: #fff;
    border: 2px solid #5b9dd9;
    background-color: #5b9dd9;
}
.active .arrow-container::before {
    border-color: #5b9dd9 transparent;    
}
.active .arrow-container::after {
    border-color: #fff transparent;
}
.active .arrow-container {
    background-color: #fff;
    transform: rotateZ(0);
}
.kind-container {

    margin: 0 auto 32px auto;
    
}
.kind-container li {
    display: inline-block;
    color: #333;
    margin-left:  0 64px ;
}
</style>