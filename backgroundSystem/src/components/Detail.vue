<template>
    <div class="root-container">
        <div class="back"><Icon type="md-arrow-round-back" />
            <router-link :to="backLink" tag="a">返回产品列表</router-link>
        </div>
        <header class="title">修改产品参数</header>
        <main>
            <div class="tips-container" v-show="showTips">
                <p v-if="loading">加载商品参数中...</p>
                <p v-if="fail">加载商品失败，点击<a @click="getDetail()">刷新</a>重试</p>
                <p v-if="result">没有找到该商品</p>
            </div>
            <component v-bind:is="currentComponent" :defaultData="formData"></component>
        </main>
    </div>
</template>

<script>
    import { myAxios } from '../ajax.js'
    import cusForm from './base/Form.vue';
    export default {
        name: 'Detail',
        components: {
            cusForm   
        },
        computed: {
            language() {
                return this.$store.state.language;
            }
        },
        data() {
            return {
                curProps: '',
                loading: false,
                result: false,
                fail: false,
                showTips: true,
                backLink: '',
                formData: {},
                currentComponent: ''
            }
        },
        watch: {
            
        },
        mounted() {
            // 改变上一页的指向
            console.log(this.language)
            if (this.language == '')
                this.backLink = '/index/productscn'
            else 
                this.backLink = '/index/productsen'

            this.getDetail();
        },
        methods: {
            getDetail() {
                let id = this.$route.params.id;
                this.showTips = true;
                this.loading = true;
                this.result = false;
                this.fail = false;

                myAxios.getProductDetail(id, this.language).then((res) => {
                    if (res.data.id === 0) {
                        // 查询不到这个商品
                        this.result = true;
                        this.loading = false;
                    } else {
                        this.showTips = false;
                        this.formData = res.data;
                        this.currentComponent = cusForm;
                    }
                }).catch((err) => {
                    this.$Notice.error({
                        title: '查询失败',
                        desc: '请检查您的网络后重试'
                    })
                    this.loading = false;
                    this.result = false;
                    this.fail = true;
                    
                    
                })  
            }
        }
    }
</script>

<style lang="css" scoped>
   
    .root-container {
        margin-top: 0;
    }
    .back {
        margin: 13px 0;
        font-size: 14px;
    }
    .back i {
        font-size: 17px;
        color: #2D8cF0;
        line-height: 20px;
        padding-right: 1px;
    }
    .tips-container {
        text-align: center;
        font-size: 18px;
        margin: 120px 0;
    }
</style>