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
      @loadeddata="onBackgroundVideoLoaded"
    ></video>

    <!-- 背景视频音频控制按钮 -->
    <button
      v-if="!showForm"
      class="fixed top-24 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 transition-all duration-200 z-40 shadow-lg"
      @click="toggleBackgroundVideoMute"
      title="Toggle audio"
    >
      <!-- 播放声音图标 -->
      <svg
        v-if="!isBackgroundVideoMuted"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-5 h-5 text-white"
        aria-hidden="true"
      >
        <path
          d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        ></path>
        <path d="M16 9a5 5 0 0 1 0 6"></path>
        <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
      </svg>
      <!-- 关闭声音图标 -->
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
        class="w-5 h-5 text-white"
        aria-hidden="true"
      >
        <path
          d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
        ></path>
        <line x1="22" x2="16" y1="9" y2="15"></line>
        <line x1="16" x2="22" y1="9" y2="15"></line>
      </svg>
    </button>

    <!-- 全屏透明玻璃层（关键） -->
    <div
      style="
        position: fixed;
        inset: 0;
        z-index: -2;
        pointer-events: none;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
          /* 顶部：透明 */ rgba(0, 0, 0, 0) 40%,
          /* 前40%的高度：保持透明（保护人脸） */ rgba(0, 0, 0, 0.6) 80%,
          /* 字出现的地方：变黑 */ rgba(0, 0, 0, 0.8) 100% /* 最底部：最黑 */
        );
        box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.35);
        border: none;
      "
    ></div>

    <!-- 初始展示区域：视频预览 -->
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
        padding: 120px 20px 100px;
        text-align: center;
      "
    >
      <!-- H1 标题 -->
      <h1
        style="
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          margin-bottom: 32px;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.55),
            0 6px 14px rgba(0, 0, 0, 0.35);
          max-width: 100%;
          line-height: 1.3;
          color: #fde047;
        "
      >
        Merry Christmas AI video Maker
      </h1>

      <!-- 副标题 -->
      <p
        style="
          font-size: 1rem;
          opacity: 0.95;
          line-height: 1.8;
          margin: 0 auto;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.55);
          max-width: 360px;
        "
      >
        <span style="display: block; margin-bottom: 8px"
          >Create Christmas videos in minutes with AI. Just pick a template and
          click to generate, let wan2video handle the scenes, media, voiceovers,
          and sound effects. Instantly delivers free Christmas video clips with
          music</span
        >
      </p>
    </div>

    <!-- 固定在底部的制作按钮 -->
    <div
      v-if="!showForm"
      style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        padding: 12px 14px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        backdrop-filter: blur(10px);
      "
    >
      <button
        class="w-full px-7 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
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

        <span>Customize</span>

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

    <!-- ===== 新增部分：全屏透明遮罩层 ===== -->
    <!-- z-index 设为 99，比表单的 100 低，比背景高 -->
    <!-- 点击此区域将触发 handleCloseForm -->
    <div
      v-if="showForm"
      style="position: fixed; inset: 0; z-index: 99; cursor: pointer"
      @click="handleCloseForm"
    ></div>
    <!-- =================================== -->

    <!-- 页面内容：表单部分 -->
    <Transition name="slide-down">
      <div
        v-if="showForm"
        ref="formSection"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        class="form-container"
        style="
          position: fixed;
          top: 30vh;
          left: 0;
          right: 0;
          bottom: 80px;
          z-index: 100;
          width: 100%;
          background: transparent;
          overflow-y: auto;
          padding: 16px 0 0 0;
          transition: transform 0.2s ease-out;
        "
      >
        <!-- 使用移动端表单组件 -->
        <div class="w-full">
          <ChristmasVideoFormMobile ref="formRef" @close="handleCloseForm" />
        </div>
      </div>
    </Transition>

    <!-- 悬浮在底部的生成按钮 -->
    <div
      v-if="!showResult && showForm"
      style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 101;
        padding: 16px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        backdrop-filter: blur(10px);
      "
    >
      <div class="flex flex-col gap-2">
        <div class="relative w-full">
          <button
            ref="generateButton"
            class="w-full px-8 py-3 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
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

            <span>{{
              isGenerating ? "Generating..." : "Create Magic Video"
            }}</span>

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

          <!-- 积分消耗角标 -->
          <span
            class="absolute -top-2 -right-2 px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-md border-2 border-white"
          >
            {{ generateBadgeText }}
          </span>
        </div>
      </div>
    </div>

    <!-- Loading 蒙层 -->
    <Transition name="fade">
      <div
        v-if="isGenerating"
        class="fixed inset-0 z-[100] flex items-center justify-center"
        style="background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px)"
        @click.self="() => {}"
      >
        <div
          class="flex flex-col items-center justify-center gap-6 px-6 text-center"
        >
          <!-- 旋转雪花动画 -->

          <div class="christmas-progress-content">
            <svg
              t="1765265099439"
              class="christmas-progress-spinner"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10181"
              width="200"
              height="200"
            >
              <path
                d="M496 30.4L472 72v880l24 41.6 24-41.6V72z"
                fill="#59C2E0"
                p-id="10182"
              ></path>
              <path
                d="M496 240l-96-64v-48l96 64zM496 336L368 256v-48l128 80zM496 240l96-64v-48l-96 64zM496 336l128-80v-48L496 288zM496 784l-96 64v48l96-64zM496 688L368 768v48l128-80zM496 784l96 64v48l-96-64zM496 688l128 80v48L496 736z"
                fill="#59C2E0"
                p-id="10183"
              ></path>
              <path
                d="M79.2 752.8h48l761.6-440 24-41.6h-48l-761.6 440z"
                fill="#59C2E0"
                p-id="10184"
              ></path>
              <path
                d="M260 648l-7.2 115.2-41.6 24 7.2-115.2zM343.2 600l-5.6 151.2-41.6 24 5.6-151.2z"
                fill="#59C2E0"
                p-id="10185"
              ></path>
              <path
                d="M260 648l-103.2-51.2-41.6 24L218.4 672zM343.2 600l-133.6-70.4-41.6 24L301.6 624zM731.2 376l103.2 51.2 41.6-24L772.8 352zM648 424l133.6 71.2 41.6-24L689.6 400z"
                fill="#59C2E0"
                p-id="10186"
              ></path>
              <path
                d="M731.2 376l7.2-115.2 41.6-24-7.2 115.2zM648 424l5.6-150.4 41.6-24-5.6 150.4z"
                fill="#59C2E0"
                p-id="10187"
              ></path>
              <path
                d="M912.8 752.8h-48l-761.6-440-24-41.6h48l761.6 440z"
                fill="#59C2E0"
                p-id="10188"
              ></path>
              <path
                d="M732 648l7.2 115.2 41.6 24-7.2-115.2zM648.8 600l5.6 151.2 41.6 24-5.6-151.2z"
                fill="#59C2E0"
                p-id="10189"
              ></path>
              <path
                d="M732 648l103.2-51.2 41.6 24L773.6 672zM648.8 600l133.6-70.4 41.6 24L690.4 624zM260.8 376l-103.2 51.2-41.6-24L219.2 352zM344 424l-133.6 71.2-41.6-24L302.4 400zM260.8 376l-7.2-115.2-41.6-24 7.2 115.2z"
                fill="#59C2E0"
                p-id="10190"
              ></path>
              <path
                d="M344 424l-5.6-150.4-41.6-24 5.6 150.4z"
                fill="#59C2E0"
                p-id="10191"
              ></path>
              <path
                d="M496 663.2l-131.2-75.2V436.8L496 360.8l131.2 75.2v151.2L496 663.2zM404.8 564.8L496 616.8l91.2-52.8v-104L496 407.2l-91.2 52.8v104.8z"
                fill="#59C2E0"
                p-id="10192"
              ></path>
            </svg>
            <p class="christmas-progress-title">
              Production takes 2-3 minutes. If you close this page, you can view
              your work in your personal center.
              <NuxtLink to="/profile" class="christmas-progress-link"
                >Go to profile</NuxtLink
              >
            </p>
            <div class="christmas-progress-bar-wrapper">
              <div
                class="christmas-progress-bar"
                :style="{ width: `${progressPercent}%` }"
              ></div>
            </div>
            <p class="christmas-progress-hint">
              CREATING YOUR CHRISTMAS MAGIC...{{ Math.round(progressPercent) }}%
            </p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 结果展示弹窗 -->
    <Transition name="fade">
      <div
        v-if="showResult && generatedVideoUrl"
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4"
        style="background: rgba(0, 0, 0, 0.95); backdrop-filter: blur(12px)"
        @click.self="closeResult"
      >
        <div class="w-full max-w-md flex flex-col gap-6 relative">
          <!-- 关闭按钮 - 右上角 -->
          <button
            class="absolute -top-2 -right-2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10 shadow-lg"
            @click="closeResult"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- 视频展示 -->
          <div
            class="w-full rounded-2xl overflow-hidden bg-black/50 border border-white/20 shadow-2xl"
          >
            <video
              ref="resultVideo"
              :src="generatedVideoUrl"
              class="w-full h-auto"
              controls
              playsinline
              autoplay
              @play="onResultVideoPlay"
            ></video>
          </div>

          <!-- 操作按钮 -->
          <div class="flex flex-row gap-3">
            <!-- 分享按钮 -->
            <button
              class="flex-1 px-6 py-4 rounded-xl text-base font-semibold bg-red-500 hover:bg-red-600 border border-white/30 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
              @click.stop="toggleShareMenu"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
            <!-- 下载按钮 -->
            <button
              class="flex-1 px-6 py-4 rounded-xl text-base font-semibold bg-transparent hover:bg-white/10 border border-white/30 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
              @click="downloadVideo"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download
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
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-sm"
          @click="closeShareMenu"
        ></div>

        <!-- 分享内容 -->
        <div
          class="relative w-full bg-black/90 backdrop-blur-xl rounded-t-3xl shadow-2xl overflow-hidden border-t border-white/10"
          @click.stop
        >
          <!-- 拖拽指示器 -->
          <div class="flex justify-center pt-3 pb-2">
            <div class="w-12 h-1.5 bg-white/30 rounded-full"></div>
          </div>

          <!-- 标题 -->
          <div class="px-6 py-4 border-b border-white/10">
            <h3 class="text-lg font-semibold text-white text-center">
              Share
            </h3>
          </div>

          <!-- 分享选项 -->
          <div class="p-6 space-y-4">
            <!-- 复制链接 -->
            <button
              class="w-full flex items-center justify-center px-4 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/10"
              @click="handleCopyLink"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16h8M8 12h8m-6-8h6a2 2 0 012 2v12a2 2 0 01-2 2h-6m-4-4H6a2 2 0 01-2-2V6a2 2 0 012-2h2"
                />
              </svg>
            </button>

            <!-- 分隔线 -->
            <div class="h-px bg-white/10"></div>

            <!-- 社交媒体分享 -->
            <div class="grid grid-cols-4 gap-4">
              <button
                class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white transition-colors"
                @click="handleShare('facebook')"
                title="Facebook"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </button>
              <button
                class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#1DA1F2] hover:bg-[#1A91DA] text-white transition-colors"
                @click="handleShare('twitter')"
                title="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                    fill="#ffffff"
                  />
                </svg>
              </button>
              <button
                class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#E60023] hover:bg-[#D1001F] text-white transition-colors"
                @click="handleShare('pinterest')"
                title="Pinterest"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"
                  />
                </svg>
              </button>
              <button
                class="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white transition-colors"
                @click="handleShare('whatsapp')"
                title="WhatsApp"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
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
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  nextTick,
  watch,
  watchEffect,
} from "vue";
import { useNuxtApp } from "nuxt/app";
import ChristmasVideoFormMobile from "./ChristmasVideoFormMobile.vue";
import { createChristmasVideo, checkTaskStatusVideo, checkTask } from "~/api";
import { useUserStore } from "~/stores/user";
import { useRouter } from "vue-router";
import { getShareVideoId, buildShareUrl } from "~/utils/videoShare";
// 模版数据（与表单组件保持一致）
interface TemplateItem {
  key: string;
  name: string;
  thumb: string;
  prompt: string;
  videoH: string;
  videoV: string;
  AudioName: string;
}
const PromptTemplate1 = `Sunrise, daytime. Side lighting with rim light. Medium close-up shot. High saturation, balanced composition. Eye-level close shot, telephoto lens. High contrast. Over-the-shoulder camera angle. Soft lighting, warm color tones, clear sunny daylight.
The person in front of the camera is wearing a red Christmas outfit and a red Santa hat, standing beside a wooden cabin. The person occupies about 70% of the frame in width and approximately 70% in height, facing the camera directly. She is singing the climax of a classic English Christmas song. Her arms move gently with the rhythm, performing simple gestures. Her expression is immersive and emotional, her tone sincere, and her voice clear, in American English.
The entire video captures her transition from a focused singing state to a relaxed, warm smile, creating a strong artistic and cinematic feeling. After finishing the song, she forms a heart shape with both hands, as if sending it to friends watching the screen.
Behind her is a realistic Christmas scene: snow is falling from the sky, surrounded by Christmas trees decorated with ornaments. The trees are covered in snow, and a thick layer of white snow blankets the roof and windowsills of the wooden cabin. A wreath made of pinecones and red berries hangs on the front door.
The atmosphere is lively, exciting, and full of energy. Snowflakes fall slowly, accompanied by the sound of snowfall, enhancing the rich and immersive Christmas ambiance.`;
const PromptTemplate2 = `Nighttime. Side lighting with rim light. Medium close-up shot. High saturation, balanced composition. Eye-level close shot, telephoto lens. High contrast. Over-the-shoulder camera angle. Soft lighting, warm color tones, indoor nighttime lighting.
The person in front of the camera is indoors, wearing a red Santa hat and a red Christmas sweater, standing at the forefront of the scene. The person occupies approximately 70% of the frame in width and about 70% in height, facing the camera directly. She is singing the climax of a classic English Christmas song. Her arms move gently with the rhythm, performing simple gestures. Her expression is immersive, and her voice is clear, in American English.
The entire video captures her transition from a focused singing state to a relaxed, warm smile, creating a strong artistic and cinematic feeling.
Outside the window, it is a snowy Christmas night with heavy snowfall. In the center of the living room stands an oversized, lush real pine Christmas tree, decorated with various vintage glass ornaments and glowing warm yellow-white string lights, creating a cozy nighttime ambiance.
On the mantel above the fireplace, six thick red or green Christmas stockings are neatly arranged. The overall indoor atmosphere is warm and inviting, filled with soft yellow tones.
Snowflakes fall slowly, accompanied by the sound of snowfall, enhancing the rich and immersive Christmas atmosphere.`;

