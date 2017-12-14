// pages/alls/alls.js
var app=getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{},
   onLoad: function (res) {
    // console.log(res)
      var that=this
      wx.request({
        url:'https://xcxu.we-fs.com/index.php/api/goods/goodsInfo?admin_id='+ app.globalData.admin_id +'&type='+res.catid+'&code=3&goods_id='+res.id,
        success:function(res){
          console.log(res.data.result[0])
          that.setData({
              allimg:res.data.result[0]
          })
            that.data.here = res.data.data[0].goods_content

            var article = that.data.here;

            WxParse.wxParse('article', 'html', article, that, 5);
        }
      })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})