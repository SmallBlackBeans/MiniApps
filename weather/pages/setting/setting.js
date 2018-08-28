// pages/setting/setting.js
let utils = require('../../utils/utils.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        setting: {},
        show: false,
        screenBrightness: '獲取中',
        keepscreenon: false,
        SDKVersion: '',
        enableUpdate: true
    },

    switchChange(e) {
        //currentTarget 返回触发该事件的元素
        //获取标签中的data-*的数据,
        let dataset = e.currentTarget.dataset
        let switchparam = dataset.switchparam
        let setting = this.data.setting
        if (switchparam === 'forceUpdate') {
            if (this.data.enableUpdate) {
                //e.detail // 自定义组件触发事件时提供的detail对象
                //根據事件不同，detail內容不同
                //https://developers.weixin.qq.com/miniprogram/dev/component/input.html
                setting[switchparam] = (e.detail || {}).value
            } else {
                setting[switchparam] = false
                wx.showToast({
                    title: '基礎庫版本較低，無法使用這個功能',
                    icon: 'none',
                    duration: 2000,
                })
            }
        } else if (switchparam === 'keepscreenon') {
            //TODO: - 
        }
    },

    hide() {
        this.setData({
            show: false,
        })
    },

    updateInstruc() {
        this.setData({
            show: true,
        })
    },

    onShow() {
        this.setData({
            keepscreenon: getApp().globalData.keepscreenon,
        })
        this.ifDisableUpdate()
        this.getScreenBrightness()
        wx.getStorage({
            key: 'setting',
            success: function(res) {
                let setting = res.data
                this.setData({
                    setting,
                })
            },
            fail: function(res) {
                this.setData({
                    setting: {}
                })
            }
        })
    },

    ifDisableUpdate() {
        let systeminfo = getApp().globalData.systeminfo
        let SDKVersion = systeminfo.SDKVersion

        let version = utils.compVersion(SDKVersion, '1.9.90')
        if (version >= 0) {
            this.setData({
                SDKVersion,
                enableUpdate: true,
            })
        } else {
            this.setData({
                SDKVersion,
                enableUpdate: false,
            })
        }
    },

    getHCEState() {
        wx.showLoading({
            title: '檢測中...',
        })
        wx.getHCEState({
            success: function(res) {
                wx.hideLoading()
                wx.showModal({
                    title: '檢測結果',
                    content: '該設備不支持NFC功能',
                    showCancel: false,
                    confirmText: '好吧',
                    confirmColor: '#40a7e7',
                })
            },
            fail: function(res) {
                wx.hideLoading()
                wx.showModal({
                    title: '檢測結果',
                    content: '未檢測到NFC硬件',
                    showCancel: false,
                    confirmText: '稍後重試',
                    confirmColor: '#40a7e7',
                })
            },
        })
    },


    getScreenBrightness() {
        wx.getScreenBrightness({
            success: function(res) {
                this.setData({
                    screenBrightness: Number(res.value * 100).toFixed(0),
                })
            },
            fail: function(res) {
                this.setData({
                    screenBrightness: '獲取失敗'
                })
            },
        })
    },
    //改變屏幕亮度
    screenBrightnewssChanging(e) {
        this.setScreenBrightness(e.detail.value)
    },


    setScreenBrightness(val) {
        wx.setScreenBrightness({
            value: val / 100,
            success: function(res) {
                this.setData({
                    screenBrightness: val,
                })
            },
        })
    },

    setKeepScreenOn(b) {
        wx.setKeepScreenOn({
            keepScreenOn: b,
            success: function(res) {
                this.setData({
                    keepscreenon: b,
                })
            }
        })
    },

    getsysteminfo() {
        wx.navigateTo({
            url: '/pages/systeminfo/systeminfo',
        })
    },

    removeStorage(e) {
        let that = this
        let datatype = e.currentTarget.dataset.type
        if (datatype === 'menu') {
            wx.setStorage({
                key: 'pos',
                data: {
                    top: 'auto',
                    left: 'auto'
                },
                success: function(res) {
                    wx.showToast({
                        title: '懸浮球已復位',
                    })
                },
            })
        } else if (datatype === 'setting') {
            wx.showModal({
                title: '提示',
                content: '確認初始化設置',
                cancelText: '等會吧',
                confirmColor: '#40a7e7',
                success: function(res) {
                    if (res.confirm) {
                        wx.removeStorage({
                            key: 'setting',
                            success: function(res) {
                                wx.showToast({
                                        title: '設置已回復初始化',
                                    }),
                                    this.setData({
                                        setting: {}
                                    })
                            },
                        })
                    }
                },
            })
        } else if (datatype === 'all') {
            wx.showModal({
                title: '提示',
                content: '確認要刪除嗎',
                cancelText: '等會吧',
                confirmColor: '#40a7e7',
                success: function(res) {
                    if (res.confirm) {
                        wx.clearStorage({
                            success: function(res) {
                                wx.showToast({
                                        title: '數據已經清除',
                                    }),
                                    this.setData({
                                        setting: {},
                                        pos: {},
                                    })
                            },
                        })
                    }
                }
            })
        }
    },
})