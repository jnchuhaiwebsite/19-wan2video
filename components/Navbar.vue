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
            <ul class="flex items-center space-x-6 list-none">
              <template v-for="(section, index) in sections" :key="index">
                
                <!-- 场景1：有下拉菜单的导航项 -->
                <li v-if="section.children && section.children.length" class="relative group/main">
                  <div
                    class="relative transition-all cursor-pointer px-4 py-2.5 rounded-lg hover:shadow-lg whitespace-nowrap flex items-center gap-2"
                    :class="section.id === 'christmas' ? 'christmas-nav-link' : 'text-white hover:text-blue-100'"
                    @click="section.href ? (section.openInNewTab ? handleLinkClick(section.href, section.openInNewTab) : router.push(section.href)) : null"
                  >
                    <span class="relative">
                      {{ section.name }}
                      <span v-if="section.badge" class="absolute -top-3 left-full -ml-2 bg-red-500 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none shadow-sm">
                        {{ section.badge }}
                      </span>
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1.5 opacity-70 group-hover/main:text-blue-dark group-hover/main:opacity-100 group-hover/main:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <div class="absolute h-4 w-full top-full"></div>

                  <!-- ================= 二级菜单容器 ================= -->
                  <ul
                    class="absolute top-[calc(100%+0.5rem)] left-0 hidden group-hover/main:block bg-blue-pale/95 backdrop-blur-2xl border border-blue-100/50 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] min-w-[200px] z-50 list-none p-1.5 ring-1 ring-blue-100/30"
                    :class="{ '!hidden': isMenuHidden }"
                    @mouseleave="handleSecondLevelLeave"
                  >
                    <li
                      v-for="(child, childIndex) in section.children" 
                      :key="childIndex"
                      class="relative group/item"
                      @mouseenter="handleSecondLevelEnter(index, childIndex, !!(child.children && child.children.length))"
                    >
                      <!-- 2.1 二级菜单：特殊点击逻辑 -->
                      <div 
                        v-if="child.openInNewTab && child.href"
                        @click="handleLinkClick(child.href, child.openInNewTab)"
                        class="flex items-center justify-between px-4 py-3 text-blue-navtext hover:text-blue-dark hover:bg-blue-medium/10 rounded-xl transition-all duration-200 cursor-pointer mb-0.5"
                        :class="{'bg-blue-medium/10 text-blue-dark': activeThirdLevel?.childIndex === childIndex}"
                      >
                        <div class="flex items-center">
                          <span class="font-medium text-[15px]">{{ child.name }}</span>
                          <!-- New Badge 样式优化：实心胶囊 -->
                          <span v-if="child.isNew" class="ml-2 bg-blue-dark text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none shadow-sm">NEW</span>
                        </div>
                        <div class="flex items-center gap-2 ml-3">
                           <svg v-if="child.children && child.children.length" class="w-3.5 h-3.5 text-blue-navtext group-hover/item:text-blue-dark -rotate-90 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                           </svg>
                        </div>
                      </div>

                      <!-- 2.2 二级菜单：普通链接 -->
                      <NuxtLink
                        v-else
                        :to="child.href || `/#${child.id}`" 
                        class="flex items-center justify-between px-4 py-3 text-blue-navtext hover:text-blue-dark hover:bg-blue-medium/10 rounded-xl transition-all duration-200 mb-0.5"
                        :class="{'bg-blue-medium/10 text-blue-dark': activeThirdLevel?.childIndex === childIndex}"
                        @click="!(child.children && child.children.length) && handleMenuClick()" 
                      >
                        <div class="flex items-center">
                          <span v-html="child.name" class="font-medium text-[15px]"></span>
                          <!-- New Badge 样式优化 -->
                          <span v-if="child.isNew" class="ml-2 bg-blue-dark text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none shadow-sm">NEW</span>
                        </div>
                        <div class="flex items-center gap-2 ml-3">
                          <span v-if="child.showBeta" class="bg-blue-dark/10 text-blue-dark border border-blue-dark/20 text-[10px] font-bold rounded px-1.5 py-0.5 uppercase tracking-wide">Beta</span>
                          <span v-if="child.badge" class="bg-red-500 text-white text-[10px] font-bold rounded-full px-2 py-0.5 shadow-sm">{{ child.badge }}</span>
                           <svg v-if="child.children && child.children.length" class="w-3.5 h-3.5 text-blue-navtext group-hover/item:text-blue-dark -rotate-90 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                           </svg>
                        </div>
                      </NuxtLink>

                      <!-- ================= 三级菜单容器 ================= -->
                      <ul
                        v-if="child.children && child.children.length && activeThirdLevel && activeThirdLevel.sectionIndex === index && activeThirdLevel.childIndex === childIndex"
                        class="absolute top-0 left-full -ml-3 hidden group-hover/main:block bg-blue-pale/95 backdrop-blur-2xl border border-blue-100/50 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] min-w-[180px] z-50 list-none p-1.5 ring-1 ring-blue-100/30"
                      >
                        <li
                          v-for="(grand, grandIndex) in child.children"
                          :key="grandIndex"
                        >
                          <!-- 3.1 三级菜单：特殊点击 -->
                          <div 
                            v-if="grand.openInNewTab && grand.href"
                            @click="handleLinkClick(grand.href, grand.openInNewTab)"
                            class="flex items-center justify-between px-4 py-2.5 text-blue-navtext hover:text-blue-dark hover:bg-blue-medium/10 rounded-xl transition-all duration-200 cursor-pointer mb-0.5"
                          >
                             <div class="flex items-center">
                                <span v-html="grand.name" class="font-medium text-[14px]"></span>
                                <span v-if="grand.isNew" class="ml-2 bg-blue-dark text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">NEW</span>
                             </div>
                          </div>
                          <!-- 3.2 三级菜单：普通链接 -->
                          <NuxtLink
                            v-else
                            :to="grand.href || `/#${grand.id}`"
                            class="flex items-center justify-between px-4 py-2.5 text-blue-navtext hover:text-blue-dark hover:bg-blue-medium/10 rounded-xl transition-all duration-200 mb-0.5"
                            @click="handleMenuClick"
                          >
                            <div class="flex items-center">
                              <span v-html="grand.name" class="font-medium text-[14px]"></span>
                              <span v-if="grand.isNew" class="ml-2 bg-blue-dark text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">NEW</span>
                            </div>
                            <div class="flex items-center gap-2 ml-3">
                              <span v-if="grand.showBeta" class="bg-blue-dark/10 text-blue-dark border border-blue-dark/20 text-[10px] font-bold rounded px-1.5 py-0.5 uppercase">Beta</span>
                              <span v-if="grand.badge" class="bg-red-500 text-white text-[10px] font-bold rounded-full px-2 py-0.5">{{ grand.badge }}</span>
                            </div>
                          </NuxtLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <!-- 场景2：普通链接导航 -->
                <li v-else-if="section.href || section.id" class="relative group/link">
                  <div
                    v-if="section.openInNewTab"
                    @click="handleLinkClick(section.href || `/#${section.id}`, section.openInNewTab)"
                    class="relative transition-all cursor-pointer px-4 py-2.5 rounded-lg hover:shadow-lg whitespace-nowrap flex items-center gap-2"
                    :class="section.id === 'christmas' ? 'christmas-nav-link' : 'text-white hover:text-blue-100'"
                  >
                    {{ section.name }}
                    <span v-if="section.badge" class="absolute -top-3 left-full -ml-2 bg-red-500 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none shadow-sm">
                      {{ section.badge }}
                    </span>
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
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-dark transition-all duration-300 group-hover/link:w-full"></span>
                  </div>
                  <NuxtLink 
                    v-else
                    :to="section.href || `/#${section.id}`"
                    class="relative transition-all cursor-pointer px-4 py-2.5 rounded-lg hover:shadow-lg whitespace-nowrap flex items-center gap-2"
                    :class="section.id === 'christmas' ? 'christmas-nav-link' : 'text-white hover:text-blue-100'"
                    @click="handleMenuClick"
                  >
                    {{ section.name }}
                    <span v-if="section.badge" class="absolute -top-3 left-full -ml-2 bg-red-500 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none shadow-sm">
                      {{ section.badge }}
                    </span>
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
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-dark transition-all duration-300 group-hover/link:w-full"></span>
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
            <ul class="space-y-2 mb-6 list-none">
              <template v-for="(section, index) in sections" :key="index">
                <li v-if="section.children && section.children.length" class="block">
                  <div class="text-blue-navtext text-base py-2 flex items-center whitespace-nowrap font-medium">
                    {{ section.name }}
                    <span v-if="section.badge" class="ml-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">{{ section.badge }}</span>
                    <!-- Christmas HOT 标签 -->
                    <span
                      v-if="section.id === 'christmas'"
                      class="ml-2 hot-badge"
                    >
                      HOT
                    </span>
                    <!-- Wan 2.6 New 标签 -->
                    <span
                      v-if="section.id === 'wan-2.6'"
                      class="ml-2 new-badge"
                    >
                      New
                    </span>
                  </div>
                  <ul class="pl-4 border-l border-blue-200/50 list-none">
                    <li v-for="(child, childIndex) in section.children" :key="childIndex">
                      <div v-if="child.openInNewTab && child.href" @click="handleLinkClick(child.href, child.openInNewTab)" class="flex items-center justify-between text-blue-navtext hover:text-blue-dark text-base py-2 transition-colors whitespace-nowrap cursor-pointer">
                        <div class="flex items-center">
                          <span v-if="child.isNew" class="border border-blue-dark rounded-md px-2 py-1"><span style="color: #00e6e8;">{{ child.name }}</span></span>
                          <span v-else v-html="child.name"></span>
                        </div>
                        <span v-if="child.isNew" class="ml-2 bg-blue-dark text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
                      </div>
                      <NuxtLink v-else :to="child.href || `/#${child.id}`" class="flex items-center justify-between text-blue-navtext hover:text-blue-dark text-base py-2 transition-colors whitespace-nowrap" @click="isOpen = false">
                        <div class="flex items-center">
                          <span v-html="child.name"></span>
                          <span v-if="child.isNew" class="ml-2 bg-blue-dark text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <span v-if="child.showBeta" class="bg-blue-dark/10 text-blue-dark border border-blue-dark/20 text-[10px] font-bold rounded px-1.5 py-0.5 uppercase">Beta</span>
                          <span v-if="child.badge" class="bg-red-500 text-white text-[10px] font-bold rounded-full px-2 py-0.5">{{ child.badge }}</span>
                        </div>
                      </NuxtLink>
                      <ul v-if="child.children && child.children.length" class="pl-4 border-l border-blue-200/30 list-none">
                        <li v-for="(grand, grandIndex) in child.children" :key="grandIndex">
                          <div v-if="grand.openInNewTab && grand.href" @click="handleLinkClick(grand.href, grand.openInNewTab)" class="flex items-center justify-between text-blue-navtext hover:text-blue-dark text-base py-2 transition-colors whitespace-nowrap cursor-pointer">
                             <div class="flex items-center">
                               <span v-if="grand.isNew" class="border border-blue-dark rounded-md px-2 py-1"><span style="color: #00e6e8;">{{ grand.name }}</span></span>
                               <span v-else v-html="grand.name"></span>
                             </div>
                             <span v-if="grand.isNew" class="ml-2 bg-blue-dark text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
                          </div>
                          <NuxtLink v-else :to="grand.href || `/#${grand.id}`" class="flex items-center justify-between text-blue-navtext hover:text-blue-dark text-base py-2 transition-colors whitespace-nowrap" @click="isOpen = false">
                             <div class="flex items-center">
                               <span v-html="grand.name"></span>
                               <span v-if="grand.isNew" class="ml-2 bg-blue-dark text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>
                             </div>
                             <div class="flex items-center gap-2">
                               <span v-if="grand.showBeta" class="bg-blue-dark/10 text-blue-dark border border-blue-dark/20 text-[10px] font-bold rounded px-1.5 py-0.5 uppercase">Beta</span>
                               <span v-if="grand.badge" class="bg-red-500 text-white text-[10px] font-bold rounded-full px-2 py-0.5">{{ grand.badge }}</span>
                             </div>
                          </NuxtLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li v-else-if="section.href || section.id">
                   <NuxtLink 
                     :to="section.href || `/#${section.id}`" 
                     class="relative block text-base transition-all cursor-pointer px-4 py-2.5 rounded-lg hover:bg-blue-medium/10 hover:shadow-lg hover:shadow-blue-medium/20 whitespace-nowrap mt-3 flex items-center gap-3"
                     :class="section.id === 'christmas' ? 'christmas-nav-link' : 'text-blue-navtext hover:text-blue-dark'"
                     @click="isOpen = false"
                   >
                     <span>{{ section.name }}</span>
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
const { isSignedIn } = useClerkAuth();
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const credits = ref(0);
const freeTimes = ref(0);

