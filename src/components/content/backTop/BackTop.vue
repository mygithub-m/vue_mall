<template>
  <div class="backTop">
    <i class="el-icon-top"></i>
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.backTop {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  color: var(--main-color);
  position: fixed;
  z-index: 10;
  right: 10px;
  bottom: 65px;
  background-color: white;
  border-radius: 50%;
}
</style>