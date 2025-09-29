<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
    <!-- 装饰背景 -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-1/3 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-1/3 w-32 h-32 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl animate-float-delayed"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- How It Works Steps -->
      <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-100">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            3 Easy Steps to Create Stunning Videos with Wan 2.5
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With Wan 2.5, turning your ideas into high-quality videos takes just a few clicks. Whether you start with text, images, or audio, the process is simple and designed for everyone.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-200 group">
            <!-- 序列号在边框上 -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span class="text-sm font-bold text-white">1</span>
              </div>
            </div>
            
            <!-- SVG 图标 -->
            <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Choose Your Mode</h3>
            <p class="text-gray-600 leading-relaxed text-center">Select text-to-video or image-to-video based on your project needs.</p>
          </div>

          <!-- Step 2 -->
          <div class="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 hover:border-purple-200 group">
            <!-- 序列号在边框上 -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span class="text-sm font-bold text-white">2</span>
              </div>
            </div>
            
            <!-- SVG 图标 -->
            <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Upload & Enter Details</h3>
            <p class="text-gray-600 leading-relaxed text-center">Upload an image, enter your prompt, and add optional audio to guide the video creation. Then hit Generate.</p>
          </div>

          <!-- Step 3 -->
          <div class="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100 hover:border-green-200 group">
            <!-- 序列号在边框上 -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <span class="text-sm font-bold text-white">3</span>
              </div>
            </div>
            
            <!-- SVG 图标 -->
            <div class="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 mb-3 text-center">Preview & Download</h3>
            <p class="text-gray-600 leading-relaxed text-center">After a short wait, preview your AI-generated video in the player and download it directly to your device.</p>
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
