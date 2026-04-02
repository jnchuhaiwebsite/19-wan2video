<template>
  <section id="hero" class="py-32 bg-gradient-to-b from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- Header Content -->
      <div class="text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center px-5 py-2.5 bg-white/70 backdrop-blur-md rounded-full text-sm font-semibold text-slate-700 mb-6 shadow-lg border border-slate-200/60">
          <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
          Next-Gen Cinematography • Wan 2.7 AI Video Generator Pro
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
          <span class="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Wan 2.7 AI Video Generator
          </span>
        </h1>

        <p class="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">
          The Professional Multimodal Engine for Precision Filmmaking
        </p>

        <p class="text-base md:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed mb-8">
          Bridge the gap between imagination and reality. The <strong>Wan 2.7 AI Video Generator</strong> offers a professional directorial suite where text, images, and video converge to create high-fidelity cinematic sequences with absolute control. Create cinematic-quality videos with <strong>4K resolution</strong> and <strong>60FPS</strong> using <strong>AI-powered text-to-video</strong> and <strong>image-to-video workflows</strong>.
        </p>

        <!-- Model Features -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-10 text-sm font-medium text-slate-700">
          <span class="px-3 py-1 rounded-full bg-white/80 border border-slate-200">Cinematic 4K Quality</span>
          <span class="px-3 py-1 rounded-full bg-white/80 border border-slate-200">20–30s Multi-Shot Sequences</span>
          <span class="px-3 py-1 rounded-full bg-white/80 border border-slate-200">AI-Powered Director Mode</span>
          <span class="px-3 py-1 rounded-full bg-white/80 border border-slate-200">Advanced Audio Sync</span>
        </div>

        <!-- CTA -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="#"
            class="group inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-white font-semibold text-base bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 shadow-[0_12px_30px_rgba(129,140,248,0.55)] hover:shadow-[0_18px_45px_rgba(129,140,248,0.85)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started Now
            <svg
              class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0-5 5m5-5H6" />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="#examples"
            class="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-slate-800 font-semibold text-base bg-white/90 border border-slate-200 shadow-md hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
          >
            View Gallery
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>