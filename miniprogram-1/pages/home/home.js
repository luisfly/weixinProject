// pages/home/home.js
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

  },
  gotoFileList() {
    wx.navigateTo({
      url: '../filelist/filelist',
    })
  },
  /**
   * 看能否传入参数调整页面显示
   */
  allFileList() {
    wx.navigateTo({
      url: '../filelist/filelist',
    })
  },
  /**
   * 跳转到图片文件列表
   */
  picFileList() {
    wx.navigateTo({
      url: '../pic/pic',
    })
  },
  /**
   * 私人空间
   */
  prvFileList() {
    wx.navigateTo({
      url: '../privatePage/privatePage',
    })
  },
  /**
   * 上传
   */
  uploadFile() {
    wx.navigateTo({
      url: '../uploadPage/uploadPage',
    })
  }
})