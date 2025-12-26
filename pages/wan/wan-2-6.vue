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
      <Wan26HeroSection />
    </section>
        <!-- Generator -->
        <section class="relative" id="generator">
      <Wan26Generator />
    </section>


    <!-- What Is Wan 2.6 -->
    <section class="relative">
      <Wan26WhatIs />
    </section>

    <!-- How to Use Wan 2.6 -->
    <section class="relative">
      <Wan26HowToUse />
    </section>

    <!-- What's New in Wan 2.6 -->
    <section class="relative">
      <Wan26WhatsNew />
    </section>

    <!-- Video Examples -->
    <section class="relative">
      <Wan26VideoExamples />
    </section>

    <!-- Why Wan 2.6 Matters -->
    <!-- <section class="relative">
      <Wan26WhyMatters />
    </section> -->

    <!-- Why Wan 2.6 Is Built for Professional Storytelling -->
    <section class="relative">
      <Wan26StorytellingWhy />
    </section>

    <!-- Key Features & Advantages -->
    <section class="relative">
      <Wan26KeyFeatures />
    </section>

    <!-- Key Creative Capabilities -->
    <section class="relative">
      <Wan26CreativeCapabilities />
    </section>

    <!-- What You Can Create with Wan 2.6 -->
    <section class="relative">
      <Wan26WhatYouCanCreate />
    </section>

    <section class="model-comparison">
      <Wan26ModelComparison />
    </section>
    


    <!-- Use Cases -->
    <!-- <section class="relative">
      <Wan26UseCases />
    </section> -->

    <!-- FAQ -->
    <section class="relative">
      <Wan26Faq />
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Wan26HeroSection from '~/components/wan26/HeroSection.vue';
import Wan26WhatIs from '~/components/wan26/WhatIs.vue';
import Wan26WhatsNew from '~/components/wan26/WhatsNew.vue';
import Wan26Generator from '~/components/wan26/Generator.vue';
import Wan26HowToUse from '~/components/wan26/HowToUse.vue';
import Wan26StorytellingWhy from '~/components/wan26/StorytellingWhy.vue';
import Wan26CreativeCapabilities from '~/components/wan26/CreativeCapabilities.vue';
import Wan26KeyFeatures from '~/components/wan26/KeyFeatures.vue';
import Wan26UseCases from '~/components/wan26/UseCases.vue';
import Wan26ModelComparison from '~/components/wan26/ModelComparison.vue';
import Wan26VideoExamples from '~/components/wan26/VideoExamples.vue';
import Wan26WhatYouCanCreate from '~/components/wan26/WhatYouCanCreate.vue';
import Wan26Faq from '~/components/wan26/Faq.vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import { useHead } from 'nuxt/app';
import { useSeo } from '~/composables/useSeo';
import { useNuxtApp } from 'nuxt/app'
import { useNavigation } from '~/utils/navigation'

const { $toast } = useNuxtApp() as any
const { handleScroll } = useNavigation()
useSeo({
  title: 'Wan 2.6 – Multi-Shot AI Video Model for 15s Storytelling',
  description: 'Explore Wan 2.6, an AI video model for multi-shot storytelling and 15s videos. Keep scene consistency, reuse video references, and create richer stories with ease.',
})

