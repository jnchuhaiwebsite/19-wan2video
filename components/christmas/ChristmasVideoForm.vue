<template>
  <div class="w-full flex justify-center px-4 py-10">
    <!-- 外层容器（无背景），左右分栏 -->
    <div class="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
      <!-- 左侧表单：单独一个 DIV，玻璃态透明背景 -->
      <div
        :class="[
          'flex flex-col gap-4 rounded-2xl text-white p-6 lg:p-8 border border-emerald-200/25 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-2xl',
          'w-full',
          isVertical ? 'lg:w-1/2' : 'lg:w-2/5'
        ]"
        style="
          background:
            linear-gradient(
              135deg,
              rgba(1, 41, 32, 0.45),
              rgba(1, 41, 32, 0.25)
            );
        "
      >
  

        <!-- 图片上传预览（样式参考 Wan25Generator 的 First Frame Image） -->
        <div class="flex flex-col gap-3">
          <label class="text-sm text-gray-200">Upload photo</label>

          <div class="relative">
            <div
              class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-emerald-300/70 rounded-2xl cursor-pointer hover:border-emerald-300 transition-colors bg-black/30 overflow-hidden group"
              @click="triggerFileInput"
            >
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                class="hidden"
                @change="onFileChange"
              />

              <!-- 有图片时预览 -->
              <div v-if="previewUrl" class="w-full h-full flex items-center justify-center">
                <img
                  :src="previewUrl"
                  alt="preview"
                  class="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>

              <!-- 无图片时提示，使用照相机图标 -->
              <div v-else class="flex flex-col items-center justify-center p-4 text-center">
                <svg
                  class="w-10 h-10 text-emerald-300 mb-3 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="M4 7a2 2 0 0 1 2-2h2.172a2 2 0 0 0 1.414-.586l.828-.828A2 2 0 0 1 11.828 3h4.344a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 19.828 5H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z"
                  />
                  <circle
                    cx="12"
                    cy="13"
                    r="4"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p class="text-emerald-100 font-medium mb-1 text-sm">
                  Click to upload your Christmas photo
                </p>
                <p class="text-xs text-emerald-100/70">
                  Upload JPG or PNG (up to 10MB) in a clear 9:16 format for best results.
                </p>
              </div>
            </div>

            <!-- 删除按钮 -->
            <button
              v-if="previewUrl"
              class="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
              @click.stop="clearImage"
              type="button"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>

        <!-- 提示词输入 -->
        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-200">Prompt</label>
          <textarea
            v-model="prompt"
            rows="4"
            class="w-full rounded-lg bg-black/30 border border-gray-600/70 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
            placeholder="Describe your Christmas greeting video, e.g. Santa is delivering gifts to my family in a snowy night..."
          />
        </div>

        <!-- 模版选择 -->
        <div class="flex flex-col gap-3">
          <label class="text-sm text-gray-200">Template</label>

          <!-- 模版缩略图列表：一行 2 个 -->
          <div class="grid grid-cols-2 gap-3">
            <button
              v-for="tpl in templates"
              :key="tpl.key"
              type="button"
              @click="handleSelectTemplate(tpl)"
              :class="[
                'flex flex-col rounded-xl overflow-hidden bg-black/30 border transition-all duration-200 text-left',
                selectedTemplateKey === tpl.key
                  ? 'border-emerald-400 ring-2 ring-emerald-400/40 shadow-lg'
                  : 'border-emerald-300/20 hover:border-emerald-200/70 hover:bg-black/40'
              ]"
            >
              <div class="w-full bg-black/60 relative">
                <div class="w-full aspect-[194/104]">
                  <img
                    :src="tpl.thumb"
                    :alt="tpl.name"
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- 模版名称：覆盖在缩略图左下角 -->
                <div
                  class="absolute left-1.5 bottom-1.5 px-2 py-0.5 rounded-md bg-black/65 backdrop-blur-sm max-w-[80%]"
                >
                  <p class="text-[11px] font-semibold text-emerald-50 truncate leading-tight">
                    {{ tpl.name }}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- 音频上传（可选，样式参考 Wan25Generator） -->
        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-200">Audio File <span class="text-gray-400 text-xs">(Optional)</span></label>
          <div class="relative">
            <label
              for="christmas-audio-upload"
              class="flex items-center justify-center w-full h-16 border-2 border-dashed border-emerald-300/70 rounded-xl cursor-pointer hover:border-emerald-300 transition-colors bg-black/30"
            >
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="M9 4.5v11a3 3 0 006 0v-11M12 19.5a4.5 4.5 0 01-4.5-4.5m9 0A4.5 4.5 0 0112 19.5m0 0V22"
                  />
                </svg>
                <span v-if="!uploadedAudio" class="text-emerald-100 text-sm font-medium">
                  Click to upload background audio (MP3 / WAV)
                </span>
                <span v-else class="text-emerald-100 text-sm font-medium truncate max-w-[220px]">
                  {{ uploadedAudio.name }}
                </span>
              </div>
            </label>
            <input
              id="christmas-audio-upload"
              ref="audioInput"
              type="file"
              class="hidden"
              accept="audio/wav,audio/mp3,audio/mpeg"
              @change="handleAudioChange"
            />
          </div>

          <!-- 音频预览 -->
          <div v-if="audioPreview" class="mt-2 p-2 bg-black/30 rounded-lg border border-emerald-300/30">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-medium text-emerald-50">Audio Preview</span>
              <button
                type="button"
                class="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                @click="removeAudio"
              >
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <audio :src="audioPreview" controls class="w-full h-8">
              Your browser does not support audio playback.
            </audio>
          </div>

          <p class="text-[11px] text-emerald-100/70 mt-1">
            Supports WAV, MP3 format, 3-30 seconds, max 15MB
          </p>
        </div>

        <!-- 生成按钮 -->
        <div class="mt-4 flex flex-col items-center gap-2">
          <button
            class="w-full max-w-xs md:max-w-sm px-8 py-3 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition flex items-center justify-center gap-3"
            :style="{ backgroundColor: '#B41F21' }"
            @click="onGenerate"
          >
            <!-- 左侧星星图标 -->
            <svg
              class="w-4 h-4 text-yellow-300 drop-shadow"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.037a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 14.347a1 1 0 00-1.175 0l-2.87 2.147c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.82 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.229-3.293z"
              />
            </svg>

            <span>Create Nagic Video</span>

            <!-- 右侧星星图标 -->
            <svg
              class="w-4 h-4 text-yellow-300 drop-shadow"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.803 2.037a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 14.347a1 1 0 00-1.175 0l-2.87 2.147c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.82 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.229-3.293z"
              />
            </svg>
          </button>

          <!-- 测试生成按钮：跳过 previewGenvideo，直接用固定 task_id 走 checkTask -->
          <button
            type="button"
            class="mt-1 inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-medium bg-slate-700/80 hover:bg-slate-600 text-slate-100"
            @click="onTestGenerate"
          >
            Test Generate (mock task)
          </button>
        </div>
      </div>

      <!-- 右侧预览：独立一列，无表单背景色 -->
      <div
        :class="[
          'flex flex-col items-center justify-start',
          'w-full',
          isVertical ? 'lg:w-1/2' : 'lg:w-3/5'
        ]"
      >
        <!-- 预览设备外框 -->
        <!-- 横版预览 -->
        <div v-if="!isVertical" class="w-full max-w-xl flex justify-center">
          <!-- 电脑外框作为相对容器，保持 914:724 比例 -->
          <div class="relative w-full aspect-[914/724]">
            <!-- 电脑外框：作为上层边框，需要参与 z-index 排序 -->
            <img
              src="https://cfsource.wan2video.com/wan2video/christmas/template/images/computer.png"
              alt="Computer Preview"
              class="w-full h-full object-contain select-none pointer-events-none relative z-20"
            />
            <!-- 屏幕内内容区域 -->
            <div
              class="absolute flex items-center justify-center z-10"
              style="left: 3.1%; top: 4.3%; width: 94.9%; height: 67%;"
            >
              <div class="w-full h-full rounded-lg overflow-hidden bg-black/80 flex items-center justify-center">
                <!-- 加载状态：旋转雪花 -->
                <template v-if="isGenerating">
                  <div class="flex flex-col items-center justify-center gap-3 text-center px-4">
                    <svg
                      class="w-10 h-10 text-emerald-200 animate-spin-slow"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <path
                        d="M32 4v56M12 12l40 40M4 32h56M12 52l40-40"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <circle cx="32" cy="32" r="6" fill="currentColor" />
                    </svg>
                    <p class="text-xs sm:text-sm text-emerald-50 font-medium">
                      Santa's Elves are crafting your video...
                    </p>
                  </div>
                </template>

                <!-- 已生成结果 or 模版预览 -->
                <template v-else>
                  <!-- 如果已有真实生成视频，优先展示 -->
                  <video
                    v-if="generatedVideoUrl"
                    :src="generatedVideoUrl"
                    class="max-w-full max-h-full"
                    :style="videoStyle"
                    controls
                    playsinline
                    @loadedmetadata="onVideoMetadata"
                  ></video>
                  <!-- 否则展示模版预览或占位 -->
                  <template v-else>
                    <video
                      v-if="selectedTemplate && currentPreviewVideo"
                      :src="currentPreviewVideo"
                      class="max-w-full max-h-full"
                      :style="videoStyle"
                      autoplay
                      loop
                      muted
                      controls
                      playsinline
                      @loadedmetadata="onVideoMetadata"
                    ></video>
                    <template v-else>
                      <img
                        v-if="previewUrl"
                        :src="previewUrl"
                        alt="Preview"
                        class="w-full h-full object-cover"
                      />
                      <div
                        v-else
                        class="w-full h-full flex items-center justify-center text-xs text-gray-400"
                      >
                        Preview will be displayed here
                      </div>
                    </template>
                  </template>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- 竖版预览 -->
        <div v-else class="w-full max-w-xs flex justify-center">
          <!-- 手机外框作为相对容器，保持大致 9:16 比例 -->
          <div class="relative w-full aspect-[9/16]">
            <!-- 手机外框 -->
            <img
              src="https://cfsource.wan2video.com/wan2video/christmas/template/images/phone.png"
              alt="Phone Preview"
              class="w-full h-full object-contain select-none pointer-events-none relative z-20"
            />
            <!-- 手机屏幕区域 -->
            <div
              class="absolute flex items-center justify-center z-10 overflow-hidden"
              style="left: 6%; top: 1%; width: 87%; height: 98%;border-radius: 45px;"
            >
              <div class="w-full h-full rounded-xl overflow-hidden bg-black/80 flex items-center justify-center">
                <!-- 加载状态：旋转雪花 -->
                <template v-if="isGenerating">
                  <div class="flex flex-col items-center justify-center gap-3 text-center px-4">
                    <svg
                      class="w-10 h-10 text-emerald-200 animate-spin-slow"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <path
                        d="M32 4v56M12 12l40 40M4 32h56M12 52l40-40"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                      <circle cx="32" cy="32" r="6" fill="currentColor" />
                    </svg>
                    <p class="text-xs sm:text-sm text-emerald-50 font-medium">
                      Santa's Elves are crafting your video...
                    </p>
                  </div>
                </template>

                <!-- 已生成结果 or 模版预览 -->
                <template v-else>
                  <!-- 如果已有真实生成视频，优先展示 -->
                  <video
                    v-if="generatedVideoUrl"
                    :src="generatedVideoUrl"
                    class="max-w-full max-h-full"
                    :style="videoStyle"
                    controls
                    playsinline
                    @loadedmetadata="onVideoMetadata"
                  ></video>
                  <!-- 否则展示模版预览或占位 -->
                  <template v-else>
                    <video
                      v-if="selectedTemplate && currentPreviewVideo"
                      :src="currentPreviewVideo"
                      class="max-w-full max-h-full"
                      :style="videoStyle"
                      autoplay
                      loop
                      muted
                      controls
                      playsinline
                      @loadedmetadata="onVideoMetadata"
                    ></video>
                    <template v-else>
                      <img
                        v-if="previewUrl"
                        :src="previewUrl"
                        alt="Preview"
                        class="w-full h-full object-cover"
                      />
                      <div
                        v-else
                        class="w-full h-full flex items-center justify-center text-xs text-gray-400"
                      >
                        Preview will be displayed here
                      </div>
                    </template>
                  </template>
                </template>
              </div>
            </div>
          </div>
        </div>

        <!-- 生成完成后的操作按钮 -->
        <div
          v-if="generatedVideoUrl && !isGenerating"
          class="mt-4 w-full max-w-xl flex flex-col items-center gap-3"
        >
          <!-- 下载 & 复制链接 -->
          <div class="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-emerald-500 hover:bg-emerald-400 text-white shadow"
              @click="downloadGeneratedVideo"
            >
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download
            </button>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-700 hover:bg-slate-600 text-white shadow"
              @click="copyShareLink"
            >
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8M8 12h8m-6-8h6a2 2 0 012 2v12a2 2 0 01-2 2h-6m-4-4H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
              </svg>
              Copy link
            </button>
          </div>

          <!-- 分享按钮 -->
          <div class="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
            <button
              type="button"
              class="inline-flex items-center px-3 py-1.5 rounded-full bg-[#1877F2]/90 hover:bg-[#1877F2] text-white"
              @click="shareTo('facebook')"
            >
              <span class="font-semibold mr-1">f</span> Facebook
            </button>
            <button
              type="button"
              class="inline-flex items-center px-3 py-1.5 rounded-full bg-[#1DA1F2]/90 hover:bg-[#1DA1F2] text-white"
              @click="shareTo('twitter')"
            >
              <span class="font-semibold mr-1">X</span> Twitter
            </button>
            <button
              type="button"
              class="inline-flex items-center px-3 py-1.5 rounded-full bg-[#E60023]/90 hover:bg-[#E60023] text-white"
              @click="shareTo('pinterest')"
            >
              <span class="font-semibold mr-1">P</span> Pinterest
            </button>
            <button
              type="button"
              class="inline-flex items-center px-3 py-1.5 rounded-full bg-[#25D366]/90 hover:bg-[#25D366] text-white"
              @click="shareTo('whatsapp')"
            >
              <span class="font-semibold mr-1">WA</span> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useNuxtApp } from 'nuxt/app';