const PromptTemplate3 = `Daytime. Side lighting with rim light. Medium close-up shot. High saturation, balanced composition. Eye-level close shot, telephoto lens. High contrast. Over-the-shoulder camera angle. Soft lighting, warm color tones, clear sunny daylight.
The person in front of the camera is inside a church, wearing a red Santa hat. The person occupies approximately 70% of the frame in width and about 70% in height. She is wearing a green “ugly Christmas” sweater and faces the camera directly while singing the climax of a classic English Christmas song. Her arms move gently with the rhythm, performing simple gestures. Her expression is immersive, and her voice is clear, in American English.
The entire video captures her transition from a focused singing state to a relaxed, warm smile, creating a strong artistic and cinematic feeling.
The background shows the interior of a Christmas-decorated church at night. The church is adorned with abundant green holly branches and red potted poinsettias. The primary lighting comes from chandeliers and lit candles. Blurred figures can be seen moving inside the church in the background. The overall indoor atmosphere is warm and inviting, filled with soft yellow tones.`;

const PromptTemplate4 = `Nighttime. Medium close-up shot. High-saturation visuals, balanced composition. Eye-level close shot, telephoto lens. High contrast. Over-the-shoulder camera angle. Soft lighting with warm color tones.
The person in front of the camera is wearing a red Santa hat and a green Christmas sweater. The person occupies approximately 70% of the frame in width and about 70% in height, facing the camera directly while singing the climax of a classic English Christmas song. His arms move gently with the rhythm, performing simple gestures. His expression is immersive, and his voice is clear, in American English.
The entire video captures his transition from a focused singing state to a relaxed smile, creating a strong artistic and cinematic feeling.
The background shows a Christmas night scene with heavy snow falling from the sky. The shops around the square are decorated with colorful string lights, creating a dreamy and magical atmosphere. In the center of the square stands a gigantic outdoor Christmas tree, extremely tall and lush, covered in LED light strings mainly in yellow and red, sparkling brilliantly and looking especially magical.
The background is softly blurred, with the Christmas tree faintly visible. A group of people wearing Christmas outfits can be seen in the square, swaying and dancing along to the music.
The camera moves in a smooth, circular motion, following the performer’s movements, delivering a cinematic, ultra-realistic, and highly immersive visual experience.`;

