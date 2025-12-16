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
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-200/60 text-sm font-medium text-indigo-700 shadow-[0_10px_30px_-18px_rgba(79,70,229,0.35)] backdrop-blur"
        >
          <span class="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></span>
          Key Creative Capabilities
        </div>
        <h2
          class="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent"
        >
          Key Creative Capabilities in Wan 2.6
        </h2>
      </div>

      <!-- 能力网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <!-- Text-to-Video and Image-to-Video -->
        <div class="capability-card">
          <h3 class="capability-title">
            Text-to-Video and Image-to-Video
          </h3>
          <p class="capability-copy">
            Generate multi-shot narrative videos with consistent subjects, scenes, and visual style.
          </p>
        </div>

        <!-- Reference-to-Video Generation -->
        <div class="capability-card">
          <h3 class="capability-title">
            Reference-to-Video Generation
          </h3>
          <p class="capability-copy">
            Use people or arbitrary objects as references, preserving both visual identity and voice characteristics.
          </p>
        </div>

        <!-- Role-Playing Video Creation -->
        <div class="capability-card">
          <h3 class="capability-title">
            Role-Playing Video Creation
          </h3>
          <p class="capability-copy">
            Turn personal videos into cinematic performances with automatic shot design, acting, and audio generation.
          </p>
        </div>

        <!-- Multi-Character Co-Performance -->
        <div class="capability-card">
          <h3 class="capability-title">
            Multi-Character Co-Performance
          </h3>
          <p class="capability-copy">
            Support single-person, multi-person, and human-object interactions with stable dialogue and motion.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 纯展示组件，无业务逻辑
</script>

<style scoped>
.capability-card {
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98));
  border-radius: 24px;
  border: 1px solid rgba(226, 232, 240, 1);
  padding: 22px 22px 20px;
  box-shadow:
    0 12px 32px -20px rgba(15, 23, 42, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.capability-card:hover {
  transform: translateY(-4px);
  border-color: rgba(129, 140, 248, 0.6);
  box-shadow:
    0 20px 50px -24px rgba(79, 70, 229, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
  background: linear-gradient(150deg, rgba(255, 255, 255, 1), rgba(239, 246, 255, 1));
}

.capability-title {
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.capability-copy {
  font-size: 0.98rem;
  line-height: 1.7;
  color: #4b5563;
}

@media (min-width: 768px) {
  .capability-title {
    font-size: 1.35rem;
  }
}
</style>


