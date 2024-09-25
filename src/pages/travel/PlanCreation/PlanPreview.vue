
<script setup>

import {ref} from 'vue';
import { useRouter } from 'vue-router' // 导入 useRouter

import PlanCard from '@/components/PlanCard.vue';

import example from "@/images/place.png";
import timeImg from "@/images/plan-review-time.svg";
import placeImg from "@/images/plan-review-place.svg";
import mealImg from "@/images/plan-review-meal.svg";

// 定义数据
const tripTitle = ref('AAA 旅程');
const startDate = ref('2024/9/2');
const endDate = ref('2024/9/3');

// 定义景点和餐厅数据
const attractions = ref([
  {id: 1, name: '环球影城', image: example, type: '人文·游乐园', time: '平均游玩时间：5h'},
  {id: 2, name: '环球影城', image: example, type: '人文·游乐园', time: '平均游玩时间：5h'},
  {id: 3, name: '环球影城', image: example, type: '人文·游乐园', time: '平均游玩时间：5h'},
]);

const restaurants = ref([
  {id: 1, name: 'Un-Yang-Kor-Dai', price: '¥382/人', location: '市中心/克拉码头', cuisine: '泰国菜', image: example},
  {id: 2, name: 'Un-Yang-Kor-Dai', price: '¥382/人', location: '市中心/克拉码头', cuisine: '泰国菜', image: example},
  {id: 3, name: 'Un-Yang-Kor-Dai', price: '¥382/人', location: '市中心/克拉码头', cuisine: '泰国菜', image: example},
]);

const router = useRouter();
// 定义导航函数
const navigateToPlanDetail = () => {
  router.push('/plan-creation/plan-detail') // 替换为目标路由路径
}
const navigateToPlanGeneration = () => {
  router.push('/plan-creation/plan-generation') // 替换为目标路由路径
}
const navigateToPlanDateSetup = () => {
  router.push('/plan-creation/plan-date-setup') // 替换为目标路由路径
}

</script>

<template>
  <div class="app">

    <div class="header">
      <h1>{{ tripTitle }}</h1>
      <div class="buttons">
        <button class="btn-custom"  @click="navigateToPlanGeneration">完成自定义攻略</button>
        <button class="btn-recommend" @click="navigateToPlanDetail">生成推荐攻略</button>
      </div>
    </div>

    <div class="trip-info">
      <div class="date-wrapper">
        <text class="trip-dates">旅行时间</text>
        <img alt :src=timeImg />
      </div>
      <text class="trip-dates-info">{{ startDate }} - {{ endDate }}</text>
    </div>

    <div class="dashed-divider"></div>

    <div class="attractions">
      <div class="place-selection-wrapper">
        <div class="date-wrapper">
          <text class="trip-dates">选择景点</text>
          <img alt class="place-icon" :src=placeImg />
        </div>
        <text class="edit-button" @click="navigateToPlanDateSetup">修改</text>
      </div>
      <div class="attraction-list">
        <PlanCard
            v-for="attraction in attractions"
            :key="attraction.id"
            :image="attraction.image"
            :name="attraction.name"
            :type="attraction.type"
            :time="attraction.time"
        />
      </div>
    </div>

    <div class="dashed-divider"></div>

    <div class="restaurant">
      <div class="place-selection-wrapper">
        <div class="date-wrapper">
          <text class="trip-dates">选择餐厅</text>
          <img alt class="place-icon" :src=mealImg />
        </div>
        <text class="edit-button" @click="navigateToPlanDateSetup">修改</text>
      </div>
      <div class="attraction-list">
        <PlanCard
            v-for="restaurant in restaurants"
            :key="restaurant.id"
            :image="restaurant.image"
            :name="restaurant.name"
            :type="restaurant.price"
            :time="restaurant.location + '·' + restaurant.cuisine"
        />
      </div>
    </div>

  </div>
</template>

<style scoped>
.app {
  //padding: 5vw;
  margin-top: 8vh;
  font-family: Arial, sans-serif;
}

.header {
  //padding-top: 5vh;
  padding: 4.5vw;
  background-color: #F7F7F7;
  font-size: 3.8vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  //text-align: center;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 2vh;
  color: #FFFFFF;
  font-size: 3vw;

}

.btn-custom {
  width: 36vw;
  padding: 0.7vh 5vw;
  //font-size: 4vw;
  letter-spacing: 0.5vw;
  background-color: #3CAAFD;
  border: 1px solid #3CAAFD;
  border-radius: 5vw;
}

.btn-recommend {
  width: 36vw;
  padding: 0.7vh 5vw;
  //font-size: 4vw;
  letter-spacing: 0.5vw;
  background-color: #EE92B7;
  border: 1px solid #EE92B7;
  border-radius: 5vw;
}

.trip-info {
  margin-top: 2vh;
  font-size: 3.5vw;
  padding-left: 7vw;
}

.attractions, .restaurant {
  //margin-top: 3vh;
  padding-left: 7vw;
}

h2 {
  font-size: 4vw;
  margin-bottom: 2vh;
}

.attraction-list {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  margin-top: 1vh;
}

.restaurant {
  //margin-top: 0vh;
}

.date-wrapper {
  //padding-left: 3vw;
  display: flex;
  flex-direction: row;
  font-size: 4.2vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

.trip-dates {
  margin-right: 1.5vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
}

.trip-dates-info {
  font-size: 4.5vw;
  font-family: 'PingFangSC-Medium', 'Arial', sans-serif;
}

.place-icon {
  margin-bottom: 0.6vh;
}

.place-selection-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 9vw;
}

.edit-button {
  display: flex;
  align-items: center;
  font-size: 3.3vw;
  color: #7F7F7F;
  cursor: pointer;
  //line-height: 1.5; /* 确保行高与标题对齐 */
  text-decoration: underline;
}

.dashed-divider {
  width: 83%;               /* 让分割线的宽度适应容器 */
  height: 2px;               /* 分割线的高度 */
  border-bottom: 0.2vh dashed #ccc; /* 定义虚线边框 */
  margin: 2.3vh 7.5vw;            /* 上下留一些空间 */
}

</style>
