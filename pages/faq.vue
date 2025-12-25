<template>
    <div class="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-700 font-sans text-slate-800">
      
      <!-- 顶部 Banner / 标题区 -->
      <header class="bg-white border-b border-slate-200 pt-24 pb-16 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/0 pointer-events-none"></div>
        <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Help Center & <span class="text-blue-600">FAQ</span>
          </h1>
          <p class="text-lg text-slate-500 max-w-2xl mx-auto">
            Answers to common questions about Wan 2.5 architecture, flexible pricing, and usage policies.
          </p>
        </div>
      </header>
  
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- 核心布局：Grid 布局，左侧窄列，右侧宽列 -->
        <div class="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          
          <!-- 左侧悬浮导航 (Sidebar) -->
          <!-- 关键类名: sticky top-24 self-start -->
          <aside class="hidden lg:block lg:col-span-3 sticky top-24 self-start pt-24">
            <nav class="space-y-1">
              <a 
                v-for="item in navItems" 
                :key="item.id"
                :href="`#${item.id}`"
                @click.prevent="scrollToSection(item.id)"
                class="group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                :class="activeSection === item.id 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                  : 'text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm'"
              >
                <!-- 图标 -->
                <component :is="item.icon" 
                  class="flex-shrink-0 w-5 h-5 mr-3 transition-colors"
                  :class="activeSection === item.id ? 'text-blue-100' : 'text-slate-400 group-hover:text-blue-500'" 
                />
                {{ item.label }}
              </a>
            </nav>
  
            <!-- 侧边栏底部 CTA -->
            <div class="mt-8 bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
              <h4 class="text-sm font-semibold text-slate-900 mb-2">Need more help?</h4>
              <p class="text-xs text-slate-500 mb-4 leading-relaxed">
                Can't find the answer you're looking for? Our team is here to assist.
              </p>
              <a href="mailto:support@wan-ai.co" class="block w-full text-center px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                Contact Support
              </a>
            </div>
          </aside>
  
          <!-- 右侧内容区域 -->
          <main class="lg:col-span-9 space-y-16">
            
            <!-- Section 1: Pricing & Credits -->
            <section id="pricing" class="scroll-mt-32 section-observer pt-28">
              <div class="mb-6 pb-2 border-b border-slate-200 flex items-center gap-3">
                <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </span>
                <h2 class="text-2xl font-bold text-slate-900">Pricing & Credits</h2>
              </div>
              
              <div class="space-y-4">
                <div v-for="(faq, index) in pricingFaqs" :key="index" class="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button @click="toggleFaq('pricing', index)" class="w-full px-6 py-5 text-left flex justify-between items-start group">
                    <span class="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors text-lg">{{ faq.question }}</span>
                    <span class="ml-4 mt-1 flex-shrink-0 text-slate-400 group-hover:text-blue-500 transition-transform duration-300" :class="{ 'rotate-180': faq.isOpen }">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </span>
                  </button>
                  <div v-show="faq.isOpen" class="px-6 pb-6 pt-0 text-slate-600 leading-relaxed" v-html="formatAnswer(faq.answer)"></div>
                </div>
              </div>
            </section>
  
            <!-- Section 2: Payment & Billing -->
            <section id="payment" class="scroll-mt-32 section-observer pt-28">
              <div class="mb-6 pb-2 border-b border-slate-200 flex items-center gap-3">
                <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                </span>
                <h2 class="text-2xl font-bold text-slate-900">Payment & Billing</h2>
              </div>
              
              <div class="space-y-4">
                <div v-for="(faq, index) in paymentFaqs" :key="index" class="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button @click="toggleFaq('payment', index)" class="w-full px-6 py-5 text-left flex justify-between items-start group">
                    <span class="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors text-lg">{{ faq.question }}</span>
                    <span class="ml-4 mt-1 flex-shrink-0 text-slate-400 group-hover:text-blue-500 transition-transform duration-300" :class="{ 'rotate-180': faq.isOpen }">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </span>
                  </button>
                  <div v-show="faq.isOpen" class="px-6 pb-6 pt-0 text-slate-600 leading-relaxed" v-html="formatAnswer(faq.answer)"></div>
                </div>
              </div>
            </section>
  
            <!-- Section 3: Usage & Support -->
            <section id="usage" class="scroll-mt-32 section-observer">
              <div class="mb-6 pb-2 border-b border-slate-200 flex items-center gap-3">
                <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </span>
                <h2 class="text-2xl font-bold text-slate-900">Usage & Support</h2>
              </div>
              
              <div class="space-y-4">
                <div v-for="(faq, index) in usageFaqs" :key="index" class="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button @click="toggleFaq('usage', index)" class="w-full px-6 py-5 text-left flex justify-between items-start group">
                    <span class="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors text-lg">{{ faq.question }}</span>
                    <span class="ml-4 mt-1 flex-shrink-0 text-slate-400 group-hover:text-blue-500 transition-transform duration-300" :class="{ 'rotate-180': faq.isOpen }">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </span>
                  </button>
                  <div v-show="faq.isOpen" class="px-6 pb-6 pt-0 text-slate-600 leading-relaxed" v-html="formatAnswer(faq.answer)"></div>
                </div>
              </div>
            </section>
  
          </main>
        </div>
  
        <!-- 移动端底部联系方式 (桌面端已在左侧展示) -->
        <div class="lg:hidden mt-16 pt-8 border-t border-slate-200 text-center">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">Still have questions?</h3>
          <p class="text-slate-500 mb-6">Our team is just an email away.</p>
          <a href="mailto:support@wan-ai.co" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  // --- 图标组件定义 (内联 SVG 以避免依赖) ---
  const SvgPricing = { template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>` }
  const SvgPayment = { template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>` }
  const SvgUsage = { template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>` }
  
  // --- 导航数据 ---
  const activeSection = ref('pricing')
  const navItems = [
    { id: 'pricing', label: 'Pricing & Credits', icon: SvgPricing },
    { id: 'payment', label: 'Payment & Billing', icon: SvgPayment },
    { id: 'usage', label: 'Usage & Support', icon: SvgUsage },
  ]
  
  // --- FAQ 数据 (已更新至最新专业版 + PayPal) ---
  const pricingFaqs = ref([
    {
      question: 'What defines the Wan 2.5 model architecture?',
      answer: 'Wan 2.5 represents a significant evolution from Wan 2.1, featuring advanced Mixture-of-Experts (MoE) architecture, enhanced training datasets, and superior video compression techniques. These innovations deliver higher generation quality and improved model capabilities.',
      isOpen: true
    },
    {
      question: 'How does the Mixture-of-Experts (MoE) architecture function in Wan 2.5?',
      answer: 'The A14B model series utilizes a specialized two-expert MoE design tailored for diffusion denoising. It features a high-noise expert for initial layout generation and a low-noise expert for detail refinement. This configuration allows for a total parameter count of 27B while maintaining active parameters at 14B per step, ensuring optimal inference efficiency without increasing GPU memory overhead.',
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
      answer: 'Credit consumption varies based on the output resolution and duration. The standard pricing matrix is as follows:<br><br><ul class="list-disc pl-5 space-y-1"><li><strong>480P Resolution:</strong> 100 credits (5s) / 200 credits (10s)</li><li><strong>720P Resolution:</strong> 200 credits (5s) / 400 credits (10s)</li><li><strong>1080P Resolution:</strong> 300 credits (5s) / 600 credits (10s)</li></ul>',
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
  
  const paymentFaqs = ref([
    {
      question: 'Which payment gateways are supported?',
      answer: 'We currently process all payments exclusively via <strong>PayPal</strong>, ensuring a secure, seamless, and widely accessible transaction experience.',
      isOpen: false
    },
    {
      question: 'Troubleshooting missing credits after payment.',
      answer: 'Credit processing may take a few moments depending on network conditions and PayPal\'s response time. Please refresh the page after 1 minute. If the balance remains unchanged, kindly forward your transaction receipt to <a href="mailto:support@wan-ai.co" class="text-blue-600 hover:underline">support@wan-ai.co</a> for immediate assistance.',
      isOpen: false
    },
    {
      question: 'Common reasons for transaction failures.',
      answer: 'If your payment fails, please check the following: 1) The status of your PayPal account, 2) Validity of the funding source linked to your PayPal (e.g., expired cards or insufficient bank funds), 3) Any temporary restrictions on your account.',
      isOpen: false
    },
    {
      question: 'Can I request a refund for unused credits?',
      answer: 'Refund requests are accepted within 7 days of purchase, provided that less than 20% of the resource package has been utilized. Please refer to our Refund Policy page for full terms and conditions.',
      isOpen: false
    }
  ])
  
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
      answer: 'For inquiries or technical assistance, please email <a href="mailto:support@wan-ai.co" class="text-blue-600 hover:underline">support@wan-ai.co</a>. Our support team prioritizes requests and aims to respond promptly.',
      isOpen: false
    }
  ])
  
  // --- 交互逻辑 ---
  
  // 1. 平滑滚动
  const scrollToSection = (id: string) => {
    activeSection.value = id
    const element = document.getElementById(id)
    if (element) {
      // 减去 header 偏移量
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  // 2. 切换折叠面板
  const toggleFaq = (category: string, index: number) => {
    const map: Record<string, any> = { pricing: pricingFaqs, payment: paymentFaqs, usage: usageFaqs }
    const targetArray = map[category].value
    // 如果需要手风琴效果（每次只开一个），可以开启下面这行
    // targetArray.forEach((item: any, i: number) => item.isOpen = i === index ? !item.isOpen : false) 
    
    // 当前逻辑：可以展开多个
    targetArray[index].isOpen = !targetArray[index].isOpen
  }
  
  // 3. 格式化 HTML (处理换行等)
  const formatAnswer = (answer: string) => {
    return answer.replace(/\n/g, '<br>')
  }
  
  // 4. 滚动监听 (Scroll Spy)
  let observer: IntersectionObserver | null = null
  
  onMounted(() => {
    const sections = document.querySelectorAll('.section-observer')
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    }, {
      // 调整视口检测范围，确保体验流畅
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    })
  
    sections.forEach((section) => observer?.observe(section))
  })
  
  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
  </script>
  
  <style scoped>
  /* 确保平滑滚动 */
  html {
    scroll-behavior: smooth;
  }
  
  /* 隐藏滚动条但保留功能 (可选，视设计需求而定) */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>