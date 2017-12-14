/*technician.js*/

//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')
var util = require('../../utils/util')

Page({
  // 页面初始数据
  data: {
      // nav 初始化
      // cas picker
      casArray: ['英语','法语','阿拉伯','西班牙'],
      casIndex:0,
      // addr picker
      addrArray: util.replacePhone(fileData.userData().addrs,false),
      addrIndex:0,
      skillData: fileData.getSkilledData(),
      curNavId: 1,
		  curIndex: 0
  },
   
  onLoad:function(){
    var that = this
    that.setData({
      list: that.data.skillData
    })
  },
  // 跳转至详情页
  navigateDetail: function(e){AA
    wx.navigateTo({
      url:'../technicain_detail/technicain_detail?artype=' + e.currentTarget.dataset.arid
    })
  },
 
  // 类别选择
  bindCasPickerChange:function(e){
    console.log('Category picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      casIndex: e.detail.value
    })
  },
  // 地址选择
  bindAddrPickerChange:function(e){
    console.log('Category picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  }

  
})
