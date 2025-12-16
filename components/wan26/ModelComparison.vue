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
          Wan 2.6 vs Previous Wan Models
        </h2>
        <p class="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Compare Wan 2.6 with earlier versions to see how storytelling, shot planning, and generation quality have
          evolved.
        </p>
      </div>

      <!-- 对比要点 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Multi-Shot Storytelling -->
        <div class="point-card">
          <h3 class="point-title">
            Multi-Shot Storytelling
          </h3>
          <p class="point-copy">
            Wan 2.6 strengthens multi-shot storytelling by keeping characters, objects, and scene context consistent
            across shots. This helps videos follow a clear narrative structure instead of feeling like disconnected
            clips.
          </p>
        </div>

        <!-- Intelligent Shot Planning -->
        <div class="point-card">
          <h3 class="point-title">
            Intelligent Shot Planning
          </h3>
          <p class="point-copy">
            Earlier versions relied more on manual structure or single-shot outputs. Wan 2.6 introduces intelligent
            shot planning, allowing simple prompts to be automatically organized into coherent multi-shot sequences.
          </p>
        </div>

        <!-- Reference Control -->
        <div class="point-card">
          <h3 class="point-title">
            Reference Control
          </h3>
          <p class="point-copy">
            Compared to previous versions, Wan 2.6 provides stronger control through video references. Visual
            appearance and audio traits can remain more stable across shots, improving consistency in
            reference-driven generation.
          </p>
        </div>

        <!-- Audio-Visual Synchronization -->
        <div class="point-card">
          <h3 class="point-title">
            Audio-Visual Synchronization
          </h3>
          <p class="point-copy">
            Wan 2.6 improves alignment between motion, timing, and sound. Dialogue and visuals feel more naturally
            synchronized than in earlier models.
          </p>
        </div>

        <!-- Video Length and Resolution -->
        <div class="point-card">
          <h3 class="point-title">
            Video Length and Resolution
          </h3>
          <p class="point-copy">
            Earlier Wan models focused on shorter clips with standard output quality. Wan 2.6 supports up to
            15-second generation with higher and more stable resolution, enabling more complete and visually
            consistent story segments.
          </p>
        </div>

        <!-- Multi-Character Performance -->
        <div class="point-card">
          <h3 class="point-title">
            Multi-Character Performance
          </h3>
          <p class="point-copy">
            Wan 2.6 better supports multi-character scenes, maintaining stable appearance, roles, and interaction
            across shots for clearer storytelling.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 纯展示组件，无逻辑
</script>

<style scoped>
.point-card {
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98));
  border-radius: 24px;
  border: 1px solid rgba(226, 232, 240, 1);
  padding: 24px;
  box-shadow:
    0 12px 32px -20px rgba(15, 23, 42, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.point-card:hover {
  transform: translateY(-4px);
  border-color: rgba(129, 140, 248, 0.6);
  box-shadow:
    0 20px 50px -24px rgba(79, 70, 229, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
  background: linear-gradient(150deg, rgba(255, 255, 255, 1), rgba(239, 246, 255, 1));
}

.point-title {
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
}

.point-copy {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #4b5563;
}

@media (min-width: 768px) {
  .point-title {
    font-size: 1.35rem;
  }

  .point-copy {
    font-size: 1rem;
  }
}
</style>


