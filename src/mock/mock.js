import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { todoList } from './list'
import Mock from 'mockjs'

export default {
  start () {
    const mock = new MockAdapter(Axios)
    mock.onGet('/todo/list').reply(config => {
      const mockTodo = todoList.map(todo => {
        return {
          id: todo.id,
          title: todo.title,
          count: todo.item.filter(data => {
            return !data.checked
          }).length,
          isLock: todo.isLock,
          isDelete: todo.isDelete
        }
      }).filter(todo => {
        return !todo.isDelete
      })

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: mockTodo
          }])
        }, 200)
      })
    })

    // 新增一条todo
    mock.onPost('/todo/addTodo').reply(config => {
      todoList.push({
        id: Mock.Random.guid(),
        title: 'newList',
        isDelete: false,
        isLock: false,
        item: []
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200])
        }, 200)
      })
    })

    // 获取todo单个列表
    mock.onGet('/todo/listId').reply(config => {
      const { id } = config.params
      const todo = todoList.find(todo => {
        return id && todo.id === id
      })
      // eslint-disable-next-line no-unused-expressions
      todo ? todo.count = todo ? todo.item.filter((data) => {
        return data.checked === false
      }).length : null : false
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todo: todo
          }])
        }, 200)
      })
    })

    // 新增一条代办事项
    mock.onPost('/todo/addRecord').reply(config => {
      const { id, text } = JSON.parse(config.data)
      // id 是传进来的值唯一待办项的id
      // text 用户新增输入的数据
      todoList.some((t, index) => {
        if (t.id === id) {
          t.item.push({
            text: text,
            isDelete: false,
            checked: false
          })
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200])
        }, 200)
      })
    })

    // 修改标题
    mock.onPost('/todo/editTodo').reply(config => {
      const { todo } = JSON.parse(config.data)
      todoList.some((t, index) => {
        if (t.id === todo.id) {
          t.title = todo.title
          t.isLock = todo.isLock
          t.isDelete = todo.isDelete
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200])
        }, 200)
      })
    })
    // 修改标题
    mock.onPost('/todo/editRecord').reply(config => {
      const { id, record, index } = JSON.parse(config.data)
      todoList.some((t) => {
        if (t.id === id) {
          t.record[index] = record
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200])
        }, 200)
      })
    })
  }
}
