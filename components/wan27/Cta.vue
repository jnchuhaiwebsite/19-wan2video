<template>
  <section id="cta" class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <!-- 容器主体：使用深色背景营造“专业工作室”氛围 -->
      <div class="relative bg-slate-950 rounded-[2.5rem] p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl shadow-indigo-200/50">
        
        <!-- 背景装饰：动态光晕与网格 -->
        <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(#4f46e5 0.5px, transparent 0.5px); background-size: 30px 30px;"></div>
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px]"></div>

        <div class="relative z-10 text-center max-w-3xl mx-auto">
          <p class="text-sm font-bold tracking-[0.3em] text-indigo-400 uppercase mb-6 flex items-center justify-center gap-3">
            <span class="w-8 h-[1px] bg-indigo-500/50"></span>
            Your Studio Awaits
            <span class="w-8 h-[1px] bg-indigo-500/50"></span>
          </p>
          
          <!-- H2 核心关键词 SEO 优化 -->
          <h2 class="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            Unlock the Full Potential of <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Wan 2.7 AI Video Generator</span>
          </h2>
          
          <p class="text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
            Turn your raw creative vision into hyper-realistic cinematic reality. 
            Experience professional-grade multimodal AI control without subscription traps.
          </p>

          <!-- 强化版 CTA 按钮 -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
            <NuxtLink
              disabled
              class="group relative inline-flex items-center justify-center px-10 py-5 rounded-full text-white font-bold text-lg bg-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:bg-indigo-500 transition-all duration-300 hover:-translate-y-1 cursor-not-allowed"
            >
              <span>Launch the Generator</span>
            </NuxtLink>
            
            <button class="text-slate-400 hover:text-white font-semibold transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo Reel
            </button>
          </div>

          <!-- 底部价值点标签化 -->
          <div class="mt-16 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-y-4 gap-x-8 md:gap-x-12">
            <div class="flex items-center gap-2">
              <div class="p-1 bg-green-500/20 rounded-full">
                <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <span class="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">Full Commercial Rights</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="p-1 bg-green-500/20 rounded-full">
                <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <span class="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">Secure Payments</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="p-1 bg-green-500/20 rounded-full">
                <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <span class="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest">Professional Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
h2 {
  text-wrap: balance;
  -webkit-font-smoothing: antialiased;
}
</style>