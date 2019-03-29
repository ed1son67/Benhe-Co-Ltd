<template>
    <div class="root-container">
        <header class="title">中文产品列表</header>
        <main>
            <Products></Products>
        </main>
    </div>
</template>

<script>
    import { myAxios } from "../ajax.js";
    import Products from "./Products.vue";
    

    export default {
        name: 'Productscn',
        data() {
            return {
               
            }
        }, 
        components: {
            Products,
            
        },
        mounted() {

        },
        watch: {
            
        },
        methods: {
        
        }
    }
</script>

<style lang="css" scoped>
    .productLists-container {
        height: auto;
        width: 1530px;
        margin: 0 auto;
        min-height: 658px;    
        clear: both;

    }
    .productLists-container::after {
        content: "";
        height: 0;    
        width: 0;
        display: block;        
        clear: both;          
        visibility: hidden; 
    }
    .product-container {
        width: 204px;
        margin: 0 18px 10px 18px;
        /* background-color: black; */
        border-top: 6px solid #5b9dd9;
        float: left;
    }
    .product-container span {
        /* height: ; */
        width: 204px;
        height: 35px;
        white-space: normal;
        word-wrap: break-word;
        overflow: hidden;
        display: inline-block;
        font-size: 12px;
    }
    .product-content-container  {
        height: auto;
        width: 100%;
        padding-bottom: 5px;
        line-height: 1em;
        position: relative;
        cursor: pointer;
    }
    .product-content-container img {
        height: 265px;
        width: 204px;

    }
    .mask {
        /* content: ""; */
        position: absolute;   
        height: 265px;
         width: 204px;
        top: 0;
        left: 0;
        background: transparent;
        transition: all .3s ease-in-out;
        opacity: 0;
        display: block;
    }
    
    .mask-button {
        height: 80px;
        width: 80px;
        background-color: #3c71c4;
        border-radius: 50%;
        display: block;
        color: #fff;
        line-height: 80px;
        text-align: center;
        font-size: 16px;
        letter-spacing: 2px;
        font-style: normal;
        margin: 35px auto 40px auto;
    }
    .mask-button:first-child {
        background-color: #f63333;
    }
    .product-content-container:hover .mask {
        background: rgba(0, 0, 0, .2);
        opacity: 1;

    }

    /* 分页容器css */
    .page-container {
        margin: 10px auto 0 auto;
    
        text-align: center;

    }
    /* 面包屑容器 */
    .bread-container {
        margin: 0 0 15px 20px;
    
    }
    .bread-container a {
        color: #515a6e;
        /* transition: color 1s ease; */
        font-size: 14px;
        vertical-align: middle;

    }
    .bread-container i {
        margin-right:  8px; 
        color: #dcdee2;
    }
    .bread-container a:hover {
        color: #2d8cf0;
    }
    .separator {
        margin: 0 8px;
        color: #dcdee2;
        
    }
    .select {
        font-weight: 700;
    }
    .select i {
        color: #515a6e;
    
    }
</style>