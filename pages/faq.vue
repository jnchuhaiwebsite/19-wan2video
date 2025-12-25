<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <section class="py-24 relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl"></div>
      </div>
      
      <div class="max-w-5xl mx-auto px-6 relative z-10">
        <!-- 页面标题 -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-800 mb-6 shadow-sm">
            <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Frequently Asked Questions
          </div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight">
            Frequently Asked Questions
          </h1>
          <p class="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about pricing, credits, payments, and usage of Wan2Video platform.
          </p>
        </div>

        <!-- FAQ 分类部分 -->
        <div class="space-y-16">
          <!-- Pricing & Credits 部分 -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-200">
              Pricing & Credits
            </h2>
            <div class="space-y-6">
              <div 
                v-for="(faq, index) in pricingFaqs" 
                :key="`pricing-${index}`"
                class="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
                :class="faq.isOpen ? 'ring-2 ring-blue-200 shadow-xl' : ''"
              >
                <button
                  @click="toggleFaq('pricing', index)"
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

          <!-- Payment & Billing 部分 -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-200">
              Payment & Billing
            </h2>
            <div class="space-y-6">
              <div 
                v-for="(faq, index) in paymentFaqs" 
                :key="`payment-${index}`"
                class="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
                :class="faq.isOpen ? 'ring-2 ring-blue-200 shadow-xl' : ''"
              >
                <button
                  @click="toggleFaq('payment', index)"
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

          <!-- Usage & Support 部分 -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-200">
              Usage & Support
            </h2>
            <div class="space-y-6">
              <div 
                v-for="(faq, index) in usageFaqs" 
                :key="`usage-${index}`"
                class="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
                :class="faq.isOpen ? 'ring-2 ring-blue-200 shadow-xl' : ''"
              >
                <button
                  @click="toggleFaq('usage', index)"
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
        </div>

        <!-- CTA Section -->
        <div
          class="text-center bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 rounded-3xl p-8 md:p-12 border border-blue-100/60 shadow-[0_20px_60px_-30px_rgba(59,130,246,0.25)] mt-16"
        >
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Still Have Questions?
          </h2>
          <p class="text-base md:text-lg text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you can't find the answer you're looking for, please contact our support team. We're here to help!
          </p>
          <a
            href="mailto:support@wan2video.com"
            class="inline-block group relative h-14 px-8 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white font-semibold text-lg rounded-xl shadow-[0_10px_30px_rgba(59,130,246,0.45)] hover:shadow-[0_18px_45px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:from-blue-500 hover:via-indigo-400 hover:to-purple-400 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              Contact Support
              <svg
                class="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
            ></div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSeo } from '~/composables/useSeo'

// 设置SEO
useSeo({
  title: 'FAQ | Frequently Asked Questions | Wan2Video',
  description: 'Find answers to frequently asked questions about Wan2Video pricing, credits, payments, and usage. Get help with billing, technical support, and platform features.',
})

// Pricing & Credits FAQs
const pricingFaqs = ref([
  {
    question: 'What defines the Wan 2.5 model architecture?',
    answer: 'Wan 2.5 represents a significant evolution from Wan 2.1, featuring advanced Mixture-of-Experts (MoE) architecture, enhanced training datasets, and superior video compression techniques. These innovations deliver higher generation quality and improved model capabilities.',
    isOpen: false
  },
  {
    question: 'How does the Mixture-of-Experts (MoE) architecture function in Wan 2.5?',
    answer: 'The Wan 2.5 model series utilizes a specialized two-expert MoE design tailored for diffusion denoising. It features a high-noise expert for initial layout generation and a low-noise expert for detail refinement. This configuration allows for a total parameter count of 27B while maintaining active parameters at 14B per step, ensuring optimal inference efficiency without increasing GPU memory overhead.',
    isOpen: false
  },
  {
    question: 'Is there a free trial available?',
    answer: 'We periodically offer promotional free credits for new users. Please verify your current balance in the user dashboard for any active trials or bonus credits.',
    isOpen: false
  },
  {
    question: 'Do you offer subscription plans?',
    answer: 'We operate on a flexible "pay-as-you-go" model rather than a recurring monthly subscription. Credits are purchased as one-time packages and are added to your cumulative account balance.',
    isOpen: false
  },
  {
    question: 'What is the validity period of purchased credits?',
    answer: 'Purchased credits have no expiration date. They remain valid in your account indefinitely until consumed.',
    isOpen: false
  },
  {
    question: 'What are the specific credit costs for video generation?',
    answer: 'Credit consumption varies based on the output resolution and duration. The standard pricing matrix is as follows:<br><br>• <strong>480P Resolution:</strong> 100 credits (5s) / 200 credits (10s)<br>• <strong>720P Resolution:</strong> 200 credits (5s) / 400 credits (10s)<br>• <strong>1080P Resolution:</strong> 300 credits (5s) / 600 credits (10s)',
    isOpen: false
  },
  {
    question: 'Where can I track my credit usage?',
    answer: 'You can monitor your detailed purchase history and real-time consumption logs in the \'Credit Log\' section of the User Center.',
    isOpen: false
  },
  {
    question: 'What is the refund policy for failed generations?',
    answer: 'Effective July 29, 2025, credits are automatically refunded to your account in the event of a system-side generation failure.',
    isOpen: false
  }
])

