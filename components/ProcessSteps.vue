<template>
  <section id="steps" class="py-20 bg-blue-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-4xl font-bold lg:text-5xl xl:text-6xl 2xl:text-[4rem] text-blue-dark text-center mb-8 leading-loose mobile-large-title">
          Go From Idea to Video in Seconds
        </h2>
        <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Our streamlined process makes professional video creation effortless. Just three simple steps stand between your concept and a finished masterpiece.
        </p>
      </div>

      <div class="mt-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="(step, index) in steps" :key="index" 
               class="relative bg-blue-pale backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-xl border border-blue-pricingborder hover:border-blue-dark/50 transition-all duration-300 hover:transform hover:scale-105 group">
            <div class="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-dark rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg group-hover:shadow-blue-dark/25 transition-all duration-300">
              {{ index + 1 }}
            </div>
            <div class="mt-4">
              <div class="flex items-center space-x-2 sm:space-x-3">
                <component :is="step.icon" class="w-5 h-5 sm:w-6 sm:h-6 text-blue-dark" />
                <h3 class="text-lg sm:text-xl font-semibold text-blue-dark">{{ step.title }}</h3>
              </div>
              <p class="mt-2 text-gray-600 text-sm sm:text-base">{{ step.description }}</p>
              <div v-if="step.specs" class="mt-4 pt-4 border-t border-blue-footerborder">
                <p class="text-xs sm:text-sm text-blue-secondarytext">{{ step.specs }}</p>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-dark to-blue-medium transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  CommandLineIcon, 
  PhotoIcon, 
  VideoCameraIcon,
  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon
} from '@heroicons/vue/24/outline'

const steps = [
  {
    title: "Describe Your Vision",
    description: "Write a detailed prompt describing your scene, characters, and actions. Be specific to get the best results.",
    icon: CommandLineIcon,
    specs: "Text-to-video or Image-to-video"
  },
  {
    title: "Set Your Parameters",
    description: "Choose your aspect ratio, style, and other advanced settings to perfectly match your creative needs.",
    icon: AdjustmentsHorizontalIcon,
    specs: "480p/1080p, Multiple ratios, 5s/10s"
  },
  {
    title: "Generate & Download",
    description: "Click 'Generate,' and let our Wan 2.2 engine do the work. Your high-quality video is ready in minutes.",
    icon: ArrowDownTrayIcon,
    specs: "Coherent multi-shot video, fluid animation, 1080p HD quality."
  }
];
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 