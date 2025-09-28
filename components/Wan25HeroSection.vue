<template>
  <section class="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden mt-20">
    <!-- 装饰背景 -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-2xl animate-float"></div>
      <div class="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-2xl animate-float-delayed"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6 shadow-sm">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Next-Generation AI Video Model
        </div>
        <h1 class="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
          Wan 2.5 AI Video Generator
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
          Wan 2.5 is a <span class="font-semibold text-blue-600">next-generation AI video model</span> designed for creators worldwide. 
          With Wan 2.5 you can easily generate <span class="font-semibold text-purple-600">text-to-video</span> and <span class="font-semibold text-pink-600">image-to-video</span> content 
          in <span class="font-semibold text-green-600">1080p quality</span>. From simple prompts or still images, Wan 2.5 delivers 
          professional video output with optional audio guidance.
        </p>
        
        <!-- 快速开始按钮 -->
        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden">
            <span class="relative z-10 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Start Creating Now
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button class="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Watch Demo
            </span>
          </button>
        </div>
      </div>

      <!-- Key Features -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-200">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Text-to-Video</h3>
          <p class="text-gray-600 text-center leading-relaxed">Generate stunning videos from text descriptions with AI-powered creativity and precision</p>
        </div>

        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 hover:border-purple-200">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Image-to-Video</h3>
          <p class="text-gray-600 text-center leading-relaxed">Transform static images into dynamic video content with smooth animations and natural motion</p>
        </div>

        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100 hover:border-green-200">
          <div class="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Up to 1080p</h3>
          <p class="text-gray-600 text-center leading-relaxed">High-definition video output with crystal clear quality and professional-grade resolution</p>
        </div>

        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 hover:border-orange-200">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Audio Guidance</h3>
          <p class="text-gray-600 text-center leading-relaxed">Optional audio sync and guidance for enhanced video experience and better results</p>
        </div>
      </div>

      <!-- Key Benefits -->
      <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-100">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Why Choose Wan 2.5?
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Improved Aesthetics</h3>
                <p class="text-gray-600">Enhanced visual quality with refined aesthetics and better composition</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Consistent Color & Lighting</h3>
                <p class="text-gray-600">Stable color tones and lighting across all video generations</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Reliable Character Animation</h3>
                <p class="text-gray-600">Precise control over character movements and animations</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Professional Quality</h3>
                <p class="text-gray-600">High-quality output suitable for professional content creation</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Speed & Efficiency</h3>
                <p class="text-gray-600">Fast generation times without compromising on quality</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Team Collaboration</h3>
                <p class="text-gray-600">Perfect for teams and creators seeking quality and speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
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
