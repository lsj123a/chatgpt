import { post } from '@/utils/request'
 //登录实体类
 export class UserModel {
    username: string="";
    userpwd: string="";
  }
 export class LoginModel 
 {
    token:string="";
    username:string = "";
    nickname:string = "";
 } 

  //登录逻辑
  function loginlogic<T>(model:UserModel)
  {
   return post<T>({
        url: 'api/login/frontindex',
        data: {"mobile":model.username,"password":model.userpwd},
        headers:{'Content-Type':  'application/json'}
      })
  }

  export async function LoginAsync<T>(model:UserModel) {
      try {
         const data = await loginlogic<T>(model)
         return Promise.resolve(data)
      }  catch (error) {
         return Promise.reject(error)
       }
  }
