<template>
  <section class="relative py-24 bg-gradient-to-br from-white via-[#f5f3ff] to-white text-slate-900 overflow-hidden">
    <!-- 背景纹理与光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:46px_46px]"></div>
      <div class="absolute -top-16 -left-10 w-96 h-96 bg-gradient-to-br from-purple-300/25 via-indigo-300/20 to-cyan-200/25 blur-3xl"></div>
      <div class="absolute bottom-[-180px] right-[-120px] w-[520px] h-[520px] bg-gradient-to-tr from-indigo-200/20 via-fuchsia-200/18 to-amber-200/18 blur-[110px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-200/60 text-sm font-medium text-purple-700 shadow-[0_10px_30px_-18px_rgba(126,34,206,0.35)] backdrop-blur">
          <span class="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
          Use Cases
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent mt-6">
          Use Cases of Wan 2.6
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 md:gap-10">
        <div 
          v-for="(useCase, index) in useCases" 
          :key="index"
          class="usecase-card group"
          :class="index % 2 === 1 ? 'md:translate-y-8' : ''"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
          @click="handleClick(index)"
        >
          <div class="relative aspect-[16/9] bg-slate-900 overflow-hidden rounded-3xl border border-slate-200/60 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)]">
            <!-- 封面图片 -->
            <img 
              v-if="!playingStates[index] && !loadingStates[index]"
              :src="useCase.poster"
              :alt="useCase.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            
            <!-- Loading 状态 -->
            <div 
              v-if="loadingStates[index]"
              class="absolute inset-0 flex items-center justify-center bg-slate-950/70 z-20"
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
              class="absolute inset-0 flex items-center justify-center bg-slate-950/25 group-hover:bg-slate-950/40 transition-all z-10"
            >
              <div class="play-btn">
                <svg class="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="copy-card">
            <p class="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">Use Case</p>
            <h3 class="text-2xl font-bold text-slate-900 mb-3">
              {{ useCase.title }}
            </h3>
            <p class="text-slate-700 leading-relaxed mb-4 line-clamp-3">
              {{ useCase.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in useCase.tags"
                :key="tag"
                class="tag-chip"
              >
                {{ tag }}
              </span>
            </div>
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
    description: 'Generate viral-ready 9:16 clips for TikTok & Reels with one prompt—voice, music, pacing aligned.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_social-media-creation.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_social-media-creation.webp',
    tags: ['#VerticalVideo', '#TikTok', '#Reels', '#9x16']
  },
  {
    title: 'Powering Modern Marketing Teams',
    description: 'Turn campaign ideas into ad-ready videos with cinematic lighting, motion, and precise A/V sync.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_modern-marketing-teams.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_modern-marketing-teams.webp',
    tags: ['#Marketing', '#Ads', '#Brand', '#AVSync']
  },
  {
    title: 'A Creative Engine for Filmmakers',
    description: 'Storyboard, previz, and short films with consistent characters and smooth multi-shot motion.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_filmmaker-creative-engine.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_filmmaker-creative-engine.webp',
    tags: ['#Filmmaking', '#Storyboard', '#Previz', '#MultiShot']
  },
  {
    title: 'Scaling E-commerce Video Production',
    description: 'Generate product promos, 360 spins, and lifestyle clips at scale—no shoots required.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_ecommerce-video-production.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/wan26/wan-2-6_use-cases_ecommerce-video-production.webp',
    tags: ['#Ecommerce', '#Catalog', '#4K', '#Automation']
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
.usecase-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e5e7eb;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 22px 60px -40px rgba(15, 23, 42, 0.28);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
}

.usecase-card:hover {
  transform: translateY(-6px);
  border-color: rgba(129, 140, 248, 0.45);
  box-shadow: 0 28px 80px -46px rgba(99, 102, 241, 0.32);
}

.copy-card {
  background: linear-gradient(155deg, #f9fafb, #f4f6fb);
  border-top: 1px solid #e5e7eb;
  padding: 22px;
}

.tag-chip {
  padding: 6px 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.14), rgba(236, 72, 153, 0.12));
  border: 1px solid rgba(129, 140, 248, 0.25);
  color: #5b21b6;
  font-size: 0.85rem;
}

.play-btn {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.34);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow:
    0 14px 36px -18px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.usecase-card:hover .play-btn {
  transform: scale(1.08);
  box-shadow:
    0 18px 44px -18px rgba(129, 140, 248, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.45);
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

