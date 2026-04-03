<template>
  <section id="examples" class="py-24 bg-slate-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-16">
        <p class="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4">
          Production Showcase
        </p>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Cinematic 4K with <span class="text-indigo-400">Wan 2.7 AI Video Generator</span>
        </h2>
        <div class="flex flex-col md:flex-row md:items-center gap-6">
          <p class="text-xl text-slate-400 max-w-2xl border-l-2 border-indigo-500 pl-6 italic">
            High-fidelity cinematic generation with precise camera control, consistent characters, and automatic audio—powered by <strong>Wan 2.7 AI Video Generator</strong>.
          </p>
        </div>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(item, index) in showcaseItems" 
          :key="item.id" 
          class="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
          @click="handleClick(index)"
        >
          <div class="aspect-video bg-slate-800 relative overflow-hidden cursor-pointer">
            <!-- Poster Image (Default) -->
            <img
              v-if="!item.videoLoaded"
              :src="item.poster"
              :alt="item.title"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            <!-- Video Element (loads when loading or loaded) -->
            <video
              v-if="item.loading || item.videoLoaded"
              :ref="(el) => setVideoRef(index, el)"
              :src="item.video"
              class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              :class="item.loading ? 'opacity-0' : 'opacity-100'"
              muted
              loop
              playsinline
              autoplay
              @loadeddata="handleVideoLoaded(index)"
              @error="handleVideoError(index)"
            />

            <!-- Loading Spinner Overlay -->
            <div 
              v-if="item.loading" 
              class="absolute inset-0 flex items-center justify-center bg-slate-900/40 backdrop-blur-[2px] transition-opacity"
            >
              <div class="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
            </div>

            <!-- Default Play Icon (Shows when not loaded and not loading) -->
            <div 
              v-if="!item.loading && !item.videoLoaded"
              class="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
            >
              <div class="w-14 h-14 bg-indigo-600/90 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/40 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="mt-16 text-center">
        <p class="text-slate-500 text-sm mb-6">Explore the full potential of professional AI video production with <strong>Wan 2.7 AI Video Generator</strong></p>
        <button class="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-500/25">
          Generate with Wan 2.7 Now
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const BASE = 'https://cfsource.wan2video.com/wan2video/wan27/showcase'

const rawData = [
  {
    id: 1,
    title: 'Wan 2.7 AI Video Generator Video Gallery - woman blue lace dress plucking rose petal sunny garden',
    tag: 'Cinematic Lighting',
    description: 'A woman in a blue lace dress plucks a rose petal in a sunlit garden.',
    video: '/video/Wan-2-7_woman-blue-lace-dress-plucking-rose-petal-sunny-garden.mp4',
    poster: '/image/Wan-2-7_woman-blue-lace-dress-plucking-rose-petal-sunny-garden.webp',
  },
  {
    id: 2,
    title: 'Wan 2.7 AI Video Generator Video Gallery - woman short brown hair floating water high angle close up',
    tag: 'Motion Dynamics',
    description: 'High-angle close-up of a woman with short brown hair floating in water.',
    video: '/video/Wan-2-7_white-woman-short-brown-hair-floating-water-high-angle-close-up.mp4',
    poster: '/image/Wan-2-7_white-woman-short-brown-hair-floating-water-high-angle-close-up.webp',
  },
  {
    id: 3,
    title: 'Wan 2.7 AI Video Generator Video Gallery - steampunk victorian alley neon mist robots',
    tag: 'World Building',
    description: 'Steampunk Victorian alley with neon mist and robots.',
    video: '/video/Wan-2-7_steampunk-victorian-alley-neon-mist-robots.mp4',
    poster: '/image/Wan-2-7_steampunk-victorian-alley-neon-mist-robots.webp',
  },
  {
    id: 4,
    title: 'Wan 2.7 AI Video Generator Video Gallery - roman actors togas marble table plaza political debate',
    tag: 'Period Drama',
    description: 'Roman actors in togas debate politics around a marble table in a plaza.',
    video: '/video/Wan-2-7_roman-actors-togas-marble-table-plaza-political-debate.mp4',
    poster: '/image/Wan-2-7_roman-actors-togas-marble-table-plaza-political-debate.webp',
  },
  {
    id: 5,
    title: 'Wan 2.7 AI Video Generator Video Gallery - girl floral dress braids fluffy donkeys tall grass',
    tag: 'Character & Nature',
    description: 'A girl in a floral dress with braids beside fluffy donkeys in tall grass.',
    video: '/video/Wan-2-7_girl-floral-dress-braids-fluffy-donkeys-tall-grass.mp4',
    poster: '/image/Wan-2-7_girl-floral-dress-braids-fluffy-donkeys-tall-grass.webp',
  },
  {
    id: 6,
    title: 'Wan 2.7 AI Video Generator Video Gallery - felt style rainbow yarn bridge button car quilted sky',
    tag: 'Stylized Craft',
    description: 'Felt-style scene with rainbow yarn bridge, button car, and quilted sky.',
    video: '/video/Wan-2-7_felt-style-rainbow-yarn-bridge-button-car-quilted-sky.mp4',
    poster: '/image/Wan-2-7_felt-style-rainbow-yarn-bridge-button-car-quilted-sky.webp',
  },
]

interface ShowcaseItem {
  id: number
  title: string
  tag: string
  description: string
  video: string
  poster: string
  loading: boolean
  videoLoaded: boolean
}

const showcaseItems = ref<ShowcaseItem[]>(
  rawData.map((item) => ({
    ...item,
    video: `${BASE}${item.video}`,
    poster: `${BASE}${item.poster}`,
    loading: false,
    videoLoaded: false,
  }))
)

const videoRefs = ref<(HTMLVideoElement | null)[]>([])
const isMobile = ref(false)

const checkMobile = () => {
  if (typeof window === 'undefined') return
  isMobile.value = window.innerWidth < 768
}

const setVideoRef = (index: number, el: any) => {
  if (el) videoRefs.value[index] = el as HTMLVideoElement
}

const startLoadingVideo = (index: number) => {
  const item = showcaseItems.value[index]
  if (!item || item.loading || item.videoLoaded) return
  item.loading = true
}

const handleMouseEnter = (index: number) => {
  if (!isMobile.value) startLoadingVideo(index)
}

const handleMouseLeave = (_index: number) => {
  // 与 Wan2.6 示例列表保持一致：默认不在移出时强制停止
}

const handleClick = (index: number) => {
  const item = showcaseItems.value[index]
  if (!item) return
  if (isMobile.value || !item.videoLoaded) startLoadingVideo(index)
}

const handleVideoLoaded = (index: number) => {
  const item = showcaseItems.value[index]
  if (!item) return
  item.loading = false
  item.videoLoaded = true
  setTimeout(() => {
    videoRefs.value[index]?.play().catch(() => {})
  }, 50)
}

const handleVideoError = (index: number) => {
  const item = showcaseItems.value[index]
  if (!item) return
  item.loading = false
  // 保持静默失败：避免在用户端刷屏；必要时可接入埋点
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
section {
  background-image: radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0f172a 100%);
}

/* 简单的微动动画 */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>