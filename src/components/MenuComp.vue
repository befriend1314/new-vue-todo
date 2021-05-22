<template>
  <div class="menu">
    <div class="listBox">
      <a href="#" class="list">
        <i class="icon iconfont icon-lock"></i>
        <span class="title">Angle</span>
        <span class="numBox">2</span>
      </a>
    </div>
    <a href="#" class="addBtn">
      <i class="icon iconfont icon-plus"></i>
      <span class="title">新增</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MenuComp'
}
</script>

<style scoped>
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
.menu a{
  display: block;
  position: relative;
  padding: 0 20px;
  height: 48px;
  line-height: 48px;
  text-align: left;
  text-decoration: none;
  box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 15%);
}

.list{
  color: hsla(0,0%,100%,.4);
}
.list:hover{
  color: #fff;
}
.menu a .title{
  margin-left: 15px;
}
.list .numBox{
  position: absolute;
  right: 20px;
  top: 14px;
}
.list:hover .numBox{
  background: #2cc5d2;
  color: #fff;
}
.addBtn{
  color: #5db9ff;
}
</style>
