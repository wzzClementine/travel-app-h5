
<script setup>

import { ref } from 'vue';
import ChatBotIcon from "@/components/ChatBotIcon.vue"; // 引入图标组件

const tripName = ref(''); // Store the trip name input

</script>

<template>
  <div class="page-container">

    <!-- 顶部标题 -->
    <h1 class="page-title">旅程名称</h1>

    <!-- 图标按钮 -->
    <div class="icon-wrapper">
      <ChatBotIcon />
    </div>

    <!-- 输入框描述 -->
    <p class="input-description">请为你的旅程取个名字</p>

    <!-- 输入框 -->
    <input
        v-model="tripName"
        class="trip-name-input"
        type="text"
        placeholder="名字稍后也可更改"
    />

    <!-- 按钮 -->
    <button class="primary-button">下一步 &gt;</button>

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
  font-family: 'PingFangSC-Medium', 'Arial', sans-serif;
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
  font-size: 4vw;
  color: #999;
  text-align: left;
  width: 100%;
  padding-left: 2vw;
  margin-top: 4vh;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

/* 输入框样式 */
.trip-name-input {
  width: 90%;
  padding: 3vw;
  font-size: 4vw;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  margin-top: 2vh;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

/* 按钮样式 */
.primary-button {
  width: 50vw;
  padding: 2vh 0;
  font-size: 4vw;
  color: white;
  background-image: linear-gradient(to right, #4facfe, #a6c1ee, #fbc2eb);
  border: none;
  border-radius: 10vw;
  cursor: pointer;
  margin-top: 10vh;
}
</style>
