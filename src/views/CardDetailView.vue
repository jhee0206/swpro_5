<template>
  <div class="card-detail-container" v-if="selectedCard">
    <button @click="goBackToList" class="back-button">목록으로</button>
    <div class="card-detail-content">
      <h2>{{ selectedCard.title }}</h2>
      <img :src="selectedCard.image" :alt="selectedCard.title" />
      <p>{{ selectedCard.content }}</p>
    </div>
  </div>
  <div v-else class="not-found">
    <p>카드 뉴스를 찾을 수 없습니다.</p>
    <button @click="goBackToList" class="back-button">목록으로</button>
  </div>
</template>

<script>
import { cardNewsData } from '@/data.js';
import CardItem from '@/components/CardItem.vue';

export default {
  name: 'CardDetailView',
  components: {
    CardItem
  },
  data() {
    return {
      selectedCard: null,
      otherCards: []
    };
  },
  created() {
    this.fetchCardDetail();
  },
  watch: {
    '$route.params.id': 'fetchCardDetail' // URL 파라미터 변경 감지하여 데이터 다시 불러오기
  },
  methods: {
    fetchCardDetail() {
      const cardId = parseInt(this.$route.params.id); // URL 파라미터에서 ID 가져오기
      this.selectedCard = cardNewsData.find(card => card.id === cardId);

      if (this.selectedCard) {
        this.otherCards = cardNewsData
            .filter(card => card.id !== cardId)
            .slice(0, 6); // 현재 카드 제외하고 최대 6개만 표시
      } else {
        this.otherCards = [];
      }
    },
    goBackToList() {
      this.$router.push({ name: 'CardList' }); // 목록 페이지로 이동
    }
  }
};
</script>

<style scoped>
.card-detail-container {
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.back-button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1em;
}

.back-button:hover {
  background-color: #0056b3;
}

.card-detail-content h2 {
  color: #333;
  margin-bottom: 15px;
}

.card-detail-content img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
  border-radius: 4px;
}

.card-detail-content p {
  line-height: 1.6;
  color: #555;
}

.other-card-news {
  margin-top: 40px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.other-card-news h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.other-card-news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

.not-found {
  text-align: center;
  margin-top: 50px;
  font-size: 1.2em;
  color: #666;
}
</style>