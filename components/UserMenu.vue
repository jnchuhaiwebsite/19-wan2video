<template>
  <!-- PC端用户菜单 -->
  <div class="hidden lg:flex items-center space-x-4">
    <template v-if="isSignedIn">
      <div class="relative user-menu-container">
        <button
          @click="toggleUserMenu"
          class="relative focus:outline-none px-1.5 py-1.5 rounded-lg hover:bg-blue-medium/10 hover:shadow-lg hover:shadow-blue-medium/20 transition-all"
        >
          <img
            :src="userDisplay?.imageUrl || '/default-avatar.png'"
            :alt="userDisplay?.username ? `${userDisplay.username}'s Profile Picture - Wan2Video` : 'Default User Avatar - Wan2Video'"
            loading="lazy"
            class="w-9 h-9 rounded-full object-cover hover:opacity-80 transition-opacity"
          />
        </button>

        <!-- 用户下拉菜单 -->
        <div
          v-if="showUserMenu"
          class="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50"
        >
          <div class="px-4 py-3 border-b border-blue-light/20">
            <div class="flex items-center gap-3 mb-2">
              <img
                :src="userDisplay?.imageUrl || '/default-avatar.png'"
                :alt="userDisplay?.username ? `${userDisplay.username}'s Profile Picture - Wan2Video` : 'Default User Avatar - Wan2Video'"
                loading="lazy"
                class="w-10 h-10 rounded-full object-cover ring-2 ring-blue-light/20"
              />
              <div>
                <p class="text-gray-800 text-sm font-medium">
                  {{ userDisplay?.username }}
                </p>
                <p
                  v-if="userDisplay?.email"
                  class="text-xs text-gray-500 truncate max-w-[160px]"
                >
                  {{ userDisplay?.email }}
                </p>
              </div>
            </div>

            <div class="space-y-1 mt-2">
              <div v-if="vipLastTime" class="flex justify-between">
                <p class="text-xs text-gray-600">VIP expiration time:</p>
                <p class="text-xs text-gray-400">
                  {{ vipLastTime }}
                </p>
              </div>
            </div>
          </div>

          <!-- 菜单选项 -->
          <div class="py-1 border-b border-baby-pink/20">
            <!-- 个人中心 -->
            <NuxtLink
              to="/profile"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-baby-pink/10 flex items-center transition-all duration-200 hover:translate-x-1"
              @click="showUserMenu = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Personal Center
            </NuxtLink>

            <!-- 我的积分 -->
            <div
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-baby-pink/10 flex items-center justify-between transition-all duration-200 hover:translate-x-1 cursor-pointer"
            >
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-1.171-2.303 0-3.182C10.536 7.719 11.768 7.5 12 7.5c.725 0 1.45.22 2.003.659" />
                </svg>
                Credits:
              </div>
              <span class="text-gray-500">{{ points }}</span>
            </div>
          </div>

          <!-- 退出按钮 -->
          <SignOutButton>
            <button
              @click="() => console.log('👆 [UserMenu] PC端退出按钮被点击')"
              class="block w-full text-left px-4 py-2 text-sm text-blue-navtext hover:bg-blue-medium/10 flex items-center transition-all duration-200 hover:translate-x-1 hover:text-blue-dark"
            >
              <!-- Heroicons: logout/arrow-right-on-rectangle -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 mr-2 transition-transform duration-200 group-hover:scale-110"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              logout
            </button>
          </SignOutButton>
        </div>
      </div>
    </template>

    <template v-else>
      <!-- 登录按钮（最小修复：传回跳地址，避免移动端登录后默认回首页） -->
      <SignInButton
        mode="modal"
        :redirect-url="signInReturnTo"
        :after-sign-in-url="signInReturnTo"
        :fallback-redirect-url="signInReturnTo"
      >
        <button
          id="bindLogin"
          class="px-4 py-2 rounded-lg bg-blue-button text-white hover:opacity-90 transition-all text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg"
        >
          Login
        </button>
      </SignInButton>
    </template>
  </div>

  <!-- 移动端用户菜单（在导航滑出菜单内）-->
  <template v-if="isMobile">
    <div v-if="isSignedIn" class="pt-4 border-t border-blue-light/30">
      <div class="flex items-center gap-3 mb-3">
        <img
          :src="userDisplay?.imageUrl || '/default-avatar.png'"
          :alt="userDisplay?.username ? `${userDisplay.username}'s Profile Picture - Wan2Video` : 'Default User Avatar - Wan2Video'"
          loading="lazy"
          class="w-12 h-12 rounded-full object-cover ring-2 ring-blue-light/30 flex-shrink-0"
        />
        <div class="flex-1 min-w-0">
          <p class="text-blue-navtext font-medium text-base truncate">
            {{ userDisplay?.username }}
          </p>
          <p
            v-if="userDisplay?.email"
            class="text-xs text-blue-footertext truncate mt-0.5"
          >
            {{ userDisplay?.email }}
          </p>
        </div>
      </div>

      <!-- 移动端菜单选项 -->
      <div class="space-y-3">
        <!-- 个人中心 -->
        <NuxtLink
          to="/profile"
          @click="props.onCloseMobileNav?.()"
          class="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-50 to-baby-pink/20 hover:from-blue-100 hover:to-baby-pink/30 active:scale-[0.98] transition-all duration-200 text-sm font-medium text-gray-700 flex items-center gap-3 shadow-sm border border-blue-100/50"
        >
          <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-blue-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span class="text-gray-800">Personal Center</span>
        </NuxtLink>

        <!-- 我的积分 -->
        <div class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-100/50 text-sm font-medium text-gray-700 flex items-center justify-between shadow-sm">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-yellow-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-1.171-2.303 0-3.182C10.536 7.719 11.768 7.5 12 7.5c.725 0 1.45.22 2.003.659" />
              </svg>
            </div>
            <span class="text-gray-800">Credits:</span>
          </div>
          <span class="text-orange-600 font-semibold bg-orange-100 px-2 py-1 rounded-lg text-xs">{{ points }}</span>
        </div>
      </div>

      <!-- 退出按钮 -->
      <SignOutButton>
        <button
          @click="() => console.log('👆 [UserMenu] 移动端退出按钮被点击')"
          class="mt-6 w-full py-3 px-4 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 active:scale-[0.98] transition-all duration-200 text-sm font-medium text-red-600 border border-red-100/50 shadow-sm"
        >
          <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-red-600 transition-transform duration-200 group-hover:scale-110"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </div>
          <span class="text-red-700">logout</span>
        </button>
      </SignOutButton>
    </div>

    <!-- 移动端登录按钮（最小修复：传回跳地址，避免移动端登录后默认回首页） -->
    <SignInButton
      v-else
      mode="modal"
      :redirect-url="signInReturnTo"
      :after-sign-in-url="signInReturnTo"
      fallback-redirect-url="/"
    >
      <button
        id="bindLogin"
        class="mt-6 w-full py-4 rounded-xl bg-gradient-to-r bg-blue-button active:scale-[0.98] text-white transition-all text-base font-semibold disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl border border-blue-400/20"
      >
        <div v-if="!isAuthLoading" class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <span>Login</span>
        </div>
        <div v-else class="flex items-center gap-2">
          <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Login</span>
        </div>
      </button>
    </SignInButton>
  </template>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router"; // ✅ 新增：用于拿当前页面地址
