// pages/meishi/meishi.js
var app=getApp()
var catid=0
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this
    wx.request({
      url:'https://xcxu.we-fs.com/index.php/api/goods/goodsInfo?admin_id='+app.globalData.admin_id,
      success:function(res){
        catid = app.globalData.leibie
          that.setData({
            allimg: res.data.data.filter(that.filterHeaderCatid)
          })
        catid = app.globalData.lianxi
          that.setData({
            allimgcon: res.data.data.filter(that.filterHeaderCatid)
          })
      }
    })
  },
    filterHeaderCatid:function(e){
    return(catid==e.cat_id)
  },
  list:function(e){
    wx.navigateTo({
      url:"../alls/alls?catid="+e.currentTarget.dataset.catid+'&id='+e.currentTarget.dataset.id
    })
  },
  callme:function(e){
    wx.makePhoneCall({
      phoneNumber:e.currentTarget.dataset.name,
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