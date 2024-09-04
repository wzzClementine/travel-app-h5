<script setup>

import { ref } from 'vue';

import { useRouter } from 'vue-router' // 导入 useRouter

import ChatBotIcon from "@/components/ChatBotIcon.vue"; // 引入图标组件
import navigation from "@/images/plan-destination-setup-navigation.svg";
import edit from "@/images/plan-destination-setup-edit.svg";
import list from "@/images/plan-destination-setup-list.svg";

import place from "@/images/place.png";
import map from "@/images/plan-destination-setup-place.svg";
import deleteIcon from "@/images/plan-destination-setup-delete.svg";

const tripName = ref("AAA旅程"); // 旅行名称
const destination = ref(""); // 目的地输入框
const isEditing = ref(false); // 标识是否处于编辑模式

const searchResults = ref([]); // 存储搜索结果的数组
// 模拟的搜索数据
const allLocations = [
  { name: '环球影城', address: '圣淘沙岛圣淘沙道8号' },
  { name: '滨海湾花园', address: '18 Marina Gardens Dr, Singapore' },
  { name: '滨海湾花园', address: '19 Marina Gardens Dr, Singapore' },
  { name: '新加坡动物园', address: '80 Mandai Lake Rd, Singapore' }
];

const startEditing = () => {
  isEditing.value = true; // 开始编辑
};

const stopEditing = () => {
  isEditing.value = false; // 停止编辑
};

// 当用户输入目的地时更新搜索结果
const onDestinationInput = () => {
  console.log("Current input:", destination.value); // 打印当前输入的值

  if (destination.value) {
    searchResults.value = allLocations.filter(location =>
        location.name.includes(destination.value)
    );
    console.log("Search results:", searchResults.value); // 打印过滤后的结果
  } else {
    searchResults.value = [];
  }
};

// 选择地点后更新输入框并清空搜索结果
const selectLocation = (location) => {
  destination.value = location.name;
  searchResults.value = [];
};

const router = useRouter();
// 定义导航函数
const navigateToPage = () => {
  router.push('/plan-creation/plan-date-setup') // 替换为目标路由路径
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
            @blur="stopEditing"
            @keyup.enter="stopEditing"
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
          placeholder="输入我想去的地方..."
          @input="onDestinationInput"
      />
      <img :src="list"  alt="Dropdown" class="dropdown-icon">
    </div>

    <!-- 目的地详细信息 -->
    <div v-if="searchResults.length" class="destination-details">
      <div
          class="location-info"
          v-for="(location, index) in searchResults"
          :key="index"
          @click="selectLocation(location)"
      >
        <img :src="place" alt="Location" class="location-image">
        <div>
          <h3>{{ location.name }}</h3>
          <p>{{ location.address }}</p>
        </div>
      </div>
      <div class="map-wrapper">
        <img :src="map">
        <text class="map-link">在地图上选择...</text>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="bottom-buttons">
      <button class="delete-button">
        <img :src="deleteIcon" alt="删除" class="button-icon" />
      </button>
      <button class="generate-button" @click="navigateToPage">生成旅程</button>
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

/* 下拉箭头图标 */
.dropdown-icon {
  width: 4vw;
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

/* 目的地详细信息 */
.destination-details {
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top: 3vh;
  //padding: 2vh;
  border-radius: 3vw;
  border: 1px solid #DEDEDE;
}

.location-image {
  width: 13vw;
  height: 13vw;
  border-radius: 2vw;
  margin-right: 3vw;
}

.location-info {
  display: flex;
  flex-direction: row;
  padding-left: 5vw;
  margin-bottom: 0.2vh;
  padding-top: 2vh;
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

.map-wrapper {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;
  background-color: #EEF3F5;
  border-bottom-left-radius: 3vw;
  border-bottom-right-radius: 3vw;
  padding: 1.5vh 5vw;
}

.map-link {
  font-size: 3.5vw;
  color: #0074C6;
  cursor: pointer;
  margin-left: 2vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
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
