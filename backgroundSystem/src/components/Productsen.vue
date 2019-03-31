<template>
    <div class="root-container">
        <header class="title">英文产品列表</header>
        <main>
            <Products></Products>
        </main>
    </div>
</template>

<script>
    import Products from "./base/Products.vue";
    export default {
        name: 'Productsen',
        components: {
            Products,
        },
        beforeCreate() {
            this.$store.commit('changeLanguage', 'english');
        }
    }
</script>

<style lang="css" scoped>
    
</style>