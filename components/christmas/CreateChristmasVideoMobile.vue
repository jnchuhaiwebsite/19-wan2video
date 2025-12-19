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
    <!-- 背景视频：默认模版1的videoV -->
    <video
      ref="backgroundVideo"
      :src="currentBackgroundVideo"
      autoplay
      loop
      muted
      playsinline
      style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -3;
      "
    ></video>

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

    <!-- 初始展示区域：视频预览和制作按钮 -->
    <div
      v-if="!showForm"
      ref="previewSection"
      style="
        position: relative;
        z-index: 1;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
      "
    >
      <!-- 视频预览区域 -->
      <div
        style="
          width: 100%;
          max-width: 300px;
          aspect-ratio: 9/16;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 40px;
        "
      >
        <video
          :src="currentBackgroundVideo"
          autoplay
          loop
          muted
          playsinline
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
          "
        ></video>
      </div>

      <!-- 制作按钮 -->
      <button
        class="px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
        :style="{ backgroundColor: '#B41F21', color: 'white' }"
        @click="handleStartCreate"
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

        <span>开始制作</span>

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

    <!-- 页面内容：表单部分 -->
    <div
      ref="formSection"
      style="
        position: relative;
        z-index: 1;
        width: 100%;
        padding: 100px 16px 20px;
      "
    >
      <!-- 使用表单组件，隐藏右侧预览 -->
      <div class="mobile-form-container">
        <ChristmasVideoForm ref="formRef" />
      </div>
    </div>

    <!-- 悬浮在底部的生成按钮 -->
    <div
      v-if="!showResult"
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
      <div class="flex flex-col gap-2">
        <button
          ref="generateButton"
          class="w-full px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
          :style="{ backgroundColor: '#B41F21', color: 'white' }"
          :disabled="isGenerating"
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

          <span>{{ isGenerating ? 'Generating...' : 'Create Magic Video' }}</span>

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

        <!-- 测试生成按钮：跳过 previewGenvideo，直接用固定 task_id 走 checkTask -->
        <!-- <button
          type="button"
          class="mt-1 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-medium bg-slate-700/80 hover:bg-slate-600 text-slate-100 transition-colors"
          :disabled="isGenerating"
          @click="onTestGenerate"
        >
          Test Generate (mock task)
        </button> -->
      </div>
    </div>

    <!-- Loading 蒙层 -->
    <Transition name="fade">
      <div
        v-if="isGenerating"
        class="fixed inset-0 z-[100] flex items-center justify-center"
        style="background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px);"
        @click.self="() => {}"
      >
        <div class="flex flex-col items-center justify-center gap-6 px-6 text-center">
          <!-- 旋转雪花动画 -->
          <svg t="1765265099439"       class="w-10 h-10 animate-spin-slow icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10181" width="200" height="200"><path d="M496 30.4L472 72v880l24 41.6 24-41.6V72z" fill="#59C2E0" p-id="10182"></path><path d="M496 240l-96-64v-48l96 64zM496 336L368 256v-48l128 80zM496 240l96-64v-48l-96 64zM496 336l128-80v-48L496 288zM496 784l-96 64v48l96-64zM496 688L368 768v48l128-80zM496 784l96 64v48l-96-64zM496 688l128 80v48L496 736z" fill="#59C2E0" p-id="10183"></path><path d="M79.2 752.8h48l761.6-440 24-41.6h-48l-761.6 440z" fill="#59C2E0" p-id="10184"></path><path d="M260 648l-7.2 115.2-41.6 24 7.2-115.2zM343.2 600l-5.6 151.2-41.6 24 5.6-151.2z" fill="#59C2E0" p-id="10185"></path><path d="M260 648l-103.2-51.2-41.6 24L218.4 672zM343.2 600l-133.6-70.4-41.6 24L301.6 624zM731.2 376l103.2 51.2 41.6-24L772.8 352zM648 424l133.6 71.2 41.6-24L689.6 400z" fill="#59C2E0" p-id="10186"></path><path d="M731.2 376l7.2-115.2 41.6-24-7.2 115.2zM648 424l5.6-150.4 41.6-24-5.6 150.4z" fill="#59C2E0" p-id="10187"></path><path d="M912.8 752.8h-48l-761.6-440-24-41.6h48l761.6 440z" fill="#59C2E0" p-id="10188"></path><path d="M732 648l7.2 115.2 41.6 24-7.2-115.2zM648.8 600l5.6 151.2 41.6 24-5.6-151.2z" fill="#59C2E0" p-id="10189"></path><path d="M732 648l103.2-51.2 41.6 24L773.6 672zM648.8 600l133.6-70.4 41.6 24L690.4 624zM260.8 376l-103.2 51.2-41.6-24L219.2 352zM344 424l-133.6 71.2-41.6-24L302.4 400zM260.8 376l-7.2-115.2-41.6-24 7.2 115.2z" fill="#59C2E0" p-id="10190"></path><path d="M344 424l-5.6-150.4-41.6-24 5.6 150.4z" fill="#59C2E0" p-id="10191"></path><path d="M496 663.2l-131.2-75.2V436.8L496 360.8l131.2 75.2v151.2L496 663.2zM404.8 564.8L496 616.8l91.2-52.8v-104L496 407.2l-91.2 52.8v104.8z" fill="#59C2E0" p-id="10192"></path></svg>
          
          <div class="flex flex-col gap-2">
            <p class="text-lg font-semibold text-emerald-50">
              {{ statusMessage || 'Generating video...' }}
            </p>
            <p class="text-sm text-emerald-100/70">
              Santa's Elves are crafting your video...
            </p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 结果展示蒙层 -->
    <Transition name="fade">
      <div
        v-if="showResult && generatedVideoUrl"
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4"
        style="background: rgba(0, 0, 0, 0.95); backdrop-filter: blur(12px);"
        @click.self="closeResult"
      >
        <div class="w-full max-w-md flex flex-col gap-6">
          <!-- 关闭按钮 -->
          <button
            class="self-end w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            @click="closeResult"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- 视频展示 -->
          <div class="w-full rounded-2xl overflow-hidden bg-black/50 border border-white/20 shadow-2xl">
            <video
              :src="generatedVideoUrl"
              class="w-full h-auto"
              controls
              playsinline
              autoplay
            ></video>
          </div>

          <!-- 操作按钮 -->
          <div class="flex flex-row gap-3">
            <!-- 下载按钮 -->
            <button
              class="flex-1 px-6 py-4 rounded-xl text-base font-semibold bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              @click="downloadVideo"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download
            </button>
            
            <!-- 分享按钮 -->
            <button
              class="flex-1 px-6 py-4 rounded-xl text-base font-semibold bg-white/10 hover:bg-white/20 border border-white/30 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
              @click.stop="toggleShareMenu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 分享菜单 - 从底部升起 -->
    <Transition name="slide-up">
      <div
        v-if="showShareMenu"
        class="fixed inset-0 z-[110] flex items-end"
        @click.self="closeShareMenu"
      >
        <!-- 遮罩层 -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeShareMenu"></div>
        
        <!-- 分享内容 -->
        <div
          class="relative w-full bg-white rounded-t-3xl shadow-2xl overflow-hidden"
          @click.stop
        >
          <!-- 拖拽指示器 -->
          <div class="flex justify-center pt-3 pb-2">
            <div class="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
          
          <!-- 标题 -->
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 text-center">Share</h3>
          </div>
          
          <!-- 分享选项 -->
          <div class="p-6 space-y-4">
            <!-- 复制链接 -->
            <button
              class="w-full flex items-center justify-center px-4 py-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors"
              @click="handleCopyLink"
            >
              <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8M8 12h8m-6-8h6a2 2 0 012 2v12a2 2 0 01-2 2h-6m-4-4H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
              </svg>
            </button>

            <!-- 分隔线 -->
            <div class="h-px bg-gray-200"></div>

            <!-- 社交媒体分享 -->
            <div class="grid grid-cols-4 gap-4">
              <button
                class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white transition-colors"
                @click="handleShare('facebook')"
                title="Facebook"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#1DA1F2] hover:bg-[#1A91DA] text-white transition-colors"
                @click="handleShare('twitter')"
                title="Twitter"
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="#ffffff"/>
</svg>
              </button>
              <button
                class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#E60023] hover:bg-[#D1001F] text-white transition-colors"
                @click="handleShare('pinterest')"
                title="Pinterest"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </button>
              <button
                class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white transition-colors"
                @click="handleShare('whatsapp')"
                title="WhatsApp"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- 安全区域底部间距 -->
          <div class="pb-safe-area"></div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useNuxtApp } from 'nuxt/app'
