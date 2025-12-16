<template>
  <section class="py-24 bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
          What's New in Wan 2.6
        </h2>
        <p class="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed">
          Wan 2.6 introduces stronger multi-shot control, video-based references, and longer 15s outputs for more complete and consistent AI-generated stories.
        </p>
      </div>

      <!-- Features Grid: 3 columns on desktop, 1 column on mobile -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <!-- Feature 1: Multi-Shot Storytelling -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/50 hover:border-indigo-200">
          <div class="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <FilmIcon class="w-7 h-7 text-indigo-600" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Multi-Shot Storytelling with Better Continuity</h3>
          <p class="text-gray-700 leading-relaxed text-base">
            Wan 2.6 improves how multiple shots are generated within a single video by preserving key visual and narrative details across scenes. This reduces sudden changes between shots and allows simple prompts to produce structured sequences with clearer story flow.
          </p>
        </div>

        <!-- Feature 2: Video Reference-Based Generation -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100/50 hover:border-purple-200">
          <div class="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <PlayIcon class="w-7 h-7 text-purple-600" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Video Reference-Based Generation</h3>
          <p class="text-gray-700 leading-relaxed text-base">
            Wan 2.6 adds stronger support for generating videos based on reference videos. It can reuse visual appearance and audio traits from the input, supporting single or dual subjects and enabling more controlled, reference-driven storytelling.
          </p>
        </div>

        <!-- Feature 3: Extended 15-Second Video Generation -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100/50 hover:border-pink-200">
          <div class="w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <ClockIcon class="w-7 h-7 text-pink-600" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Extended 15-Second Video Generation</h3>
          <p class="text-gray-700 leading-relaxed text-base">
            With support for up to 15-second video generation, Wan 2.6 increases temporal capacity for AI video creation. This allows smoother transitions, richer scene development, and more complete narratives compared to shorter clip-based outputs.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  FilmIcon, 
  PlayIcon,
  ClockIcon
} from '@heroicons/vue/24/outline';
</script>

<style scoped>
/* Additional styles if needed */
</style>

