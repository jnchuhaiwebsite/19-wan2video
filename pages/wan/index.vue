<template>
    <div class="min-h-screen">
      <main>
        <!-- Hero 首屏组件 -->
        <WanHomeHero 
          :nav-tabs="tabs" 
          :breadcrumb-items="breadcrumbItems" />

        <!-- Wan AI Model Quick View -->
        <WanHomeModelQuickView />

        <!-- Unleash Limitless Creativity -->
        <WanHomeCreativityShowcase />

        <!-- The Wan 2.6 Advantage -->
        <WanHomeWan26Advantage />

        <!-- See What's Possible: Made with Wan 2.6 -->
        <WanHomeVideoShowcase />

        <!-- Frequently Asked Questions -->
        <WanHomeFaq />

      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useHead } from 'nuxt/app';
  import { onMounted, onUnmounted, ref } from 'vue'
  import { useSeo } from '~/composables/useSeo'
  import { useNuxtApp } from 'nuxt/app'
  import { useNavigation } from '~/utils/navigation'
  import WanHomeHero from '~/components/wanHome/Hero.vue'
  import WanHomeModelQuickView from '~/components/wanHome/ModelQuickView.vue'
  import WanHomeCreativityShowcase from '~/components/wanHome/CreativityShowcase.vue'
  import WanHomeWan26Advantage from '~/components/wanHome/Wan26Advantage.vue'
  import WanHomeVideoShowcase from '~/components/wanHome/VideoShowcase.vue'
  import WanHomeFaq from '~/components/wanHome/Faq.vue'
  
  
  
  const { $toast } = useNuxtApp() as any
  const { handleScroll } = useNavigation()

const breadcrumbItems = ref([
  { text: 'Wan AI',to: '/wan'},
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
    isActive: false, 
    badge: 'New'  
  }
]);
  
  // 使用默认的 SEO 配置
  useSeo({
    title: 'Wan AI Video Generator: Try Wan 2.6 (Latest)',
    description: 'Experience Alibaba\'s Wan AI (Wan 2.6). The latest SOTA video model featuring 15s generation, audio-visual storytelling, and character consistency. Compare Wan 2.6 vs 2.5 features here.'
  })
  
  // 处理支付回调和视频加载
  onMounted(() => {
    if (typeof window === "undefined") return;
  
    const urlParams = new URLSearchParams(window.location.search);
    const paySuccess = urlParams.get("paysuccess");
  
    if (paySuccess == "1") {
      window.history.replaceState({}, "", window.location.pathname);
      setTimeout(() => {
        $toast.success("Thank you for your support! Your membership benefits are now activated.", 3000);
      }, 500);
    } else if (urlParams.get("payfail") == "1") {
      window.history.replaceState({}, "", window.location.pathname);
    }
  
    // 添加滚动监听
    window.addEventListener('scroll', handleScroll)
  })

  // 清理滚动监听
  onUnmounted(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const jsonLD ={
  "@context": "https://schema.org", // 使用 Schema.org 词汇表
  "@graph": [ // 页面包含多个实体
    {
      "@type": "WebPage", // 当前二级页的网页实体
      "@id": "https://www.wan2video.com/wan#webpage", // WebPage 唯一 ID
      "url": "https://www.wan2video.com/wan", // 页面 URL
      "name": "Wan AI Video Generator: Try Wan 2.6 (Latest)", // 页面标题
      "isPartOf": { // 归属网站
        "@id": "https://www.wan2video.com/#website" // 指向 WebSite
      },
      "about": { // 页面主题对象
        "@id": "https://www.wan2video.com/wan" // 指向本页的 SoftwareApplication
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
            "@id": "https://www.wan2video.com/wan", // 本页 URL
            "name": "Wan AI" // 本页名称
          }
        }
      ]
    },
    {
      "@type": "SoftwareApplication", // 应用实体（产品页）
      "@id": "https://www.wan2video.com/wan#wan-2-6-app", // 应用唯一 ID
      "name": "Wan 2.6 - AI Video Generator for Multi-Shot Storytelling", // 应用完整名称（无空格关键词主打）
      "url": "https://www.wan2video.com/wan", // 应用页面 URL
      "applicationCategory": "MultimediaApplication", // 分类：Web/多媒体
      "operatingSystem": "Web Browser", // 运行环境：浏览器
      "image": "https://www.wan2video.com/wan-2-6.webp", // 展示图
      "inLanguage": "en-US", // 语言
      "brand": { // 品牌
        "@type": "Brand",
        "name": "Wan AI",
        "@id": "https://www.wan2video.com/wan#brand"
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
      "@id": "https://www.wan2video.com/wan#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the main difference between Wan 2.6 and Wan 2.5?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 represents a significant architectural leap over the legacy 2.5 version. While Wan 2.5 is excellent for short, silent clips, Wan 2.6 introduces 15-second long-form generation, native audio-visual synthesis (sound effects & music), and advanced Reference-to-Video capabilities for maintaining character consistency across shots."
          }
        },
        {
          "@type": "Question",
          "name": "What are the hardware requirements to run Wan 2.6 locally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To run Wan 2.6 efficiently using local tools like ComfyUI, we recommend an NVIDIA GPU with at least 16GB of VRAM (e.g., RTX 4080, 4090, or professional grade cards). For users with 8GB-12GB VRAM, we suggest utilizing the Wan 2.5 model or accessing Wan 2.6 via our Cloud Playground to prevent out-of-memory errors."
          }
        },
        {
          "@type": "Question",
          "name": "Is Wan AI free for commercial use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The licensing depends on the specific version. Wan 2.5 is open-source under the Apache 2.0 license, allowing for free commercial adaptation and usage. However, Wan 2.6 is a proprietary model. Commercial use of Wan 2.6 typically requires a commercial license or subscription through the official cloud API service. Always verify the specific license file included with your download."
          }
        },
        {
          "@type": "Question",
          "name": "Does Wan 2.6 work with existing Wan 2.5 ComfyUI workflows?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you cannot simply swap the model weights. Wan 2.6 utilizes a different architecture and requires updated custom nodes and specific JSON workflows. We provide dedicated Wan 2.6 workflows and compatible Text Encoders (T5/CLIP) in our resources section to ensure a smooth setup."
          }
        },
        {
          "@type": "Question",
          "name": "How does Wan AI compare to competitors like Sora or Runway?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan AI distinguishes itself through control and accessibility. While Sora and Runway are closed ecosystems, the Wan series (specifically Wan 2.5) offers local deployment options for maximum data privacy. The new Wan 2.6 matches top-tier proprietary models in visual fidelity (1080p, 15s duration) while offering unique features like single-image character roleplay."
          }
        },
        {
          "@type": "Question",
          "name": "Can Wan 2.6 generate sound for the videos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wan 2.6 features native audio synthesis. It does not just add random music; it analyzes the visual motion to generate synchronized sound effects (SFX) and background ambience that matches the video's context, eliminating the need for external post-production audio tools."
          }
        }
      ]
    },
 
  ]
}
useHead({

script: [
  {
    type: 'application/ld+json',
    children: JSON.stringify(jsonLD)
  }
]
})
  </script>
  
  <style scoped>
  html {
    scroll-behavior: smooth;
  }
  </style>