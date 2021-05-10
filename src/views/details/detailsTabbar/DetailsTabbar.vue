<template>
  <div class="detailsTabbar">
    <div class="details-one">
      <div>
        <i class="el-icon-chat-dot-square"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="el-icon-shopping-bag-1"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="el-icon-star-off"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="details-two">
      <div @click="addCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsTabbar",
  methods: {
    //添加商品到购物车
    addCart () {
      this.$emit("addCartClick")
    }
  }
}
</script>

<style scoped>
.detailsTabbar {
  position: fixed;
  bottom: -1px;
  right: 0px;
  left: 0px;
  height: 50px;
  display: flex;
  z-index: 10;
  background-color: #f6f6f6;
  box-shadow: 0px -2px 3px rgba(100, 100, 100, 0.3);
}
.details-one,
.details-two {
  width: 50%;
  display: flex;
}
.details-one div,
.details-two div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.details-one div span {
  font-size: 12px;
}
.details-two div {
  font-size: 14px;
  width: 50%;
}
.details-two div:first-child {
  background-color: yellow;
}
.details-two div:last-child {
  background-color: var(--main-color);
  color: white;
}
</style>