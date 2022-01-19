// 本页面显示文件列表，点击列表选项进入到下一层列表

const axios = require('../../utils/axios')

// pages/filelist/filelist.js
require('../../utils/axios')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    file: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onGetFileList()
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

  /**
   * 获取当前文件夹的文件列表，不知道能不能通过url参数传递文件夹名称
   */
  onGetFileList(filename) {
    new Promise(
      function(resolve, reject) {
        /*axios.post('.', {

        })*/
      }
    )
  },

  /**
   * 导航到下一个文件夹的方法
   * @param {文件夹名称} filename 
   */
  onGetNextFileList(filename) {
    /*axios.post('.', {
      filename: filename
    }).then(function(resposne) {
      console.log(resposne)
    }).catch(function(error) {
      console.log(error)
    })*/
  }
})