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
                      'p-3 rounded-lg border-2 transition-all duration-300 text-center',
                      formData.resolution === '480P'
                        ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    ]"
                  >
                    <div class="font-semibold text-base">480P</div>
                    <div class="text-xs mt-1 text-gray-500">Faster Generation</div>
                  </button>
                  <button
                    type="button"
                    @click="formData.resolution = '720P'"
                    :class="[
                      'p-3 rounded-lg border-2 transition-all duration-300 text-center',
                      formData.resolution === '720P'
                        ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    ]"
                  >
                    <div class="font-semibold text-base">720P</div>
                    <div class="text-xs mt-1 text-gray-500">Balanced Quality</div>
                  </button>
                  <button
                    type="button"
                    @click="formData.resolution = '1080P'"
                    :class="[
                      'p-3 rounded-lg border-2 transition-all duration-300 text-center',
                      formData.resolution === '1080P'
                        ? 'border-purple-500 bg-purple-50 text-purple-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    ]"
                  >
                    <div class="font-semibold text-base">1080P</div>
                    <div class="text-xs mt-1 text-gray-500">HD Quality</div>
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
                      'p-3 rounded-lg border-2 transition-all duration-300 text-center',
                      formData.resolutionLevel === '480P'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    ]"
                  >
                    <div class="font-semibold text-base">480P</div>
                    <div class="text-xs mt-1 text-gray-500">Fast Generation</div>
                  </button>
                  <button
                    type="button"
                    @click="selectResolutionLevel('720P')"
                    :class="[
                      'p-3 rounded-lg border-2 transition-all duration-300 text-center',
                      formData.resolutionLevel === '720P'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    ]"
                  >
                    <div class="font-semibold text-base">720P</div>
                    <div class="text-xs mt-1 text-gray-500">Balanced Quality</div>
                  </button>
                  <button
                    type="button"
                    @click="selectResolutionLevel('1080P')"
                    :class="[
                      'p-3 rounded-lg border-2 transition-all duration-300 text-center',
                      formData.resolutionLevel === '1080P'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    ]"
                  >
                    <div class="font-semibold text-base">1080P</div>
                    <div class="text-xs mt-1 text-gray-500">HD Quality</div>
                  </button>
                </div>
              </div>

              <!-- Video Aspect Ratio Selection -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-4">Video Aspect Ratio</label>
                <div class="grid grid-cols-4 gap-2">
                  <button
                    v-for="size in availableSizes"
                    :key="size.value"
                    type="button"
                    @click="formData.size = size.value"
                    :class="[
                      'p-2 rounded-lg border-2 transition-all duration-300 text-center',
                      formData.size === size.value
                        ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    ]"
                  >
                    <div class="font-semibold text-sm">{{ size.label.split('(')[0].trim() }}</div>
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
                <span v-else class="text-gray-500">(Optional)</span>
              </label>
              <textarea 
                v-model="formData.prompt"
                rows="4" 
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors bg-white"
                :placeholder="activeMode === 'image-to-video' ? 'Describe how you want the image to move...' : 'Describe the video content you want to generate...'"
                maxlength="2000"
                @focus="handlePromptFocus"
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
              
              <!-- Audio Preview -->
              <div v-if="audioPreview" class="mt-3 p-3 bg-gray-50 rounded-lg">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-sm font-medium text-gray-700">Audio Preview</span>
                  <button 
                    @click="removeAudio"
                    type="button"
                    class="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <audio 
                  :src="audioPreview" 
                  controls 
                  class="w-full h-8"
                >
                  Your browser does not support audio playback
                </audio>
              </div>
              
              <p class="text-xs text-gray-500 mt-2">Supports WAV, MP3 format, 3-30 seconds, max 15MB</p>
            </div>

            <!-- Duration and Options -->
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">Video Duration</label>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    @click="formData.duration = '5'"
                    :class="[
                      'p-2 rounded-lg border-2 transition-all duration-300 text-center',
                      formData.duration === '5'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    ]"
                  >
                    <div class="font-semibold text-sm">5s</div>
                    <div class="text-xs mt-1 text-gray-500">Standard</div>
                  </button>
                  <button
                    type="button"
                    @click="formData.duration = '10'"
                    :class="[
                      'p-2 rounded-lg border-2 transition-all duration-300 text-center',
                      formData.duration === '10'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-400 hover:bg-gray-200'
                    ]"
                  >
                    <div class="font-semibold text-sm">10s</div>
                    <div class="text-xs mt-1 text-gray-500">Extended</div>
                  </button>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-700">Prompt Enhancement</span>
                  <button
                    type="button"
                    @click="formData.promptExtend = !formData.promptExtend"
                    :class="[
                      'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                      formData.promptExtend ? 'bg-blue-600' : 'bg-gray-200'
                    ]"
                  >
                    <span
                      :class="[
                        'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                        formData.promptExtend ? 'translate-x-6' : 'translate-x-1'
                      ]"
                    />
                  </button>
                </div>
              </div>
            </div>

            <!-- Generate Button -->
            <div class="relative">
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
              
              <!-- Credit Badge -->
              <div class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                {{ requiredCredits }} credits
              </div>
            </div>
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
            <p class="text-gray-600 text-center mb-6">{{ statusMessage }}</p>
            <div class="w-full max-w-sm bg-gray-200 rounded-full h-2">
              <div class="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse" style="width: 45%"></div>
            </div>
            <div v-if="currentTaskId" class="mt-4 text-xs text-gray-500">
              Task ID: {{ currentTaskId }}
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
import { ref, computed, watch, onUnmounted, onMounted } from 'vue'
import { previewGenvideo, checkTaskStatusVideo, upload } from '~/api'
import { useNuxtApp } from 'nuxt/app'
import { useClerkAuth } from '~/utils/authHelper'
import { useUserStore } from '~/stores/user'
import { useUiStore } from '~/stores/ui'

