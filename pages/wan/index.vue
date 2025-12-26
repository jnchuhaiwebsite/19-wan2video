<template>
    <div class="min-h-screen bg-blue-pale">
      <main>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useHead } from 'nuxt/app';
  import { onMounted, onUnmounted } from 'vue'
  import { useSeo } from '~/composables/useSeo'
  import { useNuxtApp } from 'nuxt/app'
  import { useNavigation } from '~/utils/navigation'

  
  
  
  const { $toast } = useNuxtApp() as any
  const { handleScroll } = useNavigation()
  
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