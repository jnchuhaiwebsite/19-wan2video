<template>
  <div class="flex flex-col min-h-screen">
    <ChritmasNavbar/>
    <slot />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import ChritmasNavbar from '~/components/ChritmasNavbar.vue'

const BackToTop = defineAsyncComponent(() => import('~/components/BackToTop.vue'))
</script>






