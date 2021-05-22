<template>
  <div id="app">
    <div class="container">
      <menu-comp />
      <main-comp />
    </div>
  </div>
</template>

<script>
import MenuComp from './components/MenuComp'
import MainComp from './components/MainComp'
export default {
  name: 'App',
  components: {
    MenuComp,
    MainComp
  }
}
</script>

<style>
@import url('assets/css/common.css');
@import url('assets/css/iconfont.css');

</style>
