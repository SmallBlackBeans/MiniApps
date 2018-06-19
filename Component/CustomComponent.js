// CustomComponent.js
var myBehavior = require('my-behavior')

Component({
  //自定义行为和内置行为
  behaviors: [myBehavior,'wx://form-field'],
  //引用外部样式
  externalClasses: ['my-class'],
  options: {
    multipleSlots: true //组件定义启用多slot支持
  },
  /**
   * 组件的属性列表 对外属性
   */
  properties: {
    innerText: {
      type: String,
      value: 'default value',
      observer: function(newVal, oldVal, changedPath) {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  attached: function() {},
  moved: function() {},
  detached: function() {},
  /**
   * 组件的方法列表
   */
  methods: {
    _innerMethod: function() {
      this.setData({

      })
    },
    _propertyChange: function(newVal, oldVal) {

    },
    onTap: function() {
      var myEventDetail = {}
      var myEventOption = {}
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})