// pages/alls/alls.js
var app=getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{},
  onLoad: function (res) {
    console.log(res);
    this.setData({
      id:res.id,
    })
   
    var html1 = `<div style="text-align:center;">
    <img src="../../images/tm.jpg" width="100px" height="50px" />
</div>
<div style="line-height:50rpx;width:94%; margin-left:3%; font-size:30rpx; font-family:微软雅黑;">姓名：Tamara Borojevic</div>
<div style="line-height:50rpx;width:94%; margin-left:3%; font-size:30rpx; font-family:微软雅黑; color:#974A38; padding-bottom:30rpx;">英语语言学硕士</div>
<div style="width:100%; height:20rpx; background:#FFF;"></div>
<div class="jieshao">── ── 基本信息 ── ──</div>

<!--<import src="../../wxParse/wxParse.wxml"/> 
<div style="margin:0 auto;text-align:left; margin-bottom:20rpx; font-size:28rpx; font-family:微软雅黑; line-height:45rpx; width:94%; color:black; margin-left:3%; overflow:hidden;">
    <template is="wxParse" data="{{wxParseData:article.nodes}}"/>-->
<div style="line-height:50rpx;width:94%; margin-left:3%; font-size:30rpx; font-family:微软雅黑;">
  3年语言教学经验。
</div>
<div style="line-height:50rpx;width:94%; margin-left:3%; font-size:30rpx; font-family:微软雅黑;">
  将英语作为第二语言教给儿童、学生和成人。
</div>
<div style="line-height:50rpx;width:94%; margin-left:3%; font-size:30rpx; font-family:微软雅黑;">
  包含商务英语以及1-8年级教学。
</div>
<div style="line-height:50rpx;width:94%; margin-left:3%; font-size:30rpx; font-family:微软雅黑;">
 口译训练：同声传译本科和研究生课程。
</div>
<div style="line-height:50rpx;width:94%; margin-left:3%; font-size:30rpx; font-family:微软雅黑;">
 接受过伦敦斯坦训练学院的接待员培训。
</div>
<div style="line-height:50rpx;width:94%; margin-left:3%; margin-top:5%;font-size:30rpx; font-family:微软雅黑;">
 其他语言：西班牙语、克罗地亚语、塞尔维亚语。
</div>`;
    var html2 = `<p>页面2</p>`;
    var html3 = `<p>页面3</p>`;
    var html4 = `<p>页面4</p>`;
    var html5 = `<p>页面5</p>`;

    var that = this;
    var replyArr = [];
    replyArr.push(html1);
    replyArr.push(html2);
    replyArr.push(html3);
    replyArr.push(html4);
    replyArr.push(html5);
    WxParse.wxParse("article","html",replyArr[this.data.id],that,5);
    
      
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
