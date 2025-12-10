<template>
  <div class="w-full flex justify-center px-4 py-10">
    <!-- 外层容器（无背景），左右分栏 -->
    <div class="w-full max-w-6xl flex flex-col lg:flex-row lg:items-start gap-8">
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
        <!-- 图片上传预览 -->
        <div class="flex flex-col gap-3">
          <label class="text-xl text-gray-200">Upload photo</label>

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

              <!-- 无图片时提示 -->
              <div v-else class="flex flex-col items-center justify-center p-4 text-center">
                <svg
                  t="1765334222491"
                  class="icon w-10 h-10 text-emerald-300 mb-3 group-hover:scale-110 transition-transform"
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


        <!-- 模版选择 -->
        <div class="flex flex-col gap-3">
          <label class="text-sm text-gray-200">Template</label>

          <div class="grid grid-cols-2 gap-3">
            <button
              v-for="tpl in templates"
              :key="tpl.key"
              type="button"
              @click="handleSelectTemplate(tpl)"
              :class="[
                'flex flex-col rounded-xl overflow-hidden bg-transparent border transition-all duration-200 text-left',
                selectedTemplateKey === tpl.key
                  ? 'border-white ring-2 ring-white/40 shadow-lg'
                  : 'border-emerald-300/20 hover:border-emerald-200/70 hover:bg-black/40'
              ]"
            >
              <div class="w-full relative">
                <div class="w-full aspect-[194/104] overflow-hidden rounded-t-xl">
                  <img
                    :src="tpl.thumb"
                    :alt="tpl.name"
                    class="w-full h-full object-cover"
                  />
                </div>

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


        <!-- 音频上传 -->
        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-200">
            Audio File <span class="text-gray-400 text-xs">(Optional)</span>
          </label>
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

          <!-- <button
            type="button"
            class="mt-1 inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-medium bg-slate-700/80 hover:bg-slate-600 text-slate-100"
            @click="onTestGenerate"
          >
            Test Generate (mock task)
          </button> -->
        </div>
      </div>

      <!-- 右侧预览：独立一列，无表单背景色（整列 sticky） -->
      <div
        :class="[
          'w-full',
          isVertical ? 'lg:w-1/2' : 'lg:w-3/5',
          'lg:sticky lg:top-[100px]'
        ]"
      >
        <div class="flex flex-col items-center" :class="isVertical ? 'justify-center py-40' : 'justify-start'">
          <!-- 横版预览 -->
          <div v-if="!isVertical" class="w-full max-w-xl flex justify-center">
            <div class="relative w-full aspect-[914/724]">
              <img
                src="https://cfsource.wan2video.com/wan2video/christmas/template/images/computer.png"
                alt="Computer Preview"
                class="w-full h-full object-contain select-none pointer-events-none relative z-20"
              />
              <div
                class="absolute flex items-center justify-center z-10"
                style="left: 0%; top: 0%; width: 100%; height: 86%;border-radius: 45px;"
              >
                <div class="w-full h-full rounded-lg overflow-hidden bg-black/80 flex items-center justify-center">
                  <template v-if="isGenerating">
                    <div class="flex flex-col items-center justify-center gap-3 text-center px-4">
                      <svg
                        t="1765265099439"
                        class="w-10 h-10 animate-spin-slow icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="10181"
                        width="200"
                        height="200"
                      >
                        <path d="M496 30.4L472 72v880l24 41.6 24-41.6V72z" fill="#59C2E0" p-id="10182"></path>
                        <path d="M496 240l-96-64v-48l96 64zM496 336L368 256v-48l128 80zM496 240l96-64v-48l-96 64zM496 336l128-80v-48L496 288zM496 784l-96 64v48l96-64zM496 688L368 768v48l128-80zM496 784l96 64v48l-96-64zM496 688l128 80v48L496 736z" fill="#59C2E0" p-id="10183"></path>
                        <path d="M79.2 752.8h48l761.6-440 24-41.6h-48l-761.6 440z" fill="#59C2E0" p-id="10184"></path>
                        <path d="M260 648l-7.2 115.2-41.6 24 7.2-115.2zM343.2 600l-5.6 151.2-41.6 24 5.6-151.2z" fill="#59C2E0" p-id="10185"></path>
                        <path d="M260 648l-103.2-51.2-41.6 24L218.4 672zM343.2 600l-133.6-70.4-41.6 24L301.6 624zM731.2 376l103.2 51.2 41.6-24L772.8 352zM648 424l133.6 71.2 41.6-24L689.6 400z" fill="#59C2E0" p-id="10186"></path>
                        <path d="M731.2 376l7.2-115.2 41.6-24-7.2 115.2zM648 424l5.6-150.4 41.6-24-5.6 150.4z" fill="#59C2E0" p-id="10187"></path>
                        <path d="M912.8 752.8h-48l-761.6-440-24-41.6h48l761.6 440z" fill="#59C2E0" p-id="10188"></path>
                        <path d="M732 648l7.2 115.2 41.6 24-7.2-115.2zM648.8 600l5.6 151.2 41.6 24-5.6-151.2z" fill="#59C2E0" p-id="10189"></path>
                        <path d="M732 648l103.2-51.2 41.6 24L773.6 672zM648.8 600l133.6-70.4 41.6 24L690.4 624zM260.8 376l-103.2 51.2-41.6-24L219.2 352zM344 424l-133.6 71.2-41.6-24L302.4 400zM260.8 376l-7.2-115.2-41.6-24 7.2 115.2z" fill="#59C2E0" p-id="10190"></path>
                        <path d="M344 424l-5.6-150.4-41.6-24 5.6 150.4z" fill="#59C2E0" p-id="10191"></path>
                        <path d="M496 663.2l-131.2-75.2V436.8L496 360.8l131.2 75.2v151.2L496 663.2zM404.8 564.8L496 616.8l91.2-52.8v-104L496 407.2l-91.2 52.8v104.8z" fill="#59C2E0" p-id="10192"></path>
                      </svg>
                      <p class="text-xs sm:text-sm text-emerald-50 font-medium">
                        Santa's Elves are crafting your video...
                      </p>
                    </div>
                  </template>

                  <template v-else>
                    <video
                      v-if="generatedVideoUrl"
                      :src="generatedVideoUrl"
                      class="max-w-full max-h-full"
                      :style="videoStyle"
                      controls
                      playsinline
                      @loadedmetadata="onVideoMetadata"
                    ></video>

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
          <div v-else class="w-full max-w-xs flex justify-center" style="transform: scale(1.25); transform-origin: center;">
            <div class="relative w-full aspect-[9/16]">
              <img
                src="https://cfsource.wan2video.com/wan2video/christmas/template/images/phone.png"
                alt="Phone Preview"
                class="w-full h-full object-contain select-none pointer-events-none relative z-20"
              />
              <div
                class="absolute flex items-center justify-center z-10 overflow-hidden"
                style="left: 6%; top: 0; width: 87%; height: 100%;border-radius: 45px;"
              >
                <!-- <div class="w-full h-full rounded-xl overflow-hidden bg-black/80 flex items-center justify-center"> -->
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

                  <template v-else>
                    <video
                      v-if="generatedVideoUrl"
                      :src="generatedVideoUrl"
                      class="w-full h-full object-cover"
                      controls
                      playsinline
                      @loadedmetadata="onVideoMetadata"
                    ></video>
                    <template v-else>
                      <video
                        v-if="selectedTemplate && currentPreviewVideo"
                        :src="currentPreviewVideo"
                        class="w-full h-full object-cover"
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
                <!-- </div> -->
              </div>
            </div>
          </div>

          <!-- 生成完成后的操作按钮 -->
          <div
            v-if="generatedVideoUrl && !isGenerating"
            class="mt-4 w-full max-w-xl flex flex-col items-center gap-4"
          >
            <div class="flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="button"
                class="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                @click="downloadGeneratedVideo"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
                Download Video
              </button>
              
              <div ref="shareMenuRef" class="relative flex-1">
                <button
                  type="button"
                  class="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold bg-white/10 hover:bg-white/20 border border-white/30 text-white shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
                  @click.stop="toggleShareMenu"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share...
                  <svg 
                    class="w-4 h-4 ml-2 transition-transform duration-200"
                    :class="{ 'rotate-180': showShareMenu }"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <Transition
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                >
                  <div
                    v-if="showShareMenu"
                    class="absolute z-50 mt-2 w-full sm:w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                    :class="isMobile ? 'bottom-full mb-2 left-0' : 'top-full left-0'"
                    @click.stop
                  >
                    <div class="p-4 space-y-2">
                      <button
                        type="button"
                        class="w-full flex items-center px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium transition-colors"
                        @click="handleCopyLink"
                      >
                        <svg class="w-5 h-5 mr-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16h8M8 12h8m-6-8h6a2 2 0 012 2v12a2 2 0 01-2 2h-6m-4-4H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                        </svg>
                        Copy Link
                      </button>

                      <div class="h-px bg-slate-200 my-2"></div>

                      <div class="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          class="flex items-center justify-center px-4 py-3 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-medium transition-colors"
                          @click="handleShare('facebook')"
                        >
                          <span class="font-bold mr-2">f</span>
                          Facebook
                        </button>
                        <button
                          type="button"
                          class="flex items-center justify-center px-4 py-3 rounded-xl bg-[#1DA1F2] hover:bg-[#1A91DA] text-white font-medium transition-colors"
                          @click="handleShare('twitter')"
                        >
                          <span class="font-bold mr-2">X</span>
                          Twitter
                        </button>
                        <button
                          type="button"
                          class="flex items-center justify-center px-4 py-3 rounded-xl bg-[#E60023] hover:bg-[#D1001F] text-white font-medium transition-colors"
                          @click="handleShare('pinterest')"
                        >
                          <span class="font-bold mr-2">P</span>
                          Pinterest
                        </button>
                        <button
                          type="button"
                          class="flex items-center justify-center px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium transition-colors"
                          @click="handleShare('whatsapp')"
                        >
                          <span class="font-bold mr-2">WA</span>
                          WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- 右侧预览列 -->
    </div> <!-- 左右分栏 -->
  </div> <!-- 页面外层 -->
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
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
const isVertical = ref(false);
const ratioInfo = ref<string | null>(null);

