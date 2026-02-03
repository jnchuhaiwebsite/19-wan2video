<template>
        <div class="">
    <Breadcrumbs 
    :nav-tabs="tabs" 
    :items="breadcrumbItems" />
  </div>
  <div class="relative">
    <!-- 背景装饰 -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute top-60 -right-40 w-96 h-96 bg-gradient-to-bl from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-tr from-blue-100/15 to-cyan-100/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative">
      <Wan25HeroSection />
    </section>
    
        <!-- Generator -->
    <section class="relative" id="generator">
      <Wan25Generator />
    </section>

        <!-- What You Can Do -->
        <section class="relative">
      <Wan25WhatYouCanDo />
    </section>

    <!-- How to Use -->
    <section class="relative">
      <Wan25HowToUse />
    </section>

    <!-- Why Creators Choose -->
    <section class="relative">
      <Wan25WhyCreatorsChoose />
    </section>

    <!-- Real Examples -->
    <section class="relative">
      <Wan25RealExamples />
    </section>

    <!-- Process Steps -->
    <!-- <section class="relative">
      <Wan25ProcessSteps />
    </section> -->

    <!-- Video Showcase -->
    <section class="relative" id="showcase">
      <Wan25Showcase />
    </section>
    
    <!-- 分隔线装饰 -->

    <!-- Technical Specifications (New) -->
    <section class="relative">
      <Wan25TechnicalSpecs />
    </section>

    <!-- Technical Specifications -->
    <!-- <section class="relative">
      <Wan25Specs />
    </section> -->

    <!-- Prompt Formulas -->
    <section class="relative">
      <Wan25PromptFormulas />
    </section>



    <!-- Use Cases -->
    <!-- <section class="relative">
      <Wan25UseCases />
    </section> -->

    <!-- Transforming Industries -->
    <section class="relative">
      <Wan25TransformingIndustries />
    </section>

    <!-- FAQ Section -->
    <section class="relative">
      <Wan25Faq />
    </section>

    <!-- 底部装饰 -->
    <div class="relative py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div class="max-w-4xl mx-auto text-center px-6">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full mb-6 shadow-lg">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-3xl font-bold text-gray-900 mb-4">
          Ready to Create Amazing Videos?
        </h3>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Start your journey with Wan 2.5 and experience the future of AI video generation
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="#generator" 
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start Creating
          </NuxtLink>
          <NuxtLink 
            to="/pricing" 
            class="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            View Pricing
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import Wan25Faq from '~/components/Wan25Faq.vue';
import Wan25Showcase from '~/components/Wan25Showcase.vue';
import Wan25PromptFormulas from '~/components/Wan25PromptFormulas.vue';
import Wan25Generator from '~/components/Wan25Generator.vue';
import Wan25HeroSection from '~/components/Wan25HeroSection.vue';
import Wan25WhatYouCanDo from '~/components/wan25/WhatYouCanDo.vue';
import Wan25HowToUse from '~/components/wan25/HowToUse.vue';
import Wan25WhyCreatorsChoose from '~/components/wan25/WhyCreatorsChooseWan25.vue';
import Wan25RealExamples from '~/components/wan25/RealExamples.vue';
import Wan25TechnicalSpecs from '~/components/wan25/TechnicalSpecs.vue';
import Wan25TransformingIndustries from '~/components/wan25/TransformingIndustries.vue';

import { useHead } from 'nuxt/app';
import { useSeoMeta } from 'nuxt/app';
import { useSeo } from '~/composables/useSeo';
import { useNuxtApp } from 'nuxt/app'
import { useNavigation } from '~/utils/navigation'

const { $toast } = useNuxtApp() as any
const { handleScroll } = useNavigation()
const baseUrl = 'https://www.wan2video.com/'
// SEO Meta
// useSeoMeta({
//   title: ' Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos',
//   ogTitle: ' Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos',
//   description: 'Wan 2.5 is an all-in-one AI video generation model that turns text, image, or audio into lip-synced HD videos. Perfect for creators, marketers, and storytellers.',
//   ogDescription: 'Wan 2.5 is an all-in-one AI video generation model that turns text, image, or audio into lip-synced HD videos. Perfect for creators, marketers, and storytellers.',
//   ogImage: baseUrl + '/wan-25-og-image.webp',
//   ogUrl: baseUrl + 'wan-2-5',
//   ogType: 'website',
//   twitterCard: 'summary_large_image',
//   twitterTitle: ' Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos',
//   twitterDescription: 'Wan 2.5 is an all-in-one AI video generation model that turns text, image, or audio into lip-synced HD videos. Perfect for creators, marketers, and storytellers.',
//   twitterImage: baseUrl + '/wan-25-og-image.webp',
//   twitterUrl: baseUrl + 'wan-2-5',
//   twitterType: 'summary_large_image',
//   twitterSite: '@wan2video',
//   canonical: baseUrl + 'wan-2-5',
//   canonicalUrl: baseUrl + 'wan-2-5',
//   other: [
//     { rel: 'canonical', href: baseUrl + 'wan-2-5' }
//   ],
//   link: [{ rel: 'canonical', href:  baseUrl + 'wan-2-5' }]

