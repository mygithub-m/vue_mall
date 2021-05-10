<template>
  <div id="details">
    <details-nav @tabclick="tabClick" ref="detailsNav" />
    <div class="details-main">
      <scroll
        ref="scorll"
        :probeType="probeType"
        @contentscroll="contentscroll"
      >
        <details-carousel :detailsImage="detailsImage" />
        <good-info :goods="goods" />
        <shop-info :shop="shop" />
        <details-info :detailsInfo="detailsInfo" @imgLoad="imgLoad" />
        <param-info :paramInfo="paramInfo" ref="param" />
        <good-rate :rate="rate" ref="rate" />
        <recommend :recommend="recommend" @imgLoad="imgLoad" ref="recommend" />
      </scroll>
    </div>
    <back-top @click.native="backTop" v-show="isShow" />
    <details-tabbar @addCartClick="addCart" />
    <toast ref="toast" />
  </div>
</template>

<script>
import DetailsNav from 'views/details/navigation/DetailsNav'
import DetailsCarousel from './carousel/DetailsCarousel.vue'
import { getDetailsData, Goods, Shop, getRecommend } from 'network/details'
import GoodInfo from './goodInfo/GoodInfo.vue'
import ShopInfo from './shopInfo/ShopInfo.vue'
import DetailsInfo from './detailsInfo/DetailsInfo.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import ParamInfo from './paramInfo/ParamInfo.vue'
import GoodRate from './goodRate/GoodRate.vue'
import Recommend from './recommend/Recommend'
import DetailsTabbar from './detailsTabbar/DetailsTabbar.vue'
import BackTop from 'components/content/backTop/BackTop.vue'
import Toast from 'components/common/toast/Toast.vue'

export default {
  components: {
    DetailsNav,
    DetailsCarousel,
    GoodInfo,
    ShopInfo,
    DetailsInfo,
    Scroll,
    ParamInfo,
    GoodRate,
    Recommend,
    DetailsTabbar,
    BackTop,
    Toast
  },
  name: "Details",
  data () {
    return {
      iid: null,
      detailsImage: [],
      goods: {},
      shop: {},
      detailsInfo: [],
      paramInfo: {},
      rate: {},
      recommend: [],
      probeType: 3,
      isShow: false
    }
  },
  computed: {
    paramOffsetTop () {
      return -this.$refs.param.$el.offsetTop
    },
    rateOffsetTop () {
      return -this.$refs.rate.$el.offsetTop
    },
    recommendOffsetTop () {
      return -this.$refs.recommend.$el.offsetTop
    }
  },
  created () {
    //获取商品iid
    this.iid = this.$route.query.iid
    this.getData()
    this.getRecommend()
  },
  methods: {
    //获取详情页信息
    getData () {
      getDetailsData({
        url: '/detail',
        method: "GET",
        params: {
          iid: this.iid
        }
      }).then((res => {
        const result = res.data.result
        //获取轮播图图片
        this.detailsImage = result.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo)
        //获取店铺信息
        this.shop = new Shop(result.shopInfo)
        //获取商品效果图信息
        this.detailsInfo = result.detailInfo.detailImage
        //获取商品参数信息
        this.paramInfo = result.itemParams.info
        //获取商品评论信息
        this.rate = result.rate

      })).catch(err => {
        alert(err)
      })
    },
    //获取推荐商品信息
    getRecommend () {
      getRecommend({
        url: "/recommend",
        method: "Get"
      }).then(res => {
        this.recommend = res.data.data.list
      }).catch(err => {
        alert(err)
      })
    },
    //监听商品详情图片加载,刷新scorll
    imgLoad () {
      this.$refs.scorll.refreshScroll()
    },
    //回到顶部
    backTop () {
      this.$refs.scorll.scrollToTop()
    },
    //内容滚动
    contentscroll (position) {
      this.isShow = (-position.y) > 1000
      this.tabCheck(-position.y)
    },
    //通过滚动切换导航
    tabCheck (y) {
      if (y >= -this.paramOffsetTop && y < -this.rateOffsetTop) {
        this.$refs.detailsNav.tabCheck(1)
      } else if (y >= -this.rateOffsetTop && y < -this.recommendOffsetTop) {
        this.$refs.detailsNav.tabCheck(2)
      } else if (y >= -this.recommendOffsetTop) {
        this.$refs.detailsNav.tabCheck(3)
      } else if (y < -this.paramOffsetTop) {
        this.$refs.detailsNav.tabCheck(0)
      }
    },
    //导航切换
    tabClick (index) {
      switch (index) {
        case 0: {
          this.backTop()
          break
        };
        case 1: {
          this.$refs.scorll.scrollTo(this.paramOffsetTop)
          break
        };
        case 2: {
          this.$refs.scorll.scrollTo(this.rateOffsetTop)
          break
        };
        case 3: {
          this.$refs.scorll.scrollTo(this.recommendOffsetTop)
          break
        }
      }
    },
    //添加到购物车
    addCart () {
      //显示toast
      // console.log();
      //添加商品
      this.$store.dispatch('addCart', this.goods).then(res => {
        this.$refs.toast.show(res, 1500)
      }).catch(err => {
        this.$refs.toast.show('添加失败!', 1500)
      })
    }
  }
}
</script>

<style scoped>
.details-main {
  position: fixed;
  top: 44px;
  left: 0px;
  right: 0px;
  z-index: 9;
  height: calc(100% - 44px);
  overflow: auto;
  background-color: white;
}
</style>