import ChristmasVideoForm from './ChristmasVideoForm.vue'
import { previewGenvideo, checkTaskStatusVideo, checkTask } from '~/api'
import { getShareVideoId, buildShareUrl } from '~/utils/videoShare'

// 模版数据（与表单组件保持一致）
interface TemplateItem {
  key: string;
  name: string;
  thumb: string;
  prompt: string;
  videoH: string;
  videoV: string;
}

const templates: TemplateItem[] = [
  {
    key: 'snow-house',
    name: 'snow house',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-christmas-cabin-scene.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-s.mp4',
    prompt: "  Snow is falling under the Christmas sky, with pine trees adorned with colorful lights all around. The Christmas tree is covered in snow, and the roof and windowsills of the little cabin are blanketed in a thick layer of white snow. A wreath made of pine cones and red berries hangs at the door. The person is wearing a Christmas sweater and a red Santa hat, standing next to the cabin. The person occupies about 70% of the width and around 70% of the height of the page, facing the camera directly and saying: 'Happy Holidays, Catching up soon to celebrate. Hope you're chilling hard and getting all the best snacks/gifts. Stay awesome!' The scene instantly conveys a lively, excited, and energetic holiday night atmosphere."
  },
  {
    key: 'christmas-tree',
    name: 'christmas tree',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-living-room-pine-tree-scene.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-s.mp4',
    prompt: "  On Christmas night, a huge, lush real pine tree stands in the center of the living room! It's adorned with various vintage glass ball ornaments, glowing with warm yellow and white string lights. Outside the window, snowflakes drift down, capturing the essence of a winter night. On the mantel, six thick red or green Christmas stockings are neatly arranged. The overall atmosphere in the room is cozy, with soft yellow tones. The person is inside the room, wearing a Christmas hat, standing at the front. They occupy about 70% of the width and around 70% of the height of the page, dressed in an ugly Christmas sweater, facing the camera and saying to their friend: 'Happy Holidays, Catching up soon to celebrate. Hope you're chilling hard and getting all the best snacks/gifts. Stay awesome!'"
  },
  {
    key: 'church',
    name: 'church',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-church-holiday-interior.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-s.mp4',
    prompt: "  The interior of the Christmas church is decorated with a large number of green holly branches and red potted poinsettias in the night background. The main lighting comes from chandeliers and lit candles. The character is in the center of the video, wearing a red Christmas hat, and the width of the character accounts for 70% of the page. The height accounts for about 70% of the page, wearing an ugly Christmas sweater, making people instantly feel the lively, excited, and energetic atmosphere of the holiday night. Say to your friend with a straight face, 'Happy Holidays, Catching up soon to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome!'."
  },
  {
    key: 'pine-forest',
    name: 'pine forest',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-pine-forest-lights.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-s.mp4',
    prompt: "  A pine forest in the outskirts, with thick snow on the ground, and yellow lights shining from the windows of the farm's wooden houses, warm and romantic. Most importantly, there are countless warm light strings wrapped around the pine trees in the forest, only white or amber in color. The contours of the pine trees are outlined like Christmas trees. There are elk running through the forest, and as dusk falls and the lights begin to dominate the view, the entire scene becomes poetic and romantic. The sky is snowing, and the character is wearing a Christmas sweater and a red Christmas hat. The character's width accounts for 70% of the page. The proportion of height on the page is about 70%, making people instantly feel the lively, excited, and energetic atmosphere of the festival night. Say to your friend with a straight face, 'Happy Holidays, Catching up soon to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome!'."
  }
];

