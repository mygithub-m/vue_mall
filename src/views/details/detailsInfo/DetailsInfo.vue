<template>
  <div class="detailsInfo">
    <div class="desc"></div>
    <div class="info" v-for="item in detailsInfo" :key="item.key">
      <div class="key">{{ item.key }}</div>
      <img
        v-for="(item, index) in item.list"
        :key="index"
        :src="item"
        alt=""
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsInfo",
  props: {
    detailsInfo: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    imgLoad () {
      this.$emit("imgLoad")
    }
  }
}
</script>

<style scoped>
.detailsInfo {
  border-bottom: 5px solid #eee;
}
.info img {
  width: 100%;
}
.key {
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  color: #333;
  font-family: '隶书';
}
</style>