const templates: TemplateItem[] = [
  {
    key: "snow-house",
    name: "snow house",
    thumb:
      "https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-christmas-cabin-scene.png",
    videoH:
      "https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-h.mp4",
    videoV:
      "https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-s.mp4",
    prompt: PromptTemplate1,
    AudioName: "Fairytale At Christmas",
  },
  {
    key: "christmas-tree",
    name: "christmas tree",
    thumb:
      "https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-living-room-pine-tree-scene.png",
    videoH:
      "https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-h.mp4",
    videoV:
      "https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-s.mp4",
    prompt: PromptTemplate2,
    AudioName: "All I Want For Christmas",
  },
  {
    key: "church",
    name: "church",
    thumb:
      "https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-church-holiday-interior.png",
    videoH:
      "https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-h.mp4",
    videoV:
      "https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-s.mp4",
    prompt: PromptTemplate3,
    AudioName: "Feliz Navidad",
  },
  {
    key: "pine-forest",
    name: "pine forest",
    thumb:
      "https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-pine-forest-lights.png",
    videoH:
      "https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-h.mp4",
    videoV:
      "https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-s.mp4",
    prompt: PromptTemplate4,
    AudioName: "Jingle Bell Rock",
  },
];
// const templates: TemplateItem[] = [
//   {
//     key: 'snow-house',
//     name: 'snow house',
//     thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-christmas-cabin-scene.png',
//     videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-h.mp4',
//     videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-christmas-cabin-scene-s.mp4',
//     prompt: "  Snow is falling under the Christmas sky, with pine trees adorned with colorful lights all around. The Christmas tree is covered in snow, and the roof and windowsills of the little cabin are blanketed in a thick layer of white snow. A wreath made of pine cones and red berries hangs at the door. The person is wearing a Christmas sweater and a red Santa hat, standing next to the cabin. The person occupies about 70% of the width and around 70% of the height of the page, facing the camera directly and saying: 'Happy Holidays, Catching up soon to celebrate. Hope you're chilling hard and getting all the best snacks/gifts. Stay awesome!' The scene instantly conveys a lively, excited, and energetic holiday night atmosphere."
//   },
//   {
//     key: 'christmas-tree',
//     name: 'christmas tree',
//     thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-living-room-pine-tree-scene.png',
//     videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-h.mp4',
//     videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-living-room-pine-tree-scene-s.mp4',
//     prompt: "  On Christmas night, a huge, lush real pine tree stands in the center of the living room! It's adorned with various vintage glass ball ornaments, glowing with warm yellow and white string lights. Outside the window, snowflakes drift down, capturing the essence of a winter night. On the mantel, six thick red or green Christmas stockings are neatly arranged. The overall atmosphere in the room is cozy, with soft yellow tones. The person is inside the room, wearing a Christmas hat, standing at the front. They occupy about 70% of the width and around 70% of the height of the page, dressed in an ugly Christmas sweater, facing the camera and saying to their friend: 'Happy Holidays, Catching up soon to celebrate. Hope you're chilling hard and getting all the best snacks/gifts. Stay awesome!'"
//   },
//   {
//     key: 'church',
//     name: 'church',
//     thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-church-holiday-interior.png',
//     videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-h.mp4',
//     videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-church-holiday-interior-s.mp4',
//     prompt: "  The interior of the Christmas church is decorated with a large number of green holly branches and red potted poinsettias in the night background. The main lighting comes from chandeliers and lit candles. The character is in the center of the video, wearing a red Christmas hat, and the width of the character accounts for 70% of the page. The height accounts for about 70% of the page, wearing an ugly Christmas sweater, making people instantly feel the lively, excited, and energetic atmosphere of the holiday night. Say to your friend with a straight face, 'Happy Holidays, Catching up soon to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome!'."
//   },
//   {
//     key: 'pine-forest',
//     name: 'pine forest',
//     thumb: 'https://cfsource.wan2video.com/wan2video/christmas/template/images/wan2video-christmas-template-snowy-pine-forest-lights.png',
//     videoH: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-h.mp4',
//     videoV: 'https://cfsource.wan2video.com/wan2video/christmas/template/videos/wan2video-christmas-template-snowy-pine-forest-lights-s.mp4',
//     prompt: "  A pine forest in the outskirts, with thick snow on the ground, and yellow lights shining from the windows of the farm's wooden houses, warm and romantic. Most importantly, there are countless warm light strings wrapped around the pine trees in the forest, only white or amber in color. The contours of the pine trees are outlined like Christmas trees. There are elk running through the forest, and as dusk falls and the lights begin to dominate the view, the entire scene becomes poetic and romantic. The sky is snowing, and the character is wearing a Christmas sweater and a red Christmas hat. The character's width accounts for 70% of the page. The proportion of height on the page is about 70%, making people instantly feel the lively, excited, and energetic atmosphere of the festival night. Say to your friend with a straight face, 'Happy Holidays, Catching up soon to celebrate. Hope you're drilling hard and getting all the best snacks/gifts. Stay awesome!'."
//   }
// ];

