
<script setup>


import BottomNav from '@/components/BottomBar.vue';



</script>

<template>
  <main class="app-container">

    <!-- 路由视图，用于显示当前激活的路由组件 -->
    <router-view class="router-view" />

    <!-- 添加一个空 div 来增加间距 -->
    <div style="height: 2vh;"></div>

    <!-- 底部导航栏 -->
    <BottomNav class="bottom-nav" />
  </main>
</template>

<style scoped>
/* 顶部 header 样式 */
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* 确保主容器占据整个视口高度并使用 flex 布局 */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
}

/* 路由视图容器，确保占据除导航栏外的剩余空间 */
.router-view {
  flex-grow: 1;
  overflow-y: auto;  /* 如果内容过多，则启用滚动 */
  padding-bottom: 10vh; /* 确保内容不会被底部导航栏遮挡 */
  box-sizing: border-box;
}

/* 底部导航栏样式 */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2vh 0; /* 调整 padding 增加空白 */
  height: 10vh; /* 确保导航栏的高度自适应 */
  //margin-top: 2vh;
}

/* 自适应屏幕大小的媒体查询 */
@media (min-width: 768px) {
  .bottom-nav {
    padding: 1.5vh 0; /* 在较大屏幕上设置适当的 padding */
    height: 8vh; /* 在较大屏幕上设置合适的导航栏高度 */
  }

  .nav-icon {
    width: 24px; /* 设置较大屏幕上图标的大小 */
    height: 24px;
  }

  .nav-text {
    font-size: 12px; /* 设置较大屏幕上文字的大小 */
  }
}

@media (min-width: 1024px) {
  .bottom-nav {
    padding: 1vh 0; /* 在更大屏幕上减少 padding */
    height: 6vh; /* 在更大屏幕上设置合适的导航栏高度 */
  }

  .nav-icon {
    width: 20px; /* 在更大屏幕上进一步调整图标大小 */
    height: 20px;
  }

  .nav-text {
    font-size: 10px; /* 在更大屏幕上调整文字大小 */
  }
}
</style>
