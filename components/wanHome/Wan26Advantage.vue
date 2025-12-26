<template>
  <section class="py-24 bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/5 w-72 h-72 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 & 副标题 -->
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-5 leading-tight"
        >
          The Wan 2.6 Advantage: Redefining AI Video Generation
        </h2>
        <p class="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          Why the latest 2.6 architecture is the superior choice for professional creators and studios.
        </p>
      </div>

      <!-- 三个 USP 区块 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- USP 1: Native Audio-Visual Synthesis -->
        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/60 hover:border-indigo-200 relative"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
              1
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 flex-1">
              Native Audio-Visual Synthesis (True Sync)
            </h3>
          </div>
          
          <p class="text-gray-700 leading-relaxed text-base">
            One of the few models with native audio generation. It generates not just visuals, but perfectly synchronized sound effects (SFX) and background music that match the motion.
          </p>
        </div>

        <!-- USP 2: Reference-to-Video -->
        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100/60 hover:border-purple-200 relative"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
              2
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 flex-1">
              Reference-to-Video (Identity Consistency)
            </h3>
          </div>
          
          <p class="text-gray-700 leading-relaxed text-base">
            Powered by advanced ID-retention technology. With just one reference image, the model "memorizes" the subject, delivering consistent character identity across different angles and actions—the key to long-form narratives.
          </p>
        </div>

        <!-- USP 3: Extended 15s Narrative Generation -->
        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100/60 hover:border-pink-200 relative"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
              3
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 flex-1">
              Extended 15s Narrative Generation
            </h3>
          </div>
          
          <p class="text-gray-700 leading-relaxed text-base">
            Supports generating up to 15 seconds of continuous, coherent video in a single shot. This allows for complex actions and complete story beats without the need for constant stitching or morphing.
          </p>
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

