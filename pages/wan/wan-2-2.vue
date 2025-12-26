<template>
  <div class="min-h-screen bg-blue-pale">

    <main>
      <div class="">
    <Breadcrumbs 
    :nav-tabs="tabs" 
    :items="breadcrumbItems" />
  </div>
      <!-- 主功能区 -->
      <HeroSection />
      
      <!-- 操作步骤 -->
      <ProcessSteps />
      
      <!-- 核心优势 -->
      <CoreFeatures />

            
      <!-- 适用人群 -->
      <ForWhomSection />
      
      <!-- 模型案例展示 -->
      <ModelShowcase />
      
      <!-- 套餐价格 -->
      <PricingPlans />

      <!-- 常见问题 -->
      <FaqPreview />

    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useSeo } from '~/composables/useSeo'
import { useNuxtApp } from 'nuxt/app'
import { useNavigation } from '~/utils/navigation'
import { useHead } from 'nuxt/app';
// 导入组件
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import HeroSection from '~/components/HeroSection.vue'
import ProcessSteps from '~/components/ProcessSteps.vue'
import CoreFeatures from '~/components/CoreFeatures.vue'
import ModelShowcase from '~/components/ModelShowcase.vue'
import PricingPlans from '~/components/PricingPlans.vue'
import ForWhomSection from '~/components/ForWhomSection.vue'

const { $toast } = useNuxtApp() as any
const { handleScroll } = useNavigation()

// 使用默认的 SEO 配置
useSeo({
  title: 'Wan 2.2 Plus - Cinematic AI Video Generator',
  description: 'Generate AI videos with Wan 2.2 Plus. Cinematic visuals, realistic motion, prompt control—ideal for creators and marketers.'
})


const breadcrumbItems = ref([
  { text: 'Wan AI'},
  { text: 'Wan 2.2', to: '/wan/wan-2-2' },
]);

// 修改点 2 (可选，建议): 使用 ref 包裹，确保数据响应性一致
const tabs = ref([
  { 
    text: 'Wan 2.2', 
    to: '/wan/wan-2-2', 
    isActive: true 
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

const jsonLD ={
  "@context": "https://schema.org", // 使用 Schema.org 词汇表
  "@graph": [ // 页面包含多个实体
    {
      "@type": "WebPage", // 当前二级页的网页实体
      "@id": "https://www.wan2video.com/wan/wan-2-2#webpage", // WebPage 唯一 ID
      "url": "https://www.wan2video.com/wan/wan-2-2", // 页面 URL
      "name": "Wan 2.2 – Multi-Shot AI Video Model for 15s Storytelling", // 页面标题
      "isPartOf": { // 归属网站
        "@id": "https://www.wan2video.com/#website" // 指向 WebSite
      },
      "about": { // 页面主题对象
        "@id": "https://www.wan2video.com/wan/wan-2-2" // 指向本页的 SoftwareApplication
      }
    },
    {
      "@type": "BreadcrumbList", // 面包屑
      "@id": "https://www.wan2video.com/wan/wan-2-2#breadcrumbs", // 面包屑 ID
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
            "@id": "https://www.wan2video.com/wan/wan-2-2", // 本页 URL
            "name": "Wan 2.2" // 本页名称
          }
        }
      ]
    },
    {
      "@type": "SoftwareApplication", // 应用实体（产品页）
      "@id": "https://www.wan2video.com/wan/wan-2-2#wan-2-2-app", // 应用唯一 ID
      "name": "Wan 2.2 Plus - Cinematic AI Video Generator", // 应用完整名称（无空格关键词主打）
      "url": "https://www.wan2video.com/wan/wan-2-2", // 应用页面 URL
      "applicationCategory": "MultimediaApplication", // 分类：Web/多媒体
      "operatingSystem": "Web Browser", // 运行环境：浏览器
      "image": "https://www.wan2video.com/wan-2-2.webp", // 展示图
      "inLanguage": "en-US", // 语言
      "brand": { // 品牌
        "@type": "Brand",
        "name": "Wan AI",
        "@id": "https://www.wan2video.com/wan/wan-2-2#brand"
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
      "@id": "https://www.wan2video.com/wan/wan-2-2#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Wan 2.2 Plus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wan 2.2 Plus is a state-of-the-art AI video generation platform designed for creators who demand high quality and precision. It excels at transforming simple text prompts into stunning, cinematic videos with three key advantages: Cinematic Visuals - It understands filmmaking language, allowing you to control camera angles, lighting, and shots for a professional look. Fluid Motion - Our model produces incredibly smooth and realistic character and object movements, free from the jitter seen in other tools. Semantic Accuracy - It precisely interprets complex prompts, ensuring the final video faithfully represents your creative vision."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to generate a video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our platform is optimized for speed, but generation time depends on the selected quality. Standard Quality (480p) typically takes about 1 minute to generate. High Quality (1080p) typically takes about 2 minutes to generate. Please note that these times can vary slightly depending on server traffic and the complexity of your prompt."
          }
        },
        {
          "@type": "Question",
          "name": "Can I try the Wan 2.2 Plus AI Video Generator for free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We believe in letting you experience the power of Wan 2.2 Plus firsthand. Every new user who signs up receives 20 free credits. This is typically enough to generate one 480p video, allowing you to test the platform and see the quality of the results for yourself. No credit card is required to get started."
          }
        },
        {
          "@type": "Question",
          "name": "Do the credits I receive or purchase have an expiration date?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, your credits are yours to keep. Any credits you receive upon signing up or purchase from a credit pack are permanently valid and will never expire. You can use them whenever your creativity strikes, whether it's today or a year from now."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use videos made with Wan 2.2 Plus AI Video Generator for commercial projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We believe in empowering every creator. All videos you generate on the Wan 2.2 Plus platform, including those made with free trial credits, come with a full commercial license. This means you are free to use your creations for any purpose, such as: Marketing campaigns and online advertisements, Social media content for business accounts, Client projects and presentations, Monetized content on platforms like YouTube or TikTok. Our goal is to provide you with complete creative and commercial freedom."
          }
        }
      ]
    },
    {
      "@type": "HowTo", // 使用说明模块（同步 ProcessSteps 组件）
      "@id": "https://www.wan2video.com/wan/wan-2-2#how-to-use",
      "name": "How Wan 2.2 Plus Works",
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