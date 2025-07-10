<template>
  <button
      class="button_com"
      :style="computedStyle"
      @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button_com",
  props: {
    label: {
      type: String,
      default: '더보기'
    },
    customStyle: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    computedStyle(){
      return {
        padding: '5px 15px',
        fontSize: '18px',
        backgroundColor: '#2260FF',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        ...this.customStyle
      };
    }
  }
}
</script>

<style scoped>
.button_com {
  font-family: inherit;
}
/*전반적인 글꼴 통일을 위한 안정장치 역할*/
</style>
