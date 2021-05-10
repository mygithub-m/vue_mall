<template>
  <div class="cart-bottom">
    <div class="right">
      <div class="selectAll" @click="selectAllClick">
        <!-- <el-checkbox v-model="isChecked" @change="aa">全选</el-checkbox> -->
        <input type="checkBox" :checked="isSelectAll" ref="selectAll" />全选
      </div>
      <div class="countPrice">
        合计：￥{{ this.$store.getters.selectPrice }}
      </div>
    </div>
    <div class="toPay">去结算（{{ selectCount }}）</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartBottom',
  computed: {
    ...mapGetters(['isSelectAll', 'selectCount'])
  },
  methods: {
    selectAllClick () {
      this.$store.commit('selectAllClick', this.$refs.selectAll.checked)
    }
  }
}
</script>

<style scoped>
.cart-bottom {
  height: 50px;
  width: 100%;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
}
.right {
  display: flex;
  align-items: center;
}
.selectAll {
  margin: 0px 15px;
}
.countPrice {
  color: #666;
  font-size: 14px;
}
.toPay {
  background-color: var(--main-color);
  color: white;
  text-align: center;
  line-height: 50px;
  padding: 0px 10px;
}
</style>