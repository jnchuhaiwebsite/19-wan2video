<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden" id="generator">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tr from-purple-300 to-teal-300 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 -->
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4 leading-tight"
          >
          Wan 2.7 AI Video Generator
          </h2>
          <p class="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Create cinematic 4K 60FPS AI videos from text or images with director mode, motion brush, and synced audio.
          </p>
        </div>

      <!-- 主内容区：左表单 + 右预览 -->
      <div class="grid lg:grid-cols-2 gap-10 items-start">
        <!-- 左侧表单 -->
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 space-y-8">
          <!-- 生成方式切换 -->
          <div>
            <label class="block text-sm font-semibold text-gray-900 mb-3">Generation mode</label>
            <div class="flex bg-gray-100 rounded-2xl p-1">
              <button
                type="button"
                @click="activeMode = 'text'"
                :class="[
                  'flex-1 py-3 px-3 rounded-xl font-semibold text-sm transition-all duration-300',
                  activeMode === 'text'
                    ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                ]"
              >
                Text To Video
              </button>
              <button
                type="button"
                @click="activeMode = 'image'"
                :class="[
                  'flex-1 py-3 px-3 rounded-xl font-semibold text-sm transition-all duration-300',
                  activeMode === 'image'
                    ? 'bg-white text-purple-600 shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                ]"
              >
                Image To Video
              </button>
              <button
                type="button"
                @click="activeMode = 'reference'"
                :class="[
                  'flex-1 py-3 px-3 rounded-xl font-semibold text-sm transition-all duration-300',
                  activeMode === 'reference'
                    ? 'bg-white text-teal-600 shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-800'
                ]"
              >
                Reference To Video
              </button>
            </div>
          </div>

          <form class="space-y-6" @submit.prevent="handleSubmit">
            <!-- Text To Video -->
            <div v-if="activeMode === 'text'" class="space-y-6">
              <!-- Prompt + Inspiration Mode 开关 -->
              <div>
                <div class="flex items-center justify-between mb-2 gap-3">
                  <div>
                    <p class="text-sm font-semibold text-gray-900">
                      Prompt
                      <span class="text-red-500 ml-0.5">*</span>
                    </p>
                    <p class="text-[11px] text-gray-500 mt-0.5">
                      Describe the scene, motion, camera, and style you want.
                    </p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <div class="text-right">
                      <p class="text-xs font-medium text-gray-900 leading-tight">Inspiration Mode</p>
                      <p class="text-[11px] text-gray-500 leading-tight">More exploratory interpretation</p>
                    </div>
                    <button
                      type="button"
                      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      :class="form.text.inspiration ? 'bg-blue-600' : 'bg-gray-200'"
                      @click="form.text.inspiration = !form.text.inspiration"
                    >
                      <span
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                        :class="form.text.inspiration ? 'translate-x-6' : 'translate-x-1'"
                      />
                    </button>
                  </div>
                </div>
                <textarea
                  v-model="form.text.prompt"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors bg-white"
                  placeholder="Describe the video you want — scene, motion, camera, style (English or Chinese supported)..."
                  maxlength="1500"
                  @click="checkLoginStatus($event)"
                />
                <div class="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>Supports both English and Chinese prompts</span>
                  <span>{{ form.text.prompt.length }}/1500</span>
                </div>
              </div>

              <!-- Resolution -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Resolution</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="item in ['720P','1080P']"
                    :key="item"
                    type="button"
                    class="w-full p-3 rounded-lg border-2 transition-all duration-300 text-center text-sm"
                    :class="
                      form.text.resolution === item
                        ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    "
                    @click="form.text.resolution = item"
                  >
                    <div class="font-semibold text-sm">{{ item }}</div>
                    <!-- <div class="text-[11px] mt-1 text-gray-500">
                      {{
                        item === '480P'
                          ? '832×480 (16:9) · 480×832 (9:16) · 624×624 (1:1)'
                          : item === '720P'
                          ? '1280×720 (16:9) · 720×1280 (9:16) · 960×960 (1:1) · 1088×832 (4:3) · 832×1088 (3:4)'
                          : '1920×1080 (16:9) · 1080×1920 (9:16) · 1440×1440 (1:1) · 1632×1248 (4:3) · 1248×1632 (3:4)'
                      }}
                    </div> -->
                  </button>
                </div>
              </div>

              <!-- Duration -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Duration</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="item in ['5s','10s','15s']"
                    :key="item"
                    type="button"
                    class="w-full p-2.5 rounded-lg border-2 transition-all duration-300 text-center text-sm"
                    :class="
                      form.text.duration === item
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    "
                    @click="form.text.duration = item"
                  >
                    <div class="font-semibold text-sm">{{ item }}</div>
                  </button>
                </div>
              </div>

              <!-- Aspect Ratio -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Aspect ratio</label>
                <div class="grid grid-cols-5 gap-2">
                  <button
                    v-for="item in aspectOptions"
                    :key="item"
                    type="button"
                    class="w-full px-2 py-2 rounded-lg border-2 transition-all duration-300 text-center text-xs"
                    :class="[
                      form.text.aspect === item && !isAspectDisabled(item)
                        ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600',
                      isAspectDisabled(item) ? 'opacity-40 cursor-not-allowed' : 'hover:border-gray-400 hover:bg-gray-200'
                    ]"
                    :disabled="isAspectDisabled(item)"
                    @click="!isAspectDisabled(item) && (form.text.aspect = item)"
                  >
                    <div class="font-semibold text-xs">{{ item }}</div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Image To Video -->
            <div v-else-if="activeMode === 'image'" class="space-y-6">
              <!-- Upload Images -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-900 mb-3">
                    Upload image
                    <span class="text-red-500 ml-0.5">*</span>
                  </label>
                  <div
                    class="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-purple-300 rounded-2xl cursor-pointer hover:border-purple-400 transition-colors bg-purple-50/40 overflow-hidden group"
                    @click="checkLoginStatus($event) && triggerImageUpload()"
                  >
                    <div v-if="imagePreview" class="w-full h-full flex items-center justify-center">
                      <img :src="imagePreview" alt="preview" class="max-w-full max-h-full object-contain rounded-xl" />
                      <!-- 删除按钮 -->
                      <button
                        type="button"
                        class="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center text-xs hover:bg-black"
                        @click.stop="clearImage"
                      >
                        ✕
                      </button>
                    </div>
                    <div v-else class="flex flex-col items-center justify-center p-4 text-center">
                      <svg
                        class="w-10 h-10 text-purple-400 mb-3 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                        />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <p class="text-sm font-medium text-purple-600">Click to upload the first frame</p>
                      <p class="text-xs text-gray-500 mt-1">
                        Supports JPEG / JPG / PNG / BMP / WEBP · 360–2000px · Max 5MB
                      </p>
                    </div>
                  </div>
                  <input
                    ref="imageInputRef"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    @change="onImageChange"
                  />
                </div>

                <div>
                  <label class="block text-sm font-semibold text-gray-900 mb-3">Upload last frame (optional)</label>
                  <div
                    class="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-purple-200 rounded-2xl cursor-pointer hover:border-purple-400 transition-colors bg-purple-50/30 overflow-hidden group"
                    @click="checkLoginStatus($event) && triggerLastImageUpload()"
                  >
                    <div v-if="lastImagePreview" class="w-full h-full flex items-center justify-center">
                      <img :src="lastImagePreview" alt="last frame preview" class="max-w-full max-h-full object-contain rounded-xl" />
                      <button
                        type="button"
                        class="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center text-xs hover:bg-black"
                        @click.stop="clearLastImage"
                      >
                        ✕
                      </button>
                    </div>
                    <div v-else class="flex flex-col items-center justify-center p-4 text-center">
                      <svg
                        class="w-10 h-10 text-purple-400 mb-3 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                        />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <p class="text-sm font-medium text-purple-600">Click to upload the last frame</p>
                      <p class="text-xs text-gray-500 mt-1">
                        Supports JPEG / JPG / PNG / BMP / WEBP · 360–2000px · Max 5MB
                      </p>
                    </div>
                  </div>
                  <input
                    ref="lastImageInputRef"
                    type="file"
                    class="hidden"
                    accept="image/*"
                    @change="onLastImageChange"
                  />
                </div>
              </div>

              <!-- 视频续写-->
              <!-- <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Video continuation <span class="text-gray-500 font-normal">(optional)</span>
                </label>
                <div class="flex items-center text-[11px] text-gray-500 mb-2 gap-1">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center w-4 h-4 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200"
                    @click="showWanVideoTip = !showWanVideoTip"
                  >
                    i
                  </button>
                  <span>Click for how continuation works</span>
                </div>
                <div
                  v-if="showWanVideoTip"
                  class="mb-2 rounded-lg bg-purple-50 border border-purple-100 px-3 py-2 text-[11px] text-gray-700 leading-relaxed"
                >
                The model will generate a continuation based on the video content. The upper limit of the continuation duration is controlled by the "duration" parameter. <br /> For example, when "duration" = 15,
                if the input video is 3 seconds long, the model will generate a continuation of 12 seconds, resulting in a total output video duration of 15 seconds, and the charge will be based on 15 seconds.
                </div>
                <div
                  class="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-purple-200 rounded-2xl cursor-pointer hover:border-purple-400 transition-colors bg-purple-50/30 overflow-hidden group"
                  @click="checkLoginStatus($event) && triggerWanVideoUpload()"
                >
                  <div v-if="wanVideoUrl" class="w-full h-full flex items-center justify-center">
                    <video
                      :src="wanVideoUrl"
                      controls
                      class="w-full h-full bg-black object-contain rounded-xl"
                    >
                      Your browser does not support video playback.
                    </video>
                    <button
                      type="button"
                      class="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center text-xs hover:bg-black"
                      @click.stop="clearWanVideo"
                    >
                      ✕
                    </button>
                  </div>
                  <div v-else class="flex flex-col items-center justify-center p-4 text-center">
                    <svg
                      class="w-10 h-10 text-purple-400 mb-3 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <p class="text-sm font-medium text-purple-600">Click to upload a reference video</p>
                    <p class="text-xs text-gray-500 mt-1">
                      Supports MP4 / MOV · 2–30s · Max 30MB
                    </p>
                  </div>
                </div>
                <input
                  ref="wanVideoInputRef"
                  type="file"
                  class="hidden"
                  accept="video/*"
                  @change="onWanVideoChange"
                />
              </div> -->

              <!-- Prompt + Inspiration Mode 开关 -->
              <div>
                <div class="flex items-center justify-between mb-2 gap-3">
                  <div>
                    <p class="text-sm font-semibold text-gray-900">
                      Prompt
                      <span class="text-red-500 ml-0.5">*</span>
                    </p>
                    <p class="text-[11px] text-gray-500 mt-0.5">
                      Describe how the still image should animate.
                    </p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <div class="text-right">
                      <p class="text-xs font-medium text-gray-900 leading-tight">Inspiration Mode</p>
                      <p class="text-[11px] text-gray-500 leading-tight">More imaginative variations</p>
                    </div>
                    <button
                      type="button"
                      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      :class="form.image.inspiration ? 'bg-blue-600' : 'bg-gray-200'"
                      @click="form.image.inspiration = !form.image.inspiration"
                    >
                      <span
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                        :class="form.image.inspiration ? 'translate-x-6' : 'translate-x-1'"
                      />
                    </button>
                  </div>
                </div>
                <textarea
                  v-model="form.image.prompt"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-colors bg-white"
                  placeholder="Describe how the still image should animate — motion, camera moves, lighting changes..."
                  maxlength="1500"
                  @click="checkLoginStatus($event)"
                />
                <div class="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>Supports both English and Chinese prompts</span>
                  <span>{{ form.image.prompt.length }}/1500</span>
                </div>
              </div>

              <!-- Resolution -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Resolution</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="item in ['720P','1080P']"
                    :key="item"
                    type="button"
                    class="w-full p-3 rounded-lg border-2 transition-all duration-300 text-center text-sm"
                    :class="
                      form.image.resolution === item
                        ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    "
                    @click="form.image.resolution = item"
                  >
                    <div class="font-semibold text-sm">{{ item }}</div>
                    <!-- <div class="text-[11px] mt-1 text-gray-500">
                      {{
                        item === '480P'
                          ? '832×480 (16:9) · 480×832 (9:16) · 624×624 (1:1)'
                          : item === '720P'
                          ? '1280×720 (16:9) · 720×1280 (9:16) · 960×960 (1:1) · 1088×832 (4:3) · 832×1088 (3:4)'
                          : '1920×1080 (16:9) · 1080×1920 (9:16) · 1440×1440 (1:1) · 1632×1248 (4:3) · 1248×1632 (3:4)'
                      }}
                    </div> -->
                  </button>
                </div>
              </div>

              <!-- Duration -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Duration</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="item in ['5s','10s','15s']"
                    :key="item"
                    type="button"
                    class="w-full p-2.5 rounded-lg border-2 transition-all duration-300 text-center text-sm"
                    :class="
                      form.image.duration === item
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    "
                    @click="form.image.duration = item"
                  >
                    <div class="font-semibold text-sm">{{ item }}</div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Reference To Video -->
            <div v-else class="space-y-6">
              <div>
                <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <label class="block text-sm font-semibold text-gray-900">
                    Reference media
                    <span class="text-red-500 ml-0.5">*</span>
                  </label>
                  <span class="text-xs text-gray-500">
                    {{ refMediaTotal }} / {{ REF_MEDIA_MAX_TOTAL }} · At least one video or image · Videos + images ≤ {{ REF_MEDIA_MAX_TOTAL }}
                  </span>
                </div>
                <p class="text-[11px] text-gray-500 mb-3">
                  Upload multiple reference videos and/or images. Use character1, character2… for videos and image1, image2… for images in your prompt (adjust if your workflow uses different tags).
                </p>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div
                    v-for="slot in refVideoSlots"
                    :key="'v-' + slot.id"
                    class="relative h-36 border-2 border-teal-200 rounded-2xl overflow-hidden bg-black/5"
                  >
                    <video :src="slot.url" controls class="w-full h-full object-contain bg-black" />
                    <button
                      type="button"
                      class="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center text-xs hover:bg-black"
                      @click.stop="removeRefVideoSlot(slot.id)"
                    >
                      ✕
                    </button>
                  </div>
                  <div
                    v-for="slot in refImageSlots"
                    :key="'i-' + slot.id"
                    class="relative h-36 border-2 border-purple-200 rounded-2xl overflow-hidden bg-purple-50/40"
                  >
                    <img :src="slot.url" alt="" class="w-full h-full object-contain" />
                    <button
                      type="button"
                      class="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center text-xs hover:bg-black"
                      @click.stop="removeRefImageSlot(slot.id)"
                    >
                      ✕
                    </button>
                  </div>
                  <button
                    v-if="refMediaTotal < REF_MEDIA_MAX_TOTAL"
                    type="button"
                    class="h-36 border-2 border-dashed border-teal-300 rounded-2xl flex flex-col items-center justify-center gap-1 text-teal-700 bg-teal-50/40 hover:border-teal-400 hover:bg-teal-50/70 transition-colors"
                    @click="checkLoginStatus($event) && triggerRefVideosUpload()"
                  >
                    <span class="text-2xl leading-none">+</span>
                    <span class="text-xs font-medium px-2 text-center">Add videos</span>
                  </button>
                  <button
                    v-if="refMediaTotal < REF_MEDIA_MAX_TOTAL"
                    type="button"
                    class="h-36 border-2 border-dashed border-purple-300 rounded-2xl flex flex-col items-center justify-center gap-1 text-purple-700 bg-purple-50/40 hover:border-purple-400 hover:bg-purple-50/70 transition-colors"
                    @click="checkLoginStatus($event) && triggerRefImagesUpload()"
                  >
                    <span class="text-2xl leading-none">+</span>
                    <span class="text-xs font-medium px-2 text-center">Add images</span>
                  </button>
                </div>
                <input
                  ref="refVideosInputRef"
                  type="file"
                  class="hidden"
                  accept="video/*"
                  multiple
                  @change="onRefVideosChange"
                />
                <input
                  ref="refImagesInputRef"
                  type="file"
                  class="hidden"
                  accept="image/*"
                  multiple
                  @change="onRefImagesChange"
                />
                <p class="text-xs text-gray-500 mt-2">
                  Video: MP4 / MOV · 2–30s · Max 30MB each. Image: JPEG / PNG / WebP / BMP · max 5MB · 360–2000px.
                </p>
              </div>

              <!-- Prompt + Inspiration Mode 开关 -->
              <div>
                <div class="flex items-center justify-between mb-2 gap-3">
                  <div>
                    <p class="text-sm font-semibold text-gray-900">
                      Prompt
                      <span class="text-red-500 ml-0.5">*</span>
                    </p>
                    <p class="text-[11px] text-gray-500 mt-0.5">
                      Reference your uploaded videos (character1, character2…) and/or images (image1, image2…) as needed.
                    </p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <div class="text-right">
                      <p class="text-xs font-medium text-gray-900 leading-tight">Inspiration Mode</p>
                      <p class="text-[11px] text-gray-500 leading-tight">Looser, more creative output</p>
                    </div>
                    <button
                      type="button"
                      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      :class="form.reference.inspiration ? 'bg-blue-600' : 'bg-gray-200'"
                      @click="form.reference.inspiration = !form.reference.inspiration"
                    >
                      <span
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                        :class="form.reference.inspiration ? 'translate-x-6' : 'translate-x-1'"
                      />
                    </button>
                  </div>
                </div>
                <textarea
                  v-model="form.reference.prompt"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none transition-colors bg-white"
                  placeholder="e.g. character1 walks with image1 as style reference, or combine multiple reference clips…"
                  maxlength="1500"
                  @click="checkLoginStatus($event)"
                />
                <div class="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>Supports both English and Chinese prompts</span>
                  <span>{{ form.reference.prompt.length }}/1500</span>
                </div>
              </div>

              <!-- Resolution -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Resolution</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="item in ['720P','1080P']"
                    :key="item"
                    type="button"
                    class="w-full p-3 rounded-lg border-2 transition-all duration-300 text-center text-sm"
                    :class="
                      form.reference.resolution === item
                        ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    "
                    @click="form.reference.resolution = item"
                  >
                    <div class="font-semibold text-sm">{{ item }}</div>
                    <!-- <div class="text-[11px] mt-1 text-gray-500">
                      {{
                        item === '480P'
                          ? '832×480 (16:9) · 480×832 (9:16) · 624×624 (1:1)'
                          : item === '720P'
                          ? '1280×720 (16:9) · 720×1280 (9:16) · 960×960 (1:1) · 1088×832 (4:3) · 832×1088 (3:4)'
                          : '1920×1080 (16:9) · 1080×1920 (9:16) · 1440×1440 (1:1) · 1632×1248 (4:3) · 1248×1632 (3:4)'
                      }}
                    </div> -->
                  </button>
                </div>
              </div>

              <!-- Duration -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Duration</label>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="item in ['5s','10s']"
                    :key="item"
                    type="button"
                    class="w-full p-2.5 rounded-lg border-2 transition-all duration-300 text-center text-sm"
                    :class="
                      form.reference.duration === item
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    "
                    @click="form.reference.duration = item"
                  >
                    <div class="font-semibold text-sm">{{ item }}</div>
                  </button>
                </div>
              </div>

              <!-- Aspect Ratio -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Aspect ratio</label>
                <div class="grid grid-cols-5 gap-2">
                  <button
                    v-for="item in aspectOptions"
                    :key="item"
                    type="button"
                    class="w-full px-2 py-2 rounded-lg border-2 transition-all duration-300 text-center text-xs"
                    :class="[
                      form.reference.aspect === item && !isAspectDisabled(item)
                        ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600',
                      isAspectDisabled(item) ? 'opacity-40 cursor-not-allowed' : 'hover:border-gray-400 hover:bg-gray-200'
                    ]"
                    :disabled="isAspectDisabled(item)"
                    @click="!isAspectDisabled(item) && (form.reference.aspect = item)"
                  >
                    <div class="font-semibold text-xs">{{ item }}</div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Audio Upload：reference 下仅隐藏 UI，提交时仍可按已选音频上传 -->
            <div v-if="activeMode !== 'reference'" class="space-y-2">
              <label class="block text-sm font-semibold text-gray-900">
                Upload audio <span class="text-gray-500 font-normal">(optional)</span>
              </label>
              <div
                class="relative flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-blue-300 rounded-2xl cursor-pointer hover:border-blue-400 transition-colors bg-blue-50/40 overflow-hidden group"
                @click="checkLoginStatus($event) && triggerAudioUpload()"
              >
                <div v-if="audioPreviewUrl" class="w-full h-full flex flex-col items-center justify-center px-4 gap-2">
                  <div class="w-full flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2 min-w-0">
                      <svg class="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19V6l12-2v13" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19a2 2 0 104 0 2 2 0 00-4 0zM19 17a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                      <span class="text-sm font-medium text-blue-700 truncate">
                        {{ audioName || 'Audio selected' }}
                      </span>
                    </div>
                    <button
                      type="button"
                      class="w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center text-xs hover:bg-black flex-shrink-0"
                      @click.stop="clearAudio"
                    >
                      ✕
                    </button>
                  </div>
                  <audio :src="audioPreviewUrl" controls class="w-full h-8" />
                </div>
                <div v-else class="flex flex-col items-center justify-center p-4 text-center">
                  <svg class="w-9 h-9 text-blue-400 mb-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4" />
                  </svg>
                  <p class="text-sm font-medium text-blue-600">Click to upload audio</p>
                  <p class="text-xs text-gray-500 mt-0.5">Supports WAV / MP3 · 3–30s · Max 15MB</p>
                </div>
              </div>
              <input
                ref="audioInputRef"
                type="file"
                class="hidden"
                accept=".wav,.mp3,audio/wav,audio/x-wav,audio/mpeg"
                @change="onAudioChange"
              />
            </div>

            <!-- 生成按钮 -->
            <div class="pt-2 space-y-2">
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                <span>{{ isLoading ? 'Generating...' : '🎬 Generate Video' }}</span>
                <span
                  v-if="!isLoading"
                  class="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-white/10 border border-white/40"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-300 mr-1.5" />
                  <span>{{ creditCostLabel }}</span>
                </span>
              </button>
              <!-- 测试生成按钮 -->
              <!-- <button
                type="button"
                class="w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-300 text-sm"
                @click="handleTestGenerate"
              >
                🧪 Test Generate (Skip API)
              </button> -->
      
            </div>
          </form>
        </div>

        <!-- 右侧预览区域 -->
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 min-h-[520px] flex flex-col">
          <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Your generated video will appear here.</h3>

          <!-- 模拟预览内容 -->
          <div class="flex-1 flex flex-col space-y-6">
            <!-- 视频占位图 / 默认示例视频 -->
            <div
              ref="previewContainerRef"
              class="relative flex-1 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center justify-center"
            >
              <div class="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#38bdf8_0,_transparent_50%),_radial-gradient(circle_at_bottom,_#a855f7_0,_transparent_55%)]" />
              <!-- 加载中遮罩（任务生成或默认预览加载） -->
              <div
                v-if="isLoading || isDefaultLoading"
                class="absolute inset-0 z-20 bg-black flex flex-col items-center justify-center space-y-3"
              >
                <div class="w-10 h-10 border-4 border-white/40 border-t-white rounded-full animate-spin" />
                <p class="text-xs text-slate-100/90 text-center">
                  <span v-if="isLoading">
                    Your video is being generated.<br />
                    You can check the result in your
                    <a href="/profile" class="text-blue-500 hover:underline">dashboard</a>
                    in about 5 minutes
                  </span>
                  <span v-else>
                    Loading preview video...
                  </span>
                </p>
              </div>

              <!-- 生成结果视频 -->
              <div v-if="videoUrl" class="relative z-10 w-full flex items-center justify-center overflow-hidden">
                <video
                  ref="generatedVideoRef"
                  :src="videoUrl"
                  controls
                  :style="videoStyle"
                  class="bg-black"
                  @loadedmetadata="onVideoLoaded"
                >
                  Your browser does not support video playback.
                </video>
              </div>

              <!-- 默认示例视频 -->
              <div
                v-else-if="showDefaultVideo"
                class="relative z-10 w-full h-full flex items-center justify-center"
              >
                <video
                  ref="defaultVideoRef"
                  :src="defaultVideoSrc"
                  :poster="defaultPoster"
                  controls
                  class="w-full h-full bg-black object-contain"
                  @loadeddata="onDefaultVideoLoaded"
                >
                  Your browser does not support video playback.
                </video>
              </div>

              <!-- 默认封面 + 播放按钮 -->
              <div v-else class="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  :src="defaultPoster"
                  alt="Wan 2.7 default preview"
                  class="w-full h-full object-cover opacity-80"
                />
                <button
                  type="button"
                  class="absolute w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
                  @click="handleDefaultPlay"
                >
                  <svg class="w-7 h-7 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8 5.14v13.72c0 .79.87 1.27 1.54.84l9.06-6.86a1 1 0 000-1.64L9.54 4.3A1 1 0 008 5.14z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- 配置摘要 -->
            <div class="space-y-3">
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-500">Mode</span>
                <span class="font-medium text-gray-900">{{ modeLabel }}</span>
              </div>
              <div class="grid grid-cols-3 gap-3 text-xs">
                <div class="px-3 py-2 bg-gray-50 rounded-xl">
                  <p class="text-gray-500 mb-1">Resolution</p>
                  <p class="font-semibold text-gray-900">
                    {{
                      activeMode === 'text'
                        ? form.text.resolution
                        : activeMode === 'image'
                        ? form.image.resolution
                        : form.reference.resolution
                    }}
                  </p>
                </div>
                <div class="px-3 py-2 bg-gray-50 rounded-xl">
                  <p class="text-gray-500 mb-1">Duration</p>
                  <p class="font-semibold text-gray-900">
                    {{
                      activeMode === 'text'
                        ? form.text.duration
                        : activeMode === 'image'
                        ? form.image.duration
                        : form.reference.duration
                    }}
                  </p>
                </div>
                <div class="px-3 py-2 bg-gray-50 rounded-xl" v-if="activeMode !== 'image' || true">
                  <p class="text-gray-500 mb-1">Aspect ratio</p>
                  <p class="font-semibold text-gray-900">
                    {{
                      activeMode === 'text'
                        ? form.text.aspect
                        : activeMode === 'reference'
                        ? form.reference.aspect
                        : 'N/A'
                    }}
                  </p>
                </div>
              </div>

              <div class="flex items-center justify-between text-xs text-gray-500">
                <!-- <div class="flex items-center space-x-2">
                  <span
                    class="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-medium text-[11px]"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse" />
                    Inspiration:
                    {{
                      (activeMode === 'text'
                        ? form.text.inspiration
                        : activeMode === 'image'
                        ? form.image.inspiration
                        : form.reference.inspiration)
                        ? 'On'
                        : 'Off'
                    }}
                  </span>
                </div> -->
                <!-- <span>
                  <span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
                  <span v-else-if="isLoading" class="text-blue-500">Generating video...</span>
                  <span v-else-if="videoUrl">Generation completed. You can preview and download the video.</span>
                  <span v-else>Generated results will be previewed here</span>
                </span> -->
              </div>

              <!-- 下载按钮 -->
              <div v-if="videoUrl" class="flex justify-center mt-2">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 rounded-lg text-xs font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
                  @click="downloadVideo"
                >
                  Download Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref, onBeforeUnmount } from 'vue'
