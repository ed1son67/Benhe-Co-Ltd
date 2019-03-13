<template>
    <header :class="{changeHeaderColor: isIndex}">
        <div class="header-container" >
            <div class="logo-container">
                <router-link to="index"><img src="../assets/images/logo.png"></router-link>
            </div>
            <div class="menu-container">
                <ul >
                    <li :class="{choice: isChoice[0]}"><span class="bar-before"></span><router-link tag="a" to="/" >首页</router-link></li>
                    <li :class="{choice: isChoice[1]}"><span class="bar-before"></span><router-link tag="a" to="/benproducts" >本合产品</router-link></li>
                    <li :class="{choice: isChoice[2]}"><span class="bar-before"></span><router-link tag="a" to="/linproducts" >林振合产品</router-link></li>
                    <li :class="{choice: isChoice[3]}"><span class="bar-before"></span><router-link tag="a" to="/company" >公司介绍</router-link></li>
                    <li :class="{choice: isChoice[4]}"><span class="bar-before"></span><router-link tag="a" to="/hotsale" >热销产品</router-link></li>
                    <li ><span class="bar-before"></span><router-link tag="a" to="/" >天猫旗舰店</router-link></li>
                    <li :class="{choice: isChoice[5]}"><span class="bar-before"></span><router-link tag="a" to="/contact" >联系我们</router-link></li>
                </ul>
            </div>
            <div class="language-container">
                <div>
                    <a href="">中</a>
                    <span>|</span>
                    <a href="">英</a>
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
                isIndex: false,
                isChoice: [true, false, false, false, false, false,]
            }
        },
        mounted() {
            console.log(this.$route.name)
            let paths = ['Index', 'Benproducts', 'Linproducts',  'Company', 'Hotsale', 'Contact',]
            for (let i = 0; i < this.isChoice.length; i++) {
                this.isChoice[i] = false
            }
            this.isChoice[paths.indexOf(this.$route.name)] = true;

            if (this.$route.name != 'Index') {
                this.isIndex = true;
            } else {
                this.isIndex = false;
            }

        }
    }
</script>

<style lang="" scoped>
   
    .header-container {
        height: 110px;
        /* width: 100%; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 142px;
        font-size: 18px;
    }
    
    .header-container ul {
        height: 100%;
        margin: 0;
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
    .choice span {
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
    
    .language-container {
        height: 36px;
        width: 105px;
        background-color: #ee83b1;
        color: #fff;
        border-radius: 20px;
        font-weight: normal;
    }
    
    .language-container div {
        line-height: 36px;
        width: 80px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .language-container a {
        color: #fff;
        text-align: center;
        width: 50px;
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
    .changeHeaderColor .choice span {
        background-color: #fff;    
    }
    
</style>