// 默认使用模版1的videoV
const currentBackgroundVideo = ref(templates[0].videoV);
const backgroundVideo = ref<HTMLVideoElement | null>(null);
const resultVideo = ref<HTMLVideoElement | null>(null);
const formRef = ref<InstanceType<typeof ChristmasVideoFormMobile> | null>(null);
const formSection = ref<HTMLElement | null>(null);
const previewSection = ref<HTMLElement | null>(null);
const showForm = ref(false);
const isBackgroundVideoMuted = ref(true); // 背景视频默认静音
const { $toast } = useNuxtApp() as any;
const router = useRouter();
// 下滑关闭手势相关
const touchStartY = ref(0);
const touchStartTime = ref(0);
const isDragging = ref(false);
const dragOffset = ref(0);
const SWIPE_THRESHOLD = 100; // 下滑超过100px触发关闭
const SWIPE_VELOCITY_THRESHOLD = 0.3; // 滑动速度阈值

// 从表单组件获取数据
const getFormData = () => {
  if (!formRef.value) return null;

  // 直接访问暴露的属性（它们已经是响应式引用的值）
  const imageFile = formRef.value.uploadedImageFile || null;
  const prompt = formRef.value.prompt || "";
  const audioFile = formRef.value.audioFile || null;
  const selectedAudioFromLibrary =
    formRef.value.selectedAudioFromLibrary || null;

  return { imageFile, prompt, audioFile, selectedAudioFromLibrary };
};

