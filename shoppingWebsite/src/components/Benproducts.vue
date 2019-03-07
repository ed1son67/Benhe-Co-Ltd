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
    margin: 0 auto;
    border-radius: 4px;
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
.second-menu-container button {
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
</style>