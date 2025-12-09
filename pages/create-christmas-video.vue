<template>
  <main>
    <!-- PC 端组件 -->
      <CreateChristmasVideoPc class="pc-content" />
      <!-- <CreateChristmasVideoPc class="pc-content" /> -->

      <CreateChristmasVideoMobile class="mobile-content" />
  </main>
</template>
  
  
<script setup lang="ts">
import CreateChristmasVideoPc from '~/components/christmas/CreateChristmasVideoPc.vue'
import CreateChristmasVideoMobile from '~/components/christmas/CreateChristmasVideoMobile.vue'
import { useHead } from 'nuxt/app'    
    
// 设置使用圣诞布局（不包含 Footer）
// @ts-ignore: Nuxt macro function
definePageMeta({
  layout: 'christmas'
})

// 引入字体
useHead({
  title: 'Create Christmas Video',
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

.mobile-content {
  display: none;
}

/* PC 端：大于 1024px 的屏幕 */
@media (min-width: 1024px) {
  .pc-content {
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
  
