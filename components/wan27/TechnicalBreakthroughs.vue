<template>
  <section id="comparison" class="py-24 bg-slate-950 relative overflow-hidden">
    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#4f46e5 0.5px, transparent 0.5px); background-size: 30px 30px;"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

    <div class="max-w-5xl mx-auto px-6 relative">
      <div class="mb-12 text-center md:text-left">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 mb-4">
          <span class="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase">Compare</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Wan 2.7 AI Video Generator <span class="text-indigo-500">vs Others</span>
        </h2>
        <p class="text-lg text-slate-400 max-w-3xl leading-relaxed mx-auto md:mx-0">
          Experience superior AI video performance with Wan 2.7, which delivers 4K 60FPS resolution and advanced camera controls that consistently outperform traditional models in visual quality and creative flexibility.
        </p>
      </div>

      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur">
        <table class="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr class="border-b border-slate-800">
              <th class="px-6 py-4 font-semibold text-slate-300">Model</th>
              <th class="px-6 py-4 font-semibold text-slate-300">Resolution</th>
              <th class="px-6 py-4 font-semibold text-slate-300">Duration</th>
              <th class="px-6 py-4 font-semibold text-slate-300">Audio Sync</th>
              <th class="px-6 py-4 font-semibold text-slate-300">Camera Control</th>
            </tr>
          </thead>
          <tbody class="text-slate-400">
            <tr class="border-b border-slate-800/80 bg-indigo-500/10">
              <td class="px-6 py-4 font-bold text-white">Wan 2.7</td>
              <td class="px-6 py-4 font-semibold text-emerald-400">4K</td>
              <td class="px-6 py-4 font-semibold text-emerald-400">30s</td>
              <td class="px-6 py-4 font-semibold text-emerald-400">Yes</td>
              <td class="px-6 py-4 font-semibold text-emerald-400">Advanced</td>
            </tr>
            <tr class="border-b border-slate-800/80">
              <td class="px-6 py-4 text-slate-300">Veo</td>
              <td class="px-6 py-4">1080p</td>
              <td class="px-6 py-4">8s</td>
              <td class="px-6 py-4">Limited</td>
              <td class="px-6 py-4">No</td>
            </tr>
            <tr class="border-b border-slate-800/80">
              <td class="px-6 py-4 text-slate-300">Sora</td>
              <td class="px-6 py-4">High</td>
              <td class="px-6 py-4">60s</td>
              <td class="px-6 py-4">No</td>
              <td class="px-6 py-4">Limited</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-slate-300">Kling</td>
              <td class="px-6 py-4">1080p</td>
              <td class="px-6 py-4">5–10s</td>
              <td class="px-6 py-4">No</td>
              <td class="px-6 py-4">No</td>
            </tr>
          </tbody>
        </table>
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
