<template>
  <section class="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
          Why Wan 2.6 Matters
        </h2>
      </div>

      <!-- Features Grid: 2x2 on desktop, 1 column on mobile -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <!-- Card 1: Multi-Shot Storytelling -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100/50 hover:border-purple-200">
          <div class="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <FilmIcon class="w-7 h-7 text-purple-600" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Multi-Shot Storytelling</h3>
          <p class="text-gray-700 leading-relaxed text-base">
            Consistent characters, smooth transitions, long sequences. Wan 2.6 creates coherent multi-shot narratives with professional storytelling flow, supporting sequential scenes and cinematographic movements that keep viewers fully engaged.
          </p>
        </div>

        <!-- Card 2: Cinematic Fidelity -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100/50 hover:border-blue-200">
          <div class="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <SparklesIcon class="w-7 h-7 text-blue-600" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Cinematic Fidelity</h3>
          <p class="text-gray-700 leading-relaxed text-base">
            Higher-quality frames, <span class="font-semibold text-purple-600">1080p/24fps output</span>. Wan 2.6 generates content with improved motion stability, stronger temporal coherence, and better detail preservation—meeting commercial standards for professional video production.
          </p>
        </div>

        <!-- Card 3: Audio-Visual Sync -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/50 hover:border-indigo-200">
          <div class="w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <SpeakerWaveIcon class="w-7 h-7 text-indigo-600" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Audio-Visual Sync</h3>
          <p class="text-gray-700 leading-relaxed text-base">
            <span class="font-semibold text-purple-600">Native lip-sync</span>, precise audio matching. Featuring a precision lip-sync algorithm, Wan 2.6 aligns voice, facial motion, and timing with exceptional accuracy—producing lifelike dialogue scenes across multiple languages.
          </p>
        </div>

        <!-- Card 4: Production Ready -->
        <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-teal-100/50 hover:border-teal-200">
          <div class="w-14 h-14 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <RocketLaunchIcon class="w-7 h-7 text-teal-600" />
          </div>
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Production Ready</h3>
          <p class="text-gray-700 leading-relaxed text-base">
            Multiple aspect ratios, <span class="font-semibold text-purple-600">scale production effortlessly</span>. With support for 16:9, 9:16, and 1:1 formats, Wan 2.6 enables creators and studios to transform AI-generated content from experimental demos into reliable, <span class="font-semibold text-purple-600">production-ready assets</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  FilmIcon, 
  SparklesIcon, 
  SpeakerWaveIcon, 
  RocketLaunchIcon 
} from '@heroicons/vue/24/outline';
</script>

<style scoped>
/* Additional styles if needed */
</style>

