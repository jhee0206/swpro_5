<!--
  [ ChatMessage.vue ]
    -부모로부터 role, content, highlightMode 등의 데이터를 props로 받아,
     화면에 적절한 스타일로 표시.
-->

<template>
  <!-- 모든 메시지를 하나의 구조로 렌더링합니다. -->
  <div :class="['chat-message-wrapper', roleClass]">
    <div :class="['chat-bubble', roleClass]">
      <strong>{{ role === 'bot' ? '챗봇:' : '나:' }}</strong>
      <ExpandableText
          :text="content"
          :max-length="80"
          :highlight-mode="highlightMode"
      />
    </div>
  </div>
</template>

<script setup>
// [ 모듈 임포트 ]
import { computed } from 'vue'
import ExpandableText from './ExpandableText.vue'

// [ Props (부모에게 받는 데이터) ]
// defineProps: 부모 컴포넌트로부터 전달받을 데이터의 이름과 타입을 정의

const props = defineProps({
  role: String,
  content: String,
  highlightMode: {
    type: String,
    default: 'numbered'
  }
})

const roleClass = computed(() => (props.role === 'bot' ? 'left' : 'right'))
</script>

<style scoped>

/*
  [ 전체 메시지 컨테이너 ]
  - 이 요소의 margin이 메시지 간의 간격을 결정.
*/
.chat-message-wrapper {
  /* 말풍선을 유연하게 배치하기 위해 flex를 사용. */
  display: flex;
  /* 다른 말풍선과의 위아래 간격을 12px로 설정. */
  margin: 12px 0;
  /* flex 아이템들을 아래쪽을 기준으로 정렬.*/
  align-items: flex-end;
}

/* '나'의 메시지일 경우, 컨테이너 내용을 오른쪽으로 정렬. */
.chat-message-wrapper.right {
  justify-content: flex-end;
}

/* '챗봇'의 메시지일 경우, 컨테이너 내용을 왼쪽으로 정렬. */
.chat-message-wrapper.left {
  justify-content: flex-start;
}


/*
  [ 실제 말풍선 스타일 ]
*/
.chat-bubble {
  /* 말꼬리(::before)를 만들기 위해 위치 기준점으로 설정. */
  position: relative;
  padding: 10px 12px;
  max-width: 80%;
  font-size: 17px;
  line-height: 1.4;
  /* 한국어 텍스트가 단어 단위로 자연스럽게 줄바꿈되도록. */
  word-break: keep-all;
  border-radius: 18px;
  /* 말풍선에 약간의 그림자 효과를 줌 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
}


/* --- '나'의 말풍선 (오른쪽) --- */
.chat-bubble.right {
  background-color: #B2DFDB;
  color: #000;
  border-bottom-right-radius: 4px;
}

/* '나'의 말풍선 꼬리를 만드는 가상 요소(pseudo-element) */
.chat-bubble.right::before {
  content: "";
  position: absolute;
  /* 말풍선의 오른쪽에 위치. */
  right: -6px;
  bottom: 0;
  width: 0;
  height: 0;
  /* 투명한 테두리를 이용해 삼각형 모양. */
  border: 8px solid transparent;
  /* 왼쪽 테두리에만 색상을 주어 오른쪽을 향하는 꼬리. */
  border-left: 8px solid #B2DFDB;
  border-bottom: 0;
  /* 위치 미세 조정 */
  transform: translateY(2px);
}


/* --- '챗봇'의 말풍선 (왼쪽) --- */
.chat-bubble.left {
  background-color: #E5E5EA;
  color: #000;
  /* 말꼬리가 붙는 왼쪽 아래 모서리만 각지게. */
  border-bottom-left-radius: 2px;
}

/* '챗봇'의 말풍선 꼬리를 만드는 가상 요소 */
.chat-bubble.left::before {
  content: "";
  position: absolute;
  /* 말풍선의 왼쪽에 위치. */
  left: -10px;
  bottom: 0;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  /* 오른쪽 테두리에만 색상을 주어 왼쪽을 향하는 꼬리. */
  border-right: 8px solid #E5E5EA;
  border-bottom: 5px;
  transform: translateY(2px);
}


/*
  [ 발신자 이름 스타일 ]
*/
strong {
  /* 글자를 진하게. */
  font-weight: 600;
  /* 이름과 실제 내용 사이에 약간의 간격. */
  margin-right: 4px;
}
</style>
