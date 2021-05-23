<template>
  <div class="content">
    <top-tool :todo="todo" />
    <todo-item />
  </div>
</template>

<script>
import { addRecord, getTodo, editTodo } from '../network/api'
import TopTool from './TopTool'
import TodoItem from './TodoItem'
export default {
  name: 'MainComp',
  data () {
    return {
      todo: {
        title: '',
        count: 0,
        isLock: false
      },
      items: [],
      text: '',
      isUpdate: false
    }
  },
  components: {
    TopTool,
    TodoItem
  },
  watch: {
    '$route.params.id' () {
      this.init()
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const ID = this.$route.params.id
      getTodo({ id: ID }).then(res => {
        const { id, title, count, isDelete, isLock, item } = res.data.todo
        this.items = item
        this.todo = {
          id: id,
          title: title,
          count: count,
          isLock: isLock,
          isDelete: isDelete
        }
      })
    },
    onAdd () {
      const ID = this.$route.params.id
      addRecord({ id: ID, text: this.text }).then(res => {
        this.text = ''
        this.init()
        this.$store.dispatch('getTodo')
      })
    },
    updateTodo () {
      const _this = this
      editTodo({
        todo: this.todo
      }).then(data => {
        _this.$store.dispatch('getTodo')
      })
    },
    updateTitle () {
      this.updateTodo()
      this.isUpdate = false
    },
    onDelete () {
      this.todo.isDelete = true
      this.updateTodo()
    },
    onlock () {
      this.todo.locked = !this.todo.locked
      this.updateTodo()
    }
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
