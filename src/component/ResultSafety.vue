<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex justify-between">
      <div class="safety-low-div">
        <p class="safety-low-p">저위험</p>
        <p class="safety-step-descript">약물 0-3점,<br> 알코올 0-10점</p>
      </div>
      <div class="safety-middle-div">
        <p class="safety-middle-p">중등도 위험</p>
        <p class="safety-step-descript">약물 4-26점,<br> 알코올 11-26점</p>
      </div>
      <div class="safety-high-div">
        <p class="safety-high-p">고위험</p>
        <p class="safety-step-descript">27점 이상</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.safety-low-p {
  font-size: 14px;
  text-align: center;
  border-top-left-radius: 8px;
  color: #ffffff;

}
.safety-middle-p {
  font-size: 14px;
  text-align: center;
  color: #ffffff;

}
.safety-high-p {
  font-size: 14px;
  text-align: center;
  color: #ffffff;

}

.safety-low-div {
  background-color: #6AAA5B;
  padding: 8px;
  flex: 1 1 0%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.safety-middle-div {
  background-color: #F5AF2D;
  padding: 8px;
  flex: 1 1 0%;
}

.safety-high-div {
  background-color: #C31D1D;
  padding: 8px;
  flex: 1 1 0%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.safety-step-descript {
  font-size: 11px;
  text-align: center;
  color: #ffffff;
}
</style>