<template>
  <div class="menu">
    <div class="listBox" v-if="Object.keys(todoList).length !== 0">
      <a @click="goList(list.id)" class="list" v-for="(list, index) in todoList" :key="index">
        <i class="icon iconfont icon-lock"></i>
        <span class="title">{{ list.title }}</span>
        <span class="numBox">{{ list.count }}</span>
      </a>
    </div>
    <div class="addBtn" @click="addTodoList">
      <i class="icon iconfont icon-plus"></i>
      <span class="title">新增</span>
    </div>
  </div>
</template>

<script>
import { addTodo } from '../network/api'

export default {
  data () {
    return {
      items: [],
      todoId: '',
      todoNum: 0
    }
  },
  watch: {
    'todoId' (id) {
      this.$router.push({ name: 'todo', params: { id: id } })
    }
  },
  computed: {
    todoList () {
      const number = this.$store.getters.getTodoList.length
      if (this.$store.getters.getTodoList.length < this.todoNum) {
        this.goList(this.$store.getters.getTodoList[0].id)
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.todoNum = number
      return this.$store.getters.getTodoList
    }
  },
  created () {
    this.$store.dispatch('getTodo').then(() => {
      this.$nextTick(() => {
        this.goList(this.todoList[0].id)
      })
    })
  },
  methods: {
    goList (id) {
      this.todoId = id
    },
    addTodoList () {
      addTodo({}).then(data => {
        this.$store.dispatch('getTodo').then(() => {
          this.$nextTick(() => {
            setTimeout(() => {
              this.goList(this.todoList[this.todoList.length - 1].id)
            }, 100)
          })
        })
      })
    }
  }
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
.menu a, .addBtn{
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
.menu a .title, .addBtn .title{
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
  cursor: pointer;
  color: #5db9ff;
}
</style>