const breadcrumbItems = ref([
  { text: 'Wan AI',to: '/wan'},
  { text: 'Wan 2.6', to: '/wan/wan-2-6' },
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
    isActive: false, 
  },
  { 
    text: 'Wan 2.6', 
    to: '/wan/wan-2-6', 
    isActive: true, 
    badge: 'New'  

  
  }
]);
const jsonLD ={
  "@context": "https://schema.org", // 使用 Schema.org 词汇表
  "@graph": [ // 页面包含多个实体
    {
      "@type": "WebPage", // 当前二级页的网页实体
      "@id": "https://www.wan2video.com/wan/wan-2-6#webpage", // WebPage 唯一 ID
      "url": "https://www.wan2video.com/wan/wan-2-6", // 页面 URL
      "name": "Wan 2.6 – Multi-Shot AI Video Model for 15s Storytelling", // 页面标题
      "isPartOf": { // 归属网站
        "@id": "https://www.wan2video.com/#website" // 指向 WebSite
      },
      "about": { // 页面主题对象
        "@id": "https://www.wan2video.com/wan/wan-2-6" // 指向本页的 SoftwareApplication
      }
    },
    {
      "@type": "BreadcrumbList", // 面包屑
      "@id": "https://www.wan2video.com/wan/wan-2-6#breadcrumbs", // 面包屑 ID
      "itemListElement": [ // 面包屑条目
        {
          "@type": "ListItem", // 第 1 层
          "position": 1,
          "item": {
            "@id": "https://www.wan2video.com/", // 首页 URL
            "name": "Home" // 首页名称
          }
        },
        {
          "@type": "ListItem", // 第 2 层
          "position": 2,
          "item": {
            "@id": "https://www.wan2video.com/wan/wan-2-6", // 本页 URL
            "name": "Wan 2.6" // 本页名称
          }
        }
      ]
    },
    {
      "@type": "SoftwareApplication", // 应用实体（产品页）
      "@id": "https://www.wan2video.com/wan/wan-2-6#wan-2-6-app", // 应用唯一 ID
      "name": "Wan 2.6 - AI Video Generator for Multi-Shot Storytelling", // 应用完整名称（无空格关键词主打）
      "url": "https://www.wan2video.com/wan/wan-2-6", // 应用页面 URL
      "applicationCategory": "MultimediaApplication", // 分类：Web/多媒体
      "operatingSystem": "Web Browser", // 运行环境：浏览器
      "image": "https://www.wan2video.com/wan-2-6.webp", // 展示图
      "inLanguage": "en-US", // 语言
      "brand": { // 品牌
        "@type": "Brand",
        "name": "Wan AI",
        "@id": "https://www.wan2video.com/wan/wan-2-6#brand"
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
      "featureList": [ // 功能列表（同步 Wan26KeyFeatures）
        "Multi-shot storytelling with intelligent scene planning",
        "Reference-based video generation (video-to-video) for consistent style, motion, and voice",
        "Extended 15-second video generation for richer narratives",
        "Native audio-visual synchronization with precise lip-sync",
        "Audio-driven video generation that follows rhythm and mood",
        "Flexible format support for 16:9, 9:16, and 1:1 outputs",
        "Full commercial rights for all generated content"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.wan2video.com/wan/wan-2-6#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Wan 2.6 used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 is used for creating AI-generated videos with multi-shot storytelling, longer duration, and better consistency across scenes."
          }
        },
        {
          "@type": "Question",
          "name": "How is Wan 2.6 different from Wan 2.5?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 improves narrative continuity, adds stronger video reference support, and enables up to 15-second video generation for richer storytelling."
          }
        },
        {
          "@type": "Question",
          "name": "Does Wan 2.6 support multi-shot video generation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Wan 2.6 is designed for multi-shot generation, allowing connected shots to follow a clear narrative structure within one video."
          }
        },
        {
          "@type": "Question",
          "name": "Does Wan 2.6 offer a free trial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eligible users can request a free trial or demo before upgrading to a paid or enterprise plan."
          }
        },
        {
          "@type": "Question",
          "name": "Can Wan 2.6 be used for commercial projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wan 2.6 supports full commercial usage under business and enterprise licenses, including advertising, branded content, marketing campaigns, and film production."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Wan 2.6 unique compared to Sora 2?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 competes strongly with Sora 2 in reference-based generation, multi-shot storytelling, and overall quality. Its strengths include: Reference video generation for style and motion control; Advanced multi-shot narrative capabilities; Higher generation quality and extended durations; Native A/V synchronization and precise lip-sync; Flexible 5B and 14B model options."
          }
        },
        {
          "@type": "Question",
          "name": "Can Wan 2.6 keep characters consistent across scenes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 maintains key visual details such as characters and objects across shots, reducing appearance drift between scenes."
          }
        },
        {
          "@type": "Question",
          "name": "Does Wan 2.6 work with reference videos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 supports video reference inputs, enabling creators to guide visual appearance and sound based on existing videos."
          }
        },
        {
          "@type": "Question",
          "name": "What is the maximum video length in Wan 2.6?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 supports video generation of up to 15 seconds per output, allowing more complete scenes and smoother transitions."
          }
        },
        {
          "@type": "Question",
          "name": "Is Wan 2.6 suitable for dual-character storytelling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Wan 2.6 supports videos with one or two subjects and helps maintain consistent interaction across multiple shots."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need complex prompts to use Wan 2.6?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, Wan 2.6 works well with simple, natural-language prompts while still producing structured and coherent multi-shot videos."
          }
        }
      ]
    },
    {
      "@type": "HowTo", // 使用说明模块（同步 Wan26HowToUse）
      "@id": "https://www.wan2video.com/wan/wan-2-6#how-to-use",
      "name": "How to Use Wan 2.6",
      "description": "Follow a simple four-step process to create coherent multi-shot videos using text prompts or video references.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Step 1: Choose Generation Mode",
          "text": "Select Text to Video, Image to Video, or Reference to Video depending on your input. Reference mode lets you reuse visual or audio traits from existing videos."
        },
        {
          "@type": "HowToStep",
          "name": "Step 2: Provide Input and Write a Prompt",
          "text": "Upload your input and describe what you want to create. You can provide text, images, or videos and explain the scene, motion, or result you expect."
        },
        {
          "@type": "HowToStep",
          "name": "Step 3: Configure Video Settings",
          "text": "Choose resolution, duration, and aspect ratio. Enable Multi-Shot to allow intelligent shot splitting and better narrative flow."
        },
        {
          "@type": "HowToStep",
          "name": "Step 4: Generate and Review",
          "text": "Click Generate Video to create your result. Preview the output and refine prompts or settings to improve consistency and pacing."
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

useHead({

  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLD)
    }
  ]
})

</script>

