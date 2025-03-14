
<template>
      <Header @updateHeaderHeight="updateHeaderHeight"></Header>
      <Banner :headerHeight="headerHeight"></Banner>
      <router-view></router-view>
      <!-- <Footer></Footer> -->
</template>

<script setup>
  import { ref } from 'vue'
  import Header from './components/Header.vue'
  // import Footer from './components/Footer.vue'
  import Banner from './components/Banner.vue'

  const headerHeight = ref(0)

  const updateHeaderHeight = (height) => {
    headerHeight.value = height;
  }
</script>

<style lang="scss">
  @use './assets/styles/main.scss' as *;
  
  .layoutContainer {
    overflow-x: auto;

    .headerAndBanner {
      width: 100vw;
      display: inline-block;
    }
  }
</style>
