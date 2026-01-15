<template>
  <div class="min-h-screen bg-blue-pale">
    <main>
      <!-- 主功能区 -->
      <Wan26Hero />
      
      <!-- What Is Wan 2.6 -->
      <WhatIsWan26 />
      
      <!-- Why Creators Choose Wan 2.6 -->
      <WhyChooseWan26 />
      
      <!-- How Wan2.6 Works -->
      <HowWan26Works />
      
      <!-- Wan 2.6 AI Advantages -->
      <Wan26Advantages />
      
      <!-- Why Creators Choose Wan 2.6 (Benefits) -->
      <!-- <WhyCreatorsChooseWan26 /> -->
      
      <!-- Wan 2.5 vs Wan 2.6 -->
      <Wan25VsWan26 />
      
      <!-- Explore Real Wan 2.6 Video Creations -->
      <Wan26VideoExamplesSection />
      
      <!-- Pricing for Wan 2.6 -->
      <Wan26Pricing />
      
      <!-- Frequently Asked Questions about Wan 2.6 -->
      <Wan26Faq />
      
      <!-- Get Started with Wan 2.6 Today -->
      <Wan26Cta />
      
    </main>
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { onMounted, onUnmounted } from 'vue'
import { useSeo } from '~/composables/useSeo'
import { useNuxtApp } from 'nuxt/app'
import { useNavigation } from '~/utils/navigation'
import Wan26Hero from '~/components/home/Wan26Hero.vue'
import WhatIsWan26 from '~/components/home/WhatIsWan26.vue'
import WhyChooseWan26 from '~/components/home/WhyChooseWan26.vue'
import HowWan26Works from '~/components/home/HowWan26Works.vue'
import Wan26Advantages from '~/components/home/Wan26Advantages.vue'
import WhyCreatorsChooseWan26 from '~/components/home/WhyCreatorsChooseWan26.vue'
import Wan25VsWan26 from '~/components/home/Wan25VsWan26.vue'
import Wan26VideoExamplesSection from '~/components/home/Wan26VideoExamplesSection.vue'
import Wan26Pricing from '~/components/home/Wan26Pricing.vue'
import Wan26Faq from '~/components/home/Wan26Faq.vue'
import Wan26Cta from '~/components/home/Wan26Cta.vue'



const { $toast } = useNuxtApp() as any
const { handleScroll } = useNavigation()

