<template>
  <div class="flex flex-col min-h-screen justify-between">
    <Navbar/>
    <slot />
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Navbar from '~/components/Navbar.vue'

const Footer = defineAsyncComponent(() => import('~/components/Footer.vue'))
const BackToTop = defineAsyncComponent(() => import('~/components/BackToTop.vue'))
import { useHead } from 'nuxt/app';

const jsonLD ={
  "@context": "https://schema.org", // 使用 Schema.org 词汇表
  "@graph": [ // 页面包含多个实体

  {
      "@type": "Organization",
      "@id": "https://www.wan2video.com/#organization",
      "name": "Wan AI",
      "url": "https://www.wan2video.com/",
      "description": "Leading AI video generation platform",
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
      "name": "Wan AI",
      "url": "https://www.wan2video.com/",
      "inLanguage": "en-US",
      "description": "Leading AI video generation platform",
      "publisher": {
        "@id": "https://www.wan2video.com/#organization"
      }
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