// 默认使用模版1的videoV
const currentBackgroundVideo = ref(templates[0].videoV)
const backgroundVideo = ref<HTMLVideoElement | null>(null)
const formRef = ref<InstanceType<typeof ChristmasVideoForm> | null>(null)
const formSection = ref<HTMLElement | null>(null)
const previewSection = ref<HTMLElement | null>(null)
const showForm = ref(false)
const { $toast } = useNuxtApp() as any

// 生成状态
const isGenerating = ref(false)
const showResult = ref(false)
const generatedVideoUrl = ref<string | null>(null)
const statusMessage = ref('Creating video...')
const currentTaskId = ref<string | null>(null)
const showShareMenu = ref(false)

// 从表单组件获取数据
const getFormData = () => {
  const formContainer = document.querySelector('.mobile-form-container')
  if (!formContainer) return null

  // 获取图片文件
  const fileInput = formContainer.querySelector('input[type="file"][accept="image/*"]') as HTMLInputElement
  const imageFile = fileInput?.files?.[0] || null

  // 获取提示词
  const textarea = formContainer.querySelector('textarea') as HTMLTextAreaElement
  const prompt = textarea?.value || ''

  // 获取音频文件
  const audioInput = formContainer.querySelector('input[type="file"][accept*="audio"]') as HTMLInputElement
  const audioFile = audioInput?.files?.[0] || null

  return { imageFile, prompt, audioFile }
}

