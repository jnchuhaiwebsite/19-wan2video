<template>
  <section class="relative py-20 px-6 bg-gradient-to-b from-white via-purple-50/30 to-white">
    <div class="max-w-7xl mx-auto">
      <!-- 主标题 -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
          Wan 2.5 AI Technical Specs
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Wan 2.5 provides flexible resolution, duration, and input options so you can match your AI video generation to your production needs.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- 两个模式 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <!-- Mode I2V -->
        <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-purple-200 transform hover:-translate-y-2">
          <!-- Mode 标签 -->
          <div class="flex items-center gap-3 mb-6">
            <span class="px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold rounded-full">
              Mode · I2V
            </span>
          </div>

          <!-- 图标 -->
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <!-- 标题 -->
          <h3 class="text-2xl font-bold text-slate-900 mb-6">
            Image-to-Video (I2V)
          </h3>

          <!-- 规格列表 -->
          <div class="space-y-4 mb-6">
            <div class="flex items-start gap-3">
              <span class="text-purple-600 font-semibold min-w-[80px]">Inputs:</span>
              <span class="text-slate-600">Image + optional prompt + optional audio.</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-purple-600 font-semibold min-w-[80px]">Resolutions:</span>
              <span class="text-slate-600">480p, 720p, 1080p.</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-purple-600 font-semibold min-w-[80px]">Durations:</span>
              <span class="text-slate-600">5s, 10s.</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-purple-600 font-semibold min-w-[80px]">Best for:</span>
              <span class="text-slate-600">portraits, products, stylized motion, consistent identity across frames.</span>
            </div>
          </div>

          <!-- 关键词标签 -->
          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              image-to-video AI with lip-sync
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI video generator for e-commerce product videos
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI marketing video generator
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              high-quality AI short video generator
            </span>
          </div>
        </div>

        <!-- Mode T2V -->
        <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 transform hover:-translate-y-2">
          <!-- Mode 标签 -->
          <div class="flex items-center gap-3 mb-6">
            <span class="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
              Mode · T2V
            </span>
          </div>

          <!-- 图标 -->
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>

          <!-- 标题 -->
          <h3 class="text-2xl font-bold text-slate-900 mb-6">
            Text-to-Video (T2V)
          </h3>

          <!-- 规格列表 -->
          <div class="space-y-4 mb-6">
            <div class="flex items-start gap-3">
              <span class="text-blue-600 font-semibold min-w-[80px]">Inputs:</span>
              <span class="text-slate-600">Text prompt only (optional audio URL or file).</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-blue-600 font-semibold min-w-[80px]">Sizes:</span>
              <span class="text-slate-600">832×480, 1280×720, 1920×1080.</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-blue-600 font-semibold min-w-[80px]">Durations:</span>
              <span class="text-slate-600">5s, 10s.</span>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-blue-600 font-semibold min-w-[80px]">Best for:</span>
              <span class="text-slate-600">storyboards, ad concepts, social campaigns, explainer videos.</span>
            </div>
          </div>

          <!-- 关键词标签 -->
          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI video generator for YouTube Shorts
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI video generator for marketers
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI video generator for startups
            </span>
            <span class="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-200">
              AI explainer video tool
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