import { useNuxtApp } from 'nuxt/app'
import {
  createTasksWan27,
  createTasksWan27V2V,
  checkTaskWan27,
  uploadVolcengineImageAndHk,
  uploadVolcengineVideoAndHk,
  uploadVolcengineAudioAndHk
} from '~/api'
import { validateImageFile, validateVideoFile } from '~/utils/uploadAPI'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user';
const router = useRouter()
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo);

type Mode = 'text' | 'image' | 'reference'

const activeMode = ref<Mode>('text')

const form = reactive({
  text: {
    prompt: '',
    inspiration: false,
    resolution: '720P',
    duration: '5s',
    aspect: '16:9'
  },
  image: {
    prompt: '',
    inspiration: false,
    resolution: '720P',
    duration: '5s'
  },
  reference: {
    prompt: '',
    inspiration: false,
    resolution: '720P',
    duration: '5s',
    aspect: '16:9'
  }
})

const aspectOptions = ['16:9', '9:16', '1:1', '4:3', '3:4']

const imagePreview = ref<string | null>(null)
const imageInputRef = ref<HTMLInputElement | null>(null)
const imageFile = ref<File | null>(null)
const lastImagePreview = ref<string | null>(null)
const lastImageInputRef = ref<HTMLInputElement | null>(null)
const lastImageFile = ref<File | null>(null)
const wanVideoUrl = ref<string | null>(null)
const wanVideoFile = ref<File | null>(null)
const wanVideoInputRef = ref<HTMLInputElement | null>(null)
const showWanVideoTip = ref(false)

