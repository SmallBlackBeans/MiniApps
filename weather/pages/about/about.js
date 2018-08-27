// about.js
let utils = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    projectAddress: 'https://github.com/SmallBlackBeans/MiniApps',
    github: 'https://github.com/SmallBlackBeans/',
    email: '374802597@qq.com',
    qq: '374802597',
    swiperHeight: 'auto',
    bannerImageList: [
      'https://raw.githubusercontent.com/myvin/miniprogram/master/quietweather/images/logo.png', 'https://raw.githubusercontent.com/myvin/miniprogram/master/quietweather/images/miniqrcode.jpg',
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initSwiper()
  },


  previewImages(e) {
    let index = e.currentTarget.dataset.index || 0
    let urls = this.data.bannerImageList
    wx.previewImage({
      current: urls[index],
      urls,
      success: function(res) {},
      fail: (res) => {
        console.error('previewImage fail:', res)
      }
    })
  },

  initSwiper() {
    let systemInfo = getApp().getGloabData.systemInfo
    if (utils.isEmptyObject(systemInfo)) {
      wx.getSystemInfo({
        success: function(res) {
          this.setSwiperHeight(res)
        },
      })
    } else {
      this.setSwiperHeight(systemInfo)
    }
  },

  setSwiperHeight(res) {
    this.setData({
      swiperHeight: `${(res.windowWidth || res.screenWidth) / 375 * 200}px`
    })
  },


  //粘貼板
  copy(e) {
    let dataset = (e.currentTarget || {}).dataset || {}
    let title = dataset.title || ''
    let content = dataset.content || ''
    wx.setClipboardData({
      data: content,
      success() {
        wx.showToast({
          title: `已經複製${title}`,
          duration: 2000
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})