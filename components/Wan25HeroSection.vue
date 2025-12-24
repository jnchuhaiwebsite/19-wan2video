<template>
  <!-- 
    1. pt-8: 为悬浮的面包屑留出顶部空间
    2. min-h: 保证首屏有足够的高度承载视觉冲击力
  -->
  <section class="relative min-h-[85vh] flex flex-col items-center overflow-hidden bg-white pt-8 pb-20">
    
    <!-- 1. 动态背景层 (延伸至整个 Section) -->
    <div class="absolute inset-0 z-0">
      <!-- 极简网格线：赋予科技感和空间感 -->
      <div class="absolute inset-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <!-- 柔和渐变球：使用 mix-blend-mode 增加通透度，避免死色 -->
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[100px] animate-pulse-slow animate-delay-2000"></div>
    </div>

    <!-- 2. 内容主体 -->
    <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
      
      <!-- 这里是面包屑的悬浮预留区 (建议在此组件外部通过绝对定位或直接放置) -->
      <slot name="breadcrumb"></slot>

      <div class="text-center mt-16 md:mt-24">
        <!-- 顶部微标签 -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-10 animate-fade-in-down">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          LATEST VERSION 2.5 IS LIVE
        </div>

        <!-- 主标题：使用了更紧凑的字间距和更强的渐变 -->
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 mb-8 animate-fade-in">
          Wan 2.5 
          <span class="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            AI Video Generator
          </span>
        </h1>

        <!-- 描述文案 -->
        <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-12 animate-fade-in-up">
          A multi-modal AI video model for text-to-video, image-to-video, and audio-driven generation — creating 5s and 10s cinematic short-form videos with precise audio-visual alignment.
        </p>
        
        <!-- 核心特性标签：玻璃拟态风格 -->
        <div class="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3 mb-16 animate-fade-in-up">
          <div v-for="(tag, i) in tags" :key="i" 
            class="flex items-center gap-2 px-4 py-2.5 bg-white/40 backdrop-blur-md rounded-2xl text-sm font-semibold text-slate-700 border border-slate-200/50 shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-white/80 transition-all duration-300">
            <div class="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {{ tag }}
          </div>
        </div>

        <!-- 交互按钮组 -->
        <div class="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up">
          <NuxtLink to="#generator">
            <button class="group relative px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.3)] hover:shadow-blue-500/40 transform hover:-translate-y-1 overflow-hidden">
              <span class="relative z-10 flex items-center gap-2">
                Start Creating with Wan 2.5
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </NuxtLink>
          
          <NuxtLink to="#showcase">
            <button class="group px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 shadow-sm transform hover:-translate-y-1">
              View Wan 2.5 Examples
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 底部修饰线：让首屏与下方内容自然过渡 -->
    <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
const tags = [
  "5s & 10s AI Video Clips",
  "Text / Image / Audio Driven",
  "Up to 1080p HD Quality",
  "Credits-based · No Subscription"
];
</script>

<style scoped>
/* 入场动画 */
.animate-fade-in { animation: fadeIn 1s ease-out forwards; }
.animate-fade-in-up { animation: fadeInUp 1s ease-out both; animation-delay: 0.2s; }
.animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 背景平滑脉冲 */
.animate-pulse-slow {
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}

.animate-delay-2000 {
  animation-delay: 2s;
}

/* 针对移动端优化标题 */
@media (max-width: 640px) {
  h1 {
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
}
</style>