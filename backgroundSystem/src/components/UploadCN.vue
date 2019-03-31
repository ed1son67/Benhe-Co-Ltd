<template>
    <div class="root-container">
        <header class="title">中文产品参数</header>
        <main>
            <cusForm></cusForm>
        </main>
    </div>
</template>

<script>
    import cusForm from './base/Form.vue';
    export default {
        name: 'UploadCN',
        components: {
            cusForm
        },
        beforeCreate() {
            this.$store.commit('changeLanguage', '');
        }
    }
</script>

<style lang="css" scoped>

</style>