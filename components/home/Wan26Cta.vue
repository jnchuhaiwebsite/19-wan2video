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

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <!-- CTA Section -->
      <div
        class="text-center bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 rounded-3xl p-8 md:p-12 border border-purple-100/60 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.25)]"
      >
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-5 leading-tight"
        >
          Get Started with Wan 2.6 Today
        </h2>
        <p class="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the future of AI video generation. Sign up now to create stunning videos with Wan 2.6's advanced capabilities.
        </p>
        <NuxtLink
          to="/wan/wan-2-6"
          class="group relative inline-flex h-14 px-8 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 text-white font-semibold text-lg rounded-xl shadow-[0_10px_30px_rgba(124,58,237,0.45)] hover:shadow-[0_18px_45px_rgba(129,140,248,0.7)] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:from-purple-500 hover:via-violet-400 hover:to-indigo-400 overflow-hidden items-center justify-center"
        >
          <span class="relative z-10 flex items-center gap-2">
            Try Wan 2.6 Now
            <svg
              class="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
          ></div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Presentation-only component
</script>

<style scoped>
</style>

