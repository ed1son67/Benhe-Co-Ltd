<template>
    <div class="root-container">
        <header class="title">英文产品参数</header>
        <main>
            <cusForm></cusForm>
        </main>
    </div>
</template>

<script>
    import cusForm from './base/Form.vue';
    export default {
        name: 'UploadEN',
        components: {
            cusForm
        },
        beforeCreate() {
            this.$store.commit('changeLanguage', 'english');
        }
    }
</script>

<style lang="css" scoped>

</style>