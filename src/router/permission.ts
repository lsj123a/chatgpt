import type { Router } from 'vue-router'
import { useAuthStoreWithout } from '@/store/modules/auth'
import { getTokenobj,removeToken } from '@/store/modules/auth/helper'

export function setupPageGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // const authStore = useAuthStoreWithout()
    // if (!authStore.session) {
    //   try {
    //     const data = await authStore.getSession()
    //     if (String(data.auth) === 'false' && authStore.token)
    //       authStore.removeToken()
    //     if (to.path === '/500')
    //       //next({ name: 'Root' })
    //       next({ name: 'login' })
    //     else
    //       next()
    //   }
    //   catch (error) {
    //     if (to.path !== '/500')
    //       next({ name: '500' })
    //     else
    //       next()
    //   }
    // }
    // else {
    //   next()
    // }
    //next()
    //removeToken();
  //   const token = getToken();
  //   // if(to.path=='/')
  //   // {
  //   //   next()
  //   // }
  //  try {
  //   if(!token)
  //   {
  //     next({ name: 'login' })
  //     //return;
  //   }
  //   else  
  //   {
  //      next();
  //   }
  //  } catch (error) {
    
  //  }
    
      // if (!token) {
      //   try {
      //       //next({ name: 'root' })
      //       removeToken();
      //       next();
      //   }
      //   catch (error) {
      //     next({ name: '500' })
      //   }
      // }
      // else  {
      //   next({name:"chat"});
      
      // }
      //removeToken();
      const token = getTokenobj();   
      if (to.name !== 'login' && !token) 
      {next({ name: 'login' })
  }
      else 
     {
      if (to.name === '404' && token) 
      {next({ name: 'chat' })
     }
     else 
     {
      next()
     }

     } 
      
  })
}
