<template>
  <div class="paramInfo">
    <table>
      <tr v-for="item in paramInfo.set" :key="item.key">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.paramInfo {
  border-bottom: 5px solid #eee;
}
table {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  color: var(--main-color);
}
tr td:first-child {
  width: 25%;
  color: #333;
}
tr td {
  border-bottom: 1px solid #eee;
  height: 40px;
}
</style>