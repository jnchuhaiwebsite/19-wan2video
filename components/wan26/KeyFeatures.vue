<template>
  <section class="relative py-24 bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-900 overflow-hidden">
    <!-- 背景纹理与光晕 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#d1d5db_1px,transparent_0)] [background-size:46px_46px]"></div>
      <div class="absolute top-[-80px] -left-20 w-96 h-96 bg-gradient-to-br from-purple-300/30 via-indigo-200/25 to-cyan-200/30 blur-3xl"></div>
      <div class="absolute bottom-[-120px] right-[-40px] w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/25 via-emerald-200/20 to-purple-200/25 blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col items-center text-center gap-4 mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-[0_10px_30px_-14px_rgba(124,58,237,0.12)]">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-sm font-medium tracking-wide text-slate-600">Next-Gen AI · Bento Grid</span>
        </div>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
          Wan 2.6 — Key Features & Advantages
        </h2>
        <p class="max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
          A clean, light Bento grid that spotlights core capabilities with soft gradients, gentle shadows, and breathable icon plates—more SaaS, less cyberpunk.
        </p>
      </div>

      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Feature 1: Breakthrough Multimodal Architecture -->
          <div
            class="feature-card"
            style="--glow-from:#a855f7; --glow-to:#22d3ee; --glow-shadow:rgba(99,102,241,0.28); --card-shadow:rgba(124,58,237,0.15); --icon-bg:linear-gradient(135deg,#f3e8ff,#e0f2fe); --icon-color:#7c3aed;"
          >
            <div class="feature-inner">
              <div class="flex items-start gap-4 mb-5">
                <div class="icon-shell">
                  <span class="icon-plate"></span>
                  <svg class="relative w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Core Architecture</p>
                  <h3 class="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">Breakthrough Multimodal Architecture</h3>
                </div>
              </div>
              <ul class="feature-list">
                <li><span class="dot from-cyan-400 to-fuchsia-400"></span><strong>Unified stack</strong> handles text / image / video / audio in one network.</li>
                <li><span class="dot from-indigo-400 to-cyan-300"></span><strong>Synchronized output</strong> aligned pacing for multi-shot stories and formats.</li>
                <li><span class="dot from-fuchsia-400 to-amber-300"></span><strong>Production scale</strong> flexes from lightweight drafts to enterprise pipelines.</li>
              </ul>
            </div>
          </div>

          <!-- Feature 2: Multi-Shot Narrative Intelligence -->
          <div
            class="feature-card"
            style="--glow-from:#7c3aed; --glow-to:#ec4899; --glow-shadow:rgba(236,72,153,0.28); --card-shadow:rgba(147,51,234,0.15); --icon-bg:linear-gradient(135deg,#f3e8ff,#ffe4f3); --icon-color:#7c3aed;"
          >
            <div class="feature-inner">
              <div class="flex items-start gap-4 mb-5">
                <div class="icon-shell">
                  <span class="icon-plate"></span>
                  <svg class="relative w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Story Engine</p>
                  <h3 class="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">Multi-Shot Narrative Intelligence</h3>
                </div>
              </div>
              <ul class="feature-list">
                <li><span class="dot from-pink-400 to-purple-400"></span><strong>Shot-level semantics</strong> scene understanding plus camera blocking.</li>
                <li><span class="dot from-violet-400 to-cyan-300"></span><strong>Parallel & sequential arcs</strong> smooth transitions with controlled pace.</li>
                <li><span class="dot from-amber-300 to-rose-400"></span><strong>Cinematic motion</strong> pans, tilts, dollies parametrized for story beats.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-[1fr] gap-6">
          <!-- Feature 3: 5B & 14B Model Variants -->
          <div
            class="feature-card"
            style="--glow-from:#6366f1; --glow-to:#22d3ee; --glow-shadow:rgba(34,211,238,0.22); --card-shadow:rgba(99,102,241,0.12); --icon-bg:linear-gradient(135deg,#eef2ff,#e0f2fe); --icon-color:#4f46e5;"
          >
            <div class="feature-inner">
              <div class="flex items-start gap-4 mb-4">
                <div class="icon-shell">
                  <span class="icon-plate"></span>
                  <svg class="relative w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 leading-snug">5B & 14B Model Variants</h3>
              </div>
              <ul class="feature-list">
                <li><span class="dot from-indigo-400 to-cyan-300"></span>5B for fast drafts on standard GPUs and live previews.</li>
                <li><span class="dot from-fuchsia-400 to-indigo-400"></span>14B for maximum fidelity and studio-grade delivery.</li>
                <li><span class="dot from-emerald-300 to-cyan-300"></span>Switch instantly inside one workflow to balance cost/quality.</li>
              </ul>
            </div>
          </div>

          <!-- Feature 4: Enhanced Quality & Longer Durations -->
          <div
            class="feature-card"
            style="--glow-from:#14b8a6; --glow-to:#8b5cf6; --glow-shadow:rgba(20,184,166,0.2); --card-shadow:rgba(13,148,136,0.12); --icon-bg:linear-gradient(135deg,#ecfeff,#ede9fe); --icon-color:#0f766e;"
          >
            <div class="feature-inner">
              <div class="flex items-start gap-4 mb-4">
                <div class="icon-shell">
                  <span class="icon-plate"></span>
                  <svg class="relative w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 leading-snug">Enhanced Quality & Longer Durations</h3>
              </div>
              <ul class="feature-list">
                <li><span class="dot from-teal-300 to-cyan-300"></span>1080p · 24fps with stronger temporal stability.</li>
                <li><span class="dot from-indigo-400 to-emerald-300"></span>Extended-duration support to avoid heavy slicing.</li>
                <li><span class="dot from-amber-300 to-teal-300"></span>Detail preservation plus anti-shake for ready-to-ship cuts.</li>
              </ul>
            </div>
          </div>

          <!-- Feature 5: Native Audio-Visual Synchronization -->
          <div
            class="feature-card"
            style="--glow-from:#ec4899; --glow-to:#8b5cf6; --glow-shadow:rgba(236,72,153,0.22); --card-shadow:rgba(236,72,153,0.14); --icon-bg:linear-gradient(135deg,#fde7f3,#ede9fe); --icon-color:#be185d;"
          >
            <div class="feature-inner">
              <div class="flex items-start gap-4 mb-4">
                <div class="icon-shell">
                  <span class="icon-plate"></span>
                  <svg class="relative w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 leading-snug">Native Audio-Visual Synchronization</h3>
              </div>
              <ul class="feature-list">
                <li><span class="dot from-pink-400 to-purple-400"></span>Precision lip-sync keeps speech and facial motion aligned.</li>
                <li><span class="dot from-indigo-400 to-rose-300"></span>Multilingual timing accuracy in a single pass.</li>
                <li><span class="dot from-amber-300 to-pink-400"></span>Expression and rhythm stay natural across scenes.</li>
              </ul>
            </div>
          </div>

          <!-- Feature 6: Audio-Driven Video Generation -->
          <div
            class="feature-card"
            style="--glow-from:#fb923c; --glow-to:#f472b6; --glow-shadow:rgba(244,114,182,0.22); --card-shadow:rgba(249,115,22,0.14); --icon-bg:linear-gradient(135deg,#fff7ed,#ffe4f3); --icon-color:#c2410c;"
          >
            <div class="feature-inner">
              <div class="flex items-start gap-4 mb-4">
                <div class="icon-shell">
                  <span class="icon-plate"></span>
                  <svg class="relative w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 leading-snug">Audio-Driven Video Generation</h3>
              </div>
              <ul class="feature-list">
                <li><span class="dot from-orange-400 to-rose-400"></span>Upload a soundtrack and get visuals that match rhythm and mood.</li>
                <li><span class="dot from-amber-300 to-pink-400"></span>Great for music videos, narrative fragments, and ambient loops.</li>
                <li><span class="dot from-lime-300 to-orange-400"></span>BPM-aware motion that amplifies energy where it matters.</li>
              </ul>
            </div>
          </div>

          <!-- Feature 7: Flexible Format Support -->
          <div
            class="feature-card"
            style="--glow-from:#22d3ee; --glow-to:#818cf8; --glow-shadow:rgba(34,211,238,0.22); --card-shadow:rgba(59,130,246,0.12); --icon-bg:linear-gradient(135deg,#e0f2fe,#eef2ff); --icon-color:#2563eb;"
          >
            <div class="feature-inner">
              <div class="flex items-start gap-4 mb-4">
                <div class="icon-shell">
                  <span class="icon-plate"></span>
                  <svg class="relative w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 leading-snug">Flexible Format Support</h3>
              </div>
              <ul class="feature-list">
                <li><span class="dot from-cyan-400 to-indigo-400"></span>16:9 / 9:16 / 1:1 with MP4, MOV, WebM exports.</li>
                <li><span class="dot from-emerald-300 to-cyan-300"></span>Optimized for social feeds, cinematic frames, and cross-channel drops.</li>
                <li><span class="dot from-violet-400 to-cyan-300"></span>Switch aspect ratios while preserving focal intent.</li>
              </ul>
            </div>
          </div>

          <!-- Feature 8: Full Commercial Rights -->
          <div
            class="feature-card"
            style="--glow-from:#22c55e; --glow-to:#10b981; --glow-shadow:rgba(34,197,94,0.2); --card-shadow:rgba(16,185,129,0.12); --icon-bg:linear-gradient(135deg,#ecfdf3,#d1fae5); --icon-color:#15803d;"
          >
            <div class="feature-inner">
              <div class="flex items-start gap-4 mb-4">
                <div class="icon-shell">
                  <span class="icon-plate"></span>
                  <svg class="relative w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-slate-900 leading-snug">Full Commercial Rights</h3>
              </div>
              <ul class="feature-list">
                <li><span class="dot from-emerald-300 to-lime-300"></span>Unrestricted commercial usage for all generated media.</li>
                <li><span class="dot from-cyan-300 to-emerald-300"></span>Ready for ads, distribution, monetization, and remix.</li>
                <li><span class="dot from-amber-300 to-emerald-300"></span>Clear compliance trail for collaborative delivery.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Presentation-only component
