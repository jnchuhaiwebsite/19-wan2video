<template>
  <section class="py-24 bg-[#f8fafc] relative overflow-hidden">
    <!-- 装饰性背景：增加一点点深度 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent_60%)]"></div>
    </div>
    
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- 1. 顶部：内容展示区 (增强对比度) -->
      <div class="text-center max-w-5xl mx-auto mb-16">
        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight leading-tight">
          What Is <span class="text-indigo-600">Wan 2.6 AI</span> Video Generator?
        </h2>
        
        <!-- 使用带微阴影的容器，使文字更聚焦 -->
        <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100">
          <p class="text-slate-800 leading-[1.8] text-lg md:text-2xl font-normal text-center">
            Wan 2.6 AI Video Generator is an advanced model for cinematic video creation. It turns text, images, or reference videos into narrative-ready clips with intelligent multi-shot storytelling, stable characters, and natural audio-visual sync. Supporting up to 15-second 1080P output, Wan 2.6 is built for expressive, story-driven AI videos.
          </p>
        </div>
      </div>

      <!-- 2. 底部：特点矩阵 (图标与文字对比度同步增强) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(item, i) in features" :key="i"
          class="group p-8 rounded-3xl bg-white border border-slate-200/60 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500"
        >
          <!-- 线性 SVG 图标 - 颜色加深 -->
          <div class="w-10 h-10 mb-6 text-slate-500 group-hover:text-indigo-600 transition-colors duration-500">
            <component :is="item.icon" />
          </div>
          
          <h3 class="text-sm font-black text-slate-900 uppercase tracking-[0.15em] mb-3">
            {{ item.title }}
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed font-medium">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

// 保持线性图标 (SVG) 不变，但渲染时线条更清晰
const IconCinema = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24', class: 'w-full h-full' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6 3h12M6 21h12M3 6v12m18-12v12M9 3v18m6-18v18M3 10h18M3 14h18' })
])

const IconStability = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24', class: 'w-full h-full' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' })
])

const IconSync = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24', class: 'w-full h-full' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z' })
])

const IconHD = () => h('svg', { fill: 'none', stroke: 'currentColor', 'stroke-width': '2', viewBox: '0 0 24 24', class: 'w-full h-full' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-5.25v9' })
])

const features = [
  {
    title: 'Multi-Shot',
    desc: 'Intelligent storytelling through complex narrative clips.',
    icon: IconCinema
  },
  {
    title: 'Stability',
    desc: 'Advanced character consistency across diverse scenes.',
    icon: IconStability
  },
  {
    title: 'AV Harmony',
    desc: 'Seamless synchronization of visual motion and audio.',
    icon: IconSync
  },
  {
    title: 'High-Spec',
    desc: 'Professional 1080P output with up to 15s durations.',
    icon: IconHD
  }
]
</script>

<style scoped>
/* 针对段落的最终对比度微调 */
p {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
</style>