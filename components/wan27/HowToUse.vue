<template>
  <section id="how-to-use" class="py-20 lg:py-32 bg-white relative overflow-hidden">
    <!-- 背景装饰：柔和的渐变光晕 -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
      <div class="absolute top-24 left-10 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-24 right-10 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <!-- Header Area -->
      <div class="max-w-3xl mb-16">
        <p class="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
          Directorial Workflow
        </p>
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          How to Use <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Wan 2.7 AI Video Generator</span>
        </h2>
        <p class="text-lg text-slate-600 leading-relaxed">
          A professional-grade pipeline engineered to transform multimodal inputs into seamless cinematic reality. 
          Follow these steps to master your production.
        </p>
      </div>

      <!-- Workflow Steps Container -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        <!-- 移动端隐藏的连接线 (仅在桌面端显示) -->
        <div class="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-100 -translate-y-1/2 z-0"></div>

        <!-- Step 01 -->
        <div class="relative z-10 group">
          <div class="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="flex items-center justify-between mb-8">
              <span class="text-5xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">01</span>
              <div class="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
            </div>
            <h3 class="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">Set Your Foundation</h3>
            <p class="text-slate-600 leading-relaxed">
              Upload your source assets. Whether it’s a character portrait for identity lock or a motion clip as a template, 
              the <span class="font-semibold text-slate-900">Wan 2.7 AI Video Generator</span> processes your files as primary directorial instructions.
            </p>
          </div>
        </div>

        <!-- Step 02 -->
        <div class="relative z-10 group">
          <div class="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="flex items-center justify-between mb-8">
              <span class="text-5xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">02</span>
              <div class="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <h3 class="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">Orchestrate the Scene</h3>
            <p class="text-slate-600 leading-relaxed mb-4">
              Refine your vision using our @Command system. Direct the AI with cinematic precision:
            </p>
            <div class="bg-slate-50 border-l-4 border-indigo-500 p-4 rounded-r-xl italic text-sm text-slate-500 leading-relaxed">
              &quot;@Image1 for the protagonist&apos;s look, following the dynamic lighting of @Video1.&quot;
            </div>
          </div>
        </div>

        <!-- Step 03 -->
        <div class="relative z-10 group">
          <div class="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full">
            <div class="flex items-center justify-between mb-8">
              <span class="text-5xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">03</span>
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 class="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3">Generate &amp; Refine</h3>
            <p class="text-slate-600 leading-relaxed">
              Execute your render to witness fluid, natural motion. Use the 
              <span class="font-semibold text-slate-900">Wan 2.7 AI Video Generator</span>&apos;s extension suite to build longer narratives while preserving original lighting and consistency.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Bottom CTA for the Workflow -->
      <div class="mt-16 text-center">
        <button class="px-8 py-4 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-indigo-200">
          Start Your First Project
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* 增加文字的精致感 */
h2 {
  text-wrap: balance;
}
</style>