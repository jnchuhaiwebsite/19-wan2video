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
  title: ' Wan 2.6 – Multi-Shot AI Video Generation with Audio Sync',
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