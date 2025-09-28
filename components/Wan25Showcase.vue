<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Wan 2.5 Video Generation Showcase
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover what Wan 2.5 can achieve. These Wan 2.5 video samples highlight 
          smoother motion, consistent color and lighting, sharper clarity at 1080p, 
          and accurate prompt following across styles.
        </p>
      </div>

      <!-- Video Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(video, index) in videos" 
          :key="index"
          class="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="relative aspect-video bg-black">
            <video 
              :src="video.url"
              :poster="video.poster"
              controls
              muted
              class="w-full h-full object-cover"
              preload="metadata"
            >
              Your browser does not support video playback
            </video>
            <div class="absolute top-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium">
              Wan 2.5
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-semibold text-gray-900 mb-2">
              {{ video.title }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ video.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span 
                v-for="tag in video.tags" 
                :key="tag"
                class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Highlight -->
      <div class="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Key Improvements in Wan 2.5
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Smoother Motion</h4>
            <p class="text-gray-600 text-sm">Enhanced motion fluidity and natural movement patterns</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Consistent Lighting</h4>
            <p class="text-gray-600 text-sm">Stable color tones and lighting across all generations</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">1080p Clarity</h4>
            <p class="text-gray-600 text-sm">Sharp details and refined aesthetics at high resolution</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Accurate Prompts</h4>
            <p class="text-gray-600 text-sm">Better understanding and execution of text descriptions</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const videos = ref([
  {
    url: 'https://cdn.flux-context.org/wan2.5-video-1.mp4',
    poster: '',
    title: 'Confident Speaker',
    description: 'A confident woman in her 40s speaks on stage with synchronized lip movements and gestures.',
    tags: ['Speaking', 'Professional', 'Lip Sync']
  },
  {
    url: 'https://cdn.flux-context.org/wan2.5-video-2.mp4',
    poster: '',
    title: 'Subway Scene',
    description: 'A young man sits on a subway train while blurred figures move rapidly, showing Wan 2.5\'s cinematic depth.',
    tags: ['Cinematic', 'Motion Blur', 'Depth']
  },
  {
    url: 'https://cdn.flux-context.org/wan2.5-video-3.mp4',
    poster: '',
    title: 'Magical Transformation',
    description: 'A magical girl transformation in vibrant anime style, rendered with Wan 2.5 for dynamic motion and particle effects.',
    tags: ['Anime', 'Transformation', 'Effects']
  },
  {
    url: 'https://cdn.flux-context.org/wan2.5-video-4.mp4',
    poster: '',
    title: 'Athlete Portrait',
    description: 'A muscular athlete after training, shot with high-contrast lighting. Wan 2.5 enhances realism and detail.',
    tags: ['Portrait', 'Realism', 'Lighting']
  },
  {
    url: 'https://cdn.flux-context.org/wan2.5-video-6.mp4',
    poster: '',
    title: 'Times Square Announcement',
    description: 'A young woman in Times Square announces: "Yo, Wan 2.5 just dropped!" showcasing viral UGC style with saturated colors.',
    tags: ['UGC', 'Viral', 'Announcement']
  },
  {
    url: 'https://cdn.flux-context.org/wan2.5-video-7.mp4',
    poster: '',
    title: 'Sunset Portrait',
    description: 'A red-haired girl on a rooftop at sunset, captured with soft hues and natural style by Wan 2.5.',
    tags: ['Portrait', 'Sunset', 'Natural']
  }
])
</script>
