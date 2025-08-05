<template>
  <div class="card-list-container">
    <h1>카드 뉴스</h1>
    <div class="card-grid">
      <CardItem
          v-for="card in cardNews"
          :key="card.id"
          :card="card"
      />
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue';
import { cardNewsData } from '@/data.js'; // 데이터 불러오기

export default {
  name: 'CardListView',
  components: {
    CardItem
  },
  data() {
    return {
      cardNews: cardNewsData // 데이터를 컴포넌트 데이터로 설정
    };
  }
};
</script>

<style scoped>
.card-list-container {
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  max-width: 1000px; /* 최대 너비 설정 */
  margin: 0 auto;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
}
</style>