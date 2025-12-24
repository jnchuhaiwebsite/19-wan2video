<template>
  <!-- Header 容器 - 始终固定在顶部 -->
  <header class="fixed top-0 left-0 w-full z-50 flex flex-col shadow-md">
    
    <!-- Banner 区域 (根据需求保留) -->
    <div class="w-full relative z-[51]">
      <!-- PC端 Banner -->
      <a href="/christmas" class="hidden lg:block w-full bg-slate-900 hover:opacity-95 transition-opacity">
        <img 
          src="https://cfsource.wan2video.com/wan2video/christmas/banner.gif" 
          alt="Christmas Special" 
          class="w-full h-[60px] object-cover mx-auto"
        />
      </a>
      <!-- 移动端 Banner -->
      <div class="block lg:hidden w-full h-[50px] relative bg-slate-900 overflow-hidden">
        <a href="/christmas" class="absolute inset-0 z-10 w-full h-full">
          <img 
            src="https://cfsource.wan2video.com/wan2video/christmas/bannershouji.gif" 
            alt="Christmas Special" 
            class="w-full h-[60px] object-cover mx-auto"
          />
        </a>
      </div>
    </div>

    <!-- 导航栏：直接固定为“滚动后”的白底样式 -->
    <nav class="w-full bg-white/95 backdrop-blur-md py-1 relative z-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-16 lg:h-18">
          
          <!-- Logo: 保持蓝色 -->
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <span class="text-blue-logo text-2xl lg:text-3xl font-bold">Wan2Video</span>
            </NuxtLink>
          </div>

          <!-- PC端导航项 -->
          <div class="hidden lg:flex items-center justify-center flex-grow">
            <ul class="flex items-center space-x-1 lg:space-x-2 list-none">
              <template v-for="(section, index) in sections" :key="index">
                
                <!-- 场景1：有下拉菜单 -->
                <li v-if="section.children && section.children.length" class="relative group/main">
                  <div
                    class="relative transition-all cursor-pointer px-4 py-2 rounded-lg whitespace-nowrap flex items-center gap-1.5 font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    :class="[section.id === 'christmas' ? 'christmas-nav-link' : '']"
                  >
                    <span class="relative">
                      {{ section.name }}
                      <!-- 标签逻辑 -->
                      <span v-if="section.badge" class="absolute -top-3 left-full -ml-2 bg-red-500 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 shadow-sm">{{ section.badge }}</span>
                      <span v-if="section.id === 'christmas'" class="hot-badge">HOT</span>
                    </span>
                    <!-- 箭头图标 -->
                    <svg 
                      class="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover/main:rotate-180" 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <!-- 下拉菜单：使用 top-full 和 pt-2 解决“点不到”问题 -->
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
                    class="relative transition-all px-4 py-2 rounded-lg font-medium block text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    :class="[section.id === 'christmas' ? 'christmas-nav-link' : '']"
                  >
                    {{ section.name }}
                    <span v-if="section.id === 'wan-2.6'" class="new-badge">New</span>
                  </NuxtLink>
                </li>
              </template>
            </ul>
          </div>

          <!-- 用户区域 (始终使用深色风格) -->
          <div class="hidden lg:flex items-center space-x-4">
            <div
              v-if="isSignedIn && freeTimes > 0"
              class="flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4 text-blue-600">
                <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="m15 9-6 6"></path>
                <path d="M9 9h.01"></path><path d="M15 15h.01"></path>
              </svg>
              <span class="text-[11px] font-bold">{{ freeTimes }} Free</span>
            </div>
            <UserMenu />
          </div>

          <!-- 移动端按钮 -->
          <button
            @click="isOpen = !isOpen"
            class="lg:hidden p-2 text-slate-800 transition-colors"
          >
            <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端滑出菜单 -->
      <Transition name="slide-fade">
        <div v-if="isOpen" class="lg:hidden fixed inset-0 top-[110px] w-full h-screen bg-white z-[100] border-t border-slate-100 px-4 pt-4">
           <ul class="space-y-4">
              <li v-for="section in sections" :key="section.id">
                <NuxtLink 
                  :to="section.href || `/#${section.id}`" 
                  class="text-lg font-bold text-slate-800 block py-2"
                  @click="isOpen = false"
                >
                  {{ section.name }}
                </NuxtLink>
              </li>
           </ul>
           <div class="mt-8 border-t pt-6">
              <UserMenu :isMobile="true" :onCloseMobileNav="() => isOpen = false" />
           </div>
        </div>
      </Transition>
    </nav>
  </header>
  <!-- 占位符，防止内容被固定导航栏遮挡 (高度 = Banner + Nav) -->
  <div class="h-[126px] lg:h-[132px]"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useNavigation } from "~/utils/navigation";
import { useClerkAuth } from '~/utils/authHelper';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '~/stores/user';

const isOpen = ref(false);
const { isSignedIn } = useClerkAuth();
const route = useRoute();
const userStore = useUserStore();
const freeTimes = ref(0);

const { sections, handleScroll: navHandleScroll, executeScroll } = useNavigation();

onMounted(() => {
  // 依然保留滚动监听，用于锚点高亮逻辑（如果 sections 依赖这个逻辑的话）
  window.addEventListener("scroll", navHandleScroll);
  
  if (isSignedIn) {
    userStore.fetchUserInfo().then(data => {
      if (data) freeTimes.value = data.free_times || 0;
    });
  }

  const target = sessionStorage.getItem("targetSection");
  if (target && route.path === '/') {
    sessionStorage.removeItem("targetSection");
    setTimeout(() => executeScroll(target), 300);
  }
});

watch(isOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});
</script>

<style scoped>
/* 保持 Christmas 导航链接红色 */
.christmas-nav-link {
  color: #FF4500 !important;
  font-weight: 800;
}

/* HOT 标签样式 */
.hot-badge {
  position: absolute;
  top: -10px;
  right: -12px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: white;
  font-size: 9px;
  font-weight: 800;
  padding: 1px 6px;
  border-radius: 999px;
  transform: rotate(-12deg);
  box-shadow: 0 2px 4px rgba(255, 107, 53, 0.3);
}

/* New 标签样式 */
.new-badge {
  display: inline-flex;
  margin-left: 6px;
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 6px;
  text-transform: uppercase;
}

/* 移动端动画 */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>