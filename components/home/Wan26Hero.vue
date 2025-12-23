<template>
  <section class="py-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden pt-40">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <!-- 科技网格背景 -->
    <div class="absolute inset-0 opacity-[0.05] pointer-events-none" style="background-image: linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px); background-size: 50px 50px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center">
        <!-- 标题 -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.08]">
          <span class="title-glow block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Wan 2.6 AI Video Generator
          </span>
        </h1>
        
        <!-- 副标题 -->
        <p class="text-base md:text-lg lg:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal mb-10 text-pretty" style="line-height: 1.75;">
          Create cinematic AI videos with multi-shot storytelling, stable characters, and natural audio-visual sync in up to 1080P quality.
        </p>
        
        <!-- CTA 按钮组 -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <!-- Wan 2.5 按钮 -->
          <NuxtLink 
            to="/wan/wan-2-5"
            class="group h-14 px-8 bg-white border-2 border-slate-200 text-slate-700 font-semibold text-lg rounded-xl shadow-md hover:bg-white hover:border-purple-500 hover:text-purple-600 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-3"
          >
            <span>Wan 2.5</span>
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          
          <!-- Try Wan 2.6 Now 主按钮 -->
          <NuxtLink 
            to="/wan/wan-2-6"
            class="group relative h-14 px-8 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 text-white font-semibold text-lg rounded-xl shadow-[0_10px_30px_rgba(124,58,237,0.45)] hover:shadow-[0_18px_45px_rgba(129,140,248,0.7)] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:from-purple-500 hover:via-violet-400 hover:to-indigo-400 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              Try Wan 2.6 Now
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.title-glow {
  text-shadow: 0 10px 30px rgba(88, 28, 135, 0.28);
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(-5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite 2s;
}
</style>

