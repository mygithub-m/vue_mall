<template>
  <div class="goodRate">
    <div class="rate-header">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div v-for="item in rate.list" :key="item.rateId">
      <div class="user-info">
        <img :src="item.user.avatar" alt="" />
        <span>{{ item.user.uname }}</span>
      </div>
      <div class="content">{{ item.content }}</div>
      <div class="rate-time">
        <span>{{
          new Date(item.created * 1000).getFullYear() +
          '-' +
          (new Date(item.created * 1000).getMonth() + 1) +
          '-' +
          new Date(item.created * 1000).getDate()
        }}</span>
        <span>{{ item.style }}</span>
      </div>
      <div class="rate-img">
        <img v-for="item in item.images" :key="item" :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodRate",
  props: {
    rate: {
      type: Object,
      defalut () {
        return {}
      }
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.goodRate {
  padding: 10px;
  font-size: 12px;
  color: #333;
  border-bottom: 5px solid #eee;
}
.rate-header {
  border-bottom: 3px solid #eee;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  font-size: 14px;
  margin-bottom: 10px;
}
.user-info {
  display: flex;
  align-items: center;
  font-weight: bold;
}
.user-info img {
  width: 30px;
  height: 30px;
  border: 2px solid #eee;
  border-radius: 50%;
  margin-right: 5px;
}
.content {
  padding: 10px 0px;
}
.rate-time {
  padding-bottom: 10px;
}
.rate-time span {
  margin-right: 10px;
}
.rate-img {
  display: flex;
}
.rate-img img {
  width: 50px;
  height: 50px;
  margin-right: 5px;
}
</style>