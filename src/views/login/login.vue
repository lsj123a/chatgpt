<script setup lang='ts'>
import {UserModel,LoginAsync,LoginModel} from './login'
import { setTokenobj } from '@/store/modules/auth/helper'
import {router} from '@/router'
import {defaultSetting } from '@/store/modules/user/helper'
import {useMessage } from 'naive-ui'

const umodel : UserModel={username:"test",userpwd:"123456"};
const ms = useMessage()
 async function login(loginmodel:UserModel)
{
    if(loginmodel.username=="")
    {
        ms.error('用户名不能为空');
        return;
    }
    if(loginmodel.userpwd=="")
    {
        ms.error('密码不能为空');
        return;
    }
    const  lgmodel  = await LoginAsync<LoginModel>(loginmodel)
    if(lgmodel.data.token != "")
    {
        //setToken(lgmodel.data.token);
        setTokenobj(lgmodel.data);  
        //defaultSetting().userInfo.name = lgmodel.data.username;
        //window.location.href = "chat";
        router.push('/chat');
        // router.beforeEach(async (to, from, next) => {
        //     alert('跳转');
        //      next({name:'404'});
        // })
    }
    else    
    {
        //alert('用户名或密码错误');
        ms.error('用户名或密码错误');
    }
   
}
</script>

 <style>
  :root {
  --bg_image: url(@/assets/login_bg.jpg);
}

    * {
    /* 初始化 */
    margin: 0;
    padding: 0;
}

.content {
    width: 100vw;
    /* 100%窗口高度 */
    height: 100vh;

    background: var(--bg_image) no-repeat;

    /* 背景大小 */
    background-size: cover;

    /* 弹性布局 水平居中 垂直居中*/
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-content {
    /* 相对定位 */
    position: relative;
    width: 800px;
    height: 360px;
    /* 背景渐变色 */
    background: linear-gradient(to right bottom,#6ec6ca,#fec9c9);
    /* 圆角边框 */
    border-radius: 20px;
    padding: 30px;
}

.banner-box {
    display: inline-block;
    width:500px;
    height: 100%;  
    background: var(--bg_image) no-repeat;
    background-size: cover;
    border-radius: 20px 0 0 20px;
}

.login-box  {
    /* 绝对定位 */
    position: absolute;
    top: 0;
    right: 0;

    width: 330px;
    height: 100%;

    border-radius: 0 20px 20px 0;

    /* 弹性布局 */
    display: flex;
    /* 变成上下排列 */
    flex-direction: column;
    /* 居中 */
    align-items: center;
}

.login-box>h1 {
    font-size: 36px;
    margin: 60px 0;
    color: #fff;
}

.login-box>input {
    margin-bottom: 20px;
    width: 200px;
    height: 36px;
    padding: 0 20px;
    border-radius: 36px;

    /* 取消边框 */
    border: none;

    /* 点进去也会有个边框，取消掉 */
    outline: none;

    font-size: 18px;

}

.login-btn {
    margin-top: 20px;
    width: 100px;
    height: 40px;
    background-color: #fff;
    border: none;
    border-radius: 10px;
}

@media screen and (max-width:900px) {
    .login-content {
        margin: 0 30px;
    }

    .banner-box {
        border-radius: 20px;
    }

    .login-box {
        background-color: rgba(160, 129, 175, 0.5);
    }
}

@media screen and (max-width:600px) {
    .content {
        background: var(--bg_image);
    }

    .login-content {
        background-color: transparent;
    }

    .banner-box {
        display: none;
    }

    .login-box {
        /* 设置该属性为默认值 */
        position: initial;
        margin: -40 auto;
        background-color: transparent;
    }
}

</style>

<template>
 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatgpt登陆界面</title>
</head>

<body>
    <div class="content">
        <div class="login-content">
            <a href="#" class="banner-box"></a>
            <div class="login-box">
                <h1>账号登陆</h1>
                <input type="text" placeholder="账号" v-model="umodel.username">
                <input type="password" placeholder="密码" v-model="umodel.userpwd">
                <button class="login-btn" @click="login(umodel)">登录</button>
            </div>
        </div>
    </div>
</body>

</html>
</template>
