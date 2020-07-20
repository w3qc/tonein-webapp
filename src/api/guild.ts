import { getActionBaiduMap } from './actions'

export default async function decodeByBaiduMap(params: any) {
  const resp = await getActionBaiduMap(
    '/mapi/baidu/reverse_geocoding/v3', params
  )
  if (resp.status === 200) return resp.data
  return null
}
