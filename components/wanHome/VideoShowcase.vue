<template>
  <section class="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
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
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-5 leading-tight"
        >
          See What's Possible: Made with Wan 2.6
        </h2>
        <p class="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          Explore a gallery of unedited, raw footage generated directly from Wan 2.6. Experience the breakthrough in 15s coherence, native audio, and character consistency.
        </p>
      </div>

      <!-- 视频网格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              muted
              controls
              playsinline
              class="w-full h-full object-cover"
              :class="{'opacity-0': item.loading, 'opacity-100': item.videoLoaded}"
              @loadeddata="handleVideoLoaded(index)"
              @play="handleVideoPlay(index)"
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
 
        </div>
      </div>

      <!-- 底部行动区 -->
      <div class="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-indigo-100/60">
        <p class="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Want to create videos like these?
        </p>
        <NuxtLink
          to="/wan/wan-2-6#generator"
          class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span>Try Wan AI Now</span>
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
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
  }
])

const videoRefs = ref<(HTMLVideoElement | null)[]>([])
const isMobile = ref(false)
const currentPlayingIndex = ref<number | null>(null)

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

const handleVideoPlay = (index: number) => {
  // 如果当前播放的不是这个视频，暂停其他所有视频
  if (currentPlayingIndex.value !== null && currentPlayingIndex.value !== index) {
    const previousVideo = videoRefs.value[currentPlayingIndex.value]
    if (previousVideo && !previousVideo.paused) {
      previousVideo.pause()
    }
  }
  // 更新当前播放的视频索引
  currentPlayingIndex.value = index
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
/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

