<script setup>
import { ref } from 'vue';
import PlanCard from '@/components/PlanCard.vue';

// 定义数据
const tripTitle = ref('AAA 旅程');
const startDate = ref('2024/9/2');
const endDate = ref('2024/9/3');

// 定义景点和餐厅数据
const attractions = ref([
  { id: 1, name: '环球影城', image: 'path_to_image', type: '人文·游乐园', time: '5h' },
  { id: 2, name: '环球影城', image: 'path_to_image', type: '人文·游乐园', time: '5h' },
  // 其他景点可以在这里添加
]);

const selectedRestaurant = ref({
  name: 'Un-Yang-Kor-Dai',
  price: '¥382/人',
  location: '市中心/克拉码头',
  cuisine: '泰国菜',
  image: 'path_to_restaurant_image'
});
</script>

<template>
  <div class="app">
    <div class="header">
      <h1>{{ tripTitle }}</h1>
    </div>

    <div class="buttons">
      <button class="btn-custom">完成自定义攻略</button>
      <button class="btn-recommend">生成推荐攻略</button>
    </div>

    <div class="trip-info">
      <p class="trip-dates">旅行时间 <i class="fa fa-calendar"></i> {{ startDate }} - {{ endDate }}</p>
    </div>

    <div class="attractions">
      <h2>选择景点</h2>
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

    <div class="restaurant">
      <h2>选择餐厅</h2>
      <PlanCard :restaurant="selectedRestaurant" />
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 5vw;
  font-family: Arial, sans-serif;
}

.header {
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 2vh;
}

.btn-custom, .btn-recommend {
  padding: 1vh 3vw;
  font-size: 4vw;
}

.trip-info {
  margin-top: 2vh;
  font-size: 3.5vw;
}

.attractions, .restaurant {
  margin-top: 3vh;
}

h2 {
  font-size: 4vw;
  margin-bottom: 2vh;
}

.attraction-list {
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.restaurant {
  margin-top: 3vh;
}
</style>
