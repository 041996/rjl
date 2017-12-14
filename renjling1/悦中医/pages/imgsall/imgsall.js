// pages/imgsall/imgsall.js
var app=getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var that=this
    wx.request({
      url: 'https://xcxu.we-fs.com/index.php/api/goods/goodsInfo?admin_id=' + app.globalData.admin_id+'&goods_id=' + options.id,
      method: "post",
      success: function (res) {
        console.log('aaaa' + res.data.result)

        that.data.here = res.data.result[0].goods_content


        var article = that.data.here;

        WxParse.wxParse('article', 'html', article, that, 5);

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})