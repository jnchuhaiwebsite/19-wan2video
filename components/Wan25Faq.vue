<template>
  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions About Wan 2.5 AI
        </h2>
        <p class="text-xl text-gray-600">
          Everything you need to know about Wan 2.5—from capabilities to usage and pricing.
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-6">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="bg-gray-50 rounded-xl overflow-hidden"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
          >
            <h3 class="text-lg font-semibold text-gray-900 pr-4">
              {{ faq.question }}
            </h3>
            <svg 
              :class="[
                'w-5 h-5 text-gray-500 transition-transform duration-200',
                faq.isOpen ? 'rotate-180' : ''
              ]"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            :class="[
              'overflow-hidden transition-all duration-300',
              faq.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            ]"
          >
            <div class="px-6 pb-4">
              <p class="text-gray-600 leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Ready to Try Wan 2.5?
          </h3>
          <p class="text-gray-600 mb-6">
            Experience the next generation of AI video generation with Wan 2.5's 
            enhanced capabilities and professional-quality output.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Creating Videos
            </button>
            <button class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = ref([
  {
    question: 'What is the biggest advantage of Wan 2.5?',
    answer: 'Wan 2.5 combines 1080p clarity, stable lighting, animation control, and audio sync. It delivers high-quality video fast and cost-effectively through our API.',
    isOpen: false
  },
  {
    question: 'Do I need a powerful PC to use Wan 2.5?',
    answer: 'No. Wan 2.5 is available via cloud API with no local setup. Local workflows with older Wan versions may require high-VRAM GPUs.',
    isOpen: false
  },
  {
    question: 'What sizes and resolutions does Wan 2.5 support?',
    answer: 'Wan 2.5 supports 480p, 720p, 1080p for image-to-video, and multiple text-to-video sizes including 832×480, 1280×720, and 1920×1080.',
    isOpen: false
  },
  {
    question: 'Can I use Wan 2.5 for my business?',
    answer: 'Yes. You can generate Wan 2.5 video commercially via API. Please check your plan\'s terms and content policies.',
    isOpen: false
  },
  {
    question: 'How long are the videos with Wan 2.5?',
    answer: 'Wan 2.5 currently supports 5-second and 10-second clips. Longer formats are in development.',
    isOpen: false
  },
  {
    question: 'Is Wan 2.5 the best AI video model?',
    answer: 'Wan 2.5 is one of the strongest options today. It competes with Veo3 while offering accessible quality, strong text handling, and audio guidance.',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>
