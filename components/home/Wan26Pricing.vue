<template>
  <section class="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-20">
      <div
        class="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/5 w-72 h-72 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <!-- 标题 & 副标题 -->
      <div class="text-center mb-14">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-5 leading-tight"
        >
          Pricing for Wan 2.6
        </h2>
        <p class="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          Simple, credit-based pricing that lets you pay only for what you generate, with no subscriptions and no expiration on unused credits.
        </p>
      </div>

      <!-- 加载状态 -->
      <div v-if="pending" class="flex justify-center items-center py-20 w-full" aria-live="polite">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"
          aria-label="Loading pricing plans"
        ></div>
      </div>

      <!-- 错误状态 -->
      <div v-else-if="error" class="text-center py-20">
        <div class="text-red-500 text-xl mb-4">Failed to load pricing plans</div>
        <button @click="refreshData" class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Try Again
        </button>
      </div>
      
      <!-- 定价方案网格 -->
      <div v-else class="grid md:grid-cols-3 gap-6 lg:gap-8">
        <!-- 动态渲染套餐卡片 -->
        <article
          v-for="(plan, index) in planData"
          :key="index"
          :class="[
            'relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col h-full transition-all duration-300 shadow-lg',
            plan.is_popular
              ? 'border-2 border-purple-500 transform scale-105 shadow-xl z-10 hover:shadow-2xl'
              : 'border border-purple-100/60 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1'
          ]"
          :aria-labelledby="`plan-${index}-title`"
        >
          <!-- 热门标签 -->
          <div
            v-if="plan.is_popular"
            class="absolute -top-3 left-1/2 transform -translate-x-1/2"
          >
            <span class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">Most Popular</span>
          </div>
          
          <!-- 套餐标题 -->
          <div class="text-center mb-6">
            <h3 
              :id="`plan-${index}-title`"
              class="text-xl md:text-2xl font-bold text-gray-900 mb-4"
            >
              {{ plan.name }}
            </h3>
            <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              ${{ plan.price }}
              <span v-if="plan.price > 0" class="text-lg text-gray-500 font-normal">one-time</span>
            </div>
          </div>
          
          <!-- 操作按钮 -->
          <div class="mb-6">
            <button
              @click="plan.code ? handleUpgradePlan(plan) : null"
              :disabled="upgradingPlanId === plan.code"
              :class="[
                'w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-[48px]',
                getButtonClass(plan)
              ]"
              :aria-describedby="`plan-${index}-title`"
            >
              <div v-if="upgradingPlanId === plan.code" class="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2" aria-hidden="true"></div>
              <span>{{ plan.button_text }}</span>
            </button>
          </div>
          
          <!-- 功能特性列表 -->
          <section class="flex-grow" :aria-label="`${plan.name} plan features`">
            <ul class="space-y-3">
              <li
                v-for="(feature, fIndex) in getPlanFeatures(plan)"
                :key="fIndex"
                class="flex items-start text-gray-700"
              >
                <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm leading-relaxed" v-html="feature"></span>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { getSubPlans, payOrder } from "~/api/index";
import { useClerkAuth } from '~/utils/authHelper';
import { useAsyncData } from 'nuxt/app';

// 定义套餐数据类型
interface PricingPlan {
  name: string;
  description: string;
  price: number;
  code: string;
  button_text: string;
  is_popular: boolean;
  features: string | string[];
}

// 引入auth认证
const {
  isSignedIn
} = useClerkAuth();

// 用户状态
const upgradingPlanId = ref<string | null>(null);

// 使用useAsyncData获取套餐数据
const { data, pending, error, refresh } = await useAsyncData('pricingPlans', async () => {
  try {
    const response = await getSubPlans();
    return response.data as PricingPlan[];
  } catch (err) {
    console.error('Error fetching pricing plans:', err);
    throw err;
  }
});

// 监听数据变化
watch(data, (newData) => {
  console.log('Pricing data updated:', newData);
});

// 计算属性：确保data有值时才返回
const planData = computed(() => {
  return data.value || [];
});

// 刷新数据
const refreshData = () => {
  refresh();
};

// 获取套餐特性列表
const getPlanFeatures = (plan: PricingPlan): string[] => {
  if (!plan.features) return [];
  // 如果特性是字符串，按逗号分割
  if (typeof plan.features === 'string') {
    return plan.features.split(',').map((feature: string) => feature.trim());
  }
  // 如果已经是数组，直接返回
  return Array.isArray(plan.features) ? plan.features : [];
};

// 获取按钮样式
const getButtonClass = (plan: PricingPlan): string => {
  if (plan.price === 0) {
    return "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white";
  } else if (plan.is_popular) {
    return "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg";
  } else {
    return "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white";
  }
};

// 处理升级计划
const handleUpgradePlan = async (plan: PricingPlan) => {
  // 如果没有登录，则提示登录并触发登录
  if (!isSignedIn.value) {
    try {
      const loginBtn = document.querySelector('#bindLogin') as HTMLElement;
      if (loginBtn) {
        loginBtn.click();
      }
    } catch (error) {
      console.error("Failed to find login:", error);
    }
    return;
  }

  upgradingPlanId.value = plan.code;
  try {
    const response = (await payOrder({ price_id: plan.code })) as any;
    if (response.code === 200 && response.data?.url) {
      window.location.href = response.data.url;
    } else {
      throw new Error(response.msg || "Failed to create payment order");
    }
  } catch (error) {
    console.error("Payment failed:", error);
  } finally {
    upgradingPlanId.value = null;
  }
};
</script>

<style scoped>
</style>

