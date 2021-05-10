<template>
  <div id="home">
    <home-nav />
    <tab-control
      ref="tabControl1"
      class="tabControl"
      v-show="isShow"
      @tabclick="tabClick"
    />
    <div class="home-main">
      <scroll
        @contentscroll="contentScroll"
        @loadMore="loadMore"
        ref="scroll"
        :probeType="probeType"
        :pullUpLoad="pullUpLoad"
      >
        <home-carousel :banner="banner" />
        <home-recommend :recommend="recommend" />
        <home-popular />
        <tab-control ref="tabControl2" @tabclick="tabClick" />
        <show-goods :goods="showGoods" />
      </scroll>
      <back-top
        ref="backTop"
        v-show="isShowBackTop"
        @click.native="backTop"
      ></back-top>
    </div>
  </div>
</template>

<script>
import HomeNav from 'views/home/navigation/HomeNav.vue'
import HomeCarousel from 'views/home/carousel/HomeCarousel.vue'
import HomeRecommend from 'views/home/recommend/HomeRecommend.vue'
import { getMulData, getHomeData } from 'network/home.js'
import HomePopular from './popular/HomePopular.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import ShowGoods from 'components/content/showGoods/ShowGoods.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

export default {
  name: 'Home',
  components: {
    HomeNav,
    HomeCarousel,
    HomeRecommend,
    HomePopular,
    TabControl,
    ShowGoods,
    Scroll,
    BackTop,
  },
  data () {
    return {
      banner: [],
      recommend: [],
      goods: [
        {
          sort: 'pop',
          page: 1,
          list: [],
        },
        {
          sort: 'new',
          page: 1,
          list: [],
        },
        {
          sort: 'sell',
          page: 1,
          list: [],
        },
      ],
      currentIndex: 0,
      isShowBackTop: false,
      probeType: 3,
      pullUpLoad: true,
      isShow: false
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentIndex].list
    },
  },
  created: function () {
    //获取轮播图和分类信息
    this.getHomeData()
    //获取商品信息
    this.loadMore();
    //用于监听商品中图片加载后页面刷新
    this.imgLoad()
  },
  methods: {
    /**
     * 轮播图部分
     */
    //获取轮播图和分类信息
    getHomeData () {
      getMulData()
        .then((res) => {
          this.banner = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        })
        .catch((err) => {
          alert(err)
        })
    },
    /**
     * 推荐部分
     */
    /**
     * 流行部分
     */
    /**
     * 类别切换部分
     */
    //类别切换
    tabClick (index) {
      this.currentIndex = index
      this.loadMore()
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    /**
     * 商品展示部分
     */
    //通过类型和页码获取商品
    getGoods (index) {
      getHomeData(this.goods[index].sort, this.goods[index].page)
        .then((res) => {
          this.goods[index].page++;
          for (const item of res.data.data.list) {
            this.goods[index].list.push(item)
          }
        })
        .catch((err) => {
          alert(err)
        })
    },
    //上拉加载更多
    loadMore () {
      //获取商品内容
      this.getGoods(this.currentIndex)
    },
    //返回顶部按钮显示
    contentScroll (position) {
      //返回顶部
      this.isShowBackTop = (-position.y) > 500

      //获取类别距离顶部位置
      this.isShow = (-position.y) > this.$refs.tabControl2.$el.offsetTop
    },
    //返回顶部
    backTop () {
      this.$refs.scroll.scrollToTop()
    },
    //防抖函数，用于在一定时间内不频繁调用方法
    debounce (func, delay) {
      let timer = null
      return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply()
        }, delay)
      }
    },
    //监听商品图片加载，scroll重新计算高度
    imgLoad () {
      this.$bus.$on("imgLoad", this.debounce(() => {
        this.$refs.scroll.refreshScroll()
      }, 50))
    }
  },
}
</script>

<style scoped>
#home {
  height: 100%;
  position: relative;
}
.home-main {
  width: 100%;
  /* height: calc(100% - 94px); */
  position: absolute;
  top: 44px;
  right: 0px;
  left: 0px;
  bottom: 50px;
  background-color: white;
}
.tabControl {
  position: fixed;
  top: 43px;
  right: 0px;
  left: 0px;
  z-index: 9;
}
</style>
