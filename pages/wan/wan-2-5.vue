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

    <!-- Process Steps -->
    <section class="relative">
      <Wan25ProcessSteps />
    </section>

    <!-- Video Showcase -->
    <section class="relative" id="showcase">
      <Wan25Showcase />
    </section>
    
    <!-- 分隔线装饰 -->

    <!-- Technical Specifications -->
    <section class="relative">
      <Wan25Specs />
    </section>

    <!-- Prompt Formulas -->
    <section class="relative">
      <Wan25PromptFormulas />
    </section>



    <!-- Use Cases -->
    <section class="relative">
      <Wan25UseCases />
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
import { ref } from 'vue';
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import Wan25Faq from '~/components/Wan25Faq.vue';
import Wan25Showcase from '~/components/Wan25Showcase.vue';
import Wan25Specs from '~/components/Wan25Specs.vue';
import Wan25PromptFormulas from '~/components/Wan25PromptFormulas.vue';
import Wan25Generator from '~/components/Wan25Generator.vue';
import Wan25UseCases from '~/components/Wan25UseCases.vue';
import Wan25HeroSection from '~/components/Wan25HeroSection.vue';
import Wan25ProcessSteps from '~/components/Wan25ProcessSteps.vue';

import { useHead } from 'nuxt/app';
import { useSeoMeta } from 'nuxt/app';
const baseUrl = 'https://www.wan2video.com/'
// SEO Meta
useSeoMeta({
  title: ' Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos',
  ogTitle: ' Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos',
  description: 'Wan 2.5 is an all-in-one AI video generation model that turns text, image, or audio into lip-synced HD videos. Perfect for creators, marketers, and storytellers.',
  ogDescription: 'Wan 2.5 is an all-in-one AI video generation model that turns text, image, or audio into lip-synced HD videos. Perfect for creators, marketers, and storytellers.',
  ogImage: baseUrl + '/wan-25-og-image.webp',
  ogUrl: baseUrl + 'wan-2-5-ai',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: ' Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos',
  twitterDescription: 'Wan 2.5 is an all-in-one AI video generation model that turns text, image, or audio into lip-synced HD videos. Perfect for creators, marketers, and storytellers.',
  twitterImage: baseUrl + '/wan-25-og-image.webp',
  twitterUrl: baseUrl + 'wan-2-5-ai',
  twitterType: 'summary_large_image',
  twitterSite: '@wan2video',
  canonical: baseUrl + 'wan-2-5-ai',
  canonicalUrl: baseUrl + 'wan-2-5-ai',
  other: [
    { rel: 'canonical', href: baseUrl + 'wan-2-5-ai' }
  ],
  link: [{ rel: 'canonical', href:  baseUrl + 'wan-2-5-ai' }]

})

const breadcrumbItems = ref([
  { text: 'Wan AI',},
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
// Page head
useHead({
  title: ' Wan 2.5: Audio-Driven Video Generator for Lip-Synced HD Videos',
  meta: [
    { name: 'description', content: 'Wan 2.5 is an all-in-one AI video generation model that turns text, image, or audio into lip-synced HD videos. Perfect for creators, marketers, and storytellers.' },
    { name: 'keywords', content: 'Wan 2.5, AI video generator, text-to-video, image-to-video, 1080p video, AI video creation' }
  ],
  link: [{ rel: 'canonical', href:  baseUrl + 'wan-2-5-ai' }]
})
</script>
