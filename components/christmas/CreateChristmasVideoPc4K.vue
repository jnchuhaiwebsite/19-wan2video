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
        Merry Christmas AI video Maker
      </h1>

<!-- 去掉了内部的 span，结构更干净，样式由 class 控制 -->
<p class="hero-desc-4k">
  Create Christmas videos in minutes with AI. Just pick a template and click to generate, let <strong>Wan2Video</strong> handle the scenes, media, voiceovers, and sound effects. Instantly delivers free Christmas video clips with music.
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
  /* --- 基础样式 (默认适配 1080P 及笔记本) --- */
.hero-desc-4k {
  /* 布局与间距 */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 42px;
  
  /* 1080P 下的黄金尺寸 */
  max-width: 650px;       /* 您原本的宽度，在1080P上很合适 */
  font-size: 1.25rem;     /* 综合了您原本 p 和 span 的大小 (约 20px) */
  line-height: 1.7;       /* 保持良好的行间距 */
  
  /* 视觉效果 */
  color: #ffffff;         /* 确保文字是白色的 */
  opacity: 0.95;
  text-align: center;     /* 确保文字居中对齐 */
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.65); /* 稍微加重一点阴影，防背景干扰 */
}

/* 重点词高亮 (可选，让 wan2video 更显眼) */
.hero-desc-4k strong {
  font-weight: 600;
  color: #fff;            /* 或者改成淡金色 #ffeebb */
}

/* --- 2K 屏幕适配 (宽度大于 1920px) --- */
@media screen and (min-width: 2561px) {
    .hero-desc-4k {
      font-size: 2.2rem;    /* 放大到约 35px */
      max-width: 1300px;    /* 显著放宽 */
      line-height: 1.8;
      margin-bottom: 90px;
      text-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
    }
  }
</style>

