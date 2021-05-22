<template>
  <div id="app">
    <div class="container">
      <menu-comp />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MenuComp from './components/MenuComp'
export default {
  name: 'App',
  components: {
    MenuComp
  }
}
</script>

<style>
@import url('assets/css/common.css');
@import url('assets/css/iconfont.css');

</style>
