
<script setup>

import { ref } from 'vue';

import ChatBotIcon from "@/components/ChatBotIcon.vue"; // 引入图标组件

import coverImage from '@/images/cover-image.svg';

import SwitchBar from "@/components/SwitchBar.vue";

const customPlansUrl = "/plan-creation/input-plan-title";
const systemPlansUrl = "/travel/system-plans";


// 按钮文案
const description = ref("XXX 可以帮助你在线生成旅程计划");
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

    <!-- 圆形图片 -->
    <img :src="coverImage" alt="Plan Image" class="image-placeholder">

    <!-- 开始计划按钮 -->
    <button class="primary-button" @click="navigateToPlanTitleInput">开始计划我的旅程</button>

    <!-- 描述文字 -->
    <text class="description">{{ description }}</text>
  </div>
</template>

<style scoped>
/* 主页面容器，居中对齐 */
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  padding: 4vh 7vw;
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

/* 按钮切换区样式 */
.button-group {
  display: flex;
  justify-content: center;
  width: 85vw;
  margin-bottom: 5vh;
  margin-top: 3vh;  /* 新增的 margin-top 来控制按钮区域往下移动 */
  background: linear-gradient(to right, #b3d7ff, #ffe7f3); /* 更浅的渐变颜色 */
  border-radius: 4vw;
  padding: 0.7vh 0.6vw 0.7vh 0.6vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

/* 按钮样式 */
.tab-button {
  flex: 1;
  border: none;
  background: none;
  color: #444444; /* 默认状态下的文字颜色 */
  font-size: 3.3vw;
  cursor: pointer;
  padding: 1.5vh 0;
  border-radius: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-button.active {
  background-color: #fff;
  color: #0074C6;
}

/* 图标样式 */
.tab-icon {
  width: 4vw; /* 根据需要调整图标大小 */
  height: auto;
  margin-right: 2vw; /* 调整图标和文字之间的间距 */
}

/* 圆形图片样式 */
.image-placeholder {
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 7vh;
  margin-top: 3vh;
}

/* 开始计划按钮样式 */
.primary-button {
  width: 48vw;
  padding: 1vh 0;
  font-size: 3.5vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  color: white;
  letter-spacing: 0.1em; /* 相对于字体大小的字母间距 */
  background-image: linear-gradient(to right, #4facfe, #a6c1ee, #fbc2eb);
  border: none;
  border-radius: 10vw;
  cursor: pointer;
  margin-bottom: 1vh; /* 缩小下方的 margin */
}

/* 描述文字样式 */
.description {
  font-size: 3vw;
  color: #444444;
  text-align: center;
  letter-spacing: 0.1em; /* 相对于字体大小的字母间距 */
  margin-top: 1vh; /* 增加上方的 margin，或移除以贴近按钮 */
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}
</style>
