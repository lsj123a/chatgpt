<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { HoverButton, SvgIcon, UserAvatar } from '@/components/common'
import { removeTokenobj } from '@/store/modules/auth/helper'
import {router} from '@/router'
import { useDialog } from 'naive-ui'

const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))
const dialog = useDialog()
const show = ref(false)
function logout()
{

  dialog.warning({
    title: '提示',
    content: '是否要退出系统',
    positiveText: '是',
    negativeText: '否',
    onPositiveClick: () => {
      //removeToken();
      removeTokenobj();
      router.push('/login'); 
    },
  })

  // if(confirm('是否退出系统?'))
  // {
  //  removeToken();
  //  router.push('/login'); 
  // }
  
}
</script>

<style>
   .logout {
     cursor: pointer;
   }
</style>

<template>
  <footer class="flex items-center justify-between min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
    <div class="flex-1 flex-shrink-0 overflow-hidden">
      <UserAvatar />
    </div>

    <HoverButton @click="show = true">
      <span class="text-xl text-[#4f555e] dark:text-white">
        <SvgIcon icon="ri:settings-4-line" />
      </span>
    </HoverButton>

    <Setting v-if="show" v-model:visible="show" />
    <span @click="logout()" class="logout">退出</span>
  </footer>
</template>
