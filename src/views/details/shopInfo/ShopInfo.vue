<template>
  <div class="shopInfo">
    <div class="shop-name">
      <img :src="shop.shopLogo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-info">
      <div class="info">
        <div class="countSell">
          <p>{{ shop.cSells }}</p>
          <p>总销量</p>
        </div>
        <div class="countGoods">
          <p>{{ shop.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="score">
        <p v-for="item in shop.score" :key="item.name">
          <span>{{ item.name }}</span
          >:
          <span :class="{ red: item.isBetter, green: !item.isBetter }">{{
            item.score
          }}</span>
          <span v-if="item.isBetter" style="color: white; background-color: red"
            >高</span
          >
          <span v-else style="color: white; background-color: green">低</span>
        </p>
      </div>
    </div>
    <div class="enterShop">
      <div class="enterBtn">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shopInfo {
  border-bottom: 5px solid #eee;
}
.shop-name {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  font-size: 18px;
  color: #333;
}
.shop-name img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
  border: 2px solid #eee;
}
.shop-info {
  display: flex;
  font-size: 14px;
  padding: 5px 10px;
  color: #333;
}
.shop-info div {
  flex: 1;
}
.countSell p:first-child,
.countGoods p:first-child {
  font-weight: bold;
}

.score {
  text-align: center;
}
.score p {
  line-height: 25px;
}
.score p span:nth-child(2) {
  display: inline-block;
  width: 30px;
  text-align: left;
}
.info {
  display: flex;
  border-right: 3px solid #eee;
  align-items: center;
}
.info div {
  text-align: center;
}
.enterBtn {
  width: 33%;
  height: 25px;
  border-radius: 5px;
  background-color: #eee;
  text-align: center;
  color: #333;
  font-size: 14px;
  line-height: 25px;
}
.enterShop {
  text-align: center;
  padding: 10px 10px 20px 10px;
  display: flex;
  text-align: center;
  justify-content: center;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>