const shareVideoId = ref<string>(""); // 存储分享视频短ID

// 轮询检查任务状态
const startPollingStatus = (taskId: string) => {
  currentTaskId.value = taskId;

  const poll = async () => {
    try {
      const res: any = await checkTaskStatusVideo(taskId);
      const data = res?.data;
      if (!data) {
        setTimeout(poll, 5000);
        return;
      }

      const { status, status_msg, url } = data;

      if (status === 1 && url) {
        // 生成成功
        isGenerating.value = false;
        progressPercent.value = 100;
        stopProgressAnimation();
        generatedVideoUrl.value = url;
        showResult.value = true;
        statusMessage.value = "Video created successfully!";

        // 提取分享视频短ID
        try {
          console.log("Extracting share video ID from URL:", url);
          shareVideoId.value = getShareVideoId(url);
          console.log("Extracted share video ID:", shareVideoId.value);
        } catch (error) {
          console.error("Failed to get share video ID:", error);
          console.error("Video URL that failed:", url);
          shareVideoId.value = "";
        }

        // 视频生成成功后，停止音频库播放并确保视频有声音
        nextTick(() => {
          // 停止音频库音频播放
          if (formRef.value?.stopAudio) {
            formRef.value.stopAudio();
          }

          // 确保结果视频有声音（取消静音）
          if (resultVideo.value) {
            resultVideo.value.muted = false;
          }

          // 静音背景视频
          isBackgroundVideoMuted.value = true;
          if (backgroundVideo.value) {
            backgroundVideo.value.muted = true;
          }
        });

        await userStore.fetchUserInfo(true);
        $toast?.success?.("Video generated successfully!");
      } else if (status <= -1) {
        // 生成失败
        isGenerating.value = false;
        stopProgressAnimation();
        statusMessage.value = status_msg || "Generation failed";
        $toast?.error?.(statusMessage.value);
      } else {
        // 继续轮询
        statusMessage.value = status_msg || "Generating video...";
        setTimeout(poll, 5000);
      }
    } catch (err: any) {
      console.error("checkTaskStatus error", err);
      // 简单重试机制
      setTimeout(poll, 5000);
    }
  };

  // 首次调用
  setTimeout(poll, 5000);
};

// 开始进度条动画
const startProgressAnimation = () => {
  progressPercent.value = 0;
  const duration = 5 * 60 * 1000; // 5分钟 = 300秒 = 300000毫秒
  const targetProgress = 95; // 目标进度95%
  const interval = 50; // 每50ms更新一次，让进度条更流畅
  const totalSteps = duration / interval; // 总步数
  const increment = targetProgress / totalSteps; // 每步增加的进度

  progressInterval.value = setInterval(() => {
    progressPercent.value += increment;
    if (progressPercent.value >= targetProgress) {
      progressPercent.value = targetProgress;
      if (progressInterval.value) {
        clearInterval(progressInterval.value);
        progressInterval.value = null;
      }
    }
  }, interval);
};

// 停止进度条动画
const stopProgressAnimation = () => {
  if (progressInterval.value) {
    clearInterval(progressInterval.value);
    progressInterval.value = null;
  }
  // 延迟重置进度，让用户看到100%
  setTimeout(() => {
    progressPercent.value = 0;
  }, 2000);
};