const prompt = ref('');
const selectedTemplateKey = ref<string | null>(null);

const uploadedAudio = ref<{ name: string; size: number } | null>(null);
const audioPreview = ref<string | null>(null);
const audioFile = ref<File | null>(null);

const isGenerating = ref(false);
const currentTaskId = ref<string | null>(null);
const generatedVideoUrl = ref<string | null>(null);
const statusMessage = ref<string>('');

const showShareMenu = ref(false);
const shareMenuRef = ref<HTMLElement | null>(null);

const { $toast } = useNuxtApp() as any;

const shareChristmasUrl = "https://cfsource.wan2video.com/wan2video/christmas/christmas.html?video=";

const SHARE_TEXT =
  "Check out my personalized Christmas video made with Wan2Video! 🎄 #Christmas #Greetings #MerryChristmas";

const selectedTemplate = computed<TemplateItem | null>(() => {
  if (!selectedTemplateKey.value) return null;
  return templates.find((t) => t.key === selectedTemplateKey.value) || null;
});

const currentPreviewVideo = computed(() => {
  if (generatedVideoUrl.value) return generatedVideoUrl.value;
  if (!selectedTemplate.value) return '';
  return isVertical.value ? selectedTemplate.value.videoV : selectedTemplate.value.videoH;
});

