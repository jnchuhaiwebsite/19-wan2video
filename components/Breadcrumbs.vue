<template>
  <!-- 背景改为纯白或极浅灰，添加一个微弱的底边框增加层次感 -->
  <nav aria-label="Breadcrumb" class="text-sm pt-40 pb-4 bg-white border-b border-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- 上方切换导航栏 -->
      <div v-if="navTabsWithActive.length > 0" class="flex items-center gap-x-8 border-b border-gray-100 mb-4">
        <NuxtLink
          v-for="(tab, index) in navTabsWithActive"
          :key="index"
          :to="tab.to"
          class="relative py-3 text-sm font-semibold transition-all border-b-2 flex items-center"
          :class="[
            tab.isActive 
              ? 'text-blue-600 border-blue-600' 
              : 'text-gray-500 border-transparent hover:text-gray-800 hover:border-gray-300'
          ]"
        >
          {{ tab.text }}

          <!-- Badge 徽标：调整了样式使其更精致 -->
          <span 
            v-if="tab.badge" 
            class="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white bg-red-500 rounded-full"
          >
            {{ tab.badge }}
          </span>
        </NuxtLink>
      </div>

      <!-- 面包屑区域 -->
      <ol class="flex items-center gap-x-1 md:gap-x-2 overflow-x-auto whitespace-nowrap no-scrollbar">
        <!-- Home Item -->
        <li class="flex items-center flex-shrink-0">
          <NuxtLink to="/" class="flex items-center text-gray-400 hover:text-blue-600 transition-colors">
            <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span class="font-medium">Home</span>
          </NuxtLink>
        </li>

        <!-- Loop Items -->
        <li
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center flex-shrink-0"
        >
          <!-- 间隔图标改为更浅的灰色 -->
          <svg class="w-3 h-3 text-gray-300 mx-1 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1 9 4-4-4-4"/>
          </svg>
          
          <NuxtLink 
            v-if="item.to" 
            :to="item.to" 
            class="ms-1 font-medium text-gray-500 hover:text-blue-600 transition-colors md:ms-2"
          >
            {{ item.text }}
          </NuxtLink>
          <!-- 当前所在页面的文字加深 -->
          <span 
            v-else 
            class="ms-1 font-semibold text-gray-900 md:ms-2"
          >
            {{ item.text }}
          </span>
        </li>
      </ol>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface NavTabItem {
  text: string;
  to?: string;
  isActive?: boolean;
  badge?: string;
}

interface BreadcrumbItem {
  text: string;
  to?: string;
}

const props = defineProps<{
  navTabs?: NavTabItem[];
  items: BreadcrumbItem[];
}>();

const route = useRoute();

const navTabsWithActive = computed<NavTabItem[]>(() => {
  if (!props.navTabs || props.navTabs.length === 0) return [];
  return props.navTabs.map((tab) => ({
    ...tab,
    isActive: tab.to ? route.path === tab.to : false,
  }));
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>