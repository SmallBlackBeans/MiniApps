// custom-ul.js
Component({
  relations: {
    './custom-li': {
      type: 'child', //关联的目标节点为子节点
      linked: function(target) {

      },
      linkChanged: function(target) {},
      unlinked: function(target) {}
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _getAllLi: function() {
      var nodes = this.getRelationNodes('./custom-li')
    },
  },
  ready: function() {
    this._getAllLi()
  }
})