import { useRoute } from 'vue-router';
import { previewGenvideo, checkTaskStatusVideo, checkTask } from '~/api';

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
    prompt:
      "The Christmas sky is snowing, surrounded by pine trees adorned with colorful lights. The Christmas tree is covered in snow, and the roof and windowsill of the small wooden house are covered with a thick layer of white snow. There is a flower wreath made of pine cones and red berries hanging at the door. The character is wearing a Christmas sweater and a red Christmas hat, standing next to a small wooden house. The character width accounts for 70% of the page. About 70% of the page is occupied by height, holding a Christmas card and saying to a friend with a straight face, \"Happy Holidays, Catching up so to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome\". Make people instantly feel the lively, excited, and energetic atmosphere of the festival night."
  },
  {
    key: 'christmas-tree',
    name: 'christmas tree',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-living-room-pine-tree-scene.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-s.mp4',
    prompt:
      "On Christmas Eve, there is a huge and lush real pine tree in the center of the living room! It is covered with various retro glass ball ornaments, with warm yellow white string lights on. The heavy snow outside the window gives a feeling of the night. Six thick red or green Christmas stockings are neatly placed on the fireplace rack, creating a warm atmosphere inside the house. The soft yellow color scheme places the characters inside, wearing Christmas hats and standing at the front. The character width accounts for 70% of the page. About 70% of the page is high, wearing an ugly Christmas sweater, holding a Christmas card, and saying to friends with a straight face, \"Happy Holidays, Catching up so to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome.\""
  },
  {
    key: 'church',
    name: 'church',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-church-holiday-interior.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-s.mp4',
    prompt:
      "The interior of the Christmas church is decorated with a large number of green holly branches and red potted poinsettias in the night background. The main lighting comes from chandeliers and lit candles. The character is in the center of the video, wearing a red Christmas hat, and the width of the character accounts for 70% of the page. The height accounts for about 70% of the page, wearing an ugly Christmas sweater, making people instantly feel the lively, excited, and energetic atmosphere of the holiday night. Say to your friend with a straight face, \"Happy Holidays, Catching up soon to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome!\""
  },
  {
    key: 'pine-forest',
    name: 'pine forest',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-pine-forest-lights.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-s.mp4',
    prompt:
      "A pine forest in the outskirts, with thick snow on the ground, and yellow lights shining from the windows of the farm's wooden houses, warm and romantic. Most importantly, there are countless warm light strings wrapped around the pine trees in the forest, only white or amber in color. The contours of the pine trees are outlined like Christmas trees. There are elk running through the forest, and as dusk falls and the lights begin to dominate the view, the entire scene becomes poetic and romantic. The sky is snowing, and the character is wearing a Christmas sweater and a red Christmas hat. The character's width accounts for 70% of the page. The proportion of height on the page is about 70%, making people instantly feel the lively, excited, and energetic atmosphere of the festival night. Say to your friend with a straight face, \"Happy Holidays, Catching up soon to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome!\""
  }
];

