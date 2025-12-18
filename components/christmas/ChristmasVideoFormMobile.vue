<template>
  <div class="w-full">
    <!-- 移动端表单：玻璃态透明背景 -->
    <div
      class="flex flex-col gap-4 rounded-2xl text-white p-6 border border-emerald-200/25 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-2xl w-full"
      style="
        background:
          linear-gradient(
            135deg,
            rgba(1, 41, 32, 0.45),
            rgba(1, 41, 32, 0.25)
          );
      "
    >
      <!-- 图片上传预览 -->
      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <label class="text-xl text-gray-200">
            Upload photo <span class="text-red-500">*</span>
          </label>
          <button
            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-lg"
            @click="emit('close')"
            type="button"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="relative">
          <div
            class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-yellow-400/50 rounded-2xl cursor-pointer hover:border-yellow-400 transition-colors bg-black/30 overflow-hidden group"
            @click="triggerFileInput"
          >
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              class="hidden"
              @click="checkLoginStatus"
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

            <!-- 无图片时提示 -->
            <div v-else class="flex flex-col items-center justify-center p-4 text-center">
              <svg
                t="1765334222491"
                class="icon w-10 h-10 text-yellow-400 mb-3 group-hover:scale-110 transition-transform"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2815"
                width="200"
                height="200"
              >
                <path
                  d="M269.44 256l23.296-75.381333A74.666667 74.666667 0 0 1 364.074667 128h295.850666a74.666667 74.666667 0 0 1 71.338667 52.618667L754.56 256H821.333333c64.8 0 117.333333 52.533333 117.333334 117.333333v426.666667c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V373.333333c0-64.8 52.533333-117.333333 117.333334-117.333333h66.773333z m23.605333 64H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v426.666667a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V373.333333a53.333333 53.333333 0 0 0-53.333334-53.333333h-90.378666a32 32 0 0 1-30.570667-22.549333l-30.272-97.930667a10.666667 10.666667 0 0 0-10.186667-7.52H364.074667a10.666667 10.666667 0 0 0-10.186667 7.52l-30.272 97.92A32 32 0 0 1 293.045333 320zM512 725.333333c-88.362667 0-160-71.637333-160-160 0-88.362667 71.637333-160 160-160 88.362667 0 160 71.637333 160 160 0 88.362667-71.637333 160-160 160z m0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
                  fill="currentColor"
                  p-id="2816"
                ></path>
              </svg>
              <p class="text-yellow-100 font-medium mb-1 text-sm">
                Click to upload your Christmas photo
              </p>
              <p class="text-xs text-yellow-100/70">
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

      <!-- 模版选择 -->
      <div class="flex flex-col gap-3">
        <label class="text-sm text-gray-200">Template <span class="text-red-500">*</span></label>

        <div class="grid grid-cols-2 gap-3">
          <button
            v-for="tpl in templates"
            :key="tpl.key"
            type="button"
            @click="handleSelectTemplate(tpl)"
            :class="[
              'flex flex-col rounded-3xl overflow-hidden bg-transparent border transition-all duration-200 text-left',
              selectedTemplateKey === tpl.key
                ? 'border-yellow-400 ring-2 ring-yellow-400/40 shadow-lg'
                : 'border-yellow-400/30 hover:border-yellow-400/50 hover:bg-black/40'
            ]"
          >
            <div class="w-full relative">
              <div class="w-full aspect-[194/104] overflow-hidden rounded-t-3xl">
                <img
                  :src="tpl.thumb"
                  :alt="tpl.name"
                  class="w-full h-full object-cover"
                />
              </div>

              <div
                class="absolute left-1.5 bottom-1.5 px-2 py-0.5 rounded-md backdrop-blur-sm max-w-[80%]"
              >
                <p class="text-[11px] font-semibold text-emerald-50 truncate leading-tight">
                  {{ tpl.name }}
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- 提示词输入 -->
      <div class="flex flex-col gap-2">
        <label class="text-sm text-yellow-400/50">Prompt(The prompt words can be modified)</label>
        <textarea
          v-model="prompt"
          rows="4"
          class="w-full rounded-lg bg-black/30 border border-yellow-400/50 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/70 focus:border-yellow-400 transition-colors"
          placeholder="Describe your Christmas greeting video, e.g. Santa is delivering gifts to my family in a snowy night..."
          @click="checkLoginStatus"
        />
      </div>

      <!-- 音频上传 -->
      <div class="flex flex-col gap-3">
        <!-- 标题和分类按钮在同一行 -->
        <div class="flex items-center justify-between gap-2 flex-nowrap">
          <label class="text-base sm:text-lg text-gray-200 font-medium whitespace-nowrap flex-shrink-0">Choose music</label>
          <!-- 分类按钮 -->
          <div class="flex gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              v-for="category in audioCategories"
              :key="category.key"
              type="button"
              @click="selectedCategory = category.key"
              :class="[
                'px-2 sm:px-4 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-medium transition-all whitespace-nowrap',
                selectedCategory === category.key
                  ? 'bg-yellow-500/90 text-white border-2 border-yellow-400 shadow-lg'
                  : 'bg-black/40 text-gray-300 hover:bg-black/60 border border-yellow-400/30'
              ]"
            >
              {{ category.displayName }}
            </button>
          </div>
        </div>
        
        <!-- 音频选择区域 -->
        <div class="relative">
          <!-- 音频列表（横向滚动，包含 Upload Audio 按钮） -->
          <div class="overflow-x-auto pb-2 audio-scroll-container" style="scroll-behavior: smooth; -webkit-overflow-scrolling: touch;">
            <div class="flex gap-3 min-w-max px-1">
              <!-- Upload Audio 按钮 -->
              <label
                :class="[
                  'flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer transition-all whitespace-nowrap border-2 border-dashed min-w-[140px] justify-center',
                  uploadedAudio && !selectedAudioFromLibrary
                    ? 'bg-yellow-500/20 border-yellow-400 text-white shadow-lg'
                    : 'bg-black/30 border-yellow-400/50 text-white hover:border-yellow-400/80 hover:bg-black/40'
                ]"
                @click.stop.prevent="handleUploadLabelClick"
              >
                <!-- 已上传音频时：左播放/暂停，中间文件名，右侧 X 清除 -->
                <template v-if="uploadedAudio && !selectedAudioFromLibrary">
                  <!-- 播放 / 暂停按钮 -->
                  <button
                    type="button"
                    class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/40 border border-yellow-400/70 mr-1"
                    @click.stop="toggleCurrentAudioPlay"
                  >
                    <!-- 未播放：播放图标 -->
                    <svg
                      v-if="!isAudioPlaying"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-play w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                    <!-- 播放中：暂停图标 -->
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
                      class="lucide lucide-pause w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                    >
                      <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                      <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                    </svg>
                  </button>

                  <!-- 文件名 -->
                  <span class="text-sm font-medium max-w-[140px] truncate">
                    {{ uploadedAudio?.name }}
                  </span>

                  <!-- 清除按钮 -->
                  <button
                    type="button"
                    class="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/90 hover:bg-red-500 text-white text-xs"
                    @click.stop="removeAudio"
                  >
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </template>

                <!-- 未上传音频时：显示 + Upload Audio -->
                <template v-else>
                  <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <span class="text-sm font-medium">
                    Upload Audio
                  </span>
                </template>
              </label>
              <input
                id="christmas-audio-upload-mobile"
                ref="audioInput"
                type="file"
                class="hidden"
                accept="audio/wav,audio/mp3,audio/mpeg"
                @change="handleAudioChange"
              />

              <!-- 音频库音频项 -->
              <button
                v-for="audio in currentCategoryAudios"
                :key="audio.url"
                type="button"
                @click="selectAudioFromLibrary(audio)"
                :class="[
                  'flex items-center gap-2 px-4 py-3 rounded-lg transition-all whitespace-nowrap border-2 min-w-[180px]',
                  selectedAudioFromLibrary?.url === audio.url
                    ? 'bg-yellow-500/20 border-yellow-400 text-white shadow-lg'
                    : 'bg-black/30 border-yellow-400/30 text-white hover:border-yellow-400/60 hover:bg-black/40'
                ]"
              >
                <!-- 播放/暂停图标 -->
                <svg v-if="playingAudioUrl === audio.url && isAudioPlaying" class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <!-- 暂停图标 -->
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                <svg v-else class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <!-- 播放图标 -->
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span class="text-sm font-medium truncate">{{ audio.name }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- 隐藏的音频播放器（用于上传音频，不显示控件） -->
        <audio 
          v-if="audioPreview && uploadedAudio" 
          ref="audioPlayer" 
          :src="audioPreview" 
          @play="onAudioPlay"
          @pause="onAudioPause"
          @ended="onAudioEnded"
          class="hidden"
        >
        </audio>

        <!-- 隐藏的音频播放器（用于音频库音频，不显示控件） -->
        <audio 
          v-if="audioPreview && selectedAudioFromLibrary && !uploadedAudio" 
          ref="audioPlayerHidden" 
          :src="audioPreview" 
          @play="onAudioPlay"
          @pause="onAudioPause"
          @ended="onAudioEnded"
          class="hidden"
        >
        </audio>

        <p class="text-[11px] text-gray-100 mt-1">
          Supports WAV, MP3 format, 3-30 seconds, max 15MB
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import { useNuxtApp } from 'nuxt/app';
import { useUserStore } from '~/stores/user';

const emit = defineEmits<{
  (e: 'close'): void;
}>();

interface TemplateItem {
  key: string;
  name: string;
  thumb: string;
  prompt: string;
  videoH: string;
  videoV: string;
}

interface AudioItem {
  name: string;
  url: string;
}

interface AudioCategory {
  key: string;
  name: string;
  displayName: string;
  audios: AudioItem[];
}

const templates: TemplateItem[] = [
  {
    key: 'snow-house',
    name: 'snow house',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-christmas-cabin-scene.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-s.mp4',
    prompt:"  Snow is falling under the Christmas sky, with pine trees adorned with colorful lights all around. The Christmas tree is covered in snow, and the roof and windowsills of the little cabin are blanketed in a thick layer of white snow. A wreath made of pine cones and red berries hangs at the door. The person is wearing a Christmas sweater and a red Santa hat, standing next to the cabin. The person occupies about 70% of the width and around 70% of the height of the page, facing the camera directly and saying: 'Happy Holidays, Catching up soon to celebrate. Hope you're chilling hard and getting all the best snacks/gifts. Stay awesome!' The scene instantly conveys a lively, excited, and energetic holiday night atmosphere."
  },
  {
    key: 'christmas-tree',
    name: 'christmas tree',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-living-room-pine-tree-scene.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-s.mp4',
    prompt:"  On Christmas night, a huge, lush real pine tree stands in the center of the living room! It's adorned with various vintage glass ball ornaments, glowing with warm yellow and white string lights. Outside the window, snowflakes drift down, capturing the essence of a winter night. On the mantel, six thick red or green Christmas stockings are neatly arranged. The overall atmosphere in the room is cozy, with soft yellow tones. The person is inside the room, wearing a Christmas hat, standing at the front. They occupy about 70% of the width and around 70% of the height of the page, dressed in an ugly Christmas sweater, facing the camera and saying to their friend: 'Happy Holidays, Catching up soon to celebrate. Hope you're chilling hard and getting all the best snacks/gifts. Stay awesome!'"
  },
  {
    key: 'church',
    name: 'church',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-church-holiday-interior.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-s.mp4',
    prompt:"  The interior of the Christmas church is decorated with a large number of green holly branches and red potted poinsettias in the night background. The main lighting comes from chandeliers and lit candles. The character is in the center of the video, wearing a red Christmas hat, and the width of the character accounts for 70% of the page. The height accounts for about 70% of the page, wearing an ugly Christmas sweater, making people instantly feel the lively, excited, and energetic atmosphere of the holiday night. Say to your friend with a straight face, 'Happy Holidays, Catching up soon to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome!'."
  },
  {
    key: 'pine-forest',
    name: 'pine forest',
    thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-pine-forest-lights.png',
    videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-h.mp4',
    videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-s.mp4',
    prompt:"  A pine forest in the outskirts, with thick snow on the ground, and yellow lights shining from the windows of the farm's wooden houses, warm and romantic. Most importantly, there are countless warm light strings wrapped around the pine trees in the forest, only white or amber in color. The contours of the pine trees are outlined like Christmas trees. There are elk running through the forest, and as dusk falls and the lights begin to dominate the view, the entire scene becomes poetic and romantic. The sky is snowing, and the character is wearing a Christmas sweater and a red Christmas hat. The character's width accounts for 70% of the page. The proportion of height on the page is about 70%, making people instantly feel the lively, excited, and energetic atmosphere of the festival night. Say to your friend with a straight face, 'Happy Holidays, Catching up soon to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome!'."
  }
];

const fileInput = ref<HTMLInputElement | null>(null);
const audioInput = ref<HTMLInputElement | null>(null);
const audioPlayer = ref<HTMLAudioElement | null>(null);
const audioPlayerHidden = ref<HTMLAudioElement | null>(null);

const previewUrl = ref<string | null>(null);
const uploadedImageFile = ref<File | null>(null);

const prompt = ref('');
const selectedTemplateKey = ref<string | null>(null);

const uploadedAudio = ref<{ name: string; size: number } | null>(null);
const audioPreview = ref<string | null>(null);
const audioFile = ref<File | null>(null);
const selectedAudioFromLibrary = ref<{ name: string; url: string } | null>(null);
const isAudioPlaying = ref(false);
const playingAudioUrl = ref<string | null>(null);

const audioCategories: AudioCategory[] = [
  {
    key: 'all',
    name: 'all',
    displayName: 'All',
    audios: [
      { name: 'All I Want For Christmas', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/all-i-want-for-christmas-is-you.mp3' },
      { name: 'Fairytale At Christmas', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/fairytale-at-christmas.mp3' },
      { name: 'Feliz Navidad', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/feliz-navidad.mp3' },
      { name: 'Last Christmas', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/last-christmas.mp3' },
      { name: 'Mistletoe', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/mistletoe.mp3' },
      { name: 'Santa Tell Me', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/santa-tell-me.mp3' },
      { name: 'Snowman', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/snowman.mp3' },
      { name: 'Christmas Tree Farm', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/christmas-tree-farm.mp3' },
      { name: 'Coming Home This Christmas', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/coming-home-this-christmas.mp3' },
      { name: 'Jingle Bell Rock', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/jingle-bell-rock.mp3' },

      { name: 'Friends (Male)', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/male/friend.mp3'},
      { name: 'Colleagues (Male)', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/male/colleague.mp3' },
      { name: 'Family (Male)', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/male/family-members.mp3' },
      { name: 'Friends (Female)', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/female/friend.mp3' },
      { name: 'Colleagues (Female)', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/female/colleague.mp3' },
      { name: 'Family (Female)', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/female/family-members.mp3' }
    ]
  },
  {
    key: 'male',
    name: 'male',
    displayName: 'Male',
    audios: [
      { name: 'Colleagues', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/male/colleague.mp3' },
      { name: 'Family', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/male/family-members.mp3' },
      { name: 'Jingle Bell Rock', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/jingle-bell-rock.mp3' },
      { name: 'Mistletoe', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/mistletoe.mp3' },
      { name: 'Last Christmas', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/last-christmas.mp3' },
      { name: 'Feliz Navidad', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/feliz-navidad.mp3' },
      { name: 'All I Want For Christmas', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/all-i-want-for-christmas-is-you.mp3' },
      { name: 'Friends', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/male/friend.mp3' },
    ]
  },
  {
    key: 'female',
    name: 'female',
    displayName: 'Female',
    audios: [
      { name: 'Friends', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/female/friend.mp3' },
      { name: 'Colleagues', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/female/colleague.mp3' },
      { name: 'Family', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/female/family-members.mp3' },
      { name: 'Christmas Tree Farm', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/christmas-tree-farm.mp3' },
      { name: 'Snowman', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/snowman.mp3' },
      { name: 'Santa Tell Me', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/santa-tell-me.mp3' },
      { name: 'Fairytale At Christmas', url: 'https://cfsource.wan2video.com/wan2video/christmas/template/music/fairytale-at-christmas.mp3' },
    ]
  }
];

const selectedCategory = ref<string>('all');

const currentCategoryAudios = computed(() => {
  const category = audioCategories.find(cat => cat.key === selectedCategory.value);
  return category ? category.audios : [];
});

const { $toast } = useNuxtApp() as any;
const userStore = useUserStore();
const userInfo = computed(() => userStore.userInfo);

// 检查是否已登录
const isLoggedIn = (): boolean => {
  if (!userInfo.value) {
    return false;
  }
  return true;
};

const checkLoginStatus = async (event: Event) => {
  if (!isLoggedIn()) {
    event?.preventDefault()
    const loginButton = document.getElementById('bindLogin')
    if (loginButton) {
      loginButton.click()
    }
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
  selectedAudioFromLibrary.value = null; // 清除音频库选择

  if (audioPreview.value) {
    URL.revokeObjectURL(audioPreview.value);
  }
  audioPreview.value = URL.createObjectURL(file);
};

// 播放 / 暂停当前已选择的音频（上传或音频库）
const toggleCurrentAudioPlay = () => {
  const player = audioPlayerHidden.value || audioPlayer.value;
  if (!player || !audioPreview.value) return;

  if (isAudioPlaying.value) {
    player.pause();
  } else {
    try {
      player.currentTime = 0;
      player.play().catch(err => {
        console.error('Failed to play audio:', err);
      });
    } catch (err) {
      console.error('Failed to play audio:', err);
    }
  }
};

// 清除当前已选择/上传的音频，但不重新触发选择
const removeAudio = () => {
  if (audioPreview.value && audioPreview.value.startsWith('blob:')) {
    URL.revokeObjectURL(audioPreview.value);
  }
  audioPreview.value = null;
  uploadedAudio.value = null;
  selectedAudioFromLibrary.value = null;
  audioFile.value = null;
  isAudioPlaying.value = false;
  playingAudioUrl.value = null;

  if (audioInput.value) {
    audioInput.value.value = '';
  }

  const player = audioPlayerHidden.value || audioPlayer.value;
  if (player) {
    player.pause();
    player.currentTime = 0;
  }
};

// 处理 Upload 区域点击：只有在未上传音频或正在用音频库时才弹文件选择框
const handleUploadLabelClick = () => {
  if (uploadedAudio.value && !selectedAudioFromLibrary.value) {
    // 已有上传音频时，不再打开选择框
    return;
  }
  if (audioInput.value) {
    audioInput.value.click();
  }
};

const selectAudioFromLibrary = async (audio: AudioItem) => {
  const isSameAudio = selectedAudioFromLibrary.value?.url === audio.url;
  
  // 如果点击的是同一个音频，切换播放/暂停
  if (isSameAudio && playingAudioUrl.value === audio.url) {
    const player = audioPlayerHidden.value || audioPlayer.value;
    if (player) {
      if (isAudioPlaying.value) {
        player.pause();
      } else {
        player.play().catch(err => {
          console.error('Failed to play audio:', err);
        });
      }
    }
    return;
  }
  
  // 停止当前播放的音频
  const currentPlayer = audioPlayerHidden.value || audioPlayer.value;
  if (currentPlayer && isAudioPlaying.value) {
    currentPlayer.pause();
    currentPlayer.currentTime = 0;
  }
  
  selectedAudioFromLibrary.value = audio;
  uploadedAudio.value = null; // 清除上传的音频
  audioFile.value = null; // 清除文件引用

  // 清除之前的上传音频预览
  if (audioPreview.value && audioPreview.value.startsWith('blob:')) {
    URL.revokeObjectURL(audioPreview.value);
  }

  // 设置音频库音频的预览
  audioPreview.value = audio.url;
  playingAudioUrl.value = audio.url;
  isAudioPlaying.value = false; // 重置播放状态，等待播放事件触发

  // 等待下一个 tick 确保 audio 元素已更新
  await nextTick();

  // 自动播放音频（使用隐藏的播放器，不显示控件）
  const player = audioPlayerHidden.value || audioPlayer.value;
  if (player) {
    player.currentTime = 0;
    player.play().catch(err => {
      console.error('Failed to play audio:', err);
    });
  }
};

const stopAudio = () => {
  const player = audioPlayerHidden.value || audioPlayer.value;
  if (player && isAudioPlaying.value) {
    player.pause();
    player.currentTime = 0;
    isAudioPlaying.value = false;
  }
};

const onAudioPlay = () => {
  isAudioPlaying.value = true;
};

const onAudioPause = () => {
  isAudioPlaying.value = false;
};

const onAudioEnded = () => {
  // 播放结束后自动暂停
  const player = audioPlayerHidden.value || audioPlayer.value;
  if (player) {
    player.pause();
    player.currentTime = 0;
  }
  isAudioPlaying.value = false;
};

const clearImage = () => {
  previewUrl.value = null;

  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const handleSelectTemplate = (tpl: TemplateItem) => {
  selectedTemplateKey.value = tpl.key;
  prompt.value = tpl.prompt;
};

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (!target.files || !target.files[0]) return;

  const file = target.files[0];
  uploadedImageFile.value = file;
  const reader = new FileReader();

  reader.onload = (ev) => {
    const url = ev.target?.result as string;
    previewUrl.value = url;
  };

  reader.readAsDataURL(file);
};

// 暴露方法和数据供父组件使用
defineExpose({
  handleSelectTemplate,
  selectedTemplateKey,
  templates,
  selectedAudioFromLibrary,
  uploadedImageFile,
  prompt,
  audioFile,
  isAudioPlaying,
  stopAudio
})
</script>

<style scoped>
/* 音频滚动容器样式 */
.audio-scroll-container {
  scrollbar-width: thin;  /* Firefox */
  scrollbar-color: rgba(234, 179, 8, 0.5) rgba(0, 0, 0, 0.3);  /* Firefox: thumb and track */
}

.audio-scroll-container::-webkit-scrollbar {
  height: 8px;  /* Chrome, Safari and Opera */
}

.audio-scroll-container::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.audio-scroll-container::-webkit-scrollbar-thumb {
  background: rgba(234, 179, 8, 0.5);
  border-radius: 4px;
  transition: background 0.2s;
}

.audio-scroll-container::-webkit-scrollbar-thumb:hover {
  background: rgba(234, 179, 8, 0.7);
}
</style>

