
<script setup>

import searchIcon from "@/images/search.svg";
import fullStar from "@/images/systemPlan-full-star.svg";
import emptyStar from "@/images/systemPlan-empty-star.svg";

import placeImage from "@/images/place.png";

import ChatBotIcon from "@/components/ChatBotIcon.vue"; // 引入图标组件

import SwitchBar from "@/components/SwitchBar.vue";


const customPlansUrl = "/plan-creation/input-plan-title";
const systemPlansUrl = "/travel/system-plans";

const trips = [
  {
    duration: '1日游',
    destinations: '鱼尾狮/滨海湾/甘榜格南/小印度'
  },
  {
    duration: '1日游',
    destinations: '鱼尾狮/滨海湾/甘榜格南/小印度'
  },
  {
    duration: '1日游',
    destinations: '鱼尾狮/滨海湾/甘榜格南/小印度'
  },
  {
    duration: '1日游',
    destinations: '鱼尾狮/滨海湾/甘榜格南/小印度'
  }
];

</script>

<template>
  <div class="page-container">

    <!-- 顶部 -->
    <h1 class="page-title">我的旅程</h1>

    <!-- 图标按钮 -->
    <div class="icon-wrapper">
      <ChatBotIcon />  <!-- 使用引入的图标组件 -->
    </div>

    <!-- 按钮切换区 -->
    <SwitchBar :customPlansUrl="customPlansUrl" :systemPlansUrl="systemPlansUrl"/>

    <!-- 搜索框 -->
    <div class="search-container">
      <input type="text" class="search-input" placeholder="搜索旅程库" />
      <img :src="searchIcon" alt="搜索" class="search-icon" />
    </div>

    <!-- 旅程列表 -->
    <div class="trip-card-wrapper">
      <div v-for="(item, index) in trips" :key="index" class="trip-card">
        <img  class="trip-image"  alt :src="placeImage" />
        <div class="trip-info">
          <p class="trip-title">【{{ item.duration }}】{{ item.destinations }}</p>
          <div class="rating">
            <img v-for="n in 4" :key="n" :src="fullStar" alt="星星" class="star" />
            <img :src="emptyStar" alt="半星" class="star" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  padding: 4vh 5vw;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
}

/* 页面标题，左对齐 */
.page-title {
  font-size: 7vw;
  margin-top: 5vh;
  margin-bottom: 4vh;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  color: #333;
  text-align: left;  /* 标题左对齐 */
  width: 100%;  /* 确保标题占据整个宽度 */
  padding-left: 2vw;  /* 增加左侧内边距 */
}

/* 图标按钮样式 */
.icon-wrapper {
  position: absolute;
  top: 10vh;
  right: 5vw;
}

.search-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-bottom: 2vh;
  width: 100%;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

.search-input {
  background-color: #F9F9F9;
  width: 95%;
  padding: 1.8vh 1vw 1.8vh 15vw;
  font-size: 4vw;
  border: 1px solid #F9F9F9;
  border-radius: 5vw;
}

.search-input::placeholder {
  color: #CAC8C8;
  font-size: 4.3vw;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 7.5vw;
  transform: translateY(-50%);
  width: 6vw;
  height: 6vw;
}

.trip-card-wrapper {
  padding: 0 1vw 2.5vh 1vw;
  max-height: 50vh; /* 设置最大高度为屏幕的50% */
  overflow-y: auto; /* 当内容溢出时自动显示竖直滚动条 */
  //padding: 1em; /* 内边距，确保内容不贴着边缘 */
  //border: 1px solid #ccc; /* 边框，便于查看div区域 */
  box-sizing: border-box; /* 确保 padding 包含在 max-height 内 */
}

.trip-card {
  display: flex;
  align-items: center;
  padding: 3vw 0;
  border-bottom: 1px solid #eee;
}

.trip-image {
  width: 50vw;
  height: 22vw;
  background-color: #ccc;
  border-radius: 3vw;
}

.trip-info {
  flex-grow: 1;
  margin-left: 4vw;
}

.trip-title {
  font-family: 'PingFangSC-Medium', 'Arial', sans-serif;
  font-size: 4vw;
  margin-bottom: 0.5vh;
}

p {
  margin-bottom: 0;
}

.rating {
  display: flex;
}

.star {
  width: 6vw;
  height: 6vw;
  margin-right: 0.5vw;
}


</style>