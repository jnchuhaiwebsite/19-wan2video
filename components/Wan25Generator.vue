<template>
  <section class="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-tr from-purple-300 to-teal-300 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6 shadow-sm">
          <span class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
          AI Video Generator
        </div>
        <h2 class="text-3xl md:text-4xl font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-8 leading-tight">
          Wan 2.5 - Create Amazing Videos
        </h2>
        <p class="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
          Transform your <span class="font-semibold text-blue-600">images</span> and <span class="font-semibold text-purple-600">text prompts</span> into 
          stunning <span class="font-semibold text-teal-600">AI-generated videos</span> with professional quality.
        </p>
      </div>

      <!-- 主功能区域 -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- 左侧：表单区域 -->
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
          <!-- 模式切换标签 -->
          <div class="mb-8">
            <div class="flex bg-gray-100 rounded-2xl p-1">
              <button 
                @click="activeMode = 'image-to-video'"
                :class="[
                  'flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300',
                  activeMode === 'image-to-video' 
                    ? 'bg-white text-purple-600 shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-800'
                ]"
              >
                <span class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Image to Video
                </span>
              </button>
              <button 
                @click="activeMode = 'text-to-video'"
                :class="[
                  'flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300',
                  activeMode === 'text-to-video' 
                    ? 'bg-white text-blue-600 shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-800'
                ]"
              >
                <span class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
                  </svg>
                  Text to Video
                </span>
              </button>
            </div>
          </div>

          <form @submit.prevent="handleGenerate" class="space-y-6">
              <!-- Image to Video Mode -->
              <div v-if="activeMode === 'image-to-video'" class="space-y-6">
                <!-- Upload First Frame Image -->
                <div>
                  <label class="block text-sm font-semibold text-gray-900 mb-3">
                    First Frame Image <span class="text-red-500">*</span>
                  </label>
                <div class="relative">
                  <label 
                    for="image-upload" 
                    class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-purple-300 rounded-2xl cursor-pointer hover:border-purple-400 transition-colors bg-purple-50/50 overflow-hidden group"
                    @mousedown="handleImageUploadMouseDown"
                    @click="handleImageUploadClick"
                  >
                    <!-- Image Preview -->
                    <div v-if="imagePreview" class="w-full h-full flex items-center justify-center">
                      <img 
                        :src="imagePreview" 
                        :alt="uploadedImage?.name"
                        class="max-w-full max-h-full object-contain rounded-xl"
                      />
                    </div>
                    
                    <!-- Upload Hint -->
                    <div v-else class="flex flex-col items-center justify-center p-6">
                      <svg class="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <p class="text-purple-600 font-medium mb-1">Click to upload or drag image</p>
                      <p class="text-xs text-gray-500 text-center">Supports JPEG, JPG, PNG, BMP, WEBP<br/>Resolution 360-2000px, Max 10MB</p>
                    </div>
                  </label>
                  
                  <!-- Delete Button -->
                  <button 
                    v-if="imagePreview"
                    @click="removeImage"
                    type="button"
                    class="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <input type="file" id="image-upload" class="hidden" @change="handleImageUpload" accept="image/jpeg,image/jpg,image/png,image/bmp,image/webp" />
              </div>

              <!-- Resolution Selection -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-4">Resolution</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    @click="formData.resolution = '480P'"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center',
                      formData.resolution === '480P'
                        ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50'
                    ]"
                  >
                    <div class="font-semibold text-lg">480P</div>
                    <div class="text-xs mt-1">Faster Generation</div>
                  </button>
                  <button
                    type="button"
                    @click="formData.resolution = '720P'"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center',
                      formData.resolution === '720P'
                        ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50'
                    ]"
                  >
                    <div class="font-semibold text-lg">720P</div>
                    <div class="text-xs mt-1">Balanced Quality</div>
                  </button>
                  <button
                    type="button"
                    @click="formData.resolution = '1080P'"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center',
                      formData.resolution === '1080P'
                        ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50'
                    ]"
                  >
                    <div class="font-semibold text-lg">1080P</div>
                    <div class="text-xs mt-1">HD Quality</div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Text to Video Mode -->
            <div v-if="activeMode === 'text-to-video'" class="space-y-6">
              <!-- Resolution Level Selection -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-4">Resolution Level</label>
                <div class="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    @click="selectResolutionLevel('480P')"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center',
                      formData.resolutionLevel === '480P'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                    ]"
                  >
                    <div class="font-semibold text-lg">480P</div>
                    <div class="text-xs mt-1">Fast Generation</div>
                  </button>
                  <button
                    type="button"
                    @click="selectResolutionLevel('720P')"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center',
                      formData.resolutionLevel === '720P'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                    ]"
                  >
                    <div class="font-semibold text-lg">720P</div>
                    <div class="text-xs mt-1">Balanced Quality</div>
                  </button>
                  <button
                    type="button"
                    @click="selectResolutionLevel('1080P')"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center',
                      formData.resolutionLevel === '1080P'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                    ]"
                  >
                    <div class="font-semibold text-lg">1080P</div>
                    <div class="text-xs mt-1">HD Quality</div>
                  </button>
                </div>
              </div>

              <!-- Video Aspect Ratio Selection -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-4">Video Aspect Ratio</label>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    v-for="size in availableSizes"
                    :key="size.value"
                    type="button"
                    @click="formData.size = size.value"
                    :class="[
                      'p-4 rounded-xl border-2 transition-all duration-300 text-center',
                      formData.size === size.value
                        ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-lg transform scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-teal-300 hover:bg-teal-50'
                    ]"
                  >
                    <div class="font-semibold">{{ size.label.split('(')[0].trim() }}</div>
                    <div class="text-xs mt-1 text-gray-500">{{ size.label.split('(')[1]?.replace(')', '') }}</div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Common Fields -->
            <!-- Prompt -->
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-3">
                Prompt <span v-if="activeMode === 'text-to-video'" class="text-red-500">*</span>
              </label>
              <textarea 
                v-model="formData.prompt"
                rows="4" 
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors bg-white"
                :placeholder="activeMode === 'image-to-video' ? 'Describe how you want the image to move...' : 'Describe the video content you want to generate...'"
                maxlength="2000"
                @focus="handlePromptFocus"
                @input="handlePromptInput"
              />
              <div class="flex justify-between items-center mt-2 text-xs text-gray-500">
                <span>Supports English and Chinese</span>
                <span>{{ formData.prompt.length }}/2000</span>
              </div>
            </div>

            <!-- Audio Upload -->
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-3">
                Audio File <span class="text-gray-500">(Optional)</span>
              </label>
              <div class="relative">
                <label 
                  for="audio-upload" 
                  class="flex items-center justify-center w-full h-16 border-2 border-dashed border-blue-300 rounded-xl cursor-pointer hover:border-blue-400 transition-colors bg-blue-50/50"
                  @mousedown="handleAudioUploadMouseDown"
                  @click="handleAudioUploadClick"
                >
                  <div class="flex items-center space-x-3">
                    <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span v-if="!uploadedAudio" class="text-blue-600 font-medium">Click to upload audio file</span>
                    <span v-else class="text-blue-600 font-medium">{{ uploadedAudio.name }}</span>
                  </div>
                </label>
                <input type="file" id="audio-upload" class="hidden" @change="handleAudioUpload" accept="audio/wav,audio/mp3" />
              </div>
              <p class="text-xs text-gray-500 mt-2">Supports WAV, MP3 format, 3-30 seconds, max 15MB</p>
            </div>

            <!-- Duration and Options -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Video Duration</label>
                <div class="flex space-x-3">
                  <label class="flex items-center">
                    <input type="radio" v-model="formData.duration" value="5" class="w-4 h-4 text-blue-600" />
                    <span class="ml-2 text-sm text-gray-700">5 seconds</span>
                  </label>
                  <label class="flex items-center">
                    <input type="radio" v-model="formData.duration" value="10" class="w-4 h-4 text-blue-600" />
                    <span class="ml-2 text-sm text-gray-700">10 seconds</span>
                  </label>
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Smart Enhancement</label>
                <label class="flex items-center">
                  <input type="checkbox" v-model="formData.promptExtend" class="w-4 h-4 text-blue-600 rounded" />
                  <span class="ml-2 text-sm text-gray-700">Prompt Enhancement</span>
                </label>
              </div>
            </div>

            <!-- Generate Button -->
            <button 
              type="submit" 
              :disabled="isGenerating || !canGenerate"
              class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span v-if="isGenerating" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Video...
              </span>
              <span v-else>🎬 Generate Video</span>
            </button>
          </form>
        </div>

        <!-- Right Side: Preview Area -->
        <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 min-h-[600px] flex flex-col">
          <h3 class="text-xl font-bold text-gray-900 mb-6 text-center">Video Preview</h3>
          
          <!-- Loading State -->
          <div v-if="isGenerating" class="flex-1 flex flex-col items-center justify-center">
            <div class="w-24 h-24 mb-6">
              <svg class="w-full h-full animate-spin text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h4 class="text-2xl font-bold text-gray-900 mb-4">Generating Video</h4>
            <p class="text-gray-600 text-center mb-6">AI is processing your request, this may take a few minutes</p>
            <div class="w-full max-w-sm bg-gray-200 rounded-full h-2">
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse" style="width: 45%"></div>
            </div>
          </div>

          <!-- Generated Result -->
          <div v-else-if="generatedVideo" class="flex-1 flex flex-col">
            <div class="flex-1 flex items-center justify-center mb-6">
              <video 
                :src="generatedVideo.url" 
                controls 
                class="max-w-full max-h-full rounded-xl shadow-lg"
                style="max-height: 400px;"
              >
                Your browser does not support video playback
              </video>
            </div>
            <div class="space-y-4">
              <button 
                @click="downloadVideo"
                class="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Video
              </button>
              <button 
                @click="resetGenerator"
                class="w-full py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transition-colors"
              >
                Regenerate
              </button>
            </div>
          </div>

          <!-- Default State -->
          <div v-else class="flex-1 flex flex-col items-center justify-center text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mb-6">
              <svg class="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-gray-900 mb-3">Ready to Create Your Video</h4>
            <p class="text-gray-600 mb-6">
              {{ activeMode === 'image-to-video' ? 'Upload image and add description to let AI create dynamic video for you' : 'Enter creative description to let AI generate amazing video for you' }}
            </p>
            <div class="flex items-center space-x-2 text-sm text-gray-500">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Supports 5-10 second HD video generation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useNuxtApp } from 'nuxt/app'
