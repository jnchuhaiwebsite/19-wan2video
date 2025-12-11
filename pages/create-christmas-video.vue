<template>
  <main>
    <!-- PC 端组件 -->
      <CreateChristmasVideoPc class="pc-content" />
      <CreateChristmasVideoPc4K class="pc4K-content" />
      <!-- <CreateChristmasVideoPc class="pc-content" /> -->

      <ChristmasVideoMobile class="mobile-content" />
  </main>
</template>
  
  
<script setup lang="ts">
import CreateChristmasVideoPc from '~/components/christmas/CreateChristmasVideoPc.vue'
import ChristmasVideoMobile from '~/components/christmas/ChristmasVideoMobile.vue'
import CreateChristmasVideoPc4K from '~/components/christmas/CreateChristmasVideoPc4K.vue'
import { useHead } from 'nuxt/app'    
import { useSeo } from '~/composables/useSeo'
    
// 设置使用圣诞布局（不包含 Footer）
// @ts-ignore: Nuxt macro function
definePageMeta({
  layout: 'christmas'
})


useSeo({
  title: 'Christmas Video Maker & Personalized Christmas Greetings Ideas',
  description: 'Create personalized Christmas greeting videos with our Christmas video maker. Explore creative Christmas greetings and unique holiday video ideas for family and friends.'
})

// 引入字体
useHead({
  link: [
    { 
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400&display=swap' 
    }
  ]
})
</script>
  
<style scoped>
.pc-content {
  display: none;
}

.pc4K-content {
  display: none;
}

.mobile-content {
  display: none;
}

/* PC 端：大于 1024px 的屏幕 */
@media (min-width: 1024px) and (max-width: 2559px) {
  .pc-content {
    display: block;
  }
}

@media (min-width: 2560px) {
  .pc4K-content {
    display: block;
  }
}

/* 移动端：小于等于 1023px 的屏幕 */
@media (max-width: 1023px) {
  .mobile-content {
    display: block;
  }
}
</style>
  
