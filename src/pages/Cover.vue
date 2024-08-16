
<script setup>

import { ref } from 'vue';

import { onMounted } from 'vue';
import { useStore } from 'vuex';

import coverImage from '@/images/cover-image.svg';
import coverImage2 from '@/images/cover-image2.svg';
import coverImage3 from '@/images/cover-image3.svg';

// 按需引入 Element Plus
import { ElCarousel, ElCarouselItem } from 'element-plus';
import 'element-plus/es/components/carousel/style/css';
import 'element-plus/es/components/carousel-item/style/css';


const images = ref([coverImage, coverImage2, coverImage3]);


// TODO: 更换为真实 API 时 使用如下代码渲染页面数据
// const store = useStore();
// // 在组件挂载时获取数据
// onMounted(() => {
//   store.dispatch('cover/getCarouselData'); // 调用 Vuex 的 action 来获取数据
// });
// // 计算属性来映射 Vuex 状态
// const items = computed(() => store.state.cover.carouselData); // 将数据绑定到 items

// 定义图片和文字内容
const items = ref([
  { image: coverImage, text: '随时通过AI助手解决你的<br>旅行问题' },
  { image: coverImage2, text: '轻松计划你的新加坡旅程' },
  { image: coverImage3, text: '打卡可以获得优惠券、解锁小游戏以<br>及尝试AR体验，一举三得！' }
]);
</script>


<template>

  <div class="container">

    <div class="image-wrapper">
      <el-carousel indicator-position="outside" :height="'50vh'" direction="horizontal">
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <div class="carousel-content">
            <img :src="item.image" alt="Travel Image" class="circle-image">
            <p class="carousel-text" v-html="item.text"></p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <button class="primary-button">开始尝试设计旅程</button>
    <button class="secondary-button">跳过</button>

  </div>

</template>


<style scoped>
/* 容器样式 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10vh 5vw;
  box-sizing: border-box;
}

/* 图片圆形样式 */
.image-wrapper {
  width: 80vw; /* 使用视口宽度来设置宽度 */
  max-width: 400px; /* 限制最大宽度 */
  margin-bottom: 13vh;
}

.circle-image {
  width: 100%;
  border-radius: 50%;
  object-fit: cover; /* 确保图片按比例填充容器 */
}

/* 轮播内容样式 */
.carousel-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px; /* 添加内边距，防止文字被裁剪 */
}

/* 文字样式 */
.carousel-text {
  font-family: 'PingFangSC-Medium', 'Arial', sans-serif;
  font-size: 4vw; /* 使用视口宽度作为基准 */
  color: #333;
  text-align: center;
  line-height: 1.5;
  margin-top: 30px;
  max-width: 90%;
}

/* 按钮样式 */
.primary-button {
  width: 50vw;
  max-width: 300px;
  padding: 0.8vh 2vw;
  font-size: 3.5vw;
  letter-spacing: 0.2em; /* 相对于字体大小的字母间距 */
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  color: white;
  background-image: linear-gradient(to right, #4facfe, #a6c1ee, #fbc2eb);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 0.1vh;
}

.secondary-button {
  width: 70vw;
  max-width: 300px;
  padding: 1vh 2vw;
  font-size: 3.5vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  color: #666;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* 媒体查询 */
@media (min-width: 768px) {
  .carousel-text {
    font-size: 18px;
  }

  .primary-button, .secondary-button {
    font-size: 16px;
  }
}
</style>
