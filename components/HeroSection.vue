<template>
  <section id="hero" class="py-20 bg-blue-pale">
    <div class="max-w-7xl mx-auto px-6">
      <PageHero 
        title="Wan 2.2 Plus - AI Video Generation with a Director's Eye"
        subtitle="Powered by the leading Tongyi Wan 2.2 Plus model, we make video creation incredibly simple, efficient, and artistic. Turn a single sentence into a breathtaking cinematic shot."
      />
      
      <!-- Interactive Form and Preview -->
      <div class="grid lg:grid-cols-2 gap-12 items-stretch">
        <!-- Left Column: Form -->
        <div class="bg-blue-pale rounded-xl border border-blue-pricingborder shadow-lg p-8">
          <form @submit.prevent="handleGenerate" class="space-y-3">
            <!-- Mode Switcher -->
            <div class="pb-2 border-b border-blue-footerborder">
              <label class="block text-sm font-medium text-blue-maintext mb-2">
                Generation Mode
              </label>
              <div class="flex bg-blue-pale rounded-lg p-1">
                <button 
                  type="button" 
                  :class="[
                    'flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-200',
                    activeMode === 'text-to-video' 
                      ? 'bg-blue-light text-blue-dark shadow-sm' 
                      : 'text-blue-secondarytext hover:text-blue-maintext'
                  ]"
                  @click="switchMode('text-to-video')"
                >
                  Text to Video
                </button>
                <button 
                  type="button" 
                  :class="[
                    'flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-200',
                    activeMode === 'image-to-video' 
                      ? 'bg-blue-light text-blue-dark shadow-sm' 
                      : 'text-blue-secondarytext hover:text-blue-maintext'
                  ]"
                  @click="switchMode('image-to-video')"
                >
                  Image to Video
                </button>
              </div>
            </div>
            
            <!-- Image Upload Section -->
            <div v-show="activeMode === 'image-to-video'" class="pb-2 border-b border-blue-footerborder">
              <label class="block text-sm font-medium text-blue-maintext mb-2">
                Upload Image
              </label>
              <div class="relative">
                <label 
                  for="image-upload" 
                  class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-secondarytext rounded-lg cursor-pointer hover:border-blue-dark transition-colors bg-blue-pale overflow-hidden"
                  @click="handleImageUploadClick"
                  @mousedown="handleImageUploadMouseDown"
                >
                  <!-- 图片预览 -->
                  <div v-if="imagePreview" class="w-full h-full flex items-center justify-center">
                    <img 
                      :src="imagePreview" 
                      :alt="uploadedImage?.name"
                      class="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <!-- 上传图标和文字 -->
                  <div v-else class="flex flex-col items-center justify-center">
                    <svg class="w-6 h-6 text-blue-secondarytext mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    <p class="text-sm text-blue-secondarytext">Click to upload or drag and drop</p>
                  </div>
                </label>
                
                <!-- 删除按钮 -->
                <button 
                  v-if="imagePreview"
                  @click="removeImage"
                  class="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  type="button"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <input type="file" id="image-upload" class="hidden" @change="handleImageUpload" accept="image/*" />
            </div>
            
            <!-- Prompt Input -->
            <div class="pb-2 border-b border-blue-footerborder">
              <label class="block text-sm font-medium text-blue-maintext mb-2">
                Prompt
              </label>
              <textarea 
                v-model="prompt"
                rows="3" 
                class="w-full px-3 py-2 border border-blue-footerborder rounded-lg focus:ring-2 focus:ring-blue-dark focus:border-blue-dark resize-none transition-colors bg-blue-pale text-blue-inputtextfilled placeholder-blue-inputtext"
                placeholder="Please provide a prompt describing the video you want to generate. Both Chinese and English are supported. Your description should be no more than 800 characters long."
                @focus="handlePromptFocus"
                @input="handlePromptInput"
                @compositionstart="handleCompositionStart"
                @compositionend="handleCompositionEnd"
              />
            </div>
            
            <!-- Resolution Selection -->
            <div class="pb-2 border-b border-blue-footerborder">
              <label class="block text-sm font-medium text-blue-maintext mb-2">
                Resolution
              </label>
              <div class="grid grid-cols-2 gap-4">
                <!-- Quality Selection -->
                <div>
                  <label class="block text-xs font-medium text-blue-resolutionlabel mb-2">
                    Quality
                  </label>
                  <select 
                    v-model="selectedResolution" 
                    class="w-full px-3 py-2 border border-blue-footerborder rounded-lg focus:ring-2 focus:ring-blue-dark focus:border-blue-dark transition-colors text-blue-resolutionoption bg-blue-pale"
                  >
                    <option value="480p" class="text-blue-resolutionoptionselected">
                      480P (20 Credits)
                    </option>
                    <option value="1080p" class="text-blue-resolutionoptionselected">
                      1080P (100 Credits)
                    </option>
                  </select>
                </div>
                
                <!-- Aspect Ratio Selection -->
                <div v-if="activeMode === 'text-to-video'">
                  <label class="block text-xs font-medium text-blue-aspectlabel mb-2">
                    Aspect Ratio
                  </label>
                  <select 
                    v-model="selectedAspectRatio" 
                    class="w-full px-3 py-2 border border-blue-footerborder rounded-lg focus:ring-2 focus:ring-blue-dark focus:border-blue-dark transition-colors text-blue-aspectoption bg-blue-pale"
                  >
                    <option v-if="selectedResolution === '480p'" value="832*480" class="text-blue-aspectoptionselected">
                      16:9 (832*480)
                    </option>
                    <option v-if="selectedResolution === '480p'" value="624*624" class="text-blue-aspectoptionselected">
                      1:1 (624*624)
                    </option>
                    <option v-if="selectedResolution === '480p'" value="480*832" class="text-blue-aspectoptionselected">
                      9:16 (480*832)
                    </option>
                    <option v-if="selectedResolution === '1080p'" value="1920*1080" class="text-blue-aspectoptionselected">
                      16:9 (1920*1080)
                    </option>
                    <option v-if="selectedResolution === '1080p'" value="1080*1920" class="text-blue-aspectoptionselected">
                      9:16 (1080*1920)
                    </option>
                    <option v-if="selectedResolution === '1080p'" value="1440*1440" class="text-blue-aspectoptionselected">
                      1:1 (1440*1440)
                    </option>
                    <option v-if="selectedResolution === '1080p'" value="1632*1248" class="text-blue-aspectoptionselected">
                      4:3 (1632*1248)
                    </option>
                    <option v-if="selectedResolution === '1080p'" value="1248*1632" class="text-blue-aspectoptionselected">
                      3:4 (1248*1632)
                    </option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Toggle Switches -->
            <div class="pb-2 border-b border-blue-footerborder">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="optimizePrompt" class="sr-only peer" />
                    <div class="w-11 h-6 bg-blue-pale border-2 border-blue-footerborder peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-dark rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-blue-light after:border-blue-footerborder after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-dark peer-checked:border-blue-dark" />
                  </label>
                  <label class="text-sm font-medium text-blue-maintext">
                    Prompt Optimization
                  </label>
                </div>
                
                <div class="flex items-center gap-3">
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="showNegativePrompt" class="sr-only peer" />
                    <div class="w-11 h-6 bg-blue-pale border-2 border-blue-footerborder peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-dark rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-blue-light after:border-blue-footerborder after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-dark peer-checked:border-blue-dark" />
                  </label>
                  <label class="text-sm font-medium text-blue-maintext">
                    Negative Prompt
                  </label>
                </div>
              </div>
            </div>
            
            <!-- Negative Prompt Input -->
            <div v-show="showNegativePrompt" class="pb-2 border-b border-blue-footerborder">
              <label class="block text-sm font-medium text-blue-maintext mb-2">
                Negative Prompt
              </label>
              <textarea 
                v-model="negativePrompt"
                rows="2" 
                class="w-full px-3 py-2 border border-blue-footerborder rounded-lg focus:ring-2 focus:ring-blue-dark focus:border-blue-dark resize-none transition-colors bg-blue-pale text-blue-inputtextfilled placeholder-blue-inputtext"
                placeholder="e.g., blurry, watermark, text, low quality"
                @input="handleNegativePromptInput"
                @compositionstart="handleCompositionStart"
                @compositionend="handleCompositionEnd"
              />
              <div class="flex justify-between items-center mt-2 text-xs text-blue-secondarytext">
                <span>Supports Chinese & English</span>
                <span>{{ negativePrompt.length }}/500</span>
              </div>
            </div>
            
            <!-- Generate Button -->
            <button 
              type="submit" 
              class="w-full py-3 bg-blue-button text-blue-buttontext font-medium rounded-lg hover:bg-blue-buttonhover transition-colors duration-200"
              :disabled="isGenerating"
            >
              <span v-if="isGenerating">Generating...</span>
              <span v-else>Generate ({{ currentCreditCost }} Credits)</span>
            </button>
          </form>
        </div>

        <!-- Right Column: Preview -->
        <div class="bg-blue-pale rounded-xl border border-blue-pricingborder p-8 flex flex-col items-center justify-center sticky top-8 min-h-[400px]">
          <!-- 生成状态显示 -->
          <div v-if="isGenerating" class="w-full h-full flex flex-col items-center justify-center text-center">
            <div class="generation-animation mb-6">
              <div class="spinner" />
            </div>
            <h4 class="text-xl font-semibold text-blue-maintext mb-2">
              Generating Video...
            </h4>
            <p class="text-blue-secondarytext mb-6 text-center max-w-md">
              AI is processing your video request, this may take a few minutes
            </p>
            
            <!-- 进度条 -->
            <div class="progress-container w-full max-w-md mb-6">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: progress + '%' }" />
              </div>
              <div class="progress-info">
                <span class="progress-text">{{ Math.round(progress) }}%</span>
              </div>
            </div>
            
            <!-- 任务状态信息 -->

          </div>
          
          <!-- 生成的视频显示 -->
          <div v-else-if="generatedVideo" class="w-full h-full flex flex-col items-center justify-center text-center">
            <div class="w-full max-w-md">
              <video 
                ref="videoRef"
                :src="generatedVideo.url" 
                controls 
                autoplay
                muted
                class="w-full rounded-lg mb-4 shadow-lg"
                preload="metadata"
                @loadeddata="handleVideoLoaded"
              >
                Your browser does not support video playback
              </video>
              <div class="space-y-3">
                <button 
                  @click="downloadVideo"
                  class="w-full py-3 bg-blue-button text-blue-buttontext font-medium rounded-lg hover:bg-blue-buttonhover transition-colors duration-200"
                >
                  <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Video
                </button>
                <button 
                  @click="generatedVideo = null"
                  class="w-full py-2 text-blue-secondarytext hover:text-blue-maintext transition-colors duration-200"
                >
                  Generate New Video
                </button>
              </div>
            </div>
          </div>
          
          <!-- 默认状态 -->
          <div v-else class="w-full h-full flex flex-col items-center justify-center text-center">
            <svg class="w-12 h-12 text-blue-secondarytext mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            <p class="text-blue-maintext font-medium">
              Your generated video will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, onUnmounted } from 'vue'
import { useNuxtApp } from 'nuxt/app'
import { useClerkAuth } from '~/utils/authHelper'
import { useUserStore } from '~/stores/user'
import { useUiStore } from '~/stores/ui'
import { useRouter } from 'vue-router'
import { useNavigation } from '~/utils/navigation'
import { text2video, image2video, upload, checkTask } from '~/api'

const { $toast } = useNuxtApp() as any
const { isSignedIn } = useClerkAuth()
const userStore = useUserStore()
const uiStore = useUiStore()
const router = useRouter()
const { handleNavClick } = useNavigation()

// 响应式数据
const activeMode = ref('text-to-video')
const prompt = ref('')
const negativePrompt = ref('')
const optimizePrompt = ref(false)
const showNegativePrompt = ref(false)
const isGenerating = ref(false)
const uploadedImage = ref<File | null>(null)
const selectedResolution = ref('480p')
const selectedAspectRatio = ref('832*480')

// 中文输入法状态
const isComposing = ref(false)

// 图片预览
const imagePreview = ref<string | null>(null)

// 生成的视频数据
const generatedVideo = ref<{
  url: string
  taskId: string
} | null>(null)

// 视频元素引用
const videoRef = ref<HTMLVideoElement | null>(null)

// 进度条相关状态
const progress = ref(0)
const estimatedTime = ref('')
const taskId = ref('')
const taskStatus = ref('')
const pollingInterval = ref<NodeJS.Timeout | null>(null)
const progressStartTime = ref(0)
const progressDuration = ref(0)

// 进度条配置
const PROGRESS_CONFIG = {
  duration: 120000, // 2分钟到达95%
  pollingInterval: 5000, // 5秒轮询一次
  maxProgress: 95, // 最大进度95%
  finalProgress: 100 // 完成时进度100%
}

// 用户积分计算
const userCredits = computed(() => {
  const userInfo = userStore.userInfo
  if (!userInfo) return 0
  return (userInfo.free_limit || 0) + (userInfo.remaining_limit || 0)
})

// 分辨率积分配置
const resolutionCreditConfig = {
  '480p': 20,
  '1080p': 100
}

// 当前积分消耗
const currentCreditCost = computed(() => {
  const resolution = selectedResolution.value
  return resolutionCreditConfig[resolution as keyof typeof resolutionCreditConfig] || 20
})

// 检查登录状态
const checkLoginStatus = async () => {
  await userStore.fetchUserInfo()
  
  if (!userStore.userInfo) {
    uiStore.showLoginPrompt()
    return false
  }
  return true
}

// 验证提示词
const validatePrompt = () => {
  if (!prompt.value.trim()) {
    $toast.error('Please enter a prompt')
    return false
  }
  
  if (prompt.value.trim().length < 10) {
    $toast.error('Prompt must be at least 10 characters long')
    return false
  }
  
  if (prompt.value.trim().length > 1000) {
    $toast.error('Prompt must be less than 1000 characters')
    return false
  }
  
  return true
}

// 验证图片上传
const validateImageUpload = () => {
  if (activeMode.value === 'image-to-video' && !uploadedImage.value) {
    $toast.error('Please upload an image for image-to-video mode')
    return false
  }
  
  if (uploadedImage.value) {
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (uploadedImage.value.size > maxSize) {
      $toast.error('Image file size must be less than 10MB')
      return false
    }
    
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(uploadedImage.value.type)) {
      $toast.error('Please upload a valid image file (JPEG, PNG, or WebP)')
      return false
    }
  }
  
  return true
}

// 模式切换
const switchMode = (mode: string) => {
  activeMode.value = mode
  if (mode === 'text-to-video') {
    uploadedImage.value = null
    imagePreview.value = null
  } else if (mode === 'image-to-video') {
    uploadedImage.value = null
    imagePreview.value = null
    selectedAspectRatio.value = '624*624'
  }
}

// 提示词聚焦处理
const handlePromptFocus = async () => {
  await checkLoginStatus()
}

// 提示词输入处理
const handlePromptInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  const value = target.value
  
  if (value.length > 1000) {
    prompt.value = value.slice(0, 1000)
    $toast.warning('Prompt length cannot exceed 1000 characters')
  }
}

// 中文输入法开始
const handleCompositionStart = () => {
  isComposing.value = true
}

// 中文输入法结束
const handleCompositionEnd = () => {
  isComposing.value = false
}

// Negative Prompt输入处理
const handleNegativePromptInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  const value = target.value
  
  if (value.length > 500) {
    negativePrompt.value = value.slice(0, 500)
    $toast.warning('Negative prompt length cannot exceed 500 characters')
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

// 图片上传处理
const handleImageUpload = async (event: Event) => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    return
  }
  
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    uploadedImage.value = target.files[0]
    
    // 创建图片预览
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target?.result as string
    }
    reader.readAsDataURL(target.files[0])
  }
}

// 删除图片
const removeImage = () => {
  uploadedImage.value = null
  imagePreview.value = null
  
  // 清空文件输入框
  const fileInput = document.getElementById('image-upload') as HTMLInputElement
  if (fileInput) {
    fileInput.value = ''
  }
}

// 开始进度条
const startProgress = () => {
  progressStartTime.value = Date.now()
  progressDuration.value = PROGRESS_CONFIG.duration
  progress.value = 0
  
  const updateProgress = () => {
    const elapsed = Date.now() - progressStartTime.value
    const progressPercent = Math.min((elapsed / progressDuration.value) * PROGRESS_CONFIG.maxProgress, PROGRESS_CONFIG.maxProgress)
    
    progress.value = progressPercent
    
    const remaining = progressDuration.value - elapsed
    if (remaining > 0) {
      const minutes = Math.floor(remaining / 60000)
      const seconds = Math.floor((remaining % 60000) / 1000)
      estimatedTime.value = `${minutes}:${seconds.toString().padStart(2, '0')}`
    } else {
      estimatedTime.value = 'Almost done'
    }
    
    if (progressPercent < PROGRESS_CONFIG.maxProgress) {
      requestAnimationFrame(updateProgress)
    }
  }
  
  requestAnimationFrame(updateProgress)
}

// 停止进度条
const stopProgress = () => {
  progress.value = PROGRESS_CONFIG.finalProgress
}

// 获取状态文本
const getStatusText = (status: string) => {
  const statusMap: Record<string, string> = {
    'pending': 'Pending',
    'processing': 'Processing',
    'completed': 'Completed',
    'failed': 'Failed',
    'cancelled': 'Cancelled'
  }
  return statusMap[status] || status
}

// 轮询任务状态
const pollTaskStatus = async () => {
  if (!taskId.value) return
  
  try {
    const response = await checkTask(taskId.value)
    
    if (response && response.code === 200) {
      const status = response.data?.status
      const statusMsg = response.data?.status_msg || ''
      
      if (status === 1 && statusMsg !== 'Task in progress') {
        stopProgress()
        stopPolling()
        isGenerating.value = false
        
        generatedVideo.value = {
          url: response.data?.url || '',
          taskId: taskId.value
        }
        
        $toast.success(statusMsg || 'Video generation completed!')
        console.log('Task completed:', response.data)
      } else if (status === 0 || statusMsg === 'Task in progress') {
        taskStatus.value = 'processing'
      } else if (status === -1 || status === -2 ) {
        stopProgress()
        stopPolling()
        isGenerating.value = false
        $toast.error(statusMsg || 'Video generation failed, please try again')
      }
    }
  } catch (error: any) {
    console.error('Failed to poll task status:', error)
  }
}

// 开始轮询
const startPolling = () => {
  if (pollingInterval.value) {
    clearInterval(pollingInterval.value)
  }
  
  pollingInterval.value = setInterval(pollTaskStatus, PROGRESS_CONFIG.pollingInterval)
}

// 停止轮询
const stopPolling = () => {
  if (pollingInterval.value) {
    clearInterval(pollingInterval.value)
    pollingInterval.value = null
  }
}

// 视频加载完成处理
const handleVideoLoaded = () => {
  if (videoRef.value) {
    // 尝试播放视频
    videoRef.value.play().catch((error) => {
      console.log('Auto-play failed, user needs to manually play:', error)
    })
  }
}

// 下载视频
const downloadVideo = async () => {
  if (!generatedVideo.value?.url) {
    $toast.error('Invalid video link')
    return
  }
  
  try {
    const response = await fetch(generatedVideo.value.url)
    if (!response.ok) {
      throw new Error('Failed to fetch video')
    }
    
    const blob = await response.blob()
    const blobUrl = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = `wan2video_${generatedVideo.value.taskId}.mp4`
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setTimeout(() => {
      URL.revokeObjectURL(blobUrl)
    }, 100)
    
    $toast.success('Starting video download')
  } catch (error) {
    console.error('Failed to download video:', error)
    $toast.error('Download failed, please try again')
  }
}

// 生成处理
const handleGenerate = async () => {
  const isLoggedIn = await checkLoginStatus()
  if (!isLoggedIn) {
    return
  }

  if (userCredits.value < currentCreditCost.value) {
    $toast.error(`Insufficient credits. This operation requires ${currentCreditCost.value} credits, but you only have ${userCredits.value} credits`)
    
    // 使用 handleNavClick 滑动到价格部分
    handleNavClick('pricing')
    return
  }

  if (!validatePrompt()) {
    return
  }

  if (!validateImageUpload()) {
    return
  }

  isGenerating.value = true
  generatedVideo.value = null
  
  try {
    let response
    
    if (activeMode.value === 'text-to-video') {
      const formData = {
        prompt: prompt.value,
        size: selectedAspectRatio.value,
        prompt_extend: optimizePrompt.value ? 'true' : 'false',
        negative_prompt: showNegativePrompt.value ? negativePrompt.value : ''
      }
      startProgress()
      response = await text2video(formData)
    } else if (activeMode.value === 'image-to-video') {
      if (!uploadedImage.value) {
        $toast.error('Please upload an image for image-to-video mode')
        return
      }
      
    
      
      const formData = {
        prompt: prompt.value,
        file: uploadedImage.value,
        resolution: selectedResolution.value,
        optimize_prompt: optimizePrompt.value ? 1 : 0,
        negative_prompt: showNegativePrompt.value ? negativePrompt.value : ''
      }
      startProgress()
      response = await image2video(formData)
    }

    if (response && response.code === 200) {
      taskId.value = response.data?.task_id || ''
      
      if (taskId.value) {
        $toast.success('Video generation task created successfully!')
        // startProgress()
        startPolling()
      } else {
        $toast.error('Task ID not received')
        isGenerating.value = false
      }
    } else {
      $toast.error(response?.msg || 'Generation failed. Please try again.')
      isGenerating.value = false
    }
  } catch (error: any) {
    stopProgress()
    console.error('Generation error:', error)
    $toast.error(error?.msg || 'Generation failed. Please try again.')
    isGenerating.value = false
  }
}

// 监听分辨率变化，重置宽高比选择
watch(selectedResolution, (newResolution) => {
  if (newResolution === '480p') {
    selectedAspectRatio.value = '624*624'
  } else if (newResolution === '1080p') {
    selectedAspectRatio.value = '1440*1440'
  }
})

// 监听模式变化，重置宽高比选择
watch(activeMode, (newMode) => {
  if (newMode === 'image-to-video') {
    selectedAspectRatio.value = '1:1'
  }
})

// 组件卸载时清理
onUnmounted(() => {
  stopPolling()
})

// 组件挂载时获取用户信息
onMounted(() => {
  userStore.fetchUserInfo()
})
</script>

<style scoped>
/* 进度条样式 */
.generation-animation {
  @apply relative w-24 h-24 mb-6;
}

.spinner {
  @apply w-full h-full border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin;
}

.progress-container {
  @apply w-full max-w-md mb-6;
}

.progress-bar {
  @apply w-full bg-gray-200 rounded-full h-3 mb-2;
}

.progress-fill {
  @apply bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300;
}

.progress-info {
  @apply flex justify-between text-sm text-gray-600;
}

.progress-text {
  @apply font-medium;
}

.progress-time {
  @apply text-gray-500;
}
</style> 