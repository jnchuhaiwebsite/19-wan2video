<template>
    <div class="min-h-screen bg-blue-pale">
      <main>
        <div class="">
    <Breadcrumbs 
    :nav-tabs="tabs" 
    :items="breadcrumbItems" />
  </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useHead } from 'nuxt/app';
  import { onMounted, onUnmounted, ref } from 'vue'
  import { useSeo } from '~/composables/useSeo'
  import { useNuxtApp } from 'nuxt/app'
  import { useNavigation } from '~/utils/navigation'

  
  
  
  const { $toast } = useNuxtApp() as any
  const { handleScroll } = useNavigation()

  
const breadcrumbItems = ref([
  { text: 'Wan AI',to: '/wan'},
]);

// 修改点 2 (可选，建议): 使用 ref 包裹，确保数据响应性一致
const tabs = ref([
  { 
    text: 'Wan 2.2', 
    to: '/wan/wan-2-2', 
    isActive: false 
  },
  { 
    text: 'Wan 2.5', 
    to: '/wan/wan-2-5', 
    isActive: false, 
  
  },
  { 
    text: 'Wan 2.6', 
    to: '/wan/wan-2-6', 
    isActive: false, 
    badge: 'New'  
  }
]);
  
  // 使用默认的 SEO 配置
  useSeo({
    title: 'Wan AI Video Generator: Try Wan 2.6 (Latest)',
    description: 'Experience Alibaba\'s Wan AI (Wan 2.6). The latest SOTA video model featuring 15s generation, audio-visual storytelling, and character consistency. Compare Wan 2.6 vs 2.5 features here.'
  })
  
  // 处理支付回调
  onMounted(() => {
    if (typeof window === "undefined") return;
  
    const urlParams = new URLSearchParams(window.location.search);
    const paySuccess = urlParams.get("paysuccess");
  
    if (paySuccess == "1") {
      window.history.replaceState({}, "", window.location.pathname);
      setTimeout(() => {
        $toast.success("Thank you for your support! Your membership benefits are now activated.", 3000);
      }, 500);
    } else if (urlParams.get("payfail") == "1") {
      window.history.replaceState({}, "", window.location.pathname);
    }
  
    // 添加滚动监听
    window.addEventListener('scroll', handleScroll)
  })

  // 清理滚动监听
  onUnmounted(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  </script>
  
  <style scoped>
  html {
    scroll-behavior: smooth;
  }
  </style>