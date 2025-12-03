<template>
  <div
    style="
      position: relative;
      width: 100%;
      min-height: 100vh;
      overflow-x: hidden;
      font-family: 'Lato', sans-serif;
      color: white;
      padding-bottom: 100px;
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

    <!-- 页面内容：表单部分 -->
    <div
      style="
        position: relative;
        z-index: 1;
        width: 100%;
        padding: 100px 16px 20px;
      "
    >
      <!-- 使用表单组件，隐藏右侧预览 -->
      <div class="mobile-form-container">
        <ChristmasVideoForm />
      </div>
    </div>

    <!-- 悬浮在底部的生成按钮 -->
    <div
      style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 50;
        padding: 16px;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        backdrop-filter: blur(10px);
      "
    >
      <button
        ref="generateButton"
        class="w-full px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
        :style="{ backgroundColor: '#B41F21', color: 'white' }"
        @click="handleGenerate"
      >
        <!-- 左侧星星图标 -->
        <svg
          class="w-5 h-5 text-yellow-300 drop-shadow"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.037a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 14.347a1 1 0 00-1.175 0l-2.87 2.147c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.82 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.229-3.293z"
          />
        </svg>

        <span>Create Magic Video</span>

        <!-- 右侧星星图标 -->
        <svg
          class="w-5 h-5 text-yellow-300 drop-shadow"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.037a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 14.347a1 1 0 00-1.175 0l-2.87 2.147c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.82 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.229-3.293z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import ChristmasVideoForm from './ChristmasVideoForm.vue'

// 资源配置
const assets = {
  bg: 'https://cfsource.wan2video.com/wan2video/christmas/template/home/wan2video-christmas-background.jpg'
}

// 触发生成按钮点击
const handleGenerate = () => {
  // 查找表单组件中的生成按钮并触发点击
  nextTick(() => {
    const formContainer = document.querySelector('.mobile-form-container')
    if (formContainer) {
      const generateButton = formContainer.querySelector('button[style*="B41F21"], button[style*="b41f21"]') as HTMLButtonElement
      if (generateButton) {
        generateButton.click()
      }
    }
  })
}

onMounted(() => {
  // 使用 nextTick 确保 DOM 已渲染
  nextTick(() => {
    // 隐藏表单组件中的生成按钮区域和右侧预览区域
    const formContainer = document.querySelector('.mobile-form-container')
    if (formContainer) {
      // 隐藏生成按钮区域
      const generateButtonArea = formContainer.querySelector('.mt-4.flex.flex-col.items-center.gap-2')
      if (generateButtonArea) {
        ;(generateButtonArea as HTMLElement).style.display = 'none'
      }
      
      // 隐藏右侧预览区域（第二个子元素）
      const container = formContainer.querySelector('.w-full.max-w-6xl.flex')
      if (container && container.children.length > 1) {
        const previewArea = container.children[1] as HTMLElement
        if (previewArea) {
          previewArea.style.display = 'none'
        }
      }
    }
  })
})
</script>

<style scoped>
.mobile-form-container :deep(.w-full.max-w-6xl) {
  flex-direction: column !important;
}

.mobile-form-container :deep(.w-full.max-w-6xl > div:last-child) {
  display: none !important;
}

.mobile-form-container :deep(.mt-4.flex.flex-col.items-center.gap-2) {
  display: none !important;
}
</style>

