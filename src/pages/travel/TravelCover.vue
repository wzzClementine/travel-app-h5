
<script setup>

import { ref } from 'vue';

import { useRouter } from 'vue-router' // 导入 useRouter

import ChatBotIcon from "@/components/ChatBotIcon.vue"; // 引入图标组件

import coverImage from '@/images/cover-image.svg';
import coverImage2 from '@/images/cover-image2.svg';
import coverImage3 from '@/images/cover-image3.svg';

// 按需引入 Element Plus
import { ElCarousel, ElCarouselItem } from 'element-plus';
import 'element-plus/es/components/carousel/style/css';
import 'element-plus/es/components/carousel-item/style/css';

// 示例图片和文字内容
const items = ref([
  { image: coverImage, text: '随时通过AI助手解决你的<br>旅行问题' },
  { image: coverImage2, text: '轻松计划你的新加坡旅程' },
  { image: coverImage3, text: '打卡可以获得优惠券、解锁小游戏以<br>及尝试AR体验，一举三得！' }
]);

const router = useRouter();
// 定义导航函数
const navigateToPage = () => {
  router.push('/plan-creation/plan-selection') // 替换为目标路由路径
}

</script>


<template>
  <div class="page-container">

    <!-- 图标按钮 -->
    <div class="icon-wrapper">
      <ChatBotIcon />  <!-- 使用引入的图标组件 -->
    </div>

    <!-- 圆形图片走马灯 -->
    <div class="image-wrapper">
      <el-carousel indicator-position="outside" :height="'78vw'" direction="horizontal">
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <div class="carousel-content">
            <img :src="item.image" alt="Travel Image" class="circle-image">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 按钮 -->
    <button class="primary-button" @click="navigateToPage">开始计划我的旅程</button>

  </div>
</template>


<style scoped>
/* 主页面容器，垂直居中 */
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%; /* 确保容器高度等于视口高度 */
  overflow: hidden; /* 禁用滚动条 */
  padding: 0 2vw;
  box-sizing: border-box;
  position: relative;
}

/* 图标按钮样式 */
.icon-wrapper {
  position: fixed; /* 将图标位置固定 */
  top: 10vh;
  right: 5vw;
  z-index: 1000; /* 确保图标在页面上层显示 */
}

/* 图片走马灯容器样式 */
.image-wrapper {
  width: 70vw;
  height: 70vw;
  margin: 18vh 0 0 0;
}

.circle-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* 按钮样式 */
.primary-button {
  width: 52vw;
  padding: 1vh 0;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  font-size: 3.5vw;
  letter-spacing: 0.1em; /* 相对于字体大小的字母间距 */
  color: white;
  background-image: linear-gradient(to right, #4facfe, #a6c1ee, #fbc2eb);
  border: none;
  border-radius: 10vw;
  cursor: pointer;
  margin-bottom: 20vh; /* 增加下方的 margin 以避免导航栏遮挡 */
}
</style>
