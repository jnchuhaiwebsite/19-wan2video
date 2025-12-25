<template>
  <section class="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-800 mb-6 shadow-sm">
          <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
          Frequently Asked Questions
        </div>
        <h2 class="text-3xl md:text-4xl font-normal bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
          Wan 2.5 FAQ – Everything You Need to Know
        </h2>
        <p class="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          Everything you need to know about <span class="font-semibold text-blue-600">Wan 2.5</span>—from capabilities to usage and pricing.
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-6 mb-20">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
          :class="faq.isOpen ? 'ring-2 ring-blue-200 shadow-xl' : ''"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-all duration-300 group"
          >
            <h3 class="text-xl font-bold text-gray-900 pr-6 group-hover:text-blue-600 transition-colors duration-300">
              {{ faq.question }}
            </h3>
            <div class="flex-shrink-0">
              <div 
                :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
                  faq.isOpen 
                    ? 'bg-blue-100 text-blue-600 rotate-180' 
                    : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                ]"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
          <div 
            :class="[
              'overflow-hidden transition-all duration-500 ease-in-out',
              faq.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            ]"
          >
            <div class="px-8 pb-8">
              <div class="w-full h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-6"></div>
              <p class="text-gray-700 leading-relaxed text-lg">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = ref([
  {
    question: 'Can I use Wan 2.5 for free?',
    answer: 'Wan2Video occasionally offers free-credit events. After the free quota is used, you can purchase credits as needed— no subscription',
    isOpen: false
  },
  {
    question: 'What is the biggest advantage of Wan 2.5?',
    answer: 'Wan 2.5 delivers precise audio sync, 1080p clarity, stable lighting and semantic precision in one cinematic AI short video generator. It creates high-quality 5s and 10s AI text-to-video clips at an affordable, credits-based price.',
    isOpen: false
  },
  {
    question: 'Do I need a powerful PC to use Wan 2.5?',
    answer: 'No. Wan 2.5 runs fully on the Wan2Video cloud platform, so no high-VRAM GPU is required. Just upload text, images or audio in your browser.',
    isOpen: false
  },
  {
    question: 'What sizes and resolutions does Wan 2.5 support?',
    answer: 'Wan 2.5 supports 480p, 720p and 1080p for image-to-video, plus 832×480, 1280×720 and 1920×1080 for AI text-to-video. All modes are optimized for 5s and 10s short-form clips.',
    isOpen: false
  },
  {
    question: 'How long are the videos with Wan 2.5?',
    answer: 'Wan 2.5 currently produces 5-second and 10-second short videos, ideal for hooks, intros and short-form content. Longer formats are under exploration.',
    isOpen: false
  },
  {
    question: 'Do my credits expire?',
    answer: 'No. Credits on Wan2Video never expire, and you can stack multiple credit packs anytime.',
    isOpen: false
  },
  {
    question: 'Can I use Wan 2.5 for commercial projects?',
    answer: 'Yes. Generated content can be used commercially for marketing, social media, client work and monetized content under Wan2Video\'s Terms of Service.',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>
