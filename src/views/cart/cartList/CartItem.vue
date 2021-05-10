<template>
  <div class="cart-item">
    <div class="checkBox">
      <el-checkbox v-model="goods.checked" @change="goodsCheck"></el-checkbox>
      <!-- <input type="checkBox" :checked="goods.checked" @click="goodsCheck" /> -->
    </div>
    <div class="goodsImg">
      <img :src="goods.img" alt="" />
    </div>
    <div class="goodsInfo">
      <div class="goodsTitle">{{ goods.title }}</div>
      <div class="goodsDesc">{{ goods.desc }}</div>
      <div class="priceAndNumber">
        <span>￥{{ goods.highPrice }}</span>
        <span>x{{ goods.number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    //复选框选择
    goodsCheck () {
      this.$store.commit('updateChecked', this.goods.iid)
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
  padding: 10px 5px;
  border-bottom: 5px solid #eee;
}
.goodsImg {
  height: 100%;
}
.goodsImg img {
  height: 100%;
  border-radius: 3px;
}

.goodsInfo {
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.goodsTitle {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.goodsDesc {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}
.priceAndNumber {
  display: flex;
  justify-content: space-between;
}
.priceAndNumber span:first-child {
  color: var(--main-color);
}
</style>