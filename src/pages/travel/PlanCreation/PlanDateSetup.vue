<script setup>

import { ref } from 'vue';

import { useRouter } from 'vue-router' // 导入 useRouter

import ChatBotIcon from "@/components/ChatBotIcon.vue"; // 引入图标组件
import navigation from "@/images/plan-destination-setup-navigation.svg";
import edit from "@/images/plan-destination-setup-edit.svg";
import list from "@/images/plan-destination-setup-list.svg";
import up from "@/images/up.svg";
import add from "@/images/add.svg";
import date from "@/images/plan-date-setup-date.svg";
import time from "@/images/plan-date-setup-time.svg";

import deleteIcon from "@/images/plan-destination-setup-delete.svg";

// 按需引入 Element Plus
import { ElDatePicker, ElCard } from 'element-plus';
import 'element-plus/es/components/date-picker/style/css';
// import 'element-plus/es/components/card/style/css';

const tripName = ref("AAA旅程"); // 旅行名称
const destination = ref("环球旅程"); // 目的地输入框
const isEditing = ref(false); // 标识是否处于编辑模式

const value1 = ref('')

// 点击三角图标切换显示状态
// 控制是否显示日期和时间选择器
const showDateTimePicker = ref(true);
const toggleDateTimePicker = () => {
  showDateTimePicker.value = !showDateTimePicker.value;
}


const router = useRouter();
// 定义导航函数
const navigateToPage = () => {
  router.push('/plan-creation/plan-destination-setup') // 替换为目标路由路径
}

const navigateToPlanPreview = () => {
  router.push('/plan-creation/plan-preview') // 替换为目标路由路径
}

</script>

<template>
  <div class="page-container">

    <!-- 图标按钮 -->
    <div class="icon-wrapper">
      <ChatBotIcon />
    </div>

    <!-- 顶部标题和修改按钮 -->
    <div class="title-group">
      <div class="title-wrapper">
        <h1 v-if="!isEditing" class="page-title">{{ tripName }}</h1>
        <input
            v-if="isEditing"
            v-model="tripName"
            class="trip-name-input"
            type="text"
        />
      </div>
      <div class="edit-button" @click="startEditing">
        <img :src="edit" alt="修改">
        修改
      </div>
    </div>

    <!-- 输入框 -->
    <div class="input-group">
      <img :src="navigation"  alt="Place Icon" class="input-icon">
      <input
          v-model="destination"
          class="destination-input"
          type="text"
          disabled
      />
      <img
          :src="showDateTimePicker ? up : list"
          alt="Dropdown"
          class="dropdown-icon"
          @click="toggleDateTimePicker"
      >
    </div>

    <div v-show="showDateTimePicker" class="date-picker-wrapper">
      <div>
        <text class="date-label">出发日期</text>
        <a-date-picker v-model:value="value1" style="width: 65vw"/>
      </div>
      <div style="margin-top: 1.5vh">
        <text class="date-label">出发时间</text>
        <a-time-picker v-model:value="value1" style="width: 65vw" />
      </div>
    </div>


    <!-- 输入框 -->
    <div class="input-group">
      <img :src="navigation"  alt="Place Icon" class="input-icon">
      <input
          v-model="destination"
          class="destination-input"
          type="text"
          disabled
      />
      <img
          :src="showDateTimePicker ? up : list"
          alt="Dropdown"
          class="dropdown-icon"
          @click="toggleDateTimePicker"
      >
    </div>

    <div v-show="showDateTimePicker" class="date-picker-wrapper">
      <div>
        <text class="date-label">出发日期</text>
        <a-date-picker v-model:value="value1" style="width: 65vw"/>
      </div>
      <div style="margin-top: 1.5vh">
        <text class="date-label">出发时间</text>
        <a-time-picker v-model:value="value1" style="width: 65vw" />
      </div>
    </div>

    <div class="button-container" @click="navigateToPage">
      <button class="custom-button">
        <span class="icon">+</span>
        <span>添加景点</span>
      </button>

      <button class="custom-button" @click="navigateToPage">
        <span class="icon">+</span>
        <span>添加餐厅</span>
      </button>
    </div>


    <!-- 底部按钮 -->
    <div class="bottom-buttons">
      <button class="delete-button">
        <img :src="deleteIcon" alt="删除" class="button-icon" />
      </button>
      <button class="generate-button" @click="navigateToPlanPreview">生成旅程</button>
    </div>

  </div>

</template>

<style scoped>
/* 主页面容器，居中对齐 */
.page-container {
  display: flex;
  flex-direction: column;
  padding: 7.5vh 7vw;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
}

/* 标题和修改按钮的容器，设置为flex以便对齐 */
.title-group {
  display: flex;
  align-items: center;  /* 垂直居中对齐 */
  justify-content: space-between; /* 在水平方向上分开两边 */
  width: 100%;
  margin-top: 4vh;
  margin-bottom: 1.5vh;
}

/* 标题和输入框的包装器，确保始终对齐 */
.title-wrapper {
  display: flex;
  align-items: center;
}

