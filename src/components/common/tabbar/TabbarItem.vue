<template>
  <div class="tabBarItem" :style="isActive" @click="itemClick">
    <slot name="tabBar-icon"></slot>
    <slot name="tabBar-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#409EFF'
    }
  },
  data() {
    return {}
  },
  computed: {
    isActive(){
      return this.$route.path == this.path ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tabBarItem {
  flex: 1px;
  text-align: center;
  font-family: 宋体;
}

i {
  font-size: 24px;
}

.active {
  color: #409EFF;
}
</style>
