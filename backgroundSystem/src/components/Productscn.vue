<template>
    <div class="root-container">
        <header class="title">中文产品列表</header>
        <main>
            <Products></Products>
        </main>
    </div>
</template>

<script>
    import Products from "./base/Products.vue";
    export default {
        name: 'Productscn',
        components: {
            Products,
        },
        data() {
            return {
               
            }
        }, 
        beforeCreate() {
            this.$store.commit('changeLanguage', '');
        }
    }
</script>

<style lang="css" scoped>
</style>