<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tr from-purple-300 to-teal-300 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 rounded-full text-sm font-medium text-slate-800 mb-6 shadow-sm">
          <span class="w-2 h-2 bg-slate-500 rounded-full mr-2 animate-pulse"></span>
          Wan 2.5 Technical Specs
        </div>
        <h2 class="text-3xl md:text-4xl font-normal bg-gradient-to-r from-slate-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
          Wan 2.5 - Power, Flexibility, and High-Quality Output
        </h2>
        <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
          Wan 2.5 supports <span class="font-semibold text-blue-600">multiple resolutions</span> and <span class="font-semibold text-purple-600">flexible outputs</span> with optional audio sync. 
          Create Wan 2.5 video clips from text or image inputs with <span class="font-semibold text-teal-600">5s or 10s durations</span> and seed control.
        </p>
      </div>

      <!-- Generation Modes -->
      <div class="grid lg:grid-cols-2 gap-10 mb-20">
        <!-- Image-to-Video -->
        <div class="group bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 hover:border-purple-200">
          <div class="flex items-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Wan 2.5 – Image-to-Video</h3>
              <p class="text-purple-600 font-medium mt-1">(I2V)</p>
            </div>
          </div>

          <div class="space-y-4 mb-6">
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Input:</span>
              <span class="text-gray-600">Image + Prompt</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Resolution:</span>
              <span class="text-gray-600">480p • 720p • 1080p</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Duration:</span>
              <span class="text-gray-600">5s • 10s</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Audio:</span>
              <span class="text-gray-600">Optional (URL)</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Seed:</span>
              <span class="text-gray-600">-1 (random)</span>
            </div>
            <div class="flex justify-between items-center py-2">
              <span class="font-medium text-gray-700">Credits Example:</span>
              <span class="text-gray-600">720p 5s=40 • 10s=80</span>
            </div>
          </div>

          <div class="bg-purple-50 rounded-lg p-4">
            <p class="text-purple-800 text-sm">
              <strong>Best for:</strong> portraits, products, stylized motion. Wan 2.5 ensures smooth movement and clear detail from still images.
            </p>
          </div>
        </div>

        <!-- Text-to-Video -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Wan 2.5 – Text-to-Video (T2V)</h3>
          </div>

          <div class="space-y-4 mb-6">
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Input:</span>
              <span class="text-gray-600">Text Prompt</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Sizes:</span>
              <span class="text-gray-600">832×480 • 1280×720 • 1920×1080</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Duration:</span>
              <span class="text-gray-600">5s • 10s</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Audio:</span>
              <span class="text-gray-600">Optional (URL)</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Seed:</span>
              <span class="text-gray-600">-1 (random)</span>
            </div>
            <div class="flex justify-between items-center py-2">
              <span class="font-medium text-gray-700">Credits Example:</span>
              <span class="text-gray-600">1280×720 5s=40 • 10s=80</span>
            </div>
          </div>

          <div class="bg-blue-50 rounded-lg p-4">
            <p class="text-blue-800 text-sm">
              <strong>Perfect for:</strong> storyboards, ads, and social media content. Wan 2.5 improves text comprehension and consistency.
            </p>
          </div>
        </div>
      </div>

      <!-- Core Features -->
      <div class="bg-white rounded-2xl p-8 shadow-lg">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Core Features of Wan 2.5
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Character Animation & Replacement</h4>
            <p class="text-gray-600 text-sm">Human/anime swaps with consistent identity</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">1080p Visual Clarity</h4>
            <p class="text-gray-600 text-sm">Sharper details and refined aesthetics</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">High-Fidelity Output</h4>
            <p class="text-gray-600 text-sm">Rich detail and smooth motion up to 1080p</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Consistent Lighting & Color</h4>
            <p class="text-gray-600 text-sm">Stable tones across all Wan 2.5 video generations</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>
