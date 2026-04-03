<template>
  <div>
    <div class="">
      <Breadcrumbs 
        :nav-tabs="tabs" 
        :items="breadcrumbItems" 
      />
    </div>
    <div class="relative">
      <!-- 背景装饰，与 2.5/2.6 保持一致风格 -->
      <div class="fixed inset-0 -z-10 overflow-hidden">
        <div class="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-60 -right-40 w-96 h-96 bg-gradient-to-bl from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-tr from-blue-100/15 to-cyan-100/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <!-- Hero -->
      <section class="relative">
        <Wan27HeroSection />
      </section>

      <!-- Generator -->
      <section class="relative">
        <Wan27Generator />
      </section>

      <!-- What Is -->
      <section class="relative">
        <Wan27WhatIs />
      </section>

      <!-- How to Use -->
      <section class="relative">
        <Wan27HowToUse />
      </section>

      <!-- Showcase -->
      <section class="relative">
        <Wan27Showcase />
      </section>

      <!-- Key Features -->
      <section class="relative">
        <Wan27KeyFeatures />
      </section>

      <!-- Why Choose -->
      <section class="relative">
        <Wan27WhyChoose />
      </section>

      <!-- Wall of Love -->
      <section class="relative">
        <Wan27WallOfLove />
      </section>

      <!-- Technical Breakthroughs -->
      <section class="relative">
        <Wan27TechnicalBreakthroughs />
      </section>

      <!-- FAQ -->
      <section class="relative">
        <Wan27Faq />
      </section>

      <!-- CTA -->
      <section class="relative">
        <Wan27Cta />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Wan27HeroSection from '~/components/wan27/HeroSection.vue'
import Wan27Generator from '~/components/wan27/Generator.vue'
import Wan27WhatIs from '~/components/wan27/WhatIs.vue'
import Wan27HowToUse from '~/components/wan27/HowToUse.vue'
import Wan27Showcase from '~/components/wan27/Showcase.vue'
import Wan27KeyFeatures from '~/components/wan27/KeyFeatures.vue'
import Wan27WhyChoose from '~/components/wan27/WhyChoose.vue'
import Wan27WallOfLove from '~/components/wan27/WallOfLove.vue'
import Wan27TechnicalBreakthroughs from '~/components/wan27/TechnicalBreakthroughs.vue'
import Wan27Faq from '~/components/wan27/Faq.vue'
import Wan27Cta from '~/components/wan27/Cta.vue'
import { useHead } from 'nuxt/app'
import { useSeo } from '~/composables/useSeo'

const breadcrumbItems = ref([
  { text: 'Wan AI', to: '/wan' },
  { text: 'Wan 2.7', to: '/wan/wan-2-7' },
])

const tabs = ref([
  {
    text: 'Wan 2.2',
    to: '/wan/wan-2-2',
    isActive: false,
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
  },
  {
    text: 'Wan 2.7',
    to: '/wan/wan-2-7',
    isActive: true,
    badge: 'New',
  },
])

useSeo({
  title: 'Wan 2.7 AI Video Generator – Create Cinematic 4K Videos',
  description:
    'Create cinematic 4K multi-shot videos in seconds with Wan 2.7 AI Video Generator. Turn text, images, and clips into professional videos with perfect audio sync. Try now!',
})

const jsonLD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.wan2video.com/wan/wan-2-7#webpage',
      url: 'https://www.wan2video.com/wan/wan-2-7',
      name: 'Wan 2.7 AI Video Generator – Create Cinematic 4K Videos',
      isPartOf: {
        '@id': 'https://www.wan2video.com/#website',
      },
      about: { '@id': 'https://www.wan2video.com/#organization' },
      mainEntity: {
        '@id': 'https://www.wan2video.com/wan/wan-2-7#wan-2-7-app',
      },
      breadcrumb: {
        '@id': 'https://www.wan2video.com/wan/wan-2-7#breadcrumbs',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.wan2video.com/wan/wan-2-7#breadcrumbs',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.wan2video.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Wan AI',
          item: 'https://www.wan2video.com/wan',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Wan 2.7',
          item: 'https://www.wan2video.com/wan/wan-2-7',
        },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.wan2video.com/wan/wan-2-7#wan-2-7-app',
      name: 'Wan 2.7 AI Video Generator',
      url: 'https://www.wan2video.com/wan/wan-2-7',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web Browser',
      image: 'https://www.wan2video.com/wan-2-7.webp',
      inLanguage: 'en-US',
      brand: {
        '@type': 'Brand',
        name: 'Wan AI',
        '@id': 'https://www.wan2video.com/wan/wan-2-7#brand',
      },
      publisher: {
        '@id': 'https://www.wan2video.com/#organization',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/OnlineOnly',
        price: '10',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '10',
          priceCurrency: 'USD',
          valueAddedTaxIncluded: false,
        },
      },
      featureList: [
        'Cinematic 4K quality with 60FPS fluidity',
        'Multi-shot sequences (20–30s) with character consistency',
        'AI-powered Director Mode for camera, motion, and lighting',
        'Text-to-video and image-to-video workflows',
        'Seamless audio synchronization',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.wan2video.com/wan/wan-2-7#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Wan 2.7 AI Video Generator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An AI tool that transforms text and images into high-quality cinematic content with precise visual and audio control.',
          },
        },
        {
          '@type': 'Question',
          name: 'What features does it have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It offers text-to-video, image-to-video, 4K rendering, and seamless audio synchronization.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kinds of videos can I generate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cinematic trailers, product demos, social media clips, and complex multi-shot sequences.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need professional skills?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, the interface is intuitive and allows anyone to generate professional videos by providing simple instructions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to generate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Short clips take minutes; complex 4K videos may take longer depending on server load.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I lose credits if generation fails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, credits are automatically refunded if the generation process fails.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use videos for commercial purposes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, generated videos come with full commercial rights for marketing and business use.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my data be used for training?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, your prompts and assets are used only for your specific generation task.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A free trial with limited credits is available upon registration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer refunds?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, refunds are available if less than 10% of credits are used within 7 days of purchase.',
          },
        },
      ],
    },
  ],
}

onMounted(() => {
  const scrollToAnchor = () => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1)

      let attempts = 0
      const maxAttempts = 30

      const interval = setInterval(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          clearInterval(interval)
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - offset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        } else {
          attempts++
          if (attempts > maxAttempts) {
            clearInterval(interval)
            console.warn(`无法找到ID为 '${sectionId}' 的元素`)
          }
        }
      }, 100)
    }
  }
  scrollToAnchor()
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLD),
    },
  ],
})
</script>

