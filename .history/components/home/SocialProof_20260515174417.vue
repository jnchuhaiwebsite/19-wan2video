<template>
  <section class="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div
        class="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-1/4 right-1/5 w-72 h-72 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl"
      />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-14">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-5 leading-tight"
        >
          What Creators Say About Wan 2.6
        </h2>
        <p class="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          Thousands of filmmakers, marketers, and designers trust Wan 2.6 to bring their stories to life.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        <div
          v-for="stat in trustStats"
          :key="stat.label"
          :class="[
            'group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center',
            stat.borderHover,
          ]"
        >
          <div
            class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1"
          >
            {{ stat.value }}
          </div>
          <div class="text-sm text-gray-500 font-medium">{{ stat.label }}</div>
        </div>
      </div>

      <div class="mb-10">
        <div class="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 overflow-hidden shadow-xl">
          <span class="absolute top-4 left-6 text-white/10 text-[160px] font-serif leading-none select-none">&quot;</span>
          <div class="relative z-10 max-w-4xl">
            <p class="text-white text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
              &quot;I&apos;ve tested every major AI video tool this year. Wan 2.6 is the first one where I don&apos;t have to babysit the character across shots &mdash; it stays consistent. That alone saves me hours of re-prompting and manual fixes every single week.&quot;
            </p>
            <div class="flex items-center gap-4">
              <img
                src="https://cfsource.wan2video.com/wan2video/avator/avator_1.webp"
                alt="Marcus L."
                class="w-12 h-12 rounded-full border-2 border-white/40 object-cover"
              />
              <div>
                <div class="text-white font-bold text-base">Marcus L.</div>
                <div class="text-white/70 text-sm">Independent Filmmaker · 12k YouTube Subscribers</div>
              </div>
              <div class="ml-auto hidden sm:block">
                <span
                  class="bg-white/20 border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm"
                >
                  ⭐ Top Reviewer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100/60 hover:border-purple-200"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex gap-0.5 text-amber-400 text-base">★★★★★</div>
            <span class="text-[11px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">Product Hunt</span>
          </div>
          <p class="text-gray-700 leading-relaxed text-sm mb-5">
            &quot;The <strong class="text-indigo-600">multi-shot storytelling</strong> is a game-changer. My brand explainer videos used to take 3 days to stitch together &mdash; now I get a coherent 12-second narrative in one generation.&quot;
          </p>
          <div class="flex items-center gap-3">
            <img
              src="https://cfsource.wan2video.com/wan2video/avator/avator_2.webp"
              alt="Sophie T."
              class="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div class="text-sm font-bold text-gray-900">Sophie T.</div>
              <div class="text-xs text-gray-400">Brand Designer · Berlin</div>
            </div>
          </div>
        </div>

        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100/60 hover:border-blue-200"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex gap-0.5 text-amber-400 text-base">★★★★★</div>
            <span class="text-[11px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">G2</span>
          </div>
          <p class="text-gray-700 leading-relaxed text-sm mb-5">
            &quot;I run a YouTube channel focused on short documentaries. Wan 2.6&apos;s <strong class="text-indigo-600">reference-based generation</strong> keeps the same character face across the entire episode. Previous models drifted completely.&quot;
          </p>
          <div class="flex items-center gap-3">
            <img
              src="https://cfsource.wan2video.com/wan2video/avator/avator_3.webp"
              alt="Kenji M."
              class="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div class="text-sm font-bold text-gray-900">Kenji M.</div>
              <div class="text-xs text-gray-400">YouTuber · 45k Subscribers · Tokyo</div>
            </div>
          </div>
        </div>

        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/60 hover:border-indigo-200"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex gap-0.5 text-amber-400 text-base">★★★★★</div>
            <span class="text-[11px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">Twitter / X</span>
          </div>
          <p class="text-gray-700 leading-relaxed text-sm mb-5">
            &quot;As a novelist I used Wan 2.6 to create <strong class="text-indigo-600">visual trailers for my book</strong>. The audio syncs naturally with the scene &mdash; I didn&apos;t need to touch any audio editing software. Absolutely wild.&quot;
          </p>
          <div class="flex items-center gap-3">
            <img
              src="https://cfsource.wan2video.com/wan2video/avator/avator_4.webp"
              alt="Priya R."
              class="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div class="text-sm font-bold text-gray-900">Priya R.</div>
              <div class="text-xs text-gray-400">Author &amp; Content Creator · Mumbai</div>
            </div>
          </div>
        </div>

        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100/60 hover:border-purple-200"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex gap-0.5 text-amber-400 text-base">★★★★★</div>
            <span class="text-[11px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">Reddit</span>
          </div>
          <p class="text-gray-700 leading-relaxed text-sm mb-5">
            &quot;Solo game dev using this to prototype <strong class="text-indigo-600">cinematic cutscenes</strong>. The 1080P quality is sharp enough for pitch decks. Wan 2.6 replaced two paid subscriptions I had before.&quot;
          </p>
          <div class="flex items-center gap-3">
            <img
              src="https://cfsource.wan2video.com/wan2video/avator/avator_5.webp"
              alt="DariusK_dev"
              class="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div class="text-sm font-bold text-gray-900">DariusK_dev</div>
              <div class="text-xs text-gray-400">Indie Game Developer · Poland</div>
            </div>
          </div>
        </div>

        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100/60 hover:border-blue-200"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex gap-0.5 text-amber-400 text-base">★★★★★</div>
            <span class="text-[11px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">TrustPilot</span>
          </div>
          <p class="text-gray-700 leading-relaxed text-sm mb-5">
            &quot;We used Wan 2.6 for a product launch campaign. The <strong class="text-indigo-600">image-to-video</strong> feature turned our static product shots into moving stories. Client loved it &mdash; delivered the whole campaign in half the time.&quot;
          </p>
          <div class="flex items-center gap-3">
            <img
              src="https://cfsource.wan2video.com/wan2video/avator/avator_6.webp"
              alt="Elena F."
              class="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div class="text-sm font-bold text-gray-900">Elena F.</div>
              <div class="text-xs text-gray-400">Creative Director · Digital Agency · Madrid</div>
            </div>
          </div>
        </div>

        <div
          class="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/60 hover:border-indigo-200"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex gap-0.5 text-amber-400 text-base items-center">
              ★★★★<span class="opacity-50">★</span>
            </div>
            <span class="text-[11px] font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">Discord</span>
          </div>
          <p class="text-gray-700 leading-relaxed text-sm mb-5">
            &quot;I teach digital media at university and recommend Wan 2.6 to every student. Zero learning curve &mdash; descriptive prompt in, <strong class="text-indigo-600">coherent video out</strong>. Credits don&apos;t expire so students can move at their own pace.&quot;
          </p>
          <div class="flex items-center gap-3">
            <img
              src="https://cfsource.wan2video.com/wan2video/avator/avator_7.webp"
              alt="Dr. James O."
              class="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div class="text-sm font-bold text-gray-900">Dr. James O.</div>
              <div class="text-xs text-gray-400">Media Studies Lecturer · London</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/60 p-8 md:p-10 mb-14">
        <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
          <div class="text-center flex-shrink-0">
            <div
              class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              4.8
            </div>
            <div class="text-amber-400 text-2xl my-1">★★★★★</div>
            <div class="text-sm text-gray-400 font-medium">Based on 288 reviews</div>
          </div>

          <div class="flex-1 min-w-0 w-full">
            <div class="space-y-3">
              <div v-for="row in ratingRows" :key="row.starsLabel" class="flex items-center gap-3">
                <span class="text-xs text-gray-500 w-8 text-right flex-shrink-0">{{ row.starsLabel }}</span>
                <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    class="social-proof-bar-fill h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    :style="{ width: row.pct }"
                  />
                </div>
                <span class="text-xs text-gray-400 w-8 flex-shrink-0">{{ row.pct }}</span>
              </div>
            </div>
          </div>

          <div class="flex-shrink-0 grid grid-cols-2 md:grid-cols-1 gap-3 w-full md:w-auto">
            <div v-for="dim in dimensionScores" :key="dim.label" class="flex items-center justify-between gap-6">
              <span class="text-sm text-gray-600">{{ dim.label }}</span>
              <span class="font-bold text-indigo-600">{{ dim.score }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mb-14">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Featured &amp; Discussed On</p>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="pill in platformPills"
            :key="pill"
            class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 shadow-sm hover:border-indigo-200 hover:text-indigo-600 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
          >
            {{ pill }}
          </span>
        </div>
      </div>

      <div class="text-center">
        <p class="text-sm text-gray-500 mb-4">
          Join <strong class="text-indigo-600">50,000+ creators</strong> &mdash; no subscription required, credits never expire.
        </p>
        <NuxtLink
          to="/wan/wan-2-6#generator"
          class="group relative inline-flex h-14 px-8 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 text-white font-semibold text-lg rounded-xl shadow-[0_10px_30px_rgba(124,58,237,0.45)] hover:shadow-[0_18px_45px_rgba(129,140,248,0.7)] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 overflow-hidden items-center justify-center"
        >
          <span class="relative z-10 flex items-center gap-2">
            Try Wan 2.6 Now
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trustStats = [
  { value: '50,000+', label: 'Active Creators', borderHover: 'border-purple-100/60 hover:border-purple-200' },
  { value: '1.2M+', label: 'Videos Generated', borderHover: 'border-blue-100/60 hover:border-blue-200' },
  { value: '4.8 / 5', label: 'Avg. User Rating', borderHover: 'border-indigo-100/60 hover:border-indigo-200' },
  { value: '97%', label: 'Would Recommend', borderHover: 'border-teal-100/60 hover:border-teal-200' },
] as const

const ratingRows = [
  { starsLabel: '5 ★', pct: '78%' },
  { starsLabel: '4 ★', pct: '16%' },
  { starsLabel: '3 ★', pct: '4%' },
  { starsLabel: '2 ★', pct: '1%' },
  { starsLabel: '1 ★', pct: '1%' },
] as const

const dimensionScores = [
  { label: 'Character consistency', score: '4.9' },
  { label: 'Audio-visual sync', score: '4.8' },
  { label: '1080P output quality', score: '4.8' },
  { label: 'Ease of use', score: '4.7' },
  { label: 'Value for credits', score: '4.7' },
] as const

const platformPills = [
  '🚀 Product Hunt',
  '🤖 r/AIVideo',
  '💼 G2 Reviews',
  '⭐ TrustPilot',
  '🐦 Twitter / X',
  '💬 Discord Community',
] as const
</script>

<style scoped>
.social-proof-bar-fill {
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
