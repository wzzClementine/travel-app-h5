
<script setup>
import coverImage from '@/images/cover-image.svg'
import coverImage2 from '@/images/cover-image2.svg'
import coverImage3 from '@/images/cover-image3.svg'

// 按需引入 Element Plus
import { ElCarousel, ElCarouselItem } from 'element-plus';
import 'element-plus/es/components/carousel/style/css';
import 'element-plus/es/components/carousel-item/style/css';

import { ref } from 'vue';

const images = ref([coverImage, coverImage2, coverImage3]);

// 定义图片和文字内容
const items = ref([
  { image: coverImage, text: '这是第一张图片的描述文字' },
  { image: coverImage2, text: '这是第二张图片的描述文字' },
  { image: coverImage3, text: '这是第三张图片的描述文字' }
]);

</script>

<template>

  <div class="container">

    <div class="image-wrapper">
      <el-carousel indicator-position="outside" height="300px" direction="horizontal">
        <el-carousel-item v-for="(item, index) in items" :key="index">
          <div class="carousel-content">
            <img :src="item.image" alt="Travel Image" class="circle-image">
            <p class="carousel-text">{{ item.text }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <button class="primary-button">开始尝试设计旅程</button>
    <button class="secondary-button">跳过</button>

  </div>

</template>

<style scoped>

.carousel-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 容器样式 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}


/* 图片圆形样式 */
.image-wrapper {
  width: 70%;
  margin-bottom: 20px;
}

.circle-image {
  width: 100%;
  border-radius: 50%;
}

/* 描述文字样式 */
.description {
  font-size: 16px;
  color: #333;
  text-align: center;
  //margin-bottom: 20px;
}

/* 按钮样式 */
.primary-button {
  width: 60%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-image: linear-gradient(to right, #4facfe, #a6c1ee, #fbc2eb);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  //margin-bottom: 15px;
}

.secondary-button {
  width: 80%;
  padding: 10px;
  font-size: 16px;
  color: #666;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
