<script setup>
import AgoraRTM from 'agora-rtm-sdk';
import { v4 as uuidv4 } from 'uuid';
import { ref, onMounted, nextTick, defineExpose } from 'vue';

const APP_ID = '0432f9469df84f139026834219690a1a';
const CHANNEL = 'furnychat';
let client = AgoraRTM.createInstance(APP_ID);
let uid = uuidv4();
let text = ref('');
let messagesRef = ref(null);
let messages = ref([]);
let channel;

defineExpose({ messagesRef });

const appendMessage = async (message) => {
  messages.value.push(message);
  await nextTick();
  messagesRef.value.scrollTop =
    messagesRef.value.scrollHeight;
};

onMounted(async () => {
  await client.login({ uid, token: null });
  channel = await client.createChannel(CHANNEL);
  await channel.join();
  channel.on('ChannelMessage', (message, peerId) => {
    appendMessage({
      text: message.text,
      uid: peerId,
    });
  });
});

function sendMessage() {
  if (text.value === '') return;
  channel.sendMessage({ text: text.value, type: 'text' });
  appendMessage({
    text: text.value,
    uid,
  });
  text.value = '';
}
</script>


<template>
  <div class="panel">
    <div class="messages" ref="messagesRef">
      <div class="inner">
        <div
          :key="index"
          v-for="(message, index) in messages"
          class="message"
        >
          <div v-if="message.uid === uid" class="user-self">
            You:&nbsp;
          </div>
          <div v-else class="user-them">Them:&nbsp;</div>
          <div class="text">{{ message.text }}</div>
        </div>
      </div>
    </div>

    <form @submit.prevent="sendMessage">
      <input v-model="text" />
      <button>></button>
    </form>
  </div>
</template>

<style scoped>

.panel {
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0 auto;
    max-width: 380px;
    height: 500px;
    background-color: rgba(248, 248, 248, 0.7);
    box-shadow: 0 8px 32px 0 rgba(80, 70, 34, 0.37);
    backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.messages {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: white;
}

.inner {
    padding: 10px;
}

.message {
    text-align: left;
    display: flex;
    margin-bottom: 6px;
}

.user-self {
    color: rgb(140, 192, 185);
}

.user-them {
    color: burlywood;
}

form {
    position: relative;
    display: flex;
}

input {
    width: 100%;
    border: none;
    height: 20px;
    padding: 8px;
    border-top: 1px solid #999;
    border-radius: 0px;
    outline: none;
}

button {
    border: none;
    outline: none;
    background: none;
    position: absolute;
    right: 3px;
    top: 4px;
    font-size: 24px;
}

</style>
