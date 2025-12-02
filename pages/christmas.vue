<template>
    <div
      style="
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
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
  
          /* 完全透明，不磨砂 */
          background: rgba(255, 255, 255, 0.02);
  
          /* 玻璃的“高光反射”效果 */
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
  
          /* 非常微弱的内阴影，让玻璃更真实 */
          box-shadow:
            inset 0 0 80px rgba(0, 0, 0, 0.25),
            inset 0 6px 20px rgba(255,255,255,0.15);
  
          /* 玻璃边缘细线 */
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
          padding: 150px 20px 120px;
          text-align: center;
        "
      >
        <h1
          style="
            font-family: 'Playfair Display', serif;
            font-size: 3.4rem;
            margin-bottom: 18px;
            text-shadow: 0 4px 12px rgba(0,0,0,0.55);
          "
        >
          Christmas Greeting Video Ideas
        </h1>
  
        <p
          style="
            font-size: 1.1rem;
            opacity: 0.95;
            line-height: 1.7;
            margin-bottom: 42px;
            text-shadow: 0 2px 6px rgba(0,0,0,0.55);
          "
        >
          Upload your photo, and let Santa do the magic! A free,<br />
          personalized video is just one click away
        </p>
  
        <!-- CTA 按钮 -->
        <a
          href="#"
          class="cta-btn"
          style="
            display: inline-block;
            padding: 14px 48px;
            border-radius: 999px;
            background: linear-gradient(135deg, #9b3a35, #b8544a, #9b3a35);
            border: 1px solid rgba(255,255,255,0.25);
            color: white;
            font-size: 1.05rem;
            letter-spacing: 0.5px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.45);
            transition: all 0.25s ease;
            margin-bottom: 30px;
          "
        >
          Create the same video
        </a>
  
        <!-- 三个视频 -->
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 28px;
            flex-wrap: wrap;
          "
        >
          <!-- 左 (3:4) -->
          <div
            style="
              width: 260px;
              aspect-ratio: 3/4;
              border-radius: 10px;
              overflow: hidden;
              background: black;
              box-shadow: 0 18px 40px rgba(0,0,0,0.55);
            "
          >
            <video autoplay loop muted playsinline controls style="width:100%;height:100%;object-fit:cover;">
              <source :src="assets.videoLeft" type="video/mp4" />
            </video>
          </div>
  
          <!-- 中 (16:9) -->
          <div
            style="
              width: 480px;
              aspect-ratio: 16/9;
              border-radius: 14px;
              overflow: hidden;
              background: black;
              border: 1px solid rgba(255,255,255,0.25);
              box-shadow: 0 22px 60px rgba(0,0,0,0.65);
            "
          >
            <video autoplay loop muted playsinline controls style="width:100%;height:100%;object-fit:cover;">
              <source :src="assets.videoMiddle" type="video/mp4" />
            </video>
          </div>
  
          <!-- 右 (9:16) -->
          <div
            style="
              width: 220px;
              aspect-ratio: 9/16;
              border-radius: 10px;
              overflow: hidden;
              background: black;
              box-shadow: 0 18px 40px rgba(0,0,0,0.55);
            "
          >
            <video autoplay loop muted playsinline controls style="width:100%;height:100%;object-fit:cover;">
              <source :src="assets.videoRight" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { useHead } from 'nuxt/app'
  // 引入字体
  useHead({
    title: 'Christmas Greeting Video Ideas',
    link: [
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400&display=swap' 
      }
    ]
  })
  
  // 资源配置
  const assets = {
    bg: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-background.jpg',
    videoLeft: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-home-left.mp4',
    videoMiddle: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-home-middle.mp4',
    videoRight: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-home-right.mp4'
  }
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
  }
  /* 简单的响应式调整：当屏幕小于768px时调整标题大小 */
  @media (max-width: 768px) {
    h1 { font-size: 2.5rem !important; }
  }
  </style>
  