/** Reference 模式：参考视频 + 参考图，合计最多 5 个，至少 1 个 */
const REF_MEDIA_MAX_TOTAL = 5

type RefMediaSlot = { id: string; file: File; url: string }

const refVideoSlots = ref<RefMediaSlot[]>([])
const refImageSlots = ref<RefMediaSlot[]>([])
const refVideosInputRef = ref<HTMLInputElement | null>(null)
const refImagesInputRef = ref<HTMLInputElement | null>(null)

const refMediaTotal = computed(() => refVideoSlots.value.length + refImageSlots.value.length)

const nextRefSlotId = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`

const audioName = ref<string | null>(null)
const audioFile = ref<File | null>(null)
const audioPreviewUrl = ref<string | null>(null)
const audioInputRef = ref<HTMLInputElement | null>(null)

const isLoading = ref(false)
const videoUrl = ref<string | null>(null)
const errorMessage = ref<string | null>(null)
const currentTaskId = ref<string | null>(null)
let pollTimer: number | null = null

// 测试模式：使用固定的测试task_id（可以修改为实际的task_id进行测试）
const TEST_TASK_ID = '9c4cbc2f-c5e5-49d4-83d5-23d05761c083'

// 默认示例视频（封面 + 视频）
const defaultPoster = 'https://cfsource.wan2video.com/wan2video/wan27/wan-2-7.webp'
const defaultVideoSrc = 'https://cfsource.wan2video.com/wan2video/wan27/wan-2-7.mp4'
const showDefaultVideo = ref(false)
const isDefaultLoading = ref(false)
const defaultVideoRef = ref<HTMLVideoElement | null>(null)

// 视频缩放相关
const previewContainerRef = ref<HTMLElement | null>(null)
const generatedVideoRef = ref<HTMLVideoElement | null>(null)
const videoStyle = ref<{ width?: string; height?: string; maxWidth?: string; maxHeight?: string }>({})

const { $toast } = useNuxtApp() as any

const isAspectDisabled = (value: string) => {
  // Reference To Video 模式下，4:3 和 3:4 始终禁用
//   if (activeMode.value === 'reference' && (value === '4:3' || value === '3:4')) {
//     return true
//   }

  // Text / Image 模式：480P 档位仅支持 16:9 / 9:16 / 1:1；
  // 720P 与 1080P 支持 16:9 / 9:16 / 1:1 / 4:3 / 3:4
  const currentResolution =
    activeMode.value === 'text'
      ? form.text.resolution
      : activeMode.value === 'image'
      ? form.image.resolution
      : form.reference.resolution

  if (currentResolution === '480P') {
    return value === '4:3' || value === '3:4'
  }
  return false
}

const modeLabel = computed(() => {
  if (activeMode.value === 'text') return 'Text To Video'
  if (activeMode.value === 'image') return 'Image To Video'
  return 'Reference To Video'
})

const previewTitle = computed(() => {
  if (activeMode.value === 'text') {
    return form.text.prompt.trim() || 'Video preview generated based on text prompt words'
  }
  if (activeMode.value === 'image') {
    return form.image.prompt.trim() || 'Video preview generated based on the first frame image'
  }
  return form.reference.prompt.trim() || 'Video preview generated based on the reference video'
})

const previewMeta = computed(() => {
  const resolution =
    activeMode.value === 'text'
      ? form.text.resolution
      : activeMode.value === 'image'
      ? form.image.resolution
      : form.reference.resolution
  const duration =
    activeMode.value === 'text'
      ? form.text.duration
      : activeMode.value === 'image'
      ? form.image.duration
      : form.reference.duration
  const aspect =
    activeMode.value === 'text'
      ? form.text.aspect
      : activeMode.value === 'reference'
      ? form.reference.aspect
      : 'Free aspect ratio'

  return `${resolution} · ${duration} · ${aspect}`
})

const handleDefaultPlay = () => {
  if (videoUrl.value) return
  showDefaultVideo.value = true
  isDefaultLoading.value = true
}

const isLoggedIn = (): boolean => {
  if (!userInfo.value) {
    return false;
  }
  return true;
};

const checkLoginStatus = (event?: Event): boolean => {
  if (!isLoggedIn()) {
    event?.preventDefault?.()
    const loginButton = document.getElementById('bindLogin')
    if (loginButton) {
      loginButton.click()
    }
    return false
  }
  return true
}

// 免费次数
const freeTimes = computed(() => userInfo.value?.free_times || 0)

// 计算当前配置对应的积分消耗
const creditCostLabel = computed(() => {
  const resolution =
    activeMode.value === 'text'
      ? form.text.resolution
      : activeMode.value === 'image'
      ? form.image.resolution
      : form.reference.resolution

  const durationStr =
    activeMode.value === 'text'
      ? form.text.duration
      : activeMode.value === 'image'
      ? form.image.duration
      : form.reference.duration

  const duration = parseInt(durationStr, 10) || 0

  // 720P、5s 时优先检测 free_times
  if (resolution === '480P' && duration === 5 && freeTimes.value > 0) {
    return freeTimes.value + ' Free'
  }

  // Wan 2.6 积分表
  const tableTextImage: Record<string, Record<number, number>> = {
    '480P': { 5: 100, 10: 200, 15: 300 },
    '720P': { 5: 200, 10: 400, 15: 600 },
    '1080P': { 5: 400, 10: 800, 15: 1200 }
  }

  const tableReference: Record<string, Record<number, number>> = {
    '480P': { 5: 100, 10: 200 },
    '720P': { 5: 200, 10: 400 },
    '1080P': { 5: 400, 10: 800 }
  }

  const table = activeMode.value === 'reference' ? tableReference : tableTextImage
  const byRes = table[resolution]
  const credits = byRes?.[duration]

  if (!credits) return 'Credits N/A'
  return `${credits} Credits`
})

const triggerImageUpload = () => {
  if (imageInputRef.value) {
    imageInputRef.value.click()
  }
}

const triggerLastImageUpload = () => {
  if (lastImageInputRef.value) {
    lastImageInputRef.value.click()
  }
}

const triggerWanVideoUpload = () => {
  if (wanVideoInputRef.value) {
    wanVideoInputRef.value.click()
  }
}

const onImageChange = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files && target.files[0]
  if (!file) return

  try {
    await validateImageFile(file)
  } catch (err: any) {
    console.error('image validate error', err)
    $toast?.error?.(err?.message || 'Image is invalid. Please follow the upload requirements.')
    if (imageInputRef.value) {
      imageInputRef.value.value = ''
    }
    return
  }

  imageFile.value = file

  const reader = new FileReader()
  reader.onload = e => {
    imagePreview.value = e.target?.result as string
  }
  reader.readAsDataURL(file)
}

const clearImage = () => {
  imagePreview.value = null
  imageFile.value = null
  if (imageInputRef.value) {
    imageInputRef.value.value = ''
  }
}

const onLastImageChange = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files && target.files[0]
  if (!file) return

  try {
    await validateImageFile(file)
  } catch (err: any) {
    console.error('last image validate error', err)
    $toast?.error?.(err?.message || 'Image is invalid. Please follow the upload requirements.')
    if (lastImageInputRef.value) {
      lastImageInputRef.value.value = ''
    }
    return
  }

  lastImageFile.value = file

  const reader = new FileReader()
  reader.onload = e => {
    lastImagePreview.value = e.target?.result as string
  }
  reader.readAsDataURL(file)
}

const clearLastImage = () => {
  lastImagePreview.value = null
  lastImageFile.value = null
  if (lastImageInputRef.value) {
    lastImageInputRef.value.value = ''
  }
}

const onWanVideoChange = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files && target.files[0]
  if (!file) return

  // 基础格式 & 大小校验
  const ext = (file.name.split('.').pop() || '').toLowerCase()
  const type = (file.type || '').toLowerCase()
  const isMp4 = ext === 'mp4' || type === 'video/mp4'
  const isMov = ext === 'mov' || type === 'video/quicktime'
  if (!isMp4 && !isMov) {
    $toast?.error?.('视频格式仅支持 MP4、MOV')
    if (wanVideoInputRef.value) wanVideoInputRef.value.value = ''
    return
  }

  const maxSize = 100 * 1024 * 1024
  if (file.size > maxSize) {
    $toast?.error?.('视频大小不能超过 100MB')
    if (wanVideoInputRef.value) wanVideoInputRef.value.value = ''
    return
  }

  // 通过临时 URL 读取时长和分辨率
  const tempUrl = URL.createObjectURL(file)

  const readVideoMeta = async (url: string): Promise<{ duration: number; width: number; height: number }> => {
    return await new Promise((resolve, reject) => {
      const video = document.createElement('video')
      let cleaned = false

      const cleanup = () => {
        if (cleaned) return
        cleaned = true
        video.removeEventListener('loadedmetadata', onLoaded)
        video.removeEventListener('error', onError)
        video.src = ''
      }

      const onLoaded = () => {
        const { duration, videoWidth, videoHeight } = video
        cleanup()
        if (!Number.isFinite(duration) || duration <= 0 || !videoWidth || !videoHeight) {
          reject(new Error('Invalid video metadata'))
          return
        }
        resolve({ duration, width: videoWidth, height: videoHeight })
      }

      const onError = () => {
        cleanup()
        reject(new Error('Failed to read video metadata'))
      }

      video.preload = 'metadata'
      video.addEventListener('loadedmetadata', onLoaded)
      video.addEventListener('error', onError)
      video.src = url
    })
  }

  try {
    const meta = await readVideoMeta(tempUrl)

    // 时长限制：2～10s
    if (meta.duration < 2 || meta.duration > 10) {
      URL.revokeObjectURL(tempUrl)
      $toast?.error?.('参考视频时长需在 2～10 秒之间')
      if (wanVideoInputRef.value) wanVideoInputRef.value.value = ''
      return
    }

    // 分辨率范围 [240, 4096] 像素
    if (
      meta.width < 240 ||
      meta.width > 4096 ||
      meta.height < 240 ||
      meta.height > 4096
    ) {
      URL.revokeObjectURL(tempUrl)
      $toast?.error?.('视频分辨率需在 240～4096 像素之间')
      if (wanVideoInputRef.value) wanVideoInputRef.value.value = ''
      return
    }

    // 宽高比：1:8～8:1
    const ratio = meta.width / meta.height
    const minRatio = 1 / 8
    const maxRatio = 8
    if (ratio < minRatio || ratio > maxRatio) {
      URL.revokeObjectURL(tempUrl)
      $toast?.error?.('视频宽高比需在 1:8 ～ 8:1 范围内')
      if (wanVideoInputRef.value) wanVideoInputRef.value.value = ''
      return
    }

    // 校验通过，保存文件与预览 URL
    wanVideoFile.value = file

    if (wanVideoUrl.value) {
      URL.revokeObjectURL(wanVideoUrl.value)
    }
    wanVideoUrl.value = tempUrl
  } catch (err: any) {
    console.error('wan video metadata error', err)
    URL.revokeObjectURL(tempUrl)
    $toast?.error?.('读取视频信息失败，请换一个文件重试')
    if (wanVideoInputRef.value) wanVideoInputRef.value.value = ''
  }
}

const clearWanVideo = () => {
  wanVideoFile.value = null
  if (wanVideoUrl.value) {
    URL.revokeObjectURL(wanVideoUrl.value)
  }
  wanVideoUrl.value = null
  if (wanVideoInputRef.value) {
    wanVideoInputRef.value.value = ''
  }
}

const triggerRefVideosUpload = () => {
  refVideosInputRef.value?.click()
}

const triggerRefImagesUpload = () => {
  refImagesInputRef.value?.click()
}

const onRefVideosChange = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files ? Array.from(target.files) : []
  target.value = ''
  if (!files.length) return

  let remaining = REF_MEDIA_MAX_TOTAL - refMediaTotal.value
  if (remaining <= 0) {
    $toast?.error?.('参考视频与参考图像合计最多 5 个')
    return
  }

  if (files.length > remaining) {
    $toast?.error?.(`最多还可添加 ${remaining} 个文件，已忽略多余选择`)
  }

  for (const file of files.slice(0, remaining)) {
    try {
      await validateVideoFile(file)
    } catch (err: any) {
      $toast?.error?.(err?.message || '视频无效')
      continue
    }
    refVideoSlots.value.push({
      id: nextRefSlotId(),
      file,
      url: URL.createObjectURL(file)
    })
    remaining -= 1
    if (remaining <= 0) break
  }
}

const onRefImagesChange = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files ? Array.from(target.files) : []
  target.value = ''
  if (!files.length) return

  let remaining = REF_MEDIA_MAX_TOTAL - refMediaTotal.value
  if (remaining <= 0) {
    $toast?.error?.('参考视频与参考图像合计最多 5 个')
    return
  }

  if (files.length > remaining) {
    $toast?.error?.(`最多还可添加 ${remaining} 个文件，已忽略多余选择`)
  }

  for (const file of files.slice(0, remaining)) {
    try {
      await validateImageFile(file)
    } catch (err: any) {
      $toast?.error?.(err?.message || '图片无效')
      continue
    }
    refImageSlots.value.push({
      id: nextRefSlotId(),
      file,
      url: URL.createObjectURL(file)
    })
    remaining -= 1
    if (remaining <= 0) break
  }
}

const removeRefVideoSlot = (id: string) => {
  const idx = refVideoSlots.value.findIndex(s => s.id === id)
  if (idx === -1) return
  const removed = refVideoSlots.value.splice(idx, 1)[0]
  if (removed) URL.revokeObjectURL(removed.url)
}

const removeRefImageSlot = (id: string) => {
  const idx = refImageSlots.value.findIndex(s => s.id === id)
  if (idx === -1) return
  const removed = refImageSlots.value.splice(idx, 1)[0]
  if (removed) URL.revokeObjectURL(removed.url)
}

const triggerAudioUpload = () => {
  if (audioInputRef.value) {
    audioInputRef.value.click()
  }
}

const readAudioDurationSeconds = async (objectUrl: string): Promise<number> => {
  return await new Promise((resolve, reject) => {
    const audio = new Audio()
    audio.preload = 'metadata'

    const cleanup = () => {
      audio.removeEventListener('loadedmetadata', onLoaded)
      audio.removeEventListener('error', onError)
      // 释放引用，避免内存占用
      audio.src = ''
    }

    const onLoaded = () => {
      const d = audio.duration
      cleanup()
      if (!Number.isFinite(d) || d <= 0) {
        reject(new Error('Invalid audio duration'))
        return
      }
      resolve(d)
    }

    const onError = () => {
      cleanup()
      reject(new Error('Failed to read audio metadata'))
    }

    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('error', onError)
    audio.src = objectUrl
  })
}

const onAudioChange = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files && target.files[0]
  if (!file) return

  const maxSize = 15 * 1024 * 1024
  const ext = (file.name.split('.').pop() || '').toLowerCase()
  const allowedExt = ext === 'wav' || ext === 'mp3'
  const type = (file.type || '').toLowerCase()
  const allowedMime =
    type === 'audio/wav' ||
    type === 'audio/x-wav' ||
    type === 'audio/mpeg' ||
    type === 'audio/mp3'

  if (!allowedExt || (type && !allowedMime)) {
    $toast?.error?.('音频格式仅支持 WAV、MP3')
    if (audioInputRef.value) audioInputRef.value.value = ''
    return
  }
  if (file.size > maxSize) {
    $toast?.error?.('音频大小不能超过 15MB')
    if (audioInputRef.value) audioInputRef.value.value = ''
    return
  }

  // 用临时 objectURL 读时长，校验通过后再落到 preview 状态
  const tempUrl = URL.createObjectURL(file)
  try {
    const duration = await readAudioDurationSeconds(tempUrl)
    if (duration < 3 || duration > 30) {
      $toast?.error?.('音频时长需在 3～30 秒之间')
      URL.revokeObjectURL(tempUrl)
      if (audioInputRef.value) audioInputRef.value.value = ''
      return
    }

    audioName.value = file.name
    audioFile.value = file

    if (audioPreviewUrl.value) {
      URL.revokeObjectURL(audioPreviewUrl.value)
    }
    audioPreviewUrl.value = tempUrl
  } catch (e) {
    URL.revokeObjectURL(tempUrl)
    $toast?.error?.('读取音频信息失败，请换一个文件重试')
    if (audioInputRef.value) audioInputRef.value.value = ''
  }
}

const clearAudio = () => {
  audioName.value = null
  audioFile.value = null
  if (audioPreviewUrl.value) {
    URL.revokeObjectURL(audioPreviewUrl.value)
  }
  audioPreviewUrl.value = null
  if (audioInputRef.value) {
    audioInputRef.value.value = ''
  }
}

const onDefaultVideoLoaded = () => {
  isDefaultLoading.value = false
  if (defaultVideoRef.value) {
    defaultVideoRef.value
      .play()
      .catch(() => {
        // ignore autoplay errors
      })
  }
}

// 根据预览框高度智能缩放视频
const calculateVideoSize = () => {
  if (!generatedVideoRef.value || !previewContainerRef.value || !videoUrl.value) {
    return
  }

  const video = generatedVideoRef.value
  const container = previewContainerRef.value

  // 等待视频元数据加载完成
  if (video.readyState < 1) {
    return
  }

  const videoWidth = video.videoWidth
  const videoHeight = video.videoHeight

  if (!videoWidth || !videoHeight) {
    return
  }

  // 获取容器尺寸
  const containerRect = container.getBoundingClientRect()
  const containerWidth = containerRect.width
  
  // 最大高度限制为400px
  const maxHeight = 400

  // 计算视频宽高比
  const videoAspectRatio = videoWidth / videoHeight

  // 根据最大高度400px计算宽度（保持视频宽高比）
  let targetHeight = maxHeight
  let targetWidth = targetHeight * videoAspectRatio

  // 如果计算出的宽度超过容器宽度，则以容器宽度为准重新计算高度
  if (targetWidth > containerWidth) {
    targetWidth = containerWidth
    targetHeight = targetWidth / videoAspectRatio
  }

  // 最终确保不超过容器宽度和最大高度限制（双重保险）
  targetWidth = Math.min(targetWidth, containerWidth)
  targetHeight = Math.min(targetHeight, maxHeight)

  // 应用样式，使用 maxWidth 和 maxHeight 作为额外限制
  videoStyle.value = {
    width: `${targetWidth}px`,
    height: `${targetHeight}px`,
    maxWidth: `${containerWidth}px`,
    maxHeight: `${maxHeight}px`
  }
}

// 视频元数据加载完成时计算尺寸
const onVideoLoaded = () => {
  // 使用 nextTick 确保 DOM 已更新
  setTimeout(() => {
    calculateVideoSize()
  }, 100)
}

// 监听窗口大小变化，重新计算视频尺寸
let resizeTimer: number | null = null
const handleResize = () => {
  if (resizeTimer) {
    clearTimeout(resizeTimer)
  }
  resizeTimer = window.setTimeout(() => {
    if (videoUrl.value) {
      calculateVideoSize()
    }
  }, 200)
}

if (typeof window !== 'undefined') {
  window.addEventListener('resize', handleResize)
}

const getSizeByConfig = (resolution: string, aspect?: string) => {
  const map: Record<string, Record<string, string>> = {
    // '480P': {
    //   '16:9': '832*480',
    //   '9:16': '480*832',
    //   '1:1': '624*624'
    // },
    '720P': {
      '16:9': '1280*720',
      '9:16': '720*1280',
      '1:1': '960*960',
      '4:3': '1088*832',
      '3:4': '832*1088'
    },
    '1080P': {
      '16:9': '1920*1080',
      '9:16': '1080*1920',
      '1:1': '1440*1440',
      '4:3': '1632*1248',
      '3:4': '1248*1632'
    }
  }

  const byResolution = map[resolution]
  if (!byResolution) return ''

  const aspectKey = aspect || '16:9'
  return byResolution[aspectKey] || ''
}

const buildPayload = () => {
  let prompt = ''
  let resolution = ''
  let duration = ''
  let aspect: string | undefined
  let aspect_ratio: string | undefined
  let inspiration = false

  if (activeMode.value === 'text') {
    prompt = form.text.prompt.trim()
    resolution = form.text.resolution
    duration = form.text.duration
    aspect = form.text.aspect
    aspect_ratio = form.text.aspect || '16:9'
    inspiration = form.text.inspiration
  } else if (activeMode.value === 'image') {
    prompt = form.image.prompt.trim()
    resolution = form.image.resolution
    duration = form.image.duration
    // 图片模式默认采用 16:9 尺寸
    aspect = '16:9'
    inspiration = form.image.inspiration
  } else {
    prompt = form.reference.prompt.trim()
    resolution = form.reference.resolution
    duration = form.reference.duration
    aspect = form.reference.aspect
    inspiration = form.reference.inspiration
  }

  const size = getSizeByConfig(resolution, aspect)
  const durationSeconds = parseInt(duration, 10) || 10

  return {
    prompt,
    resolution,
    duration: durationSeconds,
    prompt_extend: inspiration ? true : false,

    size,
    ...(activeMode.value === 'text' ? { aspect_ratio: aspect_ratio || '16:9' } : {})
  }
}

const stopPolling = () => {
  if (pollTimer !== null) {
    clearInterval(pollTimer)
    pollTimer = null
  }
}

const startPolling = (taskId: string) => {
  let attempts = 0
  stopPolling()

  pollTimer = window.setInterval(async () => {
    // attempts += 1
    try {
      const res: any = await checkTaskWan27(taskId)
      const data = res?.data || {}
      const status = data.status
      const url = data.url || data.video_url

      if (status === 1 && url) {
        videoUrl.value = url
        isLoading.value = false
        errorMessage.value = null
        stopPolling()
        await userStore.fetchUserInfo(true)
        // 视频加载后重新计算尺寸
        setTimeout(() => {
          calculateVideoSize()
        }, 300)
        return
      }else if(status < 0){
        isLoading.value = false
        errorMessage.value = data.status_msg || 'Failed to generate video.'
        stopPolling()
        return
      }

      // 超时保护：最多轮询约 2 分钟
    //   if (attempts >= 24) {
    //     isLoading.value = false
    //     errorMessage.value = 'Task timeout, please try again later.'
    //     stopPolling()
    //   }
    } catch (e) {
      console.error('checkTaskWan26 error', e)
      isLoading.value = false
      errorMessage.value = 'Failed to query task status.'
      stopPolling()
    }
  }, 5000)
}

// 测试生成函数：跳过创建任务API，直接开启loading，5秒后查询checkTaskWan26
const handleTestGenerate = async () => {
  // 检查登录状态
  if (!checkLoginStatus()) {
    return
  }

  // 直接开启loading状态
  isLoading.value = true
  videoUrl.value = null
  errorMessage.value = null
  currentTaskId.value = TEST_TASK_ID
  stopPolling()

  // 5秒后开始查询任务状态
  setTimeout(() => {
    if (currentTaskId.value) {
      startPolling(currentTaskId.value)
    }
  }, 5000)
}

const handleSubmit = async () => {
  const basePayload = buildPayload()

  // Prompt 必填
  if (!basePayload.prompt) {
    errorMessage.value = 'Prompt cannot be empty.'
    $toast?.error?.('Prompt is required')
    return
  }

  // 图片必选（Image To Video）
  if (activeMode.value === 'image' && !imageFile.value) {
    errorMessage.value = 'Please upload an image first.'
    $toast?.error?.('Image is required for Image To Video mode')
    return
  }

  // Reference To Video：参考视频与参考图至少 1 个，合计 ≤ 5（由上传逻辑限制，此处再校验）
  if (activeMode.value === 'reference') {
    const nV = refVideoSlots.value.length
    const nI = refImageSlots.value.length
    if (nV + nI < 1) {
      errorMessage.value = 'Please upload at least one reference video or image.'
      $toast?.error?.('请至少上传 1 个参考视频或参考图像')
      return
    }
    if (nV + nI > REF_MEDIA_MAX_TOTAL) {
      errorMessage.value = 'Reference videos and images combined cannot exceed 5.'
      $toast?.error?.('参考视频与参考图像合计不能超过 5 个')
      return
    }
  }

  if (!basePayload.size) {
    errorMessage.value = 'Invalid resolution or aspect ratio.'
    $toast?.error?.('Invalid resolution or aspect ratio')
    return
  }

  isLoading.value = true
  videoUrl.value = null
  errorMessage.value = null
  currentTaskId.value = null
  stopPolling()

  const payload: any = { ...basePayload }

  try {
    // Image To Video 模式：先上传图片获取 image_url
    if (activeMode.value === 'image') {
      // try {
      //   const uploadRes: any = await upload({ file: imageFile.value as File })
      //   if (uploadRes && uploadRes.code === 200 && uploadRes.data) {
      //     payload.image_url = uploadRes.data
      //   } else {
      //     isLoading.value = false
      //     const msg = uploadRes?.msg || 'Image upload failed.'
      //     errorMessage.value = msg
      //     $toast?.error?.(msg)
      //     return
      //   }
      // } catch (uploadError: any) {
      //   console.error('upload error', uploadError)
      //   const msg = uploadError?.msg || 'Image upload failed.'
      //   isLoading.value = false
      //   errorMessage.value = msg
      //   $toast?.error?.(msg)
      //   return
      // }

      // 图生模式可选参考视频，直接以临时文件字段透传
      if (wanVideoFile.value) {
        payload.wanVideo = wanVideoFile.value
      }

      if (imageFile.value) {
        payload.image = imageFile.value
      }

      // 尾帧图直接以临时文件字段透传，不走 upload 接口
      if (lastImageFile.value) {
        payload.last_image = lastImageFile.value
      }
    }

    // Reference To Video：先走火山双链路上传，再创建任务（URL 数组写入对应字段）
    if (activeMode.value === 'reference') {
      const image_list: string[] = []
      const reference_images: string[] = []
      const video_list: string[] = []
      const reference_videos: string[] = []
      const audio_list: string[] = []
      const reference_audios: string[] = []

      for (const slot of refImageSlots.value) {
        const up: any = await uploadVolcengineImageAndHk(slot.file)
        if (up?.code !== 200 || !up?.data?.r3_url || !up?.data?.hk_url) {
          isLoading.value = false
          const msg = up?.msg || 'reference image upload failed'
          errorMessage.value = msg
          $toast?.error?.(msg)
          return
        }
        image_list.push(up.data.r3_url)
        reference_images.push(up.data.hk_url)
      }

      for (const slot of refVideoSlots.value) {
        const up: any = await uploadVolcengineVideoAndHk(slot.file)
        if (up?.code !== 200 || !up?.data?.r3_url || !up?.data?.hk_url) {
          isLoading.value = false
          const msg = up?.msg || 'reference video upload failed'
          errorMessage.value = msg
          $toast?.error?.(msg)
          return
        }
        video_list.push(up.data.r3_url)
        reference_videos.push(up.data.hk_url)
      }

      if (audioFile.value) {
        const up: any = await uploadVolcengineAudioAndHk(audioFile.value)
        if (up?.code !== 200 || !up?.data?.r3_url || !up?.data?.hk_url) {
          isLoading.value = false
          const msg = up?.msg || 'audio upload failed'
          errorMessage.value = msg
          $toast?.error?.(msg)
          return
        }
        audio_list.push(up.data.r3_url)
        reference_audios.push(up.data.hk_url)
      }

      payload.image_list = [...image_list]
      payload.reference_images = [...reference_images]
      payload.video_list = [...video_list]
      payload.reference_videos = [...reference_videos]
      payload.audio_list = [...audio_list]
      payload.reference_audios = [...reference_audios]
    }

    // 非 Reference 模式：可选音频仍走临时文件字段
    if (audioFile.value && activeMode.value !== 'reference') {
      payload.audito = audioFile.value
    }

    
    const res: any = activeMode.value === 'reference' ? await createTasksWan27V2V(payload) : await createTasksWan27(payload);
    const taskId = res?.data?.task_id

    if (res?.code === 200 && taskId) {
      currentTaskId.value = taskId
      $toast?.success?.('Video generation task created successfully!')
      startPolling(taskId)
    } else {
      isLoading.value = false
      errorMessage.value = res?.msg || 'Failed to create task.'
 
      $toast?.error?.(res?.msg || 'Failed to create task.')
      if(res?.msg ==='Credits is insufficient, Please recharge'){
        router.push('/pricing')
        return
      }
    }
  } catch (e: any) {
    console.error('createTasksWan27 error', e)
    isLoading.value = false
    errorMessage.value = e?.msg || 'Failed to create task.'
    $toast?.error?.(e?.msg || 'Failed to create task.')
    if(e?.msg ==='insufficient user usage limit'){
      router.push('/pricing')
      return
    }
  }
}

const downloadVideo = async () => {
  if (!videoUrl.value) return
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  try {
    const response = await fetch(videoUrl.value)
    const blob = await response.blob()
    const objectUrl = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = objectUrl
    link.download = 'wan27-video.mp4'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(objectUrl)
  } catch (e) {
    console.error('download video error', e)
    $toast?.error?.('Failed to download video, please try again.')
  }
}

onBeforeUnmount(() => {
  stopPolling()
  refVideoSlots.value.forEach(s => URL.revokeObjectURL(s.url))
  refImageSlots.value.forEach(s => URL.revokeObjectURL(s.url))
  if (audioPreviewUrl.value) {
    URL.revokeObjectURL(audioPreviewUrl.value)
  }
  if (wanVideoUrl.value) {
    URL.revokeObjectURL(wanVideoUrl.value)
  }
  // 清理 resize 监听器
  if (typeof window !== 'undefined') {
    if (resizeTimer) {
      clearTimeout(resizeTimer)
    }
    window.removeEventListener('resize', handleResize)
  }
})
</script>