import { useClerkAuth } from '~/utils/authHelper'
import { useUserStore } from '~/stores/user'
import { useUiStore } from '~/stores/ui'

// Toast 通知
const { $toast } = useNuxtApp()
const { isSignedIn } = useClerkAuth()
const userStore = useUserStore()
const uiStore = useUiStore()

// 响应式数据
const activeMode = ref<'image-to-video' | 'text-to-video'>('image-to-video')
const isGenerating = ref(false)
const uploadedImage = ref<File | null>(null)
const uploadedAudio = ref<File | null>(null)
const imagePreview = ref<string | null>(null)
const generatedVideo = ref<{ url: string } | null>(null)

// 表单数据
const formData = ref({
  prompt: '',
  resolution: '720P', // for image-to-video
  resolutionLevel: '1080P', // for text-to-video
  size: '1920*1080', // for text-to-video
  duration: '5',
  promptExtend: true,
  audioUrl: ''
})

// 文生视频的尺寸选项
const sizeOptions = {
  '480P': [
    { value: '832*480', label: '832×480 (16:9 aspect ratio)' },
    { value: '480*832', label: '480×832 (9:16 aspect ratio)' },
    { value: '624*624', label: '624×624 (1:1 aspect ratio)' }
  ],
  '720P': [
    { value: '1280*720', label: '1280×720 (16:9 aspect ratio)' },
    { value: '720*1280', label: '720×1280 (9:16 aspect ratio)' },
    { value: '960*960', label: '960×960 (1:1 aspect ratio)' },
    { value: '1088*832', label: '1088×832 (4:3 aspect ratio)' },
    { value: '832*1088', label: '832×1088 (3:4 aspect ratio)' }
  ],
  '1080P': [
    { value: '1920*1080', label: '1920×1080 (16:9 aspect ratio)' },
    { value: '1080*1920', label: '1080×1920 (9:16 aspect ratio)' },
    { value: '1440*1440', label: '1440×1440 (1:1 aspect ratio)' },
    { value: '1632*1248', label: '1632×1248 (4:3 aspect ratio)' },
    { value: '1248*1632', label: '1248×1632 (3:4 aspect ratio)' }
  ]
}