/* 页面标题 */
.page-title {
  font-size: 7vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  color: #333;
  text-align: left;
  width: auto;
  padding-left: 1vw;
  padding-top: 1.2vh;
  //font-weight: 600;
  //line-height: 1.2; /* 确保行高与按钮对齐 */
}

/* 修改按钮样式 */
.edit-button {
  display: flex;
  align-items: center;
  font-size: 3.2vw;
  color: #444444;
  cursor: pointer;
  //line-height: 1.5; /* 确保行高与标题对齐 */
  text-decoration: underline;
}

.edit-button img {
  width: 3.5vw;
  margin-right: 1vw;
}

/* 输入框组样式 */
.input-group {
  display: flex;
  align-items: center;
  padding: 1vh 0;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  //margin-top: 5vh;
  border-bottom: 1px solid #ccc; /* 添加下横线 */
  margin-top: 2vh;
}

.input-group.no-border {
  border-bottom: none; /* 编辑模式下不显示边框 */
}

/* 输入框图标样式 */
.input-icon {
  width: 5vw;
  margin-right: 2vw;
}

/* 输入框样式 */
.destination-input {
  flex-grow: 1;
  border: none;
  font-size: 4.2vw;
  outline: none;
  color: #666;
}

.destination-input::placeholder {
  color: #CAC8C8;
}

.destination-input:disabled {
  background-color: transparent; /* 去掉背景颜色 */
  //color: #666; /* 设置文字颜色 */
  //border: 1px solid #ccc; /* 如果你想保留边框 */
  cursor: not-allowed; /* 指定鼠标样式为“不可操作” */
}

/* 编辑状态下的标题输入框样式 */
.trip-name-input {
  width: 70%; /* 确保输入框占据合适的宽度 */
  font-size: 6vw;
  padding-left: 1vw;
  padding-top: 0.5vh; /* 使文本在垂直方向上居中 */
  padding-bottom: 0.5vh; /* 使文本在垂直方向上居中 */
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  background-color: transparent;
  color: #333;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  line-height: 1.2; /* 确保行高与标题一致 */
}

.location-info h3 {
  font-size: 4vw;
  margin: 0;
  color: #444444;
  font-family: 'PingFangSC-Semibold', 'Arial', sans-serif;
  letter-spacing: 0.3vw;
}

.location-info p {
  font-size: 3vw;
  color: #444444;
  margin-top: 0.4vh;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

.date-label {
  margin-right: 6vw;
}

.date-picker-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  //align-items: center;
  margin-top: 2.5vh;
  overflow: visible;
  //border-left: 1px dashed #FF9CC4; /* 2px的实线左边框，颜色为蓝色 */
  //padding-left: 1vw;
}

.custom-date-icon {
  background-image: url('/src/images/plan-date-setup-date.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  display: inline-block;
}

.el-input__prefix .el-icon {
  display: none; /* 隐藏默认图标 */
}

.el-input__prefix .custom-date-icon {
  display: inline-block;
}

.button-container {
  display: flex;
  //align-items: center;
  justify-content: space-between;
  gap: 4vw; /* 控制按钮之间的间距，使用vw来适应屏幕 */
  padding: 2vh 5vw; /* 适应不同设备的间距 */
  margin-top: 3vh;
}

.custom-button {
  display: flex;
  align-items: center;
  justify-items: center;
  border: 0.2vw solid #0074C6; /* 边框自适应屏幕宽度 */
  border-radius: 5vw; /* 圆角按钮，使用vw保证自适应 */
  padding: 0.15vh 6.5vw; /* 内边距使用vh和vw来适应不同设备 */
  background-color: white;
  color: #0074C6;
  font-size: 3vw; /* 字体大小使用vw，适应屏幕 */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-button .icon {
  //display: flex;
  //align-items: center; /* 垂直居中 */
  //justify-content: center; /* 水平居中 */
  margin-right: 3.2vw; /* 图标和文字之间的间距使用vw */
  font-size: 4vw; /* 图标大小自适应，使用vw */
}

.custom-button:hover {
  background-color: #0074C6;
  color: white;
}

/* 底部按钮 */
.bottom-buttons {
  display: flex;
  //justify-content: space-between;
  justify-content: center;
  align-items: center;
  margin-top: 27vh;
  padding: 0 10vw 0 10vw;
  position: fixed; /* 使按钮固定在视口 */
  bottom: 15vh;  /* 固定在视口底部 */
  width: 100%; /* 确保底部按钮容器占满页面宽度 */
  //z-index: 1000; /* 确保按钮在页面其他内容之上 */
  left: 50%;
  transform: translateX(-50%);
}

.delete-button {
  background-color: #EEF3F5;
  color: #FF4D4F;
  border: none;
  border-radius: 3vw;
  padding: 1.5vh 3vw;
  font-size: 4vw;
  cursor: pointer;
  width: 12vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.generate-button {
  background-color: #EEF3F5;
  color: #333;
  border: none;
  border-radius: 3vw;
  padding: 1.1vh 3vw;
  font-size: 4vw;
  cursor: pointer;
  flex-grow: 1;
  margin-left: 8vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  width: 70%; /* 设置生成按钮宽度占满剩余空间 */
}

</style>
