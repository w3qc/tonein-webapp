import { baseAPI, baiduMapAPI } from '../utils/api'

// post
export function postAction(url:string, params:any) {
  return baseAPI({
    url,
    method: 'post',
    data: params
  })
}

// method= {post | put}
export function httpAction(url:string, params:any, method:any) {
  return baseAPI({
    url,
    method,
    data: params
  })
}

// get
export function getAction(url:string, params:any) {
  return baseAPI({
    url,
    method: 'get',
    params
  })
}

// get
export function getActionBaiduMap(url:string, params:any) {
  return baiduMapAPI({
    url,
    method: 'get',
    params
  })
}
