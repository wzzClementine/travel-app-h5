
<script setup>

import { ref } from 'vue';

import BottomNav from '@/components/BottomBar.vue';

import coverImage1 from '@/images/index-image1.svg';
import coverImage2 from '@/images/index-image1.svg';
import coverImage3 from '@/images/index-image1.svg';

import right from '@/images/right.svg';

import spot from '@/images/spots.png';
import plan from '@/images/plan.png';
import test from '@/images/test.png';

// 按需引入 Element Plus
import { ElCarousel, ElCarouselItem } from 'element-plus';
import 'element-plus/es/components/carousel/style/css';
import 'element-plus/es/components/carousel-item/style/css';

const images = ref([coverImage1, coverImage2, coverImage3]);

const spots = ref([
  { name: '牛车水', image: spot },
  { name: '滨海湾花园', image: spot },
  { name: '新加坡动物园', image: spot },
  { name: '裕廊飞禽公园', image: spot },  // 你可以替换为不同的图片
  { name: '乌节路', image: spot }         // 你可以替换为不同的图片
]);

const strategies = ref([
  { name: '新加坡一日游', image: plan },
  { name: '新加坡两日游', image: plan }
]);

// 示例活动数据
const activities = ref([
  {
    name: '限时店铺打卡活动',
    points: 5,
    time: '2024.7.3-2025.7.3',
    image: test // 替换成实际的图片路径
  },
  {
    name: '限时店铺打卡活动',
    points: 5,
    time: '2024.7.3-2025.7.3',
    image: test // 替换成实际的图片路径
  }
]);

// TODO: 更换为真实 API 时 使用如下代码渲染页面数据
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

const store = useStore();
// 获取状态
const dataset = computed(() => store.state.home.data);

// 调用 actions
const getAllData = () => {
  store.dispatch('home/getAllData');
};

onMounted(() => {
  getAllData() // 组件挂载时获取页面数据进行渲染
});

</script>


<template>
  <div class="page-container">

    <!-- 顶部轮播图 -->
    <div class="carousel-wrapper">

      <el-carousel type="card" indicator-position="outside" :height="'18vh'" direction="horizontal">
        <el-carousel-item class="carousel-item" v-for="(item, index) in images" :key="index">
          <img :src="item" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>

    </div>

    <!-- 景点介绍 -->
    <div class="section1">
      <div class="section-header">
        <h3>新加坡景点介绍</h3>
        <img src="@/images/right.svg" alt="More" class="see-more-icon"/>
      </div>
      <div class="scroll-container" style="padding-left: 4vw">
        <div class="card" v-for="(spot, index) in spots" :key="index">
          <img :src="spot.image" alt="Spot Image" class="card-image" />
          <div class="card-title">{{ spot.name }}</div>
        </div>
      </div>
    </div>

    <!-- 旅游攻略 -->
    <div class="section">
      <div class="section-header">
        <h3>新加坡旅游攻略</h3>
        <img :src="right" alt="More" class="see-more-icon"/>
      </div>
      <div class="grid-container">
        <div class="grid-item" v-for="(strategy, index) in strategies" :key="index">
          <img :src="strategy.image" alt="Strategy Image" class="grid-image" />
          <div class="grid-title">{{ strategy.name }}</div>
        </div>
      </div>
    </div>

    <!-- 打卡活动 -->
    <div class="section">
      <div class="section-header">
        <h3>限时打卡活动</h3>
        <img :src="right" alt="More" class="see-more-icon"/>
      </div>
      <div class="list-container">
        <div class="list-item" v-for="(activity, index) in activities" :key="index">
          <img :src="activity.image" alt="Activity Image" class="list-image" />
          <div class="list-content">
            <div class="list-title">{{ activity.name }}</div>
            <div class="list-details">积分奖励: {{ activity.points }}</div>
            <div class="list-time">活动时间: <br>{{ activity.time }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <div class="bottom-nav">
      <BottomNav />
    </div>

  </div>
</template>


<style scoped>
/* 页面整体容器 */
.page-container {
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  //padding: 0 2vw;
  padding-bottom: 10vh; /* 为导航栏留出空间 */
  -webkit-overflow-scrolling: touch; /* 使滚动更平滑 */
  scrollbar-width: none; /* Firefox 隐藏滚动条 */
  -ms-overflow-style: none; /* IE 和 Edge 隐藏滚动条 */
}

.page-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari 和 Opera 隐藏滚动条 */
}