// 二级导航状态管理
const activeThirdLevel = ref<{ sectionIndex: number; childIndex: number } | null>(null);
const closeTimer = ref<any>(null);
const isMenuHidden = ref(false);

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

// 二级导航事件处理
const handleMenuClick = () => {
  activeThirdLevel.value = null;
  isOpen.value = false;
  if (closeTimer.value) {
    clearTimeout(closeTimer.value);
    closeTimer.value = null;
  }
  isMenuHidden.value = true;
  setTimeout(() => {
    isMenuHidden.value = false;
  }, 100);
};

const handleSecondLevelEnter = (sectionIndex: number, childIndex: number, hasThird: boolean) => {
  if (closeTimer.value) {
    clearTimeout(closeTimer.value);
    closeTimer.value = null;
  }
  if (hasThird) {
    activeThirdLevel.value = { sectionIndex, childIndex };
  } else {
    activeThirdLevel.value = null;
  }
};

const handleSecondLevelLeave = () => {
  closeTimer.value = setTimeout(() => {
    activeThirdLevel.value = null;
  }, 1000);
};

const handleLinkClick = (href: string, openInNewTab?: boolean) => {
  if (openInNewTab) {
    window.open(href, '_blank', 'noopener,noreferrer');
  } else {
    router.push(href);
  }
  handleMenuClick(); 
};

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
  if (closeTimer.value) {
    clearTimeout(closeTimer.value);
  }
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
  background: #e0dcdc56;
  color: #8B5CF6;
  font-size: 12px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 9999px;
  text-transform: capitalize;
  letter-spacing: 0.3px;
}

/* Christmas 导航链接样式 */
.christmas-nav-link {
  color: #FF4500 ;
  font-weight: 700;
  font-size: 20px;
}

.christmas-nav-link:hover {
  color: #FF4500;
  opacity: 0.9;
}
</style>