<template>
  <section id="why-choose" class="py-24 bg-slate-50 relative overflow-hidden">
    <!-- 装饰背景 -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- 左侧：品牌文案 -->
        <div>
          <p class="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4">
            The Professional Advantage
          </p>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            Why Professionals Choose <span class="text-indigo-600">Wan 2.7 AI Video Generator</span>
          </h2>
          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            In an era of generic AI outputs, we prioritize directorial intent. Our engine is built for creators who value precision, consistency, and the ability to scale their vision across global platforms.
          </p>
          <div class="flex items-center gap-6">
            <div class="flex -space-x-2">
              <img v-for="i in 4" :key="i" :src="`https://i.pravatar.cc/100?img=${i+10}`" class="w-10 h-10 rounded-full border-2 border-white" alt="User">
            </div>
            <p class="text-sm text-slate-500 font-medium">
              Join 50,000+ creators pushing the boundaries of AI cinema.
            </p>
          </div>
        </div>

        <!-- 右侧：利益点卡片 -->
        <div class="space-y-4">
          <!-- Item 1 -->
          <div class="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex-shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-1">Predictable Results</h3>
              <p class="text-slate-600 text-sm md:text-base leading-relaxed">
                Eliminate the &quot;slot machine&quot; uncertainty. Use multimodal references to achieve your exact directorial vision on the first render.
              </p>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex-shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-1">Production Continuity</h3>
              <p class="text-slate-600 text-sm md:text-base leading-relaxed">
                Construct intricate, long-form narratives using the <span class="font-medium text-slate-900 italic">Wan 2.7 AI Video Generator</span> integrated extension suite.
              </p>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex-shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-1">Superior Physics Engine</h3>
              <p class="text-slate-600 text-sm md:text-base leading-relaxed">
                Leverage a foundation trained on advanced physical laws to ensure realistic momentum, weight, and human kinetics.
              </p>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="flex gap-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex-shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 mb-1">Commercial Scalability</h3>
              <p class="text-slate-600 text-sm md:text-base leading-relaxed">
                Export high-resolution, royalty-free content that meets the rigorous demands of professional marketing and film production.
              </p>
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
}
</style>