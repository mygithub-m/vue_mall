<template>
  <div class="goodInfo">
    <div class="good-title">{{ goods.title }}</div>
    <div class="good-price">
      <span>{{ goods.price }}</span>
      <span
        ><del>{{ goods.oldPrice }}</del></span
      >
      <sup v-if="goods.discountDesc">{{ goods.discountDesc }}</sup>
    </div>
    <div class="good-columns">
      <span v-for="item in goods.columns" :key="item">{{ item }}</span>
    </div>
    <div class="good-service">
      <span v-for="item in goods.services" :key="item.name">
        <img :src="item.icon" alt="" />
        {{ item.name }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodInfo",
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goodInfo {
  width: 100%;
}
.good-title {
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
}
.good-price {
  height: 40px;
  padding: 0px 10px;
}
.good-price span:first-child {
  color: var(--main-color);
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  margin-right: 5px;
}
.good-price span:nth-child(2) {
  font-size: 12px;
  color: #999;
  margin-right: 5px;
}
.good-price sup {
  font-size: 12px;
  color: white;
  background-color: #f13e3a;
  border-radius: 7px;
  text-align: center;
  padding: 1px 5px;
}
.good-columns {
  display: flex;
  border-bottom: 3px solid #eee;
  line-height: 25px;
  color: #999;
  font-size: 12px;
  justify-content: space-between;
  padding: 0px 10px;
}
.good-service {
  display: flex;
  border-bottom: 5px solid #eee;
  font-size: 12px;
  height: 40px;
  line-height: 40px;
  justify-content: space-between;
  padding: 0px 10px;
  overflow: hidden;
}
.good-service span img {
  width: 12px;
  height: 12px;
}
</style>>
