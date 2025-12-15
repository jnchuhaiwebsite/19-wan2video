<template>
  <section class="py-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden mt-20">
    <!-- 增强的背景装饰 - 柔和光晕效果 -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <!-- 科技网格背景 -->
    <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px); background-size: 50px 50px;"></div>
    
    <!-- 噪点纹理 -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E');"></div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <!-- 优化的顶部标签 - 增强毛玻璃效果 -->
        <!-- <div class="inline-flex items-center px-5 py-2.5 bg-white/60 backdrop-blur-md rounded-full text-sm font-semibold text-slate-700 mb-6 shadow-lg border border-slate-200/50">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Next-Generation AI Video Model
        </div> -->
        
        <!-- 优化的标题 - 使用 font-black 和 tracking-tight -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.08]">
          <span class="title-glow block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Wan 2.6 
          </span>
          <span class="block mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-700/95">
            AI Video Model for Multi-Shot Storytelling
          </span>
        </h1>
        
        <!-- 优化的正文 - 使用 text-pretty，限制宽度，增加行高，使用 Slate Grey -->
        <p class="text-base md:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal mb-10 text-pretty" style="max-width: 700px; line-height: 1.75;">
          Create coherent multi-shot videos with Wan 2.6. Generate up to 15-second stories, keep key details consistent across scenes, and turn simple prompts or video references into complete narratives.
        </p>

        <!-- 三个核心视频能力要点 -->
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 text-left">
          <div class="group bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_10px_30px_rgba(139,92,246,0.05)] border border-slate-200/80 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(129,140,248,0.18)] hover:-translate-y-0.5">
            <div class="flex items-start gap-3 mb-2.5">
              <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500/90 to-indigo-500/80 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(129,140,248,0.4)]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" stroke-width="1.7" />
                  <path d="M9 5v14M15 5v14" stroke-width="1.2" />
                  <circle cx="7" cy="8" r="0.8" fill="currentColor" />
                  <circle cx="13" cy="8" r="0.8" fill="currentColor" />
                  <circle cx="19" cy="8" r="0.8" fill="currentColor" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold tracking-[0.08em] text-slate-500 mb-1 uppercase">
                  Multi-Shot Narrative
                </p>
                <p class="text-sm font-semibold text-slate-900 mb-1.5">
                  Multi-Shot Narrative Generation
                </p>
              </div>
            </div>
            <p class="text-sm md:text-[15px] text-slate-700 leading-relaxed">
              Automatically plan and generate multiple connected shots while preserving key story elements.
            </p>
          </div>
          <div class="group bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_10px_30px_rgba(139,92,246,0.05)] border border-slate-200/80 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(129,140,248,0.18)] hover:-translate-y-0.5">
            <div class="flex items-start gap-3 mb-2.5">
              <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500/90 to-sky-500/80 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(96,165,250,0.4)]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="6" width="7" height="9" rx="1.6" stroke-width="1.6" />
                  <rect x="13" y="9" width="7" height="9" rx="1.6" stroke-width="1.6" />
                  <path d="M11 10h2.5" stroke-width="1.4" />
                  <path d="M11 13h2.5" stroke-width="1.4" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold tracking-[0.08em] text-slate-500 mb-1 uppercase">
                  Video Reference
                </p>
                <p class="text-sm font-semibold text-slate-900 mb-1.5">
                  Video Reference-Based Creation
                </p>
              </div>
            </div>
            <p class="text-sm md:text-[15px] text-slate-700 leading-relaxed">
              Reuse appearance and audio traits from reference videos for single or dual-subject storytelling.
            </p>
          </div>
          <div class="group bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_10px_30px_rgba(139,92,246,0.05)] border border-slate-200/80 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(129,140,248,0.18)] hover:-translate-y-0.5">
            <div class="flex items-start gap-3 mb-2.5">
              <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/90 to-emerald-500/80 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(52,211,153,0.38)]">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="7" stroke-width="1.7" />
                  <path d="M12 8v4l2.5 1.5" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 3v2.2" stroke-width="1.3" stroke-linecap="round" />
                </svg>
              </div>
              <div>
                <p class="text-xs font-semibold tracking-[0.08em] text-slate-500 mb-1 uppercase">
                  15s Long Output
                </p>
                <p class="text-sm font-semibold text-slate-900 mb-1.5">
                  15s Long Video Output
                </p>
              </div>
            </div>
            <p class="text-sm md:text-[15px] text-slate-700 leading-relaxed">
              Extended duration enables richer scenes, smoother transitions, and more complete narratives.
            </p>
          </div>
        </div>
        
        <!-- CTA 按钮组 - 增强交互反馈 -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <!-- 主按钮 - 增强 hover 阴影和位移，统一高度 -->
          <button 
            class="group relative h-14 px-8 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 text-white font-semibold text-lg rounded-xl shadow-[0_10px_30px_rgba(124,58,237,0.45)] hover:shadow-[0_18px_45px_rgba(129,140,248,0.7)] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:from-purple-500 hover:via-violet-400 hover:to-indigo-400 overflow-hidden"
            @click="handleStartCreating"
          >
            <span class="relative z-10 flex items-center gap-2">
              Try Wan 2.6 Now
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
          
          <!-- 副按钮 - 优化样式：白色背景、边框、图标圆圈、统一高度 -->
          <!-- <button 
            @click="handleWatchShowreel"
            class="group h-14 px-8 bg-white border border-slate-200 text-slate-700 font-semibold text-lg rounded-xl shadow-md hover:bg-white hover:border-purple-500 hover:text-purple-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-3"
          >
         
            <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
              <svg class="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span>Watch Showreel</span>
          </button> -->
        </div>
        
        <!-- 视频/图片展示区域 - 增强视觉效果和呼吸感 -->
 
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
  router.push('/wan/wan-2-6#generator')
  // 如果首页有生成器区域，可以滚动到那里
  // setTimeout(() => {
  //   const generatorSection = document.getElementById('generator')
  //   if (generatorSection) {
  //     const offset = 80
  //     const elementPosition = generatorSection.getBoundingClientRect().top
  //     const offsetPosition = elementPosition + window.scrollY - offset
  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: 'smooth'
  //     })
  //   }
  // }, 100)
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
.title-glow {
  text-shadow: 0 10px 30px rgba(88, 28, 135, 0.28);
}

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

