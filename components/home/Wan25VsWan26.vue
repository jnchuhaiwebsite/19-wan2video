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
          Wan 2.5 vs Wan 2.6
        </h2>
        <p class="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          See how Wan 2.6 removes key limitations in Wan 2.5 and enables longer, more coherent, and story-driven video creation.
        </p>
      </div>

      <!-- 对比表格 -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-purple-200">
                <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Feature</th>
                <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Wan 2.5</th>
                <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Wan 2.6</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="hover:bg-blue-50/50 transition-colors">
                <td class="px-6 py-4 text-sm font-semibold text-gray-900">
                  Reference Video Support
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 text-center">
                  Partial reference support
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 text-center">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    Full video reference with consistent identity and voice
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-blue-50/50 transition-colors bg-gray-50/30">
                <td class="px-6 py-4 text-sm font-semibold text-gray-900">
                  Audio-Visual Synchronization
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 text-center">
                  Audio generated separately
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 text-center">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    Audio and video generated together
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-blue-50/50 transition-colors">
                <td class="px-6 py-4 text-sm font-semibold text-gray-900">
                  Multi-Shot Storytelling
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 text-center">
                  Single-shot focused
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 text-center">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    Multi-shot structure with scene continuity
                  </span>
                </td>
              </tr>
              <tr class="hover:bg-blue-50/50 transition-colors bg-gray-50/30">
                <td class="px-6 py-4 text-sm font-semibold text-gray-900">
                  Max Video Length
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 text-center">
                  Short clips
                </td>
                <td class="px-6 py-4 text-sm text-gray-700 text-center">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    Up to 15 seconds per generation
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 总结文字 -->
      <div class="mt-8 text-center">
        <p class="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Wan 2.6 removes key structural limits found in Wan 2.5, enabling longer, more coherent videos within a single generation.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Presentation-only component
</script>

<style scoped>
/* 响应式表格样式 */
@media (max-width: 768px) {
  table {
    font-size: 0.875rem;
  }
  
  th, td {
    padding: 0.75rem 0.5rem;
  }
}
</style>

