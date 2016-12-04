<style >
  @import './assets/css/sui.css'
</style>
<template>
  <div class="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition  name="expand">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'appp',
    data(){
      return {
        headerC:'headerC'
      }
    },
    methods:{
      asd:function(data){
        console.log(data)
      }
    },
    directives: {
      
    }
  }
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.router-link-active{
  color: red
}
.expand-transition {
    transition: all .3s ease;
    overflow: hidden;
}

.expand-enter, .expand-leave {
    height: 0;
    padding: 0px 10px;
    opacity: 0;
}

body{
  background: #F4F4F4;
  font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  .app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font: inherit;
    height: 100vh;
    position: relative;
  }
}

</style>
