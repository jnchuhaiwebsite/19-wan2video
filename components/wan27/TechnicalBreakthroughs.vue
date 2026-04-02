<template>
  <section id="tech" class="py-24 bg-slate-950 relative overflow-hidden">
    <!-- 背景特效：科技感网格与光晕 -->
    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#4f46e5 0.5px, transparent 0.5px); background-size: 30px 30px;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

    <div class="max-w-7xl mx-auto px-6 relative">
      <!-- Header Area -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span class="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">Under the Hood</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Technical Breakthroughs in <span class="text-indigo-500">Wan 2.7 AI Video Generator</span>
        </h2>
        <p class="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Pioneering multimodal algorithms that redefine cinematic realism through <strong>precision physics</strong> and <strong>semantic identity retention</strong> with <strong>Wan 2.7 AI Video Generator</strong>.
        </p>
      </div>

      <!-- Tech Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Tech Item 1 -->
        <div class="relative group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500">
          <div class="mb-6 inline-block p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3m2 0h16m-2 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4">Cross-Modal Conditioning</h3>
          <p class="text-slate-400 leading-relaxed text-sm md:text-base">
            Our architecture treats images and videos as high-dimensional control signals, allowing for surgical precision in decoding motion rather than simple text-based guessing. This is key to the <strong>AI video generation</strong> capabilities of <strong>Wan 2.7 AI Video Generator</strong>.
          </p>
          <div class="mt-6 flex items-center gap-2 text-xs font-mono text-indigo-500">
            <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            ACTIVE ARCHITECTURE
          </div>
        </div>

        <!-- Tech Item 2 -->
        <div class="relative group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500">
          <div class="mb-6 inline-block p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4">Semantic Memory Layer</h3>
          <p class="text-slate-400 leading-relaxed text-sm md:text-base">
            A specialized attention mechanism that "remembers" character attributes and environmental geometry across the entire temporal sequence, solving the AI flicker issue. This helps maintain <strong>identity retention</strong> and <strong>visual consistency</strong> throughout the video.
          </p>
          <div class="mt-6 flex items-center gap-2 text-xs font-mono text-indigo-500">
            <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            IDENTITY LOCK v2.7
          </div>
        </div>

        <!-- Tech Item 3 -->
        <div class="relative group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500">
          <div class="mb-6 inline-block p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-4">Enhanced Physical Priors</h3>
          <p class="text-slate-400 leading-relaxed text-sm md:text-base">
            The foundation is pre-trained on vast cinematic datasets to understand complex motion, gravity, momentum, and lighting interactions for true-to-life rendering. The <strong>physical realism</strong> in <strong>Wan 2.7 AI Video Generator</strong> sets a new benchmark for <strong>cinematic AI video generation</strong>.
          </p>
          <div class="mt-6 flex items-center gap-2 text-xs font-mono text-indigo-500">
            <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            PHYSICS ENGINE ENABLED
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
h2 {
  text-wrap: balance;
}
</style>