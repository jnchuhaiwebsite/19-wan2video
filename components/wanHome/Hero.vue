<template>
  <section class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#05050A] selection:bg-purple-500/30">
    
    <!-- Breadcrumbs 部分 - 样式已适配深色背景 -->
    <nav aria-label="Breadcrumb" class="absolute top-0 left-0 right-0 z-20 bg-transparent pt-20">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- 导航标签 -->
        <div v-if="navTabsWithActive.length > 0" class="flex items-center gap-x-2 pb-2">
          <NuxtLink
            v-for="(tab, index) in navTabsWithActive"
            :key="index"
            :to="tab.to"
            class="relative px-4 py-1.5 text-[13px] font-medium transition-all duration-300 rounded-full border flex items-center justify-center backdrop-blur-md"
            :class="[
              tab.isActive 
                ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/10'
            ]"
          >
            {{ tab.text }}
            <!-- Badge -->
            <span 
              v-if="tab.badge" 
              class="ml-1.5 px-1.5 py-0.5 text-[9px] rounded-full font-bold leading-none"
              :class="tab.isActive ? 'bg-white/20 text-white' : 'bg-red-500/20 text-red-300 border border-red-500/30'"
            >
              {{ tab.badge }}
            </span>
          </NuxtLink>
        </div>

        <!-- 面包屑区域 -->
        <ol class="flex items-center py-4 text-xs overflow-x-auto whitespace-nowrap no-scrollbar">
          <li class="flex items-center flex-shrink-0">
            <!-- Home 图标 -->
            <NuxtLink to="/" class="flex items-center text-slate-400 hover:text-white transition-colors">
              <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              <span>Home</span>
            </NuxtLink>
          </li>
          
          <li v-for="(item, index) in breadcrumbItems" :key="index" class="flex items-center flex-shrink-0">
            <!-- 分隔符 (Chevron) -->
            <svg class="w-2 h-2 text-white/20 mx-3 flex-shrink-0" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            
            <!-- 链接项 -->
            <NuxtLink v-if="item.to" :to="item.to" class="text-slate-400 hover:text-blue-400 transition-colors">
              {{ item.text }}
            </NuxtLink>
            
            <!-- 当前页 (最后一项) -->
            <span v-else class="font-medium text-slate-200">{{ item.text }}</span>
          </li>
        </ol>
      </div>
    </nav>

    <!-- 1. 背景层 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-indigo-900/15 blur-[100px] rounded-full mix-blend-screen"></div>
      <div class="absolute inset-0 opacity-[0.2] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>

    <!-- 2. 内容层 -->
    <div class="container relative z-10 px-4 mx-auto">
      <div class="w-full flex flex-col items-center text-center">
        
        <!-- H1 标题 -->
        <h1 class="w-full text-4xl md:text-6xl lg:text-7xl font-normal text-white animate-fade-in-up leading-tight md:leading-[1.15]">
          <span class="bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            Master Cinematic Storytelling
          </span>
          <br class="hidden md:block" />
          <span class="bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            with Wan AI
          </span>
          <span class="text-white/40 ml-2 md:ml-3 inline-block font-light align-middle text-3xl md:text-5xl">
            (Wan 2.6)
          </span>
        </h1>
        
        <!-- 副标题 -->
        <p class="mt-8 mb-14 text-lg md:text-xl text-slate-300/80 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-100">
          Experience the next evolution in video generation. Create complex narratives with seamless multi-shot transitions, strictly synchronized audio, and extended 15-second clips.
        </p>
        
        <!-- CTA 按钮组 -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 w-full animate-fade-in-up animation-delay-200">
          
          <!-- 1. Wan 2.6 (Primary) -->
          <NuxtLink 
            to="/wan/wan-2-6" 
            class="relative group h-14 min-w-[180px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div class="relative h-full w-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-[1px] shadow-xl overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
              <div class="relative h-full w-full flex items-center justify-center rounded-full bg-transparent">
                 <span class="text-white text-lg font-medium tracking-wide drop-shadow-md group-hover:tracking-wider transition-all">Wan 2.6</span>
                 <span class="flex h-2 w-2 ml-2 relative">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                 </span>
              </div>
            </div>
          </NuxtLink>

          <!-- 2. Wan 2.5 (Secondary) -->
          <NuxtLink 
            to="/wan/wan-2-5"
            class="glass-btn group h-14 min-w-[140px] px-8 rounded-full flex items-center justify-center"
          >
            <span class="relative z-10 text-slate-300 font-normal text-lg group-hover:text-white transition-colors">Wan 2.5</span>
            <div class="absolute inset-0 rounded-full border border-white/10 group-hover:border-white/30 transition-colors"></div>
            <div class="absolute inset-0 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"></div>
          </NuxtLink>

          <!-- 3. Wan 2.2 (Tertiary) -->
          <NuxtLink 
            to="/wan/wan-2-2"
            class="glass-btn group h-14 min-w-[140px] px-8 rounded-full opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            <span class="relative z-10 text-slate-400 font-normal text-lg group-hover:text-white transition-colors">Wan 2.2</span>
            <div class="absolute inset-0 rounded-full border border-white/5 group-hover:border-white/20 transition-colors"></div>
            <div class="absolute inset-0 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"></div>
          </NuxtLink>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

interface NavTabItem { 
  text: string; 
  to?: string; 
  badge?: string; 
  isActive?: boolean;
}

interface BreadcrumbItem { 
  text: string; 
  to?: string; 
}

const props = defineProps<{ 
  navTabs?: NavTabItem[]; 
  breadcrumbItems: BreadcrumbItem[]; 
}>();

const route = useRoute();

const navTabsWithActive = computed(() => {
  if (!props.navTabs) return [];
  return props.navTabs.map(tab => ({ 
    ...tab, 
    isActive: tab.to ? route.path === tab.to : (tab.isActive ?? false)
  }));
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.glass-btn {
  @apply relative overflow-hidden backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer;
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
.animation-delay-100 { animation-delay: 0.15s; }
.animation-delay-200 { animation-delay: 0.3s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); filter: blur(5px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
</style>