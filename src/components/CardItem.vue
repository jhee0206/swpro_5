<template>
  <div class="card-item" @click="goToDetail">
    <img :src="computedImage" :alt="card.title" />
  </div>
</template>

<script>
// 기본 이미지를 import 합니다.
// 'defaultImage.png'는 src/assets 폴더에 있는 여러분의 실제 PNG 파일 이름으로 변경하세요.
import defaultImage from '@/assets/mayak.png';

export default {
  name: 'CardItem',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  computed: {
    // 이미지를 동적으로 결정하는 computed 속성
    computedImage() {
      // card.image이 유효한지 확인하고, 없으면 defaultImage 사용
      return this.card.image && this.card.image !== ''
          ? this.card.image
          : defaultImage;
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({ name: 'CardDetail', params: { id: this.card.id } });
    }
  }
};
</script>

<style scoped>
/* 이전과 동일한 스타일 */
.card-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-item:hover {
  transform: translateY(-5px);
}

.card-item img {
  width: 100%; /* 부모 컨테이너 너비에 꽉 맞춤 */
  height: auto; /* 이미지의 원래 비율에 따라 높이 자동 조절 */
  display: block;
  object-fit: contain; /* 이미지가 잘리지 않고 컨테이너 안에 들어오게 함 */
  /* flex-grow: 1; <-- 제거하거나 필요시 조절 (이미지가 남는 공간을 차지하지 않게) */
  margin-bottom: 10px; /* 이미지 아래 제목과의 간격 */
}
</style>