const shareVideoId = ref<string>(''); // 存储分享视频短ID
// 轮询检查任务状态
const startPollingStatus = (taskId: string) => {
  currentTaskId.value = taskId

  const poll = async () => {
    try {
      const res: any = await checkTaskStatusVideo(taskId)
      const data = res?.data
      if (!data) {
        setTimeout(poll, 5000)
        return
      }

      const { status, status_msg, url } = data

      if (status === 1 && url) {
        // 生成成功
        isGenerating.value = false
        generatedVideoUrl.value = url
        showResult.value = true
        statusMessage.value = 'Video created successfully!'
        
        // 提取分享视频短ID
        try {
          console.log('Extracting share video ID from URL:', url);
          shareVideoId.value = getShareVideoId(url);
          console.log('Extracted share video ID:', shareVideoId.value);
        } catch (error) {
          console.error('Failed to get share video ID:', error);
          shareVideoId.value = '';
        }
        
        $toast?.success?.('Video generated successfully!')
      } else if (status <= -1) {
        // 生成失败
        isGenerating.value = false
        statusMessage.value = status_msg || 'Generation failed'
        $toast?.error?.(statusMessage.value)
      } else {
        // 继续轮询
        statusMessage.value = status_msg || 'Generating video...'
        setTimeout(poll, 5000)
      }
    } catch (err: any) {
      console.error('checkTaskStatus error', err)
      // 简单重试机制
      setTimeout(poll, 5000)
    }
  }

  // 首次调用
  setTimeout(poll, 5000)
}

