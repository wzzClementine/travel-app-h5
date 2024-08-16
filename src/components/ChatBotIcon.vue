
<template>
  <div class="icon-container">
    <img src="@/images/chatbot.svg" alt="Chat Icon" class="chat-icon" />
  </div>
</template>


<style scoped>
.icon-container {
  width: 14vw; /* 宽度相对于视口宽度 */
  height: 14vw; /* 高度相对于视口宽度，保持圆形 */
  border-radius: 50%;
  background-color: #f0e6e1; /* 背景色 */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1.5vw rgba(0, 0, 0, 0.1); /* 外边框阴影，使用相对单位 */
  border: 1.7vw solid #cccccc; /* 灰色边框，使用相对单位 */
  position: relative;
}

.chat-icon {
  width: 60%; /* 图标宽度为容器的50% */
  height: 60%;
}

.icon-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 1.5vw rgba(0, 0, 0, 0.1); /* 外边框阴影，使用相对单位 */
}
</style>