const fileInput = ref<HTMLInputElement | null>(null);
const audioInput = ref<HTMLInputElement | null>(null);

const previewUrl = ref<string | null>(null);
const uploadedImageFile = ref<File | null>(null);
const isVertical = ref(false); // 是否展示竖版表单
const ratioInfo = ref<string | null>(null);

const prompt = ref('');
const selectedTemplateKey = ref<string | null>(null);

const uploadedAudio = ref<{ name: string; size: number } | null>(null);
const audioPreview = ref<string | null>(null);
const audioFile = ref<File | null>(null);

// 生成任务 & 结果
const isGenerating = ref(false);
const currentTaskId = ref<string | null>(null);
const generatedVideoUrl = ref<string | null>(null);
const statusMessage = ref<string>('');

const { $toast } = useNuxtApp() as any;

const SHARE_TEXT =
  "Check out my personalized Christmas video made with Wan2Video! 🎄 #Christmas #Greetings #MerryChristmas";

const selectedTemplate = computed<TemplateItem | null>(() => {
  if (!selectedTemplateKey.value) return null;
  return templates.find((t) => t.key === selectedTemplateKey.value) || null;
});

const currentPreviewVideo = computed(() => {
  // 如果已经有真实生成的视频，则优先展示生成结果
  if (generatedVideoUrl.value) return generatedVideoUrl.value;

  // 否则展示模板预览视频
  if (!selectedTemplate.value) return '';
  return isVertical.value ? selectedTemplate.value.videoV : selectedTemplate.value.videoH;
});

