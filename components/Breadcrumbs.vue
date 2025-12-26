<template>
  <!-- 
    1. bg-transparent: 背景完全透明
    2. relative z-20: 确保在首屏装饰元素的上方
    3. -mb-12: 使用负边距，让首屏内容往上提，形成悬浮感
  -->
  <nav aria-label="Breadcrumb" class="relative z-20 bg-transparent pt-20">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- 面包屑区域 -->
      <ol class="flex items-center py-4 text-xs overflow-x-auto whitespace-nowrap no-scrollbar">
        <li class="flex items-center flex-shrink-0">
          <NuxtLink to="/" class="flex items-center text-slate-400 hover:text-blue-600 transition-colors">
            <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span>Home</span>
          </NuxtLink>
        </li>

        <li v-for="(item, index) in items" :key="index" class="flex items-center flex-shrink-0">
          <svg class="w-2 h-2 text-slate-300 mx-3 flex-shrink-0" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <NuxtLink v-if="item.to" :to="item.to" class="text-slate-500 hover:text-blue-600 transition-colors">
            {{ item.text }}
          </NuxtLink>
          <span v-else class="font-medium text-slate-600">{{ item.text }}</span>
        </li>
      </ol>

      <!-- 导航标签：改为更加轻盈的胶囊样式，或者极简线条 -->
      <div v-if="navTabsWithActive.length > 0" class="flex items-center gap-x-1">
        <NuxtLink
          v-for="(tab, index) in navTabsWithActive"
          :key="index"
          :to="tab.to"
          class="relative px-4 py-2 text-[13px] font-semibold transition-all rounded-full"
          :class="[
            tab.isActive 
              ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
              : 'text-slate-500 hover:bg-slate-100'
          ]"
        >
          {{ tab.text }}
          <span v-if="tab.badge" class="ml-1 px-1.5 py-0.5 text-[9px] bg-red-500 text-white rounded-full">{{ tab.badge }}</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface NavTabItem { text: string; to?: string; badge?: string; }
interface BreadcrumbItem { text: string; to?: string; }

const props = defineProps<{ navTabs?: NavTabItem[]; items: BreadcrumbItem[]; }>();
const route = useRoute();
const navTabsWithActive = computed(() => {
  if (!props.navTabs) return [];
  return props.navTabs.map(tab => ({ ...tab, isActive: tab.to ? route.path === tab.to : false }));
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>