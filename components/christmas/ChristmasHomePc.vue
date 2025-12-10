<template>
  <div
    class="main-container"
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
      class="content-container"
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
          margin-bottom: 36px;
          letter-spacing: 1px;
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
        <span style="display: block; max-width: 650px; margin: 0 auto; font-size: 1.3rem;">Upload your photo, and let Santa do the magic! A free,</span>
        <span style="display: block; max-width: 450px; margin: 0 auto; font-size: 1.25rem;">personalized video is just one click away</span>
      </p>

      <!-- 三个视频包裹按钮 -->
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 28px;
          flex-wrap: wrap;
          position: relative;
        "
      >
        <!-- 左 (3:4) -->
        <div
          style="
            width: 260px;
            aspect-ratio: 3/4;
            overflow: hidden;
            background: black;
            box-shadow: 0 18px 40px rgba(0,0,0,0.55);
          "
        >
          <video autoplay loop muted playsinline controls style="width:100%;height:100%;object-fit:cover;">
            <source :src="assets.videoLeft" type="video/mp4" />
          </video>
        </div>

        <!-- 中 (16:9) - 按钮在上，视频在下 -->
        <div
          style="
            width: 480px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
          "
        >
          <!-- CTA 按钮 -->
          <a
            href="/create-christmas-video"
            class="cta-btn"
            style="
              display: inline-block;
              padding: 10px 32px;
              border-radius: 999px;
              background: linear-gradient(to bottom, #ff6b6b, #c0392b);
              border: 1px solid rgba(255,255,255,0.3);
              color: white;
              font-size: 0.9rem;
              font-weight: 600;
              letter-spacing: 0.3px;
              box-shadow: 0 3px 10px rgba(220, 20, 60, 0.3),
                          0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                          0 0 10px rgba(255, 75, 75, 0.4);
              transition: all 0.3s ease;
              text-decoration: none;
              position: relative;
              overflow: hidden;
            "
          >
            <span style="display: inline-flex; align-items: center; gap: 6px;">
              ✨ Create My Magic Video
            </span>
          </a>
          
          <!-- 中间视频 -->
          <div
            style="
              width: 100%;
              aspect-ratio: 16/9;
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
        </div>

        <!-- 右 (9:16) -->
        <div
          style="
            width: 220px;
            aspect-ratio: 9/16;
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
// 资源配置
const assets = {
  bg: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-background.jpg',
  videoLeft: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-home-left.mp4',
  videoMiddle: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-home-middle.mp4',
  videoRight: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-home-right.mp4'
}
</script>

<style scoped>
.cta-btn {
  position: relative;
}

.cta-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.cta-btn:hover::before {
  left: 100%;
}

.cta-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 20px rgba(220, 20, 60, 0.6),
              0 0 0 2px rgba(255, 255, 255, 0.15) inset,
              0 0 20px rgba(255, 75, 75, 0.8);
  filter: brightness(1.1);
}

/* 2K分辨率 (2560px及以上) - 放大1倍 (scale 2) */
@media (min-width: 2560px) and (max-width: 3839px) {
  .main-container {
    min-height: 200vh; /* 为缩放后的内容提供空间 */
  }
  
  .content-container {
    transform: scale(2);
    transform-origin: center top;
  }
}

/* 4K分辨率 (3840px及以上) - 放大2倍 (scale 3) */
@media (min-width: 3840px) {
  .main-container {
    min-height: 300vh; /* 为缩放后的内容提供空间 */
  }
  
  .content-container {
    transform: scale(3);
    transform-origin: center top;
  }
}
</style>

