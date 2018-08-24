//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: function (res) {
        this.globalData.systemInfo = res
        this.globalData.isIphoneX = /iphonex/gi.test(res.model.replace(/\s+/, ''))
      },
    })
  },
  globalData: {
    userInfo: null,
    systemInfo: {},
    // 屏幕常亮
    keepscreenon: false,
    isIphoneX: false,
    ak: 'oLXUM2Apgh33cESEcsNkyQtK6YfstQ30'
  },
  setGeocodeUrl(address) {
    return 'https://api.map.baidu.com/geocoder/v2/?address=${address}&output=json&ak=${this.globalData.ak}'
  },

})