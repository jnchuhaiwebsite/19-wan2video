<template>
  <section id="examples" class="py-24 bg-slate-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-16">
        <p class="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4">
          Production Showcase
        </p>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Cinematic Mastery with <span class="text-indigo-400">Wan 2.7 AI Video Generator</span>
        </h2>
        <div class="flex flex-col md:flex-row md:items-center gap-6">
          <p class="text-xl text-slate-400 max-w-2xl border-l-2 border-indigo-500 pl-6 italic">
            &quot;Where technical precision meets artistic soul. Every frame tells a story, every motion defines reality with <strong>Wan 2.7 AI Video Generator</strong>.”
          </p>
        </div>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="item in showcaseData" 
          :key="item.id" 
          class="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
        >
          <div
            class="aspect-video bg-slate-700 relative overflow-hidden"
            @mouseenter="playPreview"
            @mouseleave="stopPreview"
          >
            <video
              :src="item.video"
              :poster="item.poster"
              class="absolute inset-0 w-full h-full object-cover"
              muted
              loop
              playsinline
              preload="metadata"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 pointer-events-none"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              <div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/40">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Content Area -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold tracking-widest text-indigo-400 uppercase px-2 py-1 bg-indigo-500/10 rounded border border-indigo-500/20">
                {{ item.tag }}
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">
              {{ item.description }}
            </p>
            
            <!-- Bottom Progress Bar (adds video feel) -->
            <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
              <div class="w-0 group-hover:w-full h-full bg-indigo-500 transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="mt-16 text-center">
        <p class="text-slate-500 text-sm mb-6">Explore the full potential of professional AI video production with <strong>Wan 2.7 AI Video Generator</strong></p>
        <button class="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300">
          Explore All Showcase
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const BASE = 'https://cfsource.wan2-7.net/wan27/showcase'

const showcaseData = [
  {
    id: 1,
    title: 'Astronaut Discovery',
    tag: 'Physical Logic',
    description: 'A shocked astronaut finds life in a derelict corridor.',
    video: '/video/Wan-2-7_sci-fi-astronaut-shocked-discovery-glowing-plant.mp4',
    poster: '/image/Wan-2-7_sci-fi-astronaut-shocked-discovery-glowing-plant.webp',
  },
  {
    id: 2,
    title: 'Alpine POV Burst',
    tag: 'Motion Dynamics',
    description: 'Rapid transition from a dark tunnel to a sunny meadow.',
    video: '/video/Wan-2-7_pov-forward-tunnel-burst-alpine-meadow.mp4',
    poster: '/image/Wan-2-7_pov-forward-tunnel-burst-alpine-meadow.webp',
  },
  {
    id: 3,
    title: 'Cyberpunk Cyborg',
    tag: 'Character Identity',
    description: 'Slow tracking of a female cyborg in a neon-soaked city.',
    video: '/video/Wan-2-7_female-cyborg-walking-neon-cyberpunk-city.mp4',
    poster: '/image/Wan-2-7_female-cyborg-walking-neon-cyberpunk-city.webp',
  },
  {
    id: 4,
    title: 'G-Class Jungle Drive',
    tag: 'Cinematic Lighting',
    description: 'Cinematic jungle trek showcasing the Mercedes-Benz G-Class.',
    video: '/video/Wan-2-7_mercedes-g-class-dense-jungle-muddy-trail.mp4',
    poster: '/image/Wan-2-7_mercedes-g-class-dense-jungle-muddy-trail.webp',
  },
  {
    id: 5,
    title: 'Magical Mural',
    tag: 'Object Transformation',
    description: 'Painted flowers transform into glowing 3D butterflies.',
    video: '/video/Wan-2-7_artist-mural-flowers-transform-to-3d-butterflies.mp4',
    poster: '/image/Wan-2-7_artist-mural-flowers-transform-to-3d-butterflies.webp',
  },
  {
    id: 6,
    title: 'Masculine Energy',
    tag: 'Anatomical Accuracy',
    description: 'Hyper-realistic muscular man after an intense workout.',
    video: '/video/Wan-2-7_muscular-man-abs-gym-workout-sweat.mp4',
    poster: '/image/Wan-2-7_muscular-man-abs-gym-workout-sweat.webp',
  },
].map((item) => ({
  ...item,
  video: `${BASE}${item.video}`,
  poster: `${BASE}${item.poster}`,
}))

function playPreview(e: MouseEvent) {
  const v = (e.currentTarget as HTMLElement).querySelector('video')
  void v?.play()
}

function stopPreview(e: MouseEvent) {
  const v = (e.currentTarget as HTMLElement).querySelector('video')
  if (v) {
    v.pause()
    v.currentTime = 0
  }
}
</script>

<style scoped>
/* Add a high-end dark theme feel */
section {
  background-image: radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0f172a 100%);
}
</style>