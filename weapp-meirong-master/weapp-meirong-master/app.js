//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})

//引入

wx.request({
  url: "http://www.huiwaizhi.com/json/renjl/",
  function myxhr(fun, url, postdata) {
    console.log(url),
    var s = '',
    var xhr = new XMLHttpRequest(),
    xhr.onreadystatechange = function () {
      switch (xhr.readyState) {
        case 0:
          console.log("xhr请求已初始化");
          break;
        case 1:
          console.log("xhr请求已打开");
          break;
        case 2:
          console.log("xhr请求已发送");
          break;
        case 3:
          console.log("xhr请求已响应");
          break;
        case 4:
          if (xhr.status == 200) {
            fun(xhr.responseText);
          } else {
            console.log("xhr请求失败：" + xhr.readyState);
          }
          break;
        default:
          break;
      }
    }
  if (arguments.length == 2) {
      xhr.open("GET", url);
      xhr.send();
    }
  if (arguments.length == 3) {
      xhr.open("POST", url);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(postdata);
    }
  }
function LogByJsonStr(JsonStr) {
    console.log(JsonStr)
  }

function ShowByJsonStr(JsonStr) {
    alert(JsonStr);
  }
myxhr（ShowByJsonStr，urlroot +‘json.asp ? j = listt2’);

})
})