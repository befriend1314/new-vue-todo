import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoList: [],
    lists: []
  },
  actions: {
    getTodoList (context, payload) {
      context.commit('getTodoList', payload)
    }
  },
  mutations: {
    addNewList: (state, payload) => {
      state.lists.push(payload)
    },
    getTodoList: (state, payload) => {
      state.todoList = payload.todos
    }
  }

})

export default store
