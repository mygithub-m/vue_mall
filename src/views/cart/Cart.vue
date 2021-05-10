<template>
  <div id="cart">
    <cart-nav />
    <div class="cart-main">
      <scroll class="scroll">
        <cart-list />
      </scroll>
      <cart-bottom />
    </div>
  </div>
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll.vue'
import CartBottom from './cartBottom/CartBottom.vue'
import CartList from './cartList/CartList.vue'
import CartNav from './navigation/CartNav.vue'
export default {
  components: { CartNav, CartList, CartBottom, Scroll },
  name: "Cart"
}
</script>

<style scoped>
#cart {
  height: 100%;
}
.scroll {
  height: calc(100% - 50px);
}
.cart-main {
  position: relative;
  height: calc(100% - 94px);
  top: 44px;
  left: 0px;
}
</style>
