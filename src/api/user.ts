import { getAction } from './actions'

const listUser = (params:any) => getAction('/users', params)

export default listUser
