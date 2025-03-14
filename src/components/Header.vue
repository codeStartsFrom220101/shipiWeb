<template>
  <header ref="header">
    <h1 v-if="isHomePage">路邊的一隻蛇皮Shipi</h1>
    <h2 v-else>這不是首頁</h2>
    <nav>
      <ul>
        <li><a href="#">首頁</a></li>
        <li><a href="#">作品牆</a></li>
        <li><a href="#">漫畫牆</a></li>
        <li><a href="#">還沒想到</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// 获取父组件传递的 `isHomePage` 和 `pageTitle`
const isHomePage = computed(() => {
  
  return route.path === "/" // 假设是首页
})
const pageTitle = ref("其他页面标题")

// 获取 header 元素
const header = ref(null)

// 向父组件传递 header 的高度
const emit = defineEmits(['updateHeaderHeight'])

onMounted(async () => {
  // 使用 nextTick 确保 DOM 完全更新后再获取元素高度
  await nextTick(() => {
    const headerHeight = header.value ? header.value.offsetHeight : 0
    emit('updateHeaderHeight', headerHeight) // 向父组件发送高度
  })
})
</script>

<style scoped lang="scss">
header {
  background: var(--bg-color);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    text-indent: 101%;
    text-wrap: nowrap;
    overflow: hidden;
    height: 70px;
    width: 116px;
    background-image: url(../assets/icons/logo白.png);
  }

  nav {
    ul {
      list-style-type: none;
      text-align: center;
      
      li {
        display: inline-block;
        margin: 0 20px;

        a {
          padding: .5rem 0;
          color: var(--ivory-white);
          text-decoration: none;
          font-size: 18px;
          transition: var(--transition);
          display: block;
          border: 1px solid #000;

          &:hover {
            color: var(--primary-color);
            transform: scale(1.2);
          }
        }
      }
    }
  }
}
</style>
