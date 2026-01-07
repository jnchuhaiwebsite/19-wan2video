import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * 检测设备类型的 composable
 * 用于判断是 PC web 端还是 mobile web 端
 */
export const useDevice = () => {
  // 默认断点，与 Tailwind 的 md 断点一致（768px）
  const MOBILE_BREAKPOINT = 768

  // 窗口宽度（响应式）
  // 在客户端立即获取，服务端默认为 1920（PC端）
  const windowWidth = ref<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  )

  // 检测是否为移动端
  const isMobile = computed(() => {
    // 服务端渲染时，默认返回 false（PC端）
    if (typeof window === 'undefined') {
      return false
    }
    // 直接读取 window.innerWidth，确保获取最新值
    const width = window.innerWidth || windowWidth.value || 1920
    return width < MOBILE_BREAKPOINT
  })

  // 检测是否为PC端
  const isDesktop = computed(() => {
    return !isMobile.value
  })

  // 更新窗口宽度
  const updateWindowWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      if (width > 0) {
        windowWidth.value = width
      }
    }
  }

  // 组件挂载时初始化（确保在客户端执行）
  onMounted(() => {
    // 立即更新一次窗口宽度
    updateWindowWidth()
    // 监听窗口大小变化
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateWindowWidth)
    }
  })

  // 组件卸载时清理
  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateWindowWidth)
    }
  })

  return {
    isMobile,
    isDesktop,
    windowWidth: computed(() => windowWidth.value)
  }
}

