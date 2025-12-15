<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
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
            Wan 2.6 — AI Video Generator for Multi-Shot Storytelling
          </h2>
          <p class="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Transform text prompts or images into cohesive multi-shot videos with smooth scene transitions,
            consistent characters, and synchronized audio — all powered by a unified AI video model.
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
              <!-- Prompt -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Prompt</label>
                <textarea
                  v-model="form.text.prompt"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors bg-white"
                  placeholder="Describe the video you want — scene, motion, camera, style (English or Chinese supported)..."
                  maxlength="2000"
                />
                <div class="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>Supports both English and Chinese prompts</span>
                  <span>{{ form.text.prompt.length }}/2000</span>
                </div>
              </div>

              <!-- 开关选项 -->
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <div>
                    <p class="text-sm font-medium text-gray-900">Inspiration Mode</p>
                    <p class="text-xs text-gray-500 mt-1">More exploratory, creative interpretation of your prompt</p>
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
                <div class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <div>
                    <p class="text-sm font-medium text-gray-900">Multi-Shot</p>
                    <p class="text-xs text-gray-500 mt-1">Generate multi-shot sequences in one go</p>
                  </div>
                  <button
                    type="button"
                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    :class="form.text.multiShot ? 'bg-blue-600' : 'bg-gray-200'"
                    @click="form.text.multiShot = !form.text.multiShot"
                  >
                    <span
                      class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                      :class="form.text.multiShot ? 'translate-x-6' : 'translate-x-1'"
                    />
                  </button>
                </div>
              </div>

              <!-- Resolution -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Resolution</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="item in ['480P','720P','1080P']"
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
                    <div class="text-[11px] mt-1 text-gray-500">
                      {{ item === '480P' ? 'Faster generation' : item === '720P' ? 'Quality balance' : 'High-quality video' }}
                    </div>
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
              <!-- Upload Image -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Upload image</label>
                <div
                  class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-purple-300 rounded-2xl cursor-pointer hover:border-purple-400 transition-colors bg-purple-50/40 overflow-hidden group"
                  @click="triggerImageUpload"
                >
                  <div v-if="imagePreview" class="w-full h-full flex items-center justify-center">
                    <img :src="imagePreview" alt="preview" class="max-w-full max-h-full object-contain rounded-xl" />
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
                    <p class="text-xs text-gray-500 mt-1">Supports JPG / PNG / WEBP · 720p or higher recommended</p>
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

              <!-- Prompt -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Prompt</label>
                <textarea
                  v-model="form.image.prompt"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-colors bg-white"
                  placeholder="Describe how the still image should animate — motion, camera moves, lighting changes..."
                  maxlength="2000"
                />
                <div class="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>Supports both English and Chinese prompts</span>
                  <span>{{ form.image.prompt.length }}/2000</span>
                </div>
              </div>

              <!-- 开关选项 -->
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <div>
                    <p class="text-sm font-medium text-gray-900">Inspiration Mode</p>
                    <p class="text-xs text-gray-500 mt-1">More imaginative motion and lighting variations</p>
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
                <div class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <div>
                    <p class="text-sm font-medium text-gray-900">Multi-Shot</p>
                    <p class="text-xs text-gray-500 mt-1">Create a sequence of shots from one image</p>
                  </div>
                  <button
                    type="button"
                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    :class="form.image.multiShot ? 'bg-blue-600' : 'bg-gray-200'"
                    @click="form.image.multiShot = !form.image.multiShot"
                  >
                    <span
                      class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                      :class="form.image.multiShot ? 'translate-x-6' : 'translate-x-1'"
                    />
                  </button>
                </div>
              </div>

              <!-- Resolution -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Resolution</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="item in ['480P','720P','1080P']"
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
                    <div class="text-[11px] mt-1 text-gray-500">
                      {{ item === '480P' ? 'Faster generation' : item === '720P' ? 'Quality balance' : 'High-quality video' }}
                    </div>
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
              <!-- Reference Video 1 -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Reference video 1</label>
                <div
                  class="flex items-center justify-between px-4 py-3 border-2 border-dashed border-teal-300 rounded-2xl bg-teal-50/40"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-200 to-blue-200 flex items-center justify-center">
                      <svg class="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.6"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">Upload a reference video</p>
                      <p class="text-xs text-gray-500 mt-1">Use it to guide motion, pacing, or framing</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="text-xs font-medium text-teal-700 hover:text-teal-900 underline underline-offset-2"
                    @click="triggerRefVideo1Upload"
                  >
                    Upload
                  </button>
                </div>
                <div v-if="refVideo1Name" class="mt-2 text-xs text-gray-600 truncate">
                  Selected: {{ refVideo1Name }}
                </div>
                <input
                  ref="refVideo1InputRef"
                  type="file"
                  class="hidden"
                  accept="video/*"
                  @change="onRefVideo1Change"
                />
              </div>

              <!-- Reference Video 2 -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Reference video 2 (optional)</label>
                <div
                  class="flex items-center justify-between px-4 py-3 border-2 border-dashed border-teal-200 rounded-2xl bg-teal-50/30"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-200 to-emerald-200 flex items-center justify-center">
                      <svg class="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.6"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m2 2a2 2 0 002-2V8a2 2 0 00-2-2h-3l-2-2H9L7 6H4a2 2 0 00-2 2v8a2 2 0 002 2h14z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">Optional: style / scene reference</p>
                      <p class="text-xs text-gray-500 mt-1">Further control lighting, color tone, or performance</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="text-xs font-medium text-teal-700 hover:text-teal-900 underline underline-offset-2"
                    @click="triggerRefVideo2Upload"
                  >
                    Upload
                  </button>
                </div>
                <div v-if="refVideo2Name" class="mt-2 text-xs text-gray-600 truncate">
                  Selected: {{ refVideo2Name }}
                </div>
                <input
                  ref="refVideo2InputRef"
                  type="file"
                  class="hidden"
                  accept="video/*"
                  @change="onRefVideo2Change"
                />
              </div>

              <!-- 两个参考视频预览，一行展示 -->
              <div v-if="refVideo1Url || refVideo2Url" class="grid grid-cols-2 gap-3 mt-4">
                <div v-if="refVideo1Url" class="bg-gray-50 rounded-xl p-2 flex flex-col space-y-1">
                  <p class="text-xs text-gray-600 mb-1 truncate">Preview 1</p>
                  <video
                    :src="refVideo1Url"
                    controls
                    class="w-full h-32 rounded-lg bg-black object-cover"
                  >
                    Your browser does not support video playback.
                  </video>
                </div>
                <div v-if="refVideo2Url" class="bg-gray-50 rounded-xl p-2 flex flex-col space-y-1">
                  <p class="text-xs text-gray-600 mb-1 truncate">Preview 2</p>
                  <video
                    :src="refVideo2Url"
                    controls
                    class="w-full h-32 rounded-lg bg-black object-cover"
                  >
                    Your browser does not support video playback.
                  </video>
                </div>
              </div>

              <!-- Prompt -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Prompt</label>
                <textarea
                  v-model="form.reference.prompt"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none transition-colors bg-white"
                  placeholder="Describe how you want to transform the reference videos — characters, scene, pacing, or camera language..."
                  maxlength="2000"
                />
                <div class="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>Supports both English and Chinese prompts</span>
                  <span>{{ form.reference.prompt.length }}/2000</span>
                </div>
              </div>

              <!-- 开关选项 -->
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <div>
                    <p class="text-sm font-medium text-gray-900">Inspiration Mode</p>
                    <p class="text-xs text-gray-500 mt-1">Looser, more creative variations on the reference</p>
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
                <div class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <div>
                    <p class="text-sm font-medium text-gray-900">Multi-Shot</p>
                    <p class="text-xs text-gray-500 mt-1">Story-driven multi-shot video output</p>
                  </div>
                  <button
                    type="button"
                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    :class="form.reference.multiShot ? 'bg-blue-600' : 'bg-gray-200'"
                    @click="form.reference.multiShot = !form.reference.multiShot"
                  >
                    <span
                      class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                      :class="form.reference.multiShot ? 'translate-x-6' : 'translate-x-1'"
                    />
                  </button>
                </div>
              </div>

              <!-- Resolution -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Resolution</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    v-for="item in ['480P','720P','1080P']"
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
                    <div class="text-[11px] mt-1 text-gray-500">
                      {{ item === '480P' ? 'Faster generation' : item === '720P' ? 'Quality balance' : 'High-quality video' }}
                    </div>
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

            <!-- 生成按钮 -->
            <div class="pt-2">
              <button
                type="submit"
                class="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                🎬 Generate video
              </button>
              <p class="mt-2 text-xs text-gray-500 text-center">
                Demo-only form. It showcases the generation options and layout for Wan 2.6.
              </p>
            </div>
          </form>
        </div>

        <!-- 右侧预览区域 -->
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 min-h-[520px] flex flex-col">
          <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Preview</h3>

          <!-- 模拟预览内容 -->
          <div class="flex-1 flex flex-col space-y-6">
            <!-- 视频占位图 -->
            <div
              class="relative flex-1 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center justify-center"
            >
              <div class="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_#38bdf8_0,_transparent_50%),_radial-gradient(circle_at_bottom,_#a855f7_0,_transparent_55%)]" />
              <div class="relative z-10 flex flex-col items-center">
                <button
                  type="button"
                  class="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl mb-4"
                >
                  <svg class="w-7 h-7 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8 5.14v13.72c0 .79.87 1.27 1.54.84l9.06-6.86a1 1 0 000-1.64L9.54 4.3A1 1 0 008 5.14z"
                    />
                  </svg>
                </button>
                <p class="text-sm text-slate-100/90 mb-1">
                  {{ previewTitle }}
                </p>
                <p class="text-xs text-slate-300/80">
                  {{ previewMeta }}
                </p>
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
                <div class="flex items-center space-x-2">
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
                  <span
                    class="inline-flex items-center px-2 py-1 rounded-full bg-purple-50 text-purple-600 font-medium text-[11px]"
                  >
                    Multi-Shot:
                    {{
                      (activeMode === 'text'
                        ? form.text.multiShot
                        : activeMode === 'image'
                        ? form.image.multiShot
                        : form.reference.multiShot)
                        ? 'On'
                        : 'Off'
                    }}
                  </span>
                </div>
                <span>Generated results will be previewed here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

