<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        font-family: 'MicrosoftYaHei';
        font-weight: bold;
        font-size: 16px;
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
    }
     .title {
        font-size: 24px;
        color: #5d5c5c;
        letter-spacing: 2px;
        border-left: 7px solid #3d70c5;
        padding: 1px 11px;
        padding-bottom: 2px;
        margin-bottom: 32px;
    }
</style>
