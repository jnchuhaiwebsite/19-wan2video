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
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
          Frequently Asked Questions
        </h2>
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
              faq.isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            ]"
          >
            <div class="px-8 pb-8">
              <div class="w-full h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-6"></div>
              <div class="text-gray-700 leading-relaxed text-lg" v-html="faq.answer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'What is the main difference between Wan 2.6 and Wan 2.5?',
    answer: '<p>Wan 2.6 represents a significant architectural leap over the legacy 2.5 version. While Wan 2.5 is excellent for short, silent clips, <strong>Wan 2.6</strong> introduces <strong>15-second long-form generation</strong>, native audio-visual synthesis (sound effects & music), and advanced <strong>Reference-to-Video</strong> capabilities for maintaining character consistency across shots.</p>',
    isOpen: false
  },
  {
    question: 'What are the hardware requirements to run Wan 2.6 locally?',
    answer: '<p>To run Wan 2.6 efficiently using local tools like <strong>ComfyUI</strong>, we recommend an NVIDIA GPU with at least <strong>16GB of VRAM</strong> (e.g., RTX 4080, 4090, or professional grade cards). For users with 8GB-12GB VRAM, we suggest utilizing the <strong>Wan 2.5 model</strong> or accessing Wan 2.6 via our Cloud Playground to prevent out-of-memory errors.</p>',
    isOpen: false
  },
  {
    question: 'Is Wan AI free for commercial use?',
    answer: '<p>The licensing depends on the specific version. <strong>Wan 2.5 is open-source</strong> under the Apache 2.0 license, allowing for free commercial adaptation and usage. However, <strong>Wan 2.6 is a proprietary model</strong>. Commercial use of Wan 2.6 typically requires a commercial license or subscription through the official cloud API service. Always verify the specific license file included with your download.</p>',
    isOpen: false
  },
  {
    question: 'Does Wan 2.6 work with existing Wan 2.5 ComfyUI workflows?',
    answer: '<p>No, you cannot simply swap the model weights. Wan 2.6 utilizes a different architecture and requires <strong>updated custom nodes</strong> and specific <strong>JSON workflows</strong>. We provide dedicated Wan 2.6 workflows and compatible Text Encoders (T5/CLIP) in our resources section to ensure a smooth setup.</p>',
    isOpen: false
  },
  {
    question: 'How does Wan AI compare to competitors like Sora or Runway?',
    answer: '<p>Wan AI distinguishes itself through <strong>control and accessibility</strong>. While Sora and Runway are closed ecosystems, the Wan series (specifically Wan 2.5) offers local deployment options for maximum data privacy. The new <strong>Wan 2.6</strong> matches top-tier proprietary models in visual fidelity (1080p, 15s duration) while offering unique features like single-image character roleplay.</p>',
    isOpen: false
  },
  {
    question: 'Can Wan 2.6 generate sound for the videos?',
    answer: '<p>Yes. Wan 2.6 features <strong>native audio synthesis</strong>. It does not just add random music; it analyzes the visual motion to generate synchronized sound effects (SFX) and background ambience that matches the video\'s context, eliminating the need for external post-production audio tools.</p>',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<style scoped>
/* 确保 strong 标签有适当的样式 */
:deep(strong) {
  font-weight: 700;
  color: #1e40af;
}

:deep(p) {
  margin-bottom: 1rem;
}

:deep(p:last-child) {
  margin-bottom: 0;
}
</style>