</script>

<style scoped>
.feature-card {
  position: relative;
  border-radius: 26px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid var(--card-border, #e5e7eb);
  box-shadow: 0 10px 30px -14px var(--card-shadow, rgba(148, 163, 184, 0.25));
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.feature-card::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 1px;
  border-radius: 26px;
  background: linear-gradient(135deg, var(--glow-from, #6366f1), var(--glow-to, #22d3ee));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  border-color: transparent;
  box-shadow: 0 16px 42px -14px var(--glow-shadow, rgba(99, 102, 241, 0.22));
}

.feature-card:hover::before {
  opacity: 1;
  filter: drop-shadow(0 0 14px var(--glow-shadow, rgba(99, 102, 241, 0.22)));
}

.feature-inner {
  position: relative;
  height: 100%;
  border-radius: 24px;
  padding: 26px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.92));
  backdrop-filter: blur(10px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 16px 38px -24px rgba(15, 23, 42, 0.16);
}

.icon-shell {
  position: relative;
  width: 52px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  color: var(--icon-color, #7c3aed);
  background: var(--icon-bg, #f3f4f6);
  border: 1px solid #e5e7eb;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 10px 24px -14px rgba(124, 58, 237, 0.16);
}

.icon-plate {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: var(--icon-bg, #f3f4f6);
  opacity: 0.95;
}

.feature-list {
  display: grid;
  gap: 10px;
  color: #374151;
  line-height: 1.7;
  font-size: 0.97rem;
}

.feature-list .dot {
  width: 9px;
  height: 9px;
  border-radius: 9999px;
  display: inline-flex;
  margin-right: 10px;
  background: linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0)));
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.25);
}
</style>

