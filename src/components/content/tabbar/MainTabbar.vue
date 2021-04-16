<template>
  <tabbar>
    <tabbar-item path="/home">
      <i class="el-icon-s-home" slot="tabBar-icon"></i>
      <div slot="tabBar-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category">
      <i class="el-icon-menu" slot="tabBar-icon"></i>
      <div slot="tabBar-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart">
      <i class="el-icon-shopping-cart-full" slot="tabBar-icon"></i>
      <div slot="tabBar-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <i class="el-icon-user-solid" slot="tabBar-icon"></i>
      <div slot="tabBar-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "../../common/tabbar/Tabbar";
import TabbarItem from "../../common/tabbar/TabbarItem";

export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style scoped>
</style>
