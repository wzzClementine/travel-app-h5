
<script setup>

import { ref } from 'vue';

import { useRouter } from 'vue-router' // 导入 useRouter

import ChatBotIcon from "@/components/ChatBotIcon.vue"; // 引入图标组件

import customIcon from "@/images/plan-selection-custom.svg";
import systemIcon from "@/images/plan-selection-system.svg";
import customIconInactive from "@/images/plan-selection-custom-inactive.svg";
import systemIconActive from "@/images/plan-selection-system-active.svg";

import coverImage from '@/images/cover-image.svg';

// 定义按钮和状态
const activeTab = ref('customPlan');

// 切换按钮状态
const switchTab = (tab) => {
  activeTab.value = tab;

  // 根据点击的按钮导航到不同的页面
  if (tab === 'customPlan') {
    router.push('/plan-creation/input-plan-title'); // 导航到自定义旅程输入页面
  } else if (tab === 'existingPlan') {
    router.push('/existing-plans'); // 导航到成熟旅程库页面
  }

};

const router = useRouter();
// 定义导航函数
const navigateToPlanTitleInput = () => {
  router.push('/plan-creation/input-plan-title') // 替换为目标路由路径
}

const navigateToPlanPreviewWithMap = () => {
  router.push('/plan-creation/plan-preview-with-map') // 替换为目标路由路径
}

// 按钮文案
const description = ref("XXX 可以帮助你在线生成旅程计划");

// 旅程数据
const tripPlans = ref([
  { id: 1, title: "AAA旅程", date: "04/22 – 04/26", destinations: 4 },
  { id: 2, title: "BBB旅程", date: "05/10 – 05/15", destinations: 5 },
  { id: 3, title: "CCC旅程", date: "06/01 – 06/05", destinations: 3 },
  { id: 3, title: "CCC旅程", date: "06/01 – 06/05", destinations: 3 },
  { id: 3, title: "CCC旅程", date: "06/01 – 06/05", destinations: 3 }
]);


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
    <div class="button-group">
      <button
          class="tab-button"
          :class="{ active : activeTab === 'customPlan' }"
          @click="switchTab('customPlan')"
      >
        <img
            :src="activeTab === 'customPlan' ? customIcon : customIconInactive"
            alt="Custom Plan Icon"
            class="tab-icon"
        />
        自定义旅程
      </button>
      <button
          class="tab-button"
          :class="{ active: activeTab === 'existingPlan' }"
          @click="switchTab('existingPlan')"
      >
        <img
            :src="activeTab === 'existingPlan' ? systemIconActive : systemIcon"
            alt="System Plan Icon"
            class="tab-icon"
        />
        成熟旅程库
      </button>
    </div>

    <!-- 旅程卡片列表渲染 -->
    <div class="trip-list-container">
      <div v-for="trip in tripPlans" :key="trip.id" class="trip-card" @click="navigateToPlanPreviewWithMap">
        <h1 class="trip-title">{{ trip.title }}</h1>
        <p class="trip-details">{{ trip.date }} | {{ trip.destinations }}个目的地</p>
      </div>
    </div>

<!--    <div class="trip-card">-->
<!--      <h1 class="trip-title">AAA旅程</h1>-->
<!--      <p class="trip-details">04/22 – 04/26 | 4个目的地</p>-->
<!--    </div>-->

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
  margin-bottom:3.5vh;
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
  position: fixed; /* 固定按钮 */
  bottom: 15vh; /* 设置距离底部的距离，保证按钮不会被导航栏覆盖 */
  left: 50%;
  transform: translateX(-50%); /* 水平居中 */
  z-index: 10;
}

/* 描述文字样式 */
.description {
  font-size: 3vw;
  color: #444444;
  text-align: center;
  letter-spacing: 0.1em; /* 相对于字体大小的字母间距 */
  margin-top: 1vh; /* 增加上方的 margin，或移除以贴近按钮 */
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  position: fixed; /* 固定描述文字 */
  bottom: 12vh; /* 位于按钮上方 */
  left: 50%;
  transform: translateX(-50%); /* 水平居中 */
  z-index: 10;
  white-space: nowrap;
  //margin-top: 1vh; /* 控制描述文字与按钮的间距 */
}

/* 旅程卡片列表容器 */
.trip-list-container {
  height: 45vh; /* 设置固定高度，限制列表部分的高度 */
  overflow-y: auto; /* 允许垂直滚动 */
  width: 100%; /* 列表容器的宽度 */
  padding: 1vw 1vw; /* 增加一些内边距 */
  box-sizing: border-box; /* 包含内边距 */
}

.trip-card {
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  background-color: #FFF3F8; /* 浅粉色背景 */
  border-radius: 3vw; /* 圆角 */
  padding: 3vw 6vw; /* 内边距，确保文字与边框有一定距离 */
  box-shadow: 0 1vw 3vw rgba(0, 0, 0, 0.2); /* 轻微阴影 */
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2.3vh;
  //max-width: 90vw; /* 最大宽度自适应 */
  //margin: auto; /* 居中 */
}

.trip-title {
  font-family: 'PingFangSC-Semibold', 'Arial', sans-serif;
  font-size: 6.5vw; /* 标题大小自适应 */
  font-weight: bold;
  //color: #000; /* 黑色字体 */
  margin-bottom:0.5vh; /* 标题和详情之间的间距 */
}

.trip-details {
  font-size: 3.2vw; /* 详情字体大小 */
  //color: #666; /* 灰色字体 */
}

</style>
