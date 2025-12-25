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
        <h2 class="text-3xl md:text-4xl font-normal bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8 leading-tight">
          Alibaba Wan 2.5 – Transforming Short-Form Content Across Industries
        </h2>
        <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
          Wan 2.5 is not limited to one niche. It acts as a short-form AI video generator for <span class="font-semibold text-emerald-600">film studios</span>, <span class="font-semibold text-teal-600">game developers</span>, <span class="font-semibold text-cyan-600">marketers</span>, <span class="font-semibold text-emerald-600">educators</span>, and <span class="font-semibold text-teal-600">enterprise teams</span> who want to replace static assets and slides with dynamic AI-generated clips.
        </p>
      </div>

      <!-- Use Cases Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(useCase, index) in useCases" 
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="relative aspect-video bg-black cursor-pointer group" @click="playVideo(index)">
            <!-- 封面图片（懒加载） -->
            <img 
              v-if="!playingVideos[index]"
              :src="useCase.posterUrl"
              :alt="useCase.title"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <!-- 视频播放器（点击后加载） -->
            <video 
              v-if="playingVideos[index]"
              :src="useCase.videoUrl"
              controls
              autoplay
              playsinline
              webkit-playsinline
              class="w-full h-full object-cover"
              @error="handleVideoError"
            >
              <source :src="useCase.videoUrl" type="video/webm">
              Your browser does not support video playback
            </video>
            <!-- 播放按钮覆盖层 -->
            <div 
              v-if="!playingVideos[index]"
              class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all"
            >
              <div class="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-opacity-100 transition-all">
                <svg class="w-8 h-8 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div class="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
              {{ useCase.category }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              {{ useCase.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ useCase.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in useCase.tags" 
                :key="tag"
                class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg border border-gray-200"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Industry Benefits -->
      <div class="mt-20 bg-white rounded-2xl p-8 shadow-lg">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Why Industries Choose Wan 2.5
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Film & Short Video Production</h4>
            <p class="text-gray-600 text-sm">Create 5s and 10s HD clips for storyboards, teasers, and experimental shorts using AI text-to-video and image-to-video workflows</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Game Scenes & Virtual Worlds</h4>
            <p class="text-gray-600 text-sm">Generate immersive cutscenes, establishing shots, and stylized environments from prompts or concept art</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Educational & Training Videos</h4>
            <p class="text-gray-600 text-sm">Transform course content into short explainer clips for LMS, micro-learning, and internal training</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Advertising & Marketing Content</h4>
            <p class="text-gray-600 text-sm">Produce social-ready ad creatives, product videos and UGC-style promos with AI marketing video generator workflows</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Virtual Hosts & AI Characters</h4>
            <p class="text-gray-600 text-sm">Use Wan 2.5 as a virtual presenter video generator: create digital hosts, AI characters and VTubers for webinars, product tours and online events</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Cross-Media & Multilingual Presentations</h4>
            <p class="text-gray-600 text-sm">Wan 2.5 works well with different languages and accents, making it an AI video generator for global creators and international brands</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const useCases = ref([
  {
    title: 'Film & Short Video Production',
    description: 'Create 5s and 10s HD clips for storyboards, teasers, and experimental shorts using AI text-to-video and image-to-video workflows.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/video/use-cases-1.webm',
    posterUrl: 'https://resp.wan2video.com/wan2ai/images/use-cases-1.webp',
    category: 'Film',
    tags: ['AI video generator for film and ad professionals', 'cinematic AI short video generator']
  },
  {
    title: 'Game Scenes & Virtual Worlds',
    description: 'Generate immersive cutscenes, establishing shots, and stylized environments from prompts or concept art.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/video/use-cases-2.webm',
    posterUrl: 'https://resp.wan2video.com/wan2ai/images/use-cases-2.webp',
    category: 'Gaming',
    tags: ['AI video generator for game developers', 'multi-modal AI video generation model']
  },
  {
    title: 'Educational & Training Videos',
    description: 'Transform course content into short explainer clips for LMS, micro-learning, and internal training.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/video/use-cases-3.webm',
    posterUrl: 'https://resp.wan2video.com/wan2ai/images/use-cases-3.webp',
    category: 'Education',
    tags: ['AI education video generator', 'training video automation with AI', 'micro-learning AI videos']
  },
  {
    title: 'Advertising & Marketing Content',
    description: 'Produce social-ready ad creatives, product videos and UGC-style promos with AI marketing video generator workflows.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/video/use-cases-4.webm',
    posterUrl: 'https://resp.wan2video.com/wan2ai/images/use-cases-4.webp',
    category: 'Marketing',
    tags: ['AI video generator for marketers', 'AI product video generator for e-commerce', 'AI video generator for small businesses and startups']
  },
  {
    title: 'Virtual Hosts & AI Characters',
    description: 'Use Wan 2.5 as a virtual presenter video generator: create digital hosts, AI characters and VTubers for webinars, product tours and online events.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/video/use-cases-5.webm',
    posterUrl: 'https://resp.wan2video.com/wan2ai/images/use-cases-5.webp',
    category: 'Virtual',
    tags: ['AI VTuber video generator', 'AI presenter video generator', 'AI digital avatar video generator']
  },
  {
    title: 'Cross-Media & Multilingual Presentations',
    description: 'Wan 2.5 works well with different languages and accents, making it an AI video generator for global creators and international brands.',
    videoUrl: 'https://resp.wan2video.com/wan2ai/video/use-cases-6.webm',
    posterUrl: 'https://resp.wan2video.com/wan2ai/images/use-cases-6.webp',
    category: 'Global',
    tags: ['multilingual AI lip-sync generator', 'AI video generator for international brands', 'corporate communication AI video generator']
  }
])

// 跟踪每个视频的播放状态
const playingVideos = ref<Record<number, boolean>>({})

// 播放视频
const playVideo = (index: number) => {
  playingVideos.value[index] = true
}

// 视频错误处理
const handleVideoError = (event: Event) => {
  console.error('视频加载失败:', event)
}
</script>
