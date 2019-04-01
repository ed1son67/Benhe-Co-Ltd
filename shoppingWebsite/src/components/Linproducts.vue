<template>
    <div class="root" >
        <ProductList brand='林振合' ></ProductList>
    </div>
</template>

<script>
    import ProductList from "./ProductList.vue";
    export default {
        name: 'Linproducts',
        components: {
            ProductList
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="css" scoped>
    
</style>