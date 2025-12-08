<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden mt-20">
    <!-- 装饰背景 -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-2xl animate-float"></div>
      <div class="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-2xl animate-float-delayed"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6 shadow-sm">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Next-Generation AI Video Model
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-relaxed" style="line-height: 1.4;">
          Wan 2.6 — The Next-Gen AI Video Generator for Multi-Shot Storytelling
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-12">
          Wan 2.6 is a cutting-edge multimodal AI video generator built for creators who need cinematic quality and seamless multi-shot storytelling. Produce stunning 1080p 24fps videos with consistent characters, smooth scene transitions, and synchronized visuals. Wan 2.6 brings together text, images, audio, and animation in one unified platform—turning your ideas into vivid, professional video and image content.
        </p>
        
        <!-- 视频/图片展示区域 -->
        <div 
          class="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          @mouseenter="handleMouseEnter"
          @click="handleClick"
        >
          <!-- 默认图片 -->
          <img 
            v-if="!videoLoaded"
            :src="imageUrl"
            alt="Wan 2.6 Preview"
            class="w-full h-auto object-cover"
          />
          
          <!-- 视频元素 -->
          <video
            v-if="videoLoaded"
            ref="videoRef"
            :src="videoUrl"
            class="w-full h-auto object-cover"
            autoplay
            muted
            controls
            playsinline
            @loadeddata="handleVideoLoaded"
            @error="handleVideoError"
          />
          
          <!-- Loading 指示器 -->
          <div 
            v-if="isLoading"
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
              <p class="text-white text-lg font-medium">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const imageUrl = 'https://resp.wan2video.com/wan2ai/wan26/Wan 2.6-top.webp'
const videoUrl = 'https://resp.wan2video.com/wan2ai/wan26/Wan 2.6-top.mp4'

const videoRef = ref<HTMLVideoElement | null>(null)
const isLoading = ref(false)
const videoLoaded = ref(false)
const isMobile = ref(false)
const hasTriggered = ref(false)

// 检测是否为移动设备
const checkMobile = () => {
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
}

// 开始加载视频
const startLoadingVideo = () => {
  if (hasTriggered.value || videoLoaded.value) return
  
  hasTriggered.value = true
  isLoading.value = true
  
  // 预加载视频
  const video = document.createElement('video')
  video.src = videoUrl
  video.preload = 'auto'
  
  video.addEventListener('loadeddata', () => {
    isLoading.value = false
    videoLoaded.value = true
    // 确保视频元素已挂载后再播放
    setTimeout(() => {
      if (videoRef.value) {
        videoRef.value.play().catch(err => {
          console.error('视频播放失败:', err)
        })
      }
    }, 100)
  })
  
  video.addEventListener('error', () => {
    isLoading.value = false
    hasTriggered.value = false
    console.error('视频加载失败')
  })
}

// PC端鼠标移动事件
const handleMouseEnter = () => {
  if (!isMobile.value && !hasTriggered.value) {
    startLoadingVideo()
  }
}

// 移动端点击事件
const handleClick = () => {
  if (isMobile.value && !hasTriggered.value) {
    startLoadingVideo()
  }
}

// 视频加载完成
const handleVideoLoaded = () => {
  isLoading.value = false
  if (videoRef.value) {
    videoRef.value.play().catch(err => {
      console.error('视频播放失败:', err)
    })
  }
}

// 视频加载错误
const handleVideoError = () => {
  isLoading.value = false
  hasTriggered.value = false
  console.error('视频加载失败')
}

// 窗口大小改变时重新检测
const handleResize = () => {
  checkMobile()
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(-5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite 2s;
}
</style>

