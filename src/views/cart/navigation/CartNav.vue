<template>
  <div class="cart-nav">
    <navigation class="nav">
      <div slot="center" class="title">
        购物车({{ this.$store.state.cartList.length }})
      </div>
    </navigation>
  </div>
</template>

<script>
import Navigation from 'components/common/navigation/Navigation.vue'
export default {
  name: 'CartNav',
  components: {
    Navigation
  }
}
</script>

<style scoped>
.nav {
  background-color: var(--main-color);
}
.title {
  height: 100%;
  text-align: center;
  line-height: 44px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
</style>