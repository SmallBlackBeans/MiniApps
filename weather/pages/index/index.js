//index.js

/**
 * 我是韓小醋 跟著別人學小程序
 * 源碼來自 https://github.com/myvin/quietweather
 * 一行一行敲一遍
 */

//获取应用实例
// pm2.5 浓度对应的指数等级
// 0-50 优
// 50-100 良
// 100-150 轻度污染：对敏感人群不健康
// 150-200 中度污染：不健康
// 200-300 重度污染：非常不健康
// 300-500 严重污染：有毒物
// 500以上 爆表：有毒物
let messages = require('../../da')
let gloabalData = getApp().getG
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
 
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