// 触发生成
const handleGenerate = async () => {
  if (isGenerating.value) return;

  const formData = getFormData();
  if (!formData) {
    $toast?.error?.("Unable to get form data");
    return;
  }

  const { imageFile, prompt, audioFile, selectedAudioFromLibrary } = formData;

  if (!imageFile) {
    $toast?.error?.("Please upload a photo first");
    return;
  }

  if (!prompt.trim()) {
    $toast?.error?.("Prompt cannot be empty");
    return;
  }

  try {
    isGenerating.value = true;
    showResult.value = false;
    generatedVideoUrl.value = null;
    statusMessage.value = "Creating generation task...";

    const payload: any = {
      model: "wan2.5-i2v-preview",
      prompt: prompt,
      duration: 10,
      prompt_extend: true,
      image: imageFile,
      resolution: "720P",
      topic_tag: 1,
    };

    // 优先使用上传的音频文件，否则如果选择了音频库的音频，将音频 URL 传给 audio_url
    // 如果用户都没有选择，则使用模板对应的默认音频
    if (audioFile) {
      payload.audio = audioFile;
    } else if (selectedAudioFromLibrary?.url) {
      payload.audio_url = selectedAudioFromLibrary.url;
    } else {
      // 如果用户没有选择音频，使用模板对应的默认音频
      const selectedTemplateKey = formRef.value?.selectedTemplateKey;
      if (selectedTemplateKey) {
        const selectedTemplate = templates.find(
          (t) => t.key === selectedTemplateKey
        );
        if (selectedTemplate?.AudioName) {
          // 从表单组件获取音频分类（如果暴露了的话），或者在这里定义音频URL映射
          // 由于音频分类数据在表单组件中，我们需要通过其他方式获取
          // 这里我们直接使用音频名称查找URL（需要从表单组件暴露或在这里定义）
          const audioUrlMap: Record<string, string> = {
            "Fairytale At Christmas":
              "https://cfsource.wan2video.com/wan2video/christmas/template/music/fairytale-at-christmas.mp3",
            "All I Want For Christmas":
              "https://cfsource.wan2video.com/wan2video/christmas/template/music/all-i-want-for-christmas-is-you.mp3",
            "Feliz Navidad":
              "https://cfsource.wan2video.com/wan2video/christmas/template/music/feliz-navidad.mp3",
            "Jingle Bell Rock":
              "https://cfsource.wan2video.com/wan2video/christmas/template/music/jingle-bell-rock.mp3",
          };
          const defaultAudioUrl = audioUrlMap[selectedTemplate.AudioName];
          if (defaultAudioUrl) {
            payload.audio_url = defaultAudioUrl;
          }
        }
      }
    }

    const res: any = await createChristmasVideo(payload);

    if (res?.success && res.data?.task_id) {
      $toast?.success?.("Task created successfully, generating video...");
      statusMessage.value = "Generating video...";
      startProgressAnimation();
      startPollingStatus(res.data.task_id);
    } else {
      isGenerating.value = false;
      stopProgressAnimation();
      const msg = res?.msg || "Failed to create task";
      statusMessage.value = msg;
      $toast?.error?.(msg);
      if (msg === "Credits is insufficient, Please recharge") {
        router.push("/pricing");
        return;
      }
    }
  } catch (err: any) {
    console.error("createChristmasVideo error", err);
    isGenerating.value = false;
    stopProgressAnimation();
    const msg = err?.msg || "An error occurred while generating video";
    alert(msg);
    statusMessage.value = msg;
    $toast?.error?.(msg);
  }
};

// 生成状态
const isGenerating = ref(false);
const showResult = ref(false);
const generatedVideoUrl = ref<string | null>(null);
const statusMessage = ref("Creating video...");
const currentTaskId = ref<string | null>(null);
const showShareMenu = ref(false);
const progressPercent = ref(0);
const progressInterval = ref<NodeJS.Timeout | null>(null);
const userStore = useUserStore();
const freeTimes = computed(() => userStore.userInfo?.free_times || 0);
const userInfo = computed(() => userStore.userInfo);
// 检查是否已登录
const isLoggedIn = (): boolean => {
  if (!userInfo.value) {
    return false;
  }
  return true;
};
const generateBadgeText = computed(() => {
  if (!isLoggedIn()) {
    return "Free";
  }
  return freeTimes.value > 0 ? freeTimes.value + " Free" : "400 Credits";
});

