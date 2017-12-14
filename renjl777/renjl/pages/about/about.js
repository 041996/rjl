// pages/about/about.js
var app=getApp()
Page({
  data:{
    // markers: [{
    //   latitude: 39.833376,
    //   longitude: 116.296404,
    //   iconPath: "../../images/icon.png",
    //   id: 0,
    //   width: 20,
    //   height: 20,
    //   title: "神州智慧星",
    //   color: "#89643C",
    //   title: '神州智慧星',
    //   desc: '我现在的位置'
    // }],
  },
  //地图
  // markertap: function () {
  //   var that = this
  //   wx.getLocation({
  //     type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  //     success: function (res) {
  //       console.log(res)
  //       var latitude = res.latitude;
  //       var longitude = res.longitude;
  //       wx.openLocation({
  //         latitude: that.data.markers[0].latitude,
  //         longitude: that.data.markers[0].longitude,
  //         scale: 1,
  //         name: "神州智慧星"
  //       })
  //     }
  //   });

  // },

  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this
    // wx.request({
    //   url:'https://xcxu.we-fs.com/index.php/api/goods/goodsInfo?admin_id=340&type=' + 4746 + '&code=3',
    //   success:function(res){
    //     console.log(res.data.data[0])
    //     that.setData({
    //       allimgcon:res.data.data[0]
    //     })
    //   }
    // })
      wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.request({
          url: '' + app.globalData.admin_id + '&cat_id=' + app.globalData.lianxi + '&lat=' + latitude + '&lon=' + longitude,
          success: function (res) {
            console.log(res);
            that.setData({
              allimgcon: res.data.data[0]
            })

            res.data.data[0].lat = Number(res.data.data[0].lats);
            res.data.data[0].lon = Number(res.data.data[0].lons);

                          that.setData({
                            allimgcon: that.data.allimgcon
                          })
                          console.log(that.data.allimgcon.lat)
                          console.log(that.data.allimgcon.lon)
                        }
          
        });
        
      },
    })
  },
  callme: function (res) {
    wx.makePhoneCall({
      phoneNumber: res.currentTarget.dataset.name,
    })
  },
  navigation: function (e) {
    console.log(e)
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(e)
        wx.openLocation({
          latitude: e.currentTarget.dataset.lat,
          longitude: e.currentTarget.dataset.lon,
          scale: 5,
          name: e.currentTarget.dataset.name
        })
      },
      complete: function (res) {
        console.log(res)
      }
    });
  },
//  callme:function(res){
//   wx.makePhoneCall({
//     phoneNumber:res.currentTarget.dataset.name,
//   })
//  },
//  navigation: function (e) {
//    console.log(e)
//    wx.getLocation({
//      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
//      success: function (res) {
//        console.log(e)
//        wx.openLocation({
//          latitude: e.currentTarget.dataset.lat,
//          longitude: e.currentTarget.dataset.lon,
//          scale: 5,
//          name: e.currentTarget.dataset.name
//        })
//      },
//      complete: function (res) {
//        console.log(res)
//      }
//    });
//  },
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