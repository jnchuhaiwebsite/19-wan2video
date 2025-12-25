<template>
  <header>
    <nav
      class="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md bg-transparent z-[9999]"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-14 lg:h-20">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <span class="text-blue-logo text-2xl lg:text-3xl font-bold">Wan2Video</span>
            </NuxtLink>
          </div>

          <!-- PC端导航 - 居中显示 -->
          <div class="hidden lg:flex items-center justify-center flex-grow">
            <ul class="flex items-center space-x-1 lg:space-x-2 list-none">
              <template v-for="(section, index) in sections" :key="index">
                
                <!-- 场景1：有下拉菜单 -->
                <li v-if="section.children && section.children.length" class="relative group/main">
                  <div
                    class="relative transition-all cursor-pointer px-4 py-2.5 rounded-lg hover:shadow-lg whitespace-nowrap flex items-center gap-1.5 font-medium"
                    :class="[
                      section.id === 'christmas' ? 'christmas-nav-link' : 'text-white hover:text-white/80'
                    ]"
                  >
                    <span class="relative">
                      {{ section.name }}
                      <!-- 标签逻辑 -->
                      <span v-if="section.badge" class="absolute -top-3 left-full -ml-2 bg-red-500 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 shadow-sm">{{ section.badge }}</span>
                      <span v-if="section.id === 'christmas'" class="hot-badge">HOT</span>
                    </span>
                    <!-- 箭头图标 -->
                    <svg 
                      class="h-4 w-4 text-white/60 transition-transform duration-300 group-hover/main:rotate-180" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <!-- 下拉菜单：使用 top-full 和 pt-2 解决"点不到"问题 -->
                  <ul class="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/main:opacity-100 group-hover/main:translate-y-0 group-hover/main:pointer-events-auto transition-all duration-200 ease-out min-w-[240px] z-[60]">
                    <!-- 背景和内容容器 -->
                    <div class="bg-white border border-slate-100 rounded-2xl shadow-2xl p-1.5 ring-1 ring-black/5">
                      <li v-for="(child, childIndex) in section.children" :key="childIndex">
                        <NuxtLink
                          :to="child.href || `/#${child.id}`" 
                          class="flex items-center justify-between px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                        >
                          <span v-html="child.name" class="font-medium text-[15px]"></span>
                          <span v-if="child.isNew" class="ml-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
                        </NuxtLink>
                      </li>
                    </div>
                  </ul>
                </li>

                <!-- 场景2：普通链接 -->
                <li v-else>
                  <NuxtLink 
                    :to="section.href || `/#${section.id}`"
                    :class="[
                      'relative transition-all px-4 py-2.5 rounded-lg hover:shadow-lg font-medium block whitespace-nowrap flex items-center gap-2',
                      section.id === 'christmas' ? 'christmas-nav-link' : 'text-white hover:text-white/80'
                    ]"
                  >
                    {{ section.name }}
                    <!-- Christmas HOT 标签 -->
                    <span
                      v-if="section.id === 'christmas'"
                      class="hot-badge"
                    >
                      HOT
                    </span>
                    <!-- Wan 2.6 New 标签 -->
                    <span
                      v-if="section.id === 'wan-2.6'"
                      class="new-badge"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
              </template>
            </ul>
          </div>

          <!-- 用户信息区域 - PC端 -->
          <div class="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <!-- 体验卷角标 -->
            <div
              v-if="isSignedIn && freeTimes > 0"
              class="group flex items-center gap-1.5 rounded-full border border-white/70 bg-white/10 px-3 py-1 font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_10px_22px_rgba(0,0,0,0.45)] text-[11px]"
              title="Trial vouchers"
            >
              <div class="relative flex items-center justify-center">
                <div class="absolute inset-0 rounded-full bg-white/20 blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket-percent relative drop-shadow-sm h-4 w-4" aria-hidden="true" style="color:#00e6e8">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
              </div>
              <span class="ml-0.5 rounded-full bg-slate-900/80 px-2 py-0.5 leading-none border border-white/60 shadow-sm">{{ freeTimes }} Free</span>
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
              class="group flex items-center gap-1.5 rounded-full border border-white/60 bg-white/10 px-2.5 py-0.5 font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_8px_18px_rgba(0,0,0,0.4)] text-[10px]"
              title="Trial vouchers"
            >
              <div class="relative flex items-center justify-center">
                <div class="absolute inset-0 rounded-full bg-white/20 blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket-percent relative drop-shadow-sm h-4 w-4" aria-hidden="true" style="color:#00e6e8">
                  <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M9 9h.01"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="M15 15h.01"></path>
                </svg>
              </div>
              <span class="ml-0.5 rounded-full bg-slate-900/80 px-2 py-0.5 leading-none border border-white/60 shadow-sm">{{ freeTimes }} Free</span>
            </div>

            <button
              @click="isOpen = !isOpen"
              class="lg:hidden text-white p-2 rounded-md hover:bg-white/20 transition-colors"
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
          class="lg:hidden fixed top-0 left-0 w-full h-screen overflow-y-auto bg-white/95 backdrop-blur-sm z-[100]"
        >
          <!-- 关闭按钮 -->
          <button
            @click="isOpen = false"
            class="fixed top-4 right-4 text-gray-800 p-2 rounded-full hover:bg-gray-200/50 transition-colors z-[101]"
          >
            <svg
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

          <!-- 滚动内容区域 -->
          <div class="pt-16 px-4 pb-8">
            <!-- 导航链接 -->
            <ul class="space-y-2 mb-6">
              <template v-for="(section, index) in sections" :key="index">
                <!-- 有子菜单的情况 -->
                <li v-if="section.children && section.children.length">
                  <div
                    @click="toggleMobileSubmenu(section.id || index)"
                    :class="[
                      'relative flex items-center justify-between text-base transition-all cursor-pointer px-4 py-2.5 rounded-lg hover:bg-gray-100 hover:shadow-md whitespace-nowrap mt-3 font-medium',
                      section.id === 'christmas' ? 'christmas-nav-link' : 'text-gray-900 hover:text-gray-700'
                    ]"
                  >
                    <span class="flex items-center gap-3">
                      {{ section.name }}
                      <!-- Christmas HOT 标签 -->
                      <span
                        v-if="section.id === 'christmas'"
                        class="hot-badge"
                      >
                        HOT
                      </span>
                      <!-- Wan 2.6 New 标签 -->
                      <span
                        v-if="section.id === 'wan-2.6'"
                        class="new-badge"
                      >
                        New
                      </span>
                    </span>
                    <!-- 展开/收起箭头 -->
                    <svg 
                      :class="[
                        'h-5 w-5 transition-transform duration-200',
                        openMobileSubmenus.has(section.id || index) ? 'rotate-180' : ''
                      ]"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <!-- 子菜单 -->
                  <Transition name="slide-fade">
                    <ul v-if="openMobileSubmenus.has(section.id || index)" class="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                      <li v-for="(child, childIndex) in section.children" :key="childIndex">
                        <NuxtLink
                          :to="child.href || `/#${child.id}`"
                          @click="isOpen = false"
                          class="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        >
                          <span v-html="child.name"></span>
                          <span v-if="child.isNew" class="ml-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </Transition>
                </li>
                <!-- 普通链接 -->
                <li v-else>
                  <NuxtLink
                    :to="section.href || `/#${section.id}`"
                    @click="isOpen = false"
                    :class="[
                      'relative block text-base transition-all cursor-pointer px-4 py-2.5 rounded-lg hover:bg-gray-100 hover:shadow-md whitespace-nowrap mt-3 flex items-center gap-3 font-medium',
                      section.id === 'christmas' ? 'christmas-nav-link' : 'text-gray-900 hover:text-gray-700'
                    ]"
                  >
                    {{ section.name }}
                    <!-- Christmas HOT 标签 -->
                    <span
                      v-if="section.id === 'christmas'"
                      class="hot-badge"
                    >
                      HOT
                    </span>
                    <!-- Wan 2.6 New 标签 -->
                    <span
                      v-if="section.id === 'wan-2.6'"
                      class="new-badge"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
              </template>
            </ul>

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
const openMobileSubmenus = ref(new Set<string | number>());
const { isSignedIn } = useClerkAuth();
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const credits = ref(0);
const freeTimes = ref(0);

// 切换移动端子菜单
const toggleMobileSubmenu = (sectionId: string | number) => {
  if (openMobileSubmenus.value.has(sectionId)) {
    openMobileSubmenus.value.delete(sectionId);
  } else {
    openMobileSubmenus.value.add(sectionId);
  }
};

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

/* HOT 标签样式 */
.hot-badge {
  position: absolute;
  top: -6px;
  right: -4px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  font-size: 9px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transform: rotate(-12deg) skew(-5deg);
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.5), 0 0 4px rgba(255, 107, 53, 0.3);
  z-index: 10;
  white-space: nowrap;
  line-height: 1.2;
}

/* New 标签样式 */
.new-badge {
  display: inline-flex;
  align-items: center;
  background: #ffffff36;
  color: #8B5CF6;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 9999px;
  /* margin-left: 8px; */
  text-transform: capitalize;
  letter-spacing: 0.3px;
}

/* Christmas 导航链接样式 */
.christmas-nav-link {
  color: #FDDD20;
  font-weight: 700;
  font-size: 20px;
}

.christmas-nav-link:hover {
  color: #FDDD20;
  opacity: 0.9;
}
</style> 