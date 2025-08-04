<template>
  <section id="pricing" class="py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-blue-dark mb-6">Simple Plans for Every Creator</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Start for free and scale as you grow. Find the perfect plan to unlock the full potential of Wan 2.2 for your needs.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Free Plan -->
        <div class="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
          <div class="text-center">
            <h3 class="text-xl font-semibold text-blue-dark mb-4">Free</h3>
            <div class="text-4xl font-bold text-blue-dark mb-4">$0</div>
            <p class="text-gray-600 mb-8">Perfect for trying out the basics.</p>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              5 videos per month
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Basic quality
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Community support
            </li>
          </ul>
          
          <button class="w-full py-3 border border-blue-dark text-blue-dark font-medium rounded-lg hover:bg-blue-dark hover:text-white transition-colors">
            Get Started Free
          </button>
        </div>
        
        <!-- Pro Plan -->
        <div class="bg-white p-8 rounded-xl border-2 border-blue-dark transform scale-105 relative">
          <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span class="bg-blue-dark text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
          </div>
          
          <div class="text-center">
            <h3 class="text-xl font-semibold text-blue-dark mb-4">Pro</h3>
            <div class="text-4xl font-bold text-blue-dark mb-4">$29<span class="text-lg text-gray-500 font-normal">/mo</span></div>
            <p class="text-gray-600 mb-8">For creators who need more power.</p>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              100 videos per month
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Ultra quality
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Priority support
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Advanced controls
            </li>
          </ul>
          
          <button class="w-full py-3 bg-blue-dark text-white font-medium rounded-lg hover:bg-blue-medium transition-colors">
            Start Pro Trial
          </button>
        </div>
        
        <!-- Enterprise Plan -->
        <div class="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
          <div class="text-center">
            <h3 class="text-xl font-semibold text-blue-dark mb-4">Enterprise</h3>
            <div class="text-4xl font-bold text-blue-dark mb-4">Custom</div>
            <p class="text-gray-600 mb-8">For teams and advanced features.</p>
          </div>
          
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Unlimited videos
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Custom integrations
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Dedicated support
            </li>
            <li class="flex items-center text-gray-600">
              <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Team management
            </li>
          </ul>
          
          <button class="w-full py-3 border border-blue-dark text-blue-dark font-medium rounded-lg hover:bg-blue-dark hover:text-white transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 组件逻辑可以在这里添加
</script>

<style scoped>
.hover-theme:hover {
  background-color: var(--theme-primary-hover) !important;
  color: #fff !important;
}
</style> 