// Payment & Billing FAQs
const paymentFaqs = ref([
  {
    question: 'Which payment gateways are supported?',
    answer: 'We currently process all payments exclusively via PayPal, ensuring a secure, seamless, and widely accessible transaction experience.',
    isOpen: false
  },
  {
    question: 'Troubleshooting missing credits after payment.',
    answer: 'Credit processing may take a few moments depending on network conditions. Please refresh the page after 1 minute. If the balance remains unchanged, kindly forward your transaction receipt to support@wan2video.com for immediate assistance.',
    isOpen: false
  },
  {
    question: 'Common reasons for transaction failures.',
    answer: 'Please verify the following: 1) Accuracy of billing information, 2) Sufficient funds and daily transaction limits, 3) Bank authorization for international transactions. We recommend trying an alternative card if issues persist.',
    isOpen: false
  },
  {
    question: 'Can I request a refund for unused credits?',
    answer: 'Refund requests are accepted within 7 days of purchase, provided that less than 20% of the resource package has been utilized. Please refer to our Refund Policy page for full terms and conditions.',
    isOpen: false
  }
])

// Usage & Support FAQs
const usageFaqs = ref([
  {
    question: 'Policy on credit deduction for failed tasks.',
    answer: 'Credits are not deducted for system errors or server timeouts. However, please note that tasks failing due to policy violations (e.g., prompts containing prohibited content) are non-refundable.',
    isOpen: false
  },
  {
    question: 'What is the estimated processing time for video generation?',
    answer: 'Average generation time ranges from 1 to 3 minutes, contingent upon server load, resolution settings, and task complexity.',
    isOpen: false
  },
  {
    question: 'Do I own commercial rights to the generated content?',
    answer: 'Yes, you retain full commercial rights to use videos and images generated via our platform for marketing, advertising, and other professional projects.',
    isOpen: false
  },
  {
    question: 'Is my data secure?',
    answer: 'We implement enterprise-grade security protocols to ensure the confidentiality and integrity of your data, preventing unauthorized access.',
    isOpen: false
  },
  {
    question: 'How can I reach technical support?',
    answer: 'For inquiries or technical assistance, please email support@wan2video.com. Our support team prioritizes requests and aims to respond promptly.',
    isOpen: false
  }
])

// 切换FAQ展开/折叠状态
const toggleFaq = (category: 'pricing' | 'payment' | 'usage', index: number) => {
  let targetArray
  if (category === 'pricing') {
    targetArray = pricingFaqs.value
  } else if (category === 'payment') {
    targetArray = paymentFaqs.value
  } else {
    targetArray = usageFaqs.value
  }
  
  targetArray[index].isOpen = !targetArray[index].isOpen
}

// 格式化回答文本，支持 HTML
const formatAnswer = (answer: string) => {
  // 将换行符转换为 <br>，并处理列表格式
  return answer.replace(/\n/g, '<br>')
}
</script>

<style scoped>
/* Additional styles if needed */
</style>

