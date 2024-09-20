
<script setup>

import { defineProps } from 'vue';

import rightIcon from "@/images/plan-review-right.svg";

// 定义接收的 props
const props = defineProps({
  image: String,        // 图片 URL
  name: String,         // 名称，如景点名称或餐厅名称
  type: String,         // 描述类型（景点类型/餐厅类型）
  time: String,         // 时间信息，例如"5h"或其它描述
  restaurant: Object    // 餐厅对象（可选）
});
</script>

<template>
  <div class="card">
    <img :src="restaurant ? restaurant.image : image" alt="card-image" class="card-img">
    <div class="card-info">
      <text class="card-name">{{ restaurant ? restaurant.name : name }}</text>
      <text v-if="type" class="card-type">{{ type }}</text>
      <text class="card-time">{{ restaurant ? restaurant.price : time }}</text>
      <text v-if="restaurant" class="card-location">{{ restaurant.location }} · {{restaurant.cuisine}}</text>
    </div>
    <img class="right-icon" :src="rightIcon">
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  //align-items: center;
  //justify-items: center;
  padding: 3vw;
  background-color: #ffffff;
  border-radius: 2vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.1vh;
  width: 91%;
}

.card-img {
  width: 15vw;
  height: auto;
  border-radius: 2vw;
  object-fit: cover;
}

.card-info {
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-left: 4vw;
  flex-grow: 1;
}

.card-name {
  font-size: 4vw;
  font-weight: bold;
  font-family: 'PingFangSC-Semibold', 'Arial', sans-serif;
  margin-bottom: 0.2vh;
}

.card-type, .card-time, .card-location {
  font-size: 3vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  //color: black;
}

.right-icon {
  margin-top: 0.2vh;
}
</style>
