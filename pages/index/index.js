//index.js
const attractionImgData = require('../../mockData/attractions.js');
//获取应用实例
const app = getApp()

Page({
  data: {
    attractionDes: attractionImgData.attractions,
    motto: 'Hello World2',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    location: { x: 11, y: 22 },

    image: { url: "http://owo7eevod.bkt.clouddn.com/04074f2c-8f04-4517-9f2d-5bc443a547b6-1505438929753.jpg"},

    currentImages :["http://owo7eevod.bkt.clouddn.com/mmexport1507781128234_polarr_1.jpg",
      "http://owo7eevod.bkt.clouddn.com/mmexport1507781184089_polarr.jpg",
      "http://owo7eevod.bkt.clouddn.com/mmexport1507781423202_polarr.jpg",
      "http://owo7eevod.bkt.clouddn.com/mmexport1513227383445_polarr.jpg",
      "http://owo7eevod.bkt.clouddn.com/mmexport1513227383445_polarr_1.jpg"]
   
  },
  //事件处理函数

  

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  previewImage: function(e) {
    wx.previewImage({
      current: 'http://owo7eevod.bkt.clouddn.com/DSC07623_polarr.jpg',
      urls: [
        "http://owo7eevod.bkt.clouddn.com/DSC07624_polarr.jpg",
        "http://owo7eevod.bkt.clouddn.com/DSC07639_1_polarr.jpg",
        "http://owo7eevod.bkt.clouddn.com/DSC07711_polarr.jpg",
        "http://owo7eevod.bkt.clouddn.com/DSC07840_polarr.jpg",
        "http://owo7eevod.bkt.clouddn.com/DSC07925_polarr.jpg",
      ] // 需要预览的图片http链接列表
    })
  },
  
  getLocation: function(e) {
    wx.scanCode({
      success: (res) => {
        console.log(res);
        this.setData({
          location: { x: JSON.stringify(res)}
        })
        
      }
    })
  }


})
