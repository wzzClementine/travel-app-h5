<script setup>

import {ref, nextTick, onMounted, watch} from 'vue';

import upIcon from "@/images/map-up.svg";
import downIcon from "@/images/map-down.svg";
import places from "@/images/map-place-count.svg";
import camera from "@/images/map-camera.svg";
import star from "@/images/map-star.svg";
import edit from "@/images/map-edit.svg";

// 控制面板展开和收起的状态
const isExpanded = ref(false);

// 控制按钮的初始位置
const buttonPosition = ref(0);  // 默认值，可调整为初始位置

// 可展开面板的 DOM 引用
const expandablePanel = ref(null);

// 切换面板的展开和收起状态，并计算高度
const togglePanel = async () => {
  isExpanded.value = !isExpanded.value;
  await nextTick(); // 确保 DOM 完成更新

  // 使用延迟，确保动画或内容加载完成后再调整按钮位置
  setTimeout(() => {
    adjustButtonPosition();
  }, 300); // 300 毫秒延迟，确保动画完成
};


// 动态调整按钮位置的函数
const adjustButtonPosition = () => {
  nextTick(() => {
    if (expandablePanel.value) {
      const panelHeightPx = expandablePanel.value.offsetHeight;  // 获取面板高度 (px)
      const panelHeightVh = (panelHeightPx / window.innerHeight) * 100;  // 将 px 转换为 vh
      console.log(`Panel height (vh): ${panelHeightVh}`);
      buttonPosition.value = panelHeightVh + 3;  // 设置按钮的 bottom 值，稍微高于面板
    }
  });
};


// 组件挂载时，初始化按钮位置
onMounted(() => {
  setTimeout(() => {
    adjustButtonPosition(); // 初始化时计算一次按钮位置
  }, 300); // 等待渲染动画结束后获取高度
});

// 监听面板展开和收起的状态，实时调整按钮位置
watch(isExpanded, () => {
  adjustButtonPosition();
});

</script>

<template>
  <div class="container">

    <!-- 可展开面板控制按钮 -->
    <div class="toggle-button" @click="togglePanel" :style="{ bottom: buttonPosition + 'vh' }">
      <img v-if="!isExpanded" :src="upIcon" alt="Expand"/>
      <img v-else :src="downIcon" alt="Collapse"/>
    </div>

    <!-- 底部可展开的面板 -->
    <div :class="['expandable-panel', { expanded: isExpanded }]" ref="expandablePanel">
      <!-- 行程标题和展开按钮 -->
      <div class="panel-header">
        <div class="panel-header-wrapper">
          <h2>行程名称：牛车水|克拉码头周边1日游</h2>
          <button class="edit-button">
            <img :src="edit" alt="修改"/> 修改
          </button>
        </div>
        <p class="panel-description">
          本条线路从博物馆开始游玩，也可调整至从赞美广场，或着从福康宁公园开始游玩，最后游玩到牛车水（唐人街）。<span
            class="more">阅读更多</span>
        </p>
      </div>

      <!-- 可展开部分 -->
      <div v-if="isExpanded" class="panel-expanded-content">
        <div class="stats">
          <div class="stat-item">
            <img :src="places" alt="景点" class="stats-image"/>
            <p class="stats-title">游玩景点数</p>
            <p class="stats-amount">5个</p>
          </div>
          <div class="stat-item">
            <img :src="camera" alt="打卡" class="stats-image"/>
            <p class="stats-title">打卡地点数</p>
            <p class="stats-amount">4个</p>
          </div>
          <div class="stat-item">
            <img :src="star" alt="积分" class="stats-image"/>
            <p class="stats-title">可获得积分</p>
            <p class="stats-amount">100分</p>
          </div>
        </div>

        <!-- 行程详细信息 -->
        <div class="day-summary">
          <h3>Day 1</h3>
          <p>2024.4.22 – 2024.4.26 | 4个目的地</p>
          <div class="trip-item">
            <div class="trip-time">09:00 AM</div>
            <div class="trip-detail">
              <p>环球影城</p>
              <p>人文·游乐园</p>
            </div>
          </div>
          <div class="trip-item">
            <div class="trip-time">09:00 AM</div>
            <div class="trip-detail">
              <p>Un-Yang-Kor-Dai</p>
              <p>餐厅·特色菜</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="action-buttons">
        <button class="modify-button">修改计划</button>
        <button class="start-button">开始旅行</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* 页面容器 */
.container {
  display: flex;
  flex-direction: column;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  background-image: url('@/images/map.png'); /* 替换为地图背景图片 */
  background-size: cover;
  position: relative;
}

/* 可展开面板 */
.expandable-panel {
  background-color: #fff;
  padding: 3vw;
  box-shadow: 0 -1vh 2vh rgba(0, 0, 0, 0.1);
  position: absolute;
  transition: height 0.3s ease-in-out;
  bottom: 8vh;
  width: 100%;
  z-index: 100;
  border-top-left-radius: 8vw;
  border-top-right-radius: 8vw;
}

.expandable-panel.expanded {
  height: auto; /* 展开时高度自动调整 */
}

.panel-header {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  //align-items: center;
  //text-align: center;
}

.panel-header-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1vw;
  //justify-content: center;
}

.panel-header h2 {
  font-size: 3.8vw;
  font-family: 'PingFangSC-Medium', 'Arial', sans-serif;
  margin-bottom: 0;
  //font-weight: bold;
  //margin-right: 5vw;
}

.edit-button {
  font-size: 3.4vw;
  background: none;
  border: none;
  color: #444444;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1vw;
  text-decoration: underline;
}


.panel-description {
  font-size: 3.2vw;
  margin: 2vw 0;
  color: #444444;
}

.more {
  color: #EE92B7;
  cursor: pointer;
  text-decoration: underline;
}

.toggle-button {
  position: absolute; /* 绝对定位 */
  z-index: 5;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FF9CC4;
  border: none;
  cursor: pointer;
  width: 100%;
  border-top-right-radius: 10vw;
  border-top-left-radius: 10vw;
  height: 8vh;
  text-align: center;
}

.panel-expanded-content {
  //overflow: scroll;
}

.stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFF3F8;
  border-radius: 1.5vh;
  margin: 0 1vw;
  padding: 1.5vh 1vh;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

.stats-title {
  font-size: 1.3vh;
  padding: 0.3vh 0;
}

.stats-amount {
  font-size: 1.8vh;
  font-family: 'PingFangSC-Medium', 'Arial', sans-serif;
}

.stats-image {
  border-radius: 50%;
}

.stats p {
  margin-bottom: 0;
}

.stat-item {
  text-align: center;
}

.day-summary {
  margin: 3vw 1vw 0 1vw;
}

.day-summary h3 {
  font-size: 2.5vh;
  font-family: 'PingFangSC-Semibold', 'Arial', sans-serif;
  margin-bottom: 0;
}

.day-summary p {
  font-size: 1.5vh;
  color: #7A7A7A;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

.trip-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3vw;
}

.action-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 1.2vh;
  margin-bottom: 2vh;
}

.modify-button {
  background-color: #EDEDED;
  padding: 2.0vw 3vw;
  border-radius: 5vw;
  border: none;
  cursor: pointer;
  font-size: 3vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  width: 35%;
}

.start-button {
  padding: 2.0vw 3vw;
  border-radius: 5vw;
  border: none;
  cursor: pointer;
  font-size: 3vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  width: 35%;
  background-image: linear-gradient(to right, #4facfe, #a6c1ee, #fbc2eb);
  color: #fff;
}

.bottom-nav button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 3vw;
}

</style>