import { useClerkAuth } from '~/utils/authHelper'
import { useUserStore } from '~/stores/user';
import { setUserInfo } from '~/api/index'

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  },
  onCloseMobileNav: {
    type: Function,
    default: null
  }
});

// ✅ 新增：当前路由 & 登录回跳地址（最小修复核心）
const route = useRoute();
const signInReturnTo = computed(() => route.fullPath || "/");
// alert(signInReturnTo.value)
// 用户存储
const userStore = useUserStore();

// 状态管理
const vipLastTime = ref("");
const showUserMenu = ref(false);
const isAuthLoading = ref(true);

// 计算总积分
const points = computed(() => {
  const userInfo = userStore.userInfo;
  if (!userInfo) return 0;

  const freeLimit = userInfo.free_limit || 0;
  const remainingLimit = userInfo.remaining_limit || 0;
  return freeLimit + remainingLimit;
});

// 引入auth认证
const {
  user,
  isSignedIn,
  initAuth,
  on,
  getToken,
  clerk
} = useClerkAuth();

// 获取用户信息
const getUserInfo = async () => {
  try {
    console.log('准备调用fetchUserInfo')
    const userData = await userStore.fetchUserInfo();
    console.log('fetchUserInfo执行完成')
    console.log('userData', userData)
    if (userData) {
      vipLastTime.value = userData.vipLastTime || "";
    }
  } catch (error) {
    console.error("获取用户信息失败:", error);
  }
}

