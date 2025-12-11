<template>
  <div
    style="
      position: relative;
      width: 100%;
      min-height: 100vh;
      /* overflow-x: hidden; */
      font-family: 'Lato', sans-serif;
      color: white;
    "
  >
    <!-- 背景图：窗外的景色 -->
    <img
      :src="assets.bg"
      alt="Background"
      style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -3;
      "
    />

    <!-- 全屏透明玻璃层（关键） -->
    <div
      style="
        position: fixed;
        inset: 0;
        z-index: -2;
        background: rgba(255, 255, 255, 0.02);
        background-image:
          linear-gradient(
            to bottom,
            rgba(255,255,255,0.15) 0%,
            rgba(255,255,255,0.03) 20%,
            rgba(255,255,255,0) 40%
          ),
          linear-gradient(
            to top,
            rgba(255,255,255,0.08) 0%,
            rgba(255,255,255,0) 30%
          );
        box-shadow:
          inset 0 0 107px rgba(0, 0, 0, 0.25),
          inset 0 8px 27px rgba(255,255,255,0.15);
        border: 1.33px solid rgba(255,255,255,0.25);
      "
    ></div>

    <!-- 页面内容：贴在玻璃外侧 -->
    <div
      style="
        position: relative;
        z-index: 1;
        max-width: 1470px;
        margin: 0 auto;
        padding: 200px 27px 53px;
        text-align: center;
      "
    >
      <h1
        class="main-title"
        style="
          font-family: 'Playfair Display', serif;
          font-size: 4.5rem;
          letter-spacing: 1.3px;
          margin-bottom: 48px;
          text-shadow: 0 5px 16px rgba(0,0,0,0.55);
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          white-space: nowrap;
        "
      >
        Christmas Video Greetings Ideas
      </h1>

      <p
        style="
          font-size: 1.5rem;
          opacity: 0.95;
          line-height: 1.7;
          margin-bottom: 56px;
          text-shadow: 0 3px 8px rgba(0,0,0,0.55);
          margin-left: auto;
          margin-right: auto;
        "
      >
        <span style="display: block; max-width: 870px; margin: 0 auto; font-size: 1.75rem;"
          >Upload your photo, and let Santa do the magic! A free,</span
        >
        <span style="display: block; max-width: 600px; margin: 0 auto; font-size: 1.7rem;"
          >personalized video is just one click away</span
        >
      </p>
    </div>

    <!-- 制作表单组件 -->
    <ChristmasVideoForm4K ref="formRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import ChristmasVideoForm4K from './ChristmasVideoForm4K.vue'

// 资源配置
const assets = {
  bg: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-background.jpg'
}

const formRef = ref<InstanceType<typeof ChristmasVideoForm4K> | null>(null)

// 默认选择第一个模版
onMounted(() => {
  nextTick(() => {
    if (formRef.value && formRef.value.templates && formRef.value.templates.length > 0) {
      formRef.value.handleSelectTemplate(formRef.value.templates[0])
    }
  })
})
</script>

<style scoped>
</style>

