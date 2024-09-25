

<script setup>

import { ref } from 'vue';

import PlanCard from '@/components/PlanCard.vue'; // 引入 PlanCard 组件
import example from "@/images/place.png";

// 定义天数为 ref 数组
const days = ref([
  { id: 1, name: 'Mon', number: 1, active: true },
  { id: 2, name: 'Tue', number: 2, active: false },
  { id: 3, name: 'Wed', number: 3, active: false },
  { id: 4, name: 'Thu', number: 4, active: false },
  { id: 5, name: 'Fri', number: 5, active: false },
]);

// 定义每个日期的时间轴事件列表
const eventsByDay = ref({
  1: [ // 周一的事件
    {
      id: 1,
      time: '9:30 AM',
      name: '环球影城',
      image: example,
      type: '人文·游乐园',
      duration: '平均游玩时间：5h',
      distance: '5km'
    },
    {
      id: 2,
      time: '12:00 PM',
      name: 'Un-Yang-Kor-Dai',
      image: example,
      type: '泰国菜',
      duration: '¥382/人',
      distance: null
    }
  ],
  2: [ // 周二的事件
    {
      id: 3,
      time: '10:00 AM',
      name: '博物馆',
      image: example,
      type: '历史·文化',
      duration: '游玩时间：3h',
      distance: '2km'
    }
  ],
  3: [], // 周三的事件
  4: [], // 周四的事件
  5: [ // 周二的事件
    {
      id: 3,
      time: '10:00 AM',
      name: '博物馆',
      image: example,
      type: '历史·文化',
      duration: '游玩时间：3h',
      distance: '2km'
    }
  ]  // 周五的事件
});

// 当前显示的事件，默认为周一的事件
const currentEvents = ref(eventsByDay.value[1]);

// 判断当前选中的日期是否是最后一天
const isLastDaySelected = ref(false);

// 处理点击事件，更新激活的日期及显示的事件
const setActiveDay = (selectedDay) => {
  // 更新选中的日期
  days.value.forEach(day => {
    day.active = (day.id === selectedDay.id);
  });

  // 更新显示的事件列表
  currentEvents.value = eventsByDay.value[selectedDay.id];

  // 检查是否是最后一天
  isLastDaySelected.value = (selectedDay.id === days.value.length);
};

</script>

<template>
  <div class="itinerary">
    <!-- 顶部的日期选择器 -->
    <div class="date-picker">
      <h2>2024  04/22 - 04/26</h2>
      <div class="days">
        <div
            v-for="day in days"
            :key="day.id"
            :class="['day', { active: day.active }]"
            @click="setActiveDay(day)"
        >
          <div class="day-content" :class="{ 'left-day': day.active }">
            <span>{{ day.name }}</span>
            <span class="circle">{{ day.number }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 时间轴，动态显示与选中的日期对应的事件 -->
    <div class="timeline">
      <div v-if="currentEvents.length" v-for="event in currentEvents" :key="event.id" class="timeline-item">
        <div class="time">{{ event.time }}</div>
        <div class="card-container">
          <PlanCard
              :image="event.image"
              :name="event.name"
              :type="event.type"
              :time="event.duration"
          />
          <div v-if="event.distance" class="distance">距离下一目的地：{{ event.distance }}</div>
        </div>
      </div>

      <!-- 如果没有事件，显示提示信息 -->
      <div v-else>
        <p>当天没有行程安排。</p>
      </div>

      <!-- 如果当前日期是最后一天，显示按钮 -->
      <div v-if="isLastDaySelected" class="button-wrapper">
        <button class="redesign-button" @click="onFinishClick">
          不满意, 重新生成
        </button>
        <button  class="finish-button" @click="onFinishClick">
          确定旅行计划
        </button>
      </div>


    </div>

    <!-- 滑动提示 -->
    <div class="scroll-tip">下滑至第二天</div>
  </div>
</template>

<style scoped>
/* 页面基础样式 */
.itinerary {
  padding: 2vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

.date-picker {
  //text-align: center;
  margin-bottom: 2vh;
}

.date-picker h2 {
  font-family: 'PingFangSC-Medium', 'Arial', sans-serif;
  //margin-bottom: 1vh;
  padding-left: 1vw;
  margin-bottom: 0;
}

.days {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: #EE92B7; /* 背景颜色和第二张图相似 */
  border-radius: 1.2vh;
  padding-top: 0.3vh;
  padding-left: 5vw;
  padding-right: 5vw;
  color: white;
  //padding: 2vw 4vw;
}

.day {
  //text-align: center;
  //position: relative;
}

.day .day-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
}

.circle {
  display: inline-block;
  //margin-top: 0.5vh;
  width: 8vw;
  height: 8vw;
  line-height: 8vw;
  border-radius: 50%;
  background-color: white;
  color: #EE92B7;
  font-weight: bold;
  font-size: 2vh;
  margin-top: 0.3vh;
  transition: all 0.3s ease; /* 添加平滑过渡效果 */
}

.active .circle {
  background-color: #3498db;
  color: white;
  font-size: 2.2vh;
}

.left-day {
  color: #7A7A7A;
  background-color: white;
  //border-radius: 10vw 10vw 0 0;
  padding: 1vh 1.4vh;
  //box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  //top: -1.5vw; /* 将它稍微向上移动 */
  z-index: 1;
}

.left-day .circle {
  background-color: #32AAFF;
  color: white;
  //margin-top: -1vw;
}

.days .left-day {
  //clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
  /* 将左侧圆角做出更复杂的形状 */
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

.timeline {
  position: relative;
  margin-left: 20px;
}

.timeline-item {
  display: flex;
  margin-bottom: 2vh;
  align-items: flex-start;
}

.time {
  font-size: 3.5vw;
  width: 20%;
  text-align: left;
}

.card-container {
  position: relative;
  width: 80%;
  padding-left: 20px;
}

.card-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #ccc;
}

.distance {
  font-size: 3vw;
  color: #666;
  margin-top: 1vh;
}

.scroll-tip {
  text-align: center;
  margin-top: 5vh;
  font-size: 3vw;
  color: #aaa;
}

.redesign-button {
  font-size: 3.2vw;
  background-color: #EDEDED;
  border: #EDEDED;
  border-radius: 2vh;
  padding: 0.5vh 2vh;
  margin-right: 3vh;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

.finish-button {
  //width: 50vw;
  //max-width: 300px;
  padding: 0.5vh 2vh;
  font-size: 3.2vw;
  //letter-spacing: 0.2em; /* 相对于字体大小的字母间距 */
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  color: white;
  background-image: linear-gradient(to right, #4facfe, #a6c1ee, #fbc2eb);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 0.1vh;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 80px;
  //justify-content: space-around;
}


/* Card 样式在 PlanCard 中定义，外部可以复用 */
</style>
