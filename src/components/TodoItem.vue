<template>
  <div class="todoItem">
    <ul class="itemList">
      <li v-for="(item, index) in items" :key="index">
        <input type="checkbox">
        <input class="valueBox" type="text" v-model="item.text">
        <i class="icon iconfont icon-trash iconTrash"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.itemList li{
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}
.itemList .valueBox{
  margin-left: 15px;
  margin-right: 15px;
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  align-self: flex-start;
}
</style>