type Mode = 'text' | 'image' | 'reference'

const activeMode = ref<Mode>('text')

const form = reactive({
  text: {
    prompt: '',
    inspiration: false,
    multiShot: false,
    resolution: '720P',
    duration: '10s',
    aspect: '16:9'
  },
  image: {
    prompt: '',
    inspiration: false,
    multiShot: false,
    resolution: '720P',
    duration: '10s'
  },
  reference: {
    prompt: '',
    inspiration: false,
    multiShot: false,
    resolution: '720P',
    duration: '10s',
    aspect: '16:9'
  }
})

const aspectOptions = ['16:9', '9:16', '1:1', '4:3', '3:4']

const imagePreview = ref<string | null>(null)
const imageInputRef = ref<HTMLInputElement | null>(null)

const refVideo1Name = ref<string | null>(null)
const refVideo2Name = ref<string | null>(null)
const refVideo1Url = ref<string | null>(null)
const refVideo2Url = ref<string | null>(null)
const refVideo1InputRef = ref<HTMLInputElement | null>(null)
const refVideo2InputRef = ref<HTMLInputElement | null>(null)

const isAspectDisabled = (value: string) => value === '4:3' || value === '3:4'

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

const triggerImageUpload = () => {
  if (imageInputRef.value) {
    imageInputRef.value.click()
  }
}

const onImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files && target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = e => {
    imagePreview.value = e.target?.result as string
  }
  reader.readAsDataURL(file)
}

const triggerRefVideo1Upload = () => {
  if (refVideo1InputRef.value) {
    refVideo1InputRef.value.click()
  }
}

const triggerRefVideo2Upload = () => {
  if (refVideo2InputRef.value) {
    refVideo2InputRef.value.click()
  }
}

const onRefVideo1Change = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files && target.files[0]
  if (!file) return
  refVideo1Name.value = file.name

  if (refVideo1Url.value) {
    URL.revokeObjectURL(refVideo1Url.value)
  }
  refVideo1Url.value = URL.createObjectURL(file)
}

const onRefVideo2Change = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files && target.files[0]
  if (!file) return
  refVideo2Name.value = file.name

  if (refVideo2Url.value) {
    URL.revokeObjectURL(refVideo2Url.value)
  }
  refVideo2Url.value = URL.createObjectURL(file)
}

const handleSubmit = () => {
  // 这里只做前端展示，不实际发起请求
}
</script>


