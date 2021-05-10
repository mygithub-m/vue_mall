<template>
  <div class="cart-list">
    <cart-item :goods="item" v-for="item in goodsList" :key="item.iid" />
  </div>
</template>

<script>
import CartItem from './CartItem'
export default {
  name: 'CartList',
  components: {
    CartItem
  },
  computed: {
    goodsList () {
      return this.$store.state.cartList
    }
  }
}
</script>

<style scoped>
</style>
