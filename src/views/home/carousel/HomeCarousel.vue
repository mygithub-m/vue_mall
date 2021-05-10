<template>
  <el-carousel trigger="click" height="187.2px" arrow="never">
    <el-carousel-item v-for="item in banner" :key="item.acm">
      <img :src="item.image" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "HomeCarousel",
  props: {
    banner: {
      type: Array,
      default: [],
    },
  },
  created() {},
};
</script>


<style>
.el-carousel__item img {
  width: 100%;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>