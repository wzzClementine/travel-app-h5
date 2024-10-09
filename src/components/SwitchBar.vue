
<script setup>

import { defineProps } from 'vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router' // 导入 useRouter

import customIcon from "@/images/plan-selection-custom.svg";
import customIconInactive from "@/images/plan-selection-custom-inactive.svg";
import systemIconActive from "@/images/plan-selection-system-active.svg";
import systemIcon from "@/images/plan-selection-system.svg";

// 定义接收的 props
const props = defineProps({
  customPlansUrl: String,  // 自定义旅程路径
  systemPlansUrl: String,  // 成熟旅程库路径
});

const activeTab = ref('customPlan');

const router = useRouter();

// 切换按钮状态
const switchTab = (tab) => {
  activeTab.value = tab;

  // 根据点击的按钮导航到不同的页面
  if (tab === 'customPlan') {
    router.push(props.customPlansUrl); // 导航到自定义旅程输入页面
  } else if (tab === 'existingPlan') {
    router.push(props.systemPlansUrl); // 导航到成熟旅程库页面
  }

};


</script>

<template>
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
</template>


<style scoped>
/* 按钮切换区样式 */
.button-group {
  display: flex;
  justify-content: center;
  width: 85vw;
  margin-bottom: 3.5vh;
  margin-top: 1vh;  /* 新增的 margin-top 来控制按钮区域往下移动 */
  background: linear-gradient(to right, #b3d7ff, #ffe7f3); /* 更浅的渐变颜色 */
  border-radius: 5.2vw;
  padding: 0.7vh 1.7vw 0.7vh 1.7vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

/* 按钮样式 */
.tab-button {
  flex: 1;
  border: none;
  background: none;
  color: #444444; /* 默认状态下的文字颜色 */
  font-size: 3.8vw;
  cursor: pointer;
  padding: 2.3vh 0;
  border-radius: 5vw;
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
  width: 4.8vw; /* 根据需要调整图标大小 */
  height: auto;
  margin-right: 2vw; /* 调整图标和文字之间的间距 */
}
</style>
