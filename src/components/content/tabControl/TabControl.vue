<template>
  <div class="tab">
    <div
      class="tab-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span :class="{ notBorder: !isShowBorder }">{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data () {
    return {
      currentIndex: 0,
      flag: true
    };
  },
  props: {
    titles: {
      type: Array,
      default () {
        return [
          {
            sort: "pop",
            title: "流行",
          },
          {
            sort: "new",
            title: "新款",
          },
          {
            sort: "sell",
            title: "精选",
          },
        ];
      },
    },
    isShowBorder: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      this.flag = false
      setTimeout(() => {
        this.flag = true
      }, 1000)
      this.$emit("tabclick", this.currentIndex);

    },
    tabCheck (index) {
      if (this.flag) {
        this.currentIndex = index
      }
    }
  },
};
</script>

<style scoped>
.tab {
  height: 44px;
  width: 100%;
  display: flex;
  background-color: white;
}

.tab-item {
  flex: 1;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  color: gray;
}

.tab-item span {
  padding: 3px;
}

.active {
  color: var(--main-color);
}

.active span {
  border-bottom: 2px solid var(--main-color);
}

.notBorder {
  border-bottom: none !important;
}
</style>