<template>
  <main>
    <!-- 根据屏幕宽度仅渲染对应端的组件，避免未展示端的媒体自动播放 -->
    <CreateChristmasVideoPc v-if="deviceType === 'pc'" />
    <CreateChristmasVideoPc4K v-else-if="deviceType === 'pc4k'" />
    <ChristmasVideoMobile v-else />
  </main>
</template>
  
  
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import CreateChristmasVideoPc from '~/components/christmas/CreateChristmasVideoPc.vue'
import ChristmasVideoMobile from '~/components/christmas/ChristmasVideoMobile.vue'
import CreateChristmasVideoPc4K from '~/components/christmas/CreateChristmasVideoPc4K.vue'
import { useHead } from 'nuxt/app'    
import { useSeo } from '~/composables/useSeo'
    
type DeviceType = 'pc' | 'pc4k' | 'mobile'
const deviceType = ref<DeviceType>('pc')

const updateDeviceType = () => {
  if (typeof window === 'undefined') return
  const width = window.innerWidth
  if (width <= 1023) {
    deviceType.value = 'mobile'
  } else if (width >= 2560) {
    deviceType.value = 'pc4k'
  } else {
    deviceType.value = 'pc'
  }
}

onMounted(() => {
  updateDeviceType()
  window.addEventListener('resize', updateDeviceType)
})

onBeforeUnmount(() => {
  if (typeof window === 'undefined') return
  window.removeEventListener('resize', updateDeviceType)
})

// 设置使用圣诞布局（不包含 Footer）
// @ts-ignore: Nuxt macro function
definePageMeta({
  layout: 'christmas'
})


useSeo({
  title: 'Christmas Video Maker & Personalized Christmas Greetings Ideas',
  description: 'Create personalized Christmas greeting videos with our Christmas video maker. Explore creative Christmas greetings and unique holiday video ideas for family and friends.'
})

// 引入字体
useHead({
  link: [
    { 
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400&display=swap' 
    },
    // 预加载圣诞资源（背景、模板视频、缩略图、音乐）
    { rel: 'preload', as: 'image', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-background.jpg' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-s.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-s.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-s.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-s.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-h.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-h.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-h.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'video', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-h.mp4', type: 'video/mp4' },
    { rel: 'preload', as: 'image', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-pine-forest-lights.png' },
    { rel: 'preload', as: 'image', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-church-holiday-interior.png' },
    { rel: 'preload', as: 'image', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-living-room-pine-tree-scene.png' },
    { rel: 'preload', as: 'image', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-christmas-cabin-scene.png' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/all-i-want-for-christmas-is-you.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/fairytale-at-christmas.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/feliz-navidad.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/last-christmas.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/mistletoe.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/santa-tell-me.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/snowman.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/christmas-tree-farm.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/coming-home-this-christmas.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/jingle-bell-rock.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/male/friend.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/male/colleague.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/male/family-members.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/female/friend.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/female/colleague.mp3', type: 'audio/mpeg' },
    { rel: 'preload', as: 'audio', href: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/female/family-members.mp3', type: 'audio/mpeg' }
  ]
})
</script>
  
<style scoped>
</style>
  
