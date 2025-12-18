<template>
  <!-- 修改 header 为 fixed 定位，包含 Banner 和 Nav -->
  <header class="fixed top-0 left-0 w-full z-50 flex flex-col">
    
    <!-- 新增：Banner 区域 -->
    <div class="w-full relative z-[51]">
      <!-- PC端 Banner: 显示 GIF 图片 -->
      <a 
        href="/christmas" 
        class="hidden lg:block w-full bg-slate-900/90 hover:opacity-95 transition-opacity"
      >
        <!-- 设置固定高度或自适应，根据图片比例调整，这里设置为 h-[60px] object-cover 保持条状 -->
        <img 
          src="https://cfsource.wan2video.com/wan2video/christmas/banner.gif" 
          alt="Christmas Special" 
          class="w-full h-[60px] object-cover mx-auto"
        />
      </a>

      <!-- 移动端 Banner: 加载 HTML -->
      <div class="block lg:hidden w-full h-[50px] relative bg-slate-900 overflow-hidden">
        <!-- 添加透明点击层，确保移动端可以点击跳转 -->
        <a 
          href="/christmas" 
          class="absolute inset-0 z-10 w-full h-full"
        >
        <img 
          src="https://cfsource.wan2video.com/wan2video/christmas/bannershouji.gif" 
          alt="Christmas Special" 
          class="w-full h-[60px] object-cover mx-auto"
        />
      </a>
      </div>
    </div>

    <!-- 原导航栏：移除 fixed top-0 等定位样式，改为相对定位 -->
    <nav
      class="w-full backdrop-blur-md shadow-md bg-transparent relative z-50"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <span class="text-blue-logo text-2xl lg:text-3xl font-bold">Wan2Video</span>
            </NuxtLink>
          </div>

          <!-- PC端导航 - 居中显示 -->
          <div class="hidden lg:flex items-center justify-center flex-grow">
            <div class="flex items-center space-x-6">
              <template v-for="(section, index) in sections" :key="index">
                <NuxtLink
                  :to="section.href || `/#${section.id}`"
                  class="relative text-blue-navtext hover:text-blue-dark transition-all cursor-pointer px-4 py-2.5 rounded-lg hover:shadow-lg whitespace-nowrap flex items-center gap-2" 
                >
                  {{ section.name }}
                </NuxtLink>
              </template>
            </div>
          </div>

          <!-- 用户信息区域 - PC端 -->
          <div class="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <!-- 体验卷角标 -->
            <div
              v-if="isSignedIn && freeTimes > 0"
              class="group flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-gradient-to-r from-blue-500/20 via-indigo-400/15 to-cyan-400/20 px-3 py-1 font-semibold text-blue-50 shadow-[0_0_0_1px_rgba(15,23,42,0.55),0_10px_24px_rgba(15,23,42,0.65)] text-[11px]"
              title="Trial vouchers"
            >
              <div class="relative flex items-center justify-center">
                <div class="absolute inset-0 rounded-full bg-blue-300/25 blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket-percent relative drop-shadow-sm h-4 w-4" aria-hidden="true" style="color:#00e6e8">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
              </div>
              <span class="ml-0.5 rounded-full bg-slate-950/80 px-2 py-0.5 leading-none border border-blue-200/70 shadow-sm">{{ freeTimes }} Free</span>
            </div>
            <!-- 用户头像区域 -->
            <div>
              <UserMenu />
            </div>
          </div>

          <!-- 移动端体验卷 + 菜单按钮 -->
          <div class="flex items-center lg:hidden gap-3">
            <div
              v-if="isSignedIn && freeTimes > 0"
              class="group flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-gradient-to-r from-blue-500/20 via-indigo-400/15 to-cyan-400/20 px-2.5 py-0.5 font-semibold text-blue-50 shadow-[0_0_0_1px_rgba(15,23,42,0.55),0_8px_18px_rgba(15,23,42,0.6)] text-[10px]"
              title="Trial vouchers"
            >
              <div class="relative flex items-center justify-center">
                <div class="absolute inset-0 rounded-full bg-blue-300/25 blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket-percent relative drop-shadow-sm h-4 w-4" aria-hidden="true" style="color:#00e6e8">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
              </div>
              <span class="ml-0.5 rounded-full bg-slate-950/80 px-2 py-0.5 leading-none border border-blue-200/70 shadow-sm">{{ freeTimes }} Free</span>
            </div>

            <button
              @click="isOpen = !isOpen"
              class="lg:hidden text-blue-dark p-2 rounded-md hover:bg-blue-medium/20 transition-colors"
            >
              <svg
                v-if="!isOpen"
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                v-else
                class="w-6 h-6"
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
          </div>
        </div>
      </div>

      <!-- 移动端菜单，使用懒加载 -->
      <Transition name="slide-fade">
        <div
          v-if="isOpen"
          class="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] overflow-y-auto bg-blue-pale/95 backdrop-blur-sm z-[100] border-t border-blue-100"
        >
          <!-- 滚动内容区域 -->
          <div class="px-4 pb-8 pt-4">
            <!-- 导航链接 -->
            <div class="space-y-2 mb-6">
              <template v-for="(section, index) in sections" :key="index">
                <NuxtLink
                  :to="section.href || `/#${section.id}`"
                  @click="isOpen = false"
                  class="relative block text-blue-navtext hover:text-blue-dark text-base transition-all cursor-pointer px-4 py-2.5 rounded-lg hover:bg-blue-medium/10 hover:shadow-lg hover:shadow-blue-medium/20 whitespace-nowrap mt-3 flex items-center gap-3"
                >
                  {{ section.name }}
                </NuxtLink>
              </template>
            </div>

            <!-- 移动端用户菜单 -->
            <UserMenu :isMobile="true" :onCloseMobileNav="() => isOpen = false" />
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, onMounted } from "vue";
import { useNavigation } from "~/utils/navigation";
import { useClerkAuth } from '~/utils/authHelper';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '~/stores/user';
import { 
  HomeIcon, 
  SparklesIcon, 
  PlayIcon, 
  TagIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon
} from '@heroicons/vue/24/outline';

