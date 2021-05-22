import Axios from 'axios'

export function request (config) {
  const instance = Axios.create({
    timeout: 5000
  })
  return instance(config)
}