// 视频智能缩放样式
const videoStyle = ref<Record<string, string>>({});

const onVideoMetadata = (e: Event) => {
  const video = e.target as HTMLVideoElement;
  const vw = video.videoWidth;
  const vh = video.videoHeight;
  if (!vw || !vh) return;

  // 根据当前是横版/竖版，设定一个大致的容器宽高比
  const containerAspect = isVertical.value ? 9 / 16 : 16 / 9;
  const videoAspect = vw / vh;

  // 如果视频更“宽”，铺满宽度；如果更“高”，铺满高度
  if (videoAspect > containerAspect) {
    videoStyle.value = {
      width: '100%',
      height: 'auto'
    };
  } else {
    videoStyle.value = {
      width: 'auto',
      height: '100%'
    };
  }
};

const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const handleAudioChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (!target.files || !target.files[0]) return;

  const file = target.files[0];

  // 简单校验：类型和大小（最多 15MB）
  if (!file.type.startsWith('audio/')) {
    $toast?.error?.('Please upload an audio file (MP3 / WAV).');
    return;
  }
  if (file.size > 15 * 1024 * 1024) {
    $toast?.error?.('Audio file size should be less than 15MB.');
    return;
  }

  uploadedAudio.value = {
    name: file.name,
    size: file.size
  };

  audioFile.value = file;

  if (audioPreview.value) {
    URL.revokeObjectURL(audioPreview.value);
  }
  audioPreview.value = URL.createObjectURL(file);
};

