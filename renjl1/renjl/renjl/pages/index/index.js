//index.js
var app=getApp()
var catid=0
//获取应用实例



var app = getApp()
Page({
  data: {
    autoplay: true
  },
  onLoad: function () {
    var that = this
     console.log("/////////////////////");
          that.setData({
            items: [
              {
                "url": "../../images/tm1.jpg",
                "title": "Tamara Borojevic",
                "jingyan": "三年",
                "phonenumber": "400-821-8941"
              },
              {
                "url": "../../images/one1.jpg",
                "title": "Nemanja Pantelic",
                "jingyan": "两年",
                "phonenumber": "400-821-8941"
              },
              {
                "url": "http://www.51yuban.cn/img/2_1.jpg",
                "title": "无忧语伴",
                "jingyan": "五年"
                ,
                "phonenumber": "4008218941"
              },
              {
                "url": "http://www.51yuban.cn/img/2_1.jpg",
                "title": "无忧语伴",
                "jingyan": "十年"
                ,
                "phonenumber": "400-821-8941"
              }
            ]
          })

          that.setData({
            "imgs":[

              {
                "url":"http://www.51yuban.cn/img/1_1.jpg"
              },
              {
                "url": "http://www.51yuban.cn/img/1_2.jpg"
              },
              {
                "url": "http://www.51yuban.cn/img/1_3.jpg"
              },
              {
                "url": "http://www.51yuban.cn/img/1_4.jpg"
              },

            ]
         



          })  
     
  },  
  callme:function(e){
    wx.makePhoneCall({
      phoneNumber:e.currentTarget.dataset.name,
    })
  },
  list:function(e){
    console.log(e);
    wx.navigateTo({
      url: "../alls/alls?catid=" + e.currentTarget.dataset.catid + '&id=' + e.currentTarget.id 

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
    var that = this
    console.log("/////////////////////");
    that.setData({
      items: [
        {
          "url": "http://www.51yuban.cn/img/2_1.jpg",
          "title": "无忧语伴",
          "jingyan": "三年",
          "phonenumber": "176000172048"
        },
        {
          "url": "http://www.51yuban.cn/img/2_1.jpg",
          "title": "无忧语伴",
          "jingyan": "四年"
          ,
          "phonenumber": "1456286344752"
        },
        {
          "url": "http://www.51yuban.cn/img/2_1.jpg",
          "title": "无忧语伴",
          "jingyan": "五年"
          ,
          "phonenumber": "15236957894"
        },
        {
          "url": "http://www.51yuban.cn/img/2_1.jpg",
          "title": "无忧语伴",
          "jingyan": "十年"
          ,
          "phonenumber": "17600017249"
        }, {
          "url": "http://www.51yuban.cn/img/2_1.jpg",
          "title": "无忧语伴",
          "jingyan": "十年"
          ,
          "phonenumber": "17600017249"
        }
      ]
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
      name: "无忧语伴"
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