// 状态管理
const isOpen = ref(false);
const { isSignedIn } = useClerkAuth();
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const credits = ref(0);
const freeTimes = ref(0);

// 图标映射
const iconMap = {
  HomeIcon,
  SparklesIcon,
  PlayIcon,
  TagIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon
};

// 获取图标组件
const getIconComponent = (iconName: string) => {
  return iconMap[iconName as keyof typeof iconMap] || null;
};

// 监听用户信息变化
watch(() => userStore.userInfo, (newUserInfo) => {
  if (newUserInfo) {
    credits.value = newUserInfo.free_limit + newUserInfo.remaining_limit || 0;
    freeTimes.value = newUserInfo.free_times || 0;
  } else {
    credits.value = 0;
    freeTimes.value = 0;
  }
}, { immediate: true });

// 获取用户信息
const getUserInfo = async () => {
  try {
    const userData = await userStore.fetchUserInfo();
    if (userData) {
      credits.value = userData.free_limit + userData.remaining_limit || 0;
      freeTimes.value = userData.free_times || 0;
    }
  } catch (error) {
    console.error("获取用户信息失败:", error);
  }
}

// 使用导航工具
const { activeSection, sections, handleNavClick, handleScroll, executeScroll } =
  useNavigation();

onMounted(async () => {
  // 只重置overflow，不改变滚动位置
  document.body.style.overflow = "";

  // 添加滚动事件监听
  window.addEventListener("scroll", handleScroll);

  // 如果用户已登录，获取用户信息
  if (isSignedIn) {
    await getUserInfo();
  }

  // 初始检查 sessionStorage 中是否有目标锚点
  const targetSection = sessionStorage.getItem("targetSection");
  if (targetSection && route.path === '/') {
    // 清除目标锚点
    sessionStorage.removeItem("targetSection");
    // 延迟执行滚动操作，确保DOM已加载完成
    setTimeout(() => {
      executeScroll(targetSection);
    }, 300);
  }
});

// 监听菜单打开状态，控制body滚动
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

// 组件卸载时恢复body滚动并移除事件监听
onUnmounted(() => {
  document.body.style.overflow = "";
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* 导航栏动画 */
.nav-enter-active,
.nav-leave-active {
  transition: all 0.3s ease;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 覆盖hover效果 */
.hover-text-theme:hover {
  color: var(--baby-coral) !important;
}
</style>