const removeAudio = () => {
  if (audioPreview.value) {
    URL.revokeObjectURL(audioPreview.value);
  }
  audioPreview.value = null;
  uploadedAudio.value = null;

  if (audioInput.value) {
    audioInput.value.value = '';
  }
};

const clearImage = () => {
  previewUrl.value = null;
  ratioInfo.value = null;
  isVertical.value = false;
  // 不清空已选模版

  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const handleSelectTemplate = (tpl: TemplateItem) => {
  selectedTemplateKey.value = tpl.key;
  // 选择模版后，将模版提示词填入输入框
  prompt.value = tpl.prompt;
};

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (!target.files || !target.files[0]) return;

  const file = target.files[0];
  // 记录原始图片文件，用于提交后端
  uploadedImageFile.value = file;
  const reader = new FileReader();

  reader.onload = (ev) => {
    const url = ev.target?.result as string;
    previewUrl.value = url;

    // 计算图片宽高，判断是否为 9:16
    const img = new Image();
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      if (!height) return;

      const r = width / height;
      const targetRatio = 9 / 16; // 9:16
      const diff = Math.abs(r - targetRatio);

      // 允许一定误差，比如 0.03
      const is916 = diff < 0.03;
      isVertical.value = is916;

      ratioInfo.value = `${width} × ${height}（${(r).toFixed(3)}）`;
    };
    img.src = url;
  };

  reader.readAsDataURL(file);
};

