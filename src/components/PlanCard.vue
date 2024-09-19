<script setup>
import { defineProps } from 'vue';

// 定义接收的 props
const props = defineProps({
  cardInfo: Object
});
</script>

<template>
  <div v-if="cardInfo" class="card">
    <img :src="cardInfo.image" alt="attraction-image" class="attraction-img">
    <div class="attraction-info">
      <p class="attraction-name">{{ cardInfo.name }}</p>
      <p class="attraction-type">{{ cardInfo.des1 }}</p>
      <p class="attraction-time">{{ cardInfo.des2 }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  padding: 2vw;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.attraction-img {
  width: 20vw;
  height: auto;
  border-radius: 5px;
}

.attraction-info {
  margin-left: 3vw;
}

.attraction-name {
  font-size: 4vw;
  font-weight: bold;
}

.attraction-type, .attraction-time {
  font-size: 3.5vw;
  color: #666;
}
</style>
