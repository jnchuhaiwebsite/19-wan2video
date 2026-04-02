<template>
  <section id="pricing" class="py-24 bg-slate-50 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-50/80 to-transparent -z-10"></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4">
          Pricing &amp; Plans
        </p>
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Wan 2.7 AI Video Generator <span class="text-indigo-600">Pricing &amp; Plans</span>
        </h2>
        <p class="text-lg text-slate-600 leading-relaxed">
          Choose the perfect subscription plan for your needs, ranging from free trials to professional tiers that provide priority 4K rendering, extended video durations, and full commercial usage rights.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold text-slate-900 mb-2">Free Plan</h3>
          <ul class="space-y-3 text-slate-600 text-sm md:text-base">
            <li class="flex gap-2"><span class="text-indigo-500">•</span> Basic generation speed</li>
            <li class="flex gap-2"><span class="text-indigo-500">•</span> Limited daily usage</li>
            <li class="flex gap-2"><span class="text-indigo-500">•</span> Community support</li>
          </ul>
        </div>

        <div class="rounded-3xl border-2 border-indigo-500 bg-white p-8 shadow-xl shadow-indigo-100/50 relative md:-mt-2 md:mb-2">
          <span class="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Popular</span>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Pro Plan</h3>
          <ul class="space-y-3 text-slate-600 text-sm md:text-base">
            <li class="flex gap-2"><span class="text-indigo-500">•</span> 4K Video @ 60FPS</li>
            <li class="flex gap-2"><span class="text-indigo-500">•</span> Full Director Mode access</li>
            <li class="flex gap-2"><span class="text-indigo-500">•</span> No watermarks</li>
          </ul>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold text-slate-900 mb-2">Premium Plan</h3>
          <ul class="space-y-3 text-slate-600 text-sm md:text-base">
            <li class="flex gap-2"><span class="text-indigo-500">•</span> Priority generation queue</li>
            <li class="flex gap-2"><span class="text-indigo-500">•</span> Longest video duration</li>
            <li class="flex gap-2"><span class="text-indigo-500">•</span> Full commercial license</li>
          </ul>
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
