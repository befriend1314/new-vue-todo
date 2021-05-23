import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoList: [],
    menuOpen: false
  },
  getters: {
    getTodoList: state => {
      return state.todoList
    }
  },
  actions: actions,
  mutations: {
    EDITTODE: (state, data) => {
      state.todoList = data
    },
    MENUOPEN: (state) => {
      state.menuOpen = !state.menuOpen
    }
  }

})

export default store
