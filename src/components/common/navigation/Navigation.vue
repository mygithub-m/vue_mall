<template>
  <div class="navigation">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.navigation {
  display: flex;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.3);
}
.left {
  height: 44px;
  width: 60px;
  text-align: center;
  line-height: 44px;
}
.center {
  height: 44px;
  width: calc(100% - 120px);
}
.right {
  height: 44px;
  width: 60px;
}
</style>>
</style>