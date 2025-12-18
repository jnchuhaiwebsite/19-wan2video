<template>
  <main>
    <ChristmasHomePc v-if="!isMobile" class="pc-content" />
    <ChristmasHomeMobile v-else class="mobile-content" />
  </main>
</template>
  
  
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ChristmasHomePc from '~/components/christmas/ChristmasHomePc.vue'
import ChristmasHomeMobile from '~/components/christmas/ChristmasHomeMobile.vue'
import { useHead } from 'nuxt/app'
import { useSeo } from '~/composables/useSeo'

// 设置使用圣诞布局（不包含 Footer）
// @ts-ignore: Nuxt macro function
definePageMeta({
  layout: 'christmas'
})

useSeo({
  title: 'Christmas Greeting Video Templates',
  description: 'Discover 3 Christmas greeting video templates to create personalized holiday messages.'
})
// 引入字体
useHead({
  link: [
    { 
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400&display=swap' 
    },
    // 预加载圣诞页面资源
    { rel: 'preload', as: 'image', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-background.jpg' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-home-left.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-home-middle.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-home-right.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-s.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-s.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-s.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-s.mp4', type: 'video/mp4' }
  ]
})

const isMobile = ref(false)

const updateIsMobile = () => {
  if (typeof window === 'undefined') return
  isMobile.value = window.innerWidth <= 1023
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>
  
<style scoped>
.pc-content {
  display: none;
}

.mobile-content {
  display: none;
}

/* PC 端：大于 1024px 的屏幕 */
@media (min-width: 1024px) {
  .pc-content {
    display: block;
  }
}

/* 移动端：小于等于 1023px 的屏幕 */
@media (max-width: 1023px) {
  .mobile-content {
    display: block;
  }
}
</style>
  