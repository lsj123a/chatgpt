import { ss } from '@/utils/storage'
import {LoginModel} from '@/views/login/login'

const LOCAL_NAME = 'SECRET_TOKEN'
const LOCAL_NAME_obj = 'SECRET_TOKEN_obj'

export function getToken() {
  return ss.get(LOCAL_NAME)
}

export function setToken(token: string) {
  return ss.set(LOCAL_NAME, token)
}

export function removeToken() {
  return ss.remove(LOCAL_NAME)
}



export function getTokenobj() {
  return ss.get(LOCAL_NAME_obj)
}

export function setTokenobj(lgmodel: LoginModel) {
  return ss.set(LOCAL_NAME_obj, lgmodel)
}

export function removeTokenobj() {
  return ss.remove(LOCAL_NAME_obj)
}
