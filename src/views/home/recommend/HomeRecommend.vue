<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="item in recommend" :key="item.acm">
      <img :src="item.image" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
.home-recommend {
  height: 130px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 15px solid #eee;
}

.home-recommend img {
  width: 75%;
  /* margin-top: 20px; */
  margin-bottom: 10px;
}

.home-recommend-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: gray;
}
</style>