<template>
  <section class="py-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden mt-20">
    <!-- 增强的背景装饰 - 柔和光晕效果 -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <!-- 科技网格背景 -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
    
    <!-- 噪点纹理 -->
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E');"></div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <!-- 优化的顶部标签 - 增强毛玻璃效果 -->
        <div class="inline-flex items-center px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full text-sm font-semibold text-slate-700 mb-6 shadow-lg border border-slate-200/50">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Next-Generation AI Video Model
        </div>
        
        <!-- 优化的标题 - 使用 font-black 和 tracking-tight -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
          <span class="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Wan 2.6
          </span>
          <span class="block mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
            The Next-Gen AI Video Generator for 
            <span class="relative inline-block">
              <span class="relative z-10 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">Multi-Shot Storytelling</span>
              <span class="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-200/50 via-pink-200/50 to-red-200/50 blur-sm -z-0"></span>
            </span>
          </span>
        </h1>
        
        <!-- 优化的正文 - 使用 text-pretty，限制宽度，增加行高，使用 Slate Grey -->
        <p class="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-10 text-pretty" style="max-width: 700px; line-height: 1.75;">
          Wan 2.6 is a cutting-edge multimodal AI video generator built for creators who need cinematic quality and seamless multi-shot storytelling. Produce stunning 1080p 24fps videos with consistent characters, smooth scene transitions, and synchronized visuals. Wan 2.6 brings together text, images, audio, and animation in one unified platform—turning your ideas into vivid, professional video and image content.
        </p>
        
        <!-- CTA 按钮组 - 增强交互反馈 -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <!-- 主按钮 - 增强 hover 阴影和位移，统一高度 -->
          <button 
          disabled="true"
            class="group relative h-14 px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:from-purple-500 hover:via-pink-500 hover:to-red-400 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              Start Creating
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          
          <!-- 副按钮 - 优化样式：白色背景、边框、图标圆圈、统一高度 -->
          <button 
            @click="handleWatchShowreel"
            class="group h-14 px-8 bg-white border border-slate-200 text-slate-700 font-semibold text-lg rounded-xl shadow-md hover:bg-white hover:border-purple-500 hover:text-purple-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-3"
          >
            <!-- 图标圆圈背景 -->
            <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
              <svg class="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span>Watch Showreel</span>
          </button>
        </div>
        
        <!-- 视频/图片展示区域 - 增强视觉效果和呼吸感 -->
        <div 
          class="relative max-w-5xl mx-auto rounded-3xl overflow-hidden cursor-pointer group"
          @mouseenter="handleMouseEnter"
          @click="handleClick"
        >
          <!-- 呼吸感光晕效果 - hover 时亮度增加 -->
          <div class="absolute -inset-2 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-red-400/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 group-hover:blur-3xl transition-all duration-500 -z-10"></div>
          
          <!-- 深度阴影和边框光效 -->
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
          
          <!-- 毛玻璃容器 -->
          <div class="relative bg-white/20 backdrop-blur-md rounded-3xl p-1 shadow-2xl group-hover:shadow-purple-500/20 transition-shadow duration-500">
            <div class="relative rounded-2xl overflow-hidden bg-slate-900/5" style="width: 1920px; max-width: 100%; aspect-ratio: 1920/950; min-height: 0;">
              <!-- 默认图片 -->
              <img 
                v-if="!videoLoaded"
                :src="imageUrl"
                alt="Wan 2.6 Preview"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
                @load="handleImageLoad"
              />
              
              <!-- 视频元素 -->
              <video
                v-if="videoLoaded"
                ref="videoRef"
                :src="videoUrl"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                autoplay
                muted
                controls
                playsinline
                @loadeddata="handleVideoLoaded"
                @error="handleVideoError"
              />
              
              <!-- 播放按钮覆盖层（仅在图片显示时）- 增强毛玻璃效果 -->
              <div 
                v-if="!videoLoaded && !isLoading"
                class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 backdrop-blur-[2px] transition-all duration-300"
              >
                <div class="w-20 h-20 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-purple-500/50 transition-all duration-300 border border-white/50">
                  <svg class="w-10 h-10 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              
              <!-- Loading 指示器 -->
              <div 
                v-if="isLoading"
                class="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
              >
                <div class="flex flex-col items-center">
                  <div class="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p class="text-white text-lg font-medium">Loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 根据屏幕宽度动态切换图片URL
const imageUrl = computed(() => {
  return isMobile.value 
    ? 'https://cfsource.wan2video.com/wan2video/26/Wan-2-6_mobile.webp'
    : 'https://cfsource.wan2video.com/wan2video/26/Wan-2-6.webp'
})
const videoUrl = 'https://cfsource.wan2video.com/wan2video/26/Wan-2-6.mp4'

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
  } else if (!isMobile.value && !hasTriggered.value) {
    // PC端点击也触发视频加载
    startLoadingVideo()
  }
}

// 图片加载完成
const handleImageLoad = () => {
  // 图片加载完成，确保布局稳定
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

// CTA 按钮处理函数
const handleStartCreating = () => {
  // 跳转到首页的生成器部分，或者跳转到定价页面
  // router.push('/')
  // 如果首页有生成器区域，可以滚动到那里
  setTimeout(() => {
    const generatorSection = document.getElementById('hero')
    if (generatorSection) {
      const offset = 80
      const elementPosition = generatorSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, 100)
}

const handleWatchShowreel = () => {
  // 触发视频播放
  if (!videoLoaded.value && !hasTriggered.value) {
    startLoadingVideo()
  } else if (videoLoaded.value && videoRef.value) {
    videoRef.value.play().catch(err => {
      console.error('视频播放失败:', err)
    })
  }
  
  // 滚动到视频区域
  setTimeout(() => {
    const videoElement = document.querySelector('video, img[alt="Wan 2.6 Preview"]')
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, 100)
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