const availableSizes = computed(() => {
  return sizeOptions[formData.value.resolutionLevel as keyof typeof sizeOptions] || sizeOptions['1080P']
})

// 是否可以生成
const canGenerate = computed(() => {
  if (activeMode.value === 'image-to-video') {
    return uploadedImage.value && formData.value.prompt.trim()
  } else {
    return formData.value.prompt.trim().length > 0
  }
})

// 切换模式时重置表单
watch(activeMode, () => {
  resetForm()
})

// 更新尺寸选项
const updateSizeOptions = () => {
  const firstOption = availableSizes.value[0]
  if (firstOption) {
    formData.value.size = firstOption.value
  }
}

// 选择分辨率档位
const selectResolutionLevel = (level: string) => {
  formData.value.resolutionLevel = level
  updateSizeOptions()
}

// 检查登录状态
const checkLoginStatus = async () => {
  await userStore.fetchUserInfo()
  
  if (!userStore.userInfo) {
    uiStore.showLoginPrompt()
    return false
  }
  
  return true
}

// 提示词聚焦处理
const handlePromptFocus = async () => {
  await checkLoginStatus()
}

// 提示词输入处理
const handlePromptInput = async (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  const value = target.value
  
  // 如果用户开始输入内容，检查登录状态
  if (value.length > 0) {
    const isLoggedIn = await checkLoginStatus()
    if (!isLoggedIn) {
      // 清空输入内容
      target.value = ''
      formData.value.prompt = ''
      $toast.error('Please login to enter prompts')
      return
    }
  }
}

