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
            &quot;Where technical precision meets artistic soul. Every frame tells a story, every motion defines reality.&quot;
          </p>
        </div>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="item in items" 
          :key="item.title" 
          class="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
        >
          <!-- 装饰性的视频占位图效果 -->
          <div class="aspect-video bg-slate-700 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
            <!-- 模拟播放按钮 -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/40">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87a1 1 0 00.18.57l3.197 2.132a1 1 0 001.375-.302 1 1 0 00-.18-.57z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            
            <!-- 底部的伪进度条，增加视频感 -->
            <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
              <div class="w-0 group-hover:w-full h-full bg-indigo-500 transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="mt-16 text-center">
        <p class="text-slate-500 text-sm mb-6">Explore the full potential of professional AI video production</p>
        <button class="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300">
          Explore All Showcase
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Deep Space Odyssey',
    tag: 'Physics Logic',
    description: 'A cinematic study of zero-gravity movement and realistic particle interaction in deep space.',
  },
  {
    title: 'The Peak Rush',
    tag: 'Motion Dynamics',
    description: 'A high-octane POV dive from snow-capped peaks to sunlit meadows with dynamic speed shifts.',
  },
  {
    title: 'Neon Soul',
    tag: 'Identity Lock',
    description: 'Maintaining flawless character consistency in a vibrant, rain-soaked cyberpunk environment.',
  },
  {
    title: 'Jungle Trek',
    tag: 'Cinematic Lighting',
    description: 'Realistic light filtration through dense canopy onto a moving vehicle with complex shadows.',
  },
  {
    title: 'Ethereal Metamorphosis',
    tag: 'Visual Alchemy',
    description: 'Seamlessly transforming static hand-drawn sketches into 3D glowing organisms with fluid motion.',
  },
  {
    title: 'Peak Performance',
    tag: 'Human Anatomy',
    description: 'An ultra-HD demonstration of muscular tension, sweat, and realistic skin texture under stress.',
  },
]
</script>

<style scoped>
/* 增加整体的高端暗色调感 */
section {
  background-image: radial-gradient(circle at 50% 0%, #1e1b4b 0%, #0f172a 100%);
}
</style>