<template>
  <div>
    <!-- Hero Section -->
    <Wan25HeroSection />
    
    <!-- Video Showcase -->
    <Wan25Showcase />
    
    <!-- Technical Specifications -->
    <Wan25Specs />

  <!-- Use Cases -->
  <Wan25UseCases />
    <!-- FAQ Section -->
    <Wan25Faq />
    

  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { useSeoMeta } from 'nuxt/app';
// SEO Meta
useSeoMeta({
  title: 'Wan 2.5 – AI Image to Video Generator with Motion Control',
  ogTitle: 'Wan 2.5 – AI Image to Video Generator with Motion Control',
  description: 'Turn static images into dynamic HD videos with Wan 2.5. Experience AI-powered motion control, seamless style transformation, and easy video creation.',
  ogDescription: 'Turn static images into dynamic HD videos with Wan 2.5. Experience AI-powered motion control, seamless style transformation, and easy video creation.',
  ogImage: '/wan2.5-og-image.webp',
  twitterCard: 'summary_large_image',
})

// Page head
useHead({
  title: 'Wan 2.5 – AI Image to Video Generator with Motion Control',
  meta: [
    { name: 'description', content: 'Turn static images into dynamic HD videos with Wan 2.5. Experience AI-powered motion control, seamless style transformation, and easy video creation.' },
    { name: 'keywords', content: 'Wan 2.5, AI video generator, text-to-video, image-to-video, 1080p video, AI video creation' }
  ]
})
</script>
