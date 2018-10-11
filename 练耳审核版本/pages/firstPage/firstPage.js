Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickMenu1: function (e) {
    getApp().menu = 1
    getApp().serviceName = 'menu1'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu2: function (e) {
    getApp().menu = 2
    getApp().serviceName = 'menu2'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu3: function (e) {
    getApp().menu = 3
    getApp().serviceName = 'menu3'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu4:function(e){
    getApp().menu = 4
    getApp().serviceName = 'menu4'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu5: function (e) {
    getApp().menu = 5
    getApp().serviceName = 'menu5'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu6: function (e) {
    getApp().menu = 6
    getApp().serviceName = 'menu6'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu7: function (e) {
    getApp().menu = 7
    getApp().serviceName = 'menu7'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu8: function (e) {
    getApp().menu = 8
    getApp().serviceName = 'menu8'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu9: function (e) {
    getApp().menu = 9
    getApp().serviceName = 'menu9'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu10: function (e) {
    getApp().menu = 10
    getApp().serviceName = 'menu10'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu11: function (e) {
    getApp().menu = 11
    getApp().serviceName = 'menu11'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu12: function (e) {
    getApp().menu = 12
    getApp().serviceName = 'menu12'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  clickMenu13: function (e) {
    getApp().menu = 13
    getApp().serviceName = 'menu13'
    wx.navigateTo({
      url: '../../pages/Scale/Scale'
    })
  },
  wrongAns: function (e) {
    wx.navigateTo({
      url: '../../pages/wrongBook/wrongBook',
    })
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