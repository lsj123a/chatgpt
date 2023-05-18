<script setup lang='ts'>
import { defineAsyncComponent, ref } from 'vue'
import { HoverButton, SvgIcon, UserAvatar } from '@/components/common'
import { removeToken } from '@/store/modules/auth/helper'
import {router} from '@/router'

const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))

const show = ref(false)
function logout()
{
  if(confirm('是否退出系统?'))
  {
   removeToken();
   router.push('/login'); 
  }
  
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
    <span @click="logout()" style="logout">退出</span>
  </footer>
</template>
