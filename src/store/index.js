import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  getters: {
    //购物车是否全选
    isSelectAll(state) {
      return !state.cartList.some(item => item.checked == false)
    },
    //选中商品总价格
    selectPrice(state) {
      return state.cartList.reduce((pre, item) => {
        if (item.checked) {
          pre = pre + (item.highPrice * item.number)
        }
        return pre
      }, 0).toFixed(2)
    },
    //结算数量
    selectCount(state) {
      return state.cartList.reduce((pre, item) => {
        if (item.checked) {
          pre = pre + item.number
        }
        return pre
      }, 0)
    }
  },
  mutations: {
    //如果商品已经存在，则数量加一
    addNumber(state, payload) {
      state.cartList.find(item => payload.iid == item.iid).number++
    },
    //如果商品不存在，则添加
    pushGoods(state, payload) {
      Vue.set(payload, 'number', 1)
      Vue.set(payload, 'checked', true)
      state.cartList.push(payload)
    },
    //修改商品选中状态
    updateChecked(state, payload) {
      const goods = state.cartList.find(item => {
        return payload == item.iid
      })
      goods.checked = !goods.checked
    },
    //全选按钮点击后
    selectAllClick(state, payload) {
      state.cartList.map((current) => {
        current.checked = payload
      })
    }
  },
  actions: {
    //添加到购物车
    addCart(context, payload) {
      if (context.state.cartList.some(item => item.iid == payload.iid)) {
        context.commit('addNumber', payload)
        return '商品数量+1'
      } else {
        context.commit('pushGoods', payload)
        return '添加成功!'
      }
    }
  }
})

export default store
