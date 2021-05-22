import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { todoList } from './list'

export default {
  start () {
    const mock = new MockAdapter(Axios)
    mock.onGet('/list').reply(config => {
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
  }
}
