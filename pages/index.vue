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
const jsonLD ={
  "@context": "https://schema.org", // 使用 Schema.org 词汇表
  "@graph": [ // 同页多实体，以图谱形式组织
    {
      "@type": "WebSite", // 网站实体
      "@id": "https://www.wan2video.com/#website", // WebSite 唯一 ID（供内部互相引用）
      "name": "Wan 2.6 AI", // 网站名称（品牌主名）
      "url": "https://www.wan2video.com/", // 网站首页 URL
      "inLanguage": "en-US", // 站点主语言
      "description": "Wan 2.6 enables cinematic AI video generation with multi-shot storytelling, stable characters, and natural audio-visual sync in up to 1080P quality. Try it today.", // 网站简述（有助 SEO 摘要）
    },
    {
      "@type": "Organization", // 组织实体（品牌主体）
      "@id": "https://www.wan2video.com/#organization", // 组织唯一 ID
      "name": "Wan 2.6 AI", // 组织名称（品牌名）
      "url": "https://www.wan2video.com/", // 品牌官网
      "logo": { // 品牌 Logo
        "@type": "ImageObject", // 图片对象
        "url": "https://www.wan2video.com/logo.png" // Logo 地址
      },
      "contactPoint": { // 联系方式
        "@type": "ContactPoint", // 联系点类型
        "email": "support@wan2video.com", // 客服邮箱
        "contactType": "customer support", // 联系类型：客服
        "availableLanguage": "en" // 支持语言：英文
      }
    },
    {
      "@type": "WebPage", // 当前页面（首页）的网页实体
      "@id": "https://www.wan2video.com/#webpage", // WebPage 唯一 ID
      "url": "https://www.wan2video.com/", // 页面 URL
      "name": "Wan 2.6 – Multi-Shot AI Video Generation with Audio Sync", // 页面标题
      "isPartOf": { // 归属关系
        "@id": "https://www.wan2video.com/#website" // 属于本网站
      },
      "primaryImageOfPage": { // 页面主要图片
        "@type": "ImageObject", // 图片对象
        "url": "https://www.wan2video.com/wan-ai.webp" // 首页主视觉
      },
      "about": { // 页面主题对象
        "@id": "https://www.wan2video.com/#app" // 指向首页 SoftwareApplication
      }
    },
    {
      "@type": "SoftwareApplication", // 应用实体（首页版本）
      "@id": "https://www.wan2video.com/#app", // 应用唯一 ID
      "name": "Wan 2.6 AI", // 应用名称（带空格版本，匹配首页品牌）
      "alternateName": "Wan 2.6 AI", // 备选名（无空格关键词，用于覆盖搜索变体）

      "url": "https://www.wan2video.com/", // 应用入口（首页）
      "applicationCategory": "MultimediaApplication", // 应用类别：Web 应用
      "operatingSystem": "Web", // 运行环境：浏览器
      "image": "https://www.wan2video.com/seedance.webp", // 应用展示图
      "inLanguage": "en-US", // 应用默认语言
      "brand": { // 品牌对象
        "@type": "Brand", // 品牌类型
        "name": "Wan 2.6 AI" // 品牌名称
      },
      "publisher": { // 发布方（组织）
        "@id": "https://www.wan2video.com/#organization" // 关联 Organization
      },
      "offers": { // 售卖信息
        "@type": "Offer", // Offer 类型
        "availability": "https://schema.org/OnlineOnly", // 在线售卖
        "price": "10", // 起价（首个套餐）
        "priceCurrency": "USD" // 货币：美元
      },

      "featureList": [ // 功能要点列表（基于Wan26Generator组件实现的功能）
          "Text-to-video generation with natural language prompts (English and Chinese supported)",
          "Image-to-video generation from uploaded first frame images",
          "Reference-to-video generation with video reference inputs (supports up to 2 reference videos)",
          "Multi-shot video generation with structured narrative sequences",
          "Inspiration Mode for more exploratory and creative interpretations",
          "Multiple resolution options: 720P and 1080P HD quality",
          "Flexible video duration: 5-second, 10-second, and 15-second clips",
          "Multiple aspect ratio support: 16:9, 9:16, 1:1, 4:3, and 3:4 formats",
          "Synchronized audio-visual generation with natural lip-sync",
          "Consistent character identity across multi-shot sequences",
          "Support for JPEG, JPG, PNG, BMP, WEBP image formats",
          "Support for MP4, MOV video formats (2-30 seconds, max 30MB)",
          "Cloud-based processing - no powerful PC required",
          "Real-time task status polling and video preview",
          "Full commercial rights for all generated content"
      ]
    },
    {
      "@type": "BreadcrumbList", // 面包屑（首页仅一层）
      "@id": "https://www.wan2video.com/#breadcrumbs", // 面包屑 ID
      "itemListElement": [ // 面包屑条目
        {
          "@type": "ListItem", // 列表项
          "position": 1, // 第 1 层
          "name": "Home", // 名称
          "item": "https://www.wan2video.com/" // URL
        }
      ]
    },
    {
      "@type": "HowTo", // 使用教程（基于HowWan26Works组件内容）
      "@id": "https://www.wan2video.com/#operation-steps", // 教程 ID
      "name": "How to Use Wan 2.6 AI", // 教程名称
      "description": "Create stunning videos with Wan2.6 in just three simple steps. Learn how to use Wan2.6 by selecting between text-to-video or image-to-video generation with Wan2.6 Pro AI based on your creative needs.", // 简介（基于HowWan26Works组件的描述）
      "step": [ // 步骤数组（基于HowWan26Works组件的三个步骤）
        {
          "@type": "HowToStep", // 步骤
          "name": "Choose Your Creation Mode with Wan2.6", // 步骤名（与组件一致）
          "text": "Learn how to use Wan2.6 by selecting between text-to-video or image-to-video generation with Wan2.6 Pro AI based on your creative needs. You can also choose reference-to-video mode to generate videos by referencing input videos, images, or characters." // 描述（基于组件内容）
        },
        {
          "@type": "HowToStep", // 步骤
          "name": "Input Your Wan2.6 Prompt", // 步骤名（与组件一致）
          "text": "In this Wan2.6 Getting Started step, enter detailed text prompts or upload reference images to guide the Wan2.6 video generation process. Describe the scene, motion, camera, and style you want. You can enable Inspiration Mode for more exploratory interpretation and Multi-Shot for structured narrative sequences." // 描述（基于组件内容）
        },
        {
          "@type": "HowToStep", // 步骤
          "name": "Generate & Download with Wan2.6", // 步骤名（与组件一致）
          "text": "Complete your how to use Wan2.6 journey by clicking generate and let Wan2.6 Pro AI work its magic to create your stunning professional video, then download your masterpiece. The video will be generated in up to 1080P quality with synchronized audio-visual output." // 描述（基于组件内容）
        }
      ]
    },
    {
      "@type": "FAQPage", // FAQ 页面实体（基于Wan26Faq组件内容）
      "@id": "https://www.wan2video.com/#faq", // FAQ 唯一 ID
      "mainEntity": [ // 问答数组（基于components/home/Wan26Faq.vue中的10个FAQ）
        {
          "@type": "Question", // 问题
          "name": "What is Wan 2.6 used for?", // 问题标题
          "acceptedAnswer": { // 答案
            "@type": "Answer",
            "text": "Wan 2.6 is used to generate AI videos with clearer storytelling, stable characters, and synchronized audio, making it suitable for narrative and character-driven content." // 答案内容
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
        },
        {
          "@type": "Question",
          "name": "Is audio generated together with the video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wan 2.6 generates audio and visuals together, which reduces synchronization issues and removes the need for separate audio editing tools."
          }
        },
        {
          "@type": "Question",
          "name": "Are credits deducted if a generation fails?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Credits are only deducted after a successful generation. Failed or interrupted generations are not charged."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Wan 2.6 videos for commercial projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Videos generated using paid credits can be used for commercial purposes, including marketing, social media, and creative projects."
          }
        },
        {
          "@type": "Question",
          "name": "Do purchased credits expire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Purchased credits do not expire and remain available until they are used."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need editing experience to use Wan 2.6?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Wan 2.6 is designed to reduce manual editing by generating more complete videos directly from prompts and references."
          }
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