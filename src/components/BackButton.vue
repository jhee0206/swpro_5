<template>
  <span class="arrow" @click="handleClick"><</span>
</template>

<script>
export default {
  name: "BackButton",
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$router.push(this.to);
    }
  }
};
</script>

<style scoped>
.arrow {
  position: absolute;
  top: 27px;
  left: 20px;
  font-size: 28px;
  color: #333333;
  z-index: 100;
  cursor: pointer;
  user-select: none;
}
</style>
