
<script setup>

import { ref, onMounted, nextTick } from 'vue';

import chatbot from "@/images/chatbot.svg";
import sendIcon from "@/images/send-icon.svg";

const footerHeight = ref(0);

onMounted(() => {
  nextTick(() => {
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav) {
      footerHeight.value = bottomNav.offsetHeight; // 获取底部导航栏的高度
    }
  });
});

// 当前日期显示
const currentDate = new Date().toLocaleDateString('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// 聊天消息列表，包含用户和机器人消息
const messages = ref([
  { type: 'received', text: '你好，请问有什么可以帮助您?', timestamp: '10:06' },
]);


// 用户输入绑定的值
const userInput = ref('');

// 建议标签，模拟一些常见问题
const suggestions = ref([
  '新加坡交通卡', '鸭子船', '鱼尾狮公园', '环球影城', '圣淘沙岛', '本地美食', '米其林餐厅', '咖啡/甜品店',
]);

// 控制建议标签是否显示
const showSuggestions = ref(true);

// 发送消息
const sendMessage = () => {
  if (userInput.value.trim()) {
    // 获取当前时间的小时和分钟
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timestamp = `${hours}:${minutes}`;

    // 添加用户的消息，带上时间戳
    messages.value.push({ type: 'sent', text: userInput.value, timestamp });
    showSuggestions.value = false;

    const userQuestion = userInput.value.trim();
    userInput.value = '';

    // 滚动到底部
    nextTick(() => {
      scrollToBottom();
    });

    // 模拟机器人回复
    setTimeout(() => {
      handleBotResponse(userQuestion);
    }, 1000);
  }
};

const handleBotResponse = (question) => {
  let response = '';
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timestamp = `${hours}:${minutes}`;

  // 简单模拟一些回复逻辑
  if (question.includes('交通卡')) {
    response = '新加坡交通卡可以在任何便利店购买，价格约为10新币。';
  } else if (question.includes('环球影城')) {
    response = '新加坡环球影城位于圣淘沙岛，是一座非常受欢迎的主题公园。';
  } else {
    response = '很抱歉，我不太理解您的问题。';
  }

  // 添加机器人的回复，带上时间戳
  messages.value.push({ type: 'received', text: response, timestamp });

  // 滚动到底部
  nextTick(() => {
    scrollToBottom();
  });
};

// 标签按钮点击处理
const handleTagClick = (tag) => {
  userInput.value = tag;
  sendMessage();
};

// 自动滚动到底部
const scrollToBottom = () => {
  const chatContent = document.querySelector('.chat-content');
  chatContent.scrollTop = chatContent.scrollHeight;
};

// 当组件挂载时，自动滚动到底部
onMounted(() => {
  nextTick(() => {
    scrollToBottom();
  });
});
</script>


<template>
  <div class="chat-container">
    <!-- 顶部时间显示 -->
    <div class="chat-header">
      <p class="date">{{ currentDate }}</p>
    </div>

    <!-- 聊天消息显示区域 -->
    <div class="chat-content" ref="chatContent">
      <div v-for="(msg, index) in messages" :key="index" :class="['chat-message', msg.type]">
        <img alt :src="chatbot" v-if="msg.type === 'received'" class="avatar">
        <div class="message">
          <p>{{ msg.text }}</p>
        </div>
        <!-- 独立的时间戳，根据消息类型对齐左侧或右侧 -->
        <p :class="['timestamp', msg.type]">{{ msg.timestamp }}</p>
      </div>

      <!-- 标签按钮区域 -->
      <div v-if="showSuggestions" class="tags">
        <button v-for="(tag, index) in suggestions" :key="index" class="tag" @click="handleTagClick(tag)">
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- 底部输入框 -->
    <div class="chat-footer" :style="{ bottom: footerHeight + 'px' }">
      <input v-model="userInput" type="text" class="input" placeholder="输入您的问题..." @keyup.enter="sendMessage"/>
      <button class="send-button" @click="sendMessage">
        <img :src="sendIcon" alt="发送" class="send-icon">
      </button>
    </div>
  </div>
</template>


<style scoped>
/* 页面基础布局 */
.chat-container {
  display: flex;
  flex-direction: column;
  //height: 100vh;
  padding: 8vw;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  width: 100%;
}

/* 顶部时间样式 */
.chat-header {
  text-align: center;
  margin-bottom: 2vh;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  color: #888888;
}

.date {
  font-size: 4.5vw;
  color: #999;
}

/* 消息内容区域 */
.chat-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 10vh; /* 给消息内容区域留出空间，避免被输入框遮挡 */
  width: 100%;
  margin-bottom: 1vh;
  //padding-left: 8vw;
  //padding-right: 8vw;
}

.chat-message {
  //display: flex;
  //align-items: flex-start;
  margin-bottom: 2vh;
  width: 100%;
}

p {
  margin-bottom: 0;
}

.received .avatar {
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background-color: #F3E8E2;
  margin-bottom: 3.5vw;
  padding: 1.5vw;
}

.message {

}

.sent .message {
  margin-left: auto;
  background-color: #32AAFF;
  color: white;
  padding: 1vh 3vw;
  border-radius: 3vw;
  max-width: 60%;
  font-size: 3.5vw;
  width: 90%;
}

.received .message {
  background-color: #F6F6F6;
  padding: 1vh 3vw;
  border-radius: 3vw;
  max-width: 60%;
  font-size: 3.5vw;
  width: 90%;
}

/* 标签按钮样式 */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  margin-top: 2vh;
  //background-color: white;
}

.tag {
  padding: 1vw 3vw;
  border-radius: 2vw;
  background-color: white;
  font-size: 3.2vw;
  cursor: pointer;
  border: 0.3vw solid #EEEEEE;
  color: black;
}

/* 底部输入框和按钮 */
.chat-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5vh 5vw;
  position: fixed;
  bottom: 10vh;
  left: 0;
  width: 100%;
  background-color: white;
  //padding: 2vh 8vw;
}

.input {
  flex: 1;
  padding: 1vh 5vw;
  border: 1px solid #F6F6F6;
  border-radius: 5vw;
  font-size: 4vw;
  background-color: #F6F6F6;
  //box-sizing: border-box;
}

.input::placeholder {
  color: #888888;
}

.send-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vw; /* 设置宽度为10vw，根据需要调整 */
  height: 10vw; /* 设置高度和宽度相同，确保是正方形 */
  padding: 1vh;
  background-color: #B8B3B3; /* 您可以自定义颜色 */
  border: none;
  border-radius: 50%; /* 将按钮变成圆形 */
  margin-left: 4vw;
  cursor: pointer;

}

.send-icon {
  width: 4vw; /* 根据屏幕大小自适应图标尺寸 */
  height: auto;
}

/* sent 消息的时间戳，显示在右侧 */
.timestamp.sent {
  color: #888888;
  text-align: right;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  margin-right: 1vw;
  margin-top: 1vh;
}

/* received 消息的时间戳，显示在左侧 */
.timestamp.received {
  color: #888888;
  text-align: left;
  font-family: 'PingFangSC-Regular', 'Arial', sans-serif;
  margin-left: 1vw; /* 留出空间给头像 */
  margin-top: 1vh;
}

</style>