const videoStyle = ref<Record<string, string>>({});

const onVideoMetadata = (e: Event) => {
  const video = e.target as HTMLVideoElement;
  const vw = video.videoWidth;
  const vh = video.videoHeight;
  if (!vw || !vh) return;

  const containerAspect = isVertical.value ? 9 / 16 : 16 / 9;
  const videoAspect = vw / vh;

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

    const img = new Image();
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      if (!height) return;

      const r = width / height;
      isVertical.value = r < 1;
      ratioInfo.value = `${width} × ${height}（${(r).toFixed(3)}）`;
    };
    img.src = url;
  };

  reader.readAsDataURL(file);
};

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
        setTimeout(poll, 5000);
      }
    } catch (err: any) {
      console.error('checkTaskStatus error', err);
      setTimeout(poll, 5000);
    }
  };

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

const onTestGenerate = () => {
  const testTaskId = '56033c04-359f-4183-b9d7-f0b45fc67964';

  isGenerating.value = true;
  generatedVideoUrl.value = null;
  statusMessage.value = 'Running test task...';

  setTimeout(async () => {
    try {
      const res: any = await checkTask(testTaskId);
      const data = res?.data;
      if (data && data.status === 1 && data.url) {
        generatedVideoUrl.value =  data.url;
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
    await navigator.clipboard.writeText(shareChristmasUrl + generatedVideoUrl.value);
    $toast?.success?.('Link copied to clipboard!');
  } catch {
    $toast?.error?.('Failed to copy link. Please copy it manually.');
  }
};

const toggleShareMenu = () => {
  showShareMenu.value = !showShareMenu.value;
};

const handleCopyLink = async () => {
  await copyShareLink();
  showShareMenu.value = false;
};

const handleShare = (platform: 'facebook' | 'twitter' | 'pinterest' | 'whatsapp') => {
  shareTo(platform);
  showShareMenu.value = false;
};

const isMobile = computed(() => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 640;
});

const handleClickOutside = (event: MouseEvent) => {
  if (shareMenuRef.value && !shareMenuRef.value.contains(event.target as Node)) {
    showShareMenu.value = false;
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
  const url = encodeURIComponent(shareChristmasUrl + generatedVideoUrl.value);
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

onMounted(() => {
  const route = useRoute()
  const taskId = route.query.taskId as string
  const templateIndex = route.query.templateIndex as string
  
  if (taskId) {
    if (templateIndex) {
      const index = parseInt(templateIndex)
      if (index >= 0 && index < templates.length) {
        const template = templates[index]
        selectedTemplateKey.value = template.key
        prompt.value = template.prompt
      }
    }
    
    isGenerating.value = true
    statusMessage.value = '正在生成视频...'
    startPollingStatus(taskId)
  }

  if (typeof window !== 'undefined') {
    document.addEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.removeEventListener('click', handleClickOutside)
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
