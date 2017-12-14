// pages/list/list.js
var app=getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    
  },
  onLoad: function (res) {
    console.log(res)
      var that=this
      wx.request({
        url:'https://xcxu.we-fs.com/index.php/api/goods/goodsInfo?admin_id='+app.globalData.admin_id+'&type=' + app.globalData.guanyu + '&code=3',
        success:function(res){
            that.data.here = res.data.data[0].goods_content

            var article = that.data.here;

            WxParse.wxParse('article', 'html', article, that, 5);
        }
      })
  }
})
