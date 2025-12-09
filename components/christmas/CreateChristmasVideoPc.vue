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
          inset 0 0 80px rgba(0, 0, 0, 0.25),
          inset 0 6px 20px rgba(255,255,255,0.15);
        border: 1px solid rgba(255,255,255,0.25);
      "
    ></div>

    <!-- 页面内容：贴在玻璃外侧 -->
    <div
      style="
        position: relative;
        z-index: 1;
        max-width: 1100px;
        margin: 0 auto;
        padding: 150px 20px 40px;
        text-align: center;
      "
    >
      <h1
        style="
          font-family: 'Playfair Display', serif;
          font-size: 3.4rem;
          margin-bottom: 18px;
          text-shadow: 0 4px 12px rgba(0,0,0,0.55);
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        "
      >
        Christmas Video Greetings Ideas
      </h1>

      <p
        style="
          font-size: 1.1rem;
          opacity: 0.95;
          line-height: 1.7;
          margin-bottom: 42px;
          text-shadow: 0 2px 6px rgba(0,0,0,0.55);
          margin-left: auto;
          margin-right: auto;
        "
      >
        <span style="display: block; max-width: 650px; margin: 0 auto; font-size: 1.3rem;"
          >Upload your photo, and let Santa do the magic! A free,</span
        >
        <span style="display: block; max-width: 450px; margin: 0 auto; font-size: 1.25rem;"
          >personalized video is just one click away</span
        >
      </p>
    </div>

    <!-- 制作表单组件 -->
    <ChristmasVideoForm />
  </div>
</template>

<script setup lang="ts">
import ChristmasVideoForm from './ChristmasVideoForm.vue'

// 资源配置
const assets = {
  bg: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-background.jpg'
}
</script>