// 触发生成
const handleGenerate = async () => {
  if (isGenerating.value) return

  const formData = getFormData()
  if (!formData) {
    $toast?.error?.('Unable to get form data')
    return
  }

  const { imageFile, prompt, audioFile } = formData

  if (!imageFile) {
    $toast?.error?.('Please upload a photo first')
    return
  }

  if (!prompt.trim()) {
    $toast?.error?.('Prompt cannot be empty')
    return
  }

  try {
    isGenerating.value = true
    showResult.value = false
    generatedVideoUrl.value = null
    statusMessage.value = 'Creating generation task...'

    const payload: any = {
      model: 'wan2.5-i2v-preview',
      prompt: prompt,
      duration: 10,
      prompt_extend: true,
      image: imageFile,
      resolution: '720P'
    }

    if (audioFile) {
      payload.audio = audioFile
    }

    const res: any = await previewGenvideo(payload)

    if (res?.success && res.data?.task_id) {
      $toast?.success?.('Task created successfully, generating video...')
      statusMessage.value = 'Generating video...'
      startPollingStatus(res.data.task_id)
    } else {
      isGenerating.value = false
      const msg = res?.msg || 'Failed to create task'
      statusMessage.value = msg
      $toast?.error?.(msg)
    }
  } catch (err: any) {
    console.error('previewGenvideo error', err)
    isGenerating.value = false
    const msg = err?.msg || 'An error occurred while generating video'
    statusMessage.value = msg
    $toast?.error?.(msg)
  }
}

// 测试生成：跳过 previewGenvideo，5 秒后直接调用 checkTask 固定 ID
const onTestGenerate = () => {
  const testTaskId = '56033c04-359f-4183-b9d7-f0b45fc67964'

  isGenerating.value = true
  showResult.value = false
  generatedVideoUrl.value = null
  statusMessage.value = 'Running test task...'
  // $toast?.info?.('Start test generation task...')

  setTimeout(async () => {
    try {
      const res: any = await checkTask(testTaskId)
      const data = res?.data
      if (data && data.status === 1 && data.url) {
        isGenerating.value = false
        generatedVideoUrl.value = data.url
        showResult.value = true
        statusMessage.value = 'Video generated successfully!'
        $toast?.success?.('Test video fetched successfully!')
      } else {
        isGenerating.value = false
        const msg = data?.status_msg || res?.msg || 'Test task has not completed yet'
        statusMessage.value = msg
        $toast?.error?.(msg)
      }
    } catch (err: any) {
      console.error('checkTask test error', err)
      isGenerating.value = false
      const msg = err?.msg || 'Failed to run test task'
      statusMessage.value = msg
      $toast?.error?.(msg)
    }
  }, 5000)
}

// 关闭结果展示
const closeResult = () => {
  showResult.value = false
  closeShareMenu()
}

// 下载视频
const downloadVideo = async () => {
  if (!generatedVideoUrl.value) return
  try {
    const res = await fetch(generatedVideoUrl.value)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `christmas-video-${Date.now()}.mp4`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    $toast?.success?.('Download started')
  } catch (e) {
    console.error(e)
    $toast?.error?.('Failed to download video')
  }
}

// 切换分享菜单
const toggleShareMenu = () => {
  showShareMenu.value = !showShareMenu.value
}

// 关闭分享菜单
const closeShareMenu = () => {
  showShareMenu.value = false
}

// 复制链接
const handleCopyLink = async () => {
  if (!generatedVideoUrl.value) return
  try {
    // 优先使用已提取的短ID，如果没有则尝试从URL重新提取
    let videoId = shareVideoId.value;
    if (!videoId) {
      try {
        videoId = getShareVideoId(generatedVideoUrl.value);
        shareVideoId.value = videoId; // 保存提取的ID
      } catch (error) {
        console.error('Failed to extract video ID from URL:', generatedVideoUrl.value, error);
      }
    }
    
    // 使用短链接
    const shareUrl = videoId 
      ? `https://christmas.wan2video.com/christmas/share/${videoId}`
      : buildShareUrl(generatedVideoUrl.value);
    
    await navigator.clipboard.writeText(shareUrl)
    $toast?.success?.('Link copied to clipboard!')
    closeShareMenu()
  } catch {
    $toast?.error?.('Failed to copy link. Please copy it manually.')
  }
}

// 分享到社交媒体
const SHARE_TEXT = 'Check out my personalized Christmas video made with Wan2Video! 🎄 #Christmas #Greetings #MerryChristmas'

