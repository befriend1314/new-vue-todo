<template>
  <div class="topTool">
    <div class="titleName">
      <span>Angela</span>
      <span class="numBox">1</span>
    </div>
    <div class="inputBox">
      <i class="icon iconfont icon-add iconAdd"></i>
      <input type="text" placeholder="请输入">
    </div>
    <i class="icon iconfont icon-unlock iconUnlock"></i>
    <i class="icon iconfont icon-trash iconTrash"></i>
  </div>
</template>

<script>
export default {
  name: 'TopTool'
}
</script>

<style scoped>

.topTool{
  position: relative;
  padding-left: 20px;
  box-sizing: border-box;
  height: 80px;
  background: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);
}
.titleName{
  padding-top: 20px;
  line-height: 1;
  font-weight: bold;
}
.titleName .numBox{
  margin-left: 15px;
  background: #2cc5d2;
  color: #fff;
}

.iconUnlock,.iconTrash{
  position: absolute;
  top: 20px;
}
.iconUnlock{
  top: 18px;
  right: 50px;
  font-size: 20px;
}
.iconTrash{
  right: 20px;
}
.inputBox{
  margin-top: 10px;
}
.inputBox .iconAdd{
  font-size: 14px;
}
.inputBox input{
  margin-left: 10px;
  width: 80%;
  border: none;
  background: transparent;
  outline: none;
}
</style>