// 开始制作：滚动到表单区域并选中模版1
const handleStartCreate = () => {
  showForm.value = true;

  nextTick(() => {
    // 选中模版1
    if (formRef.value && formRef.value.handleSelectTemplate) {
      formRef.value.handleSelectTemplate(templates[0]);
    }

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

// 关闭表单
const handleCloseForm = () => {
  // 重置拖拽状态
  isDragging.value = false;
  dragOffset.value = 0;

  // 关闭表单，触发动画
  showForm.value = false;

  // 等待动画完成后重置transform样式
  setTimeout(() => {
    if (formSection.value) {
      formSection.value.style.transform = "";
    }
  }, 300); // 300ms 对应动画时长

  // 滚动回预览区域
  if (previewSection.value) {
    previewSection.value.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// 触摸开始
const handleTouchStart = (e: TouchEvent) => {
  if (!showForm.value) return;

  const formElement = formSection.value;
  if (!formElement) return;

  // 如果滚动位置不在顶部，不处理下滑关闭
  if (formElement.scrollTop > 10) {
    isDragging.value = false;
    return;
  }

  touchStartY.value = e.touches[0].clientY;
  touchStartTime.value = Date.now();
  isDragging.value = true;
  dragOffset.value = 0;
};

// 触摸移动
const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value || !showForm.value) return;

  const formElement = formSection.value;
  if (!formElement) return;

  // 如果滚动位置不在顶部，取消拖拽
  if (formElement.scrollTop > 10) {
    isDragging.value = false;
    dragOffset.value = 0;
    formElement.style.transform = "";
    return;
  }

  const currentY = e.touches[0].clientY;
  const deltaY = currentY - touchStartY.value;

  // 只处理向下滑动
  if (deltaY > 0) {
    dragOffset.value = deltaY;
    // 实时更新位置
    formElement.style.transform = `translateY(${deltaY}px)`;
    // 防止页面滚动
    e.preventDefault();
  }
};

// 触摸结束
const handleTouchEnd = () => {
  if (!isDragging.value || !showForm.value) return;

  const formElement = formSection.value;
  if (!formElement) return;

  const deltaY = dragOffset.value;
  const deltaTime = Date.now() - touchStartTime.value;
  const velocity = deltaTime > 0 ? deltaY / deltaTime : 0;

  // 判断是否触发关闭：下滑距离超过阈值 或 滑动速度超过阈值
  if (
    deltaY > SWIPE_THRESHOLD ||
    (deltaY > 50 && velocity > SWIPE_VELOCITY_THRESHOLD)
  ) {
    handleCloseForm();
  } else {
    // 重置样式
    formElement.style.transform = "";
    isDragging.value = false;
    dragOffset.value = 0;
  }
};

// 更新背景视频
const updateBackgroundVideo = (templateKey: string) => {
  const selectedTemplate = templates.find((t) => t.key === templateKey);
  if (selectedTemplate) {
    currentBackgroundVideo.value = selectedTemplate.videoV;
    // 更新背景视频
    if (backgroundVideo.value) {
      backgroundVideo.value.src = selectedTemplate.videoV;
      backgroundVideo.value.muted = true;
      isBackgroundVideoMuted.value = true;
      backgroundVideo.value.load();
      // 确保视频自动播放
      backgroundVideo.value.play().catch((err) => {
        console.log("Background video auto-play prevented:", err);
      });
    }
  }
};

// 背景视频加载完成后，确保静音并自动播放
const onBackgroundVideoLoaded = () => {
  if (backgroundVideo.value) {
    backgroundVideo.value.muted = true;
    isBackgroundVideoMuted.value = true;
    // 确保视频自动播放
    backgroundVideo.value.play().catch((err) => {
      console.log("Background video auto-play prevented:", err);
    });
  }
};

// 切换背景视频静音状态
const toggleBackgroundVideoMute = () => {
  // 如果取消静音，需要停止音频播放
  if (isBackgroundVideoMuted.value) {
    // 停止音频库音频播放
    if (formRef.value?.stopAudio) {
      formRef.value.stopAudio();
    }
  }

  isBackgroundVideoMuted.value = !isBackgroundVideoMuted.value;
  if (backgroundVideo.value) {
    backgroundVideo.value.muted = isBackgroundVideoMuted.value;
  }
};

// 结果视频播放时，停止音频并静音背景视频
const onResultVideoPlay = () => {
  // 停止音频库音频播放
  if (formRef.value?.stopAudio) {
    formRef.value.stopAudio();
  }

  // 静音背景视频
  isBackgroundVideoMuted.value = true;
  if (backgroundVideo.value) {
    backgroundVideo.value.muted = true;
  }
};

// 监听音频播放状态，当音频播放时静音所有视频
watch(
  () => formRef.value?.isAudioPlaying,
  (isPlaying) => {
    if (isPlaying) {
      // 音频播放时，静音背景视频和结果视频
      isBackgroundVideoMuted.value = true;
      if (backgroundVideo.value) {
        backgroundVideo.value.muted = true;
      }
      if (resultVideo.value) {
        resultVideo.value.muted = true;
      }
    }
  }
);

// 监听模版选择变化，更新背景视频
// 使用 watchEffect 监听表单组件的 selectedTemplateKey 变化
watchEffect(() => {
  const templateKey = formRef.value?.selectedTemplateKey;
  if (templateKey) {
    updateBackgroundVideo(templateKey);
  }
});

// 关闭结果展示
const closeResult = () => {
  showResult.value = false;
  closeShareMenu();
};

// 下载视频
const downloadVideo = async () => {
  if (!generatedVideoUrl.value) return;
  try {
    const res = await fetch(generatedVideoUrl.value);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `christmas-video-${Date.now()}.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    $toast?.success?.("Download started");
  } catch (e) {
    console.error(e);
    $toast?.error?.("Failed to download video");
  }
};

// 切换分享菜单
const toggleShareMenu = () => {
  showShareMenu.value = !showShareMenu.value;
};

// 关闭分享菜单
const closeShareMenu = () => {
  showShareMenu.value = false;
};

// 复制链接
const handleCopyLink = async () => {
  if (!generatedVideoUrl.value) return;
  try {
    // 使用短链接
    const shareUrl = shareVideoId.value
      ? `https://christmas.wan2video.com/christmas/share/${shareVideoId.value}`
      : buildShareUrl(generatedVideoUrl.value);

    await navigator.clipboard.writeText(shareUrl);
    $toast?.success?.("Link copied to clipboard!");
    closeShareMenu();
  } catch {
    $toast?.error?.("Failed to copy link. Please copy it manually.");
  }
};

// 分享到社交媒体
const SHARE_TEXT =
  "Check out my personalized Christmas video made with Wan2Video! 🎄 #Christmas #Greetings #MerryChristmas";

const handleShare = (
  platform: "facebook" | "twitter" | "pinterest" | "whatsapp"
) => {
  if (!generatedVideoUrl.value) return;

  // 优先使用已提取的短ID，如果没有则尝试从URL重新提取
  let videoId = shareVideoId.value;
  if (!videoId) {
    try {
      videoId = getShareVideoId(generatedVideoUrl.value);
      shareVideoId.value = videoId; // 保存提取的ID
    } catch (error) {
      console.error(
        "Failed to extract video ID from URL:",
        generatedVideoUrl.value,
        error
      );
    }
  }

  // 使用短链接
  const shareUrl = videoId
    ? `https://christmas.wan2video.com/christmas/share/${videoId}`
    : buildShareUrl(generatedVideoUrl.value);

  console.log("Sharing URL:", shareUrl);
  const url = encodeURIComponent(shareUrl);
  const text = encodeURIComponent(SHARE_TEXT);

  let platformShareUrl = "";
  if (platform === "facebook") {
    platformShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
  } else if (platform === "twitter") {
    platformShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  } else if (platform === "pinterest") {
    platformShareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`;
  } else if (platform === "whatsapp") {
    platformShareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
  }

  if (platformShareUrl) {
    window.open(platformShareUrl, "_blank", "noopener,noreferrer");
  }
  closeShareMenu();
};
// 测试生成：跳过 previewGenvideo，5 秒后直接调用 checkTask 固定 ID
const onTestGenerate = () => {
  const testTaskId = "56033c04-359f-4183-b9d7-f0b45fc67964";

  isGenerating.value = true;
  showResult.value = false;
  generatedVideoUrl.value = null;
  statusMessage.value = "Running test task...";
  startProgressAnimation();
  // $toast?.info?.('Start test generation task...')

  setTimeout(async () => {
    try {
      const res: any = await checkTask(testTaskId);
      const data = res?.data;
      if (data && data.status === 1 && data.url) {
        progressPercent.value = 100;
        stopProgressAnimation();
        isGenerating.value = false;
        generatedVideoUrl.value = data.url;
        showResult.value = true;
        statusMessage.value = "Video generated successfully!";
        $toast?.success?.("Test video fetched successfully!");
      } else {
        isGenerating.value = false;
        stopProgressAnimation();
        const msg =
          data?.status_msg || res?.msg || "Test task has not completed yet";
        statusMessage.value = msg;
        $toast?.error?.(msg);
      }
    } catch (err: any) {
      console.error("checkTask test error", err);
      isGenerating.value = false;
      stopProgressAnimation();
      const msg = err?.msg || "Failed to run test task";
      statusMessage.value = msg;
      $toast?.error?.(msg);
    }
  }, 5000);
};
onMounted(() => {
  // watch 会自动监听模版变化，无需额外操作
  // 确保背景视频静音并自动播放
  nextTick(() => {
    if (backgroundVideo.value) {
      backgroundVideo.value.muted = true;
      isBackgroundVideoMuted.value = true;
      backgroundVideo.value.play().catch((err) => {
        console.log("Background video auto-play prevented:", err);
      });
    }
  });
});
</script>

<style scoped>
/* 隐藏表单容器的滚动条 */
.form-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.form-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
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

/* 上滑关闭动画 */
.slide-down-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.slide-down-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

/* 安全区域底部间距 */
.pb-safe-area {
  padding-bottom: env(safe-area-inset-bottom, 0);
}

:global(.Vue-Toastification__toast-container) {
  z-index: 9999 !important;
}
:global(.Vue-Toastification__toast-container--top-right),
:global(.Vue-Toastification__toast-container--top-left),
:global(.Vue-Toastification__toast-container--top-center) {
  top: 88px !important; /* 下移到导航下方，导航高度约80px */
}

/* 圣诞节进度条链接样式 */
.christmas-progress-link {
  color: #fddd20;
  text-decoration: underline;
  text-decoration-color: #fddd20;
  transition: color 0.2s, text-decoration-color 0.2s;
  margin-left: 0.25rem;
}

.christmas-progress-link:hover {
  color: #e6c71d;
  text-decoration-color: #e6c71d;
}

/* 圣诞节进度条样式 */
.christmas-progress-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
  padding: 1rem;
}

.christmas-progress-spinner {
  width: 2.5rem;
  height: 2.5rem;
  animation: spin 2.5s linear infinite;
}

.christmas-progress-title {
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgb(209, 250, 229);
  max-width: 24rem;
}

.christmas-progress-bar-wrapper {
  width: 100%;
  max-width: 20rem;
  height: 0.5rem;
  background-color: rgba(6, 78, 59, 0.3);
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
}

.christmas-progress-bar {
  height: 100%;
  background: linear-gradient(to right, rgb(52, 211, 153), rgb(16, 185, 129));
  border-radius: 9999px;
  transition: width 0.5s ease-out;
}

.christmas-progress-hint {
  font-size: 0.75rem;
  color: rgba(209, 250, 229, 0.8);
  margin-top: 0.25rem;
  letter-spacing: 0.05em;
}
</style>