// 图片上传鼠标按下处理
const handleImageUploadMouseDown = async (event: Event) => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    event.preventDefault()
    event.stopPropagation()
    return
  }
}

// 图片上传点击处理
const handleImageUploadClick = async (event: Event) => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    $toast.error('Please login to upload images')
    event.preventDefault()
    return
  }
}

// 音频上传鼠标按下处理
const handleAudioUploadMouseDown = async (event: Event) => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    event.preventDefault()
    event.stopPropagation()
    return
  }
}

// 音频上传点击处理
const handleAudioUploadClick = async (event: Event) => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    $toast.error('Please login to upload audio files')
    event.preventDefault()
    return
  }
}

// 图片上传处理
const handleImageUpload = async (event: Event) => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    $toast.error('Please login to upload images')
    return
  }
  
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    
      // 验证文件大小
      if (file.size > 10 * 1024 * 1024) {
        $toast.error('Image file size cannot exceed 10MB')
        return
      }
    
    uploadedImage.value = file
    
    // 创建预览
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
    
    $toast.success('Image uploaded successfully')
  }
}

// 删除图片
const removeImage = () => {
  uploadedImage.value = null
  imagePreview.value = null
  const fileInput = document.getElementById('image-upload') as HTMLInputElement
  if (fileInput) {
    fileInput.value = ''
  }
}

// 音频上传处理
const handleAudioUpload = async (event: Event) => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    $toast.error('Please login to upload audio files')
    return
  }
  
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    
      // 验证文件大小
      if (file.size > 15 * 1024 * 1024) {
        $toast.error('Audio file size cannot exceed 15MB')
        return
      }
    
    uploadedAudio.value = file
    // 这里可以上传音频文件到服务器，获取 URL
    // formData.value.audioUrl = uploadedUrl
    
    $toast.success('Audio file uploaded successfully')
  }
}

// 生成视频
const handleGenerate = async () => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    $toast.error('Please login to generate videos')
    return
  }
  
  if (!canGenerate.value) return
  
  isGenerating.value = true
  
  try {
    // 模拟 API 调用
    await new Promise(resolve => setTimeout(resolve, 5000))
    
    // 模拟生成结果
    generatedVideo.value = {
      url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    }
    
    $toast.success('Video generated successfully!')
    } catch (error) {
      console.error('Generation failed:', error)
      $toast.error('Generation failed, please try again')
    } finally {
      isGenerating.value = false
    }
}

// 下载视频
const downloadVideo = () => {
  if (generatedVideo.value?.url) {
    const link = document.createElement('a')
    link.href = generatedVideo.value.url
    link.download = `wan25-video-${Date.now()}.mp4`
    link.click()
    
    $toast.success('Video download started')
  }
}

// 重置生成器
const resetGenerator = () => {
  generatedVideo.value = null
  resetForm()
  
  $toast.info('Generator reset, ready for new video')
}

// 重置表单
const resetForm = () => {
  formData.value = {
    prompt: '',
    resolution: '720P',
    resolutionLevel: '1080P',
    size: '1920*1080',
    duration: '5',
    promptExtend: true,
    audioUrl: ''
  }
  uploadedImage.value = null
  uploadedAudio.value = null
  imagePreview.value = null
}

// 初始化
updateSizeOptions()
</script>
