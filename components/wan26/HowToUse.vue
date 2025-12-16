<template>
  <section
    class="relative py-24 bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-900 overflow-hidden"
  >
    <!-- 背景纹理与光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_0)] [background-size:46px_46px]"
      ></div>
      <div
        class="absolute -top-16 -left-10 w-72 h-72 bg-gradient-to-br from-indigo-300/20 via-purple-300/20 to-cyan-200/25 blur-3xl"
      ></div>
      <div
        class="absolute bottom-[-140px] right-[-80px] w-[380px] h-[380px] bg-gradient-to-tr from-indigo-200/18 via-fuchsia-200/18 to-amber-200/18 blur-[100px]"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-14">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent mb-4"
        >
          How to Use Wan 2.6
        </h2>
        <p class="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Follow a simple four-step process to create coherent multi-shot videos using text prompts or video references.
        </p>
      </div>

      <!-- 步骤网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <!-- Step 1 -->
        <div class="step-card">
          <div class="step-badge">Step 1</div>
          <h3 class="step-title">
            Choose Generation Mode
          </h3>
          <p class="step-copy">
            Select Text to Video, Image to Video, or Reference to Video depending on your input. Reference mode lets you
            reuse visual or audio traits from existing videos.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="step-card">
          <div class="step-badge">Step 2</div>
          <h3 class="step-title">
            Provide Input and Write a Prompt
          </h3>
          <p class="step-copy">
            Upload your input and describe what you want to create. You can provide text, images, or videos and explain
            the scene, motion, or result you expect.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="step-card">
          <div class="step-badge">Step 3</div>
          <h3 class="step-title">
            Configure Video Settings
          </h3>
          <p class="step-copy">
            Choose resolution, duration, and aspect ratio. Enable Multi-Shot to allow intelligent shot splitting and
            better narrative flow.
          </p>
        </div>

        <!-- Step 4 -->
        <div class="step-card">
          <div class="step-badge">Step 4</div>
          <h3 class="step-title">
            Generate and Review
          </h3>
          <p class="step-copy">
            Click Generate Video to create your result. Preview the output and refine prompts or settings to improve
            consistency and pacing.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.step-card {
  position: relative;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98));
  border-radius: 24px;
  border: 1px solid rgba(226, 232, 240, 1);
  padding: 24px 24px 22px;
  box-shadow:
    0 12px 32px -22px rgba(15, 23, 42, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.96);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.step-card:hover {
  transform: translateY(-4px);
  border-color: rgba(129, 140, 248, 0.7);
  box-shadow:
    0 22px 55px -26px rgba(79, 70, 229, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.98);
  background: linear-gradient(145deg, rgba(255, 255, 255, 1), rgba(239, 246, 255, 1));
}

.step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #4f46e5;
  background: linear-gradient(135deg, rgba(238, 242, 255, 0.95), rgba(234, 231, 255, 0.95));
  border: 1px solid rgba(199, 210, 254, 0.9);
  margin-bottom: 0.9rem;
}

.step-title {
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.6rem;
}

.step-copy {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #4b5563;
}

@media (min-width: 768px) {
  .step-title {
    font-size: 1.3rem;
  }

  .step-copy {
    font-size: 1rem;
  }
}
</style>


