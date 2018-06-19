//logs.js
const util = require('../../utils/util.js')

Page({
  data: {//页面数据源
    logs: []
  },
  onLoad: function () {
    //页面渲染后 执行
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