const handleShare = (platform: 'facebook' | 'twitter' | 'pinterest' | 'whatsapp') => {
  if (!generatedVideoUrl.value) return
  
  // 优先使用已提取的短ID，如果没有则尝试从URL重新提取
  let videoId = shareVideoId.value;
  if (!videoId) {
    try {
      videoId = getShareVideoId(generatedVideoUrl.value);
      shareVideoId.value = videoId; // 保存提取的ID
    } catch (error) {
      console.error('Failed to extract video ID from URL:', generatedVideoUrl.value, error);
    }
  }
  
  // 使用短链接
  const shareUrl = videoId 
    ? `https://christmas.wan2video.com/christmas/share/${videoId}`
    : buildShareUrl(generatedVideoUrl.value);
  
  const url = encodeURIComponent(shareUrl)
  const text = encodeURIComponent(SHARE_TEXT)

  let shareUrl = ''
  if (platform === 'facebook') {
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`
  } else if (platform === 'twitter') {
    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`
  } else if (platform === 'pinterest') {
    shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`
  } else if (platform === 'whatsapp') {
    shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank', 'noopener,noreferrer')
  }
  closeShareMenu()
}


// 开始制作：滚动到表单区域并选中模版1
const handleStartCreate = () => {
  showForm.value = true
  
  nextTick(() => {
    // 选中模版1
    if (formRef.value && formRef.value.handleSelectTemplate) {
      formRef.value.handleSelectTemplate(templates[0])
    }
    
    // 滚动到表单区域
    if (formSection.value) {
      formSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

// 更新背景视频
const updateBackgroundVideo = (templateKey: string) => {
  const selectedTemplate = templates.find(t => t.key === templateKey)
  if (selectedTemplate) {
    currentBackgroundVideo.value = selectedTemplate.videoV
    // 更新背景视频
    if (backgroundVideo.value) {
      backgroundVideo.value.src = selectedTemplate.videoV
      backgroundVideo.value.load()
    }
  }
}

// 监听模版选择变化，更新背景视频
const watchTemplateChange = () => {
  if (!formRef.value) return
  
  // 监听模版选择按钮的点击事件
  const formContainer = document.querySelector('.mobile-form-container')
  if (formContainer) {
    // 使用事件委托监听模版按钮点击
    formContainer.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      // 查找最近的模版按钮
      const templateButton = target.closest('button[type="button"]')
      if (templateButton) {
        // 检查是否是模版选择按钮（通过检查父元素是否有模版相关的类）
        const gridContainer = templateButton.closest('.grid.grid-cols-2')
        if (gridContainer) {
          // 延迟执行，等待表单组件更新
          setTimeout(() => {
            if (formRef.value && formRef.value.selectedTemplateKey) {
              updateBackgroundVideo(formRef.value.selectedTemplateKey)
            }
          }, 100)
        }
      }
    })
  }
  
  // 也使用定时器作为备用方案
  let lastTemplateKey: string | null = null
  const checkTemplateChange = () => {
    if (formRef.value && formRef.value.selectedTemplateKey) {
      const currentKey = formRef.value.selectedTemplateKey
      if (currentKey !== lastTemplateKey) {
        lastTemplateKey = currentKey
        updateBackgroundVideo(currentKey)
      }
    }
    setTimeout(checkTemplateChange, 500)
  }
  checkTemplateChange()
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
    
    // 开始监听模版变化
    watchTemplateChange()
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

/* 旋转动画 */
.animate-spin-slow {
  animation: spin 2.5s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 从底部滑入动画 */
.slide-up-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
}

.slide-up-enter-from {
  opacity: 0;
}

.slide-up-enter-from > div:last-child {
  transform: translateY(100%);
}

.slide-up-leave-to {
  opacity: 0;
}

.slide-up-leave-to > div:last-child {
  transform: translateY(100%);
}

/* 安全区域底部间距 */
.pb-safe-area {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>

