<template>
  <div id="app">
    <div class="container">
      <div class="menu">
        <ul>
          <li class="list" v-for="i in 50" :key="i">{{i}}</li>
        </ul>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
body,div,ul,li,a,span,img{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, .container{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
@media screen and (min-width: 640px) {
  .container {
    left:5%;
    right: 5%
  }
}

@media screen and (min-width: 1200px) {
  .container {
    left:10%;
    right: 10%
  }
}
body{
  background-color: #315481;
  background-image: linear-gradient(#315481,#918e82);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.menu{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 270px;
  height: auto;
  overflow-y: auto;
  background-color: #315481;
  background-image: linear-gradient(#315481,#918e82);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.list{
  height: 40px;
  line-height: 40px;
  box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 15%);
  color: hsla(0,0%,100%,.4);
}
.content{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;
  height: auto;
  background: #fff;
}
@media screen and (min-width: 500px) {
  .content {
    left:270px
  }
}
</style>
