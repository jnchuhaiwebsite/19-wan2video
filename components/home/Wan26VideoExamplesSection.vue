<template>
  <section class="py-24 bg-[#fafaff] relative overflow-hidden">
    <!-- 动态背景装饰 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-blue-100/50 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-purple-100/50 rounded-full blur-[120px] animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题区域 -->
      <div class="text-center mb-16 space-y-4">

        <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Explore Real <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Wan 2.6</span> Video Generations
        </h2>
        <p class="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed font-light">
          Browse sample videos to understand how Wan 2.6 handles storytelling, character consistency, and audio-visual flow.
        </p>
      </div>

      <!-- 视频网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in videoItems"
          :key="index"
          class="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] transition-all duration-500 border border-gray-100/50"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
          @click="handleClick(index)"
        >
          <!-- 媒体容器 -->
          <div class="relative aspect-video overflow-hidden">
            <!-- 封面图 (淡出动画) -->
            <transition name="fade">
              <div v-if="!item.videoLoaded" class="absolute inset-0 z-10">
                <img
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <!-- 播放提示遮罩 -->
                <div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div class="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
            </transition>

            <!-- 视频主体 -->
            <video
              v-if="item.videoLoaded || item.loading"
              :ref="el => setVideoRef(index, el)"
              :src="item.videoUrl"
              loop
              muted
              playsinline
              class="w-full h-full object-cover"
              :class="{'opacity-0': item.loading, 'opacity-100': item.videoLoaded}"
              @loadeddata="handleVideoLoaded(index)"
            ></video>

            <!-- 加载状态 -->
            <div v-if="item.loading" class="absolute inset-0 z-20 flex items-center justify-center bg-gray-50/50 backdrop-blur-sm">
              <div class="relative w-10 h-10">
                <div class="absolute inset-0 border-2 border-blue-500/20 rounded-full"></div>
                <div class="absolute inset-0 border-2 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
              </div>
            </div>

            <!-- AI 标签 (装饰) -->
            <div class="absolute top-3 left-3 z-30">
              <span class="px-2 py-1 text-[10px] font-bold text-white bg-black/30 backdrop-blur-md rounded-md border border-white/20 uppercase">
                Wan 2.6
              </span>
            </div>
          </div>

          <!-- 底部信息 -->
          <div class="p-5 flex items-center justify-between bg-white relative">
            <div class="flex-1 min-w-0">
              <h3 class="text-base font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-300">
                {{ item.title }}
              </h3>
              <p class="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Cinematic • 4K AI</p>
            </div>
            <div class="ml-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <div class="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
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
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/wan-2-6_examples_1.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/wan-2-6_examples_1.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'Floral Reverie',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/wan-2-6_examples_2.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/wan-2-6_examples_2.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'Dinner for Two',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/wan-2-6_examples_3.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/wan-2-6_examples_3.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'When Flowers Took Flight',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/wan-2-6_examples_4.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/wan-2-6_examples_4.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'The Last Sign of Life',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/wan-2-6_examples_5.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/wan-2-6_examples_5.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'The Luminous Run',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/wan-2-6_examples_6.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/wan-2-6_examples_6.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'The Long Walk Home',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/wan-2-6_examples_7.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/wan-2-6_examples_7.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'On Guard',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/wan-2-6_examples_8.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/wan-2-6_examples_8.mp4',
    loading: false,
    videoLoaded: false
  },
  {
    title: 'Zoomies Incoming',
    imageUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/image/wan-2-6_examples_9.webp',
    videoUrl: 'https://cfsource.wan2video.com/wan2video/26/examples/video/wan-2-6_examples_9.mp4',
    loading: false,
    videoLoaded: false
  }
])

const videoRefs = ref<(HTMLVideoElement | null)[]>([])
const isMobile = ref(false)

const checkMobile = () => {
  if (typeof window === 'undefined') return
  isMobile.value = window.innerWidth < 768
}

const setVideoRef = (index: number, el: any) => {
  if (el) videoRefs.value[index] = el
}

const startLoadingVideo = (index: number) => {
  const item = videoItems.value[index]
  if (item.loading || item.videoLoaded) return
  item.loading = true
}

const handleMouseEnter = (index: number) => {
  if (!isMobile.value) startLoadingVideo(index)
}

const handleMouseLeave = (index: number) => {
  // 如果想在鼠标移出时停止视频以节省CPU，可以在这里添加逻辑
}

const handleClick = (index: number) => {
  if (isMobile.value) startLoadingVideo(index)
}

const handleVideoLoaded = (index: number) => {
  const item = videoItems.value[index]
  item.loading = false
  item.videoLoaded = true
  setTimeout(() => {
    videoRefs.value[index]?.play()
  }, 50)
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
/* 动画增强 */
@keyframes pulse-slow {
  0%, 100% { transform: scale(1) translate(0, 0); }
  50% { transform: scale(1.1) translate(2%, 2%); }
}

.animate-pulse-slow {
  animation: pulse-slow 10s infinite ease-in-out;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 自定义滚动条样式（如果需要） */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
</style>