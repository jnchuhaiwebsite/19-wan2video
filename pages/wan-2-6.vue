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
import Wan26KeyFeatures from '~/components/wan26/KeyFeatures.vue';
import Wan26UseCases from '~/components/wan26/UseCases.vue';
import Wan26Faq from '~/components/wan26/Faq.vue';

import { useSeo } from '~/composables/useSeo';
useSeo({
  title: 'Wan 2.6 — AI Video Generator for Multi-Shot Storytelling',
  description: 'Create 1080p videos with Wan 2.6, a next-gen AI video generator built for multi-shot storytelling, cinematic quality, and consistent character performance.',
})
</script>