// 轮询检查任务状态
const startPollingStatus = (taskId: string) => {
  currentTaskId.value = taskId;

  const poll = async () => {
    try {
      const res: any = await checkTaskStatusVideo(taskId);
      const data = res?.data;
      if (!data) return;

      const { status, status_msg, url } = data;

      if (status === 1 && url) {
        isGenerating.value = false;
        generatedVideoUrl.value = url;
        statusMessage.value = 'Video generated successfully!';
        $toast?.success?.('Video generated successfully!');
      } else if (status <= -1) {
        isGenerating.value = false;
        statusMessage.value = status_msg || 'Generation failed';
        $toast?.error?.(statusMessage.value);
      } else {
        // 继续轮询
        setTimeout(poll, 5000);
      }
    } catch (err: any) {
      console.error('checkTaskStatus error', err);
      // 简单重试机制
      setTimeout(poll, 5000);
    }
  };

  // 首次调用
  setTimeout(poll, 5000);
};

const onGenerate = async () => {
  if (!uploadedImageFile.value) {
    $toast?.error?.('Please upload a photo first.');
    return;
  }

  if (!prompt.value.trim()) {
    $toast?.error?.('Prompt cannot be empty.');
    return;
  }

  try {
    isGenerating.value = true;
    generatedVideoUrl.value = null;
    statusMessage.value = 'Creating preview task...';

    const payload: any = {
      model: 'wan2.5-i2v-preview',
      prompt: prompt.value,
      duration: 10,
      prompt_extend: true,
      image: uploadedImageFile.value,
      resolution: '720P'
    };

    if (audioFile.value) {
      payload.audio = audioFile.value;
    }

    const res: any = await previewGenvideo(payload);

    if (res?.success && res.data?.task_id) {
      $toast?.success?.('Preview task created, generating video...');
      startPollingStatus(res.data.task_id);
    } else {
      isGenerating.value = false;
      const msg = res?.msg || 'Failed to create preview task.';
      $toast?.error?.(msg);
    }
  } catch (err: any) {
    console.error('previewGenvideo error', err);
    isGenerating.value = false;
    const msg = err?.msg || 'An error occurred while creating preview video.';
    $toast?.error?.(msg);
  }
};

