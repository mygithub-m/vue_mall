import request from 'network/request'

export function getMulData() {
  return request({
    methods: "get",
    url: "/home/multidata"
  })
}

export function getHomeData(type, page) {
  return request({
    methods: 'get',
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
