
<script setup>

import { ref, watch } from 'vue';

import ChatBotIcon from "@/components/ChatBotIcon.vue"; // 引入图标组件

import right from "@/images/right-white.svg";

const tripName = ref(''); // Store the trip name input


// 监听 input 的变化
watch(tripName, (newValue) => {
  console.log(newValue); // 当 tripName 变化时，自动打印到控制台
});

</script>

<template>
  <div class="page-container">

    <!-- 顶部标题 -->
    <h1 class="page-title">旅程名称</h1>

    <!-- 图标按钮 -->
    <div class="icon-wrapper">
      <ChatBotIcon />
    </div>

    <!-- 输入框 -->
    <input
        v-model="tripName"
        class="trip-name-input"
        type="text"
        placeholder="请为你的旅程取个名字"
    />

    <!-- 输入框描述 -->
    <p class="input-description">名字稍后也可以更改</p>

    <!-- 按钮 -->
    <button class="primary-button">
      下一步
      <img :src="right" alt="Arrow Icon" class="button-icon"/>
    </button>

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

/* 页面标题 */
.page-title {
  font-size: 7vw;
  margin-top: 5vh;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  color: #333;
  text-align: left;
  width: 100%;
  padding-left: 2vw;
}

/* 图标按钮样式 */
.icon-wrapper {
  position: absolute;
  top: 10vh;
  right: 5vw;
}

/* 输入框描述文字样式 */
.input-description {
  font-size: 3vw;
  color: #EE92B7; /* 设置文字颜色 */
  text-align: left;
  background-color: #FFF0F6; /* 设置背景颜色 */
  padding: 0.8vh 3vw; /* 添加内边距 */
  border-radius: 3vw; /* 添加圆角 */
  margin-top: 2vh;
  //width: fit-content; /* 让背景颜色包裹文字 */
  width: 100%;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}


/* 输入框样式 */
.trip-name-input {
  width: 100%;
  //padding: 0vw;
  padding-left: 2vw;
  font-size: 4.4vw;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  margin-top: 6vh;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

/* 设置 placeholder 的字体颜色 */
.trip-name-input::placeholder {
  color: #CAC8C8; /* 修改为你想要的颜色 */
  opacity: 1; /* 确保 placeholder 颜色不被透明度影响 */
}

/* 按钮样式 */
.primary-button {
  width: 45vw;
  padding: 1vh 0;
  font-size: 4vw;
  color: white;
  background-image: linear-gradient(to right, #4facfe, #a6c1ee, #fbc2eb);
  border: none;
  border-radius: 4vw;
  cursor: pointer;
  margin-top: 45vh;
  text-align: center; /* 确保按钮文本居中对齐 */
  display: flex; /* 使用 flex 布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  gap: 3vw; /* 添加图标与文字之间的间距 */
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

/* 图标样式 */
.button-icon {
  width: 2vw;
  height: auto;
}
</style>