// 转换用户数据为组件需要格式
interface User {
  username: string;
  email?: string;
  imageUrl?: string;
}

const userDisplay = computed<User | null>(() => {
  if (!user.value) return null;

  return {
    username: user.value.username || user.value.firstName || "User",
    email: user.value.emailAddresses?.[0]?.emailAddress,
    imageUrl: user.value.imageUrl + '?width=64&height=64'
  };
});

// 切换用户菜单
const toggleUserMenu = async () => {
  if (!showUserMenu.value) {
    showUserMenu.value = true;
    try {
      await getUserInfo();
    } catch (err) {
      console.error("Failed to refresh user info:", err);
    }
  } else {
    showUserMenu.value = false;
  }
};

onMounted(async () => {
  try {
    initAuth();

    setTimeout(() => {
      isAuthLoading.value = false;
    }, 5000);

    if (isSignedIn.value) {
      await getUserInfo();
    }

    // 监听登录事件
    on('login', async (user: any) => {
      isAuthLoading.value = false;

      let from_login = "email";
      if (user.externalAccounts && user.externalAccounts[0]?.provider.includes("github")) {
        from_login = "github";
      } else if (user.externalAccounts && user.externalAccounts[0]?.provider.includes("google")) {
        from_login = "google";
      }

      const email = user.emailAddresses && user.emailAddresses.length > 0
        ? user.emailAddresses[0].emailAddress
        : (user.externalAccounts && user.externalAccounts[0]?.emailAddress || '');

      const avatar = user.imageUrl ||
        (user.externalAccounts && user.externalAccounts[0]?.imageUrl || '');

      const nickname = user.username ||
        (user.externalAccounts && user.externalAccounts[0]?.username || '') ||
        user.fullName || '';

      const token = await getToken.value();
      setUserInfo({
        uuid: user.id,
        email,
        from_login,
        avatar,
        nickname,
        from_type: 0,
        token
      }).then(async () => {
        await getUserInfo();
      }).catch((error) => {
        console.error('登录认证失败:', error);
        isAuthLoading.value = false;
      });
    });

    on('logout', async () => {
      console.log('📺 [UserMenu] 收到logout事件')
      document.cookie = `auth_token=; Path=/; max-age=0;`;
      document.cookie = `auth_token_expiry=; Path=/; max-age=0;`;
      console.log('清除cookie成功');
      vipLastTime.value = "";
      isAuthLoading.value = false;
      console.log('✅ [UserMenu] logout事件处理完成')
    });

    // 监听Clerk加载完成事件，更新认证加载状态
    on('clerkLoaded', async (isSignedIn: boolean) => {
      isAuthLoading.value = false;
      if (isSignedIn) {
        await getUserInfo();
      }
    });

    on('error', (error: any) => {
      isAuthLoading.value = false;
      console.error("认证系统错误:", error);
    });

    // 点击外部关闭用户菜单
    if (process.client) {
      document.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (
          showUserMenu.value &&
          target &&
          !target.closest(".user-menu-container")
        ) {
          showUserMenu.value = false;
        }
      });
    }
  } catch (err) {
    isAuthLoading.value = false;
    console.error("组件挂载时加载用户信息失败:", err);
  }
});
</script>
