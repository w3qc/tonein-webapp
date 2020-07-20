import axios from 'axios'
import AppConfig from '../config'

const baseAPI = axios.create({
  baseURL: AppConfig().baseURL,
  timeout: 1000,
})

const baiduMapAPI = axios.create({
  url: '/mapi/baidu',
  timeout: 1000
})

export {
  baseAPI,
  baiduMapAPI
}
