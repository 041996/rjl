//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    autoplay: true,
    duration: 1000,
    interval: 3000,
    indicatordots: true,
    index: 0,
  },
  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.request({
          url: '' + app.globalData.admin_id + '&cat_id=' + app.globalData.lianxi + '&lat=' + latitude + '&lon=' + longitude,
          success: function (res) {
            console.log(res);
            that.setData({
              cardList: res.data.data
            })
            for (var i = 0; i < res.data.data.length; i++) {
              res.data.data[i].lat = Number(res.data.data[i].lats);
              res.data.data[i].lon = Number(res.data.data[i].lons);
            }
            that.setData({
              cardList: that.data.cardList
            })
            console.log(that.data.cardList)
          }
        });

      },
    })

  },
  navigation: function (e) {
    console.log(e)
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
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

  callmeTap: function (e) {
    console.log(e.currentTarget.dataset.intro)
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.intro,
    })
  },

  liatofall: function (e) {
    wx.navigateTo({
      url: '../imgsall/imgsall?id=' + e.currentTarget.dataset.id
    })
  },

})
