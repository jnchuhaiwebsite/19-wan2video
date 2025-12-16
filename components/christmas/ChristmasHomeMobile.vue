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
    <!-- 背景视频 -->
    <video
      :key="currentIndex"
      ref="videoPlayer"
      autoplay
      loop
      :muted="isMuted"
      playsinline
      style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
      "
      @ended="handleVideoEnded"
      @loadeddata="ensureVideoPlay"
    >
      <source :src="templates[currentIndex].verticalVideo" type="video/mp4" />
    </video>

    <!-- 页面内容 -->
    <div
      style="
        position: relative;
        z-index: 1;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
      "
    >
      <!-- 声音控制按钮 -->
      <button
        @click="toggleMute"
        style="
          position: fixed;
          top: 100px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          z-index: 60;
          padding: 0;
        "
        @mouseenter="(e: any) => e.target.style.background = 'rgba(0,0,0,0.5)'"
        @mouseleave="(e: any) => e.target.style.background = 'rgba(0,0,0,0.3)'"
      >
        <!-- 有声音图标 -->
        <svg
          v-if="!isMuted"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <!-- 静音图标 -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      </button>

      <!-- 指示器点 -->
      <div
        style="
          position: absolute;
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          gap: 8px;
          z-index: 10;
        "
      >
        <div
          v-for="(template, index) in templates"
          :key="index"
          @click="switchToVideo(index)"
          :style="{
            width: index === currentIndex ? '24px' : '8px',
            height: '8px',
            borderRadius: '4px',
            background: index === currentIndex ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }"
        ></div>
      </div>

      <!-- 底部按钮组 -->
      <div
        style="
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
          width: calc(100% - 40px);
          max-width: 400px;
        "
      >
        <!-- Customized 按钮 -->
        <button
          @click="goToCustomized"
          style="
          flex: 1;
          padding: 12px 28px;
          border-radius: 999px;
          background: linear-gradient(to bottom, #ff6b6b, #c0392b);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.3px;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(220, 20, 60, 0.3),
                      0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                      0 0 10px rgba(255, 75, 75, 0.4);
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          "
        @mouseenter="(e: any) => { e.target.style.transform = 'translateY(-2px) scale(1.05)'; e.target.style.boxShadow = '0 6px 20px rgba(220, 20, 60, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 0 20px rgba(255, 75, 75, 0.8)' }"
        @mouseleave="(e: any) => { e.target.style.transform = 'translateY(0) scale(1)'; e.target.style.boxShadow = '0 3px 10px rgba(220, 20, 60, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 0 10px rgba(255, 75, 75, 0.4)' }"
        >
          Customized
        </button>

        <!-- Upload Image 按钮 -->
        <!-- <button
          @click="triggerImageUpload"
          style="
            flex: 1;
            padding: 14px 24px;
            border-radius: 12px;
            background: linear-gradient(135deg, #9b3a35, #b8544a);
            border: 1px solid rgba(255,255,255,0.3);
            color: white;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
          "
          @mouseenter="(e: any) => e.target.style.transform = 'translateY(-2px)'"
          @mouseleave="(e: any) => e.target.style.transform = 'translateY(0)'"
        >
          Upload Image
        </button> -->
      </div>

      <!-- 隐藏的文件输入 -->
      <input
        ref="imageInput"
        type="file"
        accept="image/*"
        style="display: none"
        @change="handleImageSelect"
      />

      <!-- 左右切换按钮 -->
      <!-- <button
        @click="prevVideo"
        style="
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          z-index: 10;
        "
        @mouseenter="(e: any) => e.target.style.background = 'rgba(255,255,255,0.3)'"
        @mouseleave="(e: any) => e.target.style.background = 'rgba(255,255,255,0.2)'"
      >
        ‹
      </button> -->
      <!-- <button
        @click="nextVideo"
        style="
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          z-index: 10;
        "
        @mouseenter="(e: any) => e.target.style.background = 'rgba(255,255,255,0.3)'"
        @mouseleave="(e: any) => e.target.style.background = 'rgba(255,255,255,0.2)'"
      >
        ›
      </button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNuxtApp } from 'nuxt/app'
import { previewGenvideo, checkTaskStatusVideo } from '~/api'

// 模板数据
const templates = [
  {
    name: 'snow house',
    thumbnail: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-christmas-cabin-scene.png',
    horizontalVideo: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-h.mp4',
    verticalVideo: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-s.mp4',
    prompt: 'The Christmas sky is snowing, surrounded by pine trees adorned with colorful lights. The Christmas tree is covered in snow, and the roof and windowsill of the small wooden house are covered with a thick layer of white snow. There is a flower wreath made of pine cones and red berries hanging at the door. The character is wearing a Christmas sweater and a red Christmas hat, standing next to a small wooden house. The character width accounts for 70% of the page. About 70% of the page is occupied by height, holding a Christmas card and saying to a friend with a straight face, "Happy Holidays, Catching up so to celebrate. Hope you\'re drilling hard and getting all the best snacks/gifts. Stay awesome".Make people instantly feel the lively, excited, and energetic atmosphere of the festival night.'
  },
  // {
  //   name: 'christmas tree',
  //   thumbnail: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-living-room-pine-tree-scene.png',
  //   horizontalVideo: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-h.mp4',
  //   verticalVideo: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-s.mp4',
  //   prompt: 'On Christmas Eve, there is a huge and lush real pine tree in the center of the living room! It is covered with various retro glass ball ornaments, with warm yellow white string lights on. The heavy snow outside the window gives a feeling of the night. Six thick red or green Christmas stockings are neatly placed on the fireplace rack, creating a warm atmosphere inside the house. The soft yellow color scheme places the characters inside, wearing Christmas hats and standing at the front. The character width accounts for 70% of the page. About 70% of the page is high, wearing an ugly Christmas sweater, holding a Christmas card, and saying to friends with a straight face, "Happy Holidays, Catching up so to celebrate. Hope you\'re drilling hard and getting all the best snacks/gifts. Stay awesome.'
  // },
  // {
  //   name: 'church',
  //   thumbnail: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-church-holiday-interior.png',
  //   horizontalVideo: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-h.mp4',
  //   verticalVideo: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-s.mp4',
  //   prompt: 'The interior of the Christmas church is decorated with a large number of green holly branches and red potted poinsettias in the night background. The main lighting comes from chandeliers and lit candles. The character is in the center of the video, wearing a red Christmas hat, and the width of the character accounts for 70% of the page. The height accounts for about 70% of the page, wearing an ugly Christmas sweater, making people instantly feel the lively, excited, and energetic atmosphere of the holiday night. Say to your friend with a straight face, \'Happy Holidays, Catching up soon to celebrate. Hope you\'re drilling hard and getting all the best snacks/gifts. Stay awesome!\'.'
  // },
  // {
  //   name: 'pine forest',
  //   thumbnail: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-pine-forest-lights.png',
  //   horizontalVideo: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-h.mp4',
  //   verticalVideo: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-s.mp4',
  //   prompt: 'A pine forest in the outskirts, with thick snow on the ground, and yellow lights shining from the windows of the farm\'s wooden houses, warm and romantic. Most importantly, there are countless warm light strings wrapped around the pine trees in the forest, only white or amber in color. The contours of the pine trees are outlined like Christmas trees. There are elk running through the forest, and as dusk falls and the lights begin to dominate the view, the entire scene becomes poetic and romantic. The sky is snowing, and the character is wearing a Christmas sweater and a red Christmas hat. The character\'s width accounts for 70% of the page. The proportion of height on the page is about 70%, making people instantly feel the lively, excited, and energetic atmosphere of the festival night. Say to your friend with a straight face, \'Happy Holidays, Catching up soon to celebrate. Hope you\'re drilling hard and getting all the best snacks/gifts. Stay awesome!\'.'
  // }
]

const router = useRouter()
const { $toast } = useNuxtApp() as any
const currentIndex = ref(0)
const videoPlayer = ref<HTMLVideoElement | null>(null)
const isMuted = ref(false) // 默认静音
const imageInput = ref<HTMLInputElement | null>(null)
const isGenerating = ref(false)
const currentTaskId = ref<string | null>(null)

// 视频播放完成处理
const handleVideoEnded = () => {
  nextVideo()
}

// 切换到指定视频
const switchToVideo = (index: number) => {
  currentIndex.value = index
}

// 下一个视频
const nextVideo = () => {
  currentIndex.value = (currentIndex.value + 1) % templates.length
}

// 上一个视频
const prevVideo = () => {
  currentIndex.value = (currentIndex.value - 1 + templates.length) % templates.length
}

// 切换静音状态
const toggleMute = () => {
  isMuted.value = !isMuted.value
  if (videoPlayer.value) {
    videoPlayer.value.muted = isMuted.value
  }
}

// 确保视频播放
const ensureVideoPlay = () => {
  if (videoPlayer.value) {
    videoPlayer.value.muted = isMuted.value
    videoPlayer.value.play().catch(() => {
      // 忽略自动播放失败
    })
  }
}

// 跳转到自定义页面
const goToCustomized = () => {
  router.push('/create-christmas-video')
}

// 触发图片上传
const triggerImageUpload = () => {
  if (imageInput.value) {
    imageInput.value.click()
  }
}

// 处理图片选择
const handleImageSelect = async (e: Event) => {
  const target = e.target as HTMLInputElement
  if (!target.files || !target.files[0]) return

  const file = target.files[0]
  
  // 记住当前模板序号和提示词
  const templateIndex = currentIndex.value
  const template = templates[templateIndex]
  
  if (!template) {
    $toast?.error?.('模板信息错误')
    return
  }

  try {
    isGenerating.value = true
    $toast?.info?.('正在创建视频生成任务...')

    // 调用生成接口
    const payload: any = {
      model: 'wan2.5-i2v-preview',
      prompt: template.prompt,
      duration: 10,
      prompt_extend: true,
      image: file,
      resolution: '720P'
    }

    const res: any = await previewGenvideo(payload)

    if (res?.success && res.data?.task_id) {
      currentTaskId.value = res.data.task_id
      $toast?.success?.('任务创建成功，正在生成视频...')
      
      // 跳转到生成页面，传递任务ID
      router.push({
        path: '/create-christmas-video',
        query: {
          taskId: res.data.task_id,
          templateIndex: templateIndex.toString()
        }
      })
    } else {
      isGenerating.value = false
      const msg = res?.msg || '创建任务失败'
      $toast?.error?.(msg)
    }
  } catch (err: any) {
    console.error('生成视频失败:', err)
    isGenerating.value = false
    const msg = err?.msg || '生成视频时发生错误'
    $toast?.error?.(msg)
  } finally {
    // 清空文件输入
    if (imageInput.value) {
      imageInput.value.value = ''
    }
  }
}

onMounted(() => {
  // 确保初始视频播放
  ensureVideoPlay()
})
</script>

<style scoped>
/* 移动端优化 */
@media (max-width: 480px) {
  button[style*="left: 20px"],
  button[style*="right: 20px"] {
    width: 36px !important;
    height: 36px !important;
    font-size: 18px !important;
  }
}
</style>