// Toast 通知
const { $toast } = useNuxtApp() as any
const { isSignedIn } = useClerkAuth()
const userStore = useUserStore()
const uiStore = useUiStore()

// 响应式数据
const activeMode = ref<'image-to-video' | 'text-to-video'>('image-to-video')
const isGenerating = ref(false)
const uploadedImage = ref<File | null>(null)
const uploadedAudio = ref<File | null>(null)
const imagePreview = ref<string | null>(null)
const audioPreview = ref<string | null>(null)
const generatedVideo = ref<{ url: string } | null>(null)

// 任务状态相关
const currentTaskId = ref<string | null>(null)
const taskStatus = ref<'idle' | 'generating' | 'success' | 'failed'>('idle')
const statusMessage = ref('')
const pollingInterval = ref<NodeJS.Timeout | null>(null)

// 表单数据
const formData = ref({
  prompt: '',
  resolution: '720P', // for image-to-video
  resolutionLevel: '720P', // for text-to-video
  size: '1280*720', // for text-to-video
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

// 计算消耗积分
const requiredCredits = computed(() => {
  const resolution = activeMode.value === 'image-to-video' ? formData.value.resolution : formData.value.resolutionLevel
  const duration = parseInt(formData.value.duration)
  
  const creditMap: Record<string, Record<number, number>> = {
    '480P': { 5: 100, 10: 200 },
    '720P': { 5: 200, 10: 400 },
    '1080P': { 5: 300, 10: 600 }
  }
  
  return creditMap[resolution]?.[duration] || 0
})

// 是否可以生成
const canGenerate = computed(() => {
  if (activeMode.value === 'image-to-video') {
    return uploadedImage.value
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

// 登录状态检查标志
const hasCheckedLogin = ref(false)

// 提示词聚焦处理
const handlePromptFocus = async () => {
  if (!hasCheckedLogin.value) {
    const isLoggedIn = await checkLoginStatus()
    hasCheckedLogin.value = true
    if (!isLoggedIn) {
      $toast.error('Please login to enter prompts')
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
    
    // 创建音频预览
    const reader = new FileReader()
    reader.onload = (e) => {
      audioPreview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
    
  }
}

// 删除音频
const removeAudio = () => {
  uploadedAudio.value = null
  audioPreview.value = null
  const fileInput = document.getElementById('audio-upload') as HTMLInputElement
  if (fileInput) {
    fileInput.value = ''
  }
}

// 用户积分计算
const userCredits = computed(() => {
  const userInfo = userStore.userInfo
  if (!userInfo) return 0
  return (userInfo.free_limit || 0) + (userInfo.remaining_limit || 0)
})

// 检查音频文件时长
const checkAudioDuration = (file: File): Promise<number> => {
  return new Promise((resolve, reject) => {
    const audio = new Audio()
    const url = URL.createObjectURL(file)
    
    audio.addEventListener('loadedmetadata', () => {
      URL.revokeObjectURL(url)
      resolve(audio.duration)
    })
    
    audio.addEventListener('error', () => {
      URL.revokeObjectURL(url)
      reject(new Error('Failed to load audio file'))
    })
    
    audio.src = url
  })
}

// 生成视频
const handleGenerate = async () => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    $toast.error('Please login to generate videos')
    return
  }
  
  if (!canGenerate.value) return
  
  // 检查积分是否充足
  if (userCredits.value < requiredCredits.value) {
    $toast.error(`Insufficient credits. This operation requires ${requiredCredits.value} credits, but you only have ${userCredits.value} credits`)
    return
  }
  
  // 检查音频文件时长
  if (uploadedAudio.value) {
    try {
      const duration = await checkAudioDuration(uploadedAudio.value)
      if (duration < 3 || duration > 30) {
        $toast.error(`Audio duration must be between 3-30 seconds. Current duration: ${duration.toFixed(1)}s`)
        return
      }
    } catch (error) {
      $toast.error('Failed to validate audio file duration')
      return
    }
  }
  
  isGenerating.value = true
  taskStatus.value = 'generating'
  statusMessage.value = 'Generating video...'
  
  try {
    // 准备请求数据
    const requestData = await prepareRequestData()
    console.log(requestData)
    // return
    // 调用 previewGenvideo API

    const response = await previewGenvideo(requestData)
    
    if (response.success && response.data?.task_id) {
      currentTaskId.value = response.data.task_id
      
      // 开始轮询检查任务状态
      startPolling()
    } else {
      throw new Error(response.msg || 'Failed to create task')
    }
  } catch (error: any) {
    console.error('Generation failed:', error)
    taskStatus.value = 'failed'
    statusMessage.value = error.msg || 'Generation failed, please try again'
    $toast.error(statusMessage.value)
    isGenerating.value = false
  }
}

// 准备请求数据
const prepareRequestData = async () => {
  const data: any = {
    model: activeMode.value === 'text-to-video' ? 'wan2.5-t2v-preview' : 'wan2.5-i2v-preview',
    prompt: formData.value.prompt,
    duration: parseInt(formData.value.duration),
    prompt_extend: formData.value.promptExtend
  }
  
  if (activeMode.value === 'image-to-video') {
    // 图生视频模式
    if (!uploadedImage.value) {
      throw new Error('Please upload an image')
    }

    // if(uploadedImage.value)
    // {
    //   const uploadResponse = await upload({ file: uploadedImage.value }) as any;
    //   if (uploadResponse && uploadResponse.code === 200) {
    //     data.image_url = uploadResponse.data;
    //   } 
    // }

     // 上传图片获取URL
      data.image = uploadedImage.value
      data.resolution = formData.value.resolution
  } else {
    // 文生视频模式
    data.resolution = formData.value.resolutionLevel
    data.size = formData.value.size
  }
  
  // 如果有音频文件，上传音频
  if (uploadedAudio.value) {
      data.audio = uploadedAudio.value
  }
  
  return data
}

// 开始轮询检查任务状态
const startPolling = () => {
  if (pollingInterval.value) {
    clearInterval(pollingInterval.value)
  }
  
  pollingInterval.value = setInterval(async () => {
    await checkTaskStatus()
  }, 5000) // 每5秒检查一次
}

// 检查任务状态
const checkTaskStatus = async () => {
  if (!currentTaskId.value) return
  
  try {
  
    const response = await checkTaskStatusVideo(currentTaskId.value)
    
    if (response.success && response.data) {
      const { status, status_msg, url } = response.data
      
      if (status === 1 && url) {
        // 生成成功
        taskStatus.value = 'success'
        statusMessage.value = 'Video generated successfully!'
        generatedVideo.value = { url }
        $toast.success('Video generated successfully!')
        
        // 停止轮询
        stopPolling()
        isGenerating.value = false
      } else if (status <= -1) {
        // 生成失败
        taskStatus.value = 'failed'
        statusMessage.value = status_msg || 'Generation failed'
        $toast.error(statusMessage.value)
        
        // 停止轮询
        stopPolling()
        isGenerating.value = false
      } else if (status === 0) {
        // 生成中
        statusMessage.value = status_msg || 'Generating...'
      }
    }
  } catch (error: any) {
    console.error('Failed to check task status:', error)
    // 不停止轮询，继续尝试
  }
}

// 停止轮询
const stopPolling = () => {
  if (pollingInterval.value) {
    clearInterval(pollingInterval.value)
    pollingInterval.value = null
  }
}

// 下载视频
const downloadVideo = async () => {
  if (generatedVideo.value?.url) {
    try {
      // 使用 fetch 获取视频文件
      const response = await fetch(generatedVideo.value.url)
      if (!response.ok) {
        throw new Error('Failed to fetch video')
      }
      
      // 获取视频数据
      const blob = await response.blob()
      
      // 创建下载链接
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `wan25-video-${Date.now()}.mp4`
      
      // 触发下载
      document.body.appendChild(link)
      link.click()
      
      // 清理
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
      
      $toast.success('Video download started')
    } catch (error) {
      console.error('Download failed:', error)
      $toast.error('Download failed, please try again')
    }
  }
}

// 重置生成器
const resetGenerator = () => {
  // 停止轮询
  stopPolling()
  
  // 重置状态
  generatedVideo.value = null
  currentTaskId.value = null
  taskStatus.value = 'idle'
  statusMessage.value = ''
  isGenerating.value = false
  
  resetForm()
  
  $toast.info('Generator reset, ready for new video')
}

// 重置表单
const resetForm = () => {
  formData.value = {
    prompt: '',
    resolution: '720P',
    resolutionLevel: '720P',
    size: '1280*720',
    duration: '5',
    promptExtend: true,
    audioUrl: ''
  }
  uploadedImage.value = null
  uploadedAudio.value = null
  imagePreview.value = null
  audioPreview.value = null
  hasCheckedLogin.value = false
}

// 组件卸载时清理
onUnmounted(() => {
  stopPolling()
})

// 组件挂载时获取用户信息
onMounted(() => {
  userStore.fetchUserInfo()
})

// 初始化
updateSizeOptions()
</script>