.carousel-wrapper {
  width: 100%;
  margin-bottom: 4vh;
}


/* 确保轮播项没有内边距或外边距 */
.carousel-item {
  padding: 0 !important; /* 强制移除所有内边距 */
  margin: 0 !important;  /* 强制移除所有外边距 */
}

/* 调整轮播图图片的样式 */
.carousel-image {
  width: 102%; /* 放大图片宽度 */
  //height: 30vh; /* 增加图片高度 */
  //object-fit: cover; /* 确保图片按比例缩放 */
  //margin: 0 auto; /* 将图片居中 */
  //border-radius: 10px;
}

.section {
  //padding: 0; /* 确保整个部分没有内边距 */
  //margin: 0; /* 确保整个部分没有外边距 */
}

/* 区块头部样式 */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4vw;
  padding-right: 4vw;
  margin-bottom: 1vh;
  font-family: 'PingFangSC-Medium', 'Arial', sans-serif;
}

h3 {
  font-size: 4vw;
  margin: 0;
}

.see-more-icon {
  width: 5vw; /* 设置图标的宽度 */
  height: auto; /* 自动调整高度以保持比例 */
}

/* 景点介绍 */
.scroll-container {
  display: flex;
  overflow-x: auto; /* 启用横向滚动 */
  gap: 2vw; /* 卡片之间的间距 */
  padding-left: 2vw; /* 左边添加2vw的间距 */
  padding-right: 0; /* 右边没有间距 */
  /* 隐藏滚动条的代码 */
  scrollbar-width: none; /* 隐藏Firefox中的滚动条 */
  -ms-overflow-style: none; /* 隐藏IE和Edge中的滚动条 */
}

.scroll-container::-webkit-scrollbar {
  display: none; /* 隐藏Chrome、Safari和Opera中的滚动条 */
}


.card {
  min-width: 25vw; /* 固定卡片宽度 */
  max-width: 50vw; /* 确保卡片宽度不变 */
  background-color: #f0f0f0;
  border-radius: 10px;
  padding-bottom: 1vh;
  //padding: 0vh 1vw;
  text-align: left; /* 文字靠左对齐 */
  flex-shrink: 0; /* 禁止卡片缩小 */
  overflow: hidden; /* 确保内容不会溢出 */
  margin-bottom: 4vh;
}

.card:last-child {
  margin-right: 0; /* 确保最后一个卡片没有右边距 */
}

.card-image {
  width: 100%;
  height: 12vh;
  object-fit: cover; /* 保持图片比例，并裁剪多余部分 */
  border-radius: 10px 10px 0 0; /* 圆角只应用于图片的顶部边缘 */
  margin: 0; /* 移除图片的所有边距 */
}

.card-title {
  font-size: 3vw;
  color: #333;
  margin-top: 1vh;
  margin-left: 3vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5vw;
  margin-bottom: 4vh;
}

.grid-item {
  text-align: left; /* 文字靠左对齐 */
}

.grid-image {
  width: 100%;
  height: 30vh;
  margin-bottom: 1vh;
}

.grid-title {
  font-size: 3vw;
  color: #333;
  //margin-top: 1vh;
  margin-left: 3vw;
  background-color: transparent; /* 确保标题没有背景颜色 */
}

/* 打卡活动 */
.list-container {
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding: 0;
  margin-left: 4vw;
}

.list-item {
  display: flex;
  //align-items: center;
  border-radius: 8px;
}

.list-image {
  width: 20vw;
  height: 27vw;
  //border-radius: 8px;
  margin-right: 6.2vw;
  object-fit: cover;
}

.list-content {
  display: flex;
  flex-direction: column;
}

.list-title {
  font-size: 4vw;
  font-family: 'PingFangSC-Medium', 'Arial', sans-serif;
  font-weight: bold;
  margin-bottom: 1vh;
}

.list-details,
.list-time {
  font-size: 3vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  margin-bottom: 1vh;
  //color: #666;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  //height: 10vh; /* 设定合适的高度 */
  //background-color: #ffffff; /* 设置导航栏背景颜色 */
  display: flex;
  justify-content: space-around; /* 平均分布导航栏中的项目 */
  align-items: center; /* 垂直居中导航栏中的项目 */
  //box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  z-index: 1000; /* 确保导航栏在页面最上层 */
}

</style>
