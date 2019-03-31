<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        window.onbeforeunload=function(e){
            var e=window.event||e;
            e.returnValue=("确定离开当前页面吗？");
        }
        this.$router.push('/login');
    }
}
</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        color: #333;
    }

    
    #app {
        height: auto;
        width: 100%;
    }
    button {
         outline: none;
        background: transparent;
        cursor: pointer;
        border: none;
    }
     .title {
        font-size: 24px;
        color: #5d5c5c;
        letter-spacing: 2px;
        border-left: 7px solid #3d70c5;
        padding: 1px 11px;
        padding-bottom: 2px;
        margin-bottom: 32px;
        font-weight: bold;
    }
    .root-container {
        margin: 48px;
    }
    .ivu-form-item-required .ivu-form-item-label:before {
        display: none !important;
    }
    i {
        font-style: normal;
    }
</style>
