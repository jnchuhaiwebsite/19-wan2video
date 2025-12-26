<template>
  <!-- 使用 h-screen 确保占满首屏，flex items-center 垂直居中 -->
  <section class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
    
    <!-- 1. 背景媒体层 (仅桌面端) -->
    <div class="hidden md:block absolute inset-0 z-0">
      <!-- 封面图片：初始显示 -->
      <img 
        :class="['absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-105', 
                 isVideoReady ? 'opacity-0' : 'opacity-60']"
        src="https://cfsource.wan2video.com/wan2video/26/background/wan-2-6.webp" 
        alt="Background Cover"
      />
      
      <!-- 背景视频：延迟加载 -->
      <video
        v-if="shouldLoadVideo"
        ref="videoPlayer"
        :class="['absolute inset-0 w-full h-full object-cover transition-opacity duration-1000', 
                 isVideoReady ? 'opacity-100' : 'opacity-0']"
        autoplay
        muted
        loop
        playsinline
        @canplay="onVideoCanPlay"
      >
        <source src="https://cfsource.wan2video.com/wan2video/26/background/wan-2-6.mp4" type="video/mp4" />
      </video>

      <!-- 渐变遮罩：增加文字识别度，营造电影感 -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80"></div>
      <div class="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]"></div>
    </div>

    <!-- 2. 移动端背景 (纯色渐变 + 装饰) -->
    <div class="md:hidden absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
    </div>

    <!-- 装饰性网格 (全端保留，增加质感) -->
    <div class="absolute inset-0 opacity-10 pointer-events-none" 
         style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;">
    </div>
    
    <!-- 3. 内容层 -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        <!-- 徽章标签 -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-8 animate-fade-in-up">
          <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
          New Release: Wan 2.6
        </div>

        <!-- 标题：字号加大，使用响应式 clamp -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1]">
      
          <span class="title-glow bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
     Wan 2.6
          </span>
              <span class="block text-white drop-shadow-2xl">      AI Video Generator </span>
        </h1>
        
        <!-- 副标题：提升对比度 -->
        <p class="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 text-pretty drop-shadow-lg">
Create cinematic AI videos with multi-shot storytelling, stable characters, and natural audio-visual sync in up to 1080P quality.
        </p>
        
        <!-- CTA 按钮组 -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <!-- 主按钮：紫色渐变发光 -->
          <NuxtLink 
            to="/wan/wan-2-6#generator"
            class="group relative h-16 px-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xl rounded-2xl shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <span>Try Wan 2.6 Now</span>
            <svg class="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>

          <!-- 次按钮：磨砂玻璃效果 -->
          <NuxtLink 
            to="/wan/wan-2-5#generator"
            class="h-16 px-10 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-xl rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          >
            Wan 2.5
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 4. 底部向下指示器 -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce hidden md:block">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const shouldLoadVideo = ref(false);
const isVideoReady = ref(false);

onMounted(() => {
  // 仅在桌面端延迟 2 秒开始加载视频
  if (window.innerWidth >= 768) {
    setTimeout(() => {
      shouldLoadVideo.value = true;
    }, 2000);
  }
});

const onVideoCanPlay = () => {
  isVideoReady.value = true;
};
</script>

<style scoped>
/* 标题外发光，增强在暗色背景下的高级感 */
.title-glow {
  filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.4));
}

/* 入场动画 */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 针对全屏背景的优化 */
:deep(body) {
  margin: 0;
  padding: 0;
  background-color: #020617; /* 防止切页白屏 */
}
</style>