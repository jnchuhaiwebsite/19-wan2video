<template>
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
    <!-- <section class="relative" id="generator">
      <Wan26Generator />
    </section> -->

    <!-- Why Wan 2.6 Matters -->
    <section class="relative">
      <Wan26WhyMatters />
    </section>


    <!-- Key Features & Advantages -->
    <section class="relative">
      <Wan26KeyFeatures />
    </section>

    <!-- Use Cases -->
    <section class="relative">
      <Wan26UseCases />
    </section>

    <!-- FAQ -->
    <section class="relative">
      <Wan26Faq />
    </section>

  </div>
</template>

<script setup lang="ts">
import Wan26HeroSection from '~/components/wan26/HeroSection.vue';
import Wan26WhyMatters from '~/components/wan26/WhyMatters.vue';
import Wan26Generator from '~/components/wan26/Generator.vue';
import Wan26KeyFeatures from '~/components/wan26/KeyFeatures.vue';
import Wan26UseCases from '~/components/wan26/UseCases.vue';
import Wan26Faq from '~/components/wan26/Faq.vue';
import { useHead } from 'nuxt/app';
import { useSeo } from '~/composables/useSeo';
useSeo({
  title: 'Wan 2.6 – Multi-Shot AI Video Model for 15s Storytelling',
  description: 'Explore Wan 2.6, an AI video model for multi-shot storytelling and 15s videos. Keep scene consistency, reuse video references, and create richer stories with ease.',
})

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
      "alternateName": "Wan 2.6", // 备选名（带空格品牌写法）
      "applicationSuite": "Wan 2.6", // 所属品牌套件
      "url": "https://www.wan2video.com/wan/wan-2-6", // 应用页面 URL
      "applicationCategory": [ "WebApplication", "MultimediaApplication" ], // 分类：Web/多媒体
      "operatingSystem": "Web Browser", // 运行环境：浏览器
      "applicationSubCategory": "AI Video Generation Tool", // 子类：AI 视频生成工具
      "image": "https://www.wan2video.com/wan-2-6.webp", // 展示图
      "inLanguage": "en-US", // 语言
      "brand": { // 品牌
        "@type": "Brand",
        "name": "Wan 2.6"
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
      "featureList": [ // 功能列表
        "Breakthrough Multimodal Architecture", // 突破性多模态架构
        "Multi-Shot Narrative Intelligence", // 多镜头叙事智能
        "5B & 14B Model Variants", // 5B和14B模型变体
        "Enhanced Quality & Longer Durations", // 增强质量和更长时长
        "Native Audio-Visual Synchronization", // 原生音视频同步
        "Audio-Driven Video Generation", // 音频驱动视频生成
        "Flexible Format Support", // 灵活格式支持
        "Full Commercial Rights" // 完整商业权利
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.wan2video.com/wan/wan-2-6#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Wan 2.6?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 is a next-generation multimodal AI platform for generating high-quality videos and images. It integrates text, images, audio, and video into one unified system, supporting text-to-video, image-to-video, and text-to-image creation. It produces 1080p videos at 24fps with native audio-visual synchronization and precise lip-sync."
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
          "name": "How does Wan 2.6 work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 functions as an advanced multimodal AI engine. Users enter natural language prompts and optionally upload images or audio. The system processes these inputs using the Wan 2.6 5B or 14B models to generate high-fidelity 1080p videos with native A/V sync, accurate lip-sync, and coherent motion across frames."
          }
        },
        {
          "@type": "Question",
          "name": "What are the key benefits of Wan 2.6?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key benefits include: Native audio-visual synchronization and precise lip-sync; Text-to-video, image-to-video, and text-to-image generation; Choice of 5B or 14B model variants; Multiple supported aspect ratios (16:9, 9:16, 1:1); Multilingual input support; Full commercial rights for all generated content."
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
          "name": "Who is Wan 2.6 designed for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 is made for content creators, marketers, educators, social media managers, filmmakers, and e-commerce brands. Example use cases: Marketing teams producing consistent, professional campaigns; Filmmakers prototyping scenes or building narrative sequences; Educators creating multilingual lessons; Social media creators generating daily short-form content; E-commerce brands producing product showcases."
          }
        },
        {
          "@type": "Question",
          "name": "What resolutions and aspect ratios does Wan 2.6 support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.6 supports 480p, 720p, and 1080p at 24fps. Available aspect ratios include 16:9 (landscape), 9:16 (vertical), and 1:1 (square)."
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

</script>

