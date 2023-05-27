import { ss } from '@/utils/storage'
import { getTokenobj } from '@/store/modules/auth/helper'
import {LoginModel} from '@/views/login/login'
const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  password:string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
   var usermodel:LoginModel=getTokenobj();
   if(usermodel==undefined)
   {
     usermodel={username:"unknow",token:"",nickname:"unknow"};
   }
  return {
    userInfo: {
      avatar: 'https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg',
      name: usermodel.nickname,
      password:'',
      description: 'Star on <a href="https://github.com/lishujia/chatgpt-bot" class="text-blue-500" target="_blank" >Github</a>',
    },
  }
}

export function getLocalState(): UserState {
  //const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  //const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  //return { ...defaultSetting(), ...localSetting }
  return defaultSetting();
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
