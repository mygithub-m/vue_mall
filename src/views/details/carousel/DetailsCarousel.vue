<template>
  <el-carousel trigger="click" arrow="never">
    <el-carousel-item v-for="(item, index) in detailsImage" :key="index">
      <img :src="item" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "DetailsCarousel",
  props: {
    detailsImage: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>

<style>
.el-carousel__button {
  width: 8px !important;
  height: 8px !important;
  border-radius: 50% !important;
}
.is-active button {
  background-color: var(--main-color);
}
</style>