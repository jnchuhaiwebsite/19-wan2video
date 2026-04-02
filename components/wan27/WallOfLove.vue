<template>
  <section id="wall-of-love" class="py-24 bg-white relative overflow-hidden">
    <!-- 背景装饰：极简纹理 -->
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: radial-gradient(#4f46e5 1px, transparent 1px); background-size: 40px 40px;"></div>

    <div class="max-w-7xl mx-auto px-6 relative">
      <!-- Header Area -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4">
          Wall of Love
        </p>
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Trusted by Professionals Using <span class="text-indigo-600">Wan 2.7 AI Video Generator</span>
        </h2>
        <p class="text-lg text-slate-600">
          Join the community of visionary directors and creators who are redefining cinematic boundaries with our <strong>multimodal engine</strong> powered by the <strong>Wan 2.7 AI Video Generator</strong>.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="quote in quotes"
          :key="quote.name"
          class="group bg-slate-50 hover:bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 flex flex-col h-full"
        >
          <!-- Star Rating -->
          <div class="flex gap-1 mb-6">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Quote Content -->
          <blockquote class="flex-grow">
            <p class="text-slate-700 leading-relaxed italic mb-8 relative">
              <span class="absolute -top-4 -left-2 text-4xl text-indigo-200 font-serif leading-none">&ldquo;</span>
              {{ quote.content }}
            </p>
          </blockquote>

          <!-- User Info -->
          <div class="flex items-center gap-4 pt-6 border-t border-slate-200">
            <img :src="quote.avatar" :alt="quote.name" class="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover">
            <div>
              <span class="text-sm font-bold text-slate-900 leading-none mb-1">{{ quote.name }}</span>
              <p class="text-xs text-slate-500 font-medium tracking-wide uppercase">{{ quote.role }}</p>
            </div>
          </div>
        </article>
      </div>
      
      <!-- Bottom Badge -->
      <div class="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <span class="font-bold text-xl tracking-tighter text-slate-400">NETFLIX</span>
        <span class="font-bold text-xl tracking-tighter text-slate-400">PARAMOUNT</span>
        <span class="font-bold text-xl tracking-tighter text-slate-400">DISNEY+</span>
        <span class="font-bold text-xl tracking-tighter text-slate-400">WARNER BROS</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const quotes = [
  {
    name: 'Lena',
    role: 'Creative Director',
    avatar: 'https://i.pravatar.cc/100?img=22',
    content:
      'The reference video feature in <strong>Wan 2.7 AI Video Generator</strong> has revolutionized our pre-viz process. It’s a total game-changer for camera blocking.',
  },
  {
    name: 'Mateo',
    role: 'Brand Lead',
    avatar: 'https://i.pravatar.cc/100?img=11',
    content:
      'Finally, an AI that keeps our brand characters consistent. We can now produce full social campaigns from a single reference image using <strong>Wan 2.7 AI Video Generator</strong>.',
  },
  {
    name: 'Jay',
    role: 'Content Creator',
    avatar: 'https://i.pravatar.cc/100?img=33',
    content:
      'The speed and sync capabilities of the <strong>Wan 2.7 AI Video Generator</strong> are unmatched. I’m doing in minutes what used to take a post-production team days.',
  },
  {
    name: 'Aria',
    role: 'Indie Filmmaker',
    avatar: 'https://i.pravatar.cc/100?img=44',
    content:
      'The "Continue Filming" logic allows for true cinematic flow. I can finally previsualize multi-shot sequences that feel totally coherent with <strong>Wan 2.7 AI Video Generator</strong>.',
  }
]
</script>

<style scoped>
h2 {
  text-wrap: balance;
}
</style>