import { request } from './request'

export function getTodoList () {
  return request({
    url: '/list'
  })
}
