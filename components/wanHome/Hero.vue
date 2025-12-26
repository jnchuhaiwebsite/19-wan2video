<template>
  <section class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#05050A] selection:bg-purple-500/30">
    
    <!-- 1. 背景层 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-indigo-900/15 blur-[100px] rounded-full mix-blend-screen"></div>
      <div class="absolute inset-0 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>

    <!-- 2. 内容层 -->
    <div class="container relative z-10 px-4 mx-auto">
      <div class="w-full flex flex-col items-center text-center">
        
        <!-- H1 标题 -->
        <h1 class="w-full text-4xl md:text-6xl lg:text-7xl font-normal text-white animate-fade-in-up leading-tight md:leading-[1.15]">
          <span class="bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            Master Cinematic Storytelling
          </span>
          <br class="hidden md:block" />
          <span class="bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            with Wan AI
          </span>
          <span class="text-white/40 ml-2 md:ml-3 inline-block font-light align-middle text-3xl md:text-5xl">
            (Wan 2.6)
          </span>
        </h1>
        
        <!-- 副标题 -->
        <p class="mt-8 mb-14 text-lg md:text-xl text-slate-300/80 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-100">
          Experience the next evolution in video generation. Create complex narratives with seamless multi-shot transitions, strictly synchronized audio, and extended 15-second clips.
        </p>
        
        <!-- CTA 按钮组 -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 w-full animate-fade-in-up animation-delay-200">
          
          <!-- 1. Wan 2.6 (Primary) -->
          <!-- 修复点：添加 flex items-center justify-center 确保内部居中，保留 relative group -->
          <NuxtLink 
            to="/wan/wan-2-6" 
            class="relative group h-14 min-w-[180px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <!-- 外部弥散光晕 -->
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            
            <!-- 按钮主体 -->
            <div class="relative h-full w-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-[1px] shadow-xl overflow-hidden">
              <!-- 内部高光反射 -->
              <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
              
              <!-- 文字容器 -->
              <div class="relative h-full w-full flex items-center justify-center rounded-full bg-transparent">
                 <span class="text-white text-lg font-medium tracking-wide drop-shadow-md group-hover:tracking-wider transition-all">Wan 2.6</span>
                 <!-- 闪烁的小圆点 -->
                 <span class="flex h-2 w-2 ml-2 relative">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                 </span>
              </div>
            </div>
          </NuxtLink>

          <!-- 2. Wan 2.5 (Secondary) -->
          <!-- 修复点：添加 flex items-center justify-center -->
          <NuxtLink 
            to="/wan/wan-2-5"
            class="glass-btn group h-14 min-w-[140px] px-8 rounded-full flex items-center justify-center"
          >
            <span class="relative z-10 text-slate-300 font-normal text-lg group-hover:text-white transition-colors">Wan 2.5</span>
            <div class="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/30 transition-colors"></div>
            <div class="absolute inset-0 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"></div>
          </NuxtLink>

          <!-- 3. Wan 2.2 (Tertiary) -->
          <!-- 修复点：添加 flex items-center justify-center -->
          <NuxtLink 
            to="/wan/wan-2-2"
            class="glass-btn group h-14 min-w-[140px] px-8 rounded-full opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            <span class="relative z-10 text-slate-400 font-normal text-lg group-hover:text-white transition-colors">Wan 2.2</span>
            <div class="absolute inset-0 rounded-full border border-white/5 group-hover:border-white/20 transition-colors"></div>
            <div class="absolute inset-0 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"></div>
          </NuxtLink>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* 晶体按钮通用样式 */
.glass-btn {
  /* 确保 display 属性为 flex 或 inline-flex 以支持宽高和对齐 */
  @apply relative overflow-hidden backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer;
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
.animation-delay-100 { animation-delay: 0.15s; }
.animation-delay-200 { animation-delay: 0.3s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
</style>