// 测试生成：跳过 previewGenvideo，5 秒后直接调用 checkTask 固定 ID
const onTestGenerate = () => {
  const testTaskId = '56033c04-359f-4183-b9d7-f0b45fc67964';

  isGenerating.value = true;
  generatedVideoUrl.value = null;
  statusMessage.value = 'Running test task...';
  $toast?.info?.('Start test generation task...');

  setTimeout(async () => {
    try {
      const res: any = await checkTask(testTaskId);
      const data = res?.data;
      if (data && data.status === 1 && data.url) {
        generatedVideoUrl.value = data.url;
        statusMessage.value = 'Video generated successfully!';
        $toast?.success?.('Test video fetched successfully!');
      } else {
        const msg = data?.status_msg || res?.msg || 'Test task has not completed yet.';
        statusMessage.value = msg;
        $toast?.error?.(msg);
      }
    } catch (err: any) {
      console.error('checkTask test error', err);
      const msg = err?.msg || 'Failed to run test task.';
      statusMessage.value = msg;
      $toast?.error?.(msg);
    } finally {
      isGenerating.value = false;
    }
  }, 5000);
};

const copyShareLink = async () => {
  if (!generatedVideoUrl.value) return;
  try {
    await navigator.clipboard.writeText(generatedVideoUrl.value);
    $toast?.success?.('Link copied to clipboard!');
  } catch {
    $toast?.error?.('Failed to copy link. Please copy it manually.');
  }
};

const downloadGeneratedVideo = async () => {
  if (!generatedVideoUrl.value) return;
  try {
    const res = await fetch(generatedVideoUrl.value);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `christmas-video-${Date.now()}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    $toast?.success?.('Download started.');
  } catch (e) {
    console.error(e);
    $toast?.error?.('Failed to download video.');
  }
};

const shareTo = (platform: 'facebook' | 'twitter' | 'pinterest' | 'whatsapp') => {
  if (!generatedVideoUrl.value) return;
  const url = encodeURIComponent(generatedVideoUrl.value);
  const text = encodeURIComponent(SHARE_TEXT);

  let shareUrl = '';
  if (platform === 'facebook') {
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
  } else if (platform === 'twitter') {
    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  } else if (platform === 'pinterest') {
    shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`;
  } else if (platform === 'whatsapp') {
    shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  }
};

// 检查 URL 参数，如果有 taskId 则自动开始轮询
onMounted(() => {
  const route = useRoute()
  const taskId = route.query.taskId as string
  const templateIndex = route.query.templateIndex as string
  
  if (taskId) {
    // 如果有模板索引，设置对应的模板和提示词
    if (templateIndex) {
      const index = parseInt(templateIndex)
      if (index >= 0 && index < templates.length) {
        const template = templates[index]
        selectedTemplateKey.value = template.key
        prompt.value = template.prompt
      }
    }
    
    // 开始轮询任务状态
    isGenerating.value = true
    statusMessage.value = '正在生成视频...'
    startPollingStatus(taskId)
  }
})
</script>

<style scoped>
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
</style>


