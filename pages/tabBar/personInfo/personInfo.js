const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    collectionArr: [],
    dateDiffer: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
    var value = wx.getStorageSync('collections');
    this.setData({
      collectionArr: JSON.parse(value)
    })
    var date = JSON.parse(value);
    var dateArr = [];
    for(var i=0; i<date.length; i++){
      dateArr.push(this.displayTimeInfo(new Date(date[i].date)));
    }
    this.setData({
      dateDiffer: dateArr
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

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  displayTimeInfo: function(pastTime){
    let formatDate;
    let timeDiff = new Date().getTime() - pastTime.getTime();
    let dayDiff = Math.floor((timeDiff) / (24 * 3600 * 1000));
    if (pastTime.getFullYear() == new Date().getFullYear() && pastTime.getMonth() == new Date().getMonth() && pastTime.getDate() == new Date().getDate()) {
      return formatDate = "今天";
    } else if (dayDiff < 30 && dayDiff > 0) {
      return formatDate = dayDiff + "天前"
    }
    else {
      return formatDate = pastTime.getFullYear() + '-' + Number(pastTime.getMonth() + 1) + '-' + pastTime.getDate();
    }
  }
})
