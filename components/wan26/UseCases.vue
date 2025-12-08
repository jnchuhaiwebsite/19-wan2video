<template>
  <section class="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-15">
      <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-sm font-medium text-emerald-800 mb-6 shadow-sm">
          <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
          Use Cases
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8 leading-tight">
          Use Cases of Wan 2.6
        </h2>
      </div>

      <!-- Use Cases Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="(useCase, index) in useCases" 
          :key="index"
          class="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
          @click="handleClick(index)"
        >
          <div class="relative aspect-video bg-black cursor-pointer group">
            <!-- 封面图片 -->
            <img 
              v-if="!playingStates[index] && !loadingStates[index]"
              :src="useCase.poster"
              :alt="useCase.title"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            
            <!-- Loading 状态 -->
            <div 
              v-if="loadingStates[index]"
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20"
            >
              <div class="text-center">
                <div class="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-3"></div>
                <p class="text-white text-sm font-medium">Loading video...</p>
              </div>
            </div>
            
            <!-- 视频播放器 -->
            <video 
              v-if="playingStates[index]"
              :ref="el => { if (el) videoRefs[index] = el as HTMLVideoElement }"
              :src="useCase.videoUrl"
              controls
              playsinline
              webkit-playsinline
              class="w-full h-full object-cover"
              @loadeddata="onVideoLoaded(index)"
              @error="handleVideoError(index)"
            >
              <source :src="useCase.videoUrl" type="video/mp4">
              Your browser does not support video playback
            </video>
            
            <!-- 播放按钮覆盖层 -->
            <div 
              v-if="!playingStates[index] && !loadingStates[index]"
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all z-10"
            >
              <div class="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-opacity-100 transition-all">
                <svg class="w-8 h-8 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              {{ useCase.title }}
            </h3>
            <p class="text-gray-700 leading-relaxed">
              {{ useCase.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 用例数据
const useCases = ref([
  {
    title: 'Social Media Creation with Wan 2.6',
    description: 'Wan 2.6 makes it effortless to produce viral-ready TikToks, Reels, and YouTube Shorts. Its AI video generator creates polished 9:16 vertical videos complete with personalized voiceovers, music, and synchronized performance. Simply describe your idea, and Wan 2.6 transforms it into engaging, platform-optimized content.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_social-media-creation.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_social-media-creation.webp'
  },
  {
    title: 'Powering Modern Marketing Teams',
    description: 'Marketers can instantly turn campaign concepts into high-impact promotional videos. Wan 2.6 generates product showcases, brand explainers, and ad-ready visuals featuring cinematic lighting, dynamic camera movement, and perfect audio-visual sync. All output includes full commercial usage rights, making it ideal for professional campaigns.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_modern-marketing-teams.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_modern-marketing-teams.webp'
  },
  {
    title: 'A Creative Engine for Filmmakers',
    description: 'Directors and filmmakers use Wan 2.6 to storyboard ideas, produce concept trailers, and create short films with consistent characters. Its advanced motion engine delivers smooth transitions, accurate frame-to-frame detail, and realistic multi-shot sequences. Script-to-video workflows become faster and far more accessible with Wan 2.6.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_filmmaker-creative-engine.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_filmmaker-creative-engine.webp'
  },
  {
    title: 'Scaling E-commerce Video Production',
    description: 'Wan 2.6 enables brands to generate hundreds of product videos without photo shoots or complex setups. Simply describe your item, and the system produces promotional clips, 360-degree rotations, lifestyle scenes, or vertical product features—tailored to any aspect ratio. Scale catalog content effortlessly with Wan 2.6.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_ecommerce-video-production.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_ecommerce-video-production.webp'
  }
])

// 播放状态管理
const playingStates = ref<boolean[]>([])
const loadingStates = ref<boolean[]>([])
const videoRefs = ref<(HTMLVideoElement | null)[]>([])
const isMobile = ref(false)

// 检测设备类型
const checkDevice = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
  }
}

// 初始化
onMounted(() => {
  checkDevice()
  playingStates.value = new Array(useCases.value.length).fill(false)
  loadingStates.value = new Array(useCases.value.length).fill(false)
  videoRefs.value = new Array(useCases.value.length).fill(null)
  
  // 监听窗口大小变化
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', checkDevice)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', checkDevice)
  }
})

// PC端：鼠标移动时加载视频
const handleMouseEnter = (index: number) => {
  if (!isMobile.value && !playingStates.value[index] && !loadingStates.value[index]) {
    loadingStates.value[index] = true
    // 延迟一点时间再开始加载视频，让loading状态可见
    setTimeout(() => {
      playingStates.value[index] = true
    }, 100)
  }
}

// PC端：鼠标离开时停止视频（可选）
const handleMouseLeave = (index: number) => {
  // 如果需要鼠标离开时停止视频，可以在这里实现
  // 目前保持播放状态
}

// 移动端：点击时加载视频（PC端作为备用）
const handleClick = (index: number) => {
  // 移动端或PC端如果视频还没加载，都可以通过点击触发
  if (!playingStates.value[index] && !loadingStates.value[index]) {
    loadingStates.value[index] = true
    setTimeout(() => {
      playingStates.value[index] = true
    }, 100)
  }
}

// 视频加载完成
const onVideoLoaded = (index: number) => {
  loadingStates.value[index] = false
  // 自动播放视频
  const video = videoRefs.value[index]
  if (video) {
    video.play().catch(err => {
      console.error('视频自动播放失败:', err)
    })
  }
}

// 视频加载错误处理
const handleVideoError = (index: number) => {
  loadingStates.value[index] = false
  console.error(`视频 ${index} 加载失败`)
}
</script>

<style scoped>
/* Additional styles if needed */
</style>

