<template>
  <div class="content">
    <top-tool />
  </div>
</template>

<script>
import TopTool from './TopTool'
export default {
  name: 'MainComp',
  components: {
    TopTool
  }
}
</script>

<style scoped>
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
