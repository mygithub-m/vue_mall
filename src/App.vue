<template>
  <div id="app">
    <keep-alive exclude="Details,Cart">
      <router-view />
    </keep-alive>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/tabbar/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>

<style>
@import 'assets/css/base.css';
#app {
  height: 100%;
}
</style>
