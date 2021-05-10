<template>
  <ul>
    <li @click="goodDetails(good)" v-for="(good, index) in goods" :key="index">
      <div class="good-item">
        <img :src="good.show.img" alt="" @load="goodImgLoad" />
        <p class="good-title">{{ good.title }}</p>
        <p class="good-msg">
          <span class="good-price">￥{{ good.price }}</span>
          <span><i class="el-icon-star-off"></i>{{ good.sale }}</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  components: {},
  name: "ShowGoods",
  props: {
    goods: {
      type: Array,
      default () {
        return [];
      },
    },
  },
  created () { },
  methods: {
    //当商品图片加载后就去刷新一下better-scroll
    //这里使用了事件总线
    goodImgLoad () {
      this.$bus.$emit("imgLoad");
    },
    //查看商品详情
    goodDetails (good) {
      this.$router.push({
        path: "/details",
        query: {
          iid: good.iid
        }
      })
    }
  },
};
</script>
<style scoped>
li {
  width: 50%;
  display: inline-block;
}

.good-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: gray;
  margin-bottom: 5px;
}

.good-item p {
  width: 95%;
  height: 20px;
  line-height: 20px;
}

.good-title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.good-msg {
  display: flex;
  justify-content: space-around;
}

.good-price {
  color: var(--main-color);
}

.good-item img {
  width: 95%;
  border-radius: 5px;
}
</style>