// 使用默认的 SEO 配置
useSeo({
  title: 'Wan 2.6 – Multi-Shot AI Video Generation with Audio Sync',
  description: 'Wan 2.6 enables cinematic AI video generation with multi-shot storytelling, stable characters, and natural audio-visual sync in up to 1080P quality. Try it today.'
})

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
const jsonLD ={
  "@context": "https://schema.org", // 使用 Schema.org 词汇表
  "@graph": [ // 页面包含多个实体

  {
      "@type": "Organization",
      "@id": "https://www.wan2video.com/#organization",
      "name": "Wan 2.6",
      "url": "https://www.wan2video.com/",
      "description": "Wan 2.6 enables cinematic AI video generation with multi-shot storytelling, stable characters, and natural audio-visual sync in up to 1080P quality. Try it today.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.wan2video.com/wai-ai.webp"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@wan2video.com",
        "contactType": "customer support",
        "availableLanguage": "en"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.wan2video.com/#website",
      "name": "Wan 2.6",
      "url": "https://www.wan2video.com/",
      "inLanguage": "en-US",
      "description": "Wan 2.6 enables cinematic AI video generation with multi-shot storytelling, stable characters, and natural audio-visual sync in up to 1080P quality. Try it today.",
      "publisher": {
        "@id": "https://www.wan2video.com/#organization"
      }
    },
    {
      "@type": "WebPage", // 当前二级页的网页实体
      "@id": "https://www.wan2video.com/#webpage", // WebPage 唯一 ID
      "url": "https://www.wan2video.com", // 页面 URL
      "name": "Wan 2.6", // 页面标题
      "isPartOf": { // 归属网站
        "@id": "https://www.wan2video.com/#website" // 指向 WebSite
      },
      "about": { // 页面主题对象
        "@id": "https://www.wan2video.com/#software" // 指向本页的 SoftwareApplication
      },
      "breadcrumb": { "@id": "https://www.wan2video.com/#breadcrumbs"},
    },
    {
      "@type": "BreadcrumbList", // 面包屑
      "@id": "https://www.wan2video.com/#breadcrumbs", // 面包屑 ID
      "itemListElement": [ // 面包屑条目
        {
          "@type": "ListItem", // 第 1 层
          "position": 1,
          "name": "Home",// 首页名称
          "item": "https://www.wan2video.com/"
        }
      ]
    },
    {
      "@type": "SoftwareApplication", // 应用实体（产品页）
      "@id": "https://www.wan2video.com/#software", // 应用唯一 ID
      "name": "Wan 2.6", // 应用完整名称（无空格关键词主打）
      "url": "https://www.wan2video.com/", // 应用页面 URL
      "applicationCategory": "MultimediaApplication", // 分类：多媒体
      "operatingSystem": "Web Browser", // 运行环境：浏览器
      "image": "https://www.wan2video.com/wan-2-2.webp", // 展示图
      "inLanguage": "en-US", // 语言
      "brand": { // 品牌
        "@type": "Brand",
        "name": "Wan AI",
        "@id": "https://www.wan2video.com/#brand"
      },
      "creator": { // 发布方（组织）
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
      "aggregateRating": { // 聚合评分（若无真实评分建议暂不开放）
        "@type": "AggregateRating", // 评分类型
        "ratingValue": "4.5", // 平均分
        "ratingCount": "288" // 评分数量
      },
      "featureList": [ // 功能列表（同步 HeroSection 组件功能）
        "Text-to-Video generation with natural language prompts",
        "Image-to-Video generation from uploaded images",
        "Multiple resolution options: 480p and 1080p HD quality",
        "Flexible aspect ratio support: 16:9, 9:16, 1:1, 4:3, and 3:4 formats",
        "Prompt optimization for enhanced video quality",
        "Negative prompt support for precise control over video content",
        "Coherent multi-shot video generation with fluid animation",
        "Full commercial rights for all generated content"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.wan2video.com#faq",
      "name":"Frequently Asked Questions about Wan 2.6",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Wan 2.6 used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 is used to generate AI videos with clearer storytelling, stable characters, and synchronized audio, making it suitable for narrative and character-driven content."
          }
        },
        {
          "@type": "Question",
          "name": "How is Wan 2.6 different from Wan 2.5?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 removes several limitations found in Wan 2.5, including short clip length, weaker multi-shot structure, and separate audio generation, enabling more complete scenes."
          }
        },
        {
          "@type": "Question",
          "name": "Does Wan 2.6 support reference-based video generation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wan 2.6 can generate videos by referencing input videos, images, or characters, helping preserve visual identity and voice consistency across scenes."
          }
        },
        {
          "@type": "Question",
          "name": "Can Wan 2.6 create multi-shot or story-like videos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wan 2.6 is designed to generate structured, multi-shot videos rather than isolated clips, making stories easier to follow."
          }
        },
        {
          "@type": "Question",
          "name": "How long are videos generated by Wan 2.6?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 supports video generation up to 15 seconds per output, allowing creators to include more narrative detail in a single generation."
          }
        }
      ]
    },
    {
      "@type": "HowTo", // 使用说明模块（同步 ProcessSteps 组件）
      "@id": "https://www.wan2video.com#how-to-use",
      "name": "How Wan2.6 Works",
      "description": "Our streamlined workflow makes AI video generation with Wan 2.2 intuitive and fast. Go from idea to final render in minutes.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Choose Your Mode",
          "text": "Start with a text prompt (Text-to-Video) or upload your own image (Image-to-Video) to bring it to life with the power of Wan 2.2. Text-to-video or Image-to-video."
        },
        {
          "@type": "HowToStep",
          "name": "Configure & Create",
          "text": "Write your descriptive prompt, choose the aspect ratio, and tell Wan 2.2 exactly what to create for your vision. 480p/1080p, Multiple ratios."
        },
        {
          "@type": "HowToStep",
          "name": "Generate & Share",
          "text": "The Wan 2.2 AI gets to work. Once ready, download your high-quality MP4 video or share it directly with the world. Coherent multi-shot video, fluid animation, 480p or 1080p HD quality."
        }
      ]
    }
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
// 清理滚动监听
onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>