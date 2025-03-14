<template>
  <section class="banner" :style="{ height: bannerHeight + 'px' }">

  </section>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'

// 接收父组件传递的 headerHeight
const props = defineProps({
  headerHeight: {
    type: Number,
    required: true
  }
})

const bannerHeight = ref(0)

// 在组件加载时和 headerHeight 变化时，计算 bannerHeight
const calculateBannerHeight = () => {
  bannerHeight.value = window.innerHeight - props.headerHeight
}

// 监听 headerHeight 的变化
watch(() => props.headerHeight, calculateBannerHeight)

// 组件初次加载时调用计算函数
calculateBannerHeight()
</script>

<style scoped>
.banner {
  background-image: url("../assets/images/Banner.jpg");
  background-size: cover;
  background-position: center center;
  transition: height 0.3s;
}
</style>
