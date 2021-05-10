<template>
  <div id="home-nav">
    <navigation>
      <div slot="center" class="homeNav-center">购物街</div>
    </navigation>
  </div>
</template>

<script>
import Navigation from "components/common/navigation/Navigation";

export default {
  name: "HomeNav",
  components: { Navigation },
};
</script>

<style>
#home-nav {
  height: 44px;
  background-color: var(--main-color);
}
.homeNav-center {
  line-height: 44px;
  width: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
}
</style>