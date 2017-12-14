//index.js
var app=getApp()
var catid=0
//获取应用实例
var app = getApp()
Page({
  data: {
    autoplay:true
  },
  onLoad: function () {
    var that = this
      wx.request({
        url: 'https://xcxu.we-fs.com/index.php/api/goods/goodsInfo?admin_id='+app.globalData.admin_id,
        success: function (res) {
          // console.log(res.data.data)
          catid = app.globalData.lunbo
          that.setData({
            imgs: res.data.data.filter(that.filterHeaderCatid)
          })
          catid = app.globalData.leibie
          that.setData({
            allimg: res.data.data.filter(that.filterHeaderCatid).slice(0,4)
          })
          catid = app.globalData.lianxi
          that.setData({
            allimgcon: res.data.data.filter(that.filterHeaderCatid)
          })
        }
      })
      // wx.request({
      //   url:'https://xcxu.we-fs.com/index.php/api/goods/goodsInfo?admin_id=333&type=' + 4684 + '&code=3',
      //   success:function(res){
      //     console.log(res.data.data[0])
      //     that.setData({
      //       namess:res.data.data[0]
      //     })
      //   }
      // })
  },  
  callme:function(e){
    wx.makePhoneCall({
      phoneNumber:e.currentTarget.dataset.name,
    })
  },
  list:function(e){
    wx.navigateTo({
      url:"../alls/alls?catid="+e.currentTarget.dataset.catid+'&id='+e.currentTarget.dataset.id
    })
  },
  filterHeaderCatid:function(e){
    return(catid==e.cat_id)
  },
  showit:function(res){
    wx.navigateTo({
      url:"../list/list"
    })
  },
  more:function(res){
    wx.navigateTo({
      url:'../meishi/meishi'
    })
  },
  markertap:function(){
  var that = this
  wx.getLocation({
  type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  success: function (res) {
    console.log(res)
    var latitude = res.latitude;
    var longitude = res.longitude;
    wx.openLocation({
      latitude:39.940700,
      longitude:116.393060,
      scale: 1,
      name: "悦中医"
    })
  }
  });
},
    onShareAppMessage: function () {
    return {
      title:app.globalData.title,
      path: 'pages/index/index'
    }
  }
})
