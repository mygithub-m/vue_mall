<template>
  <div id="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data () {
    return {
      isShow: false,
      message: '添加成功!'
    }
  },
  methods: {
    show (message, duration) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style scoped>
#toast {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 15px;
  text-align: center;
  z-index: 9999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
}
</style>