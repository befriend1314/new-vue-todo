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
@media screen and (min-width: 60em) {
  .container {
    left:5.55555%;
    right: 5.55555%
  }
}

@media screen and (min-width: 80em) {
  .container {
    left:11.1111%;
    right: 11.1111%
  }
}
body{
  background-color: #f9957f;
  background-image: linear-gradient(180deg, #f9957f,#f2f5d0);
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
  background-color: #f9957f;
  background-image: linear-gradient(180deg, #f9957f,#f2f5d0);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.list{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #2c3e50;
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
@media screen and (min-width: 40em) {
  .content {
    left:270px
  }
}
</style>
