<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data () {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    //当页面加载2s后初始化滚动
    setTimeout(() => {
      this._initScroll()
    }, 500)
  },
  methods: {
    _initScroll () {
      let probeType = this.probeType;
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        probeType,
        pullUpLoad: this.pullUpLoad
      });

      if (probeType === 2 || probeType === 3) {
        this.scroll.on("scroll", (position) => {
          this.$emit("contentscroll", position);
        });
      }

      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("loadMore", this.scroll)
          this.scroll.finishPullUp()
        })
      }
    },
    scrollToTop () {
      this.scroll.scrollTo(0, 0, 1000);
    },
    refreshScroll () {
      this.scroll && this.scroll.refresh();
    },
    scrollTo (y) {
      this.scroll.scrollTo(0, y, 1000)
    }
  }
};
</script>
 
<style>
.wrapper {
  height: 100%;
  overflow: hidden;
}
</style>