<template>
  <section class="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
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
      <!-- 标题 & 副标题 -->
      <div class="text-center mb-14">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-5 leading-tight"
        >
          Wan 2.6 AI Advantages
        </h2>
        <p class="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          Wan 2.6 focuses on practical improvements that help creators produce clearer stories, more stable visuals, and usable results with less manual effort.
        </p>
      </div>

      <!-- 四个要点 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <!-- Reference-Based Video Generation -->
        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100/60 hover:border-purple-200"
        >
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Reference-Based Video Generation (Video-to-Video)
          </h3>
          <p class="text-gray-700 leading-relaxed text-base">
            Wan 2.6 generates videos by referencing input videos, preserving character appearance and voice traits for single-character or multi-character co-acting scenes.
          </p>
        </div>

        <!-- Advanced Text-to-Video -->
        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100/60 hover:border-blue-200"
        >
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Advanced Text-to-Video with Intelligent Shot Scheduling
          </h3>
          <p class="text-gray-700 leading-relaxed text-base">
            Wan 2.6 understands both natural language prompts and shot-level instructions, automatically organizing multi-shot narratives with consistent scenes and atmosphere.
          </p>
        </div>

        <!-- Image-to-Video -->
        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/60 hover:border-indigo-200"
        >
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Image-to-Video with Stable Multi-Character Dialogue
          </h3>
          <p class="text-gray-700 leading-relaxed text-base">
            Wan 2.6 turns images into multi-shot videos, supporting stable multi-person dialogue, more natural vocal tone, and coherent audio-visual continuity.
          </p>
        </div>

        <!-- Up to 15-Second Video Generation -->
        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-teal-100/60 hover:border-teal-200"
        >
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Up to 15-Second Video Generation
          </h3>
          <p class="text-gray-700 leading-relaxed text-base">
            Wan 2.6 supports video generation up to 15 seconds, increasing narrative capacity within a single clip and enabling more complete storytelling.
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

