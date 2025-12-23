<template>
  <section class="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/5 w-72 h-72 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 & 副标题 -->
      <div class="text-center mb-14">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-5 leading-tight"
        >
          Explore Real Wan 2.6 Video Creations
        </h2>
        <p class="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          Browse sample videos to understand how Wan 2.6 handles storytelling, character consistency, and audio-visual flow.
        </p>
      </div>

      <!-- 视频网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(item, index) in videoItems"
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm border border-purple-100/60 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          @mouseenter="handleMouseEnter(index)"
          @click="handleClick(index)"
        >
          <!-- 图片封面 -->
          <div
            v-if="!item.videoLoaded"
            class="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
          >
            <img
              :src="item.imageUrl"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            <!-- Loading 状态 -->
            <div
              v-if="item.loading"
              class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            >
              <div class="flex flex-col items-center gap-3">
                <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                <p class="text-white text-sm font-medium">Loading...</p>
              </div>
            </div>
            
            <!-- 播放按钮 -->
            <div
              v-if="!item.loading && !item.videoLoaded"
              class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300 cursor-pointer"
            >
              <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- 视频元素 -->
          <div
            v-if="item.videoLoaded"
            class="relative aspect-video bg-black overflow-hidden"
          >
            <video
              :ref="el => setVideoRef(index, el)"
              :src="item.videoUrl"
              loop
              muted
              playsinline
              autoplay
              class="w-full h-full object-cover"
              @loadeddata="handleVideoLoaded(index)"
              @error="handleVideoError(index)"
            ></video>
          </div>

          <!-- 视频标题 -->
          <div class="p-4 bg-white/90 backdrop-blur-sm">
            <h3 class="text-sm font-semibold text-gray-900 line-clamp-1">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface VideoItem {
  title: string
  imageUrl: string
  videoUrl: string
  loading: boolean
  videoLoaded: boolean
}

const videoItems = ref<VideoItem[]>([
  {
    title: 'Moonlight Waltz',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/moonlight-waltz.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/moonlight-waltz.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'Floral Reverie',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/floral-reverie.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/floral-reverie.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'Dinner for Two',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/dinner-for-two.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/dinner-for-two.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'When Flowers Took Flight',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/when-flowers-took-flight.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/when-flowers-took-flight.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'The Last Sign of Life',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/the-last-sign-of-life.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/the-last-sign-of-life.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'The Luminous Run',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/the-luminous-run.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/the-luminous-run.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'The Long Walk Home',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/the-long-walk-home.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/the-long-walk-home.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'On Guard',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/on-guard.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/on-guard.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'Zoomies Incoming',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/zoomies-incoming.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/zoomies-incoming.mp4',
    loading: false,
    videoLoaded: false
  }
])

const videoRefs = ref<(HTMLVideoElement | null)[]>([])
const isMobile = ref(false)

// 检测是否为移动设备
const checkMobile = () => {
  if (typeof window === 'undefined') return
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
}

// 设置视频引用
const setVideoRef = (index: number, el: any) => {
  if (el && el instanceof HTMLVideoElement) {
    videoRefs.value[index] = el
  }
}

// 开始加载视频
const startLoadingVideo = (index: number) => {
  const item = videoItems.value[index]
  
  // 如果已经在加载或已加载，则返回
  if (item.loading || item.videoLoaded) return
  
  // 设置加载状态
  item.loading = true
  
  // 创建视频元素进行预加载
  const video = document.createElement('video')
  video.src = item.videoUrl
  video.preload = 'auto'
  
  video.addEventListener('loadeddata', () => {
    item.loading = false
    item.videoLoaded = true
    
    // 确保视频元素已挂载后再播放
    setTimeout(() => {
      const videoEl = videoRefs.value[index]
      if (videoEl) {
        videoEl.play().catch(err => {
          console.error(`视频 ${index} 播放失败:`, err)
        })
      }
    }, 100)
  })
  
  video.addEventListener('error', () => {
    item.loading = false
    console.error(`视频 ${index} 加载失败`)
  })
}

// PC端鼠标移动事件
const handleMouseEnter = (index: number) => {
  if (!isMobile.value) {
    startLoadingVideo(index)
  }
}

// 移动端和PC端点击事件
const handleClick = (index: number) => {
  if (isMobile.value || !videoItems.value[index].videoLoaded) {
    startLoadingVideo(index)
  }
}

// 视频加载完成
const handleVideoLoaded = (index: number) => {
  const item = videoItems.value[index]
  item.loading = false
  
  const videoEl = videoRefs.value[index]
  if (videoEl) {
    videoEl.play().catch(err => {
      console.error(`视频 ${index} 播放失败:`, err)
    })
  }
}

// 视频加载错误
const handleVideoError = (index: number) => {
  const item = videoItems.value[index]
  item.loading = false
  console.error(`视频 ${index} 加载失败`)
}

// 窗口大小改变时重新检测
const handleResize = () => {
  checkMobile()
}

onMounted(() => {
  checkMobile()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
