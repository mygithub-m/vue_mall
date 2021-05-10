<template>
  <div class="Details-Nav">
    <navigation>
      <div slot="left"><i class="el-icon-arrow-left" @click="back"></i></div>
      <div slot="center">
        <tab-control
          :isShowBorder="isShowBorder"
          :titles="titles"
          @tabclick="tabClick"
          ref="tabControl"
        ></tab-control>
      </div>
    </navigation>
  </div>
</template>

<script>
import Navigation from 'components/common/navigation/Navigation.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
export default {
  name: "DetailsNav",
  components: {
    Navigation,
    TabControl
  },
  data () {
    return {
      isShowBorder: false,
      titles: [
        {
          title: "商品",
        },
        {
          title: "参数",
        },
        {
          title: "评论",
        },
        {
          title: "推荐",
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    tabClick (index) {
      this.$emit('tabclick', index)
    },
    tabCheck (index) {
      this.$refs.tabControl.tabCheck(index)
    }
  }
}

</script>

<style scoped>
.Details-Nav {
  color: black;
}
</style>