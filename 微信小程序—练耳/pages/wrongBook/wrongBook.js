// pages/wrongBook/wrongBook.js

var serviceJs = ["menu1", "menu2", "menu3", "menu4", "menu5", "menu6", "menu7", "menu8", "menu9", "menu10","menu11", "menu12", "menu13"]
var listData; 
// = require("../../service/majorScale.js")

var showNo;

var num = 0;
Page({

  /**
   * 页面的初始数据
   */
  audioPlay: function () {
    this.setData({
      audioAction: {
        method: 'play'
      }
    });
  },
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    listData = require("../../service/"+serviceJs[getApp().menu]+".js")
    showNo = getApp().getId - 1;


    var chooseId = getApp().getChooseAns;
    var rightId = getApp().getRightAns;
    var waMp3 = getApp().getWaQues;
    var WATime = getApp().waTimes
    console.log(waMp3)
    Ques: waMp3
    YAns: chooseId
    RAns: rightId
    waTime: WATime
    this.setData({
      showNo: getApp().getId,
      Ques: waMp3,
      YAns: chooseId,
      RAns: rightId,
      waTime: WATime
    })
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