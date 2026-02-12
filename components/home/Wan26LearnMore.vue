<template>
  <section class="py-24 bg-[#f8fafc] relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent_60%)]"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <!-- 标题 & 副标题 -->
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight">
          Learn More
        </h2>
        <p class="max-w-3xl mx-auto text-slate-600 text-base md:text-lg leading-relaxed">
          Explore in-depth guides and comparisons to master Wan AI Video generation
        </p>
      </div>

      <!-- 加载状态 -->
      <div v-if="pending" class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500" aria-label="Loading articles"></div>
      </div>

      <!-- 文章列表 -->
      <div v-else class="grid md:grid-cols-2 gap-8">
        <article
          v-for="post in list"
          :key="post.id"
          class="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-indigo-200/60 transition-all duration-300 flex flex-col"
        >
          <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug">
            {{ post.title }}
          </h3>
          <p class="text-slate-600 leading-relaxed flex-1 mb-6">
            {{ post.abstract }}
          </p>
          <NuxtLink
            :to="blogLink(post)"
            class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-[15px] group link-article"
          >
            <span>Read Article</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </article>
      </div>

      <!-- 无数据时不显示列表，保留标题 -->
      <div v-if="!pending && list.length === 0" class="text-center py-12 text-slate-500">
        <p>No articles available at the moment.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getBlogList, type BlogPost } from '~/api'

const { data: blogResponse, pending } = await useAsyncData(
  'home-learn-more-blog',
  () => getBlogList({ page: 1, page_size: 2 })
)

const list = computed(() => {
  if (!blogResponse.value?.data?.list) return []
  return blogResponse.value.data.list as BlogPost[]
})

function blogLink(post: BlogPost) {
  const url = post.url || ''
  const slug = url.includes('/') ? url.split('/').pop() : url
  return slug ? `/blog/${slug}` : '/blog'
}
</script>

<style scoped>
.link-article {
  text-underline-offset: 4px;
  text-decoration: underline;
  text-decoration-color: rgba(99, 102, 241, 0.4);
}
.link-article:hover {
  text-decoration-color: currentColor;
}
</style>
