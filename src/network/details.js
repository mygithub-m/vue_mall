import request from './request'

//请求详情页数据
export function getDetailsData(config) {
  return request(config)
}

//获取推荐商品信息
export function getRecommend(config) {
  return request(config)
}


//商品类
export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services
    this.desc = itemInfo.desc
    this.highPrice = itemInfo.highPrice
    this.iid = itemInfo.iid
    this.img = itemInfo.topImages[0]
  }
}

//商铺类
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}
