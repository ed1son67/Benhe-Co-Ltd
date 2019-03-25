<template>
    <div class="root">
        <header class="second-menu-container">
            <div class="second-menu-content">
                <div class="ben-logo-container">
                    <img src="../assets/images/benlogo_2.png" alt="">
                </div>
                <div class="shop-ben-container">
                    <span v-if="language">本合旗舰店</span>
                    <span v-else >BENHE</span>
                </div>
                <button><a href="http://" target="_blank" rel="noopener noreferrer">
                    <span v-if="language">进入店铺</span>
                    <span v-else >ENTER</span>
                </a></button>
            </div>
        </header>
        <div class="sort-container">
            <button class="sort-button" @click="isActive = true" :class="{active: isActive}">
                <span v-if="language">默认排序</span>
                <span v-else>DEFAULT</span>
                <span class="arrow-container"></span>
            </button>
            <button class="sort-button" @click="isActive = false" :class="{active: !isActive}">
                <span v-if="language">新品排序</span>
                <span v-else>NEW PRO</span>
                <span class="arrow-container"></span>
            </button>
        </div>
        <ul class="kind-container" >
            <p v-if="language">产品分类：</p>
            <p v-else>CATEGORY: </p>
            <li v-for="kind in kinds" :key="kind.id" :class="{choice: kind.isChoice}" @click="changeKindChoice(kind.id)" >
                <span v-if="language">{{kind.name}}</span>
                <span v-else>{{kind.enName}}</span>
            </li>
        </ul>
        <main class="productLists-container">
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
            
        </main>
        
        <div class="page-container">
             <Page :total="20" show-elevator />
        </div>
        
    </div>
</template>

<script>
    import Header from './Header.vue'

    export default {
        name: 'Benproducts',
        data() {
            return {
                isActive: true,
                kinds: [
                    {
                        name: '全部产品',
                        enName: 'ALL',
                        id: 0,
                        isChoice: true
                    },
                    {
                        name: '膨化',
                        enName: 'PUFFING',
                        id: 1,
                        isChoice: false
                    },
                    {
                        name: '压片糖',
                        enName: 'TABLET SUGAR',
                        id: 2,
                        isChoice: false
                    },
                    {
                        name: '奶糖',
                        enName: 'TOFFEE',
                        id: 3,
                        isChoice: false
                    },
                    {
                        name: '凝胶糖果',
                        enName: 'GEL FRUCTOSE',
                        id: 4,
                        isChoice: false
                    },
                    {
                        name: '硬糖',
                        enName: 'HARD CANDY',
                        id: 5,
                        isChoice: false
                    }
                ],
            }
        },
        computed: {
            language() {
                return this.$store.state.language;
            }
        },
        mounted() {

        },
        methods: {
            changeKindChoice(index) {
                for (let index = 0; index < this.kinds.length; index++) {
                    this.kinds[index].isChoice = false;
                    
                }
                this.kinds[index].isChoice = true;
            },
            initquery() {

            },
            
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
    cursor: pointer;
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
}
.page-container {
    margin: 56px auto 64px auto;
   
    text-align: center;
}
.choice {
    color: #e60112 !important;
    border-bottom: 2px solid #e60112;
}
</style>