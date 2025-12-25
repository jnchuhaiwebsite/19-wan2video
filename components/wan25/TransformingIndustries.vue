<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题区域 -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6 shadow-sm">
          <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
          Industry Applications
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
          Alibaba Wan 2.5 – Transforming Short-Form Content Across Industries
        </h2>
        <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
          Wan 2.5 is not limited to one niche. It acts as a short-form AI video generator for 
          <span class="font-semibold text-blue-600">film studios</span>, 
          <span class="font-semibold text-indigo-600">game developers</span>, 
          <span class="font-semibold text-purple-600">marketers</span>, 
          <span class="font-semibold text-blue-600">educators</span>, and 
          <span class="font-semibold text-indigo-600">enterprise teams</span> 
          who want to replace static assets and slides with dynamic AI-generated clips.
        </p>
      </div>

      <!-- 行业应用卡片网格 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Film & Short Video Production -->
        <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-red-200 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Film & Short Video Production
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Create 5s and 10s HD clips for storyboards, teasers, and experimental shorts using AI text-to-video and image-to-video workflows.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI video generator for film and ad professionals
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              cinematic AI short video generator
            </span>
          </div>
        </div>

        <!-- Game Scenes & Virtual Worlds -->
        <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Game Scenes & Virtual Worlds
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Generate immersive cutscenes, establishing shots, and stylized environments from prompts or concept art.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI video generator for game developers
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              multi-modal AI video generation model
            </span>
          </div>
        </div>

        <!-- Educational & Training Videos -->
        <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-green-200 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Educational & Training Videos
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Transform course content into short explainer clips for LMS, micro-learning, and internal training.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI education video generator
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              training video automation with AI
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              micro-learning AI videos
            </span>
          </div>
        </div>

        <!-- Advertising & Marketing Content -->
        <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-purple-200 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Advertising & Marketing Content
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Produce social-ready ad creatives, product videos and UGC-style promos with AI marketing video generator workflows.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI video generator for marketers
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI product video generator for e-commerce
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI video generator for small businesses and startups
            </span>
          </div>
        </div>

        <!-- Virtual Hosts & AI Characters -->
        <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-orange-200 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Virtual Hosts & AI Characters
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Use Wan 2.5 as a virtual presenter video generator: create digital hosts, AI characters and VTubers for webinars, product tours and online events.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI VTuber video generator
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI presenter video generator
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI digital avatar video generator
            </span>
          </div>
        </div>

        <!-- Cross-Media & Multilingual Presentations -->
        <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-indigo-200 transform hover:-translate-y-2">
          <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Cross-Media & Multilingual Presentations
          </h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Wan 2.5 works well with different languages and accents, making it an AI video generator for global creators and international brands.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              multilingual AI lip-sync generator
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI video generator for international brands
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              corporate communication AI video generator
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 组件逻辑（如果需要的话）
</script>

<style scoped>
/* 可以添加自定义样式 */
</style>