// })

useSeo({
  title: ' Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos',
  description: 'Wan 2.5 is an all-in-one AI video generation model that turns text, image, or audio into lip-synced HD videos. Perfect for creators, marketers, and storytellers.',
})


const breadcrumbItems = ref([
  { text: 'Wan AI',to: '/wan'},
  { text: 'Wan 2.5', to: '/wan/wan-2-5' },
]);

// 修改点 2 (可选，建议): 使用 ref 包裹，确保数据响应性一致
const tabs = ref([
  { 
    text: 'Wan 2.2', 
    to: '/wan/wan-2-2', 
    isActive: false 
  },
  { 
    text: 'Wan 2.5', 
    to: '/wan/wan-2-5', 
    isActive: true, 
  
  },
  { 
    text: 'Wan 2.6', 
    to: '/wan/wan-2-6', 
    isActive: false, 
    badge: 'New'  
  }
]);

const jsonLD ={
  "@context": "https://schema.org", // 使用 Schema.org 词汇表
  "@graph": [ // 页面包含多个实体
    {
      "@type": "WebPage", // 当前二级页的网页实体
      "@id": "https://www.wan2video.com/wan/wan-2-5#webpage", // WebPage 唯一 ID
      "url": "https://www.wan2video.com/wan/wan-2-5", // 页面 URL
      "name": "Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos", // 页面标题
      "isPartOf": { // 归属网站
        "@id": "https://www.wan2video.com/#website" // 指向 WebSite
      },
      "mainEntity":{
        "@id":"https://www.wan2video.com/wan/wan-2-5#wan-2-5-app"
      },
      "about": {  "@id": "https://www.wan2video.com/#organization" },
      "breadcrumb": { "@id": "https://www.wan2video.com/wan/wan-2-5#breadcrumbs"},
    },
    {
      "@type": "BreadcrumbList", // 面包屑
      "@id": "https://www.wan2video.com/wan/wan-2-5#breadcrumbs", // 面包屑 ID
      "itemListElement": [ // 面包屑条目
        {
          "@type": "ListItem", // 第 1 层
          "position": 1,
          "name": "Home",// 首页名称
          "item": "https://www.wan2video.com/"
        },
        {
          "@type": "ListItem", // 第 2 层
          "position": 2,
          "name": "Wan AI",// 首页名称
          "item": "https://www.wan2video.com/wan"
        },
        {
          "@type": "ListItem", // 第 3 层
          "position": 3,
          "name": "Wan 2.5",// 首页名称
          "item": "https://www.wan2video.com/wan/wan-2-5"
        }
      ]
    },
    {
      "@type": "SoftwareApplication", // 应用实体（产品页）
      "@id": "https://www.wan2video.com/wan/wan-2-5#wan-2-5-app", // 应用唯一 ID
      "name": "Wan 2.5 - AI Video Generator for Multi-Shot Storytelling", // 应用完整名称（无空格关键词主打）
      "url": "https://www.wan2video.com/wan/wan-2-5", // 应用页面 URL
      "applicationCategory": "MultimediaApplication", // 分类：Web/多媒体
      "operatingSystem": "Web Browser", // 运行环境：浏览器
      "image": "https://www.wan2video.com/wan-2-5.webp", // 展示图
      "inLanguage": "en-US", // 语言
      "brand": { // 品牌
        "@type": "Brand",
        "name": "Wan AI",
        "@id": "https://www.wan2video.com/wan/wan-2-5#brand"
      },
      "publisher": { // 发布方（组织）
        "@id": "https://www.wan2video.com/#organization" // 关联 Organization
      },
      "offers": { // 售卖信息
        "@type": "Offer",
        "availability": "https://schema.org/OnlineOnly", // 在线售卖
        "price": "10", // 起价
        "priceCurrency": "USD", // 货币
        "priceSpecification": { // 价格细项
          "@type": "UnitPriceSpecification",
          "price": "10", // 单价
          "priceCurrency": "USD", // 货币
          "valueAddedTaxIncluded": false // 是否含税（不含）
        }
      },
      "featureList": [ // 功能列表（同步 Wan25Generator）
        "Image-to-Video generation with first frame image upload",
        "Text-to-Video generation with natural language prompts",
        "Multiple resolution options: 480p, 720p, and 1080p HD quality",
        "Flexible video duration: 5-second and 10-second clips",
        "Audio file upload support (MP3/WAV, 3-30 seconds) with AI lip-sync",
        "Multiple aspect ratio support: 16:9, 9:16, 1:1, 4:3, and 3:4 formats",
        "Prompt enhancement feature for improved video quality",
        "Support for multiple image formats: JPEG, JPG, PNG, BMP, WEBP",
        "Cloud-based processing - no powerful PC required",
        "Full commercial rights for all generated content"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.wan2video.com/wan/wan-2-5#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I use Wan 2.5 for free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan2Video occasionally offers free-credit events. After the free quota is used, you can purchase credits as needed— no subscription"
          }
        },
        {
          "@type": "Question",
          "name": "What is the biggest advantage of Wan 2.5?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.5 delivers precise audio sync, 1080p clarity, stable lighting and semantic precision in one cinematic AI short video generator. It creates high-quality 5s and 10s AI text-to-video clips at an affordable, credits-based price."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a powerful PC to use Wan 2.5?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Wan 2.5 runs fully on the Wan2Video cloud platform, so no high-VRAM GPU is required. Just upload text, images or audio in your browser."
          }
        },
        {
          "@type": "Question",
          "name": "What sizes and resolutions does Wan 2.5 support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.5 supports 480p, 720p and 1080p for image-to-video, plus 832×480, 1280×720 and 1920×1080 for AI text-to-video. All modes are optimized for 5s and 10s short-form clips."
          }
        },
        {
          "@type": "Question",
          "name": "How long are the videos with Wan 2.5?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.5 currently produces 5-second and 10-second short videos, ideal for hooks, intros and short-form content. Longer formats are under exploration."
          }
        },
        {
          "@type": "Question",
          "name": "Do my credits expire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Credits on Wan2Video never expire, and you can stack multiple credit packs anytime."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Wan 2.5 for commercial projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Generated content can be used commercially for marketing, social media, client work and monetized content under Wan2Video's Terms of Service."
          }
        }
      ]
    },
    {
      "@type": "HowTo", // 使用说明模块（同步 Wan25HowToUse）
      "@id": "https://www.wan2video.com/wan/wan-2-5#how-to-use",
      "name": "How to Use Wan 2.5 AI On Wan2Video",
      "description": "Choose Text-to-Video or Image-to-Video, enter your prompt, upload optional audio, and select the duration and resolution. — Wan 2.5 will generate a polished short-form clip with no editing timeline required.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Step 1: Choose Generation Mode",
          "text": "Select between Text-to-Video or Image-to-Video mode. For Image-to-Video, upload a first frame image (portrait, product photo, or concept image). For Text-to-Video, you only need to provide a text prompt."
        },
        {
          "@type": "HowToStep",
          "name": "Step 2: Upload First Frame Image (Image-to-Video Mode)",
          "text": "Upload a portrait, product photo, or concept image. Supported formats: JPEG, JPG, PNG, BMP, WEBP. Resolution: 360-2000px, Max 10MB. Wan 2.5 converts it into a short-form video with smooth motion and consistent identity."
        },
        {
          "@type": "HowToStep",
          "name": "Step 3: Write Your Prompt",
          "text": "Describe the subject, scene, motion, and style. Example: 'Cinematic close-up of a woman speaking on stage, warm key light, shallow depth of field.' Supports English and Chinese, up to 2000 characters. You can enable Prompt Enhancement for improved video quality."
        },
        {
          "@type": "HowToStep",
          "name": "Step 4: Upload Audio File (Optional)",
          "text": "Upload an MP3 or WAV file (3–30 seconds, max 15MB). Wan 2.5 uses AI lip-sync and precise audio-visual alignment to match speech, sound effects, and background music."
        },
        {
          "@type": "HowToStep",
          "name": "Step 5: Configure Video Settings",
          "text": "Choose video duration (5 seconds for fast, eye-catching clips, or 10 seconds for richer storytelling). Select resolution: 480p for quick drafts, 720p for balanced quality, or 1080p for full HD clarity. For Text-to-Video, also select video aspect ratio: 16:9, 9:16, 1:1, 4:3, or 3:4."
        },
        {
          "@type": "HowToStep",
          "name": "Step 6: Generate and Review",
          "text": "Click Generate Video to create your result. The video will be processed on the cloud platform. Preview the output and download when ready. You can regenerate with different settings if needed."
        }
      ]
    }
  ]
}
// 处理支付回调
onMounted(() => {
// 检查URL中是否有锚点，并执行滚动
const scrollToAnchor = () => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      
      let attempts = 0;
      const maxAttempts = 30; // 增加尝试次数以应对慢网络
      
      const interval = setInterval(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          clearInterval(interval);
          const offset = 80; // 导航栏高度
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          attempts++;
          if (attempts > maxAttempts) {
            clearInterval(interval);
            console.warn(`无法找到ID为 '${sectionId}' 的元素`);
          }
        }
      }, 100);
    }
  }
  scrollToAnchor();
});
// Page head
useHead({
  title: ' Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos',
  meta: [
    { name: 'description', content: 'Wan 2.5 is an all-in-one AI video generation model that turns text, image, or audio into lip-synced HD videos. Perfect for creators, marketers, and storytellers.' },
    { name: 'keywords', content: 'Wan 2.5, AI video generator, text-to-video, image-to-video, 1080p video, AI video creation' }
  ],
  link: [{ rel: 'canonical', href:  baseUrl + 'wan/wan-2-5' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLD)
    }
  ]
})
</script>
