<template>
  <section class="relative py-20 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white">
    <div class="max-w-7xl mx-auto">
      <!-- 主标题 -->
      <div class="text-center mb-12">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
          How to Use Wan 2.5 AI On Wan2Video
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Choose Text-to-Video or Image-to-Video, enter your prompt, upload optional audio, and select the duration and resolution. — Wan 2.5 will generate a polished short-form clip with no editing timeline required.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Tips for Better Results -->
      <div class="mb-16">
        <h3 class="text-3xl font-bold text-slate-900 mb-8 text-center">
          Tips for Better Results
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <!-- First Frame Image -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-4">
              First Frame Image
            </h4>
            <p class="text-slate-600 leading-relaxed">
              Upload a portrait, product photo, or concept image. Wan 2.5 converts it into a short-form video with smooth motion and consistent identity.
            </p>
          </div>

          <!-- Prompt -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-purple-200 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-4">
              Prompt
            </h4>
            <p class="text-slate-600 leading-relaxed mb-4">
              Describe the subject, scene, motion, and style.
            </p>
            <div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p class="text-sm text-slate-700 italic">
                Example: "Cinematic close-up of a woman speaking on stage, warm key light, shallow depth of field."
              </p>
            </div>
          </div>

          <!-- Audio File -->
          <div class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-pink-200 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-4">
              Audio File <span class="text-sm font-normal text-slate-500">(Optional)</span>
            </h4>
            <p class="text-slate-600 leading-relaxed">
              Upload an MP3 or WAV (3–30 seconds). Wan 2.5 uses AI lip-sync and precise audio-visual alignment to match speech, sound effects, and background music.
            </p>
          </div>
        </div>
      </div>

      <!-- Duration, Resolution & Credits -->
      <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-100">
        <h3 class="text-3xl font-bold text-slate-900 mb-10 text-center">
          Duration, Resolution & Credits
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Video Duration -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-200">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-4">
              Video Duration
            </h4>
            <p class="text-slate-600 leading-relaxed mb-4">
              Choose 5 seconds for fast, eye-catching clips, or 10 seconds for richer storytelling. Wan 2.5 is optimized specifically for these short-form lengths.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-lg">
                5 seconds
              </span>
              <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-lg">
                10 seconds
              </span>
            </div>
          </div>

          <!-- Resolution -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 border border-purple-200">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-4">
              Resolution
            </h4>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="text-purple-600 font-bold text-lg">480p</span>
                <span class="text-slate-600">→ Ideal for quick drafts</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-purple-600 font-bold text-lg">720p</span>
                <span class="text-slate-600">→ Balanced quality for everyday use</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-purple-600 font-bold text-lg">1080p</span>
                <span class="text-slate-600">→ Full HD clarity for campaigns, ads, and client projects</span>
              </div>
            </div>
          </div>

          <!-- Credits -->
          <div class="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 border border-green-200">
            <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-slate-900 mb-4">
              Credits
            </h4>
            <p class="text-slate-600 leading-relaxed">
              Wan2Video uses a credits-based model — one-time purchase, credits never expire, and no monthly subscription is required.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-lg border border-green-200">
                One-time purchase
              </span>
              <span class="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-lg border border-green-200">
                Never expire
              </span>
              <span class="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-lg border border-green-200">
                No subscription
              </span>
            </div>
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

