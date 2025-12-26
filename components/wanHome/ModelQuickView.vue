<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/5 w-72 h-72 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-5 leading-tight"
        >
          Wan AI Model Quick View
        </h2>
      </div>

      <!-- 三个模型卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Wan 2.6 卡片 -->
        <!-- 添加了 flex flex-col 使得按钮可以对齐底部 -->
        <div
          class="group flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/60 hover:border-indigo-200 relative"
        >
          <div class="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
            <span class="animate-pulse">New</span>
          </div>
          
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Wan 2.6 — Narrative & Consistency
          </h3>
          
          <p class="text-gray-700 leading-relaxed text-base mb-6">
            The latest SOTA model designed for complex storytelling. Features multi-shot coherence, character reference (ID keep), and audio synchronization.
          </p>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-700 text-sm leading-relaxed">Up to 15-second generation</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-700 text-sm leading-relaxed">Multi-shot Storytelling</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-700 text-sm leading-relaxed">Character Roleplay (Ref-to-Video)</span>
            </li>
          </ul>

          <!-- 新增按钮: 2.6 (紫色系) -->
          <div class="mt-auto">
            <NuxtLink to="/wan/wan-2-6#generator" class="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group-hover:scale-[1.02]">
              Try Wan 2.6
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Wan 2.5 卡片 -->
        <div
          class="group flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100/60 hover:border-blue-200 relative"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Wan 2.5 — Everyday Creation
          </h3>
          
          <p class="text-gray-700 leading-relaxed text-base mb-6">
            Reliable performance for standard text-to-video tasks. Best for quick drafts, efficient day-to-day content, and auto-dubbing workflows.
          </p>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-700 text-sm leading-relaxed">Fast iteration & drafts</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-700 text-sm leading-relaxed">Standard Auto-Dubbing</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-700 text-sm leading-relaxed">High volume production</span>
            </li>
          </ul>

          <!-- 新增按钮: 2.5 (蓝色系) -->
          <div class="mt-auto">
            <NuxtLink to="/wan/wan-2-5#generator" class="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center group-hover:scale-[1.02]">
              Try Wan 2.5
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Wan 2.2 卡片 -->
        <div
          class="group flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100/60 hover:border-slate-200 relative"
        >
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Wan 2.2 — Rapid Prototyping
          </h3>
          
          <p class="text-gray-700 leading-relaxed text-base mb-6">
            The lightweight foundation model. 50% faster than newer versions, ideal for silent video tests and low-latency prototyping.
          </p>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-700 text-sm leading-relaxed">Ultra-fast Inference</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-700 text-sm leading-relaxed">Silent Generation</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full mt-2 mr-3"></span>
              <span class="text-gray-700 text-sm leading-relaxed">Low VRAM Usage</span>
            </li>
          </ul>

          <!-- 新增按钮: 2.2 (灰色系) -->
          <div class="mt-auto">
            <NuxtLink to="/wan/wan-2-2" class="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-slate-600 to-gray-700 text-white font-semibold shadow-md hover:shadow-lg hover:from-slate-700 hover:to-gray-800 transition-all duration-300 flex items-center justify-center group-hover:scale-[1.02]">
              Try Wan 2.2
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Presentation-only component
</script>

<style scoped>
</style>