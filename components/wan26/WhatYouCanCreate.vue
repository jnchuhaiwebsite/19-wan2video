<template>
  <section class="relative py-24 bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-900 overflow-hidden">
    <!-- 背景纹理与光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:46px_46px]"
      ></div>
      <div
        class="absolute -top-16 -left-10 w-80 h-80 bg-gradient-to-br from-purple-300/25 via-indigo-300/20 to-cyan-200/25 blur-3xl"
      ></div>
      <div
        class="absolute bottom-[-140px] right-[-80px] w-[420px] h-[420px] bg-gradient-to-tr from-indigo-200/20 via-fuchsia-200/18 to-amber-200/18 blur-[100px]"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-14">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent mb-4"
        >
          What You Can Create with Wan 2.6
        </h2>
        <p class="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Practical use cases showing how Wan 2.6 supports professional storytelling, planning, and branded video
          creation.
        </p>
      </div>

      <!-- 用例网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        <!-- Short Narrative Films -->
        <div class="use-case-card">
          <h3 class="use-case-title">
            Short Narrative Films
          </h3>
          <p class="use-case-copy">
            Wan 2.6 enables the creation of short narrative films built from connected scenes. Multi-shot structure
            and stable subjects help compact stories remain clear and easy to follow.
          </p>
        </div>

        <!-- Dual-Character Storytelling -->
        <div class="use-case-card">
          <h3 class="use-case-title">
            Dual-Character Storytelling
          </h3>
          <p class="use-case-copy">
            Wan 2.6 supports interactions between two characters while keeping their appearance and roles consistent
            across shots. This makes dialogue-driven scenes more natural and readable.
          </p>
        </div>

        <!-- AI Short Dramas -->
        <div class="use-case-card">
          <h3 class="use-case-title">
            AI Short Dramas
          </h3>
          <p class="use-case-copy">
            For serialized or short-form dramas, Wan 2.6 provides coherent multi-shot storytelling with intelligent
            shot planning. Characters and scenes remain stable, helping episodes feel complete.
          </p>
        </div>

        <!-- Advertising and Brand Storytelling -->
        <div class="use-case-card">
          <h3 class="use-case-title">
            Advertising and Brand Storytelling
          </h3>
          <p class="use-case-copy">
            Wan 2.6 is suitable for advertising and brand narratives that require consistent visuals and controlled
            pacing. It helps convey product stories and campaign messages clearly.
          </p>
        </div>

        <!-- Concept Previsualization and Storyboarding -->
        <div class="use-case-card">
          <h3 class="use-case-title">
            Concept Previsualization and Storyboarding
          </h3>
          <p class="use-case-copy">
            Wan 2.6 can quickly visualize ideas before production. Teams can test scene order, story flow, and visual
            direction using multi-shot sequences.
          </p>
        </div>

        <!-- Short-Form Cinematic Content -->
        <div class="use-case-card">
          <h3 class="use-case-title">
            Short-Form Cinematic Content
          </h3>
          <p class="use-case-copy">
            With up to 15-second generation and improved audio-visual quality, Wan 2.6 supports cinematic short videos
            that feel polished without complex production workflows.
          </p>
        </div>
      </div>

      <!-- CTA 部分 -->
      <div
        class="text-center bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30 rounded-3xl p-8 md:p-12 border border-purple-100/60 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.25)]"
      >
        <p class="text-lg md:text-xl font-semibold text-slate-900 mb-3">
          See how these use cases work in practice.
        </p>
        <p class="text-base md:text-lg text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Create structured, multi-shot videos for real creative and commercial scenarios with Wan 2.6.
        </p>
        <button
          @click="handleStartCreating"
          class="group relative h-14 px-8 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 text-white font-semibold text-lg rounded-xl shadow-[0_10px_30px_rgba(124,58,237,0.45)] hover:shadow-[0_18px_45px_rgba(129,140,248,0.7)] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:from-purple-500 hover:via-violet-400 hover:to-indigo-400 overflow-hidden"
        >
          <span class="relative z-10 flex items-center gap-2">
            Start Creating with Wan 2.6
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
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleStartCreating = () => {
  router.push('/wan/wan-2-6#generator')
}
</script>

<style scoped>
.use-case-card {
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98));
  border-radius: 24px;
  border: 1px solid rgba(226, 232, 240, 1);
  padding: 24px;
  box-shadow:
    0 12px 32px -20px rgba(15, 23, 42, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.use-case-card:hover {
  transform: translateY(-4px);
  border-color: rgba(129, 140, 248, 0.6);
  box-shadow:
    0 20px 50px -24px rgba(79, 70, 229, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
  background: linear-gradient(150deg, rgba(255, 255, 255, 1), rgba(239, 246, 255, 1));
}

.use-case-title {
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
}

.use-case-copy {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #4b5563;
}

@media (min-width: 768px) {
  .use-case-title {
    font-size: 1.35rem;
  }

  .use-case-copy {
    font-size: 1rem;
  }
}
</style>


