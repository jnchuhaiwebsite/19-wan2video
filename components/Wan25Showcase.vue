<template>
  <section class="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-800 mb-6 shadow-sm">
          <span class="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
          Video Showcase
        </div>
        <h2 class="text-3xl md:text-4xl font-normal bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-8 leading-tight">
          Wan 2.5 - Real Examples of Next-Gen AI Video
        </h2>
        <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
          Discover what <span class="font-semibold text-purple-600">Wan 2.5</span> can achieve. These video samples highlight 
          <span class="font-semibold text-blue-600">smoother motion</span>, <span class="font-semibold text-teal-600">consistent color and lighting</span>, 
          <span class="font-semibold text-green-600">sharper clarity at 1080p</span>, and accurate prompt following across styles.
        </p>
      </div>

      <!-- Video Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div 
          v-for="(video, index) in videos" 
          :key="index"
          class="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50"
          :class="`hover:border-${getCardColor(index)}-200`"
        >
          <div class="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
            <!-- 封面图片 -->
            <img 
              v-if="!playingStates[index]"
              :src="video.poster"
              :alt="video.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <!-- 视频元素（懒加载） -->
            <video 
              v-if="playingStates[index]"
              :src="video.url"
              controls
              playsinline
              webkit-playsinline
              autoplay
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              @loadeddata="onVideoLoaded"
            >
              <source :src="video.url" type="video/mp4">
              Your browser does not support video playback
            </video>
            <!-- 播放按钮覆盖层 -->
            <div 
              v-if="!playingStates[index]"
              @click="playVideo(index)"
              class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 cursor-pointer group/play"
            >
              <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover/play:scale-110 transition-transform duration-300">
                <svg class="w-10 h-10 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
              <span class="flex items-center">
                <span class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Wan 2.5
              </span>
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
              {{ video.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-5">
              {{ video.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(tag, tagIndex) in video.tags" 
                :key="tag"
                class="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300"
                :class="getTagStyle(tagIndex)"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Highlight -->
      <div class="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Key Improvements in Wan 2.5
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Smoother Motion</h4>
            <p class="text-gray-600 text-sm">Enhanced motion fluidity and natural movement patterns</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Consistent Lighting</h4>
            <p class="text-gray-600 text-sm">Stable color tones and lighting across all generations</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">1080p Clarity</h4>
            <p class="text-gray-600 text-sm">Sharp details and refined aesthetics at high resolution</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Accurate Prompts</h4>
            <p class="text-gray-600 text-sm">Better understanding and execution of text descriptions</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 视频数据
const videos = ref([
  {
    url: 'https://resp.wan2video.com/wan2ai/video/wan-25-video-1.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/images/wan-25-video-1.webp',
    title: 'Confident Speaker',
    description: 'A confident woman in her 40s speaks on stage with synchronized lip movements and gestures.',
    tags: ['Speaking', 'Professional', 'Lip Sync']
  },
  {
    url: 'https://resp.wan2video.com/wan2ai/video/wan-25-video-2.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/images/wan-25-video-2.webp',
    title: 'Subway Scene',
    description: 'A young man sits on a subway train while blurred figures move rapidly, showing Wan 2.5\'s cinematic depth.',
    tags: ['Cinematic', 'Motion Blur', 'Depth']
  },
  {
    url: 'https://resp.wan2video.com/wan2ai/video/wan-25-video-3.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/images/wan-25-video-3.webp',
    title: 'Magical Transformation',
    description: 'A magical girl transformation in vibrant anime style, rendered with Wan 2.5 for dynamic motion and particle effects.',
    tags: ['Anime', 'Transformation', 'Effects']
  },
  {
    url: 'https://resp.wan2video.com/wan2ai/video/wan-25-video-4.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/images/wan-25-video-4.webp',
    title: 'Athlete Portrait',
    description: 'A muscular athlete after training, shot with high-contrast lighting. Wan 2.5 enhances realism and detail.',
    tags: ['Portrait', 'Realism', 'Lighting']
  },
  {
    url: 'https://resp.wan2video.com/wan2ai/video/wan-25-video-6.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/images/wan-25-video-6.webp',
    title: 'Times Square Announcement',
    description: 'A young woman in Times Square announces: "Yo, Wan2.5 just dropped on FLUXContext.org — sound and texture are next level, try it right now!" showcasing viral UGC style with saturated colors.',
    tags: ['UGC', 'Viral', 'Announcement']
  },
  {
    url: 'https://resp.wan2video.com/wan2ai/video/wan-25-video-8.mp4',
    poster: 'https://resp.wan2video.com/wan2ai/images/wan-25-video-8.webp',
    title: 'Sunset Portrait',
    description: 'A red-haired girl on a rooftop at sunset, captured with soft hues and natural style by Wan 2.5.',
    tags: ['Portrait', 'Sunset', 'Natural']
  }
])

// 播放状态管理
const playingStates = ref<boolean[]>([])

// 初始化播放状态数组
onMounted(() => {
  playingStates.value = new Array(videos.value.length).fill(false)
})

// 播放视频
const playVideo = (index: number) => {
  playingStates.value[index] = true
}

// 视频加载完成回调
const onVideoLoaded = () => {
  // 视频加载完成后的处理逻辑（如需要）
}

// 工具函数
const getCardColor = (index: number) => {
  const colors = ['blue', 'purple', 'teal', 'green', 'pink', 'orange']
  return colors[index % colors.length]
}

const getTagStyle = (index: number) => {
  const styles = [
    'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'bg-purple-100 text-purple-800 hover:bg-purple-200',
    'bg-teal-100 text-teal-800 hover:bg-teal-200',
    'bg-green-100 text-green-800 hover:bg-green-200',
    'bg-pink-100 text-pink-800 hover:bg-pink-200',
    'bg-orange-100 text-orange-800 hover:bg-orange-200'
  ]
  return styles[index % styles.length]
}
</script>
