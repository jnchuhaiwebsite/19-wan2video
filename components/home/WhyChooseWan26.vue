<template>
  <section class="py-24 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px] animate-pulse"
      ></div>
      <div
        class="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px] animate-pulse"
        style="animation-delay: 2s"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 & 副标题 -->
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight tracking-tight px-4"
        >
          Why Creators Choose Wan 2.6
        </h2>
        <p class="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
          Discover how Wan 2.6 empowers creators with cinematic stability, natural timing, and unparalleled control.
        </p>
      </div>

      <!-- 四个要点 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Feature Cards -->
        <div v-for="(feature, index) in features" :key="index"
          class="group relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
        >
          <!-- Hover Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-transparent to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 transition-colors duration-500"></div>

          <div class="relative z-10">
            <!-- Icon Container -->
            <div :class="`inline-flex items-center justify-center p-4 rounded-2xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${feature.bgColor}`">
              <component :is="feature.icon" :class="`w-8 h-8 ${feature.iconColor}`" />
            </div>

            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed text-lg">
              {{ feature.description }}
            </p>
          </div>

          <!-- Decorative Corner Circle -->
          <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-2xl" :class="feature.gradient"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  UserGroupIcon, 
  FilmIcon, 
  MusicalNoteIcon, 
  VideoCameraIcon 
} from '@heroicons/vue/24/outline'

const features = [
  {
    title: 'Role-Based Video Creation',
    description: 'Wan 2.6 lets any person or object become the main character by referencing appearance and voice, enabling realistic single or multi-character performances.',
    icon: UserGroupIcon,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    gradient: 'from-purple-400 to-indigo-400'
  },
  {
    title: 'Multi-Shot Narrative Generation',
    description: 'Instead of single clips, Wan 2.6 expands simple prompts into multi-shot sequences, helping creators build structured stories with consistent visuals.',
    icon: FilmIcon,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    title: 'Natural Audio-Visual Synchronization',
    description: 'Wan 2.6 generates sound, dialogue, and motion together, making conversations and performances easier to follow without separate audio processing.',
    icon: MusicalNoteIcon,
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    gradient: 'from-indigo-400 to-blue-400'
  },
  {
    title: '15-Second 1080P Video Output',
    description: 'With support for up to 15-second videos in 1080P quality, Wan 2.6 allows more complete scenes and clearer visual detail in each result.',
    icon: VideoCameraIcon,
    iconColor: 'text-indigo-600',
    bgColor: 'bg-teal-50',
    gradient: 'from-teal-400 to-emerald-400'
  }
]
</script>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.05); }
}
.animate-pulse {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

