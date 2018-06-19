//用于组件间代码共享的特性
module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function() {},
  methods: {
    myBehaviorMethod: function() {}
  }
})