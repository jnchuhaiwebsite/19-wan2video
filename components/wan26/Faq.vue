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
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
          Wan 2.6 Frequently Asked Questions
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
              faq.isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            ]"
          >
            <div class="px-8 pb-8">
              <div class="w-full h-px bg-gradient-to-r from-blue-200 to-purple-200 mb-6"></div>
              <div class="text-gray-700 leading-relaxed text-lg" v-html="formatAnswer(faq.answer)"></div>
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
    question: 'What is Wan 2.6?',
    answer: 'Wan 2.6 is a next-generation multimodal AI platform for generating high-quality videos and images. It integrates text, images, audio, and video into one unified system, supporting text-to-video, image-to-video, and text-to-image creation. It produces 1080p videos at 24fps with native audio-visual synchronization and precise lip-sync.',
    isOpen: true
  },
  {
    question: 'Does Wan 2.6 offer a free trial?',
    answer: 'Yes. Eligible users can request a free trial or demo before upgrading to a paid or enterprise plan.',
    isOpen: false
  },
  {
    question: 'Can Wan 2.6 be used for commercial projects?',
    answer: 'Yes. Wan 2.6 supports full commercial usage under business and enterprise licenses, including advertising, branded content, marketing campaigns, and film production.',
    isOpen: false
  },
  {
    question: 'How does Wan 2.6 work?',
    answer: 'Wan 2.6 functions as an advanced multimodal AI engine. Users enter natural language prompts and optionally upload images or audio. The system processes these inputs using the Wan 2.6 5B or 14B models to generate high-fidelity 1080p videos with native A/V sync, accurate lip-sync, and coherent motion across frames.',
    isOpen: false
  },
  {
    question: 'What are the key benefits of Wan 2.6?',
    answer: 'Key benefits include:<br><br>• Native audio-visual synchronization and precise lip-sync<br>• Text-to-video, image-to-video, and text-to-image generation<br>• Choice of 5B or 14B model variants<br>• Multiple supported aspect ratios (16:9, 9:16, 1:1)<br>• Multilingual input support<br>• Full commercial rights for all generated content',
    isOpen: false
  },
  {
    question: 'What makes Wan 2.6 unique compared to Sora 2?',
    answer: 'Wan 2.6 competes strongly with Sora 2 in reference-based generation, multi-shot storytelling, and overall quality. Its strengths include:<br><br>• Reference video generation for style and motion control<br>• Advanced multi-shot narrative capabilities<br>• Higher generation quality and extended durations<br>• Native A/V synchronization and precise lip-sync<br>• Flexible 5B and 14B model options',
    isOpen: false
  },
  {
    question: 'Who is Wan 2.6 designed for?',
    answer: 'Wan 2.6 is made for content creators, marketers, educators, social media managers, filmmakers, and e-commerce brands. Example use cases:<br><br>• Marketing teams producing consistent, professional campaigns<br>• Filmmakers prototyping scenes or building narrative sequences<br>• Educators creating multilingual lessons<br>• Social media creators generating daily short-form content<br>• E-commerce brands producing product showcases',
    isOpen: false
  },
  {
    question: 'What resolutions and aspect ratios does Wan 2.6 support?',
    answer: 'Wan 2.6 supports 480p, 720p, and 1080p at 24fps.<br><br>Available aspect ratios include 16:9 (landscape), 9:16 (vertical), and 1:1 (square).',
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

// 格式化回答文本，支持 HTML
const formatAnswer = (answer: string) => {
  // 将换行符转换为 <br>
  return answer.replace(/\n/g, '<br>')
}
</script>

<style scoped>
/* Additional styles if needed */
</style>

