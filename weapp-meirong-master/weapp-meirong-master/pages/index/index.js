//index.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  // 页面初始数据
  data: {
     // colors:['red','orange','yellow','green','purple'],
      // banner 初始化
      banner_url: fileData.getBannerData(),
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      // nav 初始化
      navTopItems: fileData.getIndexNavData(),
      navSectionItems: fileData.getIndexNavSectionData(),
      curNavId: 1,
		  curIndex: 0,
         "banner_list": [
      {
        "banner": [
          {
            "pic_url": "http://www.51yuban.net/img/1_1.jpg",
          },
          {
            "pic_url": "http://www.51yuban.net/img/1_2.jpg",
          },
          {
            "pic_url": "http://www.51yuban.net/img/1_3.jpg",
          },
          {
            "pic_url": "http://www.51yuban.net/img/1_3.jpg",
          },
        ]
      },
    ]
  },
 
    ni:function(){
    wx.navigateTo({
      url:'../jing/jing'
    })
  },
  niair:function(){
     wx.switchTab({ url:'../technician/technician'})
  },
  onLoad:function(){
    var that = this
    that.setData({
      list: that.data.navSectionItems
    })
  },
  //标签切换
  switchTab: function(e) {
      let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
      this.curIndex = parseInt(e.currentTarget.dataset.index)
      console.log(e)
      var that = this
      this.setData({
        curNavId: id,
        curIndex: index,
      })
      
  },
  // 跳转至详情页
  navigateDetail: function(e){
    wx.navigateTo({
      url:'../detail/detail?artype=' + e.currentTarget.dataset.artype
    })
  },
  // 加载更多
  
  // book
  bookTap: function(e){
    wx.navigateTo({
      url:'../book/book?aid='+e.currentTarget.dataset.aid
    })
  },
    onShareAppMessage: function () {
    return {
      title: '',
      path: 'pages/index/index'
    }
  }
  
})
