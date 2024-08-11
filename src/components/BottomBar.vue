
<script setup>

import { ref } from 'vue';

import HomeIcon from '@/images/bottomBar-home.svg';
import TravelIcon from '@/images/bottomBar-travel.svg';
import ChatIcon from '@/images/bottomBar-chat.svg';
import GameIcon from '@/images/bottomBar-game.svg';
import MeIcon from '@/images/bottomBar-me.svg';


// 导航栏项目的数据
const navItems = ref([
  { name: '首页', icon: HomeIcon, route: '/home' },
  { name: '旅程', icon: TravelIcon, route: '/trip' },
  { name: '聊天', icon: ChatIcon, route: '/chat' },
  { name: '游戏', icon: GameIcon, route: '/game' },
  { name: '我的', icon: MeIcon, route: '/profile' },
]);

// 模拟路由导航的函数
const navigate = (route) => {
  console.log('Navigating to:', route);
  // 在实际应用中，使用 Vue Router 来切换页面
  // this.$router.push(route);
};
</script>


<template>
  <div class="bottom-nav">
    <div class="nav-item" v-for="item in navItems" :key="item.name" @click="navigate(item.route)">
      <img :src="item.icon" :alt="item.name" class="nav-icon" />
      <span class="nav-text">{{ item.name }}</span>
    </div>
  </div>
</template>


<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 1.2vh 0;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
}

.nav-icon {
  width: 6vw; /* 使用视口宽度来调整图标大小 */
  height: 6vw;
  margin-bottom: 1vh; /* 使用视口高度来调整间距 */
}

.nav-text {
  font-size: 3vw; /* 使用视口宽度来调整字体大小 */
  color: #333;
}

@media (min-width: 768px) {
  .nav-icon {
    width: 24px; /* 在较大屏幕上设置固定大小 */
    height: 24px;
  }

  .nav-text {
    font-size: 12px; /* 在较大屏幕上设置固定字体大小 */
  }
}
</style>
