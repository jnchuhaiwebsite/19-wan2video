<template>
  <section id="faq" class="py-24 bg-slate-50 relative overflow-hidden">
    <!-- 背景装饰：柔和的环形渐变 -->
    <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl"></div>

    <div class="max-w-4xl mx-auto px-6 relative">
      <!-- Header Area -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Wan 2.7 AI Video Generator <span class="text-indigo-600">FAQ</span>
        </h2>
        <p class="text-lg text-slate-600 leading-relaxed">
          Find instant answers to technical questions about 4K rendering, commercial licensing, and credit usage to help you maximize the creative potential of the Wan 2.7 model for your projects.
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqs" 
          :key="index" 
          class="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-300 transition-all duration-300"
        >
          <details class="group">
            <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors pr-8">
                {{ item.q }}
              </h3>
              <!-- 动态旋转图标 -->
              <div class="relative flex-shrink-0 w-6 h-6">
                <div class="absolute inset-0 bg-slate-100 group-hover:bg-indigo-50 rounded-full transition-colors"></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 m-auto h-4 w-4 text-slate-500 group-hover:text-indigo-600 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <div class="px-6 pb-6 animate-fadeIn">
              <div class="pt-2 border-t border-slate-100">
                <p class="text-slate-600 leading-relaxed text-base">
                  <span v-html="highlightKeyword(item.a)"></span>
                </p>
              </div>
            </div>
          </details>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: 'What is Wan 2.7 AI Video Generator?',
    a: 'An AI tool that transforms text and images into high-quality cinematic content with precise visual and audio control.',
  },
  {
    q: 'What features does it have?',
    a: 'It offers text-to-video, image-to-video, 4K rendering, and seamless audio synchronization.',
  },
  {
    q: 'What kinds of videos can I generate?',
    a: 'Cinematic trailers, product demos, social media clips, and complex multi-shot sequences.',
  },
  {
    q: 'Do I need professional skills?',
    a: 'No, the interface is intuitive and allows anyone to generate professional videos by providing simple instructions.',
  },
  {
    q: 'How long does it take to generate?',
    a: 'Short clips take minutes; complex 4K videos may take longer depending on server load.',
  },
  {
    q: 'Will I lose credits if generation fails?',
    a: 'No, credits are automatically refunded if the generation process fails.',
  },
  {
    q: 'Can I use videos for commercial purposes?',
    a: 'Yes, generated videos come with full commercial rights for marketing and business use.',
  },
  {
    q: 'Will my data be used for training?',
    a: 'No, your prompts and assets are used only for your specific generation task.',
  },
  {
    q: 'Is it free?',
    a: 'A free trial with limited credits is available upon registration.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes, refunds are available if less than 10% of credits are used within 7 days of purchase.',
  },
]

// 简单的关键词高亮函数
const highlightKeyword = (text: string) => {
  return text.replace(/Wan 2.7 AI Video Generator/g, '<span class="font-semibold text-slate-900 underline decoration-indigo-200 underline-offset-4">Wan 2.7 AI Video Generator</span>');
}
</script>

<style scoped>
/* 自定义详情展开动画 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}

/* 隐藏 details 默认箭头 */
summary::-webkit-details-marker {
  display: none;
}

h2 {
  text-wrap: balance;
}
</style>