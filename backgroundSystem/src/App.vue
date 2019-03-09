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
</style>
