<template>
    <div class="root">
        <Header></Header>        
        <header class="second-menu-container">
            <div class="second-menu-content" >
                <div class="lin-logo-container" >
                    <img src="../assets/images/linlogo_2.png"  >
                </div>
                <div class="shop-ben-container">
                    林振合旗舰店
                </div>
                <button><a href="http://" target="_blank" rel="noopener noreferrer">进入店铺</a></button>
            </div>
        </header>
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
        <main class="productLists-container">
            <div class="product-container" v-for="item in items" :key="item.id" @click="jumpToProduct(item.id)">
                <div class="product-content-container">
                     <img :src="oss + item.defaultUrl" >
                </div>
                <span>{{item.name}}</span>
            </div>
            <div class="product-container" >
                <div class="product-content-container">
                    <i class="mask"></i>
                     <img src="" alt="">
                </div>
                <span>林振合爽口片清爽薄荷糖水果糖维C压片水果糖随身糖40G4装</span>
            </div>
            <!-- 
            <div class="product-container" >
                <div>
                     <img src="" alt="">
                </div>
                
                <span>林振合爽口片清爽薄荷糖水果糖维C压片水果糖随身糖40G4装</span>
            </div>
            <div class="product-container" >
                <div>
                     <img src="" alt="">
                </div>
                <span>林振合爽口片清爽薄荷糖水果糖维C压片水果糖随身糖40G4装</span>
            </div>
            <div class="product-container" >
                <div>
                     <img src="" alt="">
                </div>
                <span>林振合爽口片清爽薄荷糖水果糖维C压片水果糖随身糖40G4装</span>
            </div>
            <div class="product-container" >
                <div>
                     <img src="" alt="">
                </div>
                <span>林振合爽口片清爽薄荷糖水果糖维C压片水果糖随身糖40G4装</span>
            </div> -->
            
        </main>
        
        <div class="page-container">
             <Page :total="totalSize" show-elevator />
        </div>
        
    </div>
</template>

<script>
    import Header from './Header.vue'
    import { myAxios } from "../ajax.js";
    export default {
        name: 'Linproducts',
        methods: {
            queryAll() {
                myAxios.getAllProductsByName('林振合').then((res) => {
                    console.log(res.data)
                    // get numbers of products and change the number of page size
                    this.totalSize = res.data.allSize;
                }).catch((err) => {
                    
                })
            },
            setItem() {

            },
            jumpToProduct(index) {
                console.log(event.target)
                console.log(index)
                this.$router.push('product/' + index);
            }
        },
        mounted() {
            this.queryAll();
        },
        components: {
            Header
        },
        data() {
            return {
                totalSize: 0,
                items: [
                    {
                        id: 38,
                        name: '日你妈'
                    },
                     {
                        id: 39,
                        name: '啊啊啊弟弟死了'
                    }
                ],
                isActive: true
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
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
}
.kind-container li {
    color: #333;
    margin: 0 32px ;
}

.productLists-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 1530px;
    margin: 0 auto;
}
.product-container {
    width: 270px;
    margin: 14px 18px;
    /* background-color: black; */
    border-top: 6px solid #5b9dd9;
}

.product-container div {
    height: 370px;
    width: 100%;
    padding-bottom: 28px;
    line-height: 1.5em;
    position: relative;
    cursor: pointer;
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
</style>