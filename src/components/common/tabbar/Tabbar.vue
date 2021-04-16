<template>
  <div id="tabbar">
     <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Tabbar",
  components: {
  }
}
</script>

<style scoped>
#tabbar {
  display: flex;
  background-color: #f6f6f6;
  padding: 3px 0px;

  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;

  box-shadow: 0px -2px 3px rgba(100,100,100